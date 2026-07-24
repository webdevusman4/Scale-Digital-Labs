# Plan: Add Values Section to Home Page (Before Services)

## Context
The About page has a "Our Values" section with 6 cards. The user wants an identical copy placed in the Home page, just before the existing Services Preview section.

## What to do

### File: `src/app/pages/Home.tsx`

1. **Import the same icons** used in the VALUES array (already likely imported or need to add): `Target`, `Gem`, `TrendingUp`, `Users`, `RefreshCw`, `Zap` from `lucide-react`.

2. **Copy the VALUES data array** from `About.tsx` verbatim and paste it into `Home.tsx` (above the component or near the top of the file alongside `SERVICES`).

3. **Copy the values section JSX** from `About.tsx` and paste it into `Home.tsx` immediately before the `{/* ── Services Preview ── */}` section (around line 135).

4. **Copy the `valuesRef`** — add a `useScrollAnimation` (or equivalent ref/hook already used in Home.tsx) for the values header, matching the pattern already used for `servicesRef`.

## CSS
No new CSS needed — the values section reuses existing classes (`.values-section`, `.value-cards-grid`, `.value-card`, etc.) already defined in the global stylesheet.

## Verification
- Dev server should render the Home page with the Values section appearing above Services.
- Cards should animate in on scroll, match the same card style as the About page.
- No style regressions on other sections.
