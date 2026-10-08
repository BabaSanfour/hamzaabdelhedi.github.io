# Hamza Abdelhedi — Personal Website

Personal website of **Hamza Abdelhedi**, a computational neuroscience researcher studying how changing sensory evidence becomes decisions and actions with MEG/EEG, neural dynamics, and computational modeling, while building open-source neuroscience software.

The site uses Jekyll and Bookshop on top of the existing Vonge-derived component system. The primary navigation has Research, Teaching, Software, Publications, Talks & Posters, Community, and Awards. Home, About, Updates, and CV are in a smaller utility row. Teaching also has a homepage section immediately after the introduction; Contact is available from Home and the footer.

## Stack and prerequisites

| Tool | Project/deployment version |
| --- | --- |
| Node.js | 20 in GitHub Actions |
| Ruby | 3.3.0 (`.ruby-version`) |
| Jekyll | 4.3.3 |
| Bookshop | 3.9.0 |
| jekyll-sitemap | 1.4.0 |
| jekyll-tagging | 1.1.0 |

LaTeX (`latexmk` and `pdflatex`) is optional for a local CV prebuild. The deployment workflow compiles the public `BabaSanfour/cv-latex` repository itself.

## Local production build

From the repository root:

```bash
npm ci
BUNDLE_GEMFILE=site/Gemfile bundle install
npm run bookshop-live
BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production \
  bundle exec jekyll build --source site --destination _site --trace
```

The build writes production output to `_site/`. To preview that output with a static server:

```bash
python3 -m http.server 8000 --directory _site
```

`npm start` is a convenience development command that runs Bookshop and Jekyll with the existing `--unpublished` flag. It is useful for editing, but its output is not release evidence. When a component template or Bookshop schema changes, rerun `npm run bookshop-live`; do not hand-edit the generated Bookshop JavaScript.

Useful checks after a change:

```bash
git diff --check
node --check site/js/common.js
node --check site/js/publications.js
node --check site/js/spotlight.js
node --check site/js/updates-filter.js
ruby scripts/validate-content-links.rb
```

## CV integration and deployment

### Teaching, mentoring, service, presentations, and awards

The website presents selected CV content as readable pages:

| Route | Editable records |
| --- | --- |
| `/community/` | `site/_data/community.yml` |
| `/teaching/` | `site/_data/teaching.yml`, `site/_data/mentoring.yml` |
| `/presentations/` | `site/_data/presentations.yml` |
| `/awards/` and About recognition highlights | `site/_data/recognition.yml` |

These records are available through the existing CloudCannon data editor. Keep stable `id` values, because they become section links. Records render in file order within each `group`; optional `date_label` preserves the source's precision (including seasons and ongoing roles). Optional `links` contain `{label, url}` entries. Add slides, posters, or recordings only when a public resource exists. Upcoming activities must remain explicitly scheduled until their status is confirmed.

Teaching records in the `resources` group appear first on the teaching page and in the homepage `teaching-section` component, using an optional `short_title`. This includes the Brainhack Montréal October 2026 workshop and CoCo Lab crash course, linked to their public repositories. Award records are grouped into `scholarships`, `distinctions`, and `travel`; optional `amount` preserves the original currency, and `featured: true` also displays the record on About.

The CV is the upstream source for career facts, supplemented by public event programs and course repositories. These page records are curated manually; they are not automatically imported from LaTeX. Use `activity-record.html` for the shared record layout and `_activities.scss` for its styles. Cards use the site's existing motion tokens and respect reduced-motion preferences. The full CV remains the formal record.

### News and connections

`site/_data/updates.yml` owns news titles, summaries, dates, primary categories, and stable IDs. The homepage shows the five newest entries as a compact dated list. Each headline links to its full archive entry and related resources. The archive sorts by date, groups by year, and supports shareable search/topic/year URLs. Search includes related record titles and topics. Topic filtering matches the primary category or a secondary tag. All entries remain readable without JavaScript.

Use `story_url` for an existing long-form story and add the matching `update_id` to its front matter. Story headings, page titles, related-story cards, and previous/next links then resolve news titles from the shared record. Historical story bodies and URLs remain intact. A story can have its own original publication date; the news date describes the announcement. Preserve uncertain precision: `date_precision: month` displays only the month/year (the first of the month is used solely for sorting). Do not invent a date for an undated course.

`site/_data/connections.yml` declares a relationship once using `from`, `to`, `forward`, and `reverse`. References use `type:id`; supported types are `update`, `research`, `publication`, `software`, `teaching`, `mentoring`, `presentations`, `community`, and `awards`. Labels explain the relationship in each direction. Both sides resolve titles and URLs from their canonical records. Existing project-to-publication/software references stay in their current records; missing publication backlinks are derived from those references. Avoid inferring funding, authorship, or participation from shared keywords.

External resources use labelled `links`. A news entry can set `resources_from: teaching:brainhack-2026` to reuse a course's resources instead of copying URLs. Award amounts live in `recognition.yml`; news links to the award instead of repeating its amount. The Faculty of Medicine amount is **C$25,000/year**, matching the canonical CV source.

