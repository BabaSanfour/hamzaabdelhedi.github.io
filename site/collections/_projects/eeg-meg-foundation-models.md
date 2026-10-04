---
id: eeg-meg-foundation-models
slug: eeg-meg-foundation-models
title: Learning from brain signals
short_title: Brain-signal models & methods
category: research
status: Current methods line
role: Co-author of a MEG foundation-model roadmap
summary: I develop and evaluate EEG/MEG representations, contribute to decoding benchmarks,
  and build open methods. These tools run through my work on perception, decisions,
  and clinical data.
methods:
- Representation learning
- Foundation models
- Cross-dataset evaluation
- Brain decoding
- Reproducible analysis
collaborators: []
links:
- label: meeg-fm-workshop
  url: https://github.com/BabaSanfour/meeg-fm-workshop
  description: Hands-on material for EEG/MEG foundation-model workflows.
- label: Class-imbalance study code
  url: https://github.com/thecocolab/data-imbalance
  description: Shared code accompanying our paper on classifiers and evaluation metrics.
related_software:
- coco-pipe
- mne-denoise
- coord2region
publication_ids:
- meg-foundation-roadmap
- meg-ann-review
- class-imbalance-brain-decoding
- pnpl-competition-2025
- pnpl-competition-reflections
- pnpl-competition-2026
- coord2region
question: What do our models learn from brain signals, and when can we trust what
  transfers?
method_ids:
- representations
- prediction
software_context:
  coco-pipe: Pipelines for descriptors, learned representations, decoding, and evaluation.
  mne-denoise: Reusable signal-cleaning methods for EEG/MEG workflows.
  coord2region: Connecting source coordinates and atlas regions to anatomical labels
    and neuroimaging literature.
connections:
- project: pediatric-clinical-eeg
  note: Applying pretrained representations and comparing them with classical features
    on pediatric EEG.
- project: face-familiarity
  note: Comparing neural-network representations with human responses to faces and
    expressions.
- project: dynamic-decision-making
  note: Decoding and model evaluation help separate represented evidence from its
    influence on a decision.
---

## Models as tools for neuroscience

I use machine learning both to extract information from brain recordings and to investigate the representations that models learn. In clinical EEG, this includes comparing foundation-model embeddings with conventional descriptors. In perception research, the question is how model representations correspond to human neural responses.

I evaluate and develop EEG/MEG foundation models with a focus on representation learning and cross-dataset generalization. I also co-authored a review of artificial neural networks for MEG and a roadmap for MEG foundation models. Together, they connect decoding, brain–model comparisons, and methodological work such as preprocessing and source estimation.

## Evaluation is part of the question

Our class-imbalance paper examines how apparently strong decoding can arise from unequal class sizes and metric choice. My co-authored PNPL competition papers address speech decoding and benchmarking, with the 2026 edition extending the emphasis to word classification and transfer across people.

These studies motivate practical questions across my projects: what is the right baseline, who is held out during evaluation, and does a representation remain useful outside its training setting? A higher score alone does not explain what a model has learned.

## Turning methods into shared tools

I build and maintain software to make these analyses inspectable and reusable. CoCo-PiPe connects feature extraction, model evaluation, and reporting; MNE-Denoise supports signal cleaning. Coord2Region links brain coordinates and atlas regions with anatomical labels and related literature. These packages carry methods from individual analyses into tools that other researchers can use.
