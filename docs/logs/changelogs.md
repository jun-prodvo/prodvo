# Changelogs

Newest entries first. Every change must add one entry before commit/push.

---

## 2026-04-17T12:45:39Z

- **Who:** Copilot CLI agent
- **What:** Updated About page team slider with real member photos and revised team roster/names
- **When:** 2026-04-17T12:45:39Z
- **Where:** `src/components/about-page.tsx`, `src/components/team-slider.tsx`, `src/app/globals.css`, `next.config.ts`, `docs/logs/changelogs.md`
- **Why:** User requested replacing placeholder team slide avatars with provided photo URLs and applying updated team names.
- **How:** Replaced initials shimmer placeholders with `next/image` portraits in the team slider, added `photoUrl` support to team data, updated the About page team list to the six provided members and roles, and whitelisted the R2 image host/path in Next image `remotePatterns`.
- **File path(s) changed:**
  - `src/components/about-page.tsx`
  - `src/components/team-slider.tsx`
  - `src/app/globals.css`
  - `next.config.ts`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T15:31:57Z

- **Who:** Copilot CLI agent
- **What:** Corrected sign-up invite contact email from legal to support
- **When:** 2026-04-02T15:31:57Z
- **Where:** `src/app/sign-up/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User flagged that invitation intake should not route through legal contact.
- **How:** Updated sign-up invitation notice to use `support@prodvo.studio` instead of `legal@prodvo.studio`, preserving the same callout structure and context request wording.
- **File path(s) changed:**
  - `src/app/sign-up/page.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T15:27:32Z

- **Who:** Copilot CLI agent
- **What:** Fixed auth-page list markers and added deterministic submit feedback for sign-in/sign-up forms
- **When:** 2026-04-02T15:27:32Z
- **Where:** `src/app/sign-in/page.tsx`, `src/app/sign-up/page.tsx`, `src/app/auth-pages.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported missing bullet list rendering and requested explicit post-submit messages for sign-in failure and sign-up success, plus updated high-demand signup headline copy.
- **How:** Converted sign-in and sign-up routes to client components for local form interaction; added submit handlers that render requested inline feedback states (`User not found or credentials is wrong.` for sign-in and `Success. Our team will be in touch as soon as possible.` for sign-up); updated sign-up headline/subcopy to high-demand wording; explicitly restored marker rendering on auth feature lists with `list-style: disc` and maintained styled markers.
- **File path(s) changed:**
  - `src/app/sign-in/page.tsx`
  - `src/app/sign-up/page.tsx`
  - `src/app/auth-pages.module.css`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T15:09:30Z

- **Who:** Copilot CLI agent
- **What:** Enabled sign-up invitation request form inputs and submit action
- **When:** 2026-04-02T15:09:30Z
- **Where:** `src/app/sign-up/page.tsx`, `src/app/auth-pages.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested invitation request form be enabled so users can fill it.
- **How:** Removed disabled fieldset semantics from sign-up form to make inputs editable, enabled the primary submit button, updated helper copy to reflect active request flow, and renamed the shared fieldset style from disabled-specific naming to neutral form naming.
- **File path(s) changed:**
  - `src/app/sign-up/page.tsx`
  - `src/app/auth-pages.module.css`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T14:45:06Z

- **Who:** Copilot CLI agent
- **What:** Revamped sign-in and sign-up into standalone full-page auth experiences without global header/footer
- **When:** 2026-04-02T14:45:06Z
- **Where:** `src/app/sign-in/page.tsx`, `src/app/sign-up/page.tsx`, `src/app/auth-pages.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested both auth routes be full standalone pages (no site header/footer) and asked for a stronger visual revamp.
- **How:** Removed `SiteShell` from `/sign-in` and `/sign-up`; rebuilt both pages with a dedicated full-screen two-panel auth layout and lightweight top brand row; replaced previous auth CSS with a standalone module tuned for responsive full-page auth UX; preserved invitation-only signup behavior via disabled fieldset/button and explicit invite notice.
- **File path(s) changed:**
  - `src/app/sign-in/page.tsx`
  - `src/app/sign-up/page.tsx`
  - `src/app/auth-pages.module.css`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T14:31:07Z

- **Who:** Copilot CLI agent
- **What:** Added sign-in/sign-up routes and rewired pricing CTAs from docs to auth pages
- **When:** 2026-04-02T14:31:07Z
- **Where:** `src/app/sign-in/page.tsx`, `src/app/sign-up/page.tsx`, `src/app/auth-pages.module.css`, `src/app/pricing/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested dedicated sign-in/sign-up pages and asked to stop routing pricing actions to docs, with sign-up disabled due to invitation-only access.
- **How:** Implemented new `/sign-in` and `/sign-up` pages using shared shell and a new auth style module; created an invitation-only sign-up form using disabled fieldset/button and explicit notice; rewired pricing action links to `/sign-up` for free-start actions and `/sign-in` for paid/team/enterprise actions.
- **File path(s) changed:**
  - `src/app/sign-in/page.tsx`
  - `src/app/sign-up/page.tsx`
  - `src/app/auth-pages.module.css`
  - `src/app/pricing/page.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T14:22:14Z

- **Who:** Copilot CLI agent
- **What:** Switched Resources links back to real routes and rendered coming-soon content on those route pages
- **When:** 2026-04-02T14:22:14Z
- **Where:** `src/components/site-shell.tsx`, `src/components/coming-soon-view.tsx`, `src/app/about/page.tsx`, `src/app/blog/page.tsx`, `src/app/docs/page.tsx`, `src/app/coming-soon/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested that menu items should not navigate to a literal `/coming-soon` URL and instead should show coming-soon content on the actual destination pages.
- **How:** Updated footer Resources links to `/about`, `/blog`, and `/docs`; created a reusable `ComingSoonView` component; implemented new `/about` and `/blog` routes and replaced `/docs` content with coming-soon content using the shared component; kept `/coming-soon` available as a generic placeholder route.
- **File path(s) changed:**
  - `src/components/site-shell.tsx`
  - `src/components/coming-soon-view.tsx`
  - `src/app/about/page.tsx`
  - `src/app/blog/page.tsx`
  - `src/app/docs/page.tsx`
  - `src/app/coming-soon/page.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T13:44:58Z

- **Who:** Copilot CLI agent
- **What:** Reordered all footer label menus alphabetically
- **When:** 2026-04-02T13:44:58Z
- **Where:** `src/components/site-shell.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested fixing order across all footer label menus and then clarified the desired pattern as alphabetical ordering in every column.
- **How:** Updated footer lists in Product, Compare, Resources, and Legal columns to alphabetical label order while keeping all existing destinations unchanged.
- **File path(s) changed:**
  - `src/components/site-shell.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T13:36:40Z

- **Who:** Copilot CLI agent
- **What:** Updated footer Resources links to use a shared Coming Soon placeholder route
- **When:** 2026-04-02T13:36:40Z
- **Where:** `src/components/site-shell.tsx`, `src/app/coming-soon/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested adding missing Resources menu labels and routing unfinished pages to a coming-soon destination.
- **How:** Kept `FAQ` unchanged, changed `Docs` to point to `/coming-soon`, added `Blog` and `About` links in the Resources column (both to `/coming-soon`), and created a dedicated `/coming-soon` page using the existing `SiteShell` and shared legal-style content layout for visual consistency.
- **File path(s) changed:**
  - `src/components/site-shell.tsx`
  - `src/app/coming-soon/page.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T13:24:29Z

- **Who:** Copilot CLI agent
- **What:** Deepened legal coverage across Terms, Commercial Agreement, DPA, and Report Abuse pages
- **When:** 2026-04-02T13:24:29Z
- **Where:** `src/app/legal/terms/page.tsx`, `src/app/legal/commercial/page.tsx`, `src/app/legal/dpa/page.tsx`, `src/app/legal/report-abuse/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested a full legal deep-dive and to expand all non-privacy legal pages so they cover key operational and compliance scenarios more completely.
- **How:** Expanded Terms with eligibility, integrations, confidentiality, beta/service-change language, indemnity, and stronger governing/general clauses; expanded Commercial with order-change mechanics, termination effects, and stronger customer/security obligations; expanded DPA with customer instruction obligations, assistance detail, records/cooperation clauses, and clearer incident language; expanded Report Abuse with explicit reportable categories, process expectations, false-report policy, and appeal/follow-up section while keeping existing contact/reporting structure; validated with `npm run build` (passing) and `npm run lint` (existing repo-wide baseline failures outside these legal pages).
- **File path(s) changed:**
  - `src/app/legal/terms/page.tsx`
  - `src/app/legal/commercial/page.tsx`
  - `src/app/legal/dpa/page.tsx`
  - `src/app/legal/report-abuse/page.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T12:13:40Z

- **Who:** Copilot CLI agent
- **What:** Fixed compare/v0 hydration mismatch and finalized Legal footer labels
- **When:** 2026-04-02T12:13:40Z
- **Where:** `src/app/compare/v0/page.tsx`, `src/components/site-shell.tsx`, `docs/logs/changelogs.md`
- **Why:** User reported recoverable hydration error on `/compare/v0` and requested legal pages to be under footer label **Legal**.
- **How:** Removed unnecessary client component directive from `compare/v0/page.tsx` to keep server/client rendered output deterministic and eliminate hydration mismatch; confirmed legal links are grouped under the dedicated Legal footer column; renamed `DPA` footer item label to full text `Data Processing Agreement` for clarity and consistency; validated with `npm run build` and route checks.
- **File path(s) changed:**
  - `src/app/compare/v0/page.tsx`
  - `src/components/site-shell.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T09:14:50Z

