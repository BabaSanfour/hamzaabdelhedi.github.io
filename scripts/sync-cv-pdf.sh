#!/usr/bin/env bash
set -euo pipefail

source_pdf="${1:-_cv-src/main.pdf}"
site_root="${2:-site}"
canonical_pdf="$site_root/assets/files/Hamza_Abdelhedi_CV.pdf"
legacy_pdf="$site_root/Hamza_Abdelhedi_cv.pdf"

if [[ ! -s "$source_pdf" ]]; then
  echo "Missing or empty compiled CV: $source_pdf" >&2
  exit 1
fi

if [[ "$(head -c 5 "$source_pdf")" != "%PDF-" ]]; then
  echo "Compiled CV is not a PDF: $source_pdf" >&2
  exit 1
fi

if ! command -v file >/dev/null 2>&1; then
  echo "file is required to validate the compiled CV" >&2
  exit 1
fi
if [[ "$(file --brief --mime-type "$source_pdf")" != "application/pdf" ]]; then
  echo "Compiled CV has a non-PDF MIME type: $source_pdf" >&2
  exit 1
fi

mkdir -p "$(dirname "$canonical_pdf")"
cp "$source_pdf" "$canonical_pdf"
cp "$source_pdf" "$legacy_pdf"

for output_pdf in "$canonical_pdf" "$legacy_pdf"; do
  if [[ ! -s "$output_pdf" ]]; then
    echo "Missing or empty copied CV: $output_pdf" >&2
    exit 1
  fi
  if ! cmp -s "$source_pdf" "$output_pdf"; then
    echo "Copied CV does not match the compiled source: $output_pdf" >&2
    exit 1
  fi
done

echo "CV PDF synchronized: $(wc -c < "$source_pdf" | tr -d ' ') bytes"
