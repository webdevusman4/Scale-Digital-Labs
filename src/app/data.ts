export interface Project {
  title: string;
  category: string;
  year: string;
  img: string;
  color: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Meridian — Brand Redesign",
    category: "Brand Identity & Web Design",
    year: "2024",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    color: "#EEF2FF",
    description: "Complete digital rebrand for a fintech startup — new identity, design system, and marketing site that tripled inbound leads within 3 months.",
    tags: ["Branding", "Web Design", "Design System"],
  },
  {
    title: "Volta — E-Commerce Platform",
    category: "UI/UX & Development",
    year: "2024",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    color: "#FFF7ED",
    description: "A fully custom e-commerce experience for a sustainable fashion brand — from zero to $2M GMV in the first year.",
    tags: ["E-commerce", "UI/UX", "Shopify"],
  },
  {
    title: "Numex — Analytics Dashboard",
    category: "Product Design & Dev",
    year: "2025",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    color: "#F0FDF4",
    description: "A data visualization platform for a B2B SaaS company — complex data made readable, actionable, and beautiful.",
    tags: ["Dashboard", "React", "Data Viz"],
  },
  {
    title: "Bloom — Health App",
    category: "Mobile UI/UX",
    year: "2024",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    color: "#FDF4FF",
    description: "Wellness tracking app redesign that increased daily active users by 40% in the first quarter post-launch.",
    tags: ["Mobile", "UI/UX", "Health"],
  },
  {
    title: "Orion — SaaS Landing Page",
    category: "Web Design & Dev",
    year: "2025",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    color: "#F0F9FF",
    description: "A high-converting landing page for a project management SaaS — 12% trial signup rate on launch day.",
    tags: ["Web Design", "Conversion", "SaaS"],
  },
  {
    title: "Canopy — Real Estate Platform",
    category: "Full-Stack Development",
    year: "2025",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    color: "#FFFBEB",
    description: "A property search and listing platform with real-time filters, map integration, and virtual tours.",
    tags: ["Full-Stack", "Maps", "Real Estate"],
  },
];


export const stats = [
  { num: "40+", label: "Projects Delivered" },
  { num: "28", label: "Happy Clients" },
  { num: "6", label: "Years of Craft" },
  { num: "4.9★", label: "Client Rating" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We start with a deep-dive into your business, goals, audience, and competitive landscape. No assumptions.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes, moodboards, and high-fidelity mockups — we iterate until the direction feels unmistakably right.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Clean, performant code. We build for speed, accessibility, and maintainability — no bloated templates.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "QA across devices and browsers, SEO foundations, and a smooth handoff with documentation your team can use.",
  },
];
