---
title: "Coord2Region: A Python Package for Mapping 3D Brain Coordinates to Atlas Labels, Literature, and AI Summaries"
slug: coord2region
authors: "Hamza Abdelhedi, Yorguin-Jose Mantilla-Ramos, Sina Esmaeili, Annalisa Pascarella, Vanessa Hadid, Karim Jerbi"
venue: "arXiv"
date: 2025-12-20
year: 2025
type: "preprint"
featured: false
thumbnail: /images/minimal_coords.png
banner: /images/minimal_coords.png
figure:
  preview_src: /images/publications/coord2region-workflow-preview.webp
  title: "From coordinates to regions and literature"
  src: /images/publications/coord2region-workflow-960.webp
  full_src: /images/publications/coord2region-workflow-1600.webp
  width: 960
  height: 746
  sources:
    - {src: /images/publications/coord2region-workflow-640.webp, width: 640}
    - {src: /images/publications/coord2region-workflow-960.webp, width: 960}
    - {src: /images/publications/coord2region-workflow-1600.webp, width: 1600}
  alt: "Workflow diagram linking atlas names and 3D coordinates to atlas mapping, study retrieval, and optional AI-assisted summaries and illustrative images."
  caption: "The preprint's workflow connects anatomical labeling with relevant studies. Blue boxes are inputs, yellow boxes are functions, green boxes are classes, and pink boxes are outputs. The AI-assisted summary and image branches are optional interpretation aids."
  credit: "Abdelhedi et al. (2025)"
  source_label: "Preprint Figure 1"
  source_url: "https://arxiv.org/html/2512.18165v1#S2.F1"
  license: "CC BY 4.0"
  license_url: "https://creativecommons.org/licenses/by/4.0/"
arxiv_url: "https://arxiv.org/abs/2512.18165"
code_url: "https://github.com/BabaSanfour/Coord2Region"
project_url: "https://babasanfour.github.io/Coord2Region/"
zenodo_url: "https://zenodo.org/records/15048848"
keywords: ["Research", "Methods", "Open-source"]
id: "coord2region"
status: "preprint"
doi: "10.48550/arXiv.2512.18165"
related_software: ["coord2region"]
abstract: |-
  We present Coord2Region, an open-source Python package that streamlines coordinate-based neuroimaging workflows by automatically mapping 3D brain coordinates (e.g., MNI or Talairach) to anatomical regions across multiple atlases. The package links mapped coordinates to meta-analytic resources via the Neuroimaging Meta-Analysis Research Environment (NiMARE) , providing direct integration with Neurosynth and NeuroQuery. This directly connects coordinates and regions to the broader neuroimaging literature. In addition to atlas-based labeling and literature retrieval, Coord2Region offers an optional large language model (LLM) functionality that generates text summaries of linked studies and illustrative images of queried regions. These AI-assisted features are intended to support interpretation and exploration, while remaining clearly complementary to peer-reviewed literature and established neuroimaging tools. Coord2Region provides a unified pipeline with a robust command-line interface, flexible dataset management, and provider-agnostic LLM utilities, and it supports both single-coordinate and high-throughput batch queries with nearest-region fallback for volume and surface atlases. Furthermore, Coord2Region includes a web interface for interactive configuration (via JSON Schema forms) and cloud execution (via Hugging Face), enabling users to build YAML configurations and run analyses in-browser without local installation. Together, these capabilities lower friction, reduce manual errors, and improve reproducibility in coordinate-centric neuroimaging workflows, promoting more robust and transparent research practices.
bibtex: >
  @article{abdelhedi2025coord2region,
    title={Coord2Region: A Python Package for Mapping 3D Brain Coordinates to Atlas Labels, Literature, and AI Summaries},
    author={Abdelhedi, Hamza and Mantilla-Ramos, Yorguin-Jose and Esmaeili, Sina and Pascarella, Annalisa and Hadid, Vanessa and Jerbi, Karim},
    journal={arXiv preprint arXiv:2512.18165},
    year={2025}
  }
related_research: ["eeg-meg-foundation-models"]
---
