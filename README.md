# Prodvo Frontend (`searchy`)

> App name and domain are configurable via environment variables — see `.env.example`.

This repository is the full marketing/frontend experience for **Prodvo**: an AI coding agent workspace positioned around **planning, parallel execution, and checkpointed production shipping**.

---

## Product summary

Prodvo is presented across this site as an all-in-one environment where teams can:

- describe requirements in plain language
- generate scoped implementation plans
- execute work with AI agents in parallel lanes
- review at checkpoints
- deploy and rollback safely from one workspace

The frontend is content-heavy and route-driven, with each page focused on a specific decision stage (awareness, evaluation, comparison, legal, and conversion).

---

## Full route map

| Route | Purpose |
| --- | --- |
| `/` | Main landing page (`ProdvoLanding`) covering platform value, use cases, workflow, pricing preview, results, and FAQ teaser. |
| `/product` | Deep product narrative: built-in stack, process timeline, social proof, architecture framing, and pricing summary cards. |
| `/use-cases` | Persona-specific outcomes (solo founders, agencies, non-technical founders, internal tools teams, hackathon builders) with time-to-ship and capability mapping. |
| `/workflow` | Interactive 5-phase lifecycle (Start, Build, Iterate, Deploy, Maintain) with visualized prompts, diffs, deploy pipeline, and observability stream. |
| `/pricing` | Canonical pricing page with monthly/annual toggle, capability matrix, ROI math, enterprise section, and pricing FAQ. |
| `/faq` | Searchable/categorized FAQ across getting started, features, pricing, security, and technical topics. |
| `/docs` | Documentation hub UI (quickstart, concepts, workflows, integrations, API, security), API example block, and support entry points. |
| `/compare/replit` | Comparison page: Prodvo vs Replit (workflow, feature matrix, pricing tiers, scenario speed comparisons). |
| `/compare/lovable` | Comparison page: Prodvo vs Lovable (workflow timeline, safety/rollback posture, team coordination, enterprise readiness). |
| `/compare/bolt` | Comparison page: Prodvo vs Bolt (agent intelligence, infrastructure differences, pricing model, team economics). |
| `/compare/v0` | Comparison page: Prodvo vs v0.app (design-first vs production-first workflow, strengths by stage, team economics, scenario fit). |
| `/legal/terms` | Terms of Service single-page legal post. |
| `/legal/privacy` | Privacy Policy single-page legal post. |
| `/legal/commercial` | Commercial Agreement single-page legal post. |
| `/legal/dpa` | Data Processing Agreement single-page legal post. |
| `/legal/report-abuse` | Abuse reporting page with structured report form and trust/safety flow. |

All routes are wrapped by a shared shell (`src/components/site-shell.tsx`) with unified header, CTA patterns, and footer navigation (Product, Compare links, Resources, Legal).

---

## Feature deep dive

### 1) AI delivery workflow model

Across homepage/product/workflow pages, Prodvo is framed around one loop:

1. **Plan** from natural language requirements.
2. **Build** with agent execution (often parallelized by role).
3. **Iterate** safely using context-aware updates.
4. **Deploy** with previews/custom domains.
5. **Maintain** with logs, health visibility, and rollback confidence.

### 2) Built-in platform capabilities (content model)

The product narrative repeatedly highlights built-in:

- AI-assisted code generation/editing
- authentication (email, magic links, OAuth, SSO/RBAC mentions by tier/context)
- Postgres database
- deployment and preview environments
- transactional email
- storage and real-time capabilities (content references)
- Git sync/history and operational controls

### 3) Team coordination and governance

Content across product/workflow/pricing/compare routes emphasizes:

- checkpoint approvals
- rollback snapshots
- scoped automation and intent control
- audit trails/log visibility
- team collaboration primitives
- enterprise governance controls on higher plans

### 4) Comparison-driven positioning

The compare routes intentionally differentiate Prodvo by:

- stronger planning structure before generation
- execution safety (checkpoint + rollback)
- operational readiness for multi-person teams
- less reliance on ad-hoc prompt-only iteration

### 5) Legal and trust surfaces

The legal suite is now first-class in footer navigation and includes:

- Terms, Privacy, Commercial Agreement, DPA, and Report Abuse
- cross-link navigation between legal posts
- explicit legal/security/privacy contact channels

---

## Pricing in current repository content

### Canonical pricing page (`/pricing`)

| Plan | Price (monthly) | Price (annual equivalent) | Notes surfaced in page content |
| --- | --- | --- | --- |
| Starter | `$0` | N/A | Free forever, no credit card; 3 projects, 500MB DB, shared compute, 100 AI prompts/mo |
| Pro | `$29/mo` | `$23/mo` (`$276/yr`) | Unlimited projects/prompts, 10GB DB, dedicated compute, custom domains, 24h SLA support |
| Team | `$99/mo` | `$79/mo` (`$948/yr`) | Up to 5 members, 50GB DB, SSO/RBAC, preview envs, dedicated support channel, 90-day audit logs |
| Enterprise | Custom | Custom | SLA-backed reliability, dedicated infrastructure/capacity, onboarding/support customization |

