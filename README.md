# Hamza Abdelhedi — Personal Website

Personal website of **Hamza Abdelhedi**, a computational neuroscience researcher studying how changing sensory evidence becomes decisions and actions with MEG/EEG, neural dynamics, and computational modeling, while building open-source neuroscience software.

The site uses Jekyll and Bookshop on top of the existing Vonge-derived component system. The primary navigation has Home, About, Updates, Research, Software, Publications, and CV; Contact is available from Home and the footer.

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
ruby scripts/validate-site-output.rb _site
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

The browser checks require an isolated Chrome test session with CDP enabled and a local server. They select the first page target; do not point them at a personal browsing session. For example:

```bash
node scripts/check-browser.js http://127.0.0.1:8000 9222
node scripts/capture-home-screenshots.js http://127.0.0.1:8000 \
  _qa/screenshots 9222
```

## CV integration and deployment

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

See [`docs/maintenance.md`](docs/maintenance.md) for the exact content-update recipes, source ownership rules, release handoff, and recovery procedure.

## Current repair work and references

R1–R3 repairs and the owner’s visual refinements are implemented. The owner is satisfied with the current design for now. R4 has not started; use the [R4 handoff](docs/R4_HANDOFF.md) in the next discussion. Implementation checks do not replace independent acceptance or release verification.

- [Stage-by-stage identity audit](docs/identity-repair/AUDIT.md)
- [R1: restore the personal voice](docs/identity-repair/R1_RESTORE_PERSONAL_VOICE.md)
- [R2: personal story, Home composition, and Contact](docs/identity-repair/R2_CV_STORY_AND_COMPOSITION.md)
- [Independent review after every stage](docs/identity-repair/REVIEW_PROTOCOL.md)
- [Content and technical contracts](docs/reference/contracts.md)
- [Factual source evidence](docs/reference/sources.md) and [publication reconciliation](docs/reference/publications.md)
- [Decisions and repair status](docs/reference/decisions.md)

Review screenshots, measurements, patches, and implementation reports stay local in ignored `_qa/`, `docs/identity-repair/evidence/`, and `docs/identity-repair/reports/`. These directories are not included in commits. Keep durable decisions and next-stage instructions in tracked Markdown documentation. The generated `site/_cloudcannon/` editor bundle is also ignored and rebuilt locally or in CI.

## Project structure

```text
site/_data/                      Shared profile, career, links, research, software, and update records
site/collections/_projects       Curated research detail documents
site/collections/_publications   Publication records and abstracts
site/collections/_posts          Existing full update stories
site/_includes                   Shared page content and metadata includes
site/assets                     Sass source and active visual-system tokens
component-library                Bookshop component templates and schemas
scripts                          Build synchronization and QA helpers
.github/workflows                GitHub Pages and CV build workflow
```

## License and credits

MIT License — see [LICENSE](LICENSE).

The custom site originated from CloudCannon’s Vonge template and uses Bookshop. The upstream MIT attribution is retained in LICENSE. Site modifications and content © Hamza Abdelhedi.
