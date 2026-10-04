# Handoff to R4

## Owner direction

On 2026-10-03, the owner said the current website design is fine for now and requested code cleanup before starting R4 in a new discussion. Keep the existing commit history and add one new checkpoint. No push or deployment was requested.

R4 has **not** started. Its scope from `identity-repair/AUDIT.md` is **Research/software narrative**: remove agent-process caveats and duplicated prose, improve detail order, and retain all verified roles and relationships. Read that audit, `identity-repair/REVIEW_PROTOCOL.md`, and the actual current source before preparing the detailed R4 work. Historical audit findings describe earlier versions; verify which still apply. Do not treat implementation checks as independent review acceptance.

## Preserve the current owner choices

- Home: personal introduction and rounded-square portrait with rotating spotlight; then three selected publications, recent updates alongside the narrow path, selected research, and software.
- Spotlight: arrows/dots remain; no Start/Pause rotation button. Keyboard/manual interaction pauses rotation; reduced motion starts paused. The interview metadata is January 2026, with its corrected Abundant Intelligences title and destination.
- Home path: five institution groups with six selected records; narrow left panel on desktop, hover details, keyboard/touch support. Smaller A-style 44px tiles use original logo colors. SNAILab is omitted from Home and retained in the full About journey.
- About: wide frame, section links, headings beside prose on desktop, white values/interview panels, original-color logos, and subtle entrances respecting reduced motion. All seven education/research records and the personal values, failures, community, origin and land acknowledgment remain.
- Shared cool-light background, teal/navy palette and wide page frame. Historical bright teal is currently used for small About accents, not globally substituted for readable link colors.
- Footer: “Built with Jekyll and Bookshop.” Upstream CloudCannon attribution remains in README/LICENSE.

## Source and workflow

Career facts: `site/_data/{profile,education,experience}.yml`; Home grouping: `site/_data/home_trajectory.yml`; affiliations: `site/collections/_affiliations/`. Research and software: `site/_data/{research,software}.yml`, `site/collections/_projects/`, and their active Bookshop cards. See `maintenance.md` for ownership and build commands.

The pre-R4 cleanup removed inactive components, duplicate news renderers, old journey variants, obsolete template scripts/styles/assets, `/blog/`, `/projects/`, and the old `/Hamza_Abdelhedi_cv.pdf` alias. Do not restore these compatibility layers. The canonical CV path remains `/assets/files/Hamza_Abdelhedi_CV.pdf`; its missing local artifact remains R6 work.

Reusable checks live in `scripts/`. Generated editor JavaScript, screenshots, temporary checks and implementation reports are ignored. Use `_qa/` for new scratch outputs; local historical material also remains under `identity-repair/evidence/` and `identity-repair/reports/`. These ignored folders will not exist in a fresh clone; Git history and this tracked handoff remain available.

See `CODEBASE_CLEANUP.md` for the cleanup checks and limits. No remote CI or production verification has been performed for this checkpoint.
