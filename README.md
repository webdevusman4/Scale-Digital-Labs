# ScaleDigitalLabs

Premium agency website for **ScaleDigitalLabs** — a digital growth studio offering SaaS development, web maintenance, Shopify stores, social media marketing, paid ads, and LinkedIn branding.

**Live:** [scaledigitallabs.netlify.app](https://scaledigitallabs.netlify.app)

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | [Next.js](https://nextjs.org) (App Router) | 15.5.25 |
| **Language** | TypeScript | 5.9.3 |
| **UI** | React | 19.2.1 |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) (v4, via PostCSS plugin) | 4.1.11 |
| **Animations** | [Motion](https://motion.dev) (framer-motion) | 13.2.0 |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (Hi2, Fa6) + Custom Neon SVG icons | 5.7.0 |
| **Utilities** | clsx + tailwind-merge (`cn()` helper) | — |
| **Deployment** | [Netlify](https://netlify.com) with `@netlify/plugin-nextjs` | — |
| **Output** | Standalone (`next build` → `.next/`) | — |

---

## Project Structure

```
Scale-Digital-Labs/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (navbar, background, SVG defs)
│   ├── page.tsx                  # Home page (/)
│   ├── globals.css               # Global styles, design tokens, shared classes
│   ├── about/
│   │   └── page.tsx              # About page (/about)
│   ├── services/
│   │   └── page.tsx              # Services page (/services)
│   ├── contact/
│   │   └── page.tsx              # Contact page (/contact)
│   └── portfolio/
│       ├── page.tsx              # Portfolio grid (/portfolio)
│       └── [slug]/
│           └── page.tsx          # Project detail (/portfolio/[slug])
│
├── components/                   # React components (by feature)
│   ├── navbar.tsx                # Fixed floating nav with active states
│   ├── footer.tsx                # Global footer with link columns
│   ├── custom-cursor.tsx         # Custom cursor effect (desktop)
│   ├── meteor-hero-background.tsx # Canvas-based particle/meteor animation
│   ├── agency-intro.tsx          # Home: agency introduction section
│   ├── core-values.tsx           # Home: sticky core values cards
│   ├── services-showcase.tsx     # Home: services preview grid
│   ├── process-section.tsx       # Home: process timeline
│   ├── tech-marquee.tsx          # Scrolling tech logo marquee
│   ├── typewriter-text.tsx       # Typewriter text animation
│   │
│   ├── about/                    # About page components
│   │   ├── about-hero.tsx        # Two-column hero (text + image)
│   │   ├── what-we-do.tsx        # Service categories overview
│   │   ├── why-choose-us.tsx     # Differentiators grid
│   │   ├── our-process.tsx       # Step-by-step process timeline
│   │   ├── our-commitment.tsx    # Values/commitment section
│   │   ├── approach-grid.tsx     # Approach cards
│   │   ├── architecture-grid.tsx # Architecture overview
│   │   └── core-dna.tsx          # Engineering DNA section
│   │
│   ├── services/                 # Services page components
│   │   ├── services-hero.tsx     # Two-column hero (text + image)
│   │   ├── services-overview.tsx # Jump-link card grid (6 services)
│   │   ├── service-block.tsx     # Reusable deep-dive block (×6) + data
│   │   ├── services-faq.tsx      # FAQ accordion
│   │   └── services-cta.tsx      # Final CTA glass card
│   │
│   ├── contact/                  # Contact page components
│   │   ├── contact-hero.tsx      # Two-column hero with embedded form
│   │   ├── direct-contact.tsx    # Email + socials row
│   │   ├── what-happens-next.tsx # 3-step process cards
│   │   └── faq-accordion.tsx     # Contact FAQ
│   │
│   ├── portfolio/                # Portfolio page components
│   │   ├── portfolio-hero.tsx    # Compact text-only hero
│   │   ├── portfolio-grid.tsx    # Filter tabs + project card grid + load more
│   │   ├── portfolio-cta.tsx     # Portfolio-specific CTA
│   │   └── project-detail.tsx    # Shared detail template for /portfolio/[slug]
│   │
│   └── ui/                       # Shared UI primitives
│       ├── neon-icon.tsx          # Custom SVG icon system with neon glow
│       ├── screenshot-frame.tsx   # Browser-window frame for screenshots
│       ├── glass-card.tsx         # Glassmorphism card component
│       ├── scroll-reveal.tsx      # Scroll-triggered reveal wrapper
│       ├── section-divider.tsx    # Animated gradient divider line
│       ├── spotlight-card.tsx     # Spotlight hover effect card
│       ├── word-rotator.tsx       # Rotating word animation
│       └── service-illustration.tsx # Service-specific illustrations
│
├── lib/                          # Shared utilities and data
│   ├── utils.ts                  # cn() helper (clsx + tailwind-merge)
│   └── projects-data.ts          # Portfolio data schema, 20 entries, helpers
│
├── hooks/                        # Custom React hooks
│   └── use-mobile.ts             # Mobile viewport detection
│
├── public/
│   └── images/                   # Static image assets
│       ├── about-hero.png
│       ├── service-hero.png
│       ├── service-*.png          # Per-service illustrations (×6)
│       └── portfolio/             # Portfolio project screenshots
│
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS (Tailwind v4 + autoprefixer)
├── netlify.toml                  # Netlify build config
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** (ships with Node) or **bun**

### Install & Run

```bash
# Clone
git clone https://github.com/webdevusman4/Scale-Digital-Labs.git
cd Scale-Digital-Labs

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Start development server with HMR |
| `build` | `next build` | Create optimized production build |
| `start` | `next start` | Serve the production build locally |
| `lint` | `eslint .` | Run ESLint |
| `clean` | `next clean` | Clear the `.next` build cache |

> **Note:** If builds fail with `Zone Allocation failed - process out of memory`, increase the Node heap:
> ```bash
> NODE_OPTIONS="--max-old-space-size=4096" npm run build
> ```

---

## Design System

### Color Palette

The entire site uses a single **three-stop gradient** as its primary identity:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-purple` | `#7B2FF7` | Gradient start, primary accent |
| `--color-fuchsia` | `#F72585` | Gradient midpoint, CTAs, glows |
| `--color-orange` | `#FF8C42` | Gradient end, warm accents |
| `--gradient-primary` | `linear-gradient(135deg, #7B2FF7 0%, #F72585 55%, #FF8C42 100%)` | Buttons, borders, text highlights |
| Background | `#0B0F19` | Body background with subtle grid lines |

### Shared CSS Classes

Defined in [`globals.css`](app/globals.css):

| Class | Purpose |
|-------|---------|
| `.interactive-card` | Glassmorphism card with hover lift + gradient border reveal |
| `.static-card` | Same glass look, no hover effects |
| `.full-height-hero` | Desktop-only viewport height (mobile: `fit-content`) |
| `.about-hero-height` | Same as above, scoped to About page |
| `.project-screenshot-frame` | Uniform 16:10 aspect ratio frame for portfolio screenshots |
| `.text-gradient-primary` | Gradient text utility (Tailwind `@layer utilities`) |
| `.animate-marquee` | Infinite horizontal scroll for tech logos |
| `.animate-neon-glow-pulse` | Subtle box-shadow pulse on neon cards |
| `.animate-icon-glow` | Drop-shadow pulse on icons |

### Card System

Two tiers, both in `globals.css`:

```
.interactive-card          .static-card
├─ bg: white/4%            ├─ bg: white/4%
├─ backdrop-blur: 24px     ├─ backdrop-blur: 24px
├─ border: white/12%       ├─ border: white/12%
├─ border-radius: 20px     ├─ border-radius: 20px
├─ cursor: pointer         └─ cursor: default
└─ hover:
   ├─ translateY(-4px)
   ├─ scale(1.02)
   ├─ gradient border
   └─ glow box-shadow
```

### Icon System

[`neon-icon.tsx`](components/ui/neon-icon.tsx) provides a custom SVG icon library with 20 named icons. Each icon renders with the site's gradient stroke and an optional glow animation.

```tsx
import { NeonIcon } from '@/components/ui/neon-icon';
<NeonIcon icon="server-stack" size={28} animated />
```

---

## Page Architecture

### Root Layout (`app/layout.tsx`)

Every page inherits:
1. **Global SVG gradient definition** (`#service-icon-gradient`) — used by icons that reference `stroke="url(#service-icon-gradient)"`
2. **`<MeteorHeroBackground />`** — Full-viewport canvas with particles, constellation lines, and comet trails
3. **`<CustomCursor />`** — Gradient cursor ring on desktop
4. **`<Navbar />`** — Fixed floating nav with scroll-aware backdrop blur

### Pages

| Route | Page | Sections |
|-------|------|----------|
| `/` | Home | Hero → Tech Marquee → Agency Intro → Core Values → Services Showcase → Process → Footer |
| `/about` | About | Hero (text + image) → What We Do → Why Choose Us → Our Process → Our Commitment → Footer |
| `/services` | Services | Hero (text + image) → Tech Marquee → Overview Grid → 6× Service Deep-Dives → Process → FAQ → CTA → Footer |
| `/portfolio` | Portfolio | Hero (text-only) → Filter Tabs + Project Grid + Load More → CTA → Footer |
| `/portfolio/[slug]` | Project Detail | Back Link → Header → Hero Screenshot → Problem / Approach → Result (conditional) → Gallery → Related Projects → CTA → Footer |
| `/contact` | Contact | Hero (text + form) → Direct Contact → What Happens Next → FAQ → Footer |

---

## Portfolio System

### Data Schema (`lib/projects-data.ts`)

All 20 projects live in a single `PROJECTS_DATA` array. Each entry follows the `Project` interface:

```typescript
interface Project {
  slug: string;                  // URL-safe identifier
  title: string;
  type: 'client' | 'concept';   // Honesty flag — controls what's displayed
  category: string;              // One of the 6 canonical service names
  thumbnailImage: string;        // Grid card screenshot
  galleryImages: string[];       // Detail page screenshots (2–4)
  oneLineSummary: string;
  problem: string;               // "The Problem" section
  approach: string;              // "The Approach" section
  result?: string;               // ONLY for verified client results
  clientName?: string;           // Optional, can be anonymized
}
```

### Honesty Rule

- **`type: 'client'`** → Green dot tag, result shown if provided
- **`type: 'concept'`** → Gray dot tag, result **never** shown, displays "Concept project — self-directed"
- `result` is **never** populated for concept projects, even with plausible placeholders

### Filter Categories

The filter tabs use the exact 6 service names established sitewide:
`All | SaaS Development | Web Dev & Maintenance | Shopify & E-commerce | Social Media & Marketing | Meta & Google Ads | LinkedIn Branding`

### Screenshot Consistency Frame

Every project screenshot is wrapped in `<ScreenshotFrame />`, which applies:
- Fixed `16:10` aspect ratio
- `object-fit: cover` + `object-position: top`
- Chrome bar with 3 dots overlay (DOM elements, not baked into images)

### Dynamic Routes

`/portfolio/[slug]` uses `generateStaticParams()` to pre-render all 20 project pages at build time (SSG). Metadata is generated dynamically per project.

### Helper Functions

```typescript
getProjectBySlug(slug: string): Project | undefined
getRelatedProjects(slug: string, limit?: number): Project[]
```

---

## Responsive Strategy

Follows the mobile-first breakpoint system defined in [`.agents/rules/responsive.md`](.agents/rules/responsive.md):

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Base | 0px | Single column, stacked layout |
| `sm` | 480px | Slightly larger type |
| `md` | 768px | Side-by-side layouts activate |
| `lg` | 1024px | Full desktop grid, extra spacing |
| `xl` | 1280px | Desktop type scale locks in |
| `2xl` | 1536px | Content caps at `max-width` |

### Key Rules

1. **`min-height: 100vh` is desktop-only** — applied via `.full-height-hero` class which defaults to `fit-content` and only activates at `≥768px`
2. **Short viewport safety** — `@media (min-width: 768px) and (max-height: 800px)` relaxes forced heights
3. **Test matrix** — portrait: 375×667, 390×844, 768×1024 · landscape: 667×375, 1024×768, 1920×1080

---

## Animation System

All animations use [Motion](https://motion.dev) (the `motion/react` import):

| Pattern | Usage |
|---------|-------|
| `initial` + `animate` | Page-load entrance animations (heroes) |
| `whileInView` + `viewport={{ once: true }}` | Scroll-triggered reveals (sections, cards) |
| `AnimatePresence` | Filter tab transitions, form success state |
| `layout` | Portfolio grid card reflow on filter change |
| CSS `@keyframes` | Marquee scroll, icon glow pulse, neon card pulse |

---

## Deployment

### Netlify (Production)

Configured via [`netlify.toml`](netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

The `@netlify/plugin-nextjs` adapter handles SSR, ISR, and edge functions automatically. Output mode is `standalone`.

### Environment Variables

See [`.env.example`](.env.example) for required variables. Currently uses `@google/genai` for any AI-powered features.

---

## Development Notes

### Adding a New Portfolio Project

1. Add the project entry to `PROJECTS_DATA` in [`lib/projects-data.ts`](lib/projects-data.ts)
2. Place screenshots in `public/images/portfolio/`
3. Set `type: 'client'` only for real client work with verifiable results
4. The grid page and detail route pick it up automatically — no new files needed

### Adding a New Service

1. Add entry to `SERVICES_DATA` in [`components/services/service-block.tsx`](components/services/service-block.tsx)
2. Add a matching icon name to [`components/ui/neon-icon.tsx`](components/ui/neon-icon.tsx) if needed
3. Update the filter categories in [`lib/projects-data.ts`](lib/projects-data.ts) if it's a net-new category
4. Update footer links in [`components/footer.tsx`](components/footer.tsx)

### Shared SVG Gradient

The global SVG gradient `#service-icon-gradient` is defined in [`app/layout.tsx`](app/layout.tsx) and referenced by icons that use `stroke="url(#service-icon-gradient)"`. This must remain in the root layout to be available everywhere.

---

## License

Private repository. All rights reserved © ScaleDigitalLabs.
