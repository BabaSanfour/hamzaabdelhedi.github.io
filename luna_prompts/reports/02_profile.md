# Stage 02 — Accurate profile, concise About, and working Contact

## Status

In progress. The profile/content changes are in place. Responsive checks and a script-free Home preview are complete; the keyboard-triggered focus visual remains unconfirmed.

- Date: 2026-09-19
- Branch: `main`
- Starting commit: `4ea58d9`
- Ending commit: none; no commit was created
- Stage 01 was still marked **Implemented, awaiting review** when work began. The user explicitly asked to start Stage 02, so implementation proceeded from the existing shared records. Stage 01 remains awaiting review; it was not relabeled Accepted.
- Stage 01 website changes and the user's planning/prompt files were already present in the worktree. The existing About contribution was preserved in substance where source-backed; `.DS_Store` and unrelated planning files were left untouched.

## Scope and changes

- Rebuilt the Home hero around the supplied computational-neuroscience eyebrow and decision-making statement. The supporting text names MEG/EEG, computational modeling, neural dynamics, and reusable tools. Current title, degree, primary affiliations, name, pronunciation, pronouns, portrait, and links resolve from the shared profile, experience, education, affiliation, and link data.
- Added the three Home actions. Research temporarily links to the working `/projects/` route because `/research/` belongs to Stage 03; Publications uses `/publications/`; CV uses `/Hamza_Abdelhedi_cv.pdf`. The generated Projects, Publications, and PDF destinations exist.
- Replaced the About page's inline HTML/style blob with six template sections: Biography; Research philosophy; Open science and software; Teaching and mentoring; Community and service; Selected trajectory. The narrative leads with decision-making, treats foundation models as complementary, identifies the CHU Sainte-Justine work as a collaboration, and places face familiarity in the earlier MSc period. Reusable month/year ranges render from the Stage 01 records.
- Rendered About at **567 words** using a word-token count over the generated `<main>` text, including its introduction, section headings, and selected-trajectory labels/summaries. The copy retains Sfax, Tiohtià:ke/Montréal, open science, teaching, mentoring, and community/service material. It removes the unfinished FAQ and Failure Resume promise, unsupported response-time/job-availability statements, generic Neuro-AI claims, and repeated hand-maintained career dates.
- Repaired Contact front matter and replaced invalid nested markup with a static include. Email, X, GitHub, Google Scholar, LinkedIn, and ORCID read from `links.yml`; the email is a `mailto:` link. The sourced location and meaningful territorial-acknowledgment link remain. No form or submission path was added.
- Added scoped profile-page styles and a shared date-range include; switched the Home trajectory to that include. Removed the animation class from the new hero/About content so those blocks do not depend on the animation library. Added visible `:focus-visible` rules for hero actions; About and Contact links already receive the same treatment from the scoped stylesheet. Added a targeted CSS fallback to hide the shared JS-controlled loading curtain on Home, About, and Contact until `common.js` adds `is-in`; server-rendered content remains visible when scripts are unavailable.
- Updated Home/profile metadata and the featured-publications teaser to remove stale identity wording and the Home “Coming Soon” claim. No Research, Software, or publication records were created or edited.
- The Blog page still has a `Coming Soon!` description in its front matter. Blog remains absent from navigation and that page is outside Stage 02's allowed files, so it was left for a later content pass.

## Sources and decisions

| Claim / decision | Evidence path or URL and revision | Resolution / uncertainty |
| --- | --- | --- |
| Current title, degrees, career roles, and displayed dates | `site/_data/experience.yml`, `site/_data/education.yml`; [`source_ledger.md`](source_ledger.md), canonical `BabaSanfour/cv-latex` revision `e382f9a98934de4cea7cd4b85be3379ff8b680fa` (`education.tex`, `experience.tex`) | Consumed the Stage 01 shared records without repeating titles/dates in Home or About prose. Verified generated ranges include `Jan 2025–Present`, `Sep 2024–Present`, and `Sep 2022–Aug 2024`; year-only Abundant Intelligences dates retain year precision. |
| Software ownership, teaching, mentoring, and service examples | [`source_ledger.md`](source_ledger.md), same CV revision (`software.tex`, `teaching.tex`, `mentoring.tex`, `service.tex`) | About uses the CV-backed MNE-Denoise, CoCo-PiPe, Coord2Region, MNE-Python, and Jamica roles and existing teaching/community examples; it does not invent outcomes or additional dates. |
| Research framing and personal context | `site/_data/profile.yml`; existing About content; Stage 00 source ledger | Uses the supplied decision-making center and preserves Sfax origin, location, pronouns, and the prior face-familiarity context. No diagnostic or performance claims were added. |
| Public contact links | `site/_data/links.yml`; canonical CV header/link evidence recorded in [`source_ledger.md`](source_ledger.md) at the revision above; owner confirmation on 2026-09-19 | Contact renders `hamza.abdelhedi@umontreal.ca` as a `mailto:` link. The owner confirmed this is the preferred public destination; no address change was needed. |
| Territorial acknowledgment | Previous user-authored Contact markup and `site/_includes/contact-content.html` | Kept the meaningful Tiohtià:ke link and sourced location context. |
| Temporary Research action | Stage 02 prompt; generated `_site/projects/index.html` and `_site/publications/index.html` | Kept the action useful by routing it to `/projects/` until Stage 03 provides `/research/`; no broken final-copy link was shipped. |

