---
id: "pnpl-competition-reflections"
slug: "pnpl-competition-reflections"
title: "Benchmarking Non-Invasive Speech BCIs: Lessons Learned from the 2025 PNPL Competition"
authors: "Gereon Elvers, Gilad Landau, Francesco Mantegna, Miran Özdogan, Tasha Kim, Teyun Kwon, SungJun Cho, Benjamin Ballyk, Luisa Kurth, Dulhan Jayalath, Pratik Somaiya, Chetan Gohil, Brendan Shillingford, Greg Farquhar, Minqi Jiang, Caglar Gulcehre, Xabier de Zuazo, Hamza Abdelhedi, Yorguin Mantilla Ramos, Karim Jerbi, Mark Woolrich, Natalie Voets, Oiwi Parker Jones"
year: 2026
venue: "Proceedings of Machine Learning Research (NeurIPS 2025 Competition Track)"
type: "conference-proceedings"
status: "published"
featured: false
keywords: ["Speech decoding", "Brain-computer interfaces", "MEG", "Competition", "Benchmark"]
abstract: |-
  We present a retrospective on the 2025 PNPL Competition, an open machine-learning benchmark for decoding speech from non-invasive brain recordings, which ran from June to September 2025 and culminated in a workshop at NeurIPS that December. The competition used the LibriBrain dataset—over 50 hours of within-subject MEG with standard data splits—and challenged participants to tackle two tasks: Speech Detection (binary frame-level classification) and Phoneme Classification (39-class ARPAbet prediction). Across 155 registered teams and 6,041 submissions, top F1-macro scores reached 95.6% for Speech Detection and 73.6% for Phoneme Classification, exceeding prior baselines of 68% and 44%, respectively, by wide margins. High-performing submissions converged on a common architectural template—temporal CNN or TCN backbones with task-specific recurrent or attention-based heads—whilst task-specific strategies such as temporal smoothing and ensemble voting proved critical for competitive performance. Hidden track evaluations suggest that main-track Speech Detection models generalised poorly to balanced class distributions. This could imply a reliance on class priors rather than robust neural decoding, highlighting a useful lesson: evaluation distributions should reflect intended deployment conditions. We further reflect on design choices, organisational lessons, and plans for future competitions in this series.
paper_url: "https://neural-processing-lab.github.io/2025-libribrain-competition/editions/2025/publications/"
pdf_link: "https://neural-processing-lab.github.io/2025-libribrain-competition/publications/2025-pnpl-competition-reflections.pdf"
bibtex: |-
  @inproceedings{elvers2026benchmarking,
    title={Benchmarking Non-Invasive Speech BCIs: Lessons Learned from the 2025 PNPL Competition},
    author={Elvers, Gereon and Landau, Gilad and Mantegna, Francesco and Özdogan, Miran and Kim, Tasha and Kwon, Teyun and Cho, SungJun and Ballyk, Benjamin and Kurth, Luisa and Jayalath, Dulhan and Somaiya, Pratik and Gohil, Chetan and Shillingford, Brendan and Farquhar, Greg and Jiang, Minqi and Gulcehre, Caglar and de Zuazo, Xabier and Abdelhedi, Hamza and Mantilla Ramos, Yorguin and Jerbi, Karim and Woolrich, Mark and Voets, Natalie and Parker Jones, Oiwi},
    booktitle={Proceedings of Machine Learning Research (NeurIPS 2025 Competition Track)},
    year={2026}
  }
related_research: ["eeg-meg-foundation-models"]
---
