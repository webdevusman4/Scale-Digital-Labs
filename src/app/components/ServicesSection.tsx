import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  Code2,
  ShoppingBag,
  Search,
  Target,
  Share2,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

interface Service {
  number: string;
  category: string;
  title: string;
  description: string;
  features: [string, string, string];
  icon: LucideIcon;
}

const SERVICES: Service[] = [
  {
    number: "01",
    category: "ENGINEERING & SUPPORT",
    title: "Web Dev & Maintenance",
    description:
      "Building robust, custom websites with ongoing technical care, security, and updates to ensure flawless performance.",
    features: ["Custom UI/UX", "Speed Optimization", "Priority Bug Fixes"],
    icon: Code2,
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "E-Commerce Solutions",
    description:
      "Scalable online storefronts designed to maximize conversions, from custom WordPress setups to complete Shopify builds.",
    features: [
      "Shopify Development",
      "WooCommerce (WordPress)",
      "Payment Integrations",
    ],
    icon: ShoppingBag,
  },
  {
    number: "03",
    category: "SEARCH & VIDEO",
    title: "Google Ads",
    description:
      "High-intent campaigns to capture leads actively searching for you across Google Search, YouTube, and the wider internet.",
    features: [
      "YouTube Video Ads",
      "Search & Display Network",
      "ROI Optimization",
    ],
    icon: Search,
  },
  {
    number: "04",
    category: "PAID SOCIAL",
    title: "Meta Ads (FB, IG, WA)",
    description:
      "Scroll-stopping creatives and targeted advertising across the entire Meta ecosystem: Facebook, Instagram, and WhatsApp.",
    features: ["Audience Retargeting", "WhatsApp Funnels", "Creative Testing"],
    icon: Target,
  },
  {
    number: "05",
    category: "ORGANIC GROWTH",
    title: "Social Media Management",
    description:
      "Consistent, engaging organic content that builds your community, brand loyalty, and overall digital presence.",
    features: ["Content Calendars", "Community Engagement", "Trend Analysis"],
    icon: Share2,
  },
  {
    number: "06",
    category: "B2B OUTREACH",
    title: "Branding & LinkedIn",
    description:
      "Establishing industry authority and driving high-ticket B2B connections through strategic LinkedIn management.",
    features: [
      "Profile Optimization",
      "Thought Leadership",
      "Lead Generation",
    ],
    icon: Briefcase,
  },
];

export default function ServicesSection() {
  const servicesRef = useScrollAnimation();

  return (
    <section id="services" className="section section--alt" style={{ scrollMarginTop: "6rem" }}>
      <div className="container">
        <div className="section-header section-header--row">
          <div
            ref={servicesRef as React.RefObject<HTMLDivElement>}
            className="animate-on-scroll"
          >
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
          </div>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="service-card animate-on-scroll"
              style={{ "--delay": `${i * 140}ms` } as React.CSSProperties}
            >
              {/* Faded background number */}
              <span className="service-card__bg-num">{svc.number}</span>

              {/* Inner flex column to fill full height */}
              <div className="service-card__inner">
                {/* Top row: category label + icon */}
                <div className="service-card__top">
                  <span className="service-card__keyword">{svc.category}</span>
                  <div className="service-card__icon">
                    <svc.icon size={20} />
                  </div>
                </div>

                {/* Title */}
                <div className="service-card__name">{svc.title}</div>

                {/* Description */}
                <p className="service-card__desc">{svc.description}</p>

                {/* Features list */}
                <ul className="service-card__features">
                  {svc.features.map((feat, fi) => (
                    <li key={fi} className="service-card__feature-item">
                      <span className="service-card__feature-dot" aria-hidden="true">▸</span>
                      {feat}
                    </li>
                  ))}
                </ul>


              </div>

              {/* Bottom gradient bar */}
              <div className="service-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
