# Stage 03 — Research, Software, and Home entry points

## Status

**Implemented, awaiting review** — 2026-09-19. Branch: `main`. Starting and ending `HEAD`: `503c6f836279198c5395263f36c915ed21d0876b`; no commit was created. The working tree already contained the Stage 00–02 prompt pack/reports, planning documents, and `.DS_Store` edits. Those were preserved.

The owner explicitly directed Stage 03 while Stage 01 remained *Implemented, awaiting review* and Stage 02 remained *In progress*. Those earlier statuses and review requirements remain unchanged. Stage 03 is recorded as implemented pending review; it is not marked accepted.

## Scope and changes

- Added four ordered research records with stable IDs, concise card summaries (46–56 words), and evidence-supported detail narratives (166–185 words). Current work is described through questions and methods without adding project-specific outcome claims. Face-familiarity details are tied to the existing thesis record.
- Added five software records in the requested order with CV-verified role wording and repository/documentation links. Only MNE-Denoise has a verified active-development status; absent optional statuses and unmatched publication links are omitted. The new cards use no star/API data.
- Added Research and Software pages and shared-data Bookshop card/section components. Regenerated `site/_cloudcannon/bookshop-live.js`, which the Jekyll configuration explicitly includes for CloudCannon preview. Wired Home to three featured research cards, all five software entries, selected publications, then the existing trajectory and updates.
- Set primary navigation to Home, Research, Software, Publications, About, CV; set footer links to Updates and Contact; moved the hero CTA to `/research/`.
- Reworked `/projects/` as a static compatibility page with a visible Research link and explicit canonical field. It sends no HTTP 301 and performs no automatic refresh. The new head field is separate from publication `external_url` behavior.
- Updated the project layout and schema to render role, status, methods, collaborators, sourced outputs, and valid relationships from their target records.
- Browser QA found hidden trajectory detail cards extending beyond the Home viewport at 1024 px. Added a narrow position rule for widths 769–1024 px in the existing trajectory component. The popovers remain available on hover and the document no longer widens horizontally. This small responsive change is recorded in `PROGRESS.md`.
- Added scoped research/software styles and saved 20 settled page screenshots plus one keyboard-focus screenshot in [`stage03_screenshots/`](stage03_screenshots/).

## Sources and decisions