- **Who:** Copilot CLI agent
- **What:** Added full Legal section with 5 single-page legal posts and footer legal navigation
- **When:** 2026-04-02T09:14:50Z
- **Where:** `src/app/legal/**`, `src/components/site-shell.tsx`, `src/components/legal-links.tsx`, `src/app/globals.css`, `docs/logs/changelogs.md`
- **Why:** User requested a deep project-aware legal implementation with dedicated pages for Terms of Service, Privacy Policy, Commercial Agreement, DPA, and Report Abuse, plus legal navigation in the site menu.
- **How:** Deep-dived project product/security/pricing claims from source pages; implemented shared legal document system and styling in `src/app/legal/legal.module.css`; created five legal routes (`/legal/terms`, `/legal/privacy`, `/legal/commercial`, `/legal/dpa`, `/legal/report-abuse`) as single-page posts with structured sections and internal TOCs; added reusable `LegalLinks` component for cross-linking among legal pages; added a new **Legal** column to shared footer navigation in `SiteShell`; updated footer grid to 5-column desktop / 3-column tablet layout in `globals.css`; validated with `npm run build` and route check at `/legal/terms` (HTTP 200).
- **File path(s) changed:**
  - `src/app/legal/legal.module.css`
  - `src/app/legal/terms/page.tsx`
  - `src/app/legal/privacy/page.tsx`
  - `src/app/legal/commercial/page.tsx`
  - `src/app/legal/dpa/page.tsx`
  - `src/app/legal/report-abuse/page.tsx`
  - `src/components/legal-links.tsx`
  - `src/components/site-shell.tsx`
  - `src/app/globals.css`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T08:15:00Z

- **Who:** Copilot CLI agent
- **What:** Revamped Prodvo vs v0 comparison page to match quality of other comparison pages
- **When:** 2026-04-02T08:15:00Z
- **Where:** `src/app/compare/v0/page.tsx`, `src/app/compare/v0/v0.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported the v0 page wasn't as good as other comparison pages (Replit, Lovable, Bolt)
- **How:** Complete revamp with: (1) Dual-path visual in hero showing v0's design→code→deploy vs Prodvo's plan→build→review→ship journey; (2) Workflow timeline like Lovable with phase-by-phase comparison and leader badges; (3) Strength cards with winner tags like safety cards; (4) Scenario cards with time-to-ship comparison like Replit; (5) Visual bar chart for team scaling economics; (6) Stats block in bottom line (3.1× faster, 1-click rollback, $351 saved); validated with `npm run build`
- **File path(s) changed:**
  - `src/app/compare/v0/page.tsx`
  - `src/app/compare/v0/v0.module.css`
  - `docs/logs/changelogs.md`

---

## 2026-03-31T17:15:00Z

- **Who:** Copilot CLI agent
- **What:** Created Prodvo vs v0 comparison page
- **When:** 2026-03-31T17:15:00Z
- **Where:** `src/app/compare/v0/`, `src/components/site-shell.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested a new competitor comparison page for Prodvo vs v0 by Vercel, as part of the ongoing comparison pages suite (after Replit, Lovable, Bolt)
- **How:** Researched v0.app to understand its features (visual design mode, Figma import, iOS app, Vercel deployment, per-user pricing with credits); created unique page design with dual-column philosophy comparison, feature matrix, use case fit cards, pricing/team cost tables, and bottom line verdict section; added v0 link to footer navigation; validated with `npm run build`
- **File path(s) changed:**
  - `src/app/compare/v0/page.tsx` (new)
  - `src/app/compare/v0/v0.module.css` (new)
  - `src/components/site-shell.tsx` (footer link)
  - `docs/logs/changelogs.md`

---

## 2025-01-15T12:00:00Z

- **Who:** Copilot CLI agent
- **What:** Created AI coding tools competitor research document
- **When:** 2025-01-15T12:00:00Z
- **Where:** `docs/2025-01-15-ai-coding-tools-competitor-research.md`
- **Why:** User requested research on Replit, Lovable, and Bolt.new AI coding platforms
- **How:** Fetched and analyzed public website content from replit.com, lovable.dev, bolt.new and their pricing/documentation pages; compiled comprehensive competitor analysis covering core product, features, pricing, target users, strengths/weaknesses, and positioning; created structured markdown report with comparison matrices and insights
- **File path(s) changed:**
  - `docs/2025-01-15-ai-coding-tools-competitor-research.md`

---

## 2026-03-31T15:38:00Z

- **Who:** Copilot CLI agent
- **What:** Fixed persona tabs styling in use-cases hero section
- **When:** 2026-03-31T15:38:00Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported persona tabs not displaying properly as pill buttons like in the reference (docs/references/use-case.html)
- **How:** Fixed CSS specificity issue where `.page button` reset was overriding `.persona-tab` styles by changing selector to `.page button:not(.persona-tab)` to exclude persona tabs from the reset; tabs now properly show as pill-shaped buttons with border, padding, and proper hover/active states; validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

---

## 2026-03-31T15:32:00Z

- **Who:** Copilot CLI agent
- **What:** Added company name hover text and fixed blank logo
- **When:** 2026-03-31T15:32:00Z
- **Where:** `src/components/prodvo-landing.tsx`, `src/app/globals.css`, `docs/logs/changelogs.md`
- **Why:** User reported blank logo after Clerk (Inngest) and requested company name text on hover
- **How:** Replaced Inngest and Turso/Fly.io with Vercel, Deno, and Prisma (known working logos); added `.proof-name` span below each logo that fades in on hover with slide-up animation; updated CSS with flex-direction column layout for logo + name; validated with `npm run build`
- **File path(s) changed:**
  - `src/components/prodvo-landing.tsx`
  - `src/app/globals.css`
  - `docs/logs/changelogs.md`

---

## 2026-03-31T12:42:00Z

