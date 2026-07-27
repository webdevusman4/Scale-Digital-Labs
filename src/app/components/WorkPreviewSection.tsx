import { useState } from "react";
import { Link } from "react-router";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CATEGORIES = [
  "All",
  "Web",
  "E-commerce",
  "UI/UX",
  "SaaS / Dashboards",
  "Landing Pages",
  "Custom Solutions",
];

const PROJECTS = [
  // Web
  {
    title: "MetaLab — Digital Agency",
    category: "Web",
    year: "2024",
    tags: ["Web"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "A premium digital product agency crafting interfaces for the world's top brands.",
    link: "https://metalab.com"
  },
  {
    title: "AKQA — Innovation Agency",
    category: "Web",
    year: "2024",
    tags: ["Web"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Global design and innovation agency that imagines, creates and delivers digital experiences.",
    link: "https://akqa.com"
  },
  {
    title: "Build in Amsterdam",
    category: "Web",
    year: "2024",
    tags: ["Web"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "A digital agency that builds flagship stores and digital products.",
    link: "https://buildinams.com"
  },
  {
    title: "Pentagram — Design Studio",
    category: "Web",
    year: "2025",
    tags: ["Web"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "The world's largest independently-owned design studio.",
    link: "https://pentagram.com"
  },
  {
    title: "Instrument — Digital Product Agency",
    category: "Web",
    year: "2025",
    tags: ["Web"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
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
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
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
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
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
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
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
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "An edgy, community-driven storefront concept for a street culture brand — raw grid layouts, bold type, and an authentic skate-scene identity.",
    link: "#",
    isConceptCard: true,
  },

  // UI/UX
  {
    title: "Mobbin — Design Patterns",
    category: "UI/UX",
    year: "2024",
    tags: ["UI/UX"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "The world's largest UI and UX reference library for digital product designers.",
    link: "https://mobbin.com"
  },
  {
    title: "Godly — Web Design Inspiration",
    category: "UI/UX",
    year: "2024",
    tags: ["UI/UX"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Astronomically good web design inspiration from the best sites on the internet.",
    link: "https://godly.website"
  },
  {
    title: "Lapa Ninja — Landing Pages",
    category: "UI/UX",
    year: "2025",
    tags: ["UI/UX"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "A gallery featuring the best landing page designs for inspiration.",
    link: "https://lapa.ninja"
  },
  {
    title: "Dribbble — Design Portfolio",
    category: "UI/UX",
    year: "2025",
    tags: ["UI/UX"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "The go-to resource for discovering and connecting with designers worldwide.",
    link: "https://dribbble.com"
  },
  {
    title: "Awwwards — Web Excellence",
    category: "UI/UX",
    year: "2025",
    tags: ["UI/UX"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "The awards for design, creativity and innovation on the internet.",
    link: "https://awwwards.com"
  },

  // SaaS / Dashboards
  {
    title: "Linear — Issue Tracking",
    category: "SaaS / Dashboards",
    year: "2024",
    tags: ["SaaS / Dashboards"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "A better way to build products, offering an incredibly fast and beautiful interface.",
    link: "https://linear.app"
  },
  {
    title: "Raycast — Productivity",
    category: "SaaS / Dashboards",
    year: "2024",
    tags: ["SaaS / Dashboards"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "A blazing fast, totally extendable launcher that supercharges productivity.",
    link: "https://raycast.com"
  },
  {
    title: "Vercel — Frontend Cloud",
    category: "SaaS / Dashboards",
    year: "2025",
    tags: ["SaaS / Dashboards"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "The platform for frontend developers, providing the speed and reliability innovators need.",
    link: "https://vercel.com"
  },
  {
    title: "Stripe — Financial Infra",
    category: "SaaS / Dashboards",
    year: "2025",
    tags: ["SaaS / Dashboards"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Financial infrastructure platform for the internet with a world-class dashboard.",
    link: "https://stripe.com"
  },
  {
    title: "Supabase — Open Source Firebase",
    category: "SaaS / Dashboards",
    year: "2025",
    tags: ["SaaS / Dashboards"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Build in a weekend. Scale to millions. An open source Firebase alternative.",
    link: "https://supabase.com"
  },

  // Landing Pages
  {
    title: "Framer — Site Builder",
    category: "Landing Pages",
    year: "2024",
    tags: ["Landing Pages"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Design and publish stunning sites with zero code, featuring a jaw-dropping landing page.",
    link: "https://framer.com"
  },
  {
    title: "Cron — Calendar",
    category: "Landing Pages",
    year: "2024",
    tags: ["Landing Pages"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "The next-generation calendar for professionals and teams.",
    link: "https://cron.com"
  },
  {
    title: "Arc — Browser",
    category: "Landing Pages",
    year: "2025",
    tags: ["Landing Pages"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "A browser that doesn't just meet your needs—it anticipates them.",
    link: "https://arc.net"
  },
  {
    title: "Amie — Productivity",
    category: "Landing Pages",
    year: "2025",
    tags: ["Landing Pages"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "The joyful productivity app where scheduling meets to-do lists.",
    link: "https://amie.so"
  },
  {
    title: "Reflect — Note Taking",
    category: "Landing Pages",
    year: "2025",
    tags: ["Landing Pages"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Think better with Reflect, the note-taking app that mirrors your mind.",
    link: "https://reflect.app"
  },

  // Custom Solutions
  {
    title: "Palantir — Data Analytics",
    category: "Custom Solutions",
    year: "2024",
    tags: ["Custom Solutions"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Foundational software of tomorrow, delivered today for the world's most critical institutions.",
    link: "https://palantir.com"
  },
  {
    title: "Snowflake — Data Cloud",
    category: "Custom Solutions",
    year: "2024",
    tags: ["Custom Solutions"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Mobilize your data, apps, and AI across any cloud.",
    link: "https://snowflake.com"
  },
  {
    title: "Databricks — Data & AI",
    category: "Custom Solutions",
    year: "2025",
    tags: ["Custom Solutions"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "The world's first data intelligence platform powered by generative AI.",
    link: "https://databricks.com"
  },
  {
    title: "Retool — Internal Tools",
    category: "Custom Solutions",
    year: "2025",
    tags: ["Custom Solutions"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "Build internal tools remarkably fast. Stop wrestling with UI libraries, hacky endpoints, and React state.",
    link: "https://retool.com"
  },
  {
    title: "Thoughtworks — Tech Consultancy",
    category: "Custom Solutions",
    year: "2025",
    tags: ["Custom Solutions"],
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'></svg>",
    desc: "A global technology consultancy that integrates strategy, design, and engineering.",
    link: "https://thoughtworks.com"
  }
];

export default function WorkPreviewSection() {
  const workRef = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS.slice(0, 6) // Only show the first 6 projects on the home page when 'All' is selected
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header section-header--row">
          <div
            ref={workRef as React.RefObject<HTMLDivElement>}
            className="animate-on-scroll"
          >
            <span className="section-label">Check Our Work</span>
            <h2 className="section-title">Selected Projects</h2>
          </div>
          <Link to="/work" className="btn btn--outline">
            View All →
          </Link>
        </div>

        {/* ── Filter Bar ── */}
        <div className="filter-bar" role="group" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-pill${activeFilter === cat ? " filter-pill--active" : ""}`}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Projects Grid ── */}
        <div className="projects-grid projects-grid--3">
          {filteredProjects.map((proj, i) => (
            <div
              key={proj.title}
              className="project-card animate-on-scroll"
              style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <div className="project-card__img-wrap">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="project-card__img"
                />
                <div className="project-card__overlay">
                  <div className="project-card__overlay-row">
                    <div>
                      {(proj as any).clientType && (
                        <p className="project-card__concept-badge">{(proj as any).clientType}</p>
                      )}
                      <p className="project-card__overlay-cat">{proj.category}</p>
                      <p className="project-card__overlay-title">{proj.title}</p>
                    </div>
                    {(proj as any).isConceptCard ? (
                      <a href="#" className="project-card__view-btn project-card__view-btn--concept">View Concept ✦</a>
                    ) : (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-card__view-btn">View →</a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-card__meta">
                <p className="project-card__category">
                  {proj.category} · {proj.year}
                </p>
                <h3 className="project-card__title">{proj.title}</h3>
              </div>
              <div className="project-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
