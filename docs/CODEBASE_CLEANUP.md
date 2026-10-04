# Pre-R4 code cleanup

Date: 2026-10-03. Owner-authorized cleanup after the R3 visual refinements. Existing commits are preserved; current repairs and cleanup form a new local checkpoint. R4 is deferred to a new discussion.

## Removed

- Fourteen unused Bookshop component directories: affiliation card/slider, blog card/section, generic button renderer, contact form, generic content, newsletter, page image, old project card/list/section, updates section, and the styling-only post-redirect directory. Active button and external-update styles were moved into shared styles before deleting their former directories.
- Duplicate `news-list-item` and news-section implementations; unused pagination, sharing, Disqus, analytics and newsletter scaffolding; the old animation hooks and resizing handler.
- Superseded selected-record and full-record Home journey renderers, their CSS, and their unused configuration. The owner-selected grouped journey remains.
- Unused reframe, tiny-slider, iTyped and smooth-scroll polyfill code. The image zoom library still used by update stories is retained, with its license header, as `site/js/vendor/lightense.min.js`.
- Dead page/project/share styling, unused profile-list styles, and the date-range forwarding include. Actual date formatting remains shared through the Bookshop date-range include.
- Nine unreferenced image assets and tracked Finder metadata.
- `/blog/` and `/projects/` compatibility pages and the old CV PDF alias. The helper, validator and deployment workflow now use only the canonical CV destination. No current internal link points to a removed route.

Current canonical data, publication and research details, update stories, tag pages, CMS schemas for active content, accessibility fallbacks, and working controls remain. This is a reachability and reference audit, not a blanket deletion based on a single browser coverage run.

## Git hygiene

Local-only paths are ignored: `_qa/`, `docs/identity-repair/evidence/`, `docs/identity-repair/reports/`, `site/_cloudcannon/`, and build logs. Previously tracked review captures and the generated editor bundle are removed from the index while remaining on disk. CI already regenerates the Bookshop bundle. Durable instructions and reusable validation scripts remain tracked.

The earlier commits are retained unchanged. Consequently, older screenshots and legacy code remain in historical commits; this cleanup removes them from the new working-tree snapshot, not from Git's object history.

## Verification

- Production Jekyll build and Bookshop live generation passed. Static crawl: 68 retained HTML pages, internal routes/assets, metadata and JSON-LD passed. The known missing local canonical CV PDF is the sole validator warning.
- Rendered text and link lists match the pre-cleanup output for all 68 retained pages. Only the two explicitly retired HTML routes disappear.
- Eleven representative routes at 390, 768, 1024 and 1440 CSS pixels: no overflow or broken images; layout and sampled computed styles match before/after after normalizing removed inactive classes and comment whitespace. Two exposed style dependencies in update titles and publication content were preserved explicitly and rechecked at all four widths.
- Home journey: all five groups checked with keyboard at four widths, plus desktop hover, Escape, touch and no-JavaScript behavior. Browser checks cover responsive menu, About disclosure, publication filtering, reduced motion and no-JavaScript visibility.
- JavaScript syntax, shell syntax, `git diff --check`, and canonical-only CV-copy behavior passed. The CV helper used a historical PDF solely as a temporary test fixture; it did not supply the site's current CV.
- Generated CSS fell from 181,886 to 137,021 bytes (24.7%). Bundled vendor JavaScript fell from 48,003 to 7,885 bytes (83.6%).

Detailed captures, comparisons, backups and scratch scripts are local in `_qa/cleanup/`. This is implementation validation, not an independent review verdict. Chrome was checked; Safari/Firefox, screen-reader output, live CloudCannon editing, remote destinations, CI and deployment remain unverified. No push or deployment is part of this task.
