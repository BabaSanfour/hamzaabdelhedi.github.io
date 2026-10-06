# Teaching photograph derivatives

Source: `site/images/confs/main2024_workshop_me.jpg` (1713 × 1002, 399,956 bytes).
This existing site photograph appears in the October 2024 MAIN story and
documents Hamza teaching representational similarity analysis. The pilot
reuses it on Home and Teaching through the `main-rsa` record. No photographer
credit is recorded in the existing source; none has been invented.

The full frame is retained, including the instructor, projected slides and
audience. No focal crop or CSS `object-fit: cover` is applied; intrinsic
dimensions reserve the photograph's aspect ratio. The caption explicitly
identifies MAIN, Montréal, October 2024. Adjacent 2026 resources describe their
own events and do not inherit that photo's context.

| File | Dimensions | Encoded bytes |
| --- | --- | --- |
| `main2024-workshop-640.webp` | 640 × 374 | 26,818 |
| `main2024-workshop-960.webp` | 960 × 562 | 52,380 |
| `main2024-workshop-1280.webp` | 1280 × 749 | 85,676 |

Generate with `python3 scripts/prepare-teaching-image.py` (Python 3 + Pillow).
The script honors EXIF orientation, resizes without cropping, and encodes WebP
at quality 82. These committed assets add at most 85,676 bytes for the selected
photo source per page; the browser chooses one source through `srcset`/`sizes`.
The three software illustrations are inline SVG in the shared Bookshop
`visual-icon` include, so they add no separate image requests.
