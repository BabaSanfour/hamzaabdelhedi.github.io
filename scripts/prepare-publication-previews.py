"""Create compact archive-only previews from the verified local publication figures.

Run after prepare-publication-figures.py. Requires Pillow and rsvg-convert for
the vector roadmap. Originals, Home sources and detail-page sources stay intact.
The 288px output supports the archive's largest 96px slot at 3x pixel density.
"""
from pathlib import Path
import re
import subprocess
import tempfile

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DIRECTORY = ROOT / "site/images/publications"


def save_preview(source, destination):
    with Image.open(source) as original:
        # Composite transparency against the same white used by the figure link.
        rgba = original.convert("RGBA")
        image = Image.new("RGBA", rgba.size, "white")
        image.alpha_composite(rgba)
        image = image.convert("RGB")
        width = min(288, image.width)
        height = round(image.height * width / image.width)
        image.resize((width, height), Image.Resampling.LANCZOS).save(
            destination, "WEBP", quality=85, method=6
        )
        print(f"{destination.relative_to(ROOT)}: {width} × {height}, {destination.stat().st_size:,} bytes")


def main():
    sources = {}
    for source in DIRECTORY.glob("*.webp"):
        match = re.fullmatch(r"(.+)-(\d+)\.webp", source.name)
        if match:
            stem, width = match.group(1), int(match.group(2))
            if stem not in sources or width > sources[stem][0]:
                sources[stem] = (width, source)
    for stem, (_, source) in sorted(sources.items()):
        save_preview(source, DIRECTORY / f"{stem}-preview.webp")
    for source in sorted(DIRECTORY.glob("*.svg")):
        with tempfile.TemporaryDirectory() as scratch:
            rendered = Path(scratch) / "figure.png"
            subprocess.run(
                ["rsvg-convert", "--width", "288", "--keep-aspect-ratio", "--output", str(rendered), str(source)],
                check=True,
            )
            save_preview(rendered, DIRECTORY / f"{source.stem}-preview.webp")


if __name__ == "__main__":
    main()
