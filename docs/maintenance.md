# Website maintenance guide

This guide is for future content and release updates. The examples marked “documentation-only shape” are placeholders, not published research, publications, roles, or software. Replace every placeholder with verified source material before using a record.

## Source ownership

| Content | Edit this source | Main automatic consumers |
| --- | --- | --- |
| Identity, research statement, portrait, current-position ID | [`site/_data/profile.yml`](../site/_data/profile.yml) | Hero, About, head metadata, header, footer |
| Education | [`site/_data/education.yml`](../site/_data/education.yml) | About and Home trajectory |
| Experience and titles | [`site/_data/experience.yml`](../site/_data/experience.yml) | Hero, About, head metadata, Home trajectory |
| Organization names and destinations | [`site/collections/_affiliations/`](../site/collections/_affiliations/) | Career displays |
| Public links and CV destinations | [`site/_data/links.yml`](../site/_data/links.yml) | Navigation, Hero, About, Contact, social links |
| Research detail narratives | [`site/collections/_projects/`](../site/collections/_projects/) | Research index, Home research section, project details |
| Research selection/order | [`site/_data/research.yml`](../site/_data/research.yml) | Research index and Home |
| Software records | [`site/_data/software.yml`](../site/_data/software.yml) | Software index, Home, related project/publication links |
| Publication metadata and abstracts | [`site/collections/_publications/`](../site/collections/_publications/) | Publication index, cards, detail pages, Home, relationships |
| Update summaries | [`site/_data/updates.yml`](../site/_data/updates.yml) | Home, Updates index, filters |
| Full update stories | [`site/collections/_posts/`](../site/collections/_posts/) | Individual `/updates/` pages and optional summary links |

