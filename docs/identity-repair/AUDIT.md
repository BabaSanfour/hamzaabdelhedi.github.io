# Identity restoration audit

Date: 2026-09-23. Reviewed baseline: `9530c70`; current committed tree: `0fd5092`; current uncommitted Stage 09 work also inspected.

This is an audit and repair specification, not an implementation or acceptance of the site. No website source was changed during this audit. Start with [R1: restore the personal voice](R1_RESTORE_PERSONAL_VOICE.md), then use the [review protocol](REVIEW_PROTOCOL.md) before another repair stage.

Documentation cleanup on 2026-09-23 retained [source evidence](../reference/sources.md), [publication reconciliation](../reference/publications.md), [technical contracts](../reference/contracts.md), and [decision history](../reference/decisions.md). Old prompt/report filenames below are historical citations, not required live files. Superseded originals, including uncommitted files, were moved to `/private/tmp/website-generated-files-backup.Xv0aVO`; this temporary recovery folder is not a durable archive. Tracked historical versions also remain in Git. Current instructions are the repair documents linked above.

Retained visual evidence: [Stage 03 desktop](evidence/stage03_home_1440.png), [Stage 08 desktop](evidence/stage08_home_1440.png), and [Stage 08 mobile](evidence/stage08_home_390.png). Stage 03 is an intermediate refactor state, not the original personal site.

## Finding

The refactor improved the data model, publication records, working routes, and accessibility foundations. It also changed the editorial brief from a personal academic website into a restrained research portfolio. Several losses were encouraged by the plan and prompts; others are implementation regressions. Restoring Hamza's identity requires correcting both.

The CV can establish dates, degrees, roles, and outputs. It cannot replace Hamza's own writing as the source for his voice, values, relationships, sense of humor, or reflections on failure. Those need their own preservation contract.

The user's phrase “intro page path is now so long” is provisionally understood as the length/reading journey of the landing page. The Home URL still resolves to `/` in the source configuration; this audit does not diagnose a lengthened homepage URL. Detail URLs and canonical handling have separate issues to verify below.

## Evidence and limits

- Inspected the eight implementation commits from Stage 01 through Stage 08, their relevant diffs, current templates/data/styles/scripts, original prompts, master-plan sections, and stage reports.
- Stage 00 is retrospective documentation, not a separate implementation commit. Stage 09 is present as uncommitted changes and new documentation, not a Stage 09 commit.
- `9530c70` is the clean pre-refactor reference. `4ea58d9` additionally preserves an intermediate About version that included pre-existing user work. A commit difference alone cannot establish who authored every intermediate About change.
- Visually compared the saved Stage 03 and Stage 08 Home screenshots at 1440 px and inspected the Stage 08 Home capture at 390 px.
- Built the current working tree independently with `BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site --destination /private/tmp/website-identity-audit.JlddLG/current --disable-disk-cache --trace`: **passed**, with existing Ruby/Sass deprecation warnings.
- Ran `ruby scripts/validate-site-output.rb /private/tmp/website-identity-audit.JlddLG/current`: **passed for 70 HTML files**, with one warning for the missing canonical CV PDF. This pass expressly exempts that missing PDF destination.
- Inspected the fresh Home page in Safari at `http://127.0.0.1:8765/`, including the rendered accessibility tree and opening-screen screenshot. The native window was not measured as an exact CSS viewport. Further native browsing stopped when the computer-use tool reported a user change to Safari; no complete fresh multi-route/responsive interaction pass is claimed.
- Historical exact-width screenshots are viewport-only, not full-page evidence. No measured total page height is claimed here.
- No remote bibliography re-verification, CV compilation, CI run, push, or live deployment was performed. Bibliographic provenance statements below describe recorded evidence, not a new external verification.
- Initial worktree modifications: `README.md`, `luna_prompts/PROGRESS.md`, `luna_prompts/reports/02_profile.md`, `site/_includes/about-content.html`; numerous existing untracked planning/report files and `docs/maintenance.md`. These were preserved.

## What changed, at a glance

