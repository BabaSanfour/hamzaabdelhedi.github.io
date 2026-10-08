---
title: "La reconnaissance faciale par l’IA et par les humains : une étude comparative combinant réseaux de neurones artificiels et l’imagerie cérébrale"
slug: reconnaissance-faciale-ai-humains
authors: "Hamza Abdelhedi"
venue: "Université de Montréal"
year: 2025
date_precision: year
type: "thesis"
keywords: ["Face Recognition", "Artificial Neural Networks", "CNN", "MEG", "Neuroscience"]
id: "reconnaissance-faciale-ai-humains"
status: "published"
featured: false
related_research: ["face-familiarity"]
paper_url: "https://hdl.handle.net/1866/41128"
pdf_link: "https://umontreal.scholaris.ca/bitstreams/21f1690f-8b6b-4879-983b-38b8769ede05/download"
figure:
  preview_src: /images/publications/thesis-study-outline-preview.webp
  src: "/images/publications/thesis-study-outline-960.webp"
  full_src: "/images/publications/thesis-study-outline-1600.webp"
  width: 960
  height: 486
  alt: "Study diagram comparing face stimuli, sensor- and source-space MEG representations, CNN learning tasks and representational similarity analysis."
  title: "Face recognition study outline"
  caption: "Figure 2.1 from the thesis presents the study design linking MEG and artificial neural network representations of familiar, unfamiliar and scrambled faces. The full workflow is preserved."
  credit: "© Hamza Abdelhedi 2024"
  source_label: "Université de Montréal thesis, Figure 2.1, PDF page 48"
  source_url: "https://umontreal.scholaris.ca/bitstreams/21f1690f-8b6b-4879-983b-38b8769ede05/download#page=48"
  sources:
    - src: /images/publications/thesis-study-outline-640.webp
      width: 640
    - src: /images/publications/thesis-study-outline-960.webp
      width: 960
    - src: /images/publications/thesis-study-outline-1600.webp
      width: 1600
abstract: |-
  In the past decade, there has been a surge of research at the intersection of neuroscience and artificial intelligence (AI) aimed at advancing our understanding of both artificial and natural cognition. Growing evidence suggests that biological and artificial neural networks trained on similar tasks can exhibit striking functional parallels. Driven by the imperative to model the brain in order to decipher its underlying mechanisms, artificial neural networks (ANNs)—originally inspired by its architecture and functions—have been proposed as effective models of various brain systems. Convolutional Neural Networks (CNNs) trained on object recognition have demonstrated their ability to approximate the human visual system’s processing hierarchy and internal representations. In the context of face perception, neuroscience findings highlight a specialized neural system; yet whether familiar and unfamiliar faces are processed by the same mechanisms or via distinct pathways remains debated. Although numerous studies have compared AI-based face models to human behavior or fMRI data, questions persist about how closely these models capture the temporal dynamics of human face processing. This thesis first reviews current knowledge of the human visual system, focusing on the dedicated face recognition circuitry, and then introduces foundational concepts in AI, including the modeling of face perception with CNNs. The core work compares seven CNN architectures against source-localized magnetoencephalography (MEG) data to probe the neural signatures of face recognition and familiarity over time. These networks were optimized for different tasks—face recognition, object recognition, or both—allowing us to assess how task-specific representations capture the brain’s face processing in distinct ways. Our findings show that FaceNet aligns particularly well with occipital and fusiform regions implicated in face perception, while certain other deep architectures (e.g., ResNet) also achieve comparable levels of neural alignment. In the occipital region, the M170 component associated with familiarity occurs earlier (around 160ms) for familiar faces and later for unfamiliar ones (approximately 180ms), suggesting that novel identities demand more prolonged processing. We additionally observe strong CNN–MEG similarities in theta and gamma frequency bands, with earlier peaks (M170–M200) for familiar stimuli and a shift toward M400 for unfamiliar faces. Comparing multiple training objectives confirms the training task could have an impact on the temporal alignment with brain data. Finally, the discussion addresses potential limitations of CNNs as models of the brain, while highlighting their promise in shedding light on the neural mechanisms underlying face recognition. The insights gained from this work may guide the development of more robust models of face perception for both AI and computational neuroscience.
bibtex: |-
  @mastersthesis{abdelhedi2025reconnaissance,
    title={La reconnaissance faciale par l'IA et par les humains: une étude comparative combinant réseaux de neurones artificiels et l'imagerie cérébrale},
    author={Abdelhedi, Hamza},
    school={Université de Montréal},
    year={2025}
  }
---
