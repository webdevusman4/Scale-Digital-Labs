import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  Target, Gem, TrendingUp, Users, RefreshCw, Zap,
  type LucideIcon,
} from "lucide-react";

const VALUES: { num: string; icon: LucideIcon; keyword: string; title: string; desc: string }[] = [
  {
    num: "01",
    icon: Target,
    keyword: "Precision",
    title: "Craft over shortcuts",
    desc: "We take time to get it right. Every detail matters — from micro-interactions to millisecond load times. Good enough is never good enough.",
  },
  {
    num: "02",
    icon: Gem,
    keyword: "Honesty",
    title: "Radical transparency",
    desc: "No surprises. We communicate clearly, set honest timelines, and surface problems early — before they become costly.",
  },
  {
    num: "03",
    icon: TrendingUp,
    keyword: "Impact",
    title: "Results, not deliverables",
    desc: "We measure success by your business outcomes. A beautiful site that converts nobody is a failure. We own that together.",
  },
  {
    num: "04",
    icon: Users,
    keyword: "Partnership",
    title: "Clients are collaborators",
    desc: "Your domain expertise combined with our craft expertise produces the best work. We listen first, design second.",
  },
  {
    num: "05",
    icon: RefreshCw,
    keyword: "Growth",
    title: "Always be learning",
    desc: "The tools, trends and standards in our industry move fast. We stay curious, ship experiments, and share what we learn.",
  },
  {
    num: "06",
    icon: Zap,
    keyword: "Momentum",
    title: "Speed with intention",
    desc: "We move fast — but never recklessly. Decisive choices, tight feedback loops, and weekly progress keep projects on track.",
  },
];

export default function ValuesSection() {
  const valuesRef = useScrollAnimation();

  return (
    <section id="values" className="section values-section" style={{ scrollMarginTop: "6rem" }}>
      <div className="container">
        {/* Header row */}
        <div className="values-header animate-on-scroll"
          ref={valuesRef as React.RefObject<HTMLDivElement>}
        >
          <div>
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Values</h2>
          </div>
          <p className="values-intro">
            Six principles that shape every decision we make —<br />
            from the first client call to the final launch.
          </p>
        </div>

        {/* Cards grid */}
        <div className="value-cards-grid">
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="value-card animate-on-scroll"
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              {/* Faded background number */}
              <span className="value-card__bg-num">{v.num}</span>

              {/* Top row: keyword tag + icon */}
              <div className="value-card__top">
                <span className="value-card__keyword">{v.keyword}</span>
                <span className="value-card__icon"><v.icon size={20} /></span>
              </div>

              <h3 className="value-card__title">{v.title}</h3>
              <p className="value-card__desc">{v.desc}</p>

              {/* Bottom gradient bar */}
              <div className="value-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
