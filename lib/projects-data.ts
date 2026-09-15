/* ── Portfolio Project Data ──────────────────────────────── */

export interface Project {
  slug: string;
  title: string;
  type: 'client' | 'concept';
  category:
    | 'SaaS Development'
    | 'Web Dev & Maintenance'
    | 'Shopify & E-commerce'
    | 'Social Media & Marketing'
    | 'Meta & Google Ads'
    | 'LinkedIn Branding';
  thumbnailImage: string;
  galleryImages: string[];
  oneLineSummary: string;
  problem: string;
  approach: string;
  result?: string;
  clientName?: string;
}

/* ── Filter Categories (canonical sitewide names) ───────── */

export const CATEGORIES = [
  'All',
  'SaaS Development',
  'Web Dev & Maintenance',
  'Shopify & E-commerce',
  'Social Media & Marketing',
  'Meta & Google Ads',
  'LinkedIn Branding',
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

/* ── 20 Project Entries ─────────────────────────────────── */
/*
 * NOTE: Placeholder text and empty image paths.
 * Replace with real data once screenshots and copy are ready.
 * Never populate `result` for concept projects.
 */

export const PROJECTS_DATA: Project[] = [
  // ─── SaaS Development (4 projects) ───────────────────
  {
    slug: 'meridian-analytics-platform',
    title: 'Meridian Analytics Platform',
    type: 'concept',
    category: 'SaaS Development',
    thumbnailImage: '/images/portfolio/meridian-analytics-thumb.png',
    galleryImages: [
      '/images/portfolio/meridian-analytics-1.png',
      '/images/portfolio/meridian-analytics-2.png',
      '/images/portfolio/meridian-analytics-3.png',
    ],
    oneLineSummary: 'A real-time analytics dashboard for SaaS metrics and user behavior tracking.',
    problem: 'Modern SaaS teams need a single pane of glass for all their product metrics — MRR, churn, usage funnels — without stitching together five different tools.',
    approach: 'We designed and built a full-stack analytics platform with real-time data pipelines, interactive chart widgets, and role-based access. The frontend was built in Next.js with a custom charting layer, backed by a scalable API.',
  },
  {
    slug: 'taskflow-project-management',
    title: 'TaskFlow Project Management',
    type: 'concept',
    category: 'SaaS Development',
    thumbnailImage: '/images/portfolio/taskflow-thumb.png',
    galleryImages: [
      '/images/portfolio/taskflow-1.png',
      '/images/portfolio/taskflow-2.png',
      '/images/portfolio/taskflow-3.png',
    ],
    oneLineSummary: 'A Kanban-style project management tool with real-time collaboration.',
    problem: 'Teams using generic project management tools often find themselves fighting the tool instead of using it — too many features, poor UX, and no real-time sync.',
    approach: 'We built a focused, opinionated project management tool centered around Kanban boards with real-time WebSocket collaboration, inline editing, and a clean drag-and-drop interface.',
  },
  {
    slug: 'vaultkey-auth-service',
    title: 'VaultKey Auth Service',
    type: 'concept',
    category: 'SaaS Development',
    thumbnailImage: '/images/portfolio/vaultkey-thumb.png',
    galleryImages: [
      '/images/portfolio/vaultkey-1.png',
      '/images/portfolio/vaultkey-2.png',
    ],
    oneLineSummary: 'A developer-first authentication and identity management platform.',
    problem: 'Rolling your own auth is a security risk; most off-the-shelf solutions are either too rigid or too expensive for early-stage startups.',
    approach: 'We designed an auth-as-a-service platform with OAuth2, magic links, and RBAC — all configurable through a clean dashboard. Built with security-first architecture and developer-friendly SDKs.',
  },
  {
    slug: 'pulseboard-monitoring',
    title: 'PulseBoard Server Monitoring',
    type: 'concept',
    category: 'SaaS Development',
    thumbnailImage: '/images/portfolio/pulseboard-thumb.png',
    galleryImages: [
      '/images/portfolio/pulseboard-1.png',
      '/images/portfolio/pulseboard-2.png',
      '/images/portfolio/pulseboard-3.png',
    ],
    oneLineSummary: 'Infrastructure monitoring with intelligent alerting and uptime tracking.',
    problem: 'DevOps teams need clear, actionable server health data — not walls of noisy graphs. Existing solutions overwhelm with data but underwhelm with actionable insight.',
    approach: 'We built a monitoring dashboard focused on signal over noise: smart thresholds, anomaly detection, and a clean status-page generator. Every alert is contextual, not just a threshold breach.',
  },

  // ─── Web Dev & Maintenance (3 projects) ──────────────
  {
    slug: 'artisan-bakery-website',
    title: 'Artisan Bakery Website',
    type: 'concept',
    category: 'Web Dev & Maintenance',
    thumbnailImage: '/images/portfolio/artisan-bakery-thumb.png',
    galleryImages: [
      '/images/portfolio/artisan-bakery-1.png',
      '/images/portfolio/artisan-bakery-2.png',
      '/images/portfolio/artisan-bakery-3.png',
    ],
    oneLineSummary: 'A warm, conversion-focused website for a premium local bakery.',
    problem: 'Small food businesses often have beautiful products but a generic, template-driven web presence that fails to convey their craft or drive online orders.',
    approach: 'We designed a bespoke website with immersive food photography, an integrated online ordering flow, and a CMS for easy menu updates. Mobile-first, fast-loading, and optimized for local SEO.',
  },
  {
    slug: 'vertex-consulting-redesign',
    title: 'Vertex Consulting Redesign',
    type: 'concept',
    category: 'Web Dev & Maintenance',
    thumbnailImage: '/images/portfolio/vertex-consulting-thumb.png',
    galleryImages: [
      '/images/portfolio/vertex-consulting-1.png',
      '/images/portfolio/vertex-consulting-2.png',
    ],
    oneLineSummary: 'A complete website overhaul for a B2B consulting firm.',
    problem: 'The firm\'s existing site was outdated, slow, and not generating qualified leads. Visitors couldn\'t quickly understand the firm\'s value proposition.',
    approach: 'We rebuilt the site from scratch with a clear service architecture, case study showcases, and a streamlined contact funnel. Performance went from a 40 Lighthouse score to 95+.',
  },
  {
    slug: 'greenleaf-nonprofit-portal',
    title: 'GreenLeaf Nonprofit Portal',
    type: 'concept',
    category: 'Web Dev & Maintenance',
    thumbnailImage: '/images/portfolio/greenleaf-thumb.png',
    galleryImages: [
      '/images/portfolio/greenleaf-1.png',
      '/images/portfolio/greenleaf-2.png',
      '/images/portfolio/greenleaf-3.png',
    ],
    oneLineSummary: 'A donation-optimized website for an environmental nonprofit.',
    problem: 'The organization had a dated WordPress site with a broken donation flow and no way to track campaign performance.',
    approach: 'We rebuilt on a modern stack with an integrated donation system, impact tracker, and volunteer signup. The new architecture reduced page load by 60% and simplified content management.',
  },

  // ─── Shopify & E-commerce (4 projects) ───────────────
  {
    slug: 'luxe-candle-co-store',
    title: 'Luxe Candle Co. Store',
    type: 'concept',
    category: 'Shopify & E-commerce',
    thumbnailImage: '/images/portfolio/luxe-candle-thumb.png',
    galleryImages: [
      '/images/portfolio/luxe-candle-1.png',
      '/images/portfolio/luxe-candle-2.png',
      '/images/portfolio/luxe-candle-3.png',
    ],
    oneLineSummary: 'A premium Shopify store for a luxury candle brand.',
    problem: 'The brand had a growing Instagram following but no e-commerce presence to convert that attention into sales.',
    approach: 'We designed a custom Shopify theme with rich product storytelling, scent-profile filtering, and a subscription bundle builder. Every touchpoint — from product page to checkout — was optimized for conversion.',
  },
  {
    slug: 'urban-threads-fashion',
    title: 'Urban Threads Fashion',
    type: 'concept',
    category: 'Shopify & E-commerce',
    thumbnailImage: '/images/portfolio/urban-threads-thumb.png',
    galleryImages: [
      '/images/portfolio/urban-threads-1.png',
      '/images/portfolio/urban-threads-2.png',
    ],
    oneLineSummary: 'A streetwear e-commerce store with lookbook-driven navigation.',
    problem: 'Streetwear shoppers browse by vibe, not category. Traditional e-commerce navigation doesn\'t match how this audience discovers and shops.',
    approach: 'We built a lookbook-first Shopify experience where collections are organized by aesthetic and mood. Quick-add-to-cart, dynamic size guides, and a loyalty program integration.',
  },
  {
    slug: 'fresh-harvest-groceries',
    title: 'Fresh Harvest Groceries',
    type: 'concept',
    category: 'Shopify & E-commerce',
    thumbnailImage: '/images/portfolio/fresh-harvest-thumb.png',
    galleryImages: [
      '/images/portfolio/fresh-harvest-1.png',
      '/images/portfolio/fresh-harvest-2.png',
      '/images/portfolio/fresh-harvest-3.png',
    ],
    oneLineSummary: 'An online grocery store with subscription box and local delivery.',
    problem: 'Local grocery businesses struggle to compete with big delivery apps. They need their own branded ordering experience without the 30% commission.',
    approach: 'We built a Shopify store with recurring subscription boxes, delivery zone management, and a real-time inventory sync. Customers can mix-and-match weekly boxes with one-time add-ons.',
  },
  {
    slug: 'peak-outdoor-gear',
    title: 'Peak Outdoor Gear',
    type: 'concept',
    category: 'Shopify & E-commerce',
    thumbnailImage: '/images/portfolio/peak-outdoor-thumb.png',
    galleryImages: [
      '/images/portfolio/peak-outdoor-1.png',
      '/images/portfolio/peak-outdoor-2.png',
    ],
    oneLineSummary: 'A rugged outdoor equipment store with gear comparison tools.',
    problem: 'Outdoor gear purchases involve heavy research. Customers were leaving the site to compare specs elsewhere and not returning.',
    approach: 'We added inline comparison tables, detailed spec sheets, and a "gear quiz" that recommends products based on activity type. The result is a self-contained research-to-purchase flow.',
  },

  // ─── Social Media & Marketing (3 projects) ──────────
  {
    slug: 'bloom-beauty-social',
    title: 'Bloom Beauty Social Campaign',
    type: 'concept',
    category: 'Social Media & Marketing',
    thumbnailImage: '/images/portfolio/bloom-beauty-thumb.png',
    galleryImages: [
      '/images/portfolio/bloom-beauty-1.png',
      '/images/portfolio/bloom-beauty-2.png',
      '/images/portfolio/bloom-beauty-3.png',
    ],
    oneLineSummary: 'A social media strategy and content system for a beauty brand.',
    problem: 'The brand was posting inconsistently with no content strategy — engagement was flat and follower growth had stalled for months.',
    approach: 'We built a complete content system: brand voice guidelines, a 90-day content calendar, visual templates, and a posting cadence optimized for each platform. We also implemented community management workflows.',
  },
  {
    slug: 'ironfit-gym-launch',
    title: 'IronFit Gym Launch Campaign',
    type: 'concept',
    category: 'Social Media & Marketing',
    thumbnailImage: '/images/portfolio/ironfit-thumb.png',
    galleryImages: [
      '/images/portfolio/ironfit-1.png',
      '/images/portfolio/ironfit-2.png',
    ],
    oneLineSummary: 'A pre-launch social media campaign for a new fitness studio.',
    problem: 'A new gym opening needed to build a waitlist and local buzz before doors opened, with zero existing audience.',
    approach: 'We ran a 6-week pre-launch campaign: teaser content, influencer partnerships, countdown mechanics, and a referral-driven waitlist. Launch day content was coordinated across Instagram, TikTok, and local community groups.',
  },
  {
    slug: 'sapphire-restaurant-social',
    title: 'Sapphire Restaurant Social',
    type: 'concept',
    category: 'Social Media & Marketing',
    thumbnailImage: '/images/portfolio/sapphire-restaurant-thumb.png',
    galleryImages: [
      '/images/portfolio/sapphire-restaurant-1.png',
      '/images/portfolio/sapphire-restaurant-2.png',
      '/images/portfolio/sapphire-restaurant-3.png',
    ],
    oneLineSummary: 'An ongoing social media management system for a fine dining restaurant.',
    problem: 'The restaurant had excellent food and ambiance but almost no digital footprint — their social accounts were dormant and inconsistent.',
    approach: 'We took over social media management with professional food photography direction, story-driven content, and a review generation strategy. We built a content library system so the team can maintain momentum independently.',
  },

  // ─── Meta & Google Ads (3 projects) ──────────────────
  {
    slug: 'swiftship-logistics-ads',
    title: 'SwiftShip Logistics Ads',
    type: 'concept',
    category: 'Meta & Google Ads',
    thumbnailImage: '/images/portfolio/swiftship-thumb.png',
    galleryImages: [
      '/images/portfolio/swiftship-1.png',
      '/images/portfolio/swiftship-2.png',
    ],
    oneLineSummary: 'A Google Ads funnel for a B2B logistics SaaS platform.',
    problem: 'The company was spending heavily on broad-match Google Ads with low conversion rates and no clear attribution from click to demo booking.',
    approach: 'We restructured their Google Ads account with intent-based keyword clusters, dedicated landing pages per service line, and conversion tracking through to CRM. Negative keyword sculpting eliminated wasted spend.',
  },
  {
    slug: 'nova-skincare-meta-ads',
    title: 'Nova Skincare Meta Ads',
    type: 'concept',
    category: 'Meta & Google Ads',
    thumbnailImage: '/images/portfolio/nova-skincare-thumb.png',
    galleryImages: [
      '/images/portfolio/nova-skincare-1.png',
      '/images/portfolio/nova-skincare-2.png',
      '/images/portfolio/nova-skincare-3.png',
    ],
    oneLineSummary: 'A Meta Ads campaign system for a DTC skincare brand.',
    problem: 'The brand was running basic boosted posts with no funnel structure. They were paying for reach but not converting.',
    approach: 'We built a full-funnel Meta Ads system: awareness video campaigns, retargeting carousels, and conversion-optimized catalog ads. Creative testing was systematic — we rotated hooks, visuals, and CTAs on a weekly cadence.',
  },
  {
    slug: 'elevate-education-ads',
    title: 'Elevate Education Ads',
    type: 'concept',
    category: 'Meta & Google Ads',
    thumbnailImage: '/images/portfolio/elevate-education-thumb.png',
    galleryImages: [
      '/images/portfolio/elevate-education-1.png',
      '/images/portfolio/elevate-education-2.png',
    ],
    oneLineSummary: 'A cross-platform ad strategy for an online education company.',
    problem: 'The company needed to acquire students at a sustainable cost across Google Search, YouTube, and Meta — but had no unified attribution or creative strategy.',
    approach: 'We designed a cross-platform funnel: Google Search captured high-intent queries, YouTube pre-roll built awareness, and Meta retargeting closed the loop. A shared UTM and analytics framework unified reporting.',
  },

  // ─── LinkedIn Branding (3 projects) ──────────────────
  {
    slug: 'zenith-ceo-linkedin',
    title: 'Zenith CEO LinkedIn Branding',
    type: 'concept',
    category: 'LinkedIn Branding',
    thumbnailImage: '/images/portfolio/zenith-ceo-thumb.png',
    galleryImages: [
      '/images/portfolio/zenith-ceo-1.png',
      '/images/portfolio/zenith-ceo-2.png',
      '/images/portfolio/zenith-ceo-3.png',
    ],
    oneLineSummary: 'A personal branding system for a fintech CEO on LinkedIn.',
    problem: 'The CEO had deep industry expertise but zero LinkedIn presence — missing a massive opportunity to build trust with investors and potential enterprise clients.',
    approach: 'We built a complete LinkedIn personal brand: optimized profile, content pillars (industry insights, founder journey, team culture), a posting cadence, and an engagement strategy targeting decision-makers in their ICP.',
  },
  {
    slug: 'apex-consulting-linkedin',
    title: 'Apex Consulting LinkedIn',
    type: 'concept',
    category: 'LinkedIn Branding',
    thumbnailImage: '/images/portfolio/apex-consulting-thumb.png',
    galleryImages: [
      '/images/portfolio/apex-consulting-1.png',
      '/images/portfolio/apex-consulting-2.png',
    ],
    oneLineSummary: 'LinkedIn company page optimization and thought-leadership for a consulting firm.',
    problem: 'The firm\'s company page was a ghost town — no regular posts, no employee advocacy, and no inbound leads from the platform.',
    approach: 'We revamped the company page, created a thought-leadership content calendar, and launched an employee advocacy program. Executives got personal content support to amplify reach.',
  },
  {
    slug: 'horizon-ventures-linkedin',
    title: 'Horizon Ventures LinkedIn',
    type: 'concept',
    category: 'LinkedIn Branding',
    thumbnailImage: '/images/portfolio/horizon-ventures-thumb.png',
    galleryImages: [
      '/images/portfolio/horizon-ventures-1.png',
      '/images/portfolio/horizon-ventures-2.png',
      '/images/portfolio/horizon-ventures-3.png',
    ],
    oneLineSummary: 'A LinkedIn presence build for a VC firm targeting deal flow.',
    problem: 'The VC firm relied entirely on warm intros for deal flow. They had no public content presence and were invisible to the broader startup ecosystem.',
    approach: 'We positioned the firm\'s partners as visible, opinionated voices in their focus verticals. Content covered market analysis, portfolio wins (with founder permission), and investment thesis pieces — all designed to attract inbound deal flow.',
  },
];

/* ── Helper Functions ───────────────────────────────────── */

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  return PROJECTS_DATA
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}
