# Sol handoff — R2: personal story, Home composition, and Contact

Updated after final R1 review: 2026-09-25. Implementation model: Sol. Independent review remains mandatory between stages. Latest prerequisite: [R1_FINAL_REVIEW.md](reports/R1_FINAL_REVIEW.md).

## Copy-ready entry instruction

```text
Read docs/identity-repair/R2_CV_STORY_AND_COMPOSITION.md completely and follow
its current review checkpoint. R1_FINAL_REVIEW.md independently closes the two
original R1 findings; do not repeat those corrections. When the owner invokes
this handoff, implement only R2 as defined here, including the bounded Contact
refinement. Preserve the latest R1_BROADER_INTRO wording, existing work,
corrected facts, and protected personal passages. Keep the military-AI
reference understated. Validate the actual rendered pages, save evidence,
and stop for independent review.
Do not implement all 36 recommendations at once, self-approve, commit, push,
deploy, or modify the cv-latex repository.
```

## 1. Current review checkpoint and starting state

Read `REVIEW_PROTOCOL.md` and `reports/R1_FINAL_REVIEW.md`. The final independent review closes **R1-REV-01** (shared affiliation labels) and **R1-REV-02** (semantic color tokens), including the subsequent owner-feedback, intro-refinement, and broader-intro revisions. Its verdict is **Technical review passed; owner judgment pending** on the broader voice/composition and visual identity addressed in R2/R3. There is no remaining R1 technical correction gate.

The owner's 2026-09-25 request was to finish reviewing R1 and update this handoff. R2 has **not** been implemented by that review. An owner instruction to execute this handoff authorizes R2; it does not require rerunning the old R1 correction loop or accepting the whole site's appearance first. Stop after R2 for its own independent review.

The immediate baseline is the **final reviewed working tree**, not HEAD alone and not `evidence/r1/after/`. Home's latest copy is in `R1_BROADER_INTRO.md`; About/Contact incorporate the earlier corrections and owner-feedback revision. Fresh final-state captures and measurements are in `evidence/r1/final-review/`. The source patch hash and generated-bundle hash are in the final review. Preserve the staged documentation work and staged About software-data change as well as all unstaged R1 changes.

If the source changes after that review, inspect the intervening diff and recapture the immediate baseline. Do not describe stale screenshots as the start of your implementation.

## 2. R2 outcome

Restore the website as a personal academic site with a connected story, not a sequence of output inventories. The owner approved the restoration direction and wants inspiration from the narrative accompanying the latest local LaTeX CV. The owner explicitly prefers a more understated military-AI reference.

Connect:

- Mathematics/engineering in Tunisia and the bridge into neuroscience.
- Earlier work on face familiarity and changing neural representations.
- Current doctoral questions about decisions under changing evidence.
- Reusable research software, teaching, mentoring, and community-building as connected practices.

Keep Home focused on the person and current work; let About tell the fuller journey. Borrow the CV's narrative coherence, not its category order, grant tone, typography, or density. Do not add a long story section above Updates or invent motivations to make the transitions dramatic.

## 3. Required reading and baseline

Read these yourself before editing:

- `docs/identity-repair/AUDIT.md`, `REVIEW_PROTOCOL.md`, `R1_RESTORE_PERSONAL_VOICE.md`, `reports/R1_FINAL_REVIEW.md`, the original `R1_REVIEW.md`, and the R1 implementation report and subsequent correction/revision reports. Read `R1_BROADER_INTRO.md` last for the final Home wording.
- `docs/identity-repair/reports/DEEP_RESTORATION_REVIEW.md` and `CV_STORY_DIRECTION.md` completely. The dated owner update supersedes the stronger military-AI emphasis in the original recommendation 05.
- `docs/reference/contracts.md`, `sources.md`, and `decisions.md`.
- Current Home/About/Contact/Updates pages and includes; shared data; hero, `updates-trajectory-split`, `updates-list-item`, `posts-list`, `research-section`/`research-card`, `software-section`/`software-card`, and `featured-publications`/`publication-card` definitions; header/footer and their styles; `site/js/updates-filter.js`, `site/js/common.js`, `scripts/check-browser.js`; and the full affected style cascade through `site/assets/main.scss`.
- In `/Users/hamzaabdelhedi/Projects/cv-latex`, read `main.tex`, `nserc_2026.tex` (especially Parts II and III), `education.tex`, `experience.tex`, `software.tex`, `teaching.tex`, `mentoring.tex`, and `service.tex`. Read the proposal's rationale only if needed to understand the current question. Record actual local revision and dirty state. Do not fetch, edit, compile, or otherwise modify that repository for this task. Local uncommitted source is not automatically the latest published source.
- Historical voice at `9530c70:site/collections/_pages/{index,about,contact}.html` and the fuller `0d321f8:site/collections/_pages/about.html`. Recover with read-only Git commands; do not restore whole files.

