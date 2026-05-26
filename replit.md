# Prodvo — AI Coding Agent Workspace

## Overview
Prodvo is a marketing/landing site for an AI-powered coding workspace product. Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and TypeScript.

## Architecture
- **Framework**: Next.js 16 with Turbopack, App Router (`src/app/`)
- **Styling**: Global CSS with custom design tokens in `src/app/globals.css` (CSS variables, not Tailwind utility-first)
- **Fonts**: Inter (body) + Plus Jakarta Sans (headings, 800 weight)
- **Components**: `src/components/` — shared layout in `site-shell.tsx`, page-specific components per route

## Design System
- **Colors**: Fire-orange (`#f97316`) as primary accent, charcoal (`#18181b`) for text, gray scale for UI chrome
- **Patterns**: Section labels with `[ 01 / 06 ]` code prefix, `page-hero` for subpage heroes, `section-title` / `section-subtitle` typography, rounded cards (14-18px radius), orange pill badges
- **Animations**: `reveal` class with IntersectionObserver, `animate-fade-up` variants for hero sections
- **Layout**: `.container` at max 1120px, `.section` / `.section-alt` for alternating backgrounds

## Pages
- `/` — Landing page (`prodvo-landing.tsx`)
- `/about` — About Prodvo & team (`about-page.tsx` + `about-reveal-effect.tsx`)
- `/product`, `/use-cases`, `/workflow`, `/pricing`, `/faq`, `/docs`, `/blog` — Subpages
- `/compare/*` — Competitor comparison pages
- `/legal/*` — Legal pages

## Dev Server
- Port: 5000 (required by Replit)
- Command: `npm run dev` (Next.js with Turbopack)
- Host: `0.0.0.0`
