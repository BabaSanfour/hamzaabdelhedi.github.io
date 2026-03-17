---
title: "Class imbalance should not throw you off balance: Choosing the right classifiers and performance metrics for brain decoding with imbalanced data"
slug: class-imbalance-brain-decoding
authors: "Philipp Thölke, Yorguin-Jose Mantilla-Ramos, Hamza Abdelhedi, Charlotte Maschke, Arthur Dehgan, Yann Harel, Anirudha Kemtur, Loubna Mekki Berrada, Myriam Sahraoui, Tammy Young, Antoine Bellemare Pépin, Clara El Khantour, Mathieu Landry, Annalisa Pascarella, Vanessa Hadid, Etienne Combrisson, Jordan O'byrne, Karim Jerbi"
venue: "NeuroImage"
date: 2023-08-15
year: 2023
type: "Journal"
featured: true
thumbnail: /images/minimal_data_balance.png
banner: /images/minimal_data_balance.png
doi: "10.1016/j.neuroimage.2023.120253"
code_url: "https://github.com/thecocolab/data-imbalance"
keywords: ["Research", "Methods"]
bibtex: >
  @article{tholke2023class,
    title={Class imbalance should not throw you off balance: Choosing the right classifiers and performance metrics for brain decoding with imbalanced data},
    author={Th{\"o}lke, Philipp and Mantilla-Ramos, Yorguin-Jose and Abdelhedi, Hamza and Maschke, Charlotte and Dehgan, Arthur and Harel, Yann and Kemtur, Anirudha and Berrada, Loubna Mekki and Sahraoui, Myriam and Young, Tammy and others},
    journal={NeuroImage},
    volume={277},
    pages={120253},
    year={2023},
    publisher={Elsevier}
  }
---

Machine learning (ML) is increasingly used in cognitive, computational and clinical neuroscience. The reliable and efficient application of ML requires a sound understanding of its subtleties and limitations. Training ML models on datasets with imbalanced classes is a particularly common problem, and it can have severe consequences if not adequately addressed.

With the neuroscience ML user in mind, this paper provides a didactic assessment of the class imbalance problem and illustrates its impact through systematic manipulation of data imbalance ratios in (i) simulated data and (ii) brain data recorded with electroencephalography (EEG), magnetoencephalography (MEG) and functional magnetic resonance imaging (fMRI).

Our results illustrate how the widely-used Accuracy (Acc) metric, which measures the overall proportion of successful predictions, yields misleadingly high performances, as class imbalance increases. Because Acc weights the per-class ratios of correct predictions proportionally to class size, it largely disregards the performance on the minority class. A binary classification model that learns to systematically vote for the majority class will yield an artificially high decoding accuracy that directly reflects the imbalance between the two classes, rather than any genuine generalizable ability to discriminate between them.

We show that other evaluation metrics such as the Area Under the Curve (AUC) of the Receiver Operating Characteristic (ROC), and the less common Balanced Accuracy (BAcc) metric - defined as the arithmetic mean between sensitivity and specificity, provide more reliable performance evaluations for imbalanced data. Our findings also highlight the robustness of Random Forest (RF), and the benefits of using stratified cross-validation and hyperprameter optimization to tackle data imbalance.

Critically, for neuroscience ML applications that seek to minimize overall classification error, we recommend the routine use of BAcc, which in the specific case of balanced data is equivalent to using standard Acc, and readily extends to multi-class settings. Importantly, we present a list of recommendations for dealing with imbalanced data, as well as open-source code to allow the neuroscience community to replicate and extend our observations and explore alternative approaches to coping with imbalanced data.