Inspect `git status --short`, staged and unstaged diffs, and all overlapping paths. Preserve existing changes. Capture the **final reviewed R1 state** as this stage's immediate before baseline; historical screenshots are an additional comparison, not a substitute. Record pre-existing failures, including the known Publications keyword-collapse defect, separately from new regressions.

## 4. Content and source rules

- Preserve the exact R1 greeting, signature tagline, Home values paragraph, failure paragraph, and collective-responsibility quotation. Keep pronunciation/pronouns, origin/place, PhD-student identity, current research question, and the substantive land statement. Do not require JavaScript to read them.
- Preserve the latest owner-requested Home research paragraph as one paragraph, including Prof. Karim Jerbi, low-dimensional trajectories, artificial neural networks/foundation models, and the CHU Sainte-Justine collaboration naming ADHD and epilepsy. Use the actual final rendered copy in `R1_BROADER_INTRO.md`, not the earlier R1 methods sentence. Do not remove clinical context or split it back into a separate paragraph to meet a height target. The PCA paper remains unpublished: no title, link, announcement, findings, or forthcoming-paper promise. Shared supervisor/affiliation fields must still supply the names.
- Keep the primary research hierarchy: dynamic decision-making is central; foundation models are complementary; clinical EEG is collaboration; face familiarity is earlier research.
- Restore the educational journey, Why Neuro-AI motivation, explicit solidarity with marginalized/minoritized/underrepresented people, and the knowledge-sharing motivation using the historical writing and CV story direction. Avoid a second adjacent methods summary.
- Selectively incorporate the engineering internship, TuNA, Future Imaginaries, and graduate/undergraduate mentoring where they strengthen the story. Do not add a seven-item achievements wall. Preserve Abundant Intelligences' distinct community/research context.
- For responsible AI, prefer modest wording such as: “I have also helped organize discussions about the societal impacts and responsible use of AI.” Retain accurate initiative names where identifying a contextual link or detailed service example, but no dedicated Home military-AI feature or amplified framing. Do not erase the broader values.
- If mentioning Arabs in Neuroscience, use the CV-supported **Teaching Assistant**, not the historical Instructor label. Do not describe scheduled November 2026 teaching as completed.
- Do not import unpublished results, exact clinical cohort details, internal model statistics, allocation scores, trainee identities, or forthcoming-paper promises from application drafts. The intentionally withheld EEG-alignment publication stays withheld.
- Current shared site records retain ownership of dates, degrees, roles, affiliations, software credits, publications, and public links. Use those records in rendered summaries. New narrative may synthesize the source material; it must not create another editable factual inventory. Conflicting claims go in the report, not silent updates.
- The optional older land-statement ending and extra failure sentence remain optional; do not alter protected paragraphs merely because examples exist in the review.

## 5. Home composition

Implement this order using the existing Jekyll/Bookshop system:

1. **Personal introduction:** greeting, portrait, concise factual identity, signature tagline, research/values, and place. Group greeting/status/portrait before the long research paragraph on mobile, with a matching logical reading order and a single portrait/content DOM. The reviewed 390px portrait starts about 1,020px down. Improve that relationship through layout, without shrinking or deleting the approved prose.
2. **Recent Updates:** directly after the introduction. Updates must precede the supplementary trajectory on mobile and in the logical reading order.
3. **Research:** brief current focus and connected directions, not full detail-page summaries.
4. **Open-source software:** purpose first, then at most three compact previews linked to the complete Software page.
5. **Selected publications:** at most three compact previews with complete readable titles and useful year/venue/status information.

Specific requirements:

