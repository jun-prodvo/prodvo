# Project Guidelines (Copilot CLI Environment)

> **This file is for the Copilot CLI environment — developing directly in `/root/searchy`.**
> The agent runs on the same machine as the codebase and can build/test locally.
> For the IDE environment (VS Code + GitHub Copilot extension), use a separate IDE-specific instruction file if needed.

Primary editable project root: `/root/searchy`.

---

## Architecture

Single Next.js 16 application (App Router) for the Prodvo marketing frontend.

```
searchy/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── product/page.tsx
│   │   ├── use-cases/page.tsx
│   │   ├── workflow/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── faq/page.tsx
│   │   └── docs/page.tsx
│   └── components/
│       ├── prodvo-landing.tsx
│       └── site-shell.tsx
├── .claude/
│   ├── CLAUDE.md
│   ├── style-guideline.md
│   ├── task/lessons.md
│   └── skills/
└── .github/
    └── copilot-instructions.md
```

Route model:

- `/` → homepage (`prodvo-landing`)
- `/product`, `/use-cases`, `/workflow`, `/pricing`, `/faq`, `/docs` → dedicated marketing subpages

Styling model:

- global shared styles in `src/app/globals.css`
- route-local CSS modules in `src/app/**/**.module.css`

---

## Build and Test

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

Notes:

- Dev server is configured on port **4173** via package script.
- This repo currently has no dedicated test runner script; build + lint are primary validation gates.

---

## Process Management

No mandatory PM2 workflow is required for routine local development in this project.

Use:

```bash
npm run dev
```

for iterative work, and:

```bash
npm run build
```

before completing substantial code/style changes.

---

## Code Style

- TypeScript strict mode
- Next.js App Router conventions
- ESLint 9 (`eslint.config.mjs`)
- Tailwind v4 available, with project styling primarily in CSS files/modules
- `'use client'` on interactive components only

---

## Project Conventions

### Route Composition

- Homepage logic/components live in `src/components/prodvo-landing.tsx`.
- Subpages are route-local and usually wrapped by `SiteShell`.
- Preserve each route’s storytelling identity; avoid forcing one template across all pages.

### Styling Conventions

- Keep global behavior (buttons, nav, shared primitives) in `globals.css`.
- Keep page-unique section systems inside route CSS modules.
- Follow `.claude/style-guideline.md` + `.claude/task/lessons.md` before implementation.

### Content/Copy Changes

- Keep copy aligned to page intent:
  - Product: capability and value narrative
  - Use cases: scenario-specific outcomes
  - Workflow: process clarity
  - Pricing/FAQ/Docs: decision support + trust

---

## Integration Points

This repository is currently frontend-focused.

If external integrations are added later:

- define env vars explicitly
- avoid exposing sensitive keys client-side
- centralize fetch/client logic for maintainability

---

## Security

- Never commit secrets/tokens
- Keep environment files private
- Sanitize or safely render any user-supplied HTML content

---

## Project Scope Rules

- Work in `/root/searchy`.
- Do **not** modify `/root/indexnow-dev` unless user explicitly requests it.
- Keep docs and instructions comprehensive (do not reduce to minimal stubs).
- Update lessons when user gives corrections.

---

## ⛔ MANDATORY FIRST STEP — Read Before ANY Action

> **STOP. Before writing ANY code, making ANY edit, or running ANY command, you MUST do these reads FIRST.**
> This is not optional. Skipping this leads to incorrect approaches and wasted effort.
> **This applies to EVERY user message — not just the first one in a session.**

1. **Read `.claude/task/lessons.md`** — Hard-won rules from past mistakes. Every principle is a blocking constraint.
2. **Scan `.claude/skills/`** — Identify which skill files match your current task and read their SKILL.md files.
   - Committing code → `git-commit` + `conventional-commit`
   - Writing a PRD → `prd`
   - Refactoring → `refactor`
   - Creating routes → check for relevant API/route skills
   - Any task → check if a matching skill exists first
3. **Re-evaluate at each to-do item** — Different steps may need different skills.

**If you find yourself about to edit a file without having read lessons + relevant skills first, STOP and read them.**

### ⛔ MANDATORY AFTER EVERY CHANGE — Commit + Push

> **After EVERY change — code, docs, config, lessons, instructions, ANYTHING — you MUST immediately:**
> 1. **Update changelog first** — append to `docs/logs/changelogs.md` with 5W+1H (`Who/What/When/Where/Why/How`) + changed file paths
> 2. **Stage** — `git add -A`
> 3. **Commit** — `git commit --no-verify` with a conventional commit message
> 4. **Push** — `git push`
>
> **This applies to ALL files in the repo. A one-line docs edit gets committed and pushed immediately.**
> **Do NOT wait for the user to remind you. This is automatic. No exceptions.**

### ⛔ MANDATORY AFTER CODE CHANGES — Build + Restart