| Original stage | Evidence boundary | Audit disposition |
| --- | --- | --- |
| 00 Baseline | `9530c70`, retrospective `reports/00_baseline.md` | Useful factual baseline; missing an identity-preservation inventory |
| 01 Foundation | `4ea58d9` | Keep shared facts; fix greeting/presentation coupling; recover omitted personal material carefully |
| 02 Profile | `503c6f8` | Major editorial repair: introduction, values, failure, About and Contact warmth |
| 03 Research/software | `579b736` | Keep pages and records; reduce Home duplication and remove process language from public copy |
| 04 Publication data | `4eb0768` | Preserve reconciled records; close specific source gaps separately |
| 05 Publication UI | `b57ae52` | Keep native disclosures, links and filters; reduce Home promotion and card density |
| 06 Visual system | `d3b13cb` | Major visual repair: brand direction plus conflicting CSS states |
| 07 CV | `b3002e7` | Keep fresh-build workflow; repair/verify local and release artifact availability |
| 08 QA | `0fd5092` | Keep accessibility fixes; expand review to actual appearance, full-page hierarchy and HTTP behavior |
| 09 Handoff | Uncommitted on `0fd5092` | Reopen product readiness; preserve maintenance work, review generated prose |

## Stage 00 — The baseline did not protect the identity

**What worked.** The baseline distinguishes a reproducible commit from uncommitted user work, records broken Contact and stale career facts, and provides route/source inventories. That is valuable evidence.

**What failed.** It did not establish which words, personal sections, images, relationships, and visual cues must survive. It emphasized CV alignment and technical validity. The existing report also did not preserve exact-width baseline image files in the repository. Later stages could remove personality while satisfying their factual checks.

**Required correction.** Add the protected inventory below to every repair review. Use `9530c70` for the earlier public voice and `4ea58d9` for the intermediate About content. Do not call Stage 03 screenshots “the original website”: the greeting and personal introduction were already gone by then. Keep historical reports intact and append new review evidence instead of rewriting history.

**Acceptance.** Every protected item has a visible destination or an explicit owner decision. Absence from the CV is not a reason to delete a personal value statement. Missing baseline screenshots remain a disclosed limitation.

## Stage 01 — Data ownership inadvertently became editorial authority

**What worked.** Shared education, experience, affiliations, links and profile records; removal of stock demo projects; stable real-content collections; canonical degree/role corrections. Retain these.

**Confirmed regression: greeting.** Before the migration, Home supplied `title: "Hi 👋, I'm Hamza"`. In `4ea58d9`, the page enables `use_profile`, and the hero assigns `hero_title = profile.name`. The migration changes the public greeting to a formal name. This happened in the foundation stage even though its prompt said to preserve structure/prose and avoid new copy.

**Confirmed presentation shift: title.** The same migration makes `current_position.title` the hero position. “Graduate Research Assistant” becomes the primary introduction. The role can be correct while being a less useful public introduction than “PhD student in Biomedical Engineering.” Data correctness does not choose the right visual emphasis.

**About provenance.** The first foundation commit contains a substantially different About layout from `9530c70`, including “Research Pillars” and “Beyond the CV.” The report records pre-existing user About edits and semantic migration. Do not attribute that entire redesign to the implementation agent. What can be established: the earlier full values/land-acknowledgment text is absent from the new include; failure and the collective-responsibility quotation remain at this point.

**Timeline density.** Home and About concatenate all four experience records and all three education records. Seven entries render on Home, including degree and research-assistant entries from the same periods. This is not a factual error, but a full record dump is not necessarily a selected trajectory. The `featured` fields do not currently provide meaningful selection because all seven records are featured and the template does not filter by them.

**Required correction.** Separate canonical identity (`name`, degree/role facts) from presentation (`home_greeting`, personal tagline, narrative). Keep structured dates and roles. In a later Home-composition repair, explicitly select/group milestones without changing or deleting canonical records; associate a degree with its related assistantship rather than duplicating the same period visually.

**Acceptance.** Changing a role/date updates factual displays, while the greeting stays personal. Canonical records retain their current values. Home selection is explicit, not a side effect of array order or an unrestricted concatenation.

## Stage 02 — The principal loss of voice

**What worked.** Fixed Contact generation and markup, retained the preferred UdeM email, removed unsupported response-time/job-availability promises, used current degree dates, and extracted About into maintainable markup.

**Confirmed losses in `503c6f8`.**

