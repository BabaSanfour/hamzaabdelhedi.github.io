# Stage 04 — Publication data reconciliation

## Status

**In progress** — 2026-09-21. The owner explicitly directed Stage 04 while Stage 03 remained Implemented, awaiting review. Stages 01–03 retain their previous statuses. The EEG-alignment item is omitted at the owner's request pending a primary manuscript source; thesis record checks also remain open. No commit was created by this stage.

## Inventory and outcome

The starting site contained 8 publication files. The current canonical CV bibliography at revision [e382f9a98934de4cea7cd4b85be3379ff8b680fa](https://github.com/BabaSanfour/cv-latex/blob/e382f9a98934de4cea7cd4b85be3379ff8b680fa/publications.tex) contains 14 entries. Seven CV entries mapped to existing records, including the final iScience article replacing an older site bioRxiv version; seven CV entries were absent from the baseline site. Stage 04 added all seven, then the EEG-alignment record was removed at the owner's request until a primary manuscript source is available. The current collection has 14 records representing 13 CV entries plus one public thesis not listed in the CV.

| Measure | Before | After |
| --- | ---: | ---: |
| Site publication records | 8 | 14 |
| Current CV entries represented on the site | 7 matched records | 13 represented; 1 intentionally withheld |
| New records | — | 6 currently present; 7 were added before the requested removal |
| Prior-version merges | — | 1 (bioRxiv → final iScience record; prior link retained) |
| Removed records | — | 1 newly added EEG-alignment record; no baseline record removed |
| CV-unlisted public site records retained | 1 thesis | 1 thesis |
| Original routes retained | 8 | 8 |
| Featured records | 3 | 3 |

The complete reconciliation table, evidence URLs, author lists, types, statuses, years and per-item actions are in [publication_reconciliation.md](publication_reconciliation.md). The full set of production routes is appended to [route_inventory.md](route_inventory.md), and the source decisions are appended to [source_ledger.md](source_ledger.md).

## Changes made

- Added 6 CV outputs that remain on the site: the PMLR PNPL retrospective, CCN 2024 face paper, CCN 2022 face paper, current face-familiarity bioRxiv paper, PNPL 2026 competition preprint, and MEG foundation-model roadmap.
- Retained all original files and slugs. The intrinsic-neural-oscillations route now identifies the final 2026 iScience article; the former bioRxiv DOI remains in `preprint_url`.
- Corrected the MEG review DOI from `10.1088/1741-2552/ad42c3` to `10.1088/1741-2552/addd4a`, verified the June 12, 2025 publication date, and removed its duplicate body abstract.
- Normalized every record to a stable `id`, explicit `slug`, ordered author string, integer year, supported type/status, `featured` boolean, keywords and front-matter abstract where a source abstract is available.
- Moved existing body-only abstracts into front matter without changing their wording; the final iScience abstract replaces the older preprint abstract. Removed the EEG-alignment publication record at the owner's request until a primary manuscript source is available.
- Corrected the thesis title from the UdeM Papyrus listing, removed the unsupported `2025-05-01` date, and retained the record as a publicly deposited thesis.
- Normalized relationships to `related_research` and `related_software`; the face-familiarity and foundation-model project records now link to their verified publication records, and Coord2Region links to its software record.
- Set three featured items: the iScience article, the MEG ANN review, and Coord2Region. This keeps a recent empirical article, a field review and a first-author software paper in the curated set.
- Added `preprint_url` as an optional contract/schema field to preserve an earlier public version alongside a final paper. CloudCannon now has type/status/featured inputs. The card/detail templates read front-matter abstracts, retain the relevant Paper/Preprint/PDF links, and omit an empty abstract panel for a record whose manuscript is unavailable.
- Deferred the legacy “Latest Publication” spotlight copy to Stage 05; the publication data and compatibility patch do not redesign that presentation.

## Type and status totals

The 14 records are 3 journal articles, 1 conference-proceedings paper, 3 conference papers, 6 preprints and 1 thesis. Statuses are 8 published, 5 preprint and 1 under review. The omitted EEG-alignment CV item is not counted in the site totals. No record is labeled accepted or submitted. The 2025 PNPL competition paper is classified as a conference paper; the 2026 retrospective is the item explicitly listed in PMLR proceedings.

## Validation

| Check | Result |
| --- | --- |
| `npm run bookshop-live` | Pass, exit 0; regenerated the Bookshop preview bundle for the compatible card changes. |
| `BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site --trace` | Pass, exit 0; generated the production site at repository-root `_site/`. Existing Ruby CSV/base64 and Sass import/color-function deprecation warnings remain. |
| Publication data/route scan | Pass: 14 records, unique IDs/slugs, 3 featured items, allowed types/statuses, integer years, resolved research/software IDs, and all 14 detail routes generated. |
| Abstracts and detail structure | Pass: all 14 generated details contain exactly one abstract panel and one H1. No raw Liquid was found. |
| Home, publication index, and detail links | Pass: the earlier local-link scan passed; after this request, rebuilt the site and confirmed Home, Publications, and the foundation-model project no longer reference the removed record. |
| Existing routes | Pass: all 8 original publication routes remain at their previous slugs. |
| diff --check and new-file whitespace scan | Pass: diff --check is clean; all 26 hand-authored Stage 04 source/report files were rechecked for trailing whitespace. |

External primary sources were checked where accessible. PubMed, arXiv, the official CCN 2022 record, the CCN 2024 PDF, and the current PNPL publication page/PDF supplied record-level evidence. The bioRxiv .full page could not be fetched by the web reader; the supplied URL and bioRxiv metadata API verified the record. No public EEG-alignment manuscript was found; its website record was removed at the owner's request. No responsive visual QA was performed in this data stage; Stage 05 owns publication presentation work.

## Remaining evidence and handoff

- The CV lists the EEG-alignment submission, but the owner requested that its website record be removed until a primary manuscript source is available. The title, authors, year, venue and under-review status remain in the CV; the CV repository was not edited.
- A stable item-level UdeM Papyrus URL and thesis-PDF abstract check remain unresolved. The public listing verifies its title/year; the existing site abstract was preserved.
- The official PNPL project page and proceedings PDF establish publication in PMLR 2026, but no volume-specific PMLR landing record or DOI was found. The record links to the official PNPL page/PDF and does not add an unverified volume field.
- The face-familiarity CV entry still needs its working title corrected in the separate CV repository. This implementation changes only the website.

Stage 04 stops here. Stage 05 can review status presentation and replace the stale manually curated “Latest Publication” spotlight label.
