---
name: dogfooding
description: "Critically dogfood a running app for fun, engagement, usability, and replay value. Use when asked to test the app like a critical dogfooder, play the real UI in the browser, and produce prioritized feedback with concrete fixes."
argument-hint: "Optional focus area: fun, onboarding, retention, mobile, accessibility"
---

# Critical Dogfooding

Use this skill to evaluate whether an app is genuinely enjoyable in practice, not just technically correct.

## When To Use

- The user asks to dogfood the app, test fun, or give critical product feedback.
- You need a browser-first hands-on evaluation, not code-only review.
- You want actionable product insights ranked by severity and impact.

## Inputs

- Running app URL or instructions to start the app.
- Optional focus area: fun, onboarding, retention, mobile, accessibility.
- Optional constraints: timebox, target audience, event context.

## Procedure

1. Confirm the app is running and reachable.
2. State the dogfooding plan briefly: play the app as a real first-time user, then stress-test key flows.
3. Run a full first-use journey:
   - Landing and onboarding clarity
   - Core interaction loop
   - First reward/win state
4. Stress-test behavior that affects fun and trust:
   - Mistaps, toggles, and undo behavior
   - Post-win behavior and replay loop
   - Navigation/reset persistence
5. Probe engagement depth:
   - Does motivation increase or flatten after first success?
   - Are there tension, stakes, novelty, or social mechanics?
6. Capture findings with severity ordering:
   - High: blocks fun, trust, or core value
   - Medium: reduces engagement or clarity
   - Low: polish or delight gaps
7. Propose a short, prioritized improvement list with the fastest fun-lift opportunities first.

## Decision Points

- If the app does not load: report setup blocker and request/perform run steps before judging fun.
- If a critical flow is blocked: document exact reproduction steps and continue testing other reachable flows.
- If focus area is provided: bias test depth toward that area while still covering core loop.

## Quality Criteria

- Testing is interaction-based (real clicks/flows), not code-inspection-only.
- Report includes at least one complete loop from start to reward.
- Findings are specific, evidence-backed, and ordered by severity.
- Feedback covers both what works and what reduces fun.
- Recommendations are concrete and implementable.

## Output Format

1. Overall fun verdict (short)
2. Findings first (ordered High to Low)
3. Quick wins (top 3-5)
4. Optional second-pass suggestion (mobile/accessibility/deeper scenario)
