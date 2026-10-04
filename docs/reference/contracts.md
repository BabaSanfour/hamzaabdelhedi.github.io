# Website content and technical contracts

Retained technical/factual contracts from the original refactor. Read the active repair prompt and [identity audit](../identity-repair/AUDIT.md) for current editorial direction. The owner's personal writing governs voice and values; the CV governs verifiable career facts. Latest explicit user direction takes precedence.

## Working rules

1. Execute the named stage only. Inspect its files and prerequisites before editing. Explain any necessary scope change before applying it; architectural changes require a recorded decision, not an improvised rewrite.
2. Run `git status --short` and inspect the diff for overlapping paths. Preserve existing user edits, including uncommitted About work. Do not stash, reset, clean, force-checkout, or broadly stage files. No unsolicited commits or remote writes.
3. Current runtime baseline: Node 20 in deployment, Ruby 3.3 / `.ruby-version` 3.3.0, Jekyll 4.3.3, Bookshop. Recheck current manifests. No dependency upgrades to fix unrelated warnings.
4. Read current CV source before asserting education, experience, software roles, teaching, awards, or publications. The brief's example dates and role labels are hypotheses to verify, not a substitute for source access. Record exact source paths/URLs and revision in reports. Never invent missing 2026 work to make the site seem current.
5. If sources conflict, record both claims. Continue independent tasks, but leave the disputed change unresolved. Do not edit another repository without authority. Do not label a student a candidate without evidence.
6. Never overwrite generated `_site` output to fix a page. Edit the source or renderer, regenerate, and inspect actual output. Never commit caches, dependencies, `.DS_Store`, or screenshots containing unrelated private data.
7. Shared facts must render from shared records. Jekyll does not generally evaluate Liquid embedded inside a YAML value. Use actual Liquid templates or component assignments and verify their output. Do not add a custom recursive Liquid-evaluation plugin.
8. Keep useful Bookshop metadata/previews in sync with changed component interfaces. Use `site/schemas/` and `cloudcannon.config.yml` where the affected collection requires them. Do not replace Bookshop or rebuild the CMS configuration.
9. Core content renders statically and remains available without JavaScript. Use progressive enhancement for filters and optional controls. Missing optional data omits a link/section; never output empty anchors, `#` placeholders, `TODO`, invented copy, or UI instructions for maintainers.
10. End with a report containing real commands/results and unresolved checks. Do not mark visual QA complete from source inspection alone.

## Scientific and editorial contract

Primary story: Hamza studies how changing sensory evidence becomes decisions and commitment to action, using MEG/EEG, computational models, and neural dynamics. Open-source neuroscience software is the other major pillar. Foundation models are complementary methods; pediatric clinical EEG is a collaboration; face familiarity is earlier MSc research.

Keep the tone concrete and personal. No generic AI diagnosis promises, unsupported impact numbers, invented collaborations, fabricated results, or promised forthcoming content. Retain open science, accessibility, EDI, teaching, and community where grounded in existing/source material. Preserve meaningful personal context without turning Home into an exhaustive CV.

## One canonical owner per field

| Information | Canonical owner | Consumers |
| --- | --- | --- |
| Name, pronouns, field, research statement, short bio, portrait, current position ID, affiliation IDs | `site/_data/profile.yml` | Hero, About, head, footer |
| Education dates, degrees, institutions | `site/_data/education.yml` | About, trajectory |
| Employment/research roles, dates, descriptions | `site/_data/experience.yml` | Hero current title, About, trajectory |
| Organization name, logo, URL | `site/collections/_affiliations/*.md` with stable `id` | Affiliation components, profile/role display |
| Email, public social URLs, canonical CV URL, CV source | `site/_data/links.yml` | Contact, social links, hero, navigation, footer |
| Research metadata and detail narrative | `site/collections/_projects/*.md`, `category: research` | Research index/detail, homepage |
| Research selection/order | `site/_data/research.yml`: `ordered_ids`, `featured_ids` only | Research index, homepage |
| Software metadata | `site/_data/software.yml` | Software page, homepage, related tools |
| Publication metadata and abstract | `site/collections/_publications/*.md` | Index, details, homepage |
| News summaries | Existing `site/_data/updates.yml` | Homepage, Updates |
| Existing full news stories | Existing `site/collections/_posts/*` | Linked story pages, preserved URLs |

`trajectory.yml`, `author.yml`, and `social_links.yml` have been retired; do not recreate them. `spotlight.yml` and `general_settings.yml` remain for nonduplicated presentation settings or ID references. No two editable copies of a person's dates or software role. Historical news describes facts at the time; do not rewrite old posts as if they describe today's position.

### Profile / career schemas

```yaml
# profile.yml: schematic; populate only verified values
name: Hamza Abdelhedi
pronouns: he/him
field: Biomedical Engineering
current_position_id: phd-graduate-research-assistant
affiliation_ids: []
location: ""                 # verified public location
research_statement: ""
short_bio: ""
portrait: /images/main/01.jpg
portrait_alt: Hamza Abdelhedi
```

Career files are lists. Each item has `id`, `institution_id`, `start_year` (integer), `end_year` (integer or null), `current` (boolean), `summary`, and `featured` (boolean). Education adds `degree`; experience adds `title`. If exact months matter and are sourced, add `start_date`/`end_date` consistently and document them. Null end year means “present” only when `current: true`; otherwise omit the unresolved end date and flag it in reports. Use shared rendering for date ranges.

Organization records have `id`, `name`, `image`, `url`. They do not independently restate role titles or dates. Profile references an experience record for the current title. `links.yml` has `email`, `github`, `scholar`, `linkedin`, `orcid`, optional other already-public accounts, `cv_pdf`, and `cv_source`. Do not guess usernames. The canonical CV path is `/assets/files/Hamza_Abdelhedi_CV.pdf`; preserve the legacy `/Hamza_Abdelhedi_cv.pdf` path too. A missing local artifact is a known issue, not a reason to substitute stale bytes.

