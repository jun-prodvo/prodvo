# Lessons Learned

This file captures all user feedback — direct and indirect — to prevent repeating mistakes and improve quality over time.

---

## UI/UX Design Lessons

### DO NOT DO (Anti-patterns)
1. **Do NOT use repetitive grid/bento/card-stack patterns** across multiple sections — each section needs its own distinct visual system
2. **Do NOT default to vertical list-only layouts** as the main solution
3. **Do NOT use off-brand CTA colors** — keep brand-orange system throughout
4. **Do NOT use one-testimonial-only sections** when asked for strong social proof — show multiple testimonials
5. **Do NOT use quote-block style** or split-weight quote composition for testimonial/results sections
6. **Do NOT use the same layout pattern** for Use Cases, Results, and FAQ sections — they must be visually differentiated
7. **Do NOT rely on cards, grids, bento, vertical stacks, or tabs/selectors** as the default solution for every problem
8. **Do NOT think like a template** — think like a real UI/UX expert with editorial hierarchy
9. **Do NOT use dark/charcoal colors for major cards or section backgrounds** — keep surfaces light and brand-aligned
10. **Do NOT create asymmetric layouts with large empty spaces** — if using columns, use the full width
11. **Do NOT use stop-start marquee animations** — sliding should be smooth continuous movement
12. **Do NOT use basic grid layouts for testimonials** — find more creative, editorial approaches
13. **Do NOT use vertical stacked lists for testimonials** — explore horizontal layouts
14. **Do NOT copy the same pattern from another section** — Use Cases uses horizontal scroll, so Results CANNOT use horizontal scroll
15. **Do NOT use quote style with one side bold/heavy** — no left border accents, no asymmetric visual weight on testimonials
16. **Do NOT confuse naming vs design intent** — when user says "testimonial card," treat it as visual container feedback and remove card treatment entirely
17. **Do NOT use timeline treatment for testimonials** — testimonials should feel direct and simple, not process-flow visuals
18. **When user says design is too complicated, simplify immediately** — reduce visual mechanics and keep structure straightforward
19. **Do NOT present testimonials as vertical rows/list** — prefer horizontally-oriented testimonial presentation
20. **Do NOT leave testimonials visually plain/unstyled** — keep a modern styled treatment while staying simple
21. **When asked to revamp full section, replace entire section composition** — not just testimonial container style
22. **Before finalizing Results redesign, verify against ALL lessons** — reject any solution that is grid/bento/card/vertical timeline/plain
23. **Never ignore explicit repeated feedback** — if user repeats “not vertical,” avoid every vertical-first composition immediately
24. **Do NOT replace homepage structure without explicit request** — keep expected homepage intact while expanding other pages
25. **When asked for full site pages, each route must be substantial** — avoid thin two-section placeholder pages
26. **Do NOT use nude/cream colors** — avoid #fff7ed, #ffedd5, #fffbf7, #fed7aa as section backgrounds
27. **Do NOT use gradient backgrounds for CTA sections** — CTA backgrounds must be solid fire-orange
28. **Use strict surface base** — white surfaces with fire-orange accents; avoid gray as major background color
29. **Do NOT remove readable neutral text/border hierarchy unless user asks** — gray/dark text and divider tones are allowed for legibility
30. **Do NOT use non-brand state colors** (green/blue/purple/red/black) — if contrast is needed, use dark orange
31. **Do NOT frame Prodvo as a storytelling framework product** — copy must reflect AI coding workspace + real delivery execution
32. **Do NOT default to comparison copy patterns** unless user explicitly asks for comparison
33. **Do NOT use icons or emojis** — no emoji icons (🛡️ ⚡ 📋 etc.) in UI elements; keep design clean and text-based

### DO (Best practices)
1. **Prioritize professional editorial hierarchy** over decorative gimmicks
2. **Create genuinely different visual systems** for each major section
3. **Think magazine-style layout** — asymmetric, varied, editorial
4. **Use horizontal scroll, accordion, mosaic, timeline** as alternatives to grid/card patterns
5. **Show all testimonials visibly** rather than hiding behind tabs/switchers when social proof is important
6. **Use solid fire-orange CTA backgrounds** (`#f97316`) with white CTA text
7. **Use white as the primary surface** and reserve orange for emphasis

---

## Process Lessons

### Feedback Handling
1. **Take notes on every piece of feedback** — user frustration often comes from repeated mistakes
2. **Think before defaulting** — is this the same pattern I just used? If yes, find alternative
3. **When user says "same thing again"** — completely rethink approach, don't just tweak
4. **Do not ask for push confirmation** when change is done — commit and push automatically after every edit
5. **Before every commit/push, append changelog first** in `docs/logs/changelogs.md` using 5W+1H + file paths
6. **If asked to change only background gray, do NOT alter text/icon/button palettes** — keep existing colors unless explicitly requested
7. **When user says redesign still feels the same, change content architecture/layout (not just colors/spacing)** — deliver a visibly new structure
8. **Avoid repeated grid/card systems across multiple sections in one page** — each section must use a different layout mechanic
9. **When user asks for richer copy, expand narrative depth per section** — don’t compress or simplify storyline content
10. **When user asks to stop, stop patching and switch to one deliberate full-pass rewrite** to prevent noisy iterative edits
11. **When converting HTML to TSX/CSS, do not keep source hex blindly** — map CTA/button tones to the project’s canonical homepage tokens (e.g. `--fire-orange`/`--fire-orange-dark`) when user requests consistency
12. **When user requests reference parity, preserve hero option semantics exactly first** — labels, persona copy tone, and tab behavior must match the reference intent before stylistic tweaks
13. **Text/secondary button colors must stay consistent cross-page** — use the same neutral hierarchy (`ink/gray`) used by homepage/product buttons, not ad-hoc darker orange text unless explicitly requested

### File Organization
1. **Follow user's exact directory structure** — don't create files in wrong locations
2. **Move entire directories when asked** — don't leave partial files behind

---

## Communication Lessons

1. **Acknowledge frustration** and take responsibility
2. **Don't repeat the same mistake** after being corrected
3. **Ask clarifying questions** when uncertain about design direction

---

*Last updated: 2026-03-29*
