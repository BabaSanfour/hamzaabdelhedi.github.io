# Baseline route inventory

As-of date: 2026-09-18. This inventory describes an isolated production build of commit 9530c70, before the Stage 01 working-tree migration. It is not a statement of the current post-Stage 01 output.

## Source and output counts

| Area | Baseline count | Evidence |
| --- | ---: | --- |
| Page documents | 7 | site/collections/_pages |
| Blog posts | 15 | site/collections/_posts |
| Publications | 8 | site/collections/_publications |
| Projects | 9 | site/collections/_projects |
| Affiliations | 6 | site/collections/_affiliations |
| Image files | 39 | site/images |
| Generated files | 121 | isolated _site |

## Page routes

| Route | Source | Baseline result |
| --- | --- | --- |
| / | _pages/index.html | Generated. The build also emitted a duplicate /.html file. |
| /about/ | _pages/about.html | Generated. Timeline contains hard-coded dates that disagree with the canonical CV. |
| /blog/ | _pages/blog.html | Generated legacy page; Blog was still in baseline navigation. |
| /contact/ | _pages/contact.html | Missing. The source starts with title: Contact rather than YAML front matter, so no page route is generated. Safari/static server returned 404. |
| /projects/ | _pages/projects.html | Generated compatibility page, but all three collection readers are undefined and it shows empty states. |
| /publications/ | _pages/publications.html | Generated with 8 publication records, filters, and search. |
| /updates/ | _pages/updates.html | Generated with data-driven update cards; many cards link to non-generated legacy date-style URLs. |
| /Hamza_Abdelhedi_cv.pdf | root/site PDF asset | Generated legacy PDF asset. It was not rebuilt from the canonical cv-latex checkout during this audit. |

The baseline also publishes four schema pages under /schemas/: affiliations, page, post, and project. These are configuration/editor artifacts and should not be public content routes.

## Publication routes

| Source slug | Route | Baseline title | CV/source note |
| --- | --- | --- | --- |
| aict-brain-changes | /publications/aict-brain-changes.html | Exploring aperiodic, complexity and entropic brain changes during non-ordinary states of consciousness | Present in CV as a 2025 arXiv preprint with the same arXiv identifier. |
| coord2region | /publications/coord2region.html | Coord2Region: A Python Package for Mapping 3D Brain Coordinates to Atlas Labels, Literature, and AI Summaries | Present in CV as a 2025 arXiv preprint. |
| data-imbalance | /publications/class-imbalance-brain-decoding.html | Class imbalance should not throw you off balance: Choosing the right classifiers and performance metrics for brain decoding with imbalanced data | Present in CV as a 2023 NeuroImage article. |
| intrinsic-neural-oscillations | /publications/intrinsic-neural-oscillations.html | Intrinsic Neural Oscillations Predict Verbal Learning Performance and Encoding Strategy Use | Website has a 2025 bioRxiv record; CV has a differently titled 2026 iScience article. Reconcile before replacing. |
| meg-ann-review | /publications/meg-ann-review.html | Artificial neural networks for magnetoencephalography: A review of an emerging field | Website DOI ends in ad42c3; canonical CV DOI ends in addd4a. Verify the current DOI. |
| pnpl-competition | /publications/pnpl-competition-2025.html | The 2025 PNPL competition: Speech detection and phoneme classification in the LibriBrain dataset | CV retains this 2025 NeurIPS competition-track entry and adds a separate 2026 retrospective in press. |
| predicting-cognitive-decline | /publications/predicting-cognitive-decline.html | Predicting cognitive decline in prodromal synucleinopathies using clinical markers and machine learning | Present in CV with the same Research Square DOI. |
| reconnaissance-faciale-ai-humains | /publications/reconnaissance-faciale-ai-humains.html | La reconnaissance faciale par l’IA et par les humains: une étude comparative combinant réseaux de neurones artificiels et l’imagerie cérébrale | Website thesis record; current CV publication list focuses on the related CCN abstracts and a 2026 face-familiarity preprint. |

Canonical CV revision e382f9a adds six publication records not present in the baseline website: the 2026 iScience article, the 2026 PNPL retrospective marked in press, the 2026 NeurIPS EEG-alignment manuscript under review, the 2026 PNPL word-classification preprint, A Roadmap for MEG Foundation Models, and the 2026 face-familiarity bioRxiv record.

## Blog/update routes

The 15 generated post routes are:

