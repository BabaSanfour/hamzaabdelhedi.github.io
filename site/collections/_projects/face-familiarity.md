---
id: face-familiarity
slug: face-familiarity
title: Visual perception in brains and models
short_title: Perception in brains & models
category: research
status: MSc research and continuing collaborations
role: Graduate Research Assistant during MSc research
summary: I compare human EEG/MEG responses with artificial neural-network representations
  to study face familiarity and emotion perception, and how training shapes brain–model
  correspondence.
methods:
- EEG and MEG
- Source reconstruction
- Task-optimized neural networks
- Representational similarity analysis
collaborators:
- Shahab Bakhtiari
- Karim Jerbi
related_software: []
publication_ids:
- reconnaissance-faciale-ai-humains
- ccn-2024-face-dynamics
- ccn-2022-face-representations
- face-familiarity-preprint
question: What does a model need to learn to capture how humans perceive faces and
  expressions?
method_ids:
- representations
- dynamics
links:
- label: MFRS
  url: https://github.com/BabaSanfour/MFRS
  description: The face-recognition project, from model training and MEG processing
    to representational comparisons.
- label: CNN-MEG-FaceProcessing
  url: https://github.com/BabaSanfour/CNN-MEG-FaceProcessing
  description: Analysis scripts for comparing face-processing networks with human
    MEG.
connections:
- project: eeg-meg-foundation-models
  note: Both lines ask what a learned representation captures; here the comparison
    is with human perceptual responses.
- project: dynamic-decision-making
  note: Changing facial expressions also provide a way to study decisions as perceptual
    evidence unfolds.
---

## From familiarity to emotion

Recognizing a familiar face and interpreting a changing expression both involve visual information unfolding over time. I use neural networks as computational comparisons: by changing what a model learns, we can ask which aspects of human neural responses it captures, where, and when.

During my MSc, supervised by Prof. Karim Jerbi and Prof. Shahab Bakhtiari, I compared source-localized MEG with seven convolutional-network architectures trained for face recognition, object recognition, or both. Time-resolved representational analyses connect the structure of model activations with the structure of human brain responses.

## What the familiarity work suggests

Our 2026 bioRxiv preprint reports earlier brain–model alignment for familiar faces in lateral occipital cortex, and stronger alignment later in fusiform cortex. Face-recognition training was most consistently associated with the earlier timing effect; broader visual learning also captured the later fusiform representations. The comparison suggests that learning objectives matter differently across processing stages.

## Continuing with emotion perception

I am also involved in collaborative work comparing CNNs with human responses during dynamic facial-expression perception. This asks how pretraining and model specialization shape alignment with EEG as emotional expressions evolve. The work is not yet published.

The common thread is to use differences between models as a way to investigate perception, while keeping predictive performance and similarity to human neural processing as distinct questions.
