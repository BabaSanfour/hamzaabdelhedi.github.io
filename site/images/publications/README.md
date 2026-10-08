# Verified publication figures

These are full-frame figures from the associated publications, displayed on
their detail pages, as compact previews throughout the publication archive,
and for the four selected papers on Home.
They are not generated illustrations. Original labels,
panels, colors and geometry are preserved; derivatives only resize and encode.
The site provides concise explanatory captions, author/year attribution,
source/figure links, confirmed license links where available, and a local
full-size view. The existing
`minimal_*` decorative site images are not used as scientific figures.

## Coord2Region workflow

- Source: [Abdelhedi et al., arXiv:2512.18165v1, Figure 1](https://arxiv.org/html/2512.18165v1#S2.F1).
- Original asset: <https://arxiv.org/html/2512.18165v1/workflow.jpg>.
- Downloaded 2026-10-06: 7942 × 6169 JPEG, 2,184,487 bytes.
- SHA-256: `076cc383dfd2ae355c554f354b2dbc6f9e64f1b0aeb33a2b1efb94632cdc8276`.
- License stated on the preprint: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- The source depicts the preprint's workflow, including optional AI-assisted
  summaries and illustrative images. It is not a validation result or an
  assertion that generated images are anatomical ground truth.

## Resting-state MEG and verbal learning framework

- Source: [Oswald et al., iScience (2026), Figure 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13562390/#fig1).
- Original asset: <https://cdn.ncbi.nlm.nih.gov/pmc/blobs/6c21/13562390/ed337f372878/gr1.webp>.
- Downloaded 2026-10-06: 1600 × 1449 WebP, 121,798 bytes.
- SHA-256: `fcda155ebc7a0b0afba9ef3ef42700af62f25ecbb893e186f2e5f11b73653a20`.
- License stated by the article: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
- The figure shows the research hypothesis, verbal learning task and analysis
  framework. Its arrows describe the hypothesis and workflow, not demonstrated
  causal effects. The 1600px WebP is an exact copy of the downloaded asset.

## Responsive files and reproduction

| File | Dimensions | Encoded bytes |
| --- | --- | --- |
| `coord2region-workflow-640.webp` | 640 × 497 | 28,516 |
| `coord2region-workflow-960.webp` | 960 × 746 | 49,930 |
| `coord2region-workflow-1600.webp` | 1600 × 1243 | 98,856 |
| `resting-state-framework-640.webp` | 640 × 580 | 49,640 |
| `resting-state-framework-960.webp` | 960 × 869 | 83,652 |
| `resting-state-framework-1600.webp` | 1600 × 1449 | 121,798 |

Download the original assets into a temporary directory under the names
`coord2region-workflow.jpg` and `resting-state-framework.webp`, then run:

```bash
python3 scripts/prepare-publication-figures.py /path/to/downloads
```

The script requires Pillow, verifies original SHA-256 hashes before encoding,
and uses Lanczos resizing and WebP quality 90. No source images are cropped,
retouched or recomposed. Jekyll consumes the committed files without network
access or Pillow. Each detail page loads one responsive source lazily (at most
98,856 or 121,798 bytes); full-size links use the existing largest derivative.
The publication archive uses its own small previews (see below).
Home uses responsive previews for its four selected papers;
source/license credits live on the linked detail pages.

## Home selected publications

Home features the task-optimized face-familiarity paper, EEG/MEG trajectory
primer, MEG foundation-model roadmap, and published MEG/ANN review.
All four use Figure 1 from their associated paper, retain the full
frame, and carry author/year, source and CC BY 4.0 links on their detail pages.
Home and archive previews link to these credited detail figures. The roadmap intentionally
uses the pinned v1 Figure 1; its visible label identifies the version, since
the later v2 no longer includes this pathways diagram.
The overview diagrams explain study design, methods or literature scope;
the captions do not present their illustrations as measured findings.

### Task-optimized networks and face familiarity

- Source: [Abdelhedi, Bakhtiari and Jerbi (2026), bioRxiv v1, Figure 1](https://www.biorxiv.org/content/10.64898/2026.09.08.750266v1.full#F1).
- Original asset: <https://www.biorxiv.org/content/biorxiv/early/2026/09/09/2026.09.08.750266/F1.large.jpg>.
- Downloaded 2026-10-07: 1280 × 1122 JPEG, 166,539 bytes.
- SHA-256: `77079476198fbb7431f2b10640957c7dfd5bce5a1a6bd3ce7b07aae928301c9b`.
- License: CC BY 4.0, confirmed in the preprint's `DC.Rights` metadata.
- This is the study-design diagram, including stimuli, source-resolved MEG,
  learning objectives, and time-resolved representational similarity analysis.
  The largest derivative stays at the original 1280px width; no upscaling.

### From Signals to Trajectories

- Source: [Hadid et al. (2026), arXiv:2609.32315v1, Figure 1, PDF page 8](https://arxiv.org/pdf/2609.32315v1#page=8).
- Original download: <https://arxiv.org/pdf/2609.32315v1> (4,025,650 bytes).
- PDF SHA-256: `557d357ebf1fc8ecbb0018ca856b9bf5efebcd2335d2fbf6927fe08fe29b94df`.
- Downloaded/extracted 2026-10-07: complete embedded figure, 2343 × 2173 RGB
  PNG, 2,173,684 bytes. No page text or caption is included in the image.
- Extracted PNG SHA-256: `bfdf71621b51487ca10ddd4fc376b804dc08c7d5cc1ccaf9f9d39b1446bdd466`.
- License: CC BY 4.0, confirmed by the license link on the arXiv record.
- The ten-step workflow covers data preparation, PCA and trajectory analysis,
  including component interpretation and validation. Examples in the diagram
  explain the method rather than report empirical results.

### A Roadmap for MEG Foundation Models

- Source: [Thölke et al. (2026), arXiv:2609.04461v1, Figure 1](https://arxiv.org/html/2609.04461v1#S1.F1).
- Original asset: <https://arxiv.org/html/2609.04461v1/figure1.svg>.
- Downloaded 2026-10-07: SVG with viewBox `0 0 1131.12 547.92`, 128,322 bytes.
- SHA-256: `9ed294be5095789795bfadbe9c6f9266e956d49949e9e6e32c6d07881ced72dc`.
- License: CC BY 4.0, stated on the arXiv HTML page.
- The committed SVG is byte-identical to the source. It is self-contained,
  uses vector paths, and has no scripts or external resources. One scalable
  source serves the Home/detail viewports and full-size link. The archive-only
  288px raster preview added below is derived from this SVG.
- The diagram compares potential development pathways and their trade-offs,
  not observed performance rankings.

### Published MEG/ANN review

- Source: [Dehgan et al. (2025), Journal of Neural Engineering 22, 031001, published Figure 1](https://iopscience.iop.org/article/10.1088/1741-2552/addd4a#jneaddd4af1).
- DOI: [10.1088/1741-2552/addd4a](https://doi.org/10.1088/1741-2552/addd4a).
- Original asset: <https://content.cld.iop.org/journals/1741-2552/22/3/031001/revision2/jneaddd4af1_hr.jpg>.
- Downloaded 2026-10-07: 1724 × 890 JPEG, 110,184 bytes.
- SHA-256: `b9d74aaf17137c2b4bc65058e417a8c6b233eef243ccbc8efba365d630a68628`.
- License: CC BY 4.0, confirmed by the publisher's original-content notice.
  On-page attribution includes author/year, journal citation and DOI.
- The screening flowchart contains the final 119-study corpus: classification
  70, modeling 16, other 33. The published figure and caption agree with the
  existing abstract. Older arXiv charts are not substituted.

### Additional responsive files

| File | Dimensions | Encoded bytes |
| --- | --- | --- |
| `task-optimized-design-640.webp` | 640 × 561 | 53,268 |
| `task-optimized-design-960.webp` | 960 × 842 | 95,734 |
| `task-optimized-design-1280.webp` | 1280 × 1122 | 143,244 |
| `signals-to-trajectories-workflow-640.webp` | 640 × 594 | 68,064 |
| `signals-to-trajectories-workflow-960.webp` | 960 × 890 | 118,676 |
| `signals-to-trajectories-workflow-1600.webp` | 1600 × 1484 | 226,058 |
| `meg-ann-review-landscape-640.webp` | 640 × 330 | 23,116 |
| `meg-ann-review-landscape-960.webp` | 960 × 496 | 39,938 |
| `meg-ann-review-landscape-1600.webp` | 1600 × 826 | 81,508 |
| `meg-foundation-pathways.svg` | scalable | 128,322 |

For reproduction, download the sources above into one directory, using the
names `task-optimized-design.jpg`, `signals-to-trajectories.pdf`,
`meg-foundation-pathways.svg` and `meg-ann-review-landscape.jpg`. Extract the
primer's full embedded Figure 1 with Poppler (tested with `pdfimages` 26.09.0):

```bash
pdfimages -f 8 -l 8 -png /path/to/downloads/signals-to-trajectories.pdf /path/to/downloads/trajectories
python3 scripts/prepare-publication-figures.py /path/to/downloads
```

The script hashes every available documented input before processing it,
uses Pillow/Lanczos and WebP quality 90 for the raster derivatives, avoids
upscaling, and copies the verified SVG unchanged. The extracted RGB image is
`trajectories-000.png`; the separate opacity mask is not a second figure.
No figures are cropped, reconstructed, recolored or generated. Jekyll uses
only the committed assets and needs no external downloads or image tools.
The ten new assets total 977,928 bytes; at most one source loads per page.
These are encoded file sizes, not network-performance measurements.

## Publication archive

All 15 publication records now have an actual figure from their associated
paper or thesis. The remaining sources are listed below. No generic
site illustration, generated scientific graphic, first-page substitute or
placeholder is used. Full figures remain intact, including every panel, axis,
label and color scale. Where figures are vector or mixed content inside a
PDF, the extraction rectangle excludes surrounding page text without trimming
the figure. Detail captions distinguish workflow diagrams from findings.

Source versions and licenses were checked on 2026-10-08:

| Asset stem | Source and figure | Reuse information |
| --- | --- | --- |
| `pnpl-2026-splits` | [Mantegna et al., arXiv:2609.03231v1, Figure 1](https://arxiv.org/html/2609.03231v1#S1.F1); [original PNG](https://arxiv.org/html/2609.03231v1/pnplcompetitionfigure2.png) | CC BY 4.0, stated on arXiv HTML |
| `pnpl-2025-overview` | [Landau et al., arXiv:2506.10165v1, Figure 1](https://arxiv.org/html/2506.10165v1#S1.F1); [original PNG](https://arxiv.org/html/2506.10165v1/figures/libribrainfig0.png) | CC BY 4.0, stated on arXiv HTML; caption identifies the preprint version |
| `aict-methodology` | [Oswald et al., arXiv:2509.19254v1, Figure 1, PDF page 10](https://arxiv.org/pdf/2509.19254v1#page=10) | CC BY-NC-ND 4.0, linked on the arXiv record; complete unaltered diagram, technical resizing/encoding only |
| `class-imbalance-methods` | [Thölke et al., NeuroImage 277, 120253, Figure 1](https://doi.org/10.1016/j.neuroimage.2023.120253), PDF page 3; [published PDF at CNR](https://iris.cnr.it/retrieve/fa6bb37e-fb14-4dcb-b65b-f483c8a87889/Th%C3%B6lke_et_al_2023.pdf) | CC BY-NC-ND 4.0 printed on page 1; complete unaltered figure, technical resizing/encoding only |
| `cognitive-decline-participants` | [Mekki Berrada et al., Research Square v2, Figure 1](https://www.researchsquare.com/article/rs-4619161/v2), PDF page 40; [versioned PDF](https://assets-eu.researchsquare.com/files/rs-4619161/v2_covered_c346e73a-73e3-410a-9570-e6c5e4509f13.pdf) | CC BY 4.0 on the v2 record. Original labels/counts are reproduced verbatim in the image, including its PD group labels; no correction is inferred from prose |
| `ccn-2022-face-representations` | [Abdelhedi and Jerbi, CCN 2022, Figure 1, PDF page 3](https://2022.ccneuro.org/proceedings/0000012.pdf?pn=1320#page=3) | CC BY 3.0 on the [official paper record](https://2022.ccneuro.org/view_paper9ea6.html?PaperNum=1320) |
| `ccn-2024-face-dynamics` | [Abdelhedi, Bakhtiari and Jerbi, CCN 2024, Figure 2, PDF page 3](https://2024.ccneuro.org/pdf/596_Paper_authored_ccn2024_final_final.pdf#page=3) | CC BY 4.0 under the [conference submission copyright policy](https://2024.ccneuro.org/call-for-papers/#Copyright) |
| `pnpl-reflections-leaderboard` | [Elvers et al., official competition retrospective, Figure 1, PDF page 3](https://neural-processing-lab.github.io/2025-libribrain-competition/publications/2025-pnpl-competition-reflections.pdf#page=3) | PDF credits © 2026 Elvers, Landau, Mantegna et al. Reproduced for the coauthor's site at his request. No article-specific CC license is asserted: the official lab lists PMLR, but this PDF still has a placeholder volume |
| `thesis-study-outline` | [Abdelhedi, Université de Montréal thesis](https://hdl.handle.net/1866/41128), Figure 2.1, printed page 22 / [PDF page 48](https://umontreal.scholaris.ca/bitstreams/21f1690f-8b6b-4879-983b-38b8769ede05/download#page=48) | PDF copyright © Hamza Abdelhedi 2024; title page March 2025. Author-requested reproduction of his own study diagram; no CC license invented. Existing publication date retained |

### Download and extraction integrity

The two original PNG hashes and all extracted figure hashes are pinned in
`scripts/prepare-publication-figures.py`. PDF source hashes:

| Download filename | Bytes | SHA-256 |
| --- | --- | --- |
| `aict.pdf` | 3,785,283 | `f2440bdf0da321ba22ffafeb0f0dcd5187fad47f823a230f7d29f538d973216c` |
| `imbalance.pdf` | 3,418,320 | `7c2dd752ba1abceeae15fa5ce7e9a75cd3d368e81b4e121cee8791a8ae2969e8` |
| `cognitive.pdf` | 1,364,419 | `f8e1d3df8f2d588dab4bea6d48da74d595dbd0ab2ae1e8f061c668b6dd9d486c` |
| `ccn-2022.pdf` | 451,531 | `a862c97e99bb46fabaa4514c3cbfbd1eb6014a6b309d5e4350cb683329d741be` |
| `ccn-2024.pdf` | 2,810,769 | `e8738a4696d7d6215ed5006a1f8c8074ff7a8c0c03e85cbd6727c3aa922c1677` |
| `pnpl-reflections.pdf` | 567,404 | `ef2b8d76a810b99a3d04d20005b3bb2f58308ccaee341756a15b379f6faa299b` |
| `thesis.pdf` | 30,943,204 | `375e6b247025c1a611b3df405da749326368283e0eb5ab68392b82679899fead` |

Download the linked originals using these filenames into one source directory.
Save the two original PNGs as `pnpl-2026-splits.png` and
`pnpl-2025-overview.png`. In that directory, reproduce the figure extractions
with Poppler (26.09.0):

```bash
pdfimages -f 10 -l 10 -png aict.pdf aict-framework
pdfimages -f 3 -l 3 -j imbalance.pdf imbalance-methods
pdfimages -f 3 -l 3 -png ccn-2022.pdf ccn-2022
pdfimages -f 48 -l 48 -png thesis.pdf thesis-figure
cp thesis-figure-000.png thesis-study-outline.png
pdftoppm -f 3 -l 3 -scale-to 4800 -x 1888 -y 1776 -W 1570 -H 680 -singlefile -png ccn-2024.pdf ccn-2024-figure2
pdftoppm -f 40 -l 40 -scale-to 2400 -x 90 -y 204 -W 1700 -H 718 -singlefile -png cognitive.pdf cognitive-flowchart
pdftoppm -f 3 -l 3 -scale-to 2400 -x 280 -y 280 -W 1305 -H 576 -singlefile -png pnpl-reflections.pdf pnpl-reflections-leaderboard
```

Then run the preparation scripts from the repository root:

```bash
python3 scripts/prepare-publication-figures.py /path/to/sources
python3 scripts/prepare-publication-previews.py
```

The first script makes the 640/960/1600px detail derivatives, capped at the
source width. The CCN 2022 image is only 576px wide and is never upscaled.
The second script makes separate 288px `*-preview.webp` files from the largest
committed local figures, using Pillow/Lanczos at WebP quality 85. The roadmap
SVG is rendered at 288px with `rsvg-convert`, retaining its full viewBox.
These previews support the archive's 96px slot at 3x pixel density and are
referenced only through optional `figure.preview_src`. Existing Home and detail
source selection is unchanged. Jekyll has no image-tool or network dependency.

All 15 archive previews total **156,194 encoded bytes**, versus 709,128 bytes
for the smallest existing responsive figures (78% smaller). Offscreen images
remain lazy; this is a sum of asset sizes, not a transfer-time measurement.
Native image links open the detail-page figure with caption, provenance and
full-size access. The archive adds no credits beneath its compact previews.
An absent or empty `figure.src` yields a full-width text record with no image
slot; omitting `preview_src` falls back to the figure's responsive sources.