- **Who:** Copilot CLI agent
- **What:** Fixed logo.dev API parameters for transparent grayscale logos
- **When:** 2026-03-31T12:42:00Z
- **Where:** `src/components/prodvo-landing.tsx`, `src/app/globals.css`, `docs/logs/changelogs.md`
- **Why:** User reported logos too big with black background instead of transparent grayscale
- **How:** Added logo.dev API parameters: `format=png` for transparency, `greyscale=true` for no color, `size=80` for smaller size; updated CSS to remove redundant grayscale filter, reduced logo height to 24px with max-width 100px, simplified opacity hover effect; validated with `npm run build`
- **File path(s) changed:**
  - `src/components/prodvo-landing.tsx`
  - `src/app/globals.css`
  - `docs/logs/changelogs.md`

---

## 2026-03-31T12:40:00Z

- **Who:** Copilot CLI agent
- **What:** Replaced text-based company logos with actual logos via logo.dev API
- **When:** 2026-03-31T12:40:00Z
- **Where:** `src/components/prodvo-landing.tsx`, `src/app/globals.css`, `next.config.ts`, `docs/logs/changelogs.md`
- **Why:** User requested real company logos instead of text-based names in "Trusted by 3,200+" section
- **How:** Updated COMPANY_LOGOS array with real small-to-medium company domains (Linear, Raycast, Supabase, Resend, Clerk, Inngest, Railway, Render, Planetscale, Neon, Turso, Fly.io); integrated logo.dev API with publishable key; used Next.js Image component with unoptimized prop for external CDN; added img.logo.dev to remotePatterns in next.config.ts; updated CSS for logo styling (grayscale filter, hover effect); validated with `npm run build`
- **File path(s) changed:**
  - `src/components/prodvo-landing.tsx`
  - `src/app/globals.css`
  - `next.config.ts`
  - `docs/logs/changelogs.md`

---

## 2026-03-31T12:30:00Z

- **Who:** Copilot CLI agent
- **What:** Fixed all incorrect domain URLs to use prodvo.studio
- **When:** 2026-03-31T12:30:00Z
- **Where:** `src/app/faq/page.tsx`, `src/app/docs/page.tsx`, `src/app/workflow/page.tsx`, `src/app/product/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User reported incorrect domains (prodvo.com, prodvo.ai, prodvo.app) - correct domain is prodvo.studio
- **How:** Scanned entire project for prodvo.(com|ai|io|app) patterns; replaced security@prodvo.com → security@prodvo.studio, support@prodvo.ai → support@prodvo.studio, api.prodvo.ai → api.prodvo.studio, app.prodvo.ai → app.prodvo.studio, invoicetrack.prodvo.app → invoicetrack.prodvo.studio, prodvo.app → prodvo.studio; validated with `npm run build`
- **File path(s) changed:**
  - `src/app/faq/page.tsx`
  - `src/app/docs/page.tsx`
  - `src/app/workflow/page.tsx`
  - `src/app/product/page.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-03-31T07:35:00Z

- **Who:** Copilot CLI agent
- **What:** Fixed logo animation to properly play morph effect on page load
- **When:** 2026-03-31T07:35:00Z
- **Where:** `src/components/site-shell.tsx`, `docs/logs/changelogs.md`
- **Why:** User reported logo was showing static instead of animated (morph from P/. to P/ Prodvo.)
- **How:** Implemented proper morph animation sequence per brand guideline: disable transitions, force collapsed state, re-enable transitions after frame, then expand; header logo morphs on load and collapses/expands on scroll (>40px threshold); footer logo morphs with 100ms delay; removed static `expanded` class from footer JSX; validated with `npm run build`
- **File path(s) changed:**
  - `src/components/site-shell.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-03-31T07:10:00Z

- **Who:** Copilot CLI agent
- **What:** Implemented animated logo from brand guideline and updated favicon
- **When:** 2026-03-31T07:10:00Z
- **Where:** `src/components/site-shell.tsx`, `src/app/globals.css`, `src/app/layout.tsx`, `public/favicon.svg`, `docs/logs/changelogs.md`
- **Why:** User requested logo and favicon update per brand guideline in `docs/references/logo.html`
- **How:** Added animated logo CSS (P/ Prodvo. with expand/collapse animation) to globals.css; updated site-shell header and footer to use new `.prodvo-logo` component with refs for scroll-based collapse; header logo collapses to "P/." on scroll, expands on return to top; created SVG favicon with "P/." mark; updated layout.tsx metadata with favicon configuration; removed old favicon.ico; validated with `npm run build`
- **File path(s) changed:**
  - `src/components/site-shell.tsx`
  - `src/app/globals.css`
  - `src/app/layout.tsx`
  - `public/favicon.svg`
  - `src/app/favicon.ico` (deleted)
  - `docs/logs/changelogs.md`

---

## 2026-03-31T04:50:00Z

- **Who:** Copilot CLI agent
- **What:** Fixed FAQ category filtering bug and expanded FAQ content
- **When:** 2026-03-31T04:50:00Z
- **Where:** `src/app/faq/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User reported FAQ items disappearing when selecting categories (only showed on fresh reload with "all"); also requested more FAQ questions
- **How:** Fixed useEffect to re-run IntersectionObserver when `activeCategory` or `searchQuery` changes (was only running once on mount); added ref to faqList container for scoped element selection; expanded FAQ from 16 to 42 questions covering all categories comprehensively; validated with `npm run build`
- **File path(s) changed:**
  - `src/app/faq/page.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-03-30T23:15:00Z

- **Who:** Copilot CLI agent
- **What:** Removed all emoji and SVG icons from FAQ and docs pages
- **When:** 2026-03-30T23:15:00Z
- **Where:** `src/app/faq/page.tsx`, `src/app/docs/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested removal of all icons from FAQ and docs pages to maintain cleaner visual appearance
- **How:** Removed search SVG icon from FAQ search bar, removed emoji icons from FAQ quick links section, removed icon properties from docs section navigation buttons, content headers, quick access buttons, and support cards; removed article arrow SVG icons; validated with `npm run build`
- **File path(s) changed:**
  - `src/app/faq/page.tsx`
  - `src/app/docs/page.tsx`
  - `docs/logs/changelogs.md`

---

## 2026-03-30T22:51:57Z

- **Who:** Copilot CLI agent
- **What:** Aligned use-cases hero persona copy semantics and text-button color hierarchy with reference intent + homepage/product button conventions; added explicit parity rules to lessons/style guideline
- **When:** 2026-03-30T22:51:57Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `.claude/task/lessons.md`, `.claude/style-guideline.md`, `docs/logs/changelogs.md`
- **Why:** User reported hero option differences from `docs/references/use-case.html` and inconsistent text-button colors compared with homepage/product
- **How:** Re-synced hero persona sub-copy punctuation/wording to reference semantics (apostrophes/em dash usage), updated use-cases secondary/outline text-button styling to neutral cross-page hierarchy (`ink-2` default, `ink` hover) while preserving primary CTA token parity, then codified new guardrails in lessons/style guideline; validated with `npm run build` (lint failures remain existing unrelated repo issues)
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `.claude/task/lessons.md`
  - `.claude/style-guideline.md`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:44:03Z

- **Who:** Copilot CLI agent
- **What:** Fixed the time-to-ship comparison bars so Prodvo rows no longer show a full grey track behind the orange fill
- **When:** 2026-03-30T22:44:03Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported the “With Prodvo” bars looked incorrect because grey still appeared across the full traditional length behind orange
- **How:** Made `.ship-bar-track` transparent (removing unintended background rail for both rows) and normalized `.without-fill` to own full-height grey bar (so only the traditional row is grey), then validated with `npm run build` (lint failures remain unrelated existing repo issues)
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:41:53Z