| Claim / decision | Evidence path or URL and revision | Resolution / uncertainty |
| --- | --- | --- |
| Current doctoral line, Graduate Research Assistant role, and supervisor | [Canonical CV `experience.tex`](https://github.com/BabaSanfour/cv-latex/blob/e382f9a98934de4cea7cd4b85be3379ff8b680fa/experience.tex); [master-plan sections 3–4](../../WEBSITE_REFACTOR_MASTER_PLAN.md) | Presented as the central research direction. The page reports questions and methods, not new findings. |
| Pediatric clinical EEG role and collaborators | CV `experience.tex` at revision [`e382f9a98934de4cea7cd4b85be3379ff8b680fa`](https://github.com/BabaSanfour/cv-latex/tree/e382f9a98934de4cea7cd4b85be3379ff8b680fa); Stage 01 `experience.yml` | Role is Research Collaborator with Dr. Alexander G. Weil and Dr. Aristides Hadjinicolaou at CHU Sainte-Justine. No cohort, sample size, diagnostic performance, or result is asserted. |
| Face-familiarity approach and thesis findings | [Existing thesis record](../../site/collections/_publications/reconnaissance-faciale-ai-humains.md); CV `publications.tex` at revision `e382f9a98934de4cea7cd4b85be3379ff8b680fa` | Seven CNNs, source-localized MEG, regional timing, and model/MEG alignment follow the thesis record. The related 2026 bioRxiv title appears in the CV without a public URL; its link/status and publication relationship remain for Stage 04. |
| Software role labels | [Canonical CV `software.tex`](https://github.com/BabaSanfour/cv-latex/blob/e382f9a98934de4cea7cd4b85be3379ff8b680fa/software.tex) | MNE-Denoise: Co-Creator & Core Maintainer; CoCo-PiPe and Coord2Region: Creator & Maintainer; MNE-Python and Jamica: Contributor. |
| MNE-Denoise repository, docs, and status | [Official repository](https://github.com/mne-tools/mne-denoise); [official docs](https://mne.tools/mne-denoise/stable/) | Exact targets checked. “Under active development” is shown for this record only. |
| CoCo-PiPe repository and docs | [Official repository](https://github.com/BabaSanfour/coco-pipe); [README-linked docs](https://cocopipe.readthedocs.io/en/latest/index.html) | The README supplies the docs destination. The docs page currently opens with the incorrect heading “Welcome to Coord2Region’s documentation!”; the issue is recorded for follow-up while preserving the README-linked target. |
| Coord2Region repository, docs, and publication | [Official repository](https://github.com/BabaSanfour/Coord2Region); [official docs](https://coord2region.readthedocs.io/en/latest/); [existing site publication](../../site/collections/_publications/coord2region.md) | Exact repository/docs targets checked. `publication_id: coord2region` resolves to the existing publication record; the card derives its visible title from that record. |
| MNE-Python repository and docs | [Official repository](https://github.com/mne-tools/mne-python); [official docs](https://mne.tools/stable/index.html) | Exact targets checked; role remains Contributor. |
| Jamica repository and docs | [Official repository and README](https://github.com/snesmaeili/jamica); [README-linked docs](https://snesmaeili.github.io/jamica/) | The README supplies the docs destination; the docs endpoint was not readable by the web crawler. The destination and role are preserved from the official README and canonical CV. |
| Foundation-model publications | CV `publications.tex` at revision `e382f9a98934de4cea7cd4b85be3379ff8b680fa` | The MEG roadmap and separate EEG model-alignment manuscript are named in the detail copy without UI links. Stage 04 owns their publication records, verified identifiers/status, and research relationships. |

## Records and routes

Research selection/order lives only in `site/_data/research.yml`. Software metadata lives only in `site/_data/software.yml`.

| Research ID / slug | Route | Status and role | Public outputs / relationship |
| --- | --- | --- | --- |
| `dynamic-decision-making` | `/project/dynamic-decision-making.html` | Current doctoral research; Graduate Research Assistant | No project-specific public output linked. |
| `eeg-meg-foundation-models` | `/project/eeg-meg-foundation-models.html` | Current methods line; co-author of a MEG foundation-model roadmap | Roadmap and EEG alignment publication relationships are pending Stage 04. |
| `pediatric-clinical-eeg` | `/project/pediatric-clinical-eeg.html` | Current collaboration; Research Collaborator | No project-specific public output linked. |
| `face-familiarity` | `/project/face-familiarity.html` | Earlier MSc research; Graduate Research Assistant during MSc research | Links to the existing thesis record and the 2022/2024 CCN outputs. The 2026 bioRxiv relationship is pending Stage 04. |

| Software ID | Role | Status | Repository / documentation / publication |
| --- | --- | --- | --- |
| `mne-denoise` | Co-Creator & Core Maintainer | Under active development | Repository and docs above. |
| `coco-pipe` | Creator & Maintainer | Omitted | Repository and README-linked docs above. |
| `coord2region` | Creator & Maintainer | Omitted | Repository/docs above; publication resolved to `coord2region`. |
| `mne-python` | Contributor | Omitted | Repository and docs above. |
| `jamica` | Contributor | Omitted | Repository and README-linked docs above. |

No research images were added because no project-specific figure with verified permission and useful alt text was available. The current Hero spotlight’s existing GitHub widget remains; the new Software cards contain no stars/API widgets. No publication records or bibliography fields were changed.

## Validation

| Check / command | Result | Evidence / limitation |
| --- | --- | --- |
| `npm run bookshop-live` | **Pass**, exit 0 | Generated the Bookshop live-preview bundle for the updated components. |
| `BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site --trace` | **Pass**, exit 0 | Built production output to repository-root `_site/`. Existing Ruby CSV/base64 and Sass `@import`/color-function deprecation warnings remain; no build errors. |
| `git diff --check` | **Pass** | No tracked whitespace errors. New text files were also checked separately for trailing whitespace. |
| Generated routes and links | **Pass** | Home, Research, Software, Projects, and all four detail pages exist. Targeted HTMLParser scan: 8 affected outputs, 0 missing local routes/assets/fragments, one H1 per page, no raw Liquid. The `software/#coord2region` and face thesis links resolve. |
| Responsive browser review | **Pass** | Chrome headless with DevTools CSS viewport emulation at 390, 768, 1024, and 1440 × 1000 checked Home, Research, Software, Projects, and all four detail routes. There were 20 template captures and 16 detail-route checks (32 unique route/viewport combinations after accounting for the dynamic-detail overlap). `documentElement.scrollWidth` matched the CSS viewport throughout. The initial Home 1024 overflow was traced to hidden trajectory detail cards and fixed as described above. |
| Keyboard focus | **Pass for the new Research card link** | Tab navigation reached the card CTA at 390 px; `:focus-visible` was true with a 3 px blue outline and underline. [Focus screenshot](stage03_screenshots/stage03_research_focus_390.png). The native CUA/Safari surface was unavailable; Stage 02’s previously reported header-focus check remains open. |
| Compatibility behavior | **Pass** | `/projects/` has canonical `/research/` metadata and a visible Research link; it is a static compatibility page, not an HTTP redirect. |

Settled screenshots are saved at 390 × 1000, 768 × 1000, 1024 × 1000, and 1440 × 1000 CSS pixels. The captures use exact CSS viewport emulation; an earlier Chrome `--window-size=390` capture produced a 500 px CSS viewport and was replaced.

| Template | 390 px | 768 px | 1024 px | 1440 px |
| --- | --- | --- | --- | --- |
| Home | [PNG](stage03_screenshots/stage03_home_390.png) | [PNG](stage03_screenshots/stage03_home_768.png) | [PNG](stage03_screenshots/stage03_home_1024.png) | [PNG](stage03_screenshots/stage03_home_1440.png) |
| Research | [PNG](stage03_screenshots/stage03_research_390.png) | [PNG](stage03_screenshots/stage03_research_768.png) | [PNG](stage03_screenshots/stage03_research_1024.png) | [PNG](stage03_screenshots/stage03_research_1440.png) |
| Software | [PNG](stage03_screenshots/stage03_software_390.png) | [PNG](stage03_screenshots/stage03_software_768.png) | [PNG](stage03_screenshots/stage03_software_1024.png) | [PNG](stage03_screenshots/stage03_software_1440.png) |
| Projects compatibility | [PNG](stage03_screenshots/stage03_projects_390.png) | [PNG](stage03_screenshots/stage03_projects_768.png) | [PNG](stage03_screenshots/stage03_projects_1024.png) | [PNG](stage03_screenshots/stage03_projects_1440.png) |
| Project detail template (dynamic decision-making) | [PNG](stage03_screenshots/stage03_project_detail_390.png) | [PNG](stage03_screenshots/stage03_project_detail_768.png) | [PNG](stage03_screenshots/stage03_project_detail_1024.png) | [PNG](stage03_screenshots/stage03_project_detail_1440.png) |

The screenshot table shows dynamic decision-making as the representative detail record because all four records share the same Jekyll layout. The browser route/viewport checks cover all four detail records separately.

## Remaining issues and next handoff

- Nonblocking documentation follow-up: the CoCo-PiPe docs heading names Coord2Region; confirm the docs owner’s correction or choose a better verified destination. The Jamica README-listed docs endpoint could not be read by the crawler.
- Stage 04 must reconcile the MEG roadmap, the under-review EEG model-alignment manuscript, and the 2026 face-familiarity bioRxiv record; verify their identifiers/status/URLs before adding links or publication relationships.
- Stages 01 and 02 remain in their prior review states. Stage 03 makes no claim that either prerequisite has been accepted.
- Exact next stage: Stage 04, publication reconciliation, after Stage 03 review. No Stage 04 work was started here.
- Review result: pending human review.
