# AGENTS

## Purpose
This repository is a Vite + React + TypeScript workshop app for a social bingo game. Use this file for fast orientation, then follow linked docs for detail.

## First 5 minutes
1. Confirm prerequisites in [README.md](README.md).
2. Install and verify the project:
   - npm install
   - npm run lint
   - npm run build
   - npm run test
3. Start development server:
   - npm run dev
4. Open the local app URL shown by Vite (default http://localhost:5173).

## High-value project map
- App shell and screen routing: [src/App.tsx](src/App.tsx)
- Stateful game orchestration and persistence: [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts)
- Pure bingo rules and helpers: [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts)
- Unit tests for bingo rules: [src/utils/bingoLogic.test.ts](src/utils/bingoLogic.test.ts)
- Main game UI container: [src/components/GameScreen.tsx](src/components/GameScreen.tsx)
- Tailwind v4 theme tokens: [src/index.css](src/index.css)
- Vite + Vitest config: [vite.config.ts](vite.config.ts)

## Conventions that matter
- Keep game logic pure in [src/utils/bingoLogic.ts](src/utils/bingoLogic.ts); avoid moving rule logic into components.
- Treat [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts) as the single state boundary for board, bingo state, modal state, and localStorage persistence.
- When changing persisted shape in [src/hooks/useBingoGame.ts](src/hooks/useBingoGame.ts), update storage validation/versioning and add or adjust tests.
- Keep the free center square behavior consistent with current logic/tests.
- Styling uses Tailwind CSS v4 with CSS-first tokens (@theme) in [src/index.css](src/index.css).

## Testing and quality gates
- Lint command: npm run lint
- Build command: npm run build
- Test command: npm run test
- Before submitting changes, run all three commands and ensure tests still pass.

## Existing chat customizations
- Custom agents live in [.github/agents](.github/agents) (for example Quiz Master and TDD workflow agents).
- Prompt commands live in [.github/prompts](.github/prompts).
- Tailwind-specific guidance is in [.github/instructions/tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md).
- Frontend skill guidance is in [.github/skills/frontend-design/SKILL.md](.github/skills/frontend-design/SKILL.md).

## Workshop docs (link, do not duplicate)
- Main guide: [workshop/GUIDE.md](workshop/GUIDE.md)
- Setup flow: [workshop/01-setup.md](workshop/01-setup.md)
- Design flow: [workshop/02-design.md](workshop/02-design.md)
- Multi-agent flow: [workshop/04-multi-agent.md](workshop/04-multi-agent.md)
