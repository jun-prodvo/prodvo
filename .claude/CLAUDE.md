# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Prodvo (`/root/searchy`) is a Next.js 16 marketing website focused on product storytelling, conversion-oriented copy, and polished frontend UX.

This repository is a **single-app** codebase (not a monorepo). It uses App Router + React 19 + TypeScript strict mode, with route-level storytelling pages and shared global design primitives.

## Architecture

### App Routes

| Route | File | Purpose |
| ----- | ---- | ------- |
| `/` | `src/app/page.tsx` + `src/components/prodvo-landing.tsx` | Homepage narrative + product positioning |
| `/product` | `src/app/product/page.tsx` | Product deep-dive |
| `/use-cases` | `src/app/use-cases/page.tsx` | Scenario storytelling |
| `/workflow` | `src/app/workflow/page.tsx` | Process explanation |
| `/pricing` | `src/app/pricing/page.tsx` | Pricing narrative + plan clarity |
| `/faq` | `src/app/faq/page.tsx` | Objection handling + trust |
| `/docs` | `src/app/docs/page.tsx` | Documentation entry + onboarding |

### Core Frontend Files

- `src/components/prodvo-landing.tsx` — homepage structure, composition, interactions
- `src/components/site-shell.tsx` — shared route shell for subpages
- `src/app/globals.css` — global tokens, section primitives, shared controls, motion, responsive rules
- `src/app/**/**/*.module.css` — route-specific visual systems and section treatments
- `.claude/style-guideline.md` — style governance
- `.claude/task/lessons.md` — mandatory feedback memory

### Styling Model

- Homepage primarily draws from `globals.css`
- Subpages use route-local CSS modules
- Keep section systems distinct by route to avoid templated repetition
- Respect lessons and style guideline before introducing new patterns

### Runtime Model

- Frontend-only Next.js application
- No required local backend in this repository
- No workspace package build chain (single package via npm)

## Build / Dev / Test Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

### Notes

- `npm run dev` uses `next dev --turbopack --port 4173 --hostname 0.0.0.0`
- Build is the primary correctness gate for UI/code updates
- For broad style changes, verify multiple routes (not just edited page)

## Frontend Apps

This repo has one web app with multiple public marketing routes.

Shared behavior expectations:

- route-level narrative identity (no clone-template sections)
- consistent brand palette (white/light-gray + fire-orange emphasis)
- clear CTA hierarchy and strong readability on mobile + desktop

## Security

- Never commit secrets/tokens
- Keep `.env*` private
- Avoid introducing client-side secret usage
- Treat any HTML-rendered dynamic content as untrusted unless sanitized

## Code Style

### Formatting & Linting

- ESLint 9 via `eslint.config.mjs`
- TypeScript strict mode
- Path alias: `@/*` → `src/*`

### TypeScript

- Prefer explicit, narrow types
- Avoid `as any` / unsafe casting
- Fix type flow at source instead of patching at usage sites

### Naming

| Context | Convention | Example |
| ------- | ---------- | ------- |
| Route folders | kebab-case | `use-cases` |
| Components | kebab-case file names | `prodvo-landing.tsx` |
| Variables/functions | camelCase | `buildSectionCopy` |
| Types/interfaces | PascalCase | `FeatureItem` |
| Constants | UPPER_SNAKE_CASE | `CTA_MIN_HEIGHT` |

### Imports / Exports

- Prefer named exports
- Keep imports ordered (framework → local alias → relative)
- Reuse existing helpers before adding new utility layers

### Components

- Server Components by default
- Use `'use client'` only for interactivity/state/effects
- Keep sections composable and editorially clear

### Error Handling

- Avoid silent failure paths
- Surface failures with explicit handling
- For async UI work, ensure loading/error states are intentional

## Key Rules

1. **No lazy fixes.** Solve root causes.
2. **No templated repetition.** Each page needs distinct narrative/layout treatment.
3. **Respect lessons first.** Review `.claude/task/lessons.md` before editing.
4. **Use style guideline.** Follow `.claude/style-guideline.md` for palette/CTA/motion decisions.
5. **Validate before done.** Run `npm run build` after meaningful code changes.

## Agent Behaviour

### Context Recovery After Compaction (MANDATORY)

When context is compacted, recover full context BEFORE continuing:

1. Check auto-memory at `~/.claude/projects/root-searchy/memory/`
2. Use claude-mem MCP tools (`search`, `timeline`, `get_observations`) if available
3. Read JSONL transcript at `~/.claude/projects/*/[session-id].jsonl` for specific details
4. NEVER rely solely on compacted summary. Do NOT ask the user to repeat information discussed earlier.

### Git Commit Scope Rules

- Commit and push after every change, including small changes.
- **Before every commit/push**, append a changelog entry to `docs/logs/changelogs.md`.
- **Before every push**, run `git status` and `git diff` to check for user changes in the working tree.
- Stage files explicitly; do not use broad staging that can include secrets or generated files.
- Exclude `__pycache__/`, `*.pyc`, `node_modules/`, `.next/`, `dist/` unless explicitly asked.
- Use Conventional Commits with proper type, scope, and description.

