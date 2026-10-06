"""Encode responsive MAIN teaching photos; originals and framing stay intact.

Run manually with Python 3 and Pillow. Committed outputs are used by Jekyll;
neither Pillow nor this script is required for deployment.
"""
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "site/images/confs/main2024_workshop_me.jpg"
OUTPUT = ROOT / "site/images/optimized"


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    with Image.open(SOURCE) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        for width in (640, 960, 1280):
            height = round(image.height * width / image.width)
            derivative = image.resize((width, height), Image.Resampling.LANCZOS)
            path = OUTPUT / f"main2024-workshop-{width}.webp"
            derivative.save(path, "WEBP", quality=82, method=6)
            print(f"{path.relative_to(ROOT)}: {width} × {height}, {path.stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