- /updates/abint-agm-nz.html — Abundant Intelligences Annual General Meeting 02
- /updates/amai-rg.html — Against Military AI Reading Group
- /updates/circa-scholarship.html — CIRCA M.Sc Level Scholarship
- /updates/cosyne-2024.html — Computational and Systems Neuroscience 2024
- /updates/cuttingeeg.html — CuttingEEG Montreal Garden
- /updates/main2024.html — Educational Tutorial — MAIN Montreal AI and Neuroscience 2024
- /updates/med-ai-scholarship.html — Faculty of Medicine AI Merit Research Scholarship
- /updates/mnc-ta2023.html — Méthodes en neurosciences cognitives 1 TA autumn 2023
- /updates/naisys-2024.html — From Neuroscience to Artificially Intelligent Systems
- /updates/neuroai-workshop.html — Neuro-AI Workshop 3rd Edition
- /updates/phd-biomed-engineering.html — Started a Biomedical Engineering PhD program
- /updates/scaling-workshop.html — Scaling Workshop
- /updates/ta-mnc-lab2-a2024.html — Méthodes en neurosciences cognitives TA autumn 2024
- /updates/unique-get-together.html — UNIQUE Fellows Get Together
- /updates/unique-retreat.html — UNIQUE Scientific Retreat

The Updates data file links these stories using legacy paths such as /2024/11/09/AMAI-RG.html and /2023/09/01/CIRCA-Scholarship.html. Those paths are not generated by the configured /updates/:slug permalink and were confirmed as broken local references.

## Project routes and retirement list

The baseline generated nine stock project routes:

| Source file | Route | Title | Stage 00 disposition |
| --- | --- | --- | --- |
| 2021-01-05-green-plant.md | /project/green-plant.html | Green Plant | Retire; stock/demo content |
| 2021-01-06-antelope-anyon.md | /project/antelope-anyon.html | Antelope Canyon | Retire; stock/demo content |
| 2021-01-08-quiet-lake.md | /project/quiet-lake.html | Quiet Lake | Retire; stock/demo content |
| 2021-01-09-the-rocks.md | /project/the-rocks.html | The rocks | Retire; stock/demo content |
| 2021-01-10-big-airplane.md | /project/big-airplane.html | Big airplane | Retire; stock/demo content |
| 2021-01-11-mountains.md | /project/mountains.html | Mountains | Retire; stock/demo content |
| 2021-01-12-sea-and-rest.md | /project/sea-and-rest.html | Sea and rest | Retire; stock/demo content |
| 2021-01-14-prague-city.md | /project/prague-city.html | Prague city | Retire; stock/demo content |
| 2021-01-15-desk-setup.md | /project/desk-setup.html | Desk setup | Retire; stock/demo content |

Stage 01 has since removed these nine source documents from the current working tree. This report records their baseline routes so later release work can decide whether redirects or a not-found policy are needed.

## Tag routes

The baseline generated 27 tag routes:

abundant-intelligences, ai, amai-rg, award, biomed.-eng, circa, conf, conference, cosyne, faculty-of-medicine, indigenous, m.sc, main, mila, msc, naisys, ph.d, poster, scholarship, ta, talk, teaching, tutorial, udem, unique, volunteering, workshop.

The tag templates also generate raw tag links from lowercased display labels. The static link scan found variants containing spaces, uppercase characters, and punctuation that do not map to the generated slug files. Slug normalization is a future route/URL cleanup item.

## Linked assets and static-link findings

The baseline image inventory contains 39 files in main, confs, orgs, and other. The current portrait references are main/my-image.jpg in author/share metadata and main/01.jpg in the later Stage 01 migration; both were inspected as the available portrait assets. Organization logos and publication thumbnails loaded during the Safari pass.

Broken or suspicious local references found by scanning generated href/src values:

- /contact/ is linked throughout the site but has no generated target.
- Fifteen legacy date-style update paths are linked from /updates/ but have no generated target.
- /news and /tags are referenced by the tag/post templates but have no generated target in the baseline output.
- Stock project pages reference /images/project-1.jpg through /images/project-9.jpg and image-example-3.jpg/image-example-4.jpg, none of which exist in the baseline image inventory.
- The schema documents are published as HTML despite being editor metadata.
- Publication citation controls use href="#" as a JavaScript interaction target; this is an interface/accessibility issue to review, not a missing route.

## Baseline visual evidence