- **Who:** Copilot CLI agent
- **What:** Removed all `->` arrow text from the `/use-cases` page copy
- **When:** 2026-03-30T22:41:53Z
- **Where:** `src/app/use-cases/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested deleting `->` across the entire use-cases page
- **How:** Replaced every `-&gt;`/`->` instance in `/use-cases` CTA and inline strings (hero CTA, non-technical CTA, schedule line, final CTA), then verified no arrow tokens remain via ripgrep and validated with `npm run build` (lint still fails on unrelated existing files)
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:39:28Z

- **Who:** Copilot CLI agent
- **What:** Removed lingering dark-orange (`#c2410c`) tone from use-cases hero primary CTA base/hover and codified conversion guidance in lessons + style guideline
- **When:** 2026-03-30T22:39:28Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `.claude/task/lessons.md`, `.claude/style-guideline.md`, `docs/logs/changelogs.md`
- **Why:** User reported the hero button still appeared in the wrong tone and requested explicit project rules to avoid future HTML-to-TSX color carry-over mismatches
- **How:** Updated `.btn-primary-lg` and hover in use-cases CSS to use homepage-equivalent primary tokens (`--fire-orange` and `--fire-orange-dark`) with subtle shadow parity, then added explicit rule entries to lessons and style guidelines requiring token normalization when source HTML hex values conflict with shared CTA tone; validated with `npm run build` (lint failures remain pre-existing outside this change)
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `.claude/task/lessons.md`
  - `.claude/style-guideline.md`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:36:15Z

- **Who:** Copilot CLI agent
- **What:** Aligned `/use-cases` hero primary CTA background/hover appearance with homepage primary button behavior
- **When:** 2026-03-30T22:36:15Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported the use-cases hero button still looked different from homepage hero primary CTA
- **How:** Updated `.hero-ctas .btn-primary-lg` and its hover state to keep the same orange pair as homepage (`--fire-orange` / `--fire-orange-dark`) while matching the subtle homepage shadow treatment (`0 1px 2px rgba(0, 0, 0, 0.06)`), then validated with `npm run build` (lint remains failing only on existing unrelated files)
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:26:49Z

- **Who:** Copilot CLI agent
- **What:** Unified header/footer shell usage across routes by migrating homepage and use-cases page to shared `SiteShell`
- **When:** 2026-03-30T22:26:49Z
- **Where:** `src/components/prodvo-landing.tsx`, `src/app/use-cases/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested consistent shared header/footer across all pages; `/use-cases` and homepage were still using standalone shell markup
- **How:** Replaced local shell wrappers (announcement, header, footer, mobile menu state, scroll state) with `SiteShell` in both pages, retained each page’s unique content/animation sections, validated with `npm run build`, and confirmed runtime output on the existing dev server (`:4173`) for `/` and `/use-cases`
- **File path(s) changed:**
  - `src/components/prodvo-landing.tsx`
  - `src/app/use-cases/page.tsx`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:16:08Z

- **Who:** Copilot CLI agent
- **What:** Refined the hero primary button color on `/use-cases` for cleaner brand alignment and better emphasis balance
- **When:** 2026-03-30T22:16:08Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested a color refinement specifically for the hero section button on the use-cases page
- **How:** Scoped a hero-only override for `.btn-primary-lg` within `.hero-ctas`, shifting the base tone to brand fire-orange and hover to fire-orange-dark with matching shadow updates, then validated via `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T20:43:11Z

- **Who:** Copilot CLI agent
- **What:** Replaced `/use-cases` with a direct TSX/CSS conversion of `docs/references/use-case.html` and ported the page interactions to React
- **When:** 2026-03-29T20:43:11Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User explicitly requested to use the reference design directly for the use-cases route and convert it into project-native code
- **How:** Rebuilt the route as a high-fidelity conversion of the reference section architecture and styling, implemented reveal observer, persona word/sub/CTA switch animation, sticky-nav scroll state, and hackathon countdown in React hooks/state, preserved route responsiveness, and validated with `npm run build` (lint still has pre-existing repo errors outside this route)
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T18:29:43Z

- **Who:** Copilot CLI agent
- **What:** Reworked `/use-cases` again to reduce repeated box/card treatment and shift to line/rail/band style composition
- **When:** 2026-03-29T18:29:43Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User explicitly rejected repeated card/box/grid look and asked for stronger design thinking
- **How:** Replaced prior structure with less box-dominant systems (lane band marquee, bottom-border lane pins, pressure rail, columnized workflow board, centered quote run, win track, rhythm nodes, signal cloud, fit lines, minimal stacked Q&A) while keeping Prodvo-accurate copy and solid-orange CTA, then validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T18:26:16Z

- **Who:** Copilot CLI agent
- **What:** Replaced `/use-cases` again with a sharper premium layout and stronger visual hierarchy after explicit quality rejection
- **When:** 2026-03-29T18:26:16Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User said the prior design quality still failed expectations and called the layout weak/basic
- **How:** Rebuilt the route with a more assertive composition and less generic treatment (hero texture + tag rail, orbit model section, scenario tabs, dual-sheet execution canvas, quote strip, proof reel, rhythm strip, signal cloud, fit matrix, operator FAQ, orange CTA), kept product-accurate Prodvo execution copy, and validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T18:22:24Z

- **Who:** Copilot CLI agent
- **What:** Rebuilt `/use-cases` into a richer, reference-grade multi-section experience with non-repetitive layout mechanics
- **When:** 2026-03-29T18:22:24Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User flagged prior revision as too simple/basic and explicitly requested quality/depth closer to `docs/product-page.html` and `/product` without copy-pasting
- **How:** Replaced the page architecture with a denser editorial flow and distinct section systems (hero shell, continuous lane marquee, horizontal scenario switcher, split active arc stage, horizontal outcome ribbon, tick-board execution grid, signal strip, two-column operating modes, operator Q&A accordion, solid-orange CTA), rewrote all copy to remain Prodvo-accurate (AI coding workspace + delivery execution), and validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T18:16:12Z

- **Who:** Copilot CLI agent
- **What:** Fully rewrote `/use-cases` as a product-accurate execution page and removed story-framework/comparison framing
- **When:** 2026-03-29T18:16:12Z
- **Where:** `.claude/task/lessons.md`, `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User explicitly said current output did not represent what Prodvo is and requested a serious, unique, non-templated use-cases page aligned to product/reference quality
- **How:** Added lessons to prevent framing Prodvo as storytelling product and to stop noisy patching after a stop request; replaced page with one cohesive production-grounded architecture (scenario selector, active scenario stage brief + runbook, delivery ledger, execution signal band, horizontal playbook steps, team-fit profile, solid-orange CTA), rewrote copy around actual Prodvo workflow semantics (plan mode, parallel agents, checkpoints, release, rollback), rebuilt CSS module with distinct section mechanics and responsive behavior, then validated with `npm run build`
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T17:55:17Z

- **Who:** Copilot CLI agent
- **What:** Rewrote `/use-cases` copy with entirely new narrative voice and deeper section-level storytelling
- **When:** 2026-03-29T17:55:17Z
- **Where:** `.claude/task/lessons.md`, `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User said current copy was not real/strong enough and requested a complete copy replacement with serious quality
- **How:** Added a lesson to enforce richer narrative depth when requested, then replaced hero/case/principles/journey/proof/fit/CTA language with fresh StoryBrand-grade copy focused on operational tension, stakes, guidance, and measurable outcomes; kept layout mechanics and readability hierarchy intact, and validated with `npm run build`
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T17:46:09Z