## Validation

| Check / exact command | Actual result | Evidence / error / screenshot |
| --- | --- | --- |
| Bookshop generation: `npm run bookshop-live` | Pass | Exited 0. Removed the generated `site/_cloudcannon/bookshop-live.js` afterward; it is a build artifact. |
| Production build: `BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site --trace` | Pass | Completed with no build errors. Existing Ruby stdlib and Dart Sass deprecation warnings remain. |
| Diff whitespace: `git diff --check` | Pass | Exited 0. New files were also inspected for formatting before handoff. |
| Generated H1/template check: `python3 -c 'import pathlib,re,sys; [print(p, "h1="+str(len(re.findall(r"<h1\b", s))), "raw_liquid="+str("{{" in s or "{%" in s)) for p in sys.argv[1:] for s in [pathlib.Path(p).read_text()]]' _site/index.html _site/about/index.html _site/contact/index.html` | Pass | All three routes printed `h1=1 raw_liquid=False`. Contact contains `mailto:hamza.abdelhedi@umontreal.ca`; Home contains the three expected CTA paths. |
| Generated destinations: `test -f _site/contact/index.html && test -f _site/Hamza_Abdelhedi_cv.pdf` and `test -f _site/projects/index.html && test -f _site/publications/index.html` | Pass | Contact, Projects, Publications, and the local CV PDF were generated. |
| About word count: `python3 -c 'import re,html,pathlib; s=pathlib.Path("_site/about/index.html").read_text(); m=re.search(r"<main class=\"container profile-page about-page\">([\s\S]*?)</main>",s); text=html.unescape(re.sub(r"<[^>]+>"," ",m.group(1))); print(len(re.findall(r"\b[\w’\-]+\b",text)))'` | Pass | Printed `567` for rendered About main content. |
| Unfinished-copy scan: `rg -ni 'Coming Soon|Stay tuned|first-year|B\.Eng|Failure Resume' _site/index.html _site/about/index.html _site/contact/index.html` | Pass | No matches in the three affected generated routes. `site/collections/_pages/blog.html` still contains `Coming Soon!` as noted above. |
| Safari visual review of `/`, `/about/`, and `/contact/` | Partial pass | At `http://localhost:8000/`, Home, About, and Contact were viewed at **390×844** and **1440×900**. Contact was also viewed at **768×1024**. The About gutter issue found at 390 px was fixed and rechecked; no horizontal clipping was visible in the reviewed pages. CUA screenshots were viewed in-session but not persisted; screenshot path: **not saved**. |
| Intermediate viewport: `/`, `/about/`, `/contact/` | Pass | At `http://localhost:8765/`, all three routes were viewed in Safari responsive mode at **1024×768**. Home CTAs, About intro/content, Contact email/social links, and the page edges were visible; no horizontal clipping was seen. CUA screenshots were viewed in-session but not persisted. |
| Keyboard focus visibility | Partial | Generated CSS contains visible `:focus-visible` outlines for Home hero actions and About/Contact links. A keyboard-triggered focus indicator was not confirmed visually: Safari changed its active tab during the keyboard check. |
| No-JavaScript content visibility | Partial pass | A temporary copy of the generated Home/About/Contact HTML had all `<script>` tags removed. The Home preview at `http://localhost:8765/nojs-check/` was visible in Safari at desktop size. The generated CSS fallback also targets `.profile-page` for About and Contact, but those two script-free copies were not separately screenshot-reviewed. The temporary preview directory was removed after review. |
| Screenshot persistence | Incomplete | Screenshots were viewed in-session for the reported sizes, but could not be saved. `screencapture -x` returned `could not create image from display`; no screenshot files were created. |
| Server cleanup | Pass | Stopped the isolated local static server after review. |

## Remaining issues and next handoff

- **Review still needed:** Stage 01 remains awaiting review as directed. Stage 02 remains In progress until the keyboard-triggered focus visual is confirmed. The current public email preference is confirmed and recorded in [`source_ledger.md`](source_ledger.md).
- **Evidence limitation:** Safari screenshots were visible in-session but could not be saved to disk; the capture command failed with `could not create image from display`.
- **Out-of-scope copy:** The hidden Blog page retains its `Coming Soon!` description. It was not changed because Blog is outside this stage's allowed files.
- **Temporary dependency:** Switch the Home Research action to `/research/` when Stage 03 creates that route.
- **Exact next stage:** Stage 03 (Research and Software), after Stage 02 review/acceptance. This stage did not begin Research or Software implementation.
- **Review result:** Pending human review.