- `profile.yml` loses the “bits 🤖, brains 🧠, and Open-Source 💻” tagline and the original multi-paragraph introduction. It substitutes a research statement plus a methods sentence.
- Home no longer includes Sfax/Tunisia, Montréal, the personal open-science/equity paragraph, or the named supervisor. Some facts survive elsewhere or in data, but the introductory experience loses them.
- “Get in touch” and “What I'm working on” become Research/Publications/CV. All are valid links, but their collective tone is more institutional and contact is harder to discover.
- About loses “Rejections and Failures,” the personal quotation, and “Why Neuro-AI?” as a personal reflection. Its brief biography gives way to a much longer research-methods explanation.
- Contact loses the invitation to say hello or discuss academic life, and the paragraph about mutual support and helping people minoritized in Neuro-AI. These are distinct from the unsupported 24-hour response promise.

**Prompt defect.** `02_profile_about_contact.md` step 6 explicitly says to remove unfinished FAQ/promises and the “Failure Resume coming soon” promise. Removing a future promise was compatible with keeping the existing reflection. Removing the whole section was not necessary. Its prescribed section list and “source-grounded” emphasis did not clearly protect personal material.

**Required correction.** Execute R1. Restore the original greeting, tagline, values paragraph, origin/location context, failure reflection, collective-responsibility quotation, meaningful land acknowledgment, and warm contact invitation. Combine these with the current verified scientific focus. Remove only the unfinished promise; do not fabricate a list of failures. Use the source text to preserve convictions rather than substituting generic phrases about community.

**Acceptance.** A reader can find who Hamza is, where he comes from, what he studies, what he cares about, and his view of failure. Home reads as a personal introduction. About adds personal depth rather than repeating a research abstract. Contact welcomes people, not only collaboration proposals. All factual corrections remain.

## Stage 03 — The landing page became a catalogue

**What worked.** Four real research themes, five software records, truthful contributor/maintainer distinctions, stable detail routes, and working Research/Software navigation. Retain those assets.

**Confirmed growth.** `579b736` inserts research and software sections before publications and moves the pre-existing updates/trajectory component below all three. The current generated Home contains three research cards, five software cards, three publication cards, seven trajectory disclosures, and five update items, plus the portrait spotlight. The software section loops over the entire dataset and has no Home-specific cap. This implements the old prompt's order, so it is partly a product-specification problem.

**Public copy contains implementation caveats.** Examples include “this page describes the questions and methods without claiming project-specific results,” “My verified role,” and “No performance claim or project-specific result is presented here.” These explain the agent's evidence discipline instead of helping a visitor understand the work. Honest wording such as “I study…” and “I collaborate on…” can describe ongoing research without these repeated caveats. Relevant scientific uncertainty should remain where it matters.

**Repeated content.** Home cards, research index cards, detail summaries, and detail prose reuse long explanations. “Current doctoral research · Graduate Research Assistant” adds administrative metadata ahead of the question. On the detail template, public outputs appear before the main explanatory body. The user encounters inventories before the narrative.

**Required correction.** Separate the Home preview from the full index. Proposed Home order for the next repair: personal introduction → compact recent updates and selected trajectory → short research/software preview → selected publications → footer. Put at most three software previews on Home; retain all five on Software. Reduce Home research summaries to one or two sentences, with the full explanation on Research/details. Keep this order a proposed repair decision until that stage is invoked; do not silently implement it in R1.

For research copy, remove statements about what the agent did or did not verify. Use existing factual material; do not turn a direction into a result. On details, place the scientific question and approach before outputs. Avoid empty “Public outputs” sections; missing output is not automatically useful public content.

**Acceptance.** Updates and personal trajectory no longer require traversing eleven research/software/publication cards. The homepage and indexes have intentionally different density. A full-page mobile review demonstrates this, not merely a screenshot of the hero. All four themes/five tools remain discoverable and all relationship links resolve.

## Stage 04 — Keep factual repairs separate from identity repairs

**What worked.** The recorded reconciliation retains the original eight publication slugs, updates the oscillations record to the final article while retaining its preprint link, corrects a review DOI, and represents 13 CV entries plus the existing thesis in 14 site records. Type/status distinctions and stable relationships are useful.

**Unresolved evidence.** The reports explicitly retain a thesis item-level URL/source-abstract check and intentionally withhold the EEG-alignment item at the owner's request. The new repair must not restore that item merely because it appears in an older commit or CV. A missing source is not fixed by a style pass.