- Remove publication/carousel promotion from the greeting area. Preserve its source records and give the existing Abundant Intelligences interview a visible, static destination in About's community context or a compact Home feature. Do not delete the interview as collateral cleanup.
- Resolve the interview's title, date label, image, and URL from its existing `spotlight.yml` media record. Keep the full title readable without inherited carousel positioning, fixed height, line clamps, or inactive-slide visibility rules. Removing the carousel must not leave empty controls or a blank reserved panel. Its oversized active dot was already fixed in R1; do not report that as a new R2 fix.
- Make the tagline a modest personal signature rather than another competing headline.
- Use intentional Home-only preview variants where shared components otherwise render full inventories. Preserve richer index/detail behavior. No line clamps, fixed-height clipping, shortened canonical titles, hidden mobile content, or duplicated mobile DOM.
- Use `research-card` for the active research renderer; the legacy `project-card` is not what current Home uses. Keep selection in the existing research IDs. If Home needs distinct short research copy, a small Home presentation map keyed by those IDs is acceptable; resolve titles, URLs, and roles from canonical records and keep full research narratives untouched. Do not truncate arbitrary summary strings to obtain the preview.
- Make the software selection explicit, preferably the existing `mne-denoise`, `coco-pipe`, and `coord2region` IDs, with purpose and accurate role plus a clear link to Software. All five software records currently have `featured: true`, so that flag alone does not select three. Keep all five on Software. Keep the current three featured publication records; R2 changes their rendering, not their bibliographic facts or featured flags.
- Replace the seven-record Home trajectory dump with a small explicit selection/grouping of existing IDs, or a compact journey link to About. Record the presentation choice. Keep the complete canonical records and fuller trajectory available on About/CV; do not conflate degrees, jobs, and collaborations.
- Give About early navigation placement and Updates a clear main-navigation route. Retain Research, Software, Publications, and CV. Test header wrapping and the mobile menu; do not reinstate empty Blog/Projects pages.
- Resolve the misleading `circular_image` input while changing the hero: both current image rules force a rounded rectangle despite `true`. Implement the documented boolean behavior in the owning selectors and preview, preserving the owner's real portrait; remove only the conflicting portrait-radius overrides. This local component fix belongs to R2, while global colors remain R3.
- Do not aim for an arbitrary historical pixel height. Measure whether Updates and community are encountered before the inventories and whether repetition actually decreases.

The reviewed baseline is approximately 8,102px total / Updates at 7,350px at 390px width, and 5,037px total / Updates at 3,665px at 1440px width. These are diagnostics, not target heights. Capture new measurements after fonts, images, and entry animations settle; fixing the collapsed Updates container can increase correct page height before composition reduces repetition.

## 6. About composition

Reshape existing prose rather than appending the CV narrative beneath it:

1. Personal opening and educational journey, including the engineering-to-neuroscience bridge.
2. Why Neuro-AI / from representations to decisions, with the current focus clear.
3. Values, explicit solidarity, and the existing collective-responsibility quotation.
4. Teaching, mentoring, and community, with one or two useful existing resources and concrete examples.
5. Visible failure reflection and substantive land acknowledgment, still open by default where a disclosure is used.
6. Correctly sourced trajectory and optional deeper details.

Do not turn each paragraph into a card or reproduce the full Software inventory here. Preserve software role distinctions whenever a name/role is rendered. Use a contextual link to the full Software page instead of repeating all five entries.

Prefer the existing MAIN workshop story/photo over the old generated brain illustration. Inspect the actual image before use; retain accurate context/credit and alt text. If permission to promote identifiable attendee imagery is unclear, keep a useful story link and record the image decision as pending. Do not generate replacement imagery.

Link teaching materials and community resources meaningfully. Validate promoted external destinations. Do not feature the mismatched Aotearoa AGM post until its title/body conflict is resolved separately; do not invent the missing account. Do not silently correct historical clinical-role news while moving it—record its conflict with current canonical data.

The current lead stacks the PhD and administrative assistantship, while the desktop portrait leaves a narrow text column. Let the opening introduce the person and journey naturally, using shared facts wherever named. Keep a fuller career section later, with an accurate label if all seven records remain. Preserve existing section IDs (`about-community`, `about-failures`, `about-land`, `about-trajectory`) or provide compatible anchors for any new contextual links.