### Research / software schemas

Research documents: `id`, `slug`, `title`, `short_title`, `category: research`, `status`, `role`, `summary`, `methods` (list), `collaborators` (list of verified names), `links` (list of `{label, url}`), `related_software` (software IDs), optional `image`/`image_alt`, optional `publication_ids`. Markdown body holds detail content; it must not repeat the entire summary without adding information. Public detail URLs retain `/project/:slug` unless explicitly mapped for compatibility.

Research IDs: `dynamic-decision-making`, `eeg-meg-foundation-models`, `pediatric-clinical-eeg`, `face-familiarity`. Use them consistently. Selection lives only in `research.yml`; do not also maintain a competing per-record research `featured` flag.

Software is a list with `id`, `name`, `one_liner`, `role`, `status`, `repo`, optional `docs`, optional `publication_id`, optional `paper` (external paper only when no matching site publication), `language` (list), `tags` (list), `featured` (boolean). IDs: `mne-denoise`, `coco-pipe`, `coord2region`, `mne-python`, `jamica`. Render the publication record when `publication_id` exists instead of duplicating its title. Role labels must reflect verified ownership versus contribution.

### Publication schema and migration

Required: `id`, existing `slug`, `title`, `authors` (ordered plain-text string for compatibility), `year` (integer), `venue`, `type`, `status`, `featured` (boolean), `keywords` (list). Optional: actual `date`, `summary`, `doi`, `paper_url`, `preprint_url` (a prior public version when a record is updated to its final publication), `pdf_link`, `code_url`, `data_url`, `project_url`, `arxiv_url`, `zenodo_url`, `poster_url`, `bibtex`, `thumbnail`, `banner`, `image_alt`, `related_research` (project IDs), `related_software` (software IDs).

- `type`: `journal`, `conference-proceedings`, `conference-paper`, `conference-abstract`, `preprint`, `thesis`.
- `status`: `published`, `accepted`, `preprint`, `under-review`, `submitted`. Omit an unknown status until verified and report the blocker; never imply acceptance. A thesis can be `type: thesis`, `status: published` when publicly deposited and verified.
- Do not change type merely because status changes. A manuscript under review is not a peer-reviewed published article.
- Front matter `abstract` is the canonical abstract. The body is for distinct supplementary prose. Migrate existing body-only abstracts without losing text or duplicating them on details.
- Preserve Jekyll's `pub.url` for the site's detail page. Use `paper_url` for an external landing page.
- Preserve author order, diacritics, exact titles, DOI, and BibTeX fidelity. No guessed dates: missing exact date sorts by verified year and deterministic title/ID tie-break; a synthetic sort date must never be presented as publication date.
- Retain existing slugs and supported links. Normalize legacy `type` casing; map `related_research_projects` to `related_research` and `related_open_source` to `related_software` with verified IDs.
- Homepage label is “Selected publications” or “Recent work”. Featured items sort by year descending, known date descending, then deterministic title/ID; at most three. No stale “latest” claim or duplicate citation in spotlight YAML.

## Routes and presentation

Keep `/`, `/about/`, `/publications/`, `/updates/`, `/contact/`, existing publication/news detail routes. Add `/research/` and `/software/`. `/projects/` becomes a static compatibility page pointing visitors and canonical metadata to `/research/`; if using refresh, provide an ordinary visible link too. GitHub Pages static hosting does not give this page an HTTP 301 automatically.

Do not repurpose demo project URLs as unrelated real scientific projects. Retire known stock pages deliberately and record them. Keep the old CV URL working with the same newly compiled bytes after stage 07.

Home composition is governed by the active repair stage. The former research/software/publications-first sequence is under review; do not enforce it as a permanent contract. Preserve personal introductions and avoid duplicated prose.

Preserve the personal visual identity and existing real assets. The active repair stage determines presentation; do not impose a new palette or an institutional tone through a technical cleanup. Use real, shareable figures and avoid fabricated results or a new animation library.

## Validation protocol

Run from repository root. On first setup or dependency changes:

```bash
npm ci
BUNDLE_GEMFILE=site/Gemfile bundle install
```

For each implementation stage after setup:

```bash
npm run bookshop-live
BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site --trace
git diff --check
git status --short
git diff --stat
```

Use the same versions/flags as the current workflow if it changes legitimately. This build writes `_site/` at repository root. Do not use development `--unpublished` output as release evidence. Do not repeatedly reinstall unchanged dependencies. If tools/network are unavailable, preserve the exact error and mark the build blocked; never claim a pass.

Compare diff-check failures with the captured baseline. Existing unrelated whitespace problems are not authority to alter user work; report them separately and check your own changed paths. Newly created untracked files also need explicit whitespace/syntax inspection because ordinary `git diff --check` does not include them.

For browser review, serve the generated `_site` directory using an available static server, or use a production-configured Jekyll serve command without `--unpublished`. Record URL, viewport, route, and screenshot path. Check 390, 768, 1024, and 1440 px widths for affected templates; include keyboard and no-JavaScript behavior when controls change.

Inspect generated HTML for actual links, headings, escaped metadata, unresolved Liquid, raw YAML, duplicate IDs, missing images, and accidental publication of private/build-only files. Local paths must resolve within output; test fragments as well as pages. External HTTP failures due to rate limits/authentication must be distinguished from confirmed broken links.

Do not introduce a large testing framework for cosmetic edits. Prefer the real Jekyll build, targeted browser checks, and small reusable validators when they test substantive data/route contracts. Keep persistent validators under `scripts/`, document invocation, and avoid hard-coded machine paths.