Safari captures were performed against http://localhost:8001/ for Home, Publications, Projects, About, Updates, and Contact on the available desktop window, then repeated at a narrow responsive window for Home, Publications, Projects, About, and Updates. Exact viewport CSS numbers and screenshot file paths were not exposed by the CUA interface; the Stage 00 report records this limitation and the observed visual findings.

## Stage 03 route inventory

As-of date: 2026-09-19. This section supplements the historical Stage 00 baseline above. It describes the Stage 03 working-tree source built to the repository-root `_site/` directory; no commit was created.

| Route | Source / generated file | Stage 03 result |
| --- | --- | --- |
| `/` | `site/collections/_pages/index.html` | Home now renders up to three ordered research cards, all five software cards, selected publications, then the existing trajectory and recent updates. |
| `/research/` | `site/collections/_pages/research.html` | Four ordered research records; links to the four real detail routes below. |
| `/software/` | `site/collections/_pages/software.html` | Five software records in the order specified by Stage 03. `#coord2region` is a valid software-card anchor. |
| `/projects/` | `site/collections/_pages/projects.html` | Static compatibility page with a visible `/research/` link and canonical URL targeting `/research/`. This is not an HTTP 301 and has no automatic refresh. |
| `/project/dynamic-decision-making.html` | `_projects/dynamic-decision-making.md` | Generated research detail route. |
| `/project/eeg-meg-foundation-models.html` | `_projects/eeg-meg-foundation-models.md` | Generated research detail route. |
| `/project/pediatric-clinical-eeg.html` | `_projects/pediatric-clinical-eeg.md` | Generated research detail route. |
| `/project/face-familiarity.html` | `_projects/face-familiarity.md` | Generated research detail route; public output includes the existing face-recognition thesis record and CCN links. |

The four detail routes use the collection's existing `.html` route pattern; they do not reuse any of the nine retired stock-project slugs listed in the baseline section. A targeted scan of Home, Research, Software, Projects, and all four detail outputs found no missing internal page, asset, or fragment links. The external face-familiarity preprint and the foundation-model roadmap/alignment publication links remain for Stage 04 reconciliation.

Primary navigation is Home, Research, Software, Publications, About, CV. The footer menu is Updates and Contact. The visible Research hero CTA now points to `/research/`; the CV link still resolves through the shared `cv_pdf` key.

## Stage 04 publication routes

As-of date: 2026-09-21. The latest production build generated all 14 current publication detail routes below and /publications/. All eight original routes remain unchanged; six of the seven records added during Stage 04 remain in the collection. The EEG-alignment route was removed at the owner's request pending a primary manuscript source.

| Route | Source record | Record type / status |
| --- | --- | --- |
| `/publications/aict-brain-changes.html` | `aict-brain-changes.md` | preprint / under-review |
| `/publications/ccn-2022-face-representations.html` | `ccn-2022-face-representations.md` | conference-paper / published |
| `/publications/ccn-2024-face-dynamics.html` | `ccn-2024-face-dynamics.md` | conference-paper / published |
| `/publications/class-imbalance-brain-decoding.html` | `data-imbalance.md` | journal / published |
| `/publications/coord2region.html` | `coord2region.md` | preprint / preprint |
| `/publications/face-familiarity-preprint.html` | `face-familiarity-preprint.md` | preprint / preprint |
| `/publications/intrinsic-neural-oscillations.html` | `intrinsic-neural-oscillations.md` | journal / published |
| `/publications/meg-ann-review.html` | `meg-ann-review.md` | journal / published |
| `/publications/meg-foundation-roadmap.html` | `meg-foundation-roadmap.md` | preprint / preprint |
| `/publications/pnpl-competition-2025.html` | `pnpl-competition.md` | conference-paper / published |
| `/publications/pnpl-competition-2026.html` | `pnpl-competition-2026.md` | preprint / preprint |
| `/publications/pnpl-competition-reflections.html` | `pnpl-competition-reflections.md` | conference-proceedings / published |
| `/publications/predicting-cognitive-decline.html` | `predicting-cognitive-decline.md` | preprint / preprint |
| `/publications/reconnaissance-faciale-ai-humains.html` | `reconnaissance-faciale-ai-humains.md` | thesis / published |

The targeted production-output scan inspected Home, the publication index, and all 14 current details. It confirmed the eight original slugs, one H1 and one abstract panel per detail page, and no unresolved local route, image or fragment links. The EEG-alignment detail route is absent by owner request. This was static production-output inspection; responsive visual review remains outside Stage 04.