## 6a. Contact: address the remaining owner feedback

`R1_OWNER_FEEDBACK.md` records that Contact still feels formal/sparse. R1 restored its substance; R2 should make a bounded copy/composition refinement rather than leave that feedback unassigned.

- Use the historical invitation as the register: a natural heading such as “Let's get in touch,” a concise invitation to say hello or discuss neuroscience, Python, academic life, or life more generally, and the existing mutual-support reflection.
- Preserve gratitude, collaboration, and support for people minoritized in Neuro-AI. Keep the shared UdeM email, all existing profile destinations and ORCID, and location. Do not restore old Gmail, a response-time guarantee, job availability, a form, or an implied mentoring service.
- Make the email easy to discover and avoid oversized introductory text or empty spacing that separates the invitation from the action. Use the same semantic tokens and restrained grouping as About; no global palette work or extra decorative content.
- Include Contact in the before/after copy table and four-width visual review. Editorial success remains for owner judgment; a build pass does not settle the tone.

## 7. Related usability fixes in R2

The following bounded defects belong to this composition stage:

- **Updates visibility:** the current script toggles `hidden`, but the component's `display: flex` overrides it. Repair the actual hidden state while retaining accessible controls/results messaging. Initial page should display ten of 23 entries; Teaching currently matches five; no-match must display zero. Recalculate expectations if underlying records change independently. Test search, category, year, combinations, reset, and pagination using rendered visibility, not attributes alone.
- **Home footer overlap:** the current `.updates-column` uses `height: 100%` and its timeline uses `flex: 1 1 0` / `min-height: 0`, while the final stylesheet changes overflow to visible. At 390/768px the timeline collapses to 40px; its items extend into and beyond the footer. A browser-only experiment with auto column height and content-sized timeline flex removes the overlap. Correct the owning component's sizing rules; measure the final visible item/link bottom against both the section bottom and footer top. Moving the section earlier must also leave it clear of the following Research section. Do not conceal the cause with padding, clipping, fixed heights, or content removal.
- **Updates pagination focus:** `renderPagination()` destroys the activated button with `replaceChildren()`. Keep keyboard focus on the corresponding current-page control or a deliberate results destination after activation, and keep the status/page indication accurate. Test native Enter/Space and subsequent Tab, including reduced motion. The current archive has no dedicated reset button: either add a small accessible reset control in `posts-list` or explicitly exercise clearing search plus All Categories/All Years.
- **Updates markup:** `posts-list.jekyll.html` has an unmatched second closing `</div>` before its inline script. Remove that stray close while touching the archive and inspect the resulting main/container structure, including any other consumers. This predates R1.

Scope Updates behavior to its archive root/list. The same `.js-update-item` component is used on Home and the script is loaded globally; Home's selected updates must remain visible and must not be paginated accidentally. With scripts disabled, the archive must expose all records and the selected Home updates must still be readable.

## 8. Scope and deferred work

Allowed R2 production scope:

- Home front matter; About and Contact includes and their descriptions/headings where needed; Updates introductory copy if refined alongside its controls.
- Profile presentation fields; navigation/footer presentation data needed for the agreed discovery changes. No canonical identity or career-fact rewrites.
- Hero, updates/trajectory, `posts-list`, updates items, research/software preview renderers, and featured-publication/publication-card components with matching Bookshop inputs/SCSS. Add small partials or explicit compact variants only when needed; preserve non-Home consumers and generic hero inputs.
- Scoped selectors in existing profile/research/publication/visual styles to support those changed components. Use existing semantic tokens; no new global theme.
- The Updates script/list styles for the confirmed visibility defect.
- Header/footer templates or their existing scoped selectors only where needed for the agreed navigation/reflow changes; no shell redesign.
- `scripts/check-browser.js` only to keep the existing checks valid for the new composition. It currently dereferences `.c-spotlight__item` unconditionally in its reduced-motion check and assumes a Home trajectory disclosure. Replace those assumptions with checks for the intended static interview/discovery route and the actual disclosure destination. Preserve runtime-error reporting and the other meaningful checks. Use an isolated browser; no new test framework.
- Generated Bookshop bundle via the supported command, stage evidence/report, and an append-only decisions entry.

