---
description: "Use when redesigning or restyling the React frontend (theme changes, UI polish, layout updates). Covers Tailwind v4 token usage, scope boundaries, and validation for this bingo app."
name: "Design Guide"
applyTo:
  - "src/components/**/*.tsx"
  - "src/index.css"
  - "index.html"
---

# Design Guide

- Treat redesigns as visual-first by default.
- Keep game rules and state logic unchanged unless the user explicitly requests behavior changes.
- Do not move bingo rules from src/utils/bingoLogic.ts into components.
- Do not change persistence shape in src/hooks/useBingoGame.ts for styling-only work.

- Use Tailwind v4 CSS-first theming:
- Define shared colors, fonts, and core tokens in src/index.css via @theme.
- Reuse tokens from classes instead of scattering one-off palette choices across many components.
- Prefer distinctive visual direction over generic defaults.

- Preserve existing UI copy unless the user explicitly asks for copywriting changes.

- Preserve gameplay clarity and accessibility in square states:
- Unmarked, marked, winning, and free-space states must remain visually distinct.
- Keep button semantics and aria attributes intact for bingo squares and modal actions.

- Load external web fonts from index.html link tags.
- Avoid @import url(...) ordering issues in src/index.css that can trigger CSS build warnings.

- After UI changes, always validate with:
- npm run lint
- npm run build
- npm run test
- Manual browser check for start screen, game screen, bingo banner/modal, and mobile + desktop layout.

- When major design architecture or dependency choices change, update instructions in .github/instructions so future tasks inherit the same design guardrails.
