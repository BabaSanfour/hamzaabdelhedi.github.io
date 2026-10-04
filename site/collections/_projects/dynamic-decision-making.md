---
id: dynamic-decision-making
slug: dynamic-decision-making
title: Decisions under changing evidence
short_title: Decisions & commitment
category: research
status: Current doctoral research
role: Graduate Research Assistant
summary: My PhD asks how urgency, communication between brain regions, and ongoing
  brain dynamics shape the transition from weighing evidence to committing to an action.
methods:
- MEG and EEG
- Behavioral models
- Neural trajectories
- Oscillatory coupling
- Time-resolved decoding
collaborators:
- Karim Jerbi
links:
- label: meg-tokens
  url: https://github.com/BabaSanfour/meg-tokens
  description: Behavior, MEG preprocessing, source reconstruction, and decision-task
    analyses.
related_software:
- mne-denoise
- coco-pipe
publication_ids: []
question: When the evidence changes, how do we revise a choice—and when do we stop?
method_ids:
- dynamics
- prediction
software_context:
  mne-denoise: Cleaning EEG and MEG before studying their dynamics.
  coco-pipe: Reusable analyses of rhythms, complexity, trajectories, and decoding.
connections:
- project: brain-states-and-cognition
  note: Rhythms, complexity, and individual differences connect decision timing with
    broader questions about brain state.
- project: eeg-meg-foundation-models
  note: Time-resolved decoding asks what information brain activity carries at each
    stage of a decision.
---

## Staying open to new evidence

A driver approaching a moving hazard must respond to new information without reacting to every fluctuation. I ask how the brain balances that need to update with the growing pressure to act. Evidence-accumulation and urgency-based models can make similar predictions when evidence is stable; reversals offer a way to tell them apart.

My doctoral project focuses on three connected questions:

- How does urgency change the influence of new and past evidence?
- Why do people differ in how long they wait before committing?
- When does new evidence stop changing a choice, and can brain state shift that point?

## From behavior to brain dynamics

I combine a tokens decision task recorded with MEG and a face-morph decision task recorded with EEG. In the first, evidence arrives over time and can reverse; in the second, a face gradually becomes happy or sad, sometimes with informative evidence arriving late.

I fit computational models to behavior and compare their predictions with MRI-guided source estimates, alpha and beta rhythms, low-dimensional neural trajectories, and coupling between cortical regions. Time-resolved decoding helps track the information available in brain activity. A central distinction is whether evidence is still represented in the brain or still influences the eventual choice.

I built the EEG/MEG source-analysis pipeline and develop reusable analysis tools for this work in the CoCo Lab and Mila, supervised by Prof. Karim Jerbi.

## What I am testing next

The project tests how frontal, parietal, and sensorimotor dynamics change around commitment. Planned analyses use change-point and hidden-state models to investigate that transition. An exploratory direction asks whether near-critical brain dynamics—and, in a planned study, caffeine—shift how long a decision remains open.