### Planning Rule

For non-trivial tasks (3+ steps or architectural decisions), write a comprehensive markdown plan with step-by-step tasks, goals, and acceptance criteria. Store plans in `docs/plans/`. Do not execute code until explicitly told to implement.

### Change Log Rules

For every implementation/change, update `docs/logs/changelogs.md` before commit/push. Each log entry must include:

- `Who`
- `What`
- `When`
- `Where`
- `Why`
- `How`
- `File path(s) changed`

Log entries appended in reverse-chronological order (newest first).

### Verification Before Done

Never mark a task complete without proving it works. Run `npm run build` and/or `npm run lint`, check for errors, and demonstrate correctness.

### No Lazy Fixes

- Always find and fix root causes. Never apply temporary workarounds or band-aids.
- When fixing a file, check all other files that import from or depend on the changed code. Trace the full impact.
- Senior developer standards: would a staff engineer approve this change?

### Simplicity & Minimal Impact

- Make every change as simple as possible. Minimal code impact.
- Changes touch only what's necessary. Avoid introducing bugs.
- When changing shared UI patterns/components, verify all affected routes still work.

### Self-Improvement Loop

After ANY correction from the user, save the lesson to auto-memory (`~/.claude/projects/.../memory/`). Review memory at session start. Never repeat the same mistake.

### Dev-Only Editing Policy

Make ALL code/config/docs changes in `/root/searchy` only.

### Workflow Orchestration

- **Plan Mode**: Enter plan mode for any non-trivial task. If something goes sideways, STOP and re-plan immediately.
- **Subagent Strategy**: Use subagents for research, exploration, and parallel analysis. One task per subagent. Keep main context window clean.
- **Autonomous Bug Fixing**: When given a bug report, just fix it. Point at logs/errors/failing tests, then resolve. Zero hand-holding required.
- **Demand Elegance (Balanced)**: For non-trivial changes, pause and consider if there's a more elegant approach. Skip for simple, obvious fixes — don't over-engineer.

### Build + Restart After Code Changes

After changes to app or package code (NOT docs/config-only changes):

1. **Build** — `npm run build` to verify no errors
2. **Restart** — restart the local dev process (`npm run dev`) if needed
3. **Verify** — verify route output and terminal logs after restart

### Generated Documents

All generated markdown documents (reports, PRDs, audits, plans) go in the `docs/` folder with descriptive filenames (date prefix when relevant).

### PR Checklist

```bash
npm run lint     # No lint errors
npm run build    # Build succeeds
npm run lint     # Lint passes
npm run build    # Build succeeds
```

No new `as any` casts. Conventional commit messages. Keep diffs scoped and reviewable.

## Lessons & Principles (Mandatory)

These are hard-won rules from past mistakes. Each is a PRINCIPLE to follow — violating any is a blocking issue.

### Principle 1: External Service Proxy — ZERO Exceptions

Browser/client code must NOT contain hidden secret-bearing integrations. Any external integration requiring secrets must run server-side (route handlers/server functions), never in client bundles.

**How to verify** (for EVERY change involving service calls):

1. Grep for direct third-party SDK/network usage in client components that should remain server-side.
2. If found → route through a server-side handler with explicit boundaries.
3. Keep client-side calls limited to non-secret-safe interactions only.
4. Middleware/server runtime concerns are exempt when architecture requires it.

### Principle 2: Verify Actual Call Chains — Don't Trust Code Is Wired Up

Before relying on a route/helper/component, verify actual usage. Grep for imports/usages and remove dead paths when confirmed unused.

### Principle 3: Database Types Are Manually Managed — Always Update Them

Type definitions should have a clear source of truth in this repo (`src/` types/interfaces). Keep schema-like structures and consuming types synchronized.

### Principle 4: Never Destroy Git History

Never create root commits on repos with existing history. Never force-push without verifying local history includes all remote commits. Before ANY push: `git fetch origin && git log origin/main --oneline -5`. Default to `git pull --rebase origin main`.

### Principle 5: Dead Code Cleanup Must Be Complete

When removing a feature or table, remove ALL traces — types, aliases, schema references, barrel exports, route files, hook files, component references. No orphaned code.

### Principle 6: Await All Critical Operations in Route Handlers

In Next.js route handlers/actions, always `await` critical operations. Avoid fire-and-forget promises for required work because execution can end early.

### Principle 7: Never Defer Implementation Tasks — Only Defer Live Testing

Complete ALL implementation tasks. Never defer code changes to "a separate cleanup PR" or "later." The only deferrable tasks are those requiring a running deployment (live/E2E testing).

### Principle 8: Commit + Push + Rebuild Is ONE Atomic Action Chain

After committing and pushing, immediately re-verify build/runtime as needed. Default chain: `git commit` → `git push` → `npm run build` → restart dev server if required.