The factual upstream is the public [`BabaSanfour/cv-latex`](https://github.com/BabaSanfour/cv-latex) repository. Verify education, roles, software ownership, teaching/service, and bibliography there first. The current website schema and CMS fields are documented in [`site/schemas/`](../site/schemas/) and wired through [`cloudcannon.config.yml`](../cloudcannon.config.yml). Retained evidence lives in [sources](reference/sources.md) and [publication reconciliation](reference/publications.md); technical constraints are in [contracts](reference/contracts.md).

Hamza's own writing is the source for personal voice, values and reflections. Do not remove these because they are absent from a CV. Follow the [identity audit](identity-repair/AUDIT.md) and the active repair prompt for editorial changes.

The retired `author.yml`, `social_links.yml`, and `trajectory.yml` files are not alternate owners. Do not recreate them. Historical post wording may describe a role at the time; it is not a competing current career record.

## Career, title, and education

1. Verify the change in the CV source, then update the one corresponding item in `experience.yml` or `education.yml`.
2. Update `profile.yml` only when the identity, current-position pointer, affiliation selection, or research statement changes.
3. Update an affiliation document only for the organization’s name, logo, or official URL. Keep role titles and dates in the career record.
4. Build and inspect Home and About.

Changing the current-position ID updates the Hero, About byline, head metadata, and the Home trajectory. Education and experience records update the About timeline and the trajectory component automatically. Affiliation document changes flow to the career displays. Do not hand-edit repeated dates or titles in page prose.

Documentation-only shape — do not publish this placeholder:

```yaml
# Example shape only; replace with a CV-verified record before use.
- id: <stable-role-id>
  institution_id: <existing-affiliation-id>
  start_year: <verified-year>
  end_year: <verified-year-or-null>
  current: <true-or-false>
  title: <verified-title>
  summary: <source-backed-summary>
  featured: <true-or-false>
```

## Research

Add one Markdown document under [`site/collections/_projects/`](../site/collections/_projects/) with `category: research`, a stable `id`, and a stable `slug`. Then add that ID to the appropriate list in [`site/_data/research.yml`](../site/_data/research.yml). Selection/order belongs in `research.yml`; do not add a competing `featured` field to the research document.

Use the existing `/project/:slug` route contract. Preserve the slug when editing an existing project so its public URL remains stable. `publication_ids` and `related_software` are optional relationships and must reference verified site IDs/slugs. The Markdown body should add detail rather than repeat the entire card summary.

Documentation-only shape — do not publish this placeholder:

```yaml
---
# Example shape only; this is not a real research record.
id: <stable-research-id>
slug: <stable-slug>
title: <verified-research-title>
short_title: <optional-short-title>
category: research
status: <verified-status>
role: <verified-role>
summary: <source-backed-summary>
methods:
  - <verified-method>
collaborators: []
links: []
related_software: []
publication_ids: []
---

<Distinct, source-backed detail narrative.>
```

## Software

Edit one record in [`site/_data/software.yml`](../site/_data/software.yml). Keep ownership and contribution roles distinct: “Creator” or “Maintainer” requires source evidence, while “Contributor” describes contribution without implying ownership. Use `publication_id` to reference an existing publication record; do not copy its title, abstract, or citation into the software record.

The Software page and Home software section read the same records. Project and publication relationship links also resolve from this file.

Documentation-only shape — do not publish this placeholder:

```yaml
- id: <stable-tool-id>
  name: <verified-tool-name>
  one_liner: <verified-purpose>
  role: <Creator-Maintainer-or-Contributor>
  status: <optional-verified-status>
  repo: <verified-public-repository-url>
  docs: <optional-verified-documentation-url>
  publication_id: <optional-existing-publication-slug>
  language:
    - <verified-language>
  tags:
    - <verified-topic>
  featured: <true-or-false>
```

## Publications

1. Update and verify the CV bibliography first.
2. Add or edit one file in [`site/collections/_publications/`](../site/collections/_publications/), keeping its existing `slug` when it already has a public route.
3. Set a verified `type` and `status` separately. Use the front-matter `abstract` for the canonical abstract; use the body only for distinct supplementary prose.
4. Attach only verified DOI, publisher, preprint, PDF, code, data, project, or poster links. Preserve author order and diacritics.
5. Add verified `related_research` or `related_software` IDs. Set `featured: true` only for the curated Home selection; keep that set at three or fewer unless the component contract changes.

The publication schema is [`site/schemas/publication.md`](../site/schemas/publication.md). Jekyll owns the site detail URL; use `paper_url` or another explicit external field for the paper destination. Never use a front-matter `url` to replace the site route, invent an exact publication date, or imply acceptance from an under-review manuscript.

Documentation-only shape — do not publish this placeholder:

```yaml
---
# Example shape only; not a real publication.
id: <stable-publication-id>
slug: <existing-or-new-slug>
title: <verified-title>
authors: <ordered-author-string-from-source>
year: <verified-year>
venue: <verified-venue>
type: <journal-or-conference-or-preprint-or-thesis>
status: <published-or-preprint-or-under-review>
featured: false
keywords: []
abstract: <verified-abstract-or-omit-unavailable-field>
doi: <verified-doi-or-omit>
paper_url: <verified-external-landing-page-or-omit>
preprint_url: <verified-prior-version-or-omit>
related_research: []
related_software: []
---
```

## Updates

Maintain the short card in [`site/_data/updates.yml`](../site/_data/updates.yml): date, title, concise description, tags, and one verified link. If a full story is useful, add or update one corresponding record under [`site/collections/_posts/`](../site/collections/_posts/) and link to its generated `/updates/<slug>.html` route. Do not duplicate the complete story in both places.

Preserve existing post filenames and slugs when editing a published story. The old date-style links were repaired during QA; do not reintroduce `/YYYY/MM/DD/...` paths unless a real compatibility page is added and tested.

Documentation-only shape — do not publish this placeholder:

```yaml
- date: <verified-date>
  title: <short-update-title>
  description: <one-sentence-source-backed-summary>
  tags: [<verified-tag>]
  link: <verified-external-or-existing-update-url>
  icon: "<optional-icon>"
```

## CV refresh behavior

The canonical link is `site/_data/links.yml:cv_pdf`, currently `/assets/files/Hamza_Abdelhedi_CV.pdf`. The deployment workflow compiles `cv-latex/main.tex` in an isolated `_cv-src/` checkout, validates the PDF, then copies verified bytes to the canonical path. Any checkout, compilation, PDF validation, copy, comparison, or Jekyll artifact failure stops the upload.

The local helper [`scripts/sync-cv-pdf.sh`](../scripts/sync-cv-pdf.sh) supports a locally compiled PDF. `_cv-src/`, generated canonical output, TeX files, and `_site/` are ignored or build-only. A CV-only upstream change requires a manual `workflow_dispatch` run of the website deployment workflow after the CV change is merged; no schedule or cross-repository trigger exists.

## Visual and asset maintenance

The current style implementation lives in [`site/assets/_visual-system.scss`](../site/assets/_visual-system.scss), [`site/assets/_profile-pages.scss`](../site/assets/_profile-pages.scss), [`site/assets/_publications-page.scss`](../site/assets/_publications-page.scss), and [`site/assets/_research-software.scss`](../site/assets/_research-software.scss). Token definitions live in [`component-library/shared/styles/0-settings/`](../component-library/shared/styles/0-settings/). The [audit](identity-repair/AUDIT.md) documents known palette and cascade issues; these styles are current implementation, not approved final branding. Use the active repair prompt to bound changes.

For a new image, keep it in the relevant `site/images/` directory, confirm that it is public and permitted for use, provide meaningful `alt` text (or an explicitly empty alt for decorative art), and add dimensions/loading behavior when editing the renderer. Do not add patient/private material, unverified scientific figures, stock project imagery, or decorative generated assets just to fill space.

## Do not edit generated or duplicate content

- Do not edit `_site/` or its generated CSS/HTML/PDF output; edit source and rebuild.
- Do not hand-edit `site/_cloudcannon/bookshop-live.js`; regenerate it with `npm run bookshop-live`.
- Do not create competing career, software, publication, or CV values in page front matter or copied component prose.
- Keep build logs in `_qa/`; schema files are excluded from public output.
- Keep screenshots, local reports and scratch tools in ignored `_qa/` or `docs/identity-repair/{evidence,reports}/`. Keep reusable validation scripts in `scripts/`.
- Stage exact intended files after reviewing `git status` and `git diff`.

## Release handoff and recovery

At the 2026-09-23 audit, committed implementation ended at `0fd5092` (Stage 08), with Stage 09 changes uncommitted. The production build and static checks passed with a missing canonical CV warning. The identity review requests changes; remote CI, live-domain verification and final acceptance remain pending. Check current Git status and [repair decisions](reference/decisions.md) before release; do not treat the historical local build as release approval.

An authorized maintainer should review the exact range `origin/main..HEAD`, add only intended files, push through the normal `main` workflow, inspect the real Actions run, and verify `/`, `/research/`, `/software/`, `/publications/`, `/about/`, `/contact/`, the canonical CV path after deployment. The unused `/projects/` and `/blog/` compatibility pages and old CV alias were removed during pre-R4 cleanup.

If rollback is needed, the prior known shared baseline is `origin/main` commit `4ea58d9`; its deployment status was not independently re-verified in this session. An authorized maintainer can create a reviewed revert commit or redeploy that exact prior commit through the existing workflow, then verify the same route matrix. Historical files remain recoverable from Git history. Do not force-push or use a destructive reset as a rollback test.