**Editorial choice.** Three featured records were selected to balance an empirical paper, review and software paper. That is a curatorial choice, not an inevitable consequence of citation data. Whether those best represent Hamza's current story needs an editorial review independent of bibliographic accuracy.

**Required correction.** Freeze bibliography during voice/layout/color repairs. Later verify the specific open thesis questions against primary sources, and record any unavailable source honestly. Review which records are featured without altering their titles/authors/statuses for visual convenience. Keep the intentionally withheld record withheld.

**Acceptance.** No factual or route regressions; no invented abstract, date or publication status; explicit resolution or continued deferral of each known source gap. Do not call this audit a new verification of all 14 records.

## Stage 05 — Useful interactions, excessive prominence on Home

**What worked.** Canonical publication references, native abstract disclosures, selectable text, citation fallback, combined filters, deterministic featured selection, and removal of duplicate scripts.

**Clarification about “papers at the top.”** The main Selected publications section is third after the hero, research and software. The paper in the opening screen is the separate portrait-adjacent spotlight. A spotlight existed before Stage 05; this stage canonicalized it and changed “Latest” to “Selected.” It did not newly move the complete publication list to the top.

**Density and repetition.** Coord2Region appears in the spotlight, software list, and selected papers. The same rich card component serves the full index and the Home vertical mode. Full authors, several resources, badges and citation buttons compete with an introduction. These are reasonable on an index but excessive when repeated in a landing-page preview.

**Spotlight truncation.** The base hero stylesheet still clamps spotlight titles to four lines, including an `!important` declaration, and positions slides absolutely. The saved Stage 08 desktop capture shows a truncated paper title and cramped metadata/controls. A later `height: auto` does not make absolutely positioned slide content determine its container's height.

**Required correction.** In the composition stage, remove the publication spotlight from the introductory hero or move its useful content to the appropriate later section. Preserve the underlying publication and media records. Decide a visible destination for the personal media interview; do not delete it as collateral cleanup. Give Home a compact publication variant with full readable title, year/venue/status as needed, and a clear detail link; keep the richer resources on the index/detail page. Do not shorten canonical titles or author lists in data.

**Acceptance.** No publication carousel competes with the greeting. The selected-paper preview is below the personal/research introduction. Full titles remain readable in the chosen layout. All existing index filters, abstracts, resource links and citation paths still work.

## Stage 06 — A new palette and an incomplete cascade migration

**Product-direction mismatch.** The original Sass palette used teal `#1495a7`, blue `#003687`, dark navy `#110E38`, and a cool light background `#f2f6ff`. The Stage 06 prompt prescribed off-white `#f7f7f4`, near-black `#15171a`, indigo `#4457c4`, and green-teal `#167d78`. The change is visible in the saved before/after screenshots. It was specified by the plan; it was not solely a model inventing colors.

**Cascade problem.** `site/assets/main.scss` imports Bookshop styles, profile, research/software, publications, then a 1,248-line `_visual-system.scss` override layer. That layer leaves older state selectors and properties active. Central tokens alone did not remove component-level inconsistencies.

**Confirmed oversized active dot.** `hero.scss` sets `.c-spotlight__dot.is-active` to a filled background and `transform: scale(1.3)`. The final stylesheet changes the base dot button to 32×32 and adds an 8px pseudo-element, but does not reset the more-specific active button rule. The old background/scale therefore enlarges the whole button into the blue disc visible in both the saved Stage 08 screenshot and the fresh Safari view. The fix must preserve the click target while styling only the small indicator.

**Contrast hole.** The original `.c-hero__phonetic` retains `opacity: 0.6`; the final layer changes its color to muted `#666b73`. On a white card the source rules yield approximately `rgb(163,166,171)`, contrast **2.44:1**. This is a source-derived calculation, not a fresh browser color measurement. The report's token-level muted-text ratio of 5.36:1 does not cover opacity composition. The pale pronunciation is visible in the screenshots.

**Other review targets.**

