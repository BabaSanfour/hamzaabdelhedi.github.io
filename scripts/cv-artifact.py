#!/usr/bin/env python3
"""Record and verify the exact CV source and PDF delivered by the website."""
import argparse
import hashlib
import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def source_state(source):
    def git(*args):
        return subprocess.check_output(['git', '-C', str(source), *args]).decode().strip()
    names = sorted(git('ls-files', '*.tex', '*.cls', '*.sty', '*.bib', '*.png', '*.jpg', '*.jpeg', '*.pdf').splitlines())
    files = {name: digest(source / name) for name in names}
    return {
        'revision': git('rev-parse', 'HEAD'),
        'source_files': files,
        'source_sha256': hashlib.sha256(json.dumps(files, sort_keys=True).encode()).hexdigest(),
        'modified_source': bool(git('diff', 'HEAD', '--', *names)),
    }


def validate_pdf(pdf):
    data = pdf.read_bytes()
    if not data.startswith(b'%PDF-') or b'%%EOF' not in data[-1024:]:
        raise ValueError('CV is not a complete PDF')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('operation', choices=['record', 'verify'])
    parser.add_argument('site', type=Path)
    parser.add_argument('--source', type=Path)
    args = parser.parse_args()
    pdf = args.site / 'assets/files/Hamza_Abdelhedi_CV.pdf'
    manifest = pdf.with_suffix('.json')
    validate_pdf(pdf)
    if args.operation == 'record':
        if not args.source:
            parser.error('record requires --source')
        data = source_state(args.source)
        data.update(pdf_sha256=digest(pdf), built_at=datetime.now(timezone.utc).isoformat())
        manifest.write_text(json.dumps(data, indent=2) + '\n')
    else:
        data = json.loads(manifest.read_text())
        if data['pdf_sha256'] != digest(pdf):
            raise ValueError('CV PDF differs from its build manifest')
        if args.source:
            current = source_state(args.source)
            if any(data[key] != current[key] for key in current):
                raise ValueError('CV source changed: rebuild the PDF before release')
    print(f"CV artifact: PASS (source {data['revision'][:12]}, PDF {data['pdf_sha256'][:12]})")
    if data['modified_source']:
        print('CV source has local corrections; publish those upstream before deploying the website.')


if __name__ == '__main__':
    try:
        main()
    except (OSError, ValueError, KeyError, subprocess.CalledProcessError) as error:
        raise SystemExit(f'CV artifact: FAIL: {error}')
