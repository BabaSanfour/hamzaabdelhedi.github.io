#!/usr/bin/env bash
# Build in a new directory so latexmk cannot reuse an older PDF.
set -euo pipefail
repo_root="$(cd "$(dirname "$0")/.." && pwd)"
cv_source="$(cd "${1:-$repo_root/_cv-src}" && pwd)"
site_root="${2:-$repo_root/site}"
command -v latexmk >/dev/null || { echo 'Install TeX Live/MacTeX with latexmk first.' >&2; exit 1; }
ruby "$repo_root/scripts/validate-cv-source.rb" "$cv_source"
build_dir="$(mktemp -d "${TMPDIR:-/tmp}/website-cv.XXXXXX")"
trap 'rm -rf "$build_dir"' EXIT
(
  cd "$cv_source"
  latexmk -pdf -file-line-error -halt-on-error -interaction=nonstopmode -outdir="$build_dir" main.tex
)
bash "$repo_root/scripts/sync-cv-pdf.sh" "$build_dir/main.pdf" "$site_root" "$cv_source"
