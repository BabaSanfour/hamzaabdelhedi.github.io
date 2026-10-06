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

These records are available through the existing CloudCannon data editor. Keep stable `id` values, because they become section links. Records render in file order within each `group`; optional `date_label` preserves the source's precision (including seasons and ongoing roles). Optional `links` contain `{label, url}` entries. `research_id`, `software_id`, and `publication_id` resolve existing site records. Add slides, posters, or recordings only when a public resource exists. Upcoming activities must remain explicitly scheduled until their status is confirmed.

Teaching records in the `resources` group appear first on the teaching page and in the homepage `teaching-section` component, using an optional `short_title`. This includes the Brainhack Montréal October 2026 workshop and CoCo Lab crash course, linked to their public repositories. Award records are grouped into `scholarships`, `distinctions`, and `travel`; optional `amount` preserves the original currency, and `featured: true` also displays the record on About.

The CV is the upstream source for career facts, supplemented by public event programs and course repositories. These page records are curated manually; they are not automatically imported from LaTeX. Use `activity-record.html` for the shared record layout and `_activities.scss` for its styles. Cards use the site's existing motion tokens and respect reduced-motion preferences. The full CV remains the formal record.

### PDF delivery

The canonical CV source is [`BabaSanfour/cv-latex`](https://github.com/BabaSanfour/cv-latex). The website workflow in `.github/workflows/deploy.yml` checks out its `main` branch, compiles `main.tex`, verifies a fresh PDF, and copies the verified PDF to `/assets/files/Hamza_Abdelhedi_CV.pdf`, the single website CV path.

Compilation, PDF validation, copying, byte comparison, and Jekyll artifact checks fail the workflow before the Pages artifact is uploaded. A CV-only change does not trigger this repository automatically; after the CV change is merged, use **Actions → Deploy to GitHub Pages → Run workflow**. No schedule or cross-repository credentials are configured.

For a local prebuild, use the ignored `_cv-src/` checkout and the checked-in helper:

```bash
git clone --depth 1 --branch main \
  https://github.com/BabaSanfour/cv-latex.git _cv-src
(cd _cv-src && latexmk -pdf -file-line-error -halt-on-error \
  -interaction=nonstopmode main.tex)
bash scripts/sync-cv-pdf.sh _cv-src/main.pdf site
```

## Project structure

```text
site/_data/                      Shared profile, career, links, research, software, and update records
site/collections/_projects       Curated research detail documents
site/collections/_publications   Publication records and abstracts
site/collections/_posts          Existing full update stories
site/_includes                   Shared page content and metadata includes
site/assets                     Sass source and active visual-system tokens
component-library                Bookshop component templates and schemas
scripts/sync-cv-pdf.sh            CV build synchronization and verification
.github/workflows                GitHub Pages and CV build workflow
```

## License and credits

MIT License — see [LICENSE](LICENSE).

The custom site originated from CloudCannon’s Vonge template and uses Bookshop. The upstream MIT attribution is retained in LICENSE. Site modifications and content © Hamza Abdelhedi.
