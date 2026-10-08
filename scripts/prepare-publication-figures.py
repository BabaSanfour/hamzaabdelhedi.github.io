"""Resize verified publication figures without cropping or changing their content.

Run with Python 3 + Pillow and a directory containing the downloaded/extracted
sources listed in site/images/publications/README.md. Only available sources
are processed, so each selection can be reproduced independently. Jekyll uses committed
outputs and has no dependency on this script, Pillow, or remote sources.
"""
import argparse
import hashlib
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCES = {
    "coord2region-workflow.jpg": ("076cc383dfd2ae355c554f354b2dbc6f9e64f1b0aeb33a2b1efb94632cdc8276", "coord2region-workflow"),
    "resting-state-framework.webp": ("fcda155ebc7a0b0afba9ef3ef42700af62f25ecbb893e186f2e5f11b73653a20", "resting-state-framework"),
    "task-optimized-design.jpg": ("77079476198fbb7431f2b10640957c7dfd5bce5a1a6bd3ce7b07aae928301c9b", "task-optimized-design"),
    "trajectories-000.png": ("bfdf71621b51487ca10ddd4fc376b804dc08c7d5cc1ccaf9f9d39b1446bdd466", "signals-to-trajectories-workflow"),
    "meg-ann-review-landscape.jpg": ("b9d74aaf17137c2b4bc65058e417a8c6b233eef243ccbc8efba365d630a68628", "meg-ann-review-landscape"),
    "meg-foundation-pathways.svg": ("9ed294be5095789795bfadbe9c6f9266e956d49949e9e6e32c6d07881ced72dc", "meg-foundation-pathways"),
    "pnpl-2026-splits.png": ("f34e7a982d2b9c0f7be57cf02a5e876d4b6ebc5f669942f1adb8c867ab72ba68", "pnpl-2026-splits"),
    "pnpl-2025-overview.png": ("4380c40eb0cf2b83ca91c7610eddae50c85ddbf1034d5a1016cf46ffdf34feab", "pnpl-2025-overview"),
    "aict-framework-000.png": ("714a1d8b875df0c19062f75e769379e310953b50d5a064e9c71a9cff16baa741", "aict-methodology"),
    "imbalance-methods-000.jpg": ("5a4d702e8745aba5320736fcc5279ec52c0ec4de8835b4759e59622f194f08c6", "class-imbalance-methods"),
    "cognitive-flowchart.png": ("5d96d1d7ee3d8ef8335eb95e091ec0934a67cdb9c741cd5fcb378491ba5addbe", "cognitive-decline-participants"),
    "ccn-2022-000.png": ("449fe6808d41f1c655707f656973862de7074dc9b8e2dc14eb864ac7012ce806", "ccn-2022-face-representations"),
    "ccn-2024-figure2.png": ("c89c97070a9887bbe3286278fbd211953796140ce6a21e5ac21ad76e69754bbd", "ccn-2024-face-dynamics"),
    "pnpl-reflections-leaderboard.png": ("ccc1c2950d6a9bcea19c3edb29f727e120fe0caad9bd7d235a5304b5dc3f7ecb", "pnpl-reflections-leaderboard"),
    "thesis-study-outline.png": ("9fd796913b804c30793bbc6ea898bf14fdef2969d4b902e69e77b07eb91a852d", "thesis-study-outline"),
}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source_dir", type=Path)
    args = parser.parse_args()
    output = ROOT / "site/images/publications"
    output.mkdir(parents=True, exist_ok=True)
    available = [name for name in SOURCES if (args.source_dir / name).is_file()]
    if not available:
        parser.error("No documented source figures found in source_dir")
    for filename in available:
        expected_hash, stem = SOURCES[filename]
        source = args.source_dir / filename
        if hashlib.sha256(source.read_bytes()).hexdigest() != expected_hash:
            raise ValueError(f"Source changed; verify provenance before resizing: {source}")
        if source.suffix == ".svg":
            destination = output / f"{stem}.svg"
            destination.write_bytes(source.read_bytes())
            print(f"{destination.relative_to(ROOT)}: unchanged vector, {destination.stat().st_size:,} bytes")
            continue
        with Image.open(source) as original:
            image = original.convert("RGB")
            # Keep the smaller Task-optimized source sharp without upscaling.
            widths = sorted({min(width, original.width) for width in (640, 960, 1600)})
            for width in widths:
                height = round(image.height * width / image.width)
                destination = output / f"{stem}-{width}.webp"
                if width == original.width and source.suffix == ".webp":
                    destination.write_bytes(source.read_bytes())
                else:
                    image.resize((width, height), Image.Resampling.LANCZOS).save(
                        destination, "WEBP", quality=90, method=6
                    )
                print(f"{destination.relative_to(ROOT)}: {width} × {height}, {destination.stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
