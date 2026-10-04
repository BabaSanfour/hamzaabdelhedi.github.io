# Review after each repair stage

This protocol implements the owner's 2026-09-23 request for independent review after each stage. It is not a claim that previous stages were accepted or that their implementation reports substitute for review.

## Roles and sequence

1. Sol is the implementation model for the repair stages. Sol executes exactly the named repair prompt, preserving unrelated work. Historical references to Luna describe the earlier implementation, not the current assignment.
2. The implementer builds, inspects the rendered result, and writes a report with evidence. Completion status: **Implemented, awaiting Codex review**.
3. Return the completed stage to the separate reviewing Codex conversation. The reviewer independently reads the actual diff and rendered result, comparing them with the repair prompt, [audit](AUDIT.md), historical personal writing, and the previously reviewed stage. Sol's implementation self-check does not replace this review.
4. Codex issues **Changes requested**, **Technical review passed; owner judgment pending**, or **Reviewed and accepted** when the applicable review and owner judgment have actually occurred. The implementer cannot self-award acceptance.
5. Resolve review findings within the same stage. Write/execute the next detailed stage only after this review checkpoint. The owner can explicitly change sequence; document that instruction rather than silently treating an unfinished review as complete.

## What the implementer hands off

- Starting commit, starting worktree changes, final changed-file list, and exact stage-owned diff. No blanket staging or cleanup of unrelated files.
- Before/after copy table: restored, removed, changed and relocated material, with reasons. Every protected identity item affected by the stage must appear.
- Before/after visuals for affected routes at 390, 768, 1024 and 1440 CSS px. Record height, zoom, browser, build path and route. Include full-page captures or an ordered sequence covering the whole page. Preserve the opening viewport separately.
- Build/validation commands and actual results. Distinguish warning, failed check, unavailable check, and deliberate deferral.
- Relevant states: open/closed disclosures, active controls, keyboard focus, narrow layout, reduced motion and no-JS visibility where affected.
- Known limitations and remaining issues, each assigned to the current or a later repair. Do not describe a deferred issue as fixed.

If the available browser cannot export images or set exact widths, report that limitation. In-session views can support partial review; they are not imaginary saved files or exact-width proof. Do not manipulate unrelated personal browser tabs to satisfy a checklist.

## Codex review checklist

### Identity and copy

- Does the introduction sound like Hamza's supplied historical writing?
- Are failure, ethics/equity, origin/place, community and openness still present wherever required by this stage?
- Did factual corrections preserve personal meaning?
- Were any opinions, experiences, credentials, availability promises or failure stories invented?
- Has an administrative title, a large scientific statement, or a list of outputs displaced the human introduction?
- Is there any visitor-facing language about verification, prompt compliance, or the agent's process?

### Composition and appearance

- Review the whole page. Check section order and repeated information as well as the first screen.
- Read actual long titles and real software/affiliation names at narrow widths.
- Inspect hover/focus/active/open states for stale colors, opacity, clipping, oversized indicators and inherited styling.
- Measure rendered text/background contrast where changed; raw token ratios are insufficient when opacity or overlays apply.
- Ensure new content is not hidden to satisfy a height target. Avoid fixed-height clipping, tiny text, desktop-only content and duplicated mobile DOM.
- State personal aesthetic judgments explicitly. Do not present taste as a factual bug or equate automated passes with good design.

### Correctness and preservation

- Preserve canonical dates, titles, authors, source links, stable IDs/routes and intentionally withheld records.
- Inspect generated HTML, not only Liquid/YAML source.
- Validate changed links, including fragments and actual served PDF/canonical URLs when relevant.
- Check the affected template's other consumers and Bookshop configuration.
- Confirm no accidental dependency, global-style, generated-artifact, remote or deployment changes.

## Review report shape

```text
Stage:
Starting commit and reviewed ending commit/diff:
Verdict:

Findings, ordered by impact:
  ID / severity / file or UI location
  Expected behavior
  Observed behavior
  Evidence
  Required correction

Protected content: each relevant item and its rendered location
Visual review: routes, widths, states and artifact paths
Technical review: commands, results, warnings
Unverified items: exact limitations
Deferred issues: IDs and intended stage
Owner judgment: requested only for unresolved personal/aesthetic choices
Next stage: allowed or blocked by the specific findings above
```

“Looks good,” “build passed,” and “all stages implemented” are not sufficient review reports.

## Reusable reviewer instruction

```text
Review the completed identity-repair stage independently. Read its prompt,
docs/identity-repair/AUDIT.md, and docs/identity-repair/REVIEW_PROTOCOL.md.
Inspect the actual diff, generated pages, and before/after evidence; do not
accept the implementer's report as proof. Review voice/content preservation,
page composition, rendered visual states, accessibility, and scope. Identify
regressions with exact files and evidence. Do not implement another stage.
Return a clear verdict and a bounded correction list. Keep incomplete checks
and unresolved owner decisions visible.
```