- `.c-spotlight__label.is-publication` is more specific than the final generic label rule; inspect semantic variants rather than assuming all pills use the new secondary token.
- `.c-hero__image img` forces a 14px radius with `!important`, while Home/Bookshop still expose `circular_image: true`. The rendered rounded-square image does not honor that editing control. Do not assume the circle itself is the desired final shape; resolve the contract explicitly.
- Legacy gradients remain in interaction states, including the arrow-circle background. Review hover/focus/open/active states, not only idle colors.
- Heavy hero hierarchy persists: bordered identity card, oversized scientific statement, another methods paragraph, action row, portrait, spotlight. At 390×844 the saved capture only reaches the top of the portrait after the action row.

**Required correction.** First select a brand direction from the earlier teal/navy family and the actual site references. Present a concrete sample on Home plus a publication and software card; exact accessible token values must be measured. Do not automatically declare either historical or current colors final. Then consolidate touched component rules and their states; avoid another catch-all stylesheet. Correct active-dot background/transform, inherited opacity, title clipping, and ignored presentation controls. If the hero spotlight is retired, remove or repair its remaining live uses deliberately.

**Acceptance.** The same accent logic applies across navigation, links, buttons, tags, cards and focus states. Measure rendered/composited colors, including opacity and hover states. Full-page desktop/mobile comparisons show coherent colors and rhythm. A short table identifies which component owns each touched rule and which conflicting declaration was removed.

## Stage 07 — Good pipeline, incomplete local experience

**What worked.** The workflow checks out the canonical CV, removes a stale compiled PDF, builds it, validates the PDF signature/MIME, copies identical canonical/legacy bytes, and verifies them before upload. Keep those safeguards.

**Confirmed local defect.** `links.yml` points navigation and CTAs to `/assets/files/Hamza_Abdelhedi_CV.pdf`, but that file is absent from the current clean local build. The validator warns and explicitly skips links to it. A green crawl therefore does not mean every visible CTA works.

**Verification gap.** The reports state that remote CI and live artifact verification remain pending. This audit does not establish that production CV is broken; it establishes that the current local preview lacks the new destination. Remote workflow execution is not the only possible way to obtain a canonical PDF: the existing sync script can consume a fresh locally compiled canonical artifact.

**Required correction.** Provide a reproducible local preparation path using a verified canonical checkout/build and the existing sync script. Do not silently copy the known stale legacy PDF and call it current. Separate a diagnostic validator mode that permits a missing artifact from a release mode that fails on it. Then verify the authorized release artifact and both URLs when the release stage is reached.

**Acceptance.** In the review preview, all visible CV actions open the verified current PDF. Missing/stale artifacts fail release validation. Source revision and byte equality are recorded. No new remote trigger or cross-repository write is implied by this audit.

## Stage 08 — Passing technical checks did not mean a good site

**What worked.** Skip link, semantic main, keyboard menu, native trajectory disclosures, escaped metadata, repaired update links, reduced-motion/no-JS handling, and exclusion of schema/build files. Preserve these.

**Review blind spots.**

- The screenshot script captures only Home's initial viewport. It cannot establish total Home length, the position of updates, or the appearance of About's personal content.
- Overflow, H1 and link tests do not catch the missing greeting/failures, giant spotlight indicator, near-invisible pronunciation, or overly formal copy.
- The file validator accepts an extensionless route if a corresponding `.html` file exists. Publication/update canonicals and sitemap entries may be extensionless while internal links use `.html`. That is a deployment/HTTP behavior to verify, not proof that both URL forms return the same content. Do not rewrite every route during an identity repair.
- The contrast report checks token pairs, not all rendered text after cascade/opacity.
- Existing browser scripts attach to the first CDP page target, not a task-selected target. Do not run them against a personal browser session with unrelated tabs; use an isolated supported test session when available.

**Required correction.** Keep technical checks and add human-facing acceptance: full-page images, exact copy comparisons, section-order review, all changed UI states, actual HTTP checks for canonical/CV destinations, and a protected-content checklist. Test keyboard/no-JS behavior for the new disclosures. Add only targeted regressions for substantive contracts; do not build a new test framework to count decorative classes.

**Acceptance.** A successful build is one line of evidence, not the final verdict. Reviewer records separately whether source behavior passes, appearance passes, and identity is preserved. Each unresolved issue stays visible.

## Stage 09 — Handoff should not close the product review

**What worked.** Maintenance recipes, source-owner documentation, deployment/recovery notes, and preservation of the mixed worktree.

