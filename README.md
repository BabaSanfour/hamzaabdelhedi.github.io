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

External resources use labelled `links`. A news entry can set `resources_from: teaching:brainhack-2026` to reuse a course's resources instead of copying URLs. Award amounts live in `recognition.yml`; news links to the award instead of repeating its amount. The Faculty of Medicine amount is **C$25,000/year**, confirmed by the owner on 2026-10-05; the local CV source has the same correction; publish that CV change before deploying the website.

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
