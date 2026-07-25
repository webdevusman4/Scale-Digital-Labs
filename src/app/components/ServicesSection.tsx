import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Globe, Palette, Cloud, Bot, Image, Wrench, type LucideIcon } from "lucide-react";

const SERVICES: { num: string; keyword: string; icon: LucideIcon; name: string; desc: string; comingSoon?: boolean }[] = [
  { num: "01", keyword: "Development", icon: Globe, name: "Web Development", desc: "Building robust, scalable websites and web applications tailored to your business needs." },
  { num: "02", keyword: "Experience", icon: Palette, name: "UI/UX Design", desc: "Crafting intuitive, user-centered interfaces that deliver seamless digital experiences." },
  { num: "03", keyword: "SaaS", icon: Cloud, name: "SaaS Development", desc: "Scalable software solutions designed to transform your business operations.", comingSoon: true },
  { num: "04", keyword: "Automation", icon: Bot, name: "AI Automation", desc: "Intelligent automation solutions to streamline workflows and boost productivity.", comingSoon: true },
  { num: "05", keyword: "Visual", icon: Image, name: "Graphic Design", desc: "Creative visual identity and branding that makes your business stand out." },
  { num: "06", keyword: "Support", icon: Wrench, name: "Website Maintenance & Support", desc: "Ongoing website care, updates, and technical support to keep your site running smoothly." },
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
              className={`service-card animate-on-scroll ${svc.comingSoon ? 'service-card--coming-soon' : ''}`}
              style={{ "--delay": `${i * 140}ms` } as React.CSSProperties}
            >
              <span className="service-card__bg-num">{svc.num}</span>
              {svc.comingSoon && <span className="service-card__badge">Coming Soon</span>}
              <div className="service-card__top">
                <span className="service-card__keyword">{svc.keyword}</span>
                <div className="service-card__icon"><svc.icon size={20} /></div>
              </div>
              <div className="service-card__name">{svc.name}</div>
              <p className="service-card__desc">{svc.desc}</p>
              <span className="service-card__more">Learn more →</span>
              <div className="service-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
