# Stage 05 — Publication presentation and filtering

## Status

**Implemented, awaiting review** — 2026-09-22. The owner directed Stage 05 while Stage 04 remains **In progress**. Stage 04's unresolved source questions are preserved; this stage changes publication presentation and interaction only. No bibliographic facts, author order, titles, statuses, years, slugs, or source URLs were changed.

## Final component interface

- `publication-card` is the shared card interface used by the Home selected-publications block and the publication index. It accepts `project=publication` and the optional `layout=vertical` mode used on Home. It renders the linked detail title, ordered authors, venue/year, readable type/status labels, optional summary, native abstract disclosure on index cards, and only the resource links present in the record.
- `featured-publications` accepts `title`, `description_html`, `link_url`, and `max_items`. The component derives `site.publications`, keeps only `featured: true`, sorts deterministically, and caps the output at three records. Home uses the label **Selected publications** and `max_items: 3`.
- Publication detail pages use the same metadata vocabulary, render the canonical front-matter abstract once, include distinct body content only when present, and resolve `related_research` and `related_software` IDs to their existing records.

## Filter and accessibility behavior

The index derives type, year, and keyword controls from the 14 current records. Type controls expose full labels for journal articles, conference proceedings, conference papers, conference abstracts, preprints, and theses. Search, type, year, and keyword filters are combined with AND semantics. Reset clears all four filters, updates `aria-pressed`, restores every year group, and updates the polite result announcement. Empty year groups and the no-results message are hidden or shown with the filter state. All records remain visible and usable in the source HTML when JavaScript is unavailable. Abstracts use native `<details><summary>Abstract</summary>…</details>` and the title remains a normal detail-page link.

Citation copy remains an actual button. It announces success or failure, tries the Clipboard API and legacy copy API, and exposes a read-only textarea fallback when both fail. Attribute values are escaped, including BibTeX, search text, and keyword lists; the card no longer emits per-card IDs or inline event handlers.

## Spotlight and script cleanup

- The spotlight publication resolves `publication_id: coord2region` against the canonical publication collection and derives its title, thumbnail, metadata, and `.html` detail URL.
- The old hard-coded “Latest Publication” copy, repository/star-count branch, and unused star-fetch logic were removed. Software remains represented by the dedicated Software section.
- The old publication view switcher, card inline helpers, index inline filter script/style blocks, and duplicate spotlight script tag were removed. The default layout loads `publications.js` and `spotlight.js` once each.

## Preserved records and resources

The generated index contains all 14 Stage 04 publication records grouped into five year sections. Home selects exactly three deterministic featured records: the 2026 iScience article, Coord2Region, and the 2025 MEG ANN review. Existing Paper, Preprint, PDF, Code, Data, Project, DOI, arXiv, Zenodo, Poster, and BibTeX values are rendered only when present. No Stage 04 unresolved item was reintroduced; the EEG-alignment record remains withheld and the thesis source questions remain open.

## Validation

| Check | Actual result | Evidence / limitation |
| --- | --- | --- |
| `npm run bookshop-live` | Pass, exit 0 | Regenerated `site/_cloudcannon/bookshop-live.js` after the component and hero changes. |
| `BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site --trace` | Pass, exit 0 | Production output generated in repository-root `_site/`; existing Ruby CSV/base64 and Sass import/color-function deprecation warnings remain. |
| `node --check site/js/publications.js` and `node --check site/js/spotlight.js` | Pass | Both scripts parse successfully. |
| `git diff --check` | Pass | No whitespace errors in tracked changes; new report/source files were inspected separately. |
| Generated publication structure | Pass | 14 index wrappers, 14 detail pages, five year groups, one H1 per detail, no detail `<style>` blocks, one canonical Abstract heading per detail, and no raw Liquid. |
| Links and selection | Pass | All generated publication routes match the route inventory; internal publication/project links include `.html`; Home contains three selected cards; spotlight points to the canonical Coord2Region route. |
| Duplicate/retired markup scan | Pass | No `Latest Publication`, `stargazers_count`, old repository promotion, `toggleAbstract`, or `copyBibtex` helper remains in generated publication/Home output. The default output contains one publication script and one spotlight script. |
| Chrome Guest browser QA | Partial pass | At `http://127.0.0.1:8000/publications/`, the accessibility tree showed the full index, readable labels, native disclosure controls, and 14 publications. Exercised combined filters (type + year + keyword), a zero-result state, reset, title search (`Coord2Region` → one result), native abstract disclosure, and a representative detail page with H1, metadata, resources, and one Abstract section. |

The CUA browser surface exposed visual/accessibility evidence in-session but did not provide a local screenshot-file export or a reliable viewport-resize control. Exact saved captures at 390, 768, 1024, and 1440 px, a browser JavaScript-disabled session, keyboard-only traversal of every control, and forced Clipboard API failure remain reviewer checks. No console output was exposed by the browser surface, so no clean-console claim is made.

## Unresolved data issues

Stage 04 remains **In progress**. The EEG-alignment CV item is intentionally absent pending a primary manuscript source. The retained thesis still lacks an item-level Papyrus URL and direct source-abstract check. Stage 05 did not alter either issue and stops before the visual-system stage.
