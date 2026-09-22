# Stage 06 — Visual system

Status: **Implemented, awaiting review**  
Date: 2026-09-22  
Scope: visual-system tokens, active SCSS surfaces, responsive markup cleanup,
motion/focus defaults. CV automation was not started.

## Outcome

The active site now uses a calm, light scientific visual system: off-white
background, white bordered surfaces, dark readable text, blue primary actions,
teal accents, consistent spacing, and constrained reading/wide widths. The
homepage order and all existing routes/content remain intact.

## Source changes

- Centralized palette, spacing, radii, typography, widths, and breakpoints in
  `component-library/shared/styles/0-settings/`.
- Exposed the tokens as CSS custom properties in the shared base layer.
- Added the final active-surface layer at
  `site/assets/_visual-system.scss`, imported from `site/assets/main.scss`.
- Normalized header, footer, sections, buttons, hero, spotlight, research,
  software, publications, updates, profile, project detail, post, and reading
  surfaces.
- Removed page-level inline styles from Updates/posts/tag image markup and
  moved their behavior into scoped SCSS.
- Removed the preloader overlay that could leave content hidden without
  JavaScript; the first spotlight item remains server-rendered and active.
- Added `:focus-visible` styling and reduced-motion rules for animation,
  transitions, and smooth scrolling.

## Before / after visual evidence

Before artifacts are the Stage 03 baseline captures:

- `reports/stage03_screenshots/stage03_home_390.png`
- `reports/stage03_screenshots/stage03_home_1440.png`
- `reports/stage03_screenshots/stage03_research_390.png`
- `reports/stage03_screenshots/stage03_software_1440.png`

After-state visual QA was performed against the local production preview at
`http://127.0.0.1:6060/` using Chrome responsive emulation. The CUA preview
captures were inspected in-session but are not exported as repository image
files. Representative after-state observations:

- Home: neutral background, compact hero, bordered header card, clear CTAs,
  responsive portrait and spotlight.
- Research/software: bordered card families with long summaries and links
  wrapping without clipping.
- Publications: search/filter controls retain usable tap targets; long titles,
  author lists, resources, and citation controls remain selectable.
- About/contact/updates: scoped headings, consistent footer/header, no leaking
  column-header styling, and no gradient-heavy active surfaces.
- Project/publication details: constrained reading column with wrapping title,
  facts, links, abstract, and resources.

## Responsive and accessibility checks

| Check | Result |
| --- | --- |
| 390px responsive emulation | Home/about/research reviewed; mobile rules, wrapping, header, cards, and controls rendered without observed horizontal clipping in the visible viewport |
| 768px responsive emulation | Breakpoint value confirmed in DevTools; research page structure and content remained present. DevTools preview scaling clipped the physical screenshot, so this is recorded as a review limitation rather than an acceptance artifact |
| 1024px / 1440px | Desktop preview reviewed on representative Home, Research, Software, Publications, About, Contact, Updates, project, and publication routes; wide/read widths are token-constrained |
| Horizontal overflow | No global overflow suppression added; long titles/links use wrapping and min-width-safe grids |
| Keyboard focus | Tab navigation reached the Home link and showed the visible focus ring |
| Reduced motion | Source and compiled CSS contain `prefers-reduced-motion: reduce` rules that disable smooth scrolling and shorten animations/transitions |
| 200% zoom | Research page reviewed at Chrome 200%; heading, summary, header/menu, and card content remained readable and did not visibly clip in the inspected viewport |
| No JavaScript | Generated HTML keeps content in the document and no preloader overlay hides it; route/static checks passed |
| Images | Portrait, logos, publication thumbnails, and fallback surfaces retain borders/alt text and responsive sizing |

The exact-width screenshot export and a full keyboard traversal remain open for
human review, so this stage is not marked Accepted.

## Verification

- `npm run bookshop-live` — passed.
- `BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site --trace` — passed. Existing Ruby/Sass deprecation warnings remain.
- `git diff --check` — passed.
- Generated Home, Research, Software, Publications, About, Contact, Updates,
  project detail, and publication detail pages each contain one `h1`, no raw
  Liquid, and no residual inline `style=` attribute.
- No publication/data/source records were changed by Stage 06; the only
  collection markup change is the scoped Updates wrapper and inline-style
  removal.

## Remaining review items

- Export exact 390/768/1024/1440 after screenshots to repository artifacts if
  the review workflow requires persisted images.
- Complete a full keyboard traversal of mobile navigation, filters, spotlight
  controls, citation-copy buttons, and footer links.
- Review the remaining legacy gradient/shadow declarations belonging to
  inactive or interaction-only Bookshop components before final acceptance.