Additional pricing content on `/pricing` includes ROI-style comparisons like:

- multi-tool stack totals (`$104/mo` in one hero contrast and `$130/mo` in another ROI block)
- annual savings callout (`$1,212/yr`) for a specific scenario

### Other pricing narratives

Homepage and `/product` also contain a separate marketing plan set:

- **Starter `$29`**
- **Growth `$99`**
- **Scale `$249`**

If pricing becomes a source of truth concern, align these route narratives with `/pricing`.

---

## Security, privacy, and compliance claims represented in content

The following appear in page copy/legal text (content-level claims):

- SOC 2 Type II references
- TLS 1.3 and AES-256 encryption references
- 90-day default retention references for logs/checkpoint data
- statements that customer project content is not used for model training
- enterprise controls such as SSO/RBAC, audit logs, and governance features
- responsible disclosure / security reporting channels

Primary locations:

- `src/app/pricing/page.tsx`
- `src/app/faq/page.tsx`
- `src/app/legal/privacy/page.tsx`
- `src/app/legal/terms/page.tsx`
- `src/app/legal/dpa/page.tsx`
- `src/app/legal/report-abuse/page.tsx`

---

## Legal section details

Legal pages are implemented as standalone posts with shared styling (`src/app/legal/legal.module.css`) and shared internal nav (`src/components/legal-links.tsx`).

### Contact channels currently surfaced

- `legal@prodvo.studio`
- `privacy@prodvo.studio`
- `security@prodvo.studio`
- `support@prodvo.studio`

`/legal/report-abuse` includes a structured form UI (category, workspace ID, incident time, detailed report, optional evidence link) and a documented investigation process.

---

## UI/UX system and conventions

The project follows a light, fire-orange-accent visual system documented in:

- `.claude/style-guideline.md`
- `.claude/task/lessons.md` (operational guardrails from iteration history)

Core implementation patterns:

- shared primitives and layout in `src/app/globals.css`
- route-specific visual systems in CSS modules (`src/app/**/**.module.css`)
- `SiteShell` for global header/footer behavior
- reveal animations via `IntersectionObserver`
- responsive breakpoints centered around `980px` and `700px`
- reduced-motion handling in interactive sections

---

## Technical architecture

### Stack

- **Next.js 16.2.1** (App Router)
- **React 19.2.4**
- **TypeScript (strict mode)**
- **ESLint 9 + eslint-config-next**
- Tailwind v4 is available, but styling is predominantly CSS/CSS module-driven

### Core architecture shape

- `src/app/page.tsx` delegates homepage rendering to `src/components/prodvo-landing.tsx`
- route pages under `src/app/**/page.tsx`
- shared shell at `src/components/site-shell.tsx`
- legal cross-link component at `src/components/legal-links.tsx`
- metadata and font setup at `src/app/layout.tsx`

### Runtime/config specifics

- Dev server: `next dev --turbopack --port 4173 --hostname 0.0.0.0`
- `next.config.ts` includes:
  - permissive `allowedDevOrigins` for local/private/tunnel/cloud-dev origins
  - image remote pattern for `https://img.logo.dev/**`
- `tsconfig.json` uses strict checking and `@/*` path alias to `src/*`

---

## Project structure (key files)

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    product/page.tsx
    use-cases/page.tsx
    workflow/page.tsx
    pricing/page.tsx
    faq/page.tsx
    docs/page.tsx
    compare/
      replit/page.tsx
      lovable/page.tsx
      bolt/page.tsx
      v0/page.tsx
    legal/
      terms/page.tsx
      privacy/page.tsx
      commercial/page.tsx
      dpa/page.tsx
      report-abuse/page.tsx
  components/
    prodvo-landing.tsx
    site-shell.tsx
    legal-links.tsx
docs/
  logs/changelogs.md
```

---

## Local development

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Default local URL:

- `http://localhost:4173`

### Build and serve production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Scripts

```bash
npm run dev     # Next dev server on 0.0.0.0:4173
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # ESLint
```

---

## Important implementation notes

1. This repo is a frontend/content implementation; most product/pricing/security details are represented as static content in route files.
2. Some docs/support links in `/docs` currently point to placeholder targets (`#`) and example endpoints.
3. `/legal/report-abuse` currently renders form UI; no backend submission handler is wired in this repository.
4. Comparison and pricing statements are marketing content and should be periodically validated against actual product/GTM truth.
