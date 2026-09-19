# Execution status

All implementation stages start as **not started**. Writing this prompt pack did not build, verify, refactor, or deploy the website. Current CV facts and remote workflow state have not been verified by this planning task.

| Stage | Status | Report | Open blocker / reviewer |
| --- | --- | --- | --- |
| 00 | Implemented, awaiting review | [00_baseline.md](reports/00_baseline.md); [route_inventory.md](reports/route_inventory.md); [source_ledger.md](reports/source_ledger.md) | Retrospective audit; review exact viewport/screenshot limitations and baseline findings before acceptance |
| 01 | Implemented, awaiting review | [01_foundation.md](reports/01_foundation.md) | Canonical CV alignment pass applied; review shared career records before Stage 02 |
| 02 | In progress | [02_profile.md](reports/02_profile.md) | User directed Stage 02 to proceed while Stage 01 remains awaiting review; 1024 px routes and script-free Home preview checked, public email confirmed; keyboard-triggered focus visual remains unverified |
| 03 | Implemented, awaiting review | [03_research_software.md](reports/03_research_software.md) | User directed Stage 03 while Stages 01–02 remain unaccepted; their review statuses are preserved |
| 04 | Not started | — | Requires 03 and CV access |
| 05 | Not started | — | Requires 04 |
| 06 | Not started | — | Requires 05 |
| 07 | Not started | — | Requires 06 and CV build evidence |
| 08 | Not started | — | Requires 07 |
| 09 | Not started | — | Requires 08 |

Allowed statuses: Not started; In progress; Blocked; Implemented, awaiting review; Accepted. Use Accepted only when the applicable checks and review have happened. Record partial progress separately from acceptance; do not hide blocked checks behind a completed label.

## Open factual questions

Stage 00 verified the canonical CV revision, PhD/MSc/engineering wording, software roles, teaching/service sections, and 2026 bibliography against `BabaSanfour/cv-latex` revision `e382f9a`. Remaining factual follow-up is the public URL/status for the face-familiarity bioRxiv record and publication title/DOI reconciliation. The owner confirmed on 2026-09-19 that the current shared public email (`hamza.abdelhedi@umontreal.ca`) is the preferred destination.

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
