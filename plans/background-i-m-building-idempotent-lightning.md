# Plan: Add "Our Values" section to Home page

## Context
The "Our Values" / "What We Stand For" section currently lives only on the About page (`src/app/pages/About.tsx`). We want the same section to also appear on the Home page, positioned immediately above the Services Preview section. To keep the code reusable and avoid duplicating the VALUES data in two page files, we extract the section into a standalone component and render it on the Home page. The design must be copied **verbatim** — no changes to classes, colors, layout, or animation behavior.

## Approach

### Step 1 — Create the component
Create `src/app/components/ValuesSection.tsx` (project convention places components in `src/app/components`, not `src/components`).

It must contain, copied verbatim from `src/app/pages/About.tsx`:
- Imports:
  - `import { useScrollAnimation } from "../hooks/useScrollAnimation";`
  - `import { Target, Gem, TrendingUp, Users, RefreshCw, Zap, type LucideIcon } from "lucide-react";`
- The full `VALUES` array (6 items, verbatim).
- A default-exported `ValuesSection()` function that:
  - creates the ref internally: `const valuesRef = useScrollAnimation();` (self-contained, no props needed)
  - returns the exact `<section className="section values-section">…</section>` JSX block, unchanged (including `ref={valuesRef as React.RefObject<HTMLDivElement>}`, `.animate-on-scroll`, `--delay` inline style, gradient bar, bg number, etc.)

Because the section already relies only on global CSS classes and its own local ref, containing everything inside the component is safe — no props required.

### Step 2 — Insert into Home page
In `src/app/pages/Home.tsx`:
- Add `import ValuesSection from "../components/ValuesSection";` at the top.
- Locate the `{/* ── Services Preview ── */}` section (~line 135).
- Insert `<ValuesSection />` immediately above that comment/section.

No other changes to Home.tsx — existing `servicesRef`, `workRef`, `ctaRef` remain untouched. No changes to any global stylesheet.

## Critical files
- **Create:** `src/app/components/ValuesSection.tsx`
- **Edit:** `src/app/pages/Home.tsx` (one import + one component insertion)
- **Read-only reference:** `src/app/pages/About.tsx`, `src/app/hooks/useScrollAnimation.ts`

## Verification
- Load the Home page in the preview surface; confirm the "Our Values" section renders above "Our Services" with identical styling (gradient bars, faded background numbers, keyword tags, icons).
- Scroll down and confirm the section animates in via `.animate-on-scroll` → `.visible` just like on the About page.
- Confirm the About page still renders its Values section unchanged.
- Confirm no console errors and no visual regressions on either page.
