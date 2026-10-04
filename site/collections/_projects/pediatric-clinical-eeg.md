---
id: pediatric-clinical-eeg
slug: pediatric-clinical-eeg
title: Clinical EEG and computational neuroscience
short_title: Clinical questions & EEG
category: research
status: Current collaboration
role: Research Collaborator
summary: At CHU Sainte-Justine, I combine EEG descriptors and foundation-model representations
  to study pediatric clinical questions. A broader clinical collaboration uses machine
  learning to study cognitive decline.
methods:
- Clinical EEG
- Spectral and complexity measures
- Foundation-model representations
- Dimensionality reduction
- Machine learning
collaborators:
- Dr. Alexander G. Weil
- Dr. Aristides Hadjinicolaou
links:
- label: eeg-analysis-adhd-epilepsy
  url: https://github.com/BabaSanfour/eeg-analysis-adhd-epilepsy
  description: Code for EEG preparation, quality control, feature extraction, foundation-model
    embeddings, and decoding.
related_software:
- coco-pipe
publication_ids:
- predicting-cognitive-decline
question: Which features of brain signals help us understand clinical differences—and
  which carry across people?
method_ids:
- dynamics
- representations
- prediction
software_context:
  coco-pipe: The clinical EEG pipeline uses CoCo-PiPe for descriptors, model representations,
    dimensionality reduction, and decoding.
connections:
- project: eeg-meg-foundation-models
  note: Clinical EEG is a concrete setting for comparing pretrained representations
    with conventional signal features.
- project: brain-states-and-cognition
  note: Rhythms and complexity provide a shared language for studying variation across
    people and conditions.
---

## Pediatric EEG and medication

At CHU Sainte-Justine, I collaborate with Dr. Alexander G. Weil and Dr. Aristides Hadjinicolaou on EEG questions involving epilepsy, ADHD, autism, and medication. I curate recordings with medication and comorbidity metadata and compare medicated and unmedicated ADHD groups, accounting for age, sex, and comorbidities.

## Signal features and learned representations

I analyze rhythms and complexity alongside representations extracted from EEG foundation models. The workflow includes dimensionality reduction, linear probing, fine-tuning, and decoding. These approaches let me ask how different descriptions of the same recordings relate to the clinical question.

This is where my work on foundation models and clinical neuroscience directly meets: the models are methods for studying real clinical data, and those data pose questions about generalization, group imbalance, and interpretation. Associations between medication groups and EEG patterns do not by themselves establish a medication effect.

## A broader clinical collaboration

I also co-authored a preprint on predicting cognitive decline in prodromal synucleinopathies. That study uses clinical markers and machine learning to examine different trajectories toward dementia with Lewy bodies and Parkinson's disease. It is a separate population and dataset from the pediatric EEG work, connected by an interest in individual differences and careful prediction.
