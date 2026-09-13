---
trigger: always_on
---

# RESPONSIVE BREAKPOINT STRATEGY — ScaleDigitalLabs

Companion reference to `spacing.md`. Use this any time you're instructing a responsive fix, testing a page, or reviewing a screenshot at a specific size.

## 0. The core principle: full-viewport height is a DESKTOP technique

**Never apply `min-height: 100vh` unconditionally.** It only belongs on layouts rich enough to fill that space on purpose — typically a two-column hero with a full-height image, which only exists once the layout has switched to desktop (≥768px on this site). Below that width, content collapses to a single column and is almost always shorter than the viewport — forcing full height there just centers a small block of text inside a mostly-empty box, wasting the user's limited mobile screen and delaying the real content below.

**The rule:** mobile default = `min-height: fit-content` (height follows content, no forcing). Full-viewport height is opt-in, added back only at the width where the layout actually has enough content to earn it:

```css
.full-height-hero {
  min-height: fit-content;
}
@media (min-width: 768px) {
  .full-height-hero {
    min-height: calc(100vh - 80px);
    min-height: calc(100dvh - 80px);
  }
}
```

## 1. Core width breakpoints (mobile-first, min-width system)

- **Base (0px)**: Small phones (iPhone SE, older Android). Single column, stacked everything, smallest type scale.
- **sm (480px)**: Large phones in portrait. Slightly larger type, stats rows may start fitting on one line.
- **md (768px)**: Tablets in portrait, phones in landscape. Layout switches from stacked to side-by-side here (`md:flex-row`).
- **lg (1024px)**: Tablets in landscape, small laptops. Extra breathing room, larger gaps between grid items.
- **xl (1280px)**: Standard laptops. Full desktop type scale locks in.
- **2xl (1536px)**: Large monitors, external displays. Content usually caps at `max-width` here.

## 2. The danger zone: short height + wide width

This is the case most sites get wrong: **landscape phone, or a shortened laptop viewport**. Width is wide enough to trigger desktop layout (≥768px), but height is short enough that a `min-height: 100vh` section either clips content or looks awkwardly empty.

**Fix pattern — add a height-based query alongside your width-based ones:**

```css
@media (min-width: 768px) and (max-height: 700px) {
  .full-height-hero {
    min-height: auto;      /* don't force full-height when height is scarce */
    padding-top: 60px;
    padding-bottom: 40px;
  }
}
```

## 3. Practical test matrix

**Portrait:**
1. 375 × 667 (Small phone)
2. 390 × 844 (Standard modern phone)
3. 430 × 932 (Large phone)
4. 768 × 1024 (Tablet)
5. 1024 × 1366 (Large tablet)

**Landscape:**
6. 667 × 375 (Phone rotated — **the danger zone**, shortest real-world height)
7. 932 × 430 (Large phone landscape)
8. 1024 × 768 (Tablet landscape / md layout boundary)
9. 1366 × 768 (Laptop physical resolution)
10. 1920 × 1080 (Standard external monitor)

Testing in Chrome DevTools: `F12` → toggle device toolbar (`Ctrl+Shift+M`) → type custom dimensions directly into the width/height fields.

## 4. How to instruct a responsive fix precisely

- **Bad:** "make it responsive on smaller screens"
- **Good:** "add a `max-height: 700px` query alongside the existing `md:` width query, so the hero relaxes its forced full-height on short viewports"
- **Bad:** "check it on mobile"
- **Good:** "test at 375×667 (portrait) and 667×375 (landscape) — the landscape case is the one likely to break first"