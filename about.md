# UI & Theme Technical Audit Report: About Page

This document provides a comprehensive technical audit of the original `About` components (`components/about/*`), focusing on component architecture, styling tokens, and layout constructs. It serves as a baseline reference for the Light Theme migration within the duplicated `about2` components.

## 1. Component Architecture

The About page (`app/about/page.tsx`) renders the following component tree:

- **`<AboutPage>`**
  - **`<AboutHero />`** (`about-hero.tsx`)
    - Layout: Two-column flex (Text + Highlight Image)
  - **`<WhatWeDo />`** (`what-we-do.tsx`)
    - `ClusterLabel` (Gradient divider & text label)
    - `<ScrollReveal>` / `<ScrollRevealItem>`
    - `ServiceCard` (Interactive glassmorphic card)
  - **`<WhyChooseUs />`** (`why-choose-us.tsx`)
    - `DifferentiatorCard` (Interactive card with large background numbering)
  - **`<OurProcess />`** (`our-process.tsx`)
    - `DesktopTimeline` (SVG connected nodes, zigzag layout)
    - `MobileTimeline` (Vertical connected line layout)
    - `StepNode` (Gradient border circular node)
    - `StepCard` (Glassmorphic step content card)
  - **`<MeetTheFounders />`** (`meet-the-founders.tsx`)
    - `FoundersSection` (Grid of founder profiles with pills)
  - **`<OurCommitment />`** (`our-commitment.tsx`)
    - `PledgeCard` (3-column pledge items)
  - **`<BTSMarquee />`** (`bts-marquee.tsx`)
    - Infinite image marquee with gradient fade overlays

## 2. Current Color Palette (Dark Mode)

The original Dark Theme extensively utilizes native Tailwind classes and alpha-transparencies to establish a sleek, glassmorphic aesthetic. 

### Backgrounds
- **Primary Section Backgrounds:** Most sections use `bg-transparent` because they rely on a global wrapper or body background (likely `#0A0A0B` or similar). `bts-marquee.tsx` explicitly uses `bg-[#05070A]`.
- **Card Surfaces:** Semi-transparent white (`bg-white/[0.05]`, `bg-white/5`), backed by strong backdrop filters (`backdrop-blur-[20px] backdrop-saturate-[180%]`).
- **Icon Wrappers:** Slightly brighter white transparency (`bg-white/[0.08]`).

### Typography
- **Primary Headings & Text:** Pure white (`text-white`), slightly muted (`text-white/90`, `text-white/85`), and heavily muted for descriptions (`text-white/[0.65]`, `text-white/60`). 
- **Accents:** `text-gray-300` for bios, `text-[#FF8C42]` for titles, and `text-white/40` for subtle disclaimers/eyebrows.

### Borders & Dividers
- **Glass Borders:** `border-white/15`, `border-white/10`, `border-white/[0.12]`, `border-white/5`.
- **Section Dividers:** `bg-gradient-to-r from-transparent via-white/15 to-transparent` (typically 1px height).
- **Subtle Lines:** `bg-white/20`.

### Shadows & Glows
- **Card Shadows:** `shadow-[0_8px_32px_rgba(0,0,0,0.35)]`.
- **Node Glows:** `shadow-[0_0_24px_rgba(247,37,133,0.3)]`.
- **Ambient Glows (Volumetric):** Soft, massive background blurs to create lighting effects (e.g., `opacity-[0.04] blur-[180px]`, `opacity-[0.08] blur-[150px]`).

## 3. Gradients

The design relies heavily on a distinct 3-color brand gradient (Purple/Fuchsia/Orange).

- **Color Stops:** 
  - Stop 1: `#7B2FF7` (Purple)
  - Stop 2: `#F72585` (Fuchsia)
  - Stop 3: `#FF8C42` (Orange)
- **Text Gradients:** Applied using `text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]`.
- **Volumetric Background Glows:** Implemented as absolute divs layered behind content: `bg-gradient-to-r from-[#7B2FF7] ... blur-[150px] opacity-[0.08]`.
- **Eyebrow Pill Borders:** Created using `backgroundClip: 'padding-box, border-box'` with a composite background: `linear-gradient(rgba(11,15,25,0.92), rgba(11,15,25,0.92))` over the primary linear gradient to achieve a gradient-bordered dark pill.
- **SVG Paths & Icons:** The primary gradient is mapped into SVG `<defs>` as `<linearGradient id="service-icon-gradient">` or `#process-line-gradient` to stroke vectors and illuminate neon icons.
- **Hover Glows:** Interactive elements utilize `radial-gradient` effects with `rgba` equivalents of the brand colors (e.g., `rgba(123,47,247,0.15)`) triggering on group hover.

## 4. Layout & Spacing

When migrating themes, it is critical to retain these specific layout and spacing constraints to prevent the structure from breaking:

- **Section Wrappers:** Each major block is wrapped in a full-width section with generous vertical rhythm and horizontal padding: `w-full py-12 md:py-24 px-6 md:px-12` (occasionally `py-20`).
- **Constrainers:** Content within sections is bounded using `max-w-[1200px]`, `max-w-[1100px]`, or `max-w-[1000px]` with `mx-auto` for centering.
- **Responsive Grids & Flex:** 
  - Standard side-by-side splits use `flex flex-col md:flex-row`.
  - Service and differentiator cards adapt via CSS Grid: `grid-cols-1 md:grid-cols-2` or `md:grid-cols-3` with gaps of `gap-4 md:gap-6` or `gap-8 md:gap-12`.
- **Z-Indexing:** Absolute volumetric glows typically sit at `-z-10` or `z-0 pointer-events-none`, while the main content wrappers are brought forward with `relative z-10`.
