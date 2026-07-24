# 3-Tier State Fade — ProcessSection

## Context
The desktop sticky-scroll process tracker in `ProcessSection.tsx` currently uses a
2-tier visual state: a step is either **active** (opacity 1) or **not active**
(opacity 0.3, translated down 16px). This means steps the user has *already scrolled
past* revert to the same dimmed 30% state as upcoming steps and remain visible near
the top of the viewport, visually colliding with the sticky left title column.

The fix is a **3-tier state**: distinguish **Past**, **Active**, and **Upcoming** so
that completed steps fade out completely and float up, leaving only the active and
upcoming steps in view.

## Scope
- Only the **desktop** map loop (`ProcessSection.tsx:105-183`) needs changes.
- The mobile layout (all steps fully shown) stays as-is.
- No changes to `PROCESS_STEPS` data, the IntersectionObserver logic, or `Services.tsx`.

## Change
File: `src/app/components/ProcessSection.tsx`

Inside the desktop `PROCESS_STEPS.map(...)` callback:

1. Add a past-state derivation alongside the existing `isActive`:
   ```ts
   const isActive = index === activeStep;
   const isPast = index < activeStep;
   ```

2. Update the **content block** (currently `ProcessSection.tsx:135-141`, the inline
   `style={{ opacity..., transform... }}`) to three tiers. Keep the existing inline-style
   approach for consistency with the rest of the file (the surrounding code uses inline
   styles, not Tailwind opacity/translate utilities):
   - **Active** → `opacity: 1`, `translateY(0)`, pointer events on.
   - **Past** → `opacity: 0`, `translateY(-48px)` (float up & vanish), `pointerEvents: "none"`.
   - **Upcoming** → `opacity: 0.3`, `translateY(16px)` (dimmed, waiting below).

3. Optionally align the node's inner-dot/border with the active-only emphasis already
   present (`ProcessSection.tsx:117-132`) — no functional change needed there since past
   nodes will fade with the block; leave node logic as-is unless it reads inconsistently.

Note: the user's snippet was written with Tailwind classes and `step.icon` used
directly; this file instead uses `const Icon = step.icon` and inline styles. We keep the
file's existing idiom (inline styles, `Icon` variable) and only introduce the `isPast`
tier — matching intent, not the literal snippet.

## Verification
- Run the app via the preview surface and navigate to the Services page.
- Scroll through the process section: confirm the active step is fully opaque, upcoming
  steps below are dimmed at 30%, and steps scrolled past fade to 0 and shift upward
  instead of lingering dimmed near the sticky title.
- Confirm smooth transitions (existing `transition-all duration-500 ease-in-out`).
- Confirm the mobile layout is unchanged (all steps visible).