> **After changes to app or package code (NOT docs/config-only changes), you MUST also:**
> 1. **Build** — `npm run build` to verify no errors
> 2. **Restart** — restart local dev server (`npm run dev`) if needed to pick up changes
> 3. **Verify** — verify route output and terminal logs after restart
>
> **This is SEPARATE from commit+push. Both must happen. Build+restart verifies the code works. Commit+push saves it.**

---

## Agent Behaviour Rules

### 1. No Lazy Fixes
- Always find and fix root causes. Never apply temporary workarounds or band-aids.
- When fixing a file, check all other files that import from or depend on the changed code. Trace the full impact.
- Senior developer standards: would a staff engineer approve this change?

### 2. Strict Type Safety — No `as` Casting
- **NEVER** use `as any`, `as unknown`, or any `as` type assertion. All values must use their real types.
- Data values must match local TypeScript interfaces/types in `src/`.
- If a type mismatch exists, fix the type definition or the data flow — never cast around it.
- Zod schemas define input shapes; inferred types (`z.infer<typeof schema>`) are the source of truth for request/response bodies.

### 3b. Generated Documents — Always in `/docs` at Project Root
- **ALL generated markdown documents** (reports, deep dives, PRDs, implementation plans, audits, architecture docs) MUST be saved to the `/docs` folder at the project root (`/root/searchy/docs/`), **NOT** scattered elsewhere.
- Use descriptive filenames with date prefix when relevant: e.g., `docs/2026-03-06-api-structure-audit.md`.
- Create the `/docs` folder if it doesn't exist.
- **Note**: This is the Copilot CLI version (on-server). For the IDE version (Windows local path), see `copilot-instructions-ide.md`.

### 4. Workflow Orchestration

**Plan Mode**: Enter plan mode for any non-trivial task (3+ steps or architectural decisions). Write plan to `.claude/task-list.md` with checkable items. If something goes sideways, STOP and re-plan immediately.

**Subagent Strategy**: Use subagents liberally for research, exploration, and parallel analysis. One task per subagent. Keep main context window clean.

**Self-Improvement Loop**: After ANY correction from the user, update `.claude/task/lessons.md` with the pattern and a rule to prevent recurrence. Review lessons at session start.

**Verification Before Done**: Never mark a task complete without proving it works. Run `npm run build` and/or `npm run lint`, check for errors, demonstrate correctness. Diff behavior when relevant.

**Demand Elegance (Balanced)**: For non-trivial changes, pause and consider if there's a more elegant approach. Skip for simple, obvious fixes — don't over-engineer.

**Autonomous Bug Fixing**: When given a bug report, just fix it. Point at logs/errors/failing tests, then resolve. Zero hand-holding required from the user.

### 5. Task Management

1. Write plan to `.claude/task-list.md` with checkable items
2. Mark items complete as you go
3. High-level summary at each step
4. Add review section to `.claude/task-list.md` when done
5. Update `.claude/task/lessons.md` after corrections

### 6. Git Discipline

- **Scope**: Only commit and push inside `/root/searchy` for this project scope.
- **Dev-Only Editing Policy**: Make ALL code/config/docs changes in `/root/searchy` only.
- **Changelog Is Mandatory**: Before every commit/push, append an entry to `docs/logs/changelogs.md` with 5W+1H and file path(s).
- **Verification Flow**: After changes are validated and pushed:
  1. `cd /root/searchy`
  2. `npm run build`
  3. If needed, restart dev server and verify route behavior in browser/terminal
- **Commit After Every Change**: After every change — even a single-line fix — immediately stage, commit, and push. No batching multiple unrelated changes. Keep the remote always up to date.
- **Use Git Skills**: Before committing, read and follow the relevant Git skills in `.claude/skills/` (e.g., `git-commit`, `conventional-commit`, `make-repo-contribution`). Generate conventional commit messages with proper type, scope, and description.
- **Workflow**:
  1. `cd /root/searchy`
  2. Append changelog entry in `docs/logs/changelogs.md` (5W+1H + file path[s])
  3. Stage changed files (`git add`)
  4. Generate a conventional commit message using skill guidance
  5. `git commit` then `git push`
- **Remote**: `origin` should point to this repository's remote and active branch.

### 7. External Service Proxy Rule — Zero Direct Calls
- **NEVER** put secret-bearing external integrations directly in browser/client code.
- External interactions requiring secrets should go through server-side handlers/functions. The flow should remain: `Client UI → Server handler → External Service`.
- **Allowed client-side exceptions** are limited to non-secret-safe interactions explicitly required by product design/runtime.
- When writing or reviewing any code that touches an external service, **verify the call goes through an API route**. If it doesn't, fix it.
- This applies to all client-side modules in `src/`.

### 8. Core Principles

- **Simplicity First**: Make every change as simple as possible. Minimal code impact.
- **No Laziness**: Find root causes. No temporary fixes.
- **Minimal Impact**: Changes touch only what's necessary. Avoid introducing bugs.
- **Full Traceability**: When changing shared code, verify all consumers still work.
