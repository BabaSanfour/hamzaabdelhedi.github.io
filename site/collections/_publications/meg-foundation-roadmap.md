---
id: "meg-foundation-roadmap"
slug: "meg-foundation-roadmap"
title: "A Roadmap for MEG Foundation Models"
authors: "Philipp Thölke, Hamza Abdelhedi, Yorguin Mantilla-Ramos, Fouad Lbakali, Oumayma Gharbi, Catherine Duclos, Annalisa Pascarella, Vanessa Hadid, Oiwi Parker Jones, Karim Jerbi"
year: 2026
date: 2026-09-03
venue: "arXiv"
type: "preprint"
status: "preprint"
featured: true
figure:
  preview_src: /images/publications/meg-foundation-pathways-preview.webp
  title: "Pathways to MEG foundation models"
  src: /images/publications/meg-foundation-pathways.svg
  full_src: /images/publications/meg-foundation-pathways.svg
  width: 1131
  height: 548
  alt: "Diagram of routes toward a reusable MEG foundation model, including MEG-native pretraining, EEG model adaptation and continued pretraining, cross-modal training, and transfer from generic time-series models, with trade-offs in data, compute and MEG-specific expressiveness."
  caption: "The roadmap compares complementary starting points for building reusable MEG representations. MEG-native pretraining, EEG transfer, continued pretraining, cross-modal training and generic time-series transfer involve different data, compute and modeling trade-offs. These are proposed development pathways rather than a benchmark ranking."
  credit: "Thölke et al. (2026)"
  source_label: "Preprint v1, Figure 1"
  source_url: "https://arxiv.org/html/2609.04461v1#S1.F1"
  license: "CC BY 4.0"
  license_url: "https://creativecommons.org/licenses/by/4.0/"
arxiv_url: "https://arxiv.org/abs/2609.04461"
keywords: ["MEG", "Foundation models", "Neuroimaging", "Pretraining"]
abstract: |-
  Foundation models are beginning to reshape brain-signal analysis by moving the field beyond task-specific decoding pipelines toward reusable models pretrained on broad neural datasets. Magnetoencephalography (MEG) is a compelling but still underdeveloped target for this shift: it captures human cortical dynamics at millisecond resolution while offering stronger spatial interpretability than EEG, making it especially valuable for source-resolved studies of perception, language, cognition, and clinical brain function. Yet MEG foundation models remain at an early stage, with only a small number of MEG-specific and MEG-inclusive multi-modal models, modest pretraining corpora, and emerging but still limited benchmarks. This perspective lays down the basic concepts needed to understand MEG foundation models and provides a didactic overview of the field's key design choices, including tokenization, sensor- versus source-space representations, sensor-geometry encoding, backbone architectures, self-supervised objectives, and pretraining data. We then offer a roadmap for future development, organized around native MEG pretraining, adaptation of EEG foundation models, transfer from generic time-series models, and multi-modal integration with EEG, fMRI, MRI, behaviour, and stimulus features. We highlight the need for coordinated infrastructure, including diverse and reusable MEG datasets, rigorous evaluation across subjects, sites, tasks, and clinical settings, and responsible data-sharing practices that address consent, privacy, access, and governance.
related_research: ["eeg-meg-foundation-models"]
bibtex: |-
  @article{tholke2026megroadmap,
    title={A Roadmap for MEG Foundation Models},
    author={Thölke, Philipp and Abdelhedi, Hamza and Mantilla-Ramos, Yorguin and Lbakali, Fouad and Gharbi, Oumayma and Duclos, Catherine and Pascarella, Annalisa and Hadid, Vanessa and Parker Jones, Oiwi and Jerbi, Karim},
    journal={arXiv preprint arXiv:2609.04461},
    year={2026}
  }
---
