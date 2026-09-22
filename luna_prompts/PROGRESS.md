# Execution status

All implementation stages start as **not started**. Writing this prompt pack did not build, verify, refactor, or deploy the website. Current CV facts and remote workflow state have not been verified by this planning task.

| Stage | Status | Report | Open blocker / reviewer |
| --- | --- | --- | --- |
| 00 | Implemented, awaiting review | [00_baseline.md](reports/00_baseline.md); [route_inventory.md](reports/route_inventory.md); [source_ledger.md](reports/source_ledger.md) | Retrospective audit; review exact viewport/screenshot limitations and baseline findings before acceptance |
| 01 | Implemented, awaiting review | [01_foundation.md](reports/01_foundation.md) | Canonical CV alignment pass applied; review shared career records before Stage 02 |
| 02 | In progress | [02_profile.md](reports/02_profile.md) | User directed Stage 02 to proceed while Stage 01 remains awaiting review; 1024 px routes and script-free Home preview checked, public email confirmed; keyboard-triggered focus visual remains unverified |
| 03 | Implemented, awaiting review | [03_research_software.md](reports/03_research_software.md) | User directed Stage 03 while Stages 01–02 remain unaccepted; their review statuses are preserved |
| 04 | In progress | [publication_reconciliation.md](reports/publication_reconciliation.md); [04_publications_data.md](reports/04_publications_data.md) | EEG-alignment item withheld at owner's request pending a primary source; thesis item permalink and source abstract check remain open |
| 05 | Implemented, awaiting review | [05_publications_ui.md](reports/05_publications_ui.md) | User directed Stage 05 while Stage 04 remains In progress; exact-width screenshot artifacts, no-JavaScript browser capture, and full keyboard/copy-failure review remain open |
| 06 | Implemented, awaiting review | [06_visual.md](reports/06_visual.md); [design_tokens.md](reports/design_tokens.md) | Exact-width after screenshot artifacts, full keyboard traversal, and review of remaining legacy inactive-component effects remain open |
| 07 | Not started | — | Requires 06 and CV build evidence |
| 08 | Not started | — | Requires 07 |
| 09 | Not started | — | Requires 08 |

Allowed statuses: Not started; In progress; Blocked; Implemented, awaiting review; Accepted. Use Accepted only when the applicable checks and review have happened. Record partial progress separately from acceptance; do not hide blocked checks behind a completed label.

## Open factual questions

Stage 00 verified the canonical CV revision, PhD/MSc/engineering wording, software roles, teaching/service sections, and 2026 bibliography against BabaSanfour/cv-latex revision e382f9a. Stage 04 used that bibliography and publisher, conference, arXiv, bioRxiv and Research Square records to reconcile the CV items. The supplied bioRxiv record resolved the face-familiarity title/URL discrepancy. The under-review EEG-alignment CV item still has no public primary source or abstract and is withheld from the site at the owner's request; the retained thesis still lacks an item-level Papyrus URL and direct source-abstract check. The owner confirmed on 2026-09-19 that the current shared public email (hamza.abdelhedi@umontreal.ca) is the preferred destination.

## Deferred work

- French/Tunisian Arabic translations and language switcher.
- New long-form blog and new posts.
- Immediate cross-repository CV triggers or new credentials.
- New hosting, framework migration, unrelated dependency modernization.
- Decorative generated assets and additional scientific content not supplied by sources.

## Decision changes

Append a dated entry here if explicit user instructions change scope or a recorded implementation decision. Include affected stages and the updated contract. Never silently rewrite earlier evidence.

- 2026-09-18 — User explicitly asked to begin prompt 1 / Stage 01 while the formal Stage 00 reports were absent. Stage 01 proceeded with a local build, direct CV PDF inspection, repository evidence, and browser QA; at that point Stage 00 was not started and Stage 01 remained awaiting review.
- 2026-09-18 — User confirmed `BabaSanfour/cv-latex` as the canonical CV repository and authorized the available repository/build/browser checks. Stage 00 was reconstructed retrospectively from clean commit `9530c70`, verified against CV revision `e382f9a`, and is now implemented, awaiting review; no site source content was changed by the audit.
- 2026-09-18 — User requested the Stage 01.1 canonical-CV alignment: change CHU Sainte-Justine to Research Collaborator, add Abundant Intelligences, reclassify SNAILab to the MSc period, correct SUP’COM, and update the current-position pointer. Shared data and Stage 00/source evidence were updated; historical update-card wording was preserved.
- 2026-09-19 — User explicitly directed Stage 02 while Stage 01 remained Implemented, awaiting review. Stage 02 proceeded from the existing shared data; Stage 01's status and review requirement remain unchanged. At the start of Stage 02, final browser checks and owner confirmation of the public email remained open; the subsequent entry records the confirmation and latest checks.
- 2026-09-19 — Owner confirmed `hamza.abdelhedi@umontreal.ca` as the preferred public address. Stage 02 retained the existing shared destination and repaired Contact as a `mailto:` link. Home, About, and Contact were checked at 1024×768; a script-free Home preview remained visible after script tags were removed. Keyboard-triggered focus visual remains unverified, so Stage 02 remains In progress; see `reports/02_profile.md`.
- 2026-09-19 — User explicitly directed Stage 03 while Stage 01 remains Implemented, awaiting review and Stage 02 remains In progress. Stage 03 work proceeds within its bounded scope; the earlier stage statuses and outstanding reviews are unchanged.
- 2026-09-19 — Exact-width Chrome checks for Stage 03 found hidden trajectory detail cards widening Home at 1024 px. Added a narrow responsive placement rule for 769–1024 px in the existing trajectory component so the cards remain within the viewport; recorded the scope adjustment and browser evidence in `reports/03_research_software.md`.
- 2026-09-20 — User explicitly directed Stage 04 while Stage 03 remained Implemented, awaiting review. Stage 04 proceeded within the publication-data scope; Stages 01–03 statuses were preserved. The user supplied the current face-familiarity bioRxiv record, resolving the earlier title/URL question.
- 2026-09-21 — Stage 04 added optional preprint_url so the existing bioRxiv version remains linked when the canonical record points to its final iScience article. The shared publication contract, schema, CMS inputs and compatible renderers were updated. Stage 04 remains In progress because the EEG-alignment item is intentionally omitted pending a manuscript source and thesis source checks remain open.
- 2026-09-21 — At the owner's request, removed the EEG-alignment publication record from the site and its foundation-model project outputs until its primary manuscript source is available. The CV item is recorded as intentionally deferred in the reconciliation reports.
- 2026-09-22 — User explicitly directed Stage 05 while Stage 04 remains In progress. Publication cards, detail pages, Home selection, index filters, and canonical spotlight resolution were implemented without changing verified bibliographic facts. Stage 05 is Implemented, awaiting review; saved exact-width screenshots, a JavaScript-disabled browser session, and full keyboard/citation-copy failure checks remain for review.
- 2026-09-22 — User explicitly directed Stage 06 while Stages 01–02 and 04 remain unaccepted. Stage 06 proceeded within the visual-system scope: shared tokens, active surface styling, responsive rules, focus/reduced-motion defaults, and inline-style cleanup were implemented without changing factual/source records or starting Stage 07. Stage 06 is Implemented, awaiting review; see `reports/06_visual.md`.
