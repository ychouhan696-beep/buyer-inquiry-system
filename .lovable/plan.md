The user wants the metrics band to include two clear actions: one that opens WhatsApp, and one that scrolls to the results section. The page already has these behaviors in the hero, so we will reuse the same pattern and styles in the metrics section that was selected.

### What we will build
- Insert a compact CTA row directly below the metrics grid inside the metrics section (`src/routes/index.tsx`).
- Two buttons:
  - **Chat on WhatsApp** — opens the existing `WHATSAPP_URL` in a new tab.
  - **View Results** — smooth-scrolls to the `#results` case-study section.
- Match the existing button styling (primary rounded pill with `purple-glow`, secondary outline pill) so the section still feels premium and consistent.

### Files to change
- `src/routes/index.tsx` — add the CTA row inside the `Metrics` component after the metric grid.

### Implementation notes
- Reuse the existing `WHATSAPP_URL` constant.
- Keep the 12-column / 1280px max-width layout.
- No new dependencies, no backend changes, no SEO changes needed.