- **Who:** Copilot CLI agent
- **What:** Refactored `/use-cases` to remove repeated grid/card mechanics and enforce distinct section layout systems
- **When:** 2026-03-29T17:46:09Z
- **Where:** `.claude/task/lessons.md`, `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User explicitly flagged repetitive design patterns and required each section to use unique layout/style mechanics
- **How:** Added a new lesson to forbid repeated grid/card systems across the page, then rebuilt use-cases sections with varied structures (single hero shell, horizontal timeline rail, split narrative panel, horizontal storyboard reel, accordion principles, diagram-style execution strip, single matrix block, CTA), while preserving readability hierarchy and validating with `npm run build`
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T17:30:34Z

- **Who:** Copilot CLI agent
- **What:** Expanded `/use-cases` into a richer StoryBrand-driven page with deeper narrative, copy, and section architecture
- **When:** 2026-03-29T17:30:34Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User asked for a much richer route comparable to homepage/product depth, with stronger storyboard logic and copy strategy
- **How:** Rebuilt the route with multiple narrative sections (hero + guide note, chapter navigation, storyboard scene stack, messaging principles, execution journey, fit matrix, CTA), rewrote copy around StoryBrand flow (hero/problem/plan/success), implemented matching responsive CSS module with neutral readability hierarchy + orange emphasis, and validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T17:17:29Z

- **Who:** Copilot CLI agent
- **What:** Restored neutral text/border hierarchy rules and fixed `/use-cases` readability by replacing overly orange text treatment
- **When:** 2026-03-29T17:17:29Z
- **Where:** `.claude/style-guideline.md`, `.claude/task/lessons.md`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User clarified prior request scope: only gray backgrounds should be avoided; text and borders should keep readable dark/gray hierarchy
- **How:** Updated style guideline to allow neutral text/borders while still forbidding gray section backgrounds, refined lessons to prevent removing neutral hierarchy, changed use-cases text and divider colors from orange-heavy values to readable neutral tones, then validated with `npm run build`
- **File path(s) changed:**
  - `.claude/style-guideline.md`
  - `.claude/task/lessons.md`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T16:50:37Z

- **Who:** Copilot CLI agent
- **What:** Replaced `/use-cases` page architecture with a materially different scenario-driven layout (not a color-only tweak)
- **When:** 2026-03-29T16:50:37Z
- **Where:** `.claude/task/lessons.md`, `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User said the redesign still felt the same and requested a real change in use-cases design direction
- **How:** Added new feedback lesson for structure-first redesigns, then rebuilt the route into a new composition: split hero with problem panel, case selector pills, 3-card scenario snapshot (trigger/interventions/outcomes), execution drill grid, fit matrix section, and solid-orange CTA; kept strict white + brand-orange palette and validated with `npm run build`
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-30T23:34:42Z

- **Who:** Copilot CLI agent
- **What:** Converted `/workflow` and `/pricing` pages from reference HTML into Next.js TSX + CSS modules with interaction parity and normalized brand token usage
- **When:** 2026-03-30T23:34:42Z
- **Where:** `src/app/workflow/page.tsx`, `src/app/workflow/workflow.module.css`, `src/app/pricing/page.tsx`, `src/app/pricing/pricing.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested direct conversion from `docs/references/workflow.html` and `docs/references/pricing.html` while applying lessons to avoid inconsistent hex tones and preserve shared cross-page CTA/button hierarchy
- **How:** Rebuilt both routes with reference-matching section architecture and ported scripted behaviors to React (`IntersectionObserver` reveals, workflow phase auto-cycle with manual stop, pricing billing toggle state). Normalized primary CTA/button tones to homepage tokens, kept neutral text/outline hierarchy, replaced non-brand green/red semantics with orange/neutral accents where needed, then validated with `npm run build` and route checks on local server (`/workflow`, `/pricing` returned `200` and expected hero headings). `npm run lint` still fails on known baseline issues in `.claude/skills/**/*.cjs` and existing `src/app/product/page.tsx`.
- **File path(s) changed:**
  - `src/app/workflow/page.tsx`
  - `src/app/workflow/workflow.module.css`
  - `src/app/pricing/page.tsx`
  - `src/app/pricing/pricing.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T16:33:00Z

- **Who:** Copilot CLI agent
- **What:** Rebuilt `/use-cases` into a unique interactive editorial layout and aligned it to strict white + brand-orange-only styling
- **When:** 2026-03-29T16:33:00Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested a better, non-templated, unique use-cases page inspired by the reference format while staying distinct from `/product` and compliant with palette rules
- **How:** Replaced use-cases page structure with dispatch rail + active case sheet + operating loop + fit-check + solid-orange CTA, implemented full matching CSS module, fixed class composition helper safety, removed non-brand gray/black tones in this page, then validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T16:21:27Z

- **Who:** Copilot CLI agent
- **What:** Made the product page background pattern visibly match homepage behavior
- **When:** 2026-03-29T16:21:27Z
- **Where:** `src/app/product/product-page.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported pattern still not visible after prior scoped update
- **How:** Changed major product sections (`hero`, `contrast`, `features`, `how`, `stack`, `testi`, `pricing`) from solid white to transparent backgrounds so the page-level pattern layer shows through while keeping non-background palettes untouched
- **File path(s) changed:**
  - `src/app/product/product-page.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T16:16:44Z

- **Who:** Copilot CLI agent
- **What:** Reverted overbroad product color changes and reapplied only requested scope: homepage-like pattern + gray background replacement
- **When:** 2026-03-29T16:16:44Z
- **Where:** `.claude/task/lessons.md`, `src/app/product/page.tsx`, `src/app/product/product-page.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested strict scope: keep existing non-background colors and only change product background pattern + gray backgrounds
- **How:** Reverted prior broad commit, added a process lesson to prevent palette overreach, wrapped product page with patterned container, then changed only gray background values to white/orange-tint backgrounds while preserving text/icon/button color palette
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/product/page.tsx`
  - `src/app/product/product-page.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T15:53:02Z

- **Who:** Copilot CLI agent
- **What:** Enforced mandatory changelog-first workflow and automatic commit/push behavior in project instructions
- **When:** 2026-03-29T15:53:02Z
- **Where:** `.claude/CLAUDE.md`, `.github/copilot-instructions.md`, `.claude/task/lessons.md`, `docs/logs/changelogs.md`
- **Why:** User explicitly required no reminders for push and required every change to be documented with 5W+1H before commit/push
- **How:** Replaced old changelog path rules with `docs/logs/changelogs.md`, added explicit 5W+1H + file path requirements in instruction workflows, and added matching process lessons to prevent repetition
- **File path(s) changed:**
  - `.claude/CLAUDE.md`
  - `.github/copilot-instructions.md`
  - `.claude/task/lessons.md`
  - `docs/logs/changelogs.md`

## 2026-03-29T15:53:02Z

- **Who:** Copilot CLI agent
- **What:** Updated project instruction files to enforce mandatory changelog logging before every commit/push
- **When:** 2026-03-29T15:53:02Z
- **Where:** `.claude/CLAUDE.md`, `.github/copilot-instructions.md`, `docs/logs/changelogs.md`
- **Why:** User required strict workflow: always commit/push after each change and always document edits using 5W+1H
- **How:** Edited both instruction files to replace old log path/rules with `docs/logs/changelogs.md` policy, added explicit 5W+1H schema, then created this changelog file as the canonical log destination
- **File path(s) changed:**
  - `.claude/CLAUDE.md`
  - `.github/copilot-instructions.md`
  - `docs/logs/changelogs.md`

## 2026-03-30T23:54:30Z

- **Who:** Copilot CLI agent
- **What:** Normalized primary CTA button tone/text on use-cases, workflow, and pricing pages to match homepage/product conventions
- **When:** 2026-03-30T23:54:30Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `src/app/workflow/workflow.module.css`, `src/app/pricing/pricing.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested first-pass cross-page button consistency so primary actions use the lighter brand orange base with white text (not white-fill/dark-orange text variants)
- **How:** Updated `btn-cta-w` and `ctaPrimary` styles to use `--fire-orange` base and `--fire-orange-dark` hover with white text, and aligned hover/border transition behavior for consistency. Verified with `npm run build` (pass). `npm run lint` remains failing on known baseline issues outside this scope (`.claude/skills/**/*.cjs` and pre-existing `src/app/product/page.tsx` lint errors).
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `src/app/workflow/workflow.module.css`
  - `src/app/pricing/pricing.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T00:08:15Z

- **Who:** Copilot CLI agent
- **What:** Forced `/use-cases` hero and CTA primary buttons to exact homepage hero hex tones
- **When:** 2026-03-31T00:08:15Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported `/use-cases` hero buttons still looked darker and text tone still wrong versus homepage hero; requested direct hex-level matching
- **How:** Replaced token-based values for `/use-cases` button classes with explicit homepage-equivalent hex values: primary base `#f97316`, hover `#ea580c`, text `#fff`; applied to `.btn-primary-lg`, `.btn-outline-lg`, `.btn-cta-w`, and `.btn-nav` for full page consistency, then verified with `npm run build`.
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T00:17:19Z