Out of scope: global teal/navy palette redesign (R3), full Research/detail prose rewriting (R4), Publications index/filter redesign or bibliographic edits (R5), CV artifact/workflow/release repair (R6), dependency upgrades, route changes, new frameworks, and external repository changes. A concise Home-only research preview may omit process disclaimers without rewriting canonical project records in this stage.

Do not implement all 36 recommendations at once. Map the relevant recommendations to implemented/deferred status in the report. If a necessary dependency exceeds scope, explain it before broadening the work. Do not reset, stash, clean, blanket-stage, commit, push, or deploy.

## 9. Validation and evidence

Use installed dependencies and current supported commands. Build to a separate temporary destination when practical; do not patch generated HTML. Typical commands:

```bash
npm run bookshop-live
BUNDLE_GEMFILE=site/Gemfile JEKYLL_ENV=production bundle exec jekyll build --source site --trace
ruby scripts/validate-site-output.rb _site
git diff --check
git diff --cached --check
```

Adjust only the validator destination if using a temporary build. The known missing canonical CV is an unresolved warning/failed action, not a pass and not permission to copy a stale PDF.

Save before/after opening and full-page captures for Home, About, Contact, and Updates at 390, 768, 1024, and 1440 CSS px. Record browser/version, viewport height, zoom/device scale, build location, route, fonts/images loaded, and entry animations settled. Use an isolated test browser, not arbitrary personal tabs. Do not claim screenshots or dimensions unavailable to the tools. Record any browser-only diagnostic overrides separately; they are not screenshots of the implemented source.

Check:

- Protected passages and shared facts in actual generated/rendered pages.
- Repeat a temporary shared-label fixture after hero/About changes: degree/university, research-affiliation display labels, supervisor, and clinical affiliation propagate. Do not save fictional values in production. Keep the exact latest research paragraph in the protected-copy assertion alongside the original personal passages.
- One H1, logical heading/reading order, no duplicate IDs/raw Liquid, and working internal links/fragments.
- Readable portrait/intro, complete long titles, no footer overlap or horizontal overflow, and useful reflow at 200% zoom.
- Keyboard menu/actions/disclosures; focus contrast; reduced motion; core content with JavaScript disabled.
- Updates filtering/pagination against computed visibility and the empty state: initial 10, next page 10, last page 3; Teaching 5; no-match 0; combined controls and recovery. Check filtered links leave the tab order, pagination focus survives, and Home remains unaffected.
- Research, Software, Publications index/detail, post pages, and the generic Bookshop hero as regression consumers of shared component/style changes. Their detailed inventories, data, and existing behavior must remain intact. Distinguish existing failures from regressions; the Publications “Fewer keywords” bug is assigned R5, not silent extra R2 work.
- Existing external resources actually promoted by this stage. If unavailable, use a verified internal story destination or record the limitation; do not invent links.
- Actual stage-owned diff, including new files and generated output separately from pre-existing work.

Small targeted regression assertions are welcome; no new testing framework. Automated passes do not replace reading the pages and inspecting the whole composition.

## 10. Report and stop

Write `docs/identity-repair/reports/R2_IMPLEMENTATION.md` and evidence under `docs/identity-repair/evidence/r2/`. Include:

- Final R1 prerequisite review, starting commit/dirty state, exact stage-owned diff, authored versus generated files.
- Before/after copy and section-order tables; source references for new narrative/activity claims; actual destinations of protected material and the interview.
- Home preview counts, selected trajectory rationale, and measurable Updates placement before/after at desktop/mobile widths.
- Updates visibility, pagination focus, markup, and Home containment reproductions and verification results; any affected browser-check changes.
- Commands/results, screenshot paths, regression coverage, limitations, unresolved facts, and deferred stages.
- Status: **Implemented, awaiting independent Codex review**. Do not mark yourself accepted or rewrite the previous reviews.

Append a dated R2 entry to `docs/reference/decisions.md`, preserving its history. End with the reusable reviewer instruction in `REVIEW_PROTOCOL.md`, and stop. No automatic R3 work.

Final editorial check: can a visitor understand who Hamza is, how his questions developed, why he builds tools and shares knowledge, and what his values look like in practice—without reconstructing that story from eleven cards and a CV?