### Principle 9: Load Skills Before Every Task

Before each message AND each to-do item, scan `.claude/skills/` and load relevant skill files. Skills contain domain-specific procedures that prevent common mistakes. Example: committing → load `git-commit` + `conventional-commit`. Writing PRD → load `prd`.

### Principle 10: Generated Documents Go in `/docs` — Never in Project Root

All generated markdown (reports, deep dives, PRDs, plans, audits) MUST be saved to `docs/` folder, not in the project root.

### Principle 11: No Direct Database Access — Use Supabase Client Only

If data storage is added, avoid ad-hoc raw query usage in UI code. Keep data access centralized, typed, and reviewed.

### Principle 12: Database Column Values Are Case-Sensitive — Match Stored Casing

When matching identifier-like strings, preserve expected casing/format and avoid blind transforms that break exact matches.

### Principle 13: Schema Files First, Then Migration SQL

When making DB changes, TWO things in order:

1. **Update source-of-truth definitions** first (types, docs, and shared contracts) before dependent implementation changes.
2. **Provide explicit migration/transition steps** when structural data changes are introduced.

Commit structural changes with synchronized types/docs, and clearly state any manual follow-up required.

### Principle 14: When a Report Has an Issue Tracker — Update It With Every Fix

Workflow for every fix: **fix the code → update issue status in report → commit both together**. All three steps happen per fix, not batched at end. The report is the user-visible progress artifact.

### Principle 15: Build + Commit + Push After EVERY Single Change — No Exceptions

After ANY change — even a one-line docs or CSS tweak — immediately: (1) append changelog entry in `docs/logs/changelogs.md` with 5W+1H + file paths, (2) build if code changed, (3) `git add + commit + push`. Never wait for the user to remind you. This is automatic.

### Principle 16: Do Exactly What Is Asked — No Assumptions, No Extra Steps

Execute EXACTLY the user's instruction. Do not assume next steps, do not start additional work. If asked for information, give it and stop. If asked to delete something, delete ALL of it. Before taking action: "Did the user explicitly ask me to do this?" If no → don't do it.

### Principle 17: Pixel-Perfect Attention to Detail

Before committing UI/design changes, inspect EVERY element: proper spacing/padding (no cramped/overlapping), buttons are visible and clickable (check padding, background, height), proportions match reference. Catch issues BEFORE committing.

### Principle 18: Verify CSS Variables Exist Before Using Them

When converting reference HTML/CSS, NEVER blindly copy CSS variable names. Verify each `var(--name)` exists in `src/app/globals.css` (or the relevant module). If missing, use a valid token/value.

### Principle 19: Never Invent a Design Language — Match the Existing Site

Always check existing site's visual language first (backgrounds, colors, section styles) and match it. Never introduce dark themes, new color schemes, or patterns that don't exist elsewhere — unless explicitly requested. Grep existing pages for `bg-` classes to identify the palette.

### Principle 20: When Unsure, ASK — Never Guess and Change Code

If not 100% certain which element or issue the user means, ASK before making code changes. Never guess, assume, or make speculative changes. One wrong guess wastes time and erodes trust.

### Principle 21: Tailwind Pseudo-Class Selectors Break Inside Wrappers

`last:`, `first:`, `odd:`, `even:` apply relative to the PARENT, not grandparent. If a component is wrapped (e.g., `<ScrollReveal>`), the pseudo-class checks position within THAT wrapper. A single child is always both `first:` and `last:`. Use index-based conditional classes instead when wrappers exist.

### Localized Copy Rule: Avoid Unsafe Casting

When handling localized/dynamic copy objects, avoid `as string` casts. Normalize values through explicit helpers/types first so rendering paths stay safe and predictable.

## Design Reference — Marketing Website (`src/app`)

### Approved Card Design Pattern: "Background Visual + Content Overlay"

The user-approved card style for bento grid feature cards uses a transparent SVG visual as the card background with content layered on top.

### Key CSS/structure:

- Outer: `relative bg-gray-50 rounded-3xl p-6 overflow-hidden`
- SVG: `absolute inset-0 w-full h-full pointer-events-none` with `preserveAspectRatio="none"`
- Gradient fill: `stopOpacity="0.07"` top -> `stopOpacity="0"` bottom
- Stroke line: `opacity="0.2"`, strokeWidth 1.5
- Content: `relative z-10` on top

### Rules:

- **NO basic icons** (SVG icon-in-a-box, emoji as visuals) — build mini UI mockups or use background visuals
- **NO left-border accent cards** (border-l-\* "quoted" style)
- **NO cards-inside-cards** — visuals should be part of the card, not nested containers
- Visuals go **below text** (not side-by-side) for wide cards
- Use `bg-gray-50 rounded-3xl` for bento cards, `bg-white rounded-xl` for inner elements
- Color palette: orange-500 accent, gray-900 text, gray-500 secondary, gray-50 card bg