- **Who:** Copilot CLI agent
- **What:** Applied hard inline style overrides to `/use-cases` primary CTA links to force exact hero button hex rendering
- **When:** 2026-03-31T00:17:19Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User still observed unchanged hero CTA color/text despite stylesheet edits; required non-ambiguous, immediate visual parity with homepage hex values
- **How:** Added direct inline style values (`background:#f97316; color:#fff; borderColor:#f97316`) on hero and key CTA anchors (`btn-primary-lg`, `btn-outline-lg`, non-technical CTA, final CTA). Also narrowed generic `.page a` color inheritance to unclassed links only to prevent class-style clashes. Verified by fetching live `/use-cases` HTML and confirming inline styles are present on rendered CTA elements, and re-ran `npm run build` successfully.
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T00:21:33Z

- **Who:** Copilot CLI agent
- **What:** Restored `/use-cases` hover color delta and matched `/pricing` primary button behavior to the same hex/hover pattern
- **When:** 2026-03-31T00:21:33Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/pricing/pricing.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported `/use-cases` hover state no longer changed color and requested the same color mismatch fix for `/pricing`
- **How:** Removed forced inline styles from `/use-cases` buttons so CSS `:hover` color transitions apply again, then normalized `/pricing` primary action buttons to explicit homepage-aligned hex values with visible hover delta (`#f97316` default → `#ea580c` hover) across hero CTA, plan fill CTA, enterprise CTA, and final CTA classes. Verified with `npm run build` and inspected served CSS/HTML to confirm hover selectors are present.
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/pricing/pricing.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T00:45:23Z

- **Who:** Copilot CLI agent
- **What:** Fixed remaining `/pricing` primary button mismatch by converting plan outline CTAs to the same orange/white primary style system
- **When:** 2026-03-31T00:45:23Z
- **Where:** `src/app/pricing/pricing.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported pricing buttons were still inconsistent; the remaining mismatch came from `btnPlanOutline` keeping neutral text/border while other pricing CTAs were already orange/white
- **How:** Updated `.btnPlanOutline` and `.btnPlanOutline:hover` to match homepage-style primary treatment (`#f97316` default, `#ea580c` hover, white text), then validated full pricing CTA set (hero, plan cards, enterprise, final CTA) via build and served CSS/HTML inspection.
- **File path(s) changed:**
  - `src/app/pricing/pricing.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T00:48:42Z

- **Who:** Copilot CLI agent
- **What:** Added hard hero CTA override on `/pricing` to force exact homepage-like button colors for both hero buttons
- **When:** 2026-03-31T00:48:42Z
- **Where:** `src/app/pricing/pricing.module.css`, `docs/logs/changelogs.md`
- **Why:** User still observed hero CTA mismatch on `/pricing` (`See the plans`, `Run the math`) with darker/black appearance
- **How:** Added `.heroCtas a` and `.heroCtas a:hover` forced rules (`!important`) to pin hero button default to `#f97316` with white text and hover to `#ea580c` with white text, then re-built and validated served CSS includes the forced hero rules.
- **File path(s) changed:**
  - `src/app/pricing/pricing.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-31 - Pricing button specificity fix

**Who**: Copilot
**What**: Fixed .page a rule overriding button text colors by changing to .page a:not([class]) so only non-classed anchors inherit dark text
**Where**: src/app/pricing/pricing.module.css
**Why**: Button text was showing as black instead of white due to CSS specificity issue
**How**: Changed .page a { color: inherit } to only apply to anchors without class attribute

Files: src/app/pricing/pricing.module.css

## 2026-03-31 - CTA sections converted to card style

**Who**: Copilot
**What**: Changed all page CTA sections from full-width orange background to homepage card style (.cta-banner with globe)
**Where**: src/app/product/page.tsx, src/app/use-cases/page.tsx, src/app/workflow/page.tsx, src/app/pricing/page.tsx
**Why**: User requested consistent CTA style across all pages matching homepage
**How**: Replaced full-width CTA sections with .cta-banner card component using global styles, kept each page's copy

Files: src/app/product/page.tsx, src/app/use-cases/page.tsx, src/app/workflow/page.tsx, src/app/pricing/page.tsx

## 2026-03-31 - Fix CTA card rendering

**Who**: Copilot
**What**: Moved CTA sections outside .page wrapper so global styles apply correctly
**Where**: src/app/product/page.tsx, src/app/use-cases/page.tsx, src/app/workflow/page.tsx, src/app/pricing/page.tsx
**Why**: CTA was blank/broken because CSS module .page reset rules were overriding global .cta-banner styles
**How**: Closed .page div before CTA section, used global container class instead of module container

Files: src/app/product/page.tsx, src/app/use-cases/page.tsx, src/app/workflow/page.tsx, src/app/pricing/page.tsx

## 2026-03-31 - Unified notification bar

**Who**: Copilot
**What**: Made notification bar consistent across all pages by removing buildTag prop and hardcoding unified message in SiteShell
**Where**: src/components/site-shell.tsx, all page files
**Why**: Notification bar was showing different text on each page due to hardcoded buildTag props
**How**: Removed buildTag prop from SiteShell type and all page usages, set single announcement message

Files: src/components/site-shell.tsx, src/components/prodvo-landing.tsx, src/app/faq/page.tsx, src/app/workflow/page.tsx, src/app/pricing/page.tsx, src/app/use-cases/page.tsx, src/app/product/page.tsx, src/app/docs/page.tsx

## 2026-03-31T15:34:00Z

- **Who:** Copilot CLI agent
- **What:** Increased spacing between logo icon and company name in homepage marquee
- **When:** 2026-03-31T15:34:00Z
- **Where:** `src/app/globals.css`
- **Why:** User reported the gap between logo and text was too tight
- **How:** Increased `.proof-item` gap from 0.5rem to 0.75rem for better visual spacing
- **File path(s) changed:**
  - `src/app/globals.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T15:37:00Z

- **Who:** Copilot CLI agent
- **What:** Improved logo marquee hover interaction
- **When:** 2026-03-31T15:37:00Z
- **Where:** `src/app/globals.css`
- **Why:** User wanted logos centered by default, with hover effect that moves logo up, shows company name, and pauses marquee
- **How:** 
  - Removed gap from .proof-item so logo stays centered
  - Made .proof-name absolutely positioned below logo
  - Added translateY(-8px) transform on logo hover
  - Added animation-play-state: paused on .marquee-track:has(.proof-item:hover)