**Confirmed uncommitted change.** About now loops over all software records to produce names and parenthesized roles in a single sentence. This avoids a duplicate factual list, but reads like generated catalogue prose. Keep the single source and replace its presentation with a short natural sentence/link or a readable list when R1 runs.

**Readiness issue.** The report calls identity locally passed because the page leads with decision-making and software. That verifies the old brief, not the user's current requirement that the site retain his personality. No stages are formally accepted in the progress table, and the reports record user-directed continuation. It would be inaccurate to claim every previous transition was unauthorized. The new workflow needs actual independent review at each transition.

**Required correction.** Append this audit as the current product-review outcome: changes requested. Keep historical statuses and source evidence; do not rewrite prior reports to pretend the losses were always recognized. Update maintenance guidance to distinguish scientific facts from protected editorial material. Release readiness requires both functional correctness and the restored identity.

**Acceptance.** The reviewer has inspected the actual staged result, not just the implementer's report. Outstanding source/deployment limitations are named. Personal copy cannot be deleted under an unqualified “cleanup” task.

## Protected identity inventory

| Item | Historical evidence | Repair destination |
| --- | --- | --- |
| “Hi 👋, I'm Hamza” | `9530c70:site/collections/_pages/index.html` | Home H1/greeting |
| “Building things at the intersection of bits 🤖, brains 🧠, and Open-Source 💻.” | Same file; `4ea58d9:site/_data/profile.yml` | Home tagline |
| Open/accessible science, fairness and equity paragraph | Same files | Home, with depth on About |
| Sfax/Tunisia, Tiohtià:ke/Montréal, pronouns, pronunciation | Historical Home; current profile | Visible introduction; canonical facts retained |
| Supervisor and real affiliations | Historical Home; current career records | Concise introduction and linked context |
| Ethics/EDI and socio-environmental responsibility | `9530c70:site/collections/_pages/about.html` | About values section |
| “science belongs to everyone” | Historical About; intermediate About include | About community/open-science narrative |
| Collective responsibility to each other and the planet | Both historical About versions | About quotation |
| “Rejections and Failures” and existing learning reflection | Both historical About versions | Named About section/disclosure; no coming-soon promise |
| Personal land acknowledgment | `9530c70:site/collections/_pages/about.html` | About, preserving substantive text |
| Warm invitation and mutual support/minoritized researchers | `9530c70:site/collections/_pages/contact.html` | Contact, without response-time/job-search claims |
| Portrait, brain mark, personal media interview | Existing assets/spotlight | Preserve assets; review placement, do not delete as clutter |
| Teal/navy visual continuity | Historical Sass and Stage 03 screenshots | Color repair reference; accessible final shades to be reviewed |

## Repair sequence and boundaries

These are proposed repair units, not a repeat of the original ten implementation stages. The original-stage mapping above supplies accountability; smaller repairs supply control.

1. **R1 — Personal voice and missing content.** Home introduction, About reflections/values, Contact warmth. Detailed executable prompt provided. No global palette, section-order, bibliography or deployment edits.
2. **R2 — Home hierarchy and length.** Move/reduce previews, select trajectory, relocate hero publication spotlight and preserve the interview's destination. Review full-page Home and all affected component consumers.
3. **R3 — Visual coherence.** Review teal/navy direction; repair component/state cascade and rendered contrast; align surfaces and controls. Review affected routes/states at all four widths.
4. **R4 — Research/software narrative.** Remove agent-process caveats and duplicated prose, improve detail order, retain all verified roles and relationships.
5. **R5 — Publication reading experience.** Compact Home previews and index controls as warranted by inspection. Handle unresolved factual questions in a separately identified data subtask; do not mix guesses into UI work.
6. **R6 — CV, route checks and release review.** Produce reviewable current artifacts, verify actual HTTP/canonical behavior, complete accessibility regressions, update maintenance guidance, then assess release readiness.

After every repair: implementation report → independent Codex review → correction of findings → next stage. The owner retains final say on voice and appearance. The next detailed prompt should be written against the reviewed result of the preceding stage, not a speculative final design.

R1 deliberately does not claim to fix the entire homepage. Remaining visual/composition defects stay in this ledger and must not be mistaken for acceptance of them.
