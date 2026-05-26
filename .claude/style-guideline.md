# Project Style Guideline

This guideline defines the visual and interaction rules for this project’s frontend.

Use this as the source of truth for future UI edits.

## 1) Design Intent

- Light-first, minimal SaaS aesthetic.
- Fire-orange accent system over white surfaces.
- Clean typography hierarchy with generous spacing.
- Data-forward cards and clear CTA emphasis.
- Motion should feel subtle, informative, and never distracting.

## 2) Color Tokens

Core palette (from `:root`):

- `--white: #ffffff` (primary surface)
- `--fire-orange: #f97316` (primary accent)
- `--fire-orange-dark: #ea580c` (primary hover)
- `--fire-orange-deep: #c2410c` (strong accent + darker emphasis)
- `--fire-orange-darker: #9a3412` (deepest brand tone for contrast text)
- `--fire-orange-soft: #fdba74` (borders/dividers)

Hard rules:

- Do not use gray/grey/slate/neutral palettes for major section backgrounds.
- Gray/neutral tones are allowed for text hierarchy and borders/dividers to preserve readability.
- Do not use nude/cream backgrounds (`#fff7ed`, `#ffedd5`, `#fffbf7`, `#fed7aa`) for sections.
- Do not use non-brand hues (green/blue/purple/red/black) for UI states.
- Do not use gradient backgrounds for CTA sections.
- CTA sections must use solid `#f97316` with white title/body text.
- Main page surfaces must stay white (`#ffffff`) unless explicitly asked otherwise.
- If a darker tone is needed, use dark-orange tokens only.
- For cross-page CTA consistency requests, primary hero buttons must match homepage primary CTA tone (`--fire-orange` base and `--fire-orange-dark` hover), even if source HTML used a different hex.
- During HTML-to-TSX conversion, raw source hex values for buttons should be normalized to project tokens when they conflict with shared button tone requirements.
- For text/secondary buttons (ghost/outline/link-like CTAs), keep neutral button text hierarchy aligned with homepage/product conventions (`ink-2` default, `ink` on hover) unless a page-specific exception is explicitly requested.
- For reference-driven pages, match hero persona options (labels and dynamic copy semantics) to reference behavior first, then apply project-wide token normalization.

## 3) Typography

Font families:

- Body/UI: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- Brand/hero emphasis: `"Plus Jakarta Sans", "Inter", sans-serif`
- Decorative quote mark: `Georgia, "Times New Roman", serif`
- Monospace metadata (`section-label` code): UI monospace stack

Type scale patterns:

- Hero H1: `clamp(2.2rem, 8vw, 5.5rem)`, line-height `1.05`, heavy weight
- Section titles: `clamp(1.85rem, 4vw, 3rem)`, weight `800`
- Body text: mostly `0.9rem–1.05rem`, prefer neutral readable tones (e.g. zinc/slate range), with orange reserved for emphasis
- Buttons: around `0.95rem`, semibold

## 4) Layout & Spacing System

Container:

- `.container`: `width: min(1120px, calc(100% - 2rem))`

Section rhythm:

- `.section`: vertical spacing `clamp(3rem, 6vw, 5rem)`
- Hero top/bottom spacing uses larger clamp values for first impression.

Card rhythm:

- Large cards: rounded `18px–24px`
- Borders: mostly `1px solid var(--fire-orange-soft)`
- Gap standards: `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2.4rem+`

## 5) Major UI Patterns

- Sticky header with subtle blur and border on scroll.
- Announcement strip above nav for product updates.
- Hero with badge + oversized statement + dual CTA.
- Marquee social proof bar with subtle edge fade masks on desktop.
- Bento feature grid with mixed spans (`normal`, `wide`, `full`).
- Pricing 3-card layout with one `popular` highlight.
- Testimonials with quote + supporting stat cards.
- Full-width orange CTA banner with globe motif.
- Multi-column footer that collapses gracefully on mobile.

## 6) Motion & Animation Guidelines

Keyframes in use:

- `fade-up`: entrance movement from below.
- `fade-in`: mild vertical fade.
- `marquee`: continuous horizontal brand ticker.
- `float-y`: subtle up/down globe movement.
- `dot-pulse`: pulse rings for globe points.

Reveal system:

- Elements use `.reveal` and become visible with `.is-visible`.
- Stagger support via `.delay-1`, `.delay-2`.
- Controlled by IntersectionObserver in script.

Motion behavior principles:

- Keep durations in the ~`0.5s–0.8s` range for entrances.
- Keep continuous loops gentle (no aggressive oscillation).
- Avoid hover-pause behaviors that can feel “stuck” in dense sections.

## 7) Accessibility Rules

- Keyboard focus uses `:focus-visible` with orange outline and offset.
- Mouse/touch focus fallback removes noisy default outlines.
- Skip link is present (`Skip to content`) and visible on keyboard focus.
- Reduced-motion preference is respected:
  - Reveals become immediate.
  - Globe float/pulse animation is disabled.

## 8) Responsive Breakpoints

Primary breakpoints:

- `@media (max-width: 980px)`
  - Desktop nav collapses to menu button.
  - Grids reduce (e.g., 3 columns to 2).
  - Social-proof strip becomes stacked and less masked.
  - Competitor grid becomes 3 columns.

- `@media (max-width: 700px)`
  - Most major grids become single column.
  - CTA layout stacks vertically.
  - Decorative/secondary links are hidden when needed.
  - Competitor grid becomes 1 column.

## 9) Component-Specific Do / Don’t

Do:

- Use token variables; avoid hardcoding random new colors.
- Keep rounded corners and soft shadows consistent.
- Use neutral text hierarchy for readability and reserve orange for emphasis, active states, and accents.
- Maintain comfortable line-heights (`~1.45–1.7`) for body text.
- Keep section surfaces white first; orange is emphasis, not base tinting.

Don’t:

- Introduce dark-mode-only overrides unless explicitly requested.
- Add abrupt or high-frequency animations.
- Use saturated non-brand colors as primary actions.
- Compress spacing too tightly on desktop layouts.
- Do not use nude/cream background fills for major sections.
- Do not use CTA gradients.

## 10) Maintenance Notes

When extending frontend UI files:

- Prefer existing utility classes over adding one-off inline styles.
- Add new color tokens in `:root` before usage.
- Keep new sections aligned with existing section rhythm.
- If adding animation, include reduced-motion handling.
- Validate behavior at desktop/tablet/mobile widths before finalizing.