Run `ruby scripts/validate-content-links.rb` when editing records or relationships. It checks IDs, endpoints, relationship labels, and story/resource references. `connected-content.html` renders contextual links, `connection-link.html` resolves destinations, `news-item.html` renders archive entries, `news-brief.html` renders the compact homepage list, and `_news.scss` controls presentation.

### PDF delivery

The canonical CV source is [`BabaSanfour/cv-latex`](https://github.com/BabaSanfour/cv-latex). The website workflow in `.github/workflows/deploy.yml` checks out its `main` branch, compiles `main.tex`, verifies a fresh PDF, and copies the verified PDF to `/assets/files/Hamza_Abdelhedi_CV.pdf`, the single website CV path.

Compilation, PDF validation, copying, byte comparison, and Jekyll artifact checks fail the workflow before the Pages artifact is uploaded. A CV-only change does not trigger this repository automatically; after the CV change is merged, use **Actions → Deploy to GitHub Pages → Run workflow**. No schedule or cross-repository credentials are configured.

For a local prebuild, use a current canonical checkout and the fresh-build helper (requires Python 3, Ruby, and TeX Live/MacTeX with `latexmk`):

```bash
git clone --depth 1 --branch main \
  https://github.com/BabaSanfour/cv-latex.git _cv-src
bash scripts/build-cv.sh _cv-src
BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site
ruby scripts/validate-content-links.rb
ruby scripts/validate-site-output.rb --cv-source _cv-src _site
```

If `_cv-src` already exists, inspect its changes and update it deliberately; the helper does not reset or overwrite a checkout. It builds into a new temporary directory, then copies the verified PDF and a JSON manifest containing the exact source revision, source-file hashes, local-change status, PDF hash, and build time. Both generated artifacts are ignored by Git. The manifest identifies locally corrected builds; those corrections must reach `cv-latex/main` before deployment.

The checked-in site validator is strict by default: a missing PDF, missing provenance, altered PDF, or source mismatch fails validation. `--diagnostic` permits a missing PDF for layout work only. Always provide `--cv-source` for release checks so changes since compilation are detected. CI runs the strict validator and checks the Faculty of Medicine amount against the website record before compiling. The obsolete `/Hamza_Abdelhedi_cv.pdf` alias remains intentionally removed.


## Project structure

### Visual styles

The historical bright teal (`#1495a7`) is a decorative accent, exposed as
`--color-accent`; links and buttons retain the darker readable teal. Pale teal
and navy surfaces are available as `--color-accent-surface` and
`--color-secondary-surface`. Palette values live in the shared Bookshop color
settings rather than being repeated in page styles.

`component-library/shared/jekyll/visual-icon.jekyll.html` supplies original,
static section marks through `bookshop_include visual-icon name='teaching'`
(also `publication`, `research`, `software`, `news`, `path`, `community`,
`award`, `presentation`, and `signal`).
These marks are decorative; keep the adjacent text labels. The hero's optional
`show_signal_motif` switch displays the signal trace above the greeting. Shared
icon geometry lives in `_visual-icons.scss`, and the site integration styles
live in `site/assets/_visual-system.scss`.

Home's Teaching, Publications, Research, and Software sections share heading
markup and the `.home-section` rules in `site/assets/_home-sections.scss`:
full-width headings, matching spacing, and primarily white cards with teal top borders,
consistent padding, ink titles, and the same hover/focus treatment. Their
photo and illustration layouts remain suited to their content. Featured
teaching resources retain white surfaces and teal borders.

Secondary-page headings reuse the same marks. `_secondary-pages.scss` carries
the white surfaces, teal top borders and ink titles into Research, Software,
and selected About panels, while activity and publication archives keep their
compact records. About's existing origin line and the Community marks extend
the warm decoration. About retains its original portrait and introduction,
with the existing interview image and institutional logos providing visual
context for the biography and career records.

Teaching features and selected personal/community accents use
`--color-warm-accent` (terracotta `#B85C4A`) for decorative rules and marks,
with `--color-warm-surface` (peach `#FFF0E8`) behind the marks only. Keep text
ink/navy and controls teal: terracotta does not meet normal-text contrast on
peach, the page canvas, or white.

Warm accents use ochre (`--color-ochre-accent`, `#96702E`) and cream
(`--color-cream-surface`, `#FBF4E6`) only for small details, like the Awards
treatment: news/journey/award marks, Home news dots, small award labels,
selected About/Community/Awards rules and the portrait halo. Path and Teaching
borders retain teal. `.section-marker--ochre`
supplies the decorative ochre/cream marks. Large cards and panels stay white;
the About quote retains its established pale teal surface. Do not use warm
colors as block backgrounds.

Navy and teal remain the primary colors: text stays ink/navy, links dark teal
and focus outlines navy, against the pale-blue canvas. Ink on small cream
labels measures 16.77:1. Research, Software and publication figures retain
their established treatment. Accents reuse existing content and introduce
no extra image assets.

Home's teaching component and the Teaching page select `feature_record_id:
main-rsa`. Optional `visual` metadata on that teaching record supplies one
shared caption, alt text, intrinsic dimensions, and responsive `sources`
(each with `src` and `width`). `teaching-feature` renders nothing without
`visual.src`, and both layouts return to their text layout. Below-fold media
is lazy-loaded; the full photograph is preserved rather than cropped.

Software records can set `motif: denoise`, `pipeline`, or `atlas`. The shared
`visual-icon` include supplies these original decorative site illustrations;
they are not official package logos or scientific results. Missing or unknown
motifs leave the card text and links intact. Compact and full cards share small
illustrations beside their titles, without additional colored tiles.

Responsive MAIN photo derivatives are committed under `site/images/optimized/`.
To reproduce them locally, install Pillow in your preferred Python environment
and run `python3 scripts/prepare-teaching-image.py`; deployment needs neither
Pillow nor this script. Sources, dimensions, and context are documented in
`site/images/optimized/README.md`. Preserve originals and only add photo
credits when confirmed.

Teaching media fields live under a record's optional `visual` object:

| Field | Purpose |
| --- | --- |
| `src`, `width`, `height` | Default image and its intrinsic dimensions |
| `alt`, `caption` | Image description and confirmed event context |
| `sources: [{src, width}]` | Responsive alternatives in ascending pixel widths |
| `credit`, `credit_url` | Optional confirmed photographer credit and link |

Keep `feature_record_id` tied to an existing teaching record. Omitting
`visual.src` removes the photograph and its wrapper; missing or unknown
software motifs produce complete text cards. Do not add empty image slots.

Selected publication detail pages can supply an optional `figure` object,
rendered by `site/_includes/publication-figure.html` after the abstract. Home
selects four papers through the `featured-publications` component's ordered
`selected_ids` (publication slugs), `max_items: 4`, and `show_figures: true`.
Its compact cards form a two-by-two block above 900px and stack below that
width. Small full-frame figure previews sit beside the titles and link to the
detail-page figures, where captions and source/license credits are shown.
Author lines show all names for up to three authors, otherwise the first two
and “et al.”, with Hamza's name emphasized.
The PCA primer and MEG foundation-model roadmap share the second row. Figure columns are 96px
wide on desktop, 80px on mobile, and 64px at 360px or below.
The publication archive also shows compact figure previews beside all 15 entries,
with 96px desktop, 80px mobile and 64px tiny-screen slots. Search and filters
continue to match only the existing text metadata. Without `selected_ids`, the component
uses the date-sorted `featured: true` records. Keep the featured flags aligned
with the chosen Home selection.

Use verified figures from the associated publication, preserve the full frame
and explain dense labels in the detail caption; the detail image and a text
link open the full-size local file. Missing/empty `figure.src` leaves a complete
text card on Home and a full-width text record in the archive, without a blank image slot.
Source/license notes and reproduction instructions live in
[`site/images/publications/README.md`](site/images/publications/README.md).

| Publication `figure` field | Purpose |
| --- | --- |
| `src`, `width`, `height` | Default image and intrinsic dimensions; omit `src` to render no figure or wrapper |
| `sources: [{src, width}]`, `full_src` | Responsive alternatives and the largest local image |
| `preview_src` | Optional 288px full-frame archive asset; falls back to responsive `src` sources |
| `alt`, `title`, `caption` | Descriptive alternative, short figure title and verified context |
| `credit`, `source_label`, `source_url` | Author/year attribution and direct link to the figure in its source publication |
| `license`, `license_url` | Confirmed license name and link |

Publication figures are styled in `_publications-page.scss`, use native
links without JavaScript, and load lazily with reserved intrinsic dimensions.
Home previews are enabled only through the component's `show_figures` option
and styled in `_home-sections.scss`; `publication-card` accepts `show_figure`.
The archive opts in separately and uses `_publications-page.scss`. Its previews
link to the same detail figures and credits, center beside collapsed records,
and stay near the top when an abstract opens.

Run `python3 scripts/prepare-publication-previews.py` after preparing figure
assets to reproduce the archive-only 288px WebPs (Pillow and `rsvg-convert`).
Their combined encoded size is 156,194 bytes for all 15 records; native lazy
loading defers offscreen requests. Home and detail-page sources stay intact.
Do not populate this field from decorative `thumbnail`/`banner` assets.

```text
site/_data/                      Shared profile, career, links, research, software, and update records
site/collections/_projects       Curated research detail documents
site/collections/_publications   Publication records and abstracts
site/collections/_posts          Existing full update stories
site/_includes                   Shared page content and metadata includes
site/assets                     Sass source and active visual-system tokens
component-library                Bookshop component templates and schemas
scripts/build-cv.sh               Fresh local CV compilation
scripts/sync-cv-pdf.sh            CV synchronization and provenance
scripts/validate-site-output.rb   Strict release route, metadata and CV checks
.github/workflows                GitHub Pages and CV build workflow
```

## License and credits

MIT License — see [LICENSE](LICENSE).

The custom site originated from CloudCannon’s Vonge template and uses Bookshop. The upstream MIT attribution is retained in LICENSE. Site modifications and content © Hamza Abdelhedi.
