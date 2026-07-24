export const CATEGORIES = [
  "All",
  "Web",
  "E-commerce",
  "UI/UX",
  "SaaS / Dashboards",
  "Landing Pages",
  "Custom Solutions",
];

export interface Project {
  title: string;
  category: string;
  year: string;
  tags: string[];
  img: string;
  desc: string;
  link: string;
  clientType?: string;
  isConceptCard?: boolean;
}

export const PROJECTS: Project[] = [
  // Web
  {
    title: "MetaLab — Digital Agency",
    category: "Web",
    year: "2024",
    tags: ["Web"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=580&fit=crop&auto=format",
    desc: "A premium digital product agency crafting interfaces for the world's top brands.",
    link: "https://metalab.com"
  },
  {
    title: "AKQA — Innovation Agency",
    category: "Web",
    year: "2024",
    tags: ["Web"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=580&fit=crop&auto=format",
    desc: "Global design and innovation agency that imagines, creates and delivers digital experiences.",
    link: "https://akqa.com"
  },
  {
    title: "Build in Amsterdam",
    category: "Web",
    year: "2024",
    tags: ["Web"],
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&h=580&fit=crop&auto=format",
    desc: "A digital agency that builds flagship stores and digital products.",
    link: "https://buildinams.com"
  },
  {
    title: "Pentagram — Design Studio",
    category: "Web",
    year: "2025",
    tags: ["Web"],
    img: "https://images.unsplash.com/photo-1507238691740-14c0122e4eb6?w=900&h=580&fit=crop&auto=format",
    desc: "The world's largest independently-owned design studio.",
    link: "https://pentagram.com"
  },
  {
    title: "Instrument — Digital Product Agency",
    category: "Web",
    year: "2025",
    tags: ["Web"],
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&h=580&fit=crop&auto=format",
    desc: "An independent digital agency focused on human-centric design.",
    link: "https://instrument.com"
  },

  // E-commerce — Curated Concept Builds
  {
    title: "Hardgraft – Premium E-commerce Concept",
    category: "E-commerce",
    clientType: "Luxury Retail",
    year: "2025",
    tags: ["E-commerce"],
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&h=580&fit=crop&auto=format",
    desc: "A meticulously crafted storefront concept for a luxury leather goods brand — slow fashion, raw materials, and an artisanal editorial feel.",
    link: "#",
    isConceptCard: true,
  },
  {
    title: "Norwegian Rain – Boutique Storefront",
    category: "E-commerce",
    clientType: "High-End Fashion",
    year: "2025",
    tags: ["E-commerce"],
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&h=580&fit=crop&auto=format",
    desc: "A dark, atmospheric storefront concept for a high-fashion tailored outerwear brand — muted tones, dramatic typography, and editorial imagery.",
    link: "#",
    isConceptCard: true,
  },
  {
    title: "Pure Cycles – Urban Rides Store",
    category: "E-commerce",
    clientType: "Sports & Fitness",
    year: "2025",
    tags: ["E-commerce"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=580&fit=crop&auto=format",
    desc: "A bold, energetic e-commerce concept for an urban cycling brand — vibrant palettes, action-first layouts, and seamless product configurators.",
    link: "#",
    isConceptCard: true,
  },
  {
    title: "Longboard Living – Street Culture Shop",
    category: "E-commerce",
    clientType: "Action Sports & Culture",
    year: "2025",
    tags: ["E-commerce"],
    img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=900&h=580&fit=crop&auto=format",
    desc: "An edgy, community-driven storefront concept for a street culture brand — raw grid layouts, bold type, and an authentic skate-scene identity.",
    link: "#",
    isConceptCard: true,
  },
  {
    title: "Glossier — Beauty",
    category: "E-commerce",
    year: "2025",
    tags: ["E-commerce"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=580&fit=crop&auto=format",
    desc: "A modern beauty brand leveraging clean design and user-generated social proof.",
    link: "https://glossier.com"
  },

  // UI/UX
  {
    title: "Mobbin — Design Patterns",
    category: "UI/UX",
    year: "2024",
    tags: ["UI/UX"],
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&h=580&fit=crop&auto=format",
    desc: "The world's largest UI and UX reference library for digital product designers.",
    link: "https://mobbin.com"
  },
  {
    title: "Godly — Web Design Inspiration",
    category: "UI/UX",
    year: "2024",
    tags: ["UI/UX"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=580&fit=crop&auto=format",
    desc: "Astronomically good web design inspiration from the best sites on the internet.",
    link: "https://godly.website"
  },
  {
    title: "Lapa Ninja — Landing Pages",
    category: "UI/UX",
    year: "2025",
    tags: ["UI/UX"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=580&fit=crop&auto=format",
    desc: "A gallery featuring the best landing page designs for inspiration.",
    link: "https://lapa.ninja"
  },
  {
    title: "Dribbble — Design Portfolio",
    category: "UI/UX",
    year: "2025",
    tags: ["UI/UX"],
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&h=580&fit=crop&auto=format",
    desc: "The go-to resource for discovering and connecting with designers worldwide.",
    link: "https://dribbble.com"
  },
  {
    title: "Awwwards — Web Excellence",
    category: "UI/UX",
    year: "2025",
    tags: ["UI/UX"],
    img: "https://images.unsplash.com/photo-1507238691740-14c0122e4eb6?w=900&h=580&fit=crop&auto=format",
    desc: "The awards for design, creativity and innovation on the internet.",
    link: "https://awwwards.com"
  },

  // SaaS / Dashboards
  {
    title: "Linear — Issue Tracking",
    category: "SaaS / Dashboards",
    year: "2024",
    tags: ["SaaS / Dashboards"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=580&fit=crop&auto=format",
    desc: "A better way to build products, offering an incredibly fast and beautiful interface.",
    link: "https://linear.app"
  },
  {
    title: "Raycast — Productivity",
    category: "SaaS / Dashboards",
    year: "2024",
    tags: ["SaaS / Dashboards"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=580&fit=crop&auto=format",
    desc: "A blazing fast, totally extendable launcher that supercharges productivity.",
    link: "https://raycast.com"
  },
  {
    title: "Vercel — Frontend Cloud",
    category: "SaaS / Dashboards",
    year: "2025",
    tags: ["SaaS / Dashboards"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=580&fit=crop&auto=format",
    desc: "The platform for frontend developers, providing the speed and reliability innovators need.",
    link: "https://vercel.com"
  },
  {
    title: "Stripe — Financial Infra",
    category: "SaaS / Dashboards",
    year: "2025",
    tags: ["SaaS / Dashboards"],
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&h=580&fit=crop&auto=format",
    desc: "Financial infrastructure platform for the internet with a world-class dashboard.",
    link: "https://stripe.com"
  },
  {
    title: "Supabase — Open Source Firebase",
    category: "SaaS / Dashboards",
    year: "2025",
    tags: ["SaaS / Dashboards"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=580&fit=crop&auto=format",
    desc: "Build in a weekend. Scale to millions. An open source Firebase alternative.",
    link: "https://supabase.com"
  },

  // Landing Pages
  {
    title: "Framer — Site Builder",
    category: "Landing Pages",
    year: "2024",
    tags: ["Landing Pages"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=580&fit=crop&auto=format",
    desc: "Design and publish stunning sites with zero code, featuring a jaw-dropping landing page.",
    link: "https://framer.com"
  },
  {
    title: "Cron — Calendar",
    category: "Landing Pages",
    year: "2024",
    tags: ["Landing Pages"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=580&fit=crop&auto=format",
    desc: "The next-generation calendar for professionals and teams.",
    link: "https://cron.com"
  },
  {
    title: "Arc — Browser",
    category: "Landing Pages",
    year: "2025",
    tags: ["Landing Pages"],
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&h=580&fit=crop&auto=format",
    desc: "A browser that doesn't just meet your needs—it anticipates them.",
    link: "https://arc.net"
  },
  {
    title: "Amie — Productivity",
    category: "Landing Pages",
    year: "2025",
    tags: ["Landing Pages"],
    img: "https://images.unsplash.com/photo-1507238691740-14c0122e4eb6?w=900&h=580&fit=crop&auto=format",
    desc: "The joyful productivity app where scheduling meets to-do lists.",
    link: "https://amie.so"
  },
  {
    title: "Reflect — Note Taking",
    category: "Landing Pages",
    year: "2025",
    tags: ["Landing Pages"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=580&fit=crop&auto=format",
    desc: "Think better with Reflect, the note-taking app that mirrors your mind.",
    link: "https://reflect.app"
  },

  // Custom Solutions
  {
    title: "Palantir — Data Analytics",
    category: "Custom Solutions",
    year: "2024",
    tags: ["Custom Solutions"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=580&fit=crop&auto=format",
    desc: "Foundational software of tomorrow, delivered today for the world's most critical institutions.",
    link: "https://palantir.com"
  },
  {
    title: "Snowflake — Data Cloud",
    category: "Custom Solutions",
    year: "2024",
    tags: ["Custom Solutions"],
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&h=580&fit=crop&auto=format",
    desc: "Mobilize your data, apps, and AI across any cloud.",
    link: "https://snowflake.com"
  },
  {
    title: "Databricks — Data & AI",
    category: "Custom Solutions",
    year: "2025",
    tags: ["Custom Solutions"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=580&fit=crop&auto=format",
    desc: "The world's first data intelligence platform powered by generative AI.",
    link: "https://databricks.com"
  },
  {
    title: "Retool — Internal Tools",
    category: "Custom Solutions",
    year: "2025",
    tags: ["Custom Solutions"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=580&fit=crop&auto=format",
    desc: "Build internal tools remarkably fast. Stop wrestling with UI libraries, hacky endpoints, and React state.",
    link: "https://retool.com"
  },
  {
    title: "Thoughtworks — Tech Consultancy",
    category: "Custom Solutions",
    year: "2025",
    tags: ["Custom Solutions"],
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&h=580&fit=crop&auto=format",
    desc: "A global technology consultancy that integrates strategy, design, and engineering.",
    link: "https://thoughtworks.com"
  }
];
