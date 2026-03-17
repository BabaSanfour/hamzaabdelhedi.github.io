---
title: "Coord2Region: A Python Package for Mapping 3D Brain Coordinates to Atlas Labels, Literature, and AI Summaries"
slug: coord2region
authors: "Hamza Abdelhedi, Yorguin-Jose Mantilla-Ramos, Sina Esmaeili, Annalisa Pascarella, Vanessa Hadid, Karim Jerbi"
venue: "arXiv"
date: 2025-12-20
year: 2025
type: "Preprint"
featured: true
thumbnail: /images/minimal_coords.png
banner: /images/minimal_coords.png
arxiv_url: "https://arxiv.org/abs/2512.18165"
code_url: "https://github.com/BabaSanfour/Coord2Region"
project_url: "https://babasanfour.github.io/Coord2Region/"
zenodo_url: "https://zenodo.org/records/15048848"
keywords: ["Research", "Methods", "Open-source"]
bibtex: >
  @article{abdelhedi2025coord2region,
    title={Coord2Region: A Python Package for Mapping 3D Brain Coordinates to Atlas Labels, Literature, and AI Summaries},
    author={Abdelhedi, Hamza and Mantilla-Ramos, Yorguin-Jose and Esmaeili, Sina and Pascarella, Annalisa and Hadid, Vanessa and Jerbi, Karim},
    journal={arXiv preprint arXiv:2512.18165},
    year={2025}
  }
---

We present Coord2Region, an open-source Python package that streamlines coordinate-based neuroimaging workflows by automatically mapping 3D brain coordinates (e.g., MNI or Talairach) to anatomical regions across multiple atlases. The package links mapped coordinates to meta-analytic resources via the Neuroimaging Meta-Analysis Research Environment (NiMARE) , providing direct integration with Neurosynth and NeuroQuery. This directly connects coordinates and regions to the broader neuroimaging literature. In addition to atlas-based labeling and literature retrieval, Coord2Region offers an optional large language model (LLM) functionality that generates text summaries of linked studies and illustrative images of queried regions. These AI-assisted features are intended to support interpretation and exploration, while remaining clearly complementary to peer-reviewed literature and established neuroimaging tools. Coord2Region provides a unified pipeline with a robust command-line interface, flexible dataset management, and provider-agnostic LLM utilities, and it supports both single-coordinate and high-throughput batch queries with nearest-region fallback for volume and surface atlases. Furthermore, Coord2Region includes a web interface for interactive configuration (via JSON Schema forms) and cloud execution (via Hugging Face), enabling users to build YAML configurations and run analyses in-browser without local installation. Together, these capabilities lower friction, reduce manual errors, and improve reproducibility in coordinate-centric neuroimaging workflows, promoting more robust and transparent research practices.