- **File path(s) changed:**
  - `src/app/globals.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T15:41:00Z

- **Who:** Copilot CLI agent
- **What:** Added mobile-responsive hover effects for logo marquee
- **When:** 2026-03-31T15:41:00Z
- **Where:** `src/app/globals.css`
- **Why:** Ensuring hover effects work on mobile breakpoint too
- **How:** Added mobile overrides for .proof-name bottom position, font-size, and .proof-item:hover .proof-logo transform
- **File path(s) changed:**
  - `src/app/globals.css`
  - `docs/logs/changelogs.md`

## 2026-04-01T04:53:00Z

- **Who:** Copilot CLI agent
- **What:** Fixed logo marquee hover - pause + logo moves up + name appears
- **When:** 2026-04-01T04:53:00Z
- **Where:** `src/components/prodvo-landing.tsx`, `src/app/globals.css`
- **Why:** CSS :has() selector wasn't working; hover effects not triggering
- **How:** 
  - Added onMouseEnter/onMouseLeave handlers to marquee-track to pause/resume animation via JS
  - Simplified hover CSS: logo translateY(-10px), name fades in
  - Removed non-working :has() selector
- **File path(s) changed:**
  - `src/components/prodvo-landing.tsx`
  - `src/app/globals.css`
  - `docs/logs/changelogs.md`

## 2026-04-01T05:17:00Z

- **Who:** Copilot CLI agent
- **What:** Removed Docs link from header navigation
- **When:** 2026-04-01T05:17:00Z
- **Where:** `src/components/site-shell.tsx`
- **Why:** User requested removal of docs from header
- **How:** Removed `{ href: "/docs", label: "Docs" }` from NAV_LINKS array
- **File path(s) changed:**
  - `src/components/site-shell.tsx`
  - `docs/logs/changelogs.md`

## 2026-04-01T05:59:00Z

- **Who:** Copilot CLI agent
- **What:** Updated FAQ and Docs CTA sections to use card style like homepage
- **When:** 2026-04-01T05:59:00Z
- **Where:** `src/app/faq/page.tsx`, `src/app/docs/page.tsx`
- **Why:** User requested all CTAs use the card style (cta-banner) like homepage instead of full-width orange
- **How:** Replaced CSS module ctaSection with global .cta-banner card style including globe decoration
- **File path(s) changed:**
  - `src/app/faq/page.tsx`
  - `src/app/docs/page.tsx`
  - `docs/logs/changelogs.md`

## 2026-04-01T07:18:00Z

- **Who:** Copilot CLI agent
- **What:** Fixed blank CTA sections on all pages
- **When:** 2026-04-01T07:18:00Z
- **Where:** `src/app/faq/page.tsx`, `src/app/docs/page.tsx`, `src/app/product/page.tsx`, `src/app/use-cases/page.tsx`, `src/app/workflow/page.tsx`, `src/app/pricing/page.tsx`
- **Why:** CTAs were blank white because `.reveal` class sets opacity: 0 and requires IntersectionObserver JS to add `.is-visible` - subpages don't have this JS
- **How:** Removed `reveal` class from all `cta-banner` elements on subpages
- **File path(s) changed:**
  - `src/app/faq/page.tsx`
  - `src/app/docs/page.tsx`
  - `src/app/product/page.tsx`
  - `src/app/use-cases/page.tsx`
  - `src/app/workflow/page.tsx`
  - `src/app/pricing/page.tsx`
  - `docs/logs/changelogs.md`

## 2026-04-01T07:46:00Z

- **Who:** Copilot CLI agent
- **What:** Fixed duplicate React key warning in pricing page
- **When:** 2026-04-01T07:46:00Z
- **Where:** `src/app/pricing/page.tsx`
- **Why:** Console error about duplicate keys when multiple cells have same value (e.g., "Unlimited")
- **How:** Changed key from `${row.name}-${cell.value}` to `${row.name}-${cellIndex}` to ensure uniqueness
- **File path(s) changed:**
  - `src/app/pricing/page.tsx`
  - `docs/logs/changelogs.md`

## 2026-04-02T06:50:00Z

- **Who:** Copilot CLI agent
- **What:** Created 3 unique comparison pages (Prodvo vs Replit, Lovable, Bolt)
- **When:** 2026-04-02T06:50:00Z
- **Where:** `src/app/compare/replit/`, `src/app/compare/lovable/`, `src/app/compare/bolt/`, `src/components/site-shell.tsx`
- **Why:** User requested competitor comparison pages with unique designs
- **How:** 
  - Researched Prodvo features and competitor offerings (Replit, Lovable, Bolt)
  - Created competitor research doc at docs/2025-01-15-ai-coding-tools-competitor-research.md
  - vs Replit: Side-by-side workflow comparison design with feature matrix, pricing, timeline scenarios
  - vs Lovable: Production-ready focus with safety features, team coordination, enterprise matrix
  - vs Bolt: Beyond vibe coding theme with agent intelligence, infrastructure, team economics
  - Added footer navigation links under Product section
- **File path(s) changed:**
  - `src/app/compare/replit/page.tsx` (new)
  - `src/app/compare/replit/replit.module.css` (new)
  - `src/app/compare/lovable/page.tsx` (new)
  - `src/app/compare/lovable/lovable.module.css` (new)
  - `src/app/compare/bolt/page.tsx` (new)
  - `src/app/compare/bolt/bolt.module.css` (new)
  - `src/components/site-shell.tsx`
  - `docs/2025-01-15-ai-coding-tools-competitor-research.md` (new)
  - `docs/logs/changelogs.md`

## 2026-04-02 07:12 UTC
- **Who**: Copilot
- **What**: Fixed footer grid to show 4 columns; aligned compare links with label row
- **Where**: src/app/globals.css
- **Why**: Resources column was dropping to bottom; compare links not aligned with Product label
- **How**: Changed grid-template-columns to 4 columns; set padding-top: 0 for no-label column

## 2026-04-02 07:14 UTC
- **Who**: Copilot
- **What**: Aligned compare links with other nav items (below h4 labels)
- **Where**: src/app/globals.css
- **Why**: Compare links should align horizontally with nav items, not with h4 labels
- **How**: Set padding-top to match h4 height (font-size + margin-bottom)

## 2026-04-02 07:16 UTC
- **Who**: Copilot
- **What**: Fixed compare column padding to align with first nav items
- **Where**: src/app/globals.css
- **Why**: Compare links must align with Platform/FAQ, not with h4 labels
- **How**: Set explicit 1.68rem padding-top to match h4 height + margin

## 2026-04-02 07:25 UTC
- **Who**: Copilot
- **What**: Complete revamp of Prodvo vs Lovable comparison page
- **Where**: src/app/compare/lovable/page.tsx, src/app/compare/lovable/lovable.module.css
- **Why**: User requested redesign - layout was messy, table was ugly
- **How**: 
  - New hero with side-by-side layout and code editor visual
  - Vertical timeline for workflow stages instead of cramped cards
  - Clean safety feature cards with icons and winner tags
  - Modern feature list instead of table
  - Enterprise comparison as card grid
  - Better bottom line section with highlighted Prodvo card
  - Full responsive design

## 2026-04-02 07:33 UTC
- **Who**: Copilot
- **What**: Removed icons/emojis from Lovable page; added lesson about no icons
- **Where**: src/app/compare/lovable/page.tsx, src/app/compare/lovable/lovable.module.css, .claude/task/lessons.md
- **Why**: Style guideline prohibits icons/emojis in UI
- **How**: Removed icon property from SAFETY_FEATURES data, removed safetyIcon element from JSX, removed .safetyIcon CSS

## 2026-04-02 07:39 UTC
- **Who**: Copilot
- **What**: Added 6th safety feature (Scoped execution) to Lovable comparison
- **Where**: src/app/compare/lovable/page.tsx
- **Why**: User requested 6 items instead of 5
- **How**: Added "Scoped execution" feature comparing Prodvo's file-limited runs vs Lovable's full regeneration

## 2026-04-02 07:46 UTC
- **Who**: Copilot
- **What**: Updated Bolt comparison page - removed icons, added 6th agent intelligence item, revamped bottom line
- **Where**: src/app/compare/bolt/page.tsx, src/app/compare/bolt/bolt.module.css
- **Why**: User requested icon removal, 6 items in agent intelligence, and bottom line revamp
- **How**: 
  - Removed icon property from BEYOND_PROMPTS and removed beyondIcon element/CSS
  - Added "Rollback & recovery" as 6th item in AGENT_INTELLIGENCE
  - Redesigned bottom line with card-based layout, brand headers, tags, and verdict summary

## 2026-04-02T12:31:05Z

- **Who:** Copilot CLI agent
- **What:** Replaced README with a full A-to-Z project deep-dive
- **When:** 2026-04-02T12:31:05Z
- **Where:** `README.md`
- **Why:** User requested comprehensive project documentation covering product, features, pricing, legal, architecture, and development workflows
- **How:** Rewrote README with complete route map, feature taxonomy, pricing details, legal suite documentation, security/compliance content references, UI/system conventions, architecture notes, and local development/runtime instructions
- **File path(s) changed:**
  - `README.md`
  - `docs/logs/changelogs.md`

## 2026-04-02T12:44:00Z

- **Who:** Copilot CLI agent
- **What:** Imported privacy-policy-generator skill package into `.claude/skills`
- **When:** 2026-04-02T12:44:00Z
- **Where:** `.claude/skills/privacy-policy-generator/`
- **Why:** User requested downloading the provided ZIP and placing all files under a new `.claude/skills/privacy-policy-generator` directory
- **How:** Downloaded ZIP to `/tmp`, created target directory, extracted all archive files into the new skill folder preserving `assets/` and `references/` structure
- **File path(s) changed:**
  - `.claude/skills/privacy-policy-generator/SKILL.md`
  - `.claude/skills/privacy-policy-generator/LICENSE.txt`
  - `.claude/skills/privacy-policy-generator/assets/CNIL_droits_personnes.pdf`
  - `.claude/skills/privacy-policy-generator/assets/CNIL_durees_conservation.pdf`
  - `.claude/skills/privacy-policy-generator/assets/CNIL_finalites.pdf`
  - `.claude/skills/privacy-policy-generator/assets/CNIL_principes_rgpd.pdf`
  - `.claude/skills/privacy-policy-generator/assets/CNIL_transparence.pdf`
  - `.claude/skills/privacy-policy-generator/assets/RGPD_texte_officiel.pdf`
  - `.claude/skills/privacy-policy-generator/assets/sample_template_politique_confidentialite.docx`
  - `.claude/skills/privacy-policy-generator/assets/sample_template_politique_confidentialite.pdf`
  - `.claude/skills/privacy-policy-generator/references/BASES_LEGALES.md`
  - `.claude/skills/privacy-policy-generator/references/COOKIES.md`
  - `.claude/skills/privacy-policy-generator/references/DROITS_PERSONNES.md`
  - `.claude/skills/privacy-policy-generator/references/DUREES_CONSERVATION.md`
  - `docs/logs/changelogs.md`

## 2026-04-02T12:58:23Z

- **Who:** Copilot CLI agent
- **What:** Expanded Privacy Policy legal page with fuller GDPR-style coverage
- **When:** 2026-04-02T12:58:23Z
- **Where:** `src/app/legal/privacy/page.tsx`
- **Why:** User requested refining the privacy policy because the previous version felt too short and potentially incomplete
- **How:** Reworked the page from 10 to 16 substantive sections, adding controller/contact details, data sources, required fields, detailed purposes/legal bases, cookies and consent handling, subprocessors, rights exercise workflow, minors, automated processing disclosure, retention/deletion granularity, and policy update mechanics aligned with existing project claims
- **File path(s) changed:**
  - `src/app/legal/privacy/page.tsx`
  - `docs/logs/changelogs.md`

## 2026-04-02T13:10:42Z

- **Who:** Copilot CLI agent
- **What:** Refined shared legal page callout style and restored visible list markers
- **When:** 2026-04-02T13:10:42Z
- **Where:** `src/app/legal/legal.module.css`
- **Why:** User requested replacing the one-sided bold quote-like box style and fixing missing bullet/number markers in legal lists
- **How:** Redesigned `.callout` to a full bordered card with subtle gradient and balanced emphasis, then explicitly restored list marker rendering for TOC and section content (`list-style-type` + `::marker` styling for `ul`/`ol`)
- **File path(s) changed:**
  - `src/app/legal/legal.module.css`
  - `docs/logs/changelogs.md`

---

## 2026-04-02T16:50:12Z — Comprehensive Prodvo product documentation

**Who:** Copilot CLI  
**What:** Created comprehensive product documentation covering Prodvo's purpose, features, pricing, competitors, company background, and technical architecture  
**When:** April 2, 2026, 16:50:12 UTC  
**Where:** New documentation file in `/docs`  
**Why:** User requested deep dive into entire codebase to document "what is Prodvo, the features, pricing tiers, anything about the prodvo, including the founding, the competitor, what the difference between the competitor"  
**How:** Analyzed all marketing pages (homepage, product, use-cases, workflow, pricing, FAQ, docs, comparison pages), extracted product positioning, pricing details, competitive differentiators, and compiled into structured markdown documentation with 12 major sections covering: Executive Summary, What is Prodvo, Company Background, Core Product Vision, Platform Capabilities, 5-Phase Workflow, Target Personas & Use Cases, Pricing & Plans, Competitive Landscape (vs Replit/Lovable/Bolt/v0), Security & Compliance, Technical Architecture, and Success Metrics & Testimonials

**Changed files:**
- `docs/PRODVO_COMPREHENSIVE_OVERVIEW.md` (created)
- `docs/logs/changelogs.md`

---

## 2026-04-07T18:35:00Z — NVIDIA Inception Program pitch deck creation

**Who:** Copilot CLI  
**What:** Created comprehensive 13-slide pitch deck PDF for NVIDIA Inception Program application and updated founding date to 2024  
**When:** April 7, 2026, 18:35:00 UTC  
**Where:** `/docs/Prodvo_NVIDIA_Inception_Pitch_Deck.pdf` and documentation file  
**Why:** User requested pitch deck for NVIDIA Inception Program application with updated founding date (2024 instead of 2025)  
**How:** Generated professional PDF pitch deck using ReportLab with brand colors (fire orange #ea580c, dark #1a1a1a); created 13 slides covering: (1) Title slide, (2) The Problem, (3) The Prodvo Solution, (4) How It Works (5-phase workflow), (5) Market Opportunity ($565B market, 26.7M developers), (6) Competitive Differentiation (vs Replit/Bolt/v0), (7) Business Model & Pricing (4 tiers), (8) Traction & Validation (customer metrics and testimonials), (9) Technology Stack & AI Integration (NVIDIA GPU use cases), (10) Company Information (founded April 2024), (11) Why NVIDIA Inception (strategic alignment), (12) Roadmap & Growth Strategy (Q2 2026-2027+), (13) Closing slide; updated founding date in comprehensive documentation from April 1, 2025 to April 1, 2024

**Changed files:**
- `docs/Prodvo_NVIDIA_Inception_Pitch_Deck.pdf` (created)
- `docs/PRODVO_COMPREHENSIVE_OVERVIEW.md` (founding date updated)
- `docs/logs/changelogs.md`

---

## 2026-04-07T18:47:00Z — Fix pitch deck PDF formatting issues

**Who:** Copilot CLI  
**What:** Fixed text formatting and layer issues in NVIDIA Inception pitch deck PDF  
**When:** April 7, 2026, 18:47:00 UTC  
**Where:** `/docs/Prodvo_NVIDIA_Inception_Pitch_Deck.pdf`  
**Why:** Original PDF had HTML tags rendering as plain text (e.g., "<b>Challenge</b>") and text overlap/layer issues  
**How:** Regenerated PDF using proper ReportLab table formatting with clean text (no HTML tags in table cells), fixed cell padding/alignment, ensured proper text wrapping, removed overlapping elements, and maintained proper vertical spacing between all elements

**Changed files:**
- `docs/Prodvo_NVIDIA_Inception_Pitch_Deck.pdf`
- `docs/logs/changelogs.md`
