# Visual refresh handoff

Steps 1–4 completed locally on 2026-10-06. The final audit found no blocking
issues in the checked scope. Step 4 added documentation; it required no
production styling, content or JavaScript fixes. Implementation and local
validation were completed before the release described below.

## Accepted design

- Historical navy/teal identity, pale-blue canvas, ink text and readable dark
  teal links. Bright teal supplies borders and decoration. Terracotta/peach
  appear only in teaching and selected About/Community decoration; no ochre.
- The white rounded greeting box with its navy left border remains. Home's
  Teaching, Publications, Research and Software sections share heading,
  spacing and white-card rules. Workshop cards retain white backgrounds,
  rounded corners and teal top borders.
- One existing MAIN teaching photograph retains its full frame and confirmed
  October 2024 Montréal caption. Its largest responsive WebP is 85,676 bytes;
  smaller alternatives are 26,818 and 52,380 bytes. No photographer is invented.
- Three original static software motifs sit beside their titles at 84px.
  Shared section marks extend to secondary pages. They are decorative site
  illustrations rather than package logos or scientific results.
- Archives retain compact records. All facts, record order, routes, anchors,
  contributor roles, filters and the Research map are preserved.

Style ownership and optional media fields are documented in [README](../README.md#visual-styles).
The photograph source and reproduction details are in
[the asset notes](../site/images/optimized/README.md).

## Final validation

| Check | Result |
| --- | --- |
| Bookshop generation and production Jekyll build | PASS |
| Content connections | PASS: 46 bidirectional connections, 105 records |
| Strict site/CV validator | PASS: 74 HTML pages, routes/assets and metadata/JSON-LD; zero validator warnings |
| CV provenance | Unchanged source `90acf5b62eea`, PDF hash prefix `479bfd8d4878` |
| Every HTML page at 320, 390, 768, 1024 and 1440 CSS pixels | 370/370 PASS: no horizontal overflow, broken loaded images or exposed decorative marks detected |
| Every HTML page without site scripts at 390px | 74/74 PASS; prior Step 3 also checked the ten main pages at all five widths |
| Filter, URL, reset and fallback browser checks | 20/20 PASS |
| Reduced-motion emulation, ten main pages at 390px | 10/10 PASS; preference confirmed true, no excessive CSS animation/transition durations |
| Optional media omitted/unknown in isolated production build | PASS: Home, Teaching and Software retain original text, ordered links and anchors; no photo/motif wrappers |
| Final rebuild versus audited Step 3 output | All 74 HTML pages and compiled CSS byte-identical |
| `git diff --check` | PASS |

The browser matrices ran in visible native Chrome against the local production
output. Image checks force lazy images to load in the disposable audit frames;
production retains lazy loading. The behavior checks exercise publication
multi-select types/years, keyword any/all, empty states and focus restoration;
news URL filters, reset and explicit-anchor precedence; Research URL/question
selection and Escape reset; clipboard-denial manual fallback; and static
publication/news/Research/spotlight/journey fallbacks.

Native keyboard checks additionally covered spotlight selection, journey
Space/Escape, publication search/type selection/reset and filter Escape,
successful citation-copy feedback, news search/reset, and Research question
selection/Escape. At actual 200% browser zoom, Home, Teaching, Publications,
Updates and Research remained readable; menu focus wrapped correctly and
Escape returned focus to its opener. The Teaching caption link reached
`/teaching/#main-rsa` by keyboard. Focus outlines were visible in the inspected
menu, journey, news and Research states.

All ten main page headers were visually inspected at 390px, including photo
and motif scale and wrapped titles. Earlier Step 2/3 desktop and small-screen
visual evidence remains applicable because the final output is identical.
The audit adds no full-page screenshot archive or physical-device testing.
It is not a screen-reader certification or a cross-browser test suite.

## Color and payload

Measured palette contrast: ink/canvas 16.9632:1, teal/canvas 5.7499:1,
muted text/canvas 5.8102:1, muted text/white 6.2888:1, white/teal button
6.2235:1, white/hover-teal 9.2533:1, teal/pale hover surface 5.4935:1,
navy focus/canvas 10.3337:1 and control boundary/canvas 3.6637:1.
Terracotta/peach is 4.0450:1 and is restricted to decoration, not normal text.
These are palette-pair calculations, supplemented by scoped visual focus
checks, rather than an exhaustive automated contrast certification.

Final CSS is 177,609 uncompressed bytes, 9,725 bytes above the Step 1 baseline.
The extra teaching image remains below the 400KB target, and SVG motifs add
no separate requests. Step 4 adds no website payload. These are encoded file
sizes, not cold-network or Lighthouse measurements. Existing Ruby/Sass
dependency/deprecation warnings remain; zero warnings above refers to the
strict site validator.

## Next steps

The owner authorized committing and deploying the refresh on 2026-10-06.
The release uses four logical commits: foundation, teaching/software and Home
pilot, secondary-page propagation, then documentation. The existing strict
CV/build workflow remains the release gate. Deployment status and the live
Home, Teaching, Software, Research and publication checks are reported with
the release result. No workflow or CV gate was weakened.

Optional place imagery, publication figures/thumbnails, more elaborate
software illustrations and additional accent colors remain deferred. They
are future design choices, not unfinished requirements of this refresh.

Detailed local evidence is kept in ignored `_qa/step-4/` and
`_local/design-ideas/step-4-audit.md`.
