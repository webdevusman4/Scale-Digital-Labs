import { useEffect, useRef, useState } from "react";
import { Search, Map, Code, Gauge, Rocket, TrendingUp } from "lucide-react";

const PROCESS_STEPS = [
  {
    id: "01",
    category: "DISCOVERY",
    title: "Data Extraction & Scoping",
    desc: "We strip away the fluff, figure out exactly who your users are, and define the exact features to prevent scope creep.",
    icon: Search,
  },
  {
    id: "02",
    category: "BLUEPRINTING",
    title: "System Architecture",
    desc: "Mapping out the database tables and logic flow using UML diagrams before writing a single line of frontend code.",
    icon: Map,
  },
  {
    id: "03",
    category: "PRODUCTION",
    title: "Engineering & Build",
    desc: "Spinning up the Next.js environment, writing strictly typed logic, and building modular components using Tailwind CSS.",
    icon: Code,
  },
  {
    id: "04",
    category: "QUALITY ASSURANCE",
    title: "Optimization & Testing",
    desc: "Stress-testing mobile responsiveness, running Lighthouse speed tests, and ensuring sub-millisecond load times.",
    icon: Gauge,
  },
  {
    id: "05",
    category: "DEPLOYMENT",
    title: "Zero-Downtime Handoff",
    desc: "Executing a live production release and handing over all source code, environment variables, and admin credentials.",
    icon: Rocket,
  },
  {
    id: "06",
    category: "SCALE",
    title: "Iteration & Support",
    desc: "Continuous monitoring, revenue scaling optimizations, and technical support to keep your new digital infrastructure running flawlessly.",
    icon: TrendingUp,
  },
];

/* ── Shared inner card content — used by both desktop & mobile maps ── */
const StepContent = ({ step }: { step: typeof PROCESS_STEPS[number] }) => {
  const Icon = step.icon;
  return (
    <>
      <span className="value-card__bg-num">{step.id}</span>
      <div className="value-card__top">
        <span className="value-card__keyword">{step.category}</span>
        <span className="value-card__icon">
          <Icon size={20} />
        </span>
      </div>
      <h3 className="value-card__title text-[1.5rem]">{step.title}</h3>
      <p className="value-card__desc">{step.desc}</p>
      <div className="value-card__bar" />
    </>
  );
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ── Scroll-progress listener ── */
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionH = el.offsetHeight;
      const viewportH = window.innerHeight;

      // How far past the section top we've scrolled
      const scrolled = -rect.top;
      // Total scrollable travel before section un-sticks
      const total = sectionH - viewportH;

      const progress = Math.max(0, Math.min(1, scrolled / total));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Derived values ── */
  const STEP_COUNT = PROCESS_STEPS.length;
  const activeStep = Math.min(
    STEP_COUNT - 1,
    Math.floor(scrollProgress * STEP_COUNT)
  );

  /* Per-card animation state from scroll progress */
  const getCardStyle = (index: number) => {
    const bandSize = 1 / STEP_COUNT;
    const bandStart = index * bandSize;
    const bandEnd = bandStart + bandSize;
    const isLast = index === STEP_COUNT - 1;

    // Sub-progress within this card's band (0 → 1)
    const subProgress = Math.max(
      0,
      Math.min(1, (scrollProgress - bandStart) / bandSize)
    );

    const isActive = scrollProgress >= bandStart && scrollProgress < bandEnd;
    const isPast = scrollProgress >= bandEnd;

    // Last card stays visible once reached — never fades out
    if (isLast && (isActive || isPast)) {
      const fadeIn = isActive ? Math.min(1, subProgress / 0.3) : 1;
      return { opacity: fadeIn, y: 12 * (1 - fadeIn), z: 10 };
    }

    if (isActive) {
      // Fade in during first 30% of band, hold for rest
      const fadeIn = Math.min(1, subProgress / 0.3);
      return { opacity: fadeIn, y: 12 * (1 - fadeIn), z: 10 };
    }

    if (isPast) {
      return { opacity: 0, y: -12, z: 0 };
    }

    // Future: invisible, waiting below
    return { opacity: 0, y: 12, z: 0 };
  };

  /* Left column: animate from top-30% to top-50% (centered) during first 20% of scroll */
  const leftColTop = (() => {
    const t = Math.min(1, scrollProgress / 0.2);
    return 30 + t * 20; // 30% → 50%
  })();

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section md:h-[600vh] relative"
      style={{ scrollMarginTop: "6rem" }}
    >
      {/* ── Desktop: Pinned scroll-sequence ── */}
      <div className="container hidden md:block h-full">
        <div className="sticky top-0 h-[100dvh] overflow-hidden">
          <div className="grid grid-cols-12 gap-16 h-full items-stretch">

            {/* Left column — text block, Y-animated */}
            <div className="col-span-5 relative">
              <div
                className="absolute left-0 w-full"
                style={{
                  top: `${leftColTop}%`,
                  transform: "translateY(-50%)",
                  transition: "top 0.15s ease-out",
                }}
              >
                <p className="text-[11px] tracking-[0.12em] font-bold uppercase text-[var(--accent)] mb-4">
                  HOW WE WORK
                </p>
                <h2
                  className="font-extrabold text-[var(--fg)] tracking-tight text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.1]"
                >
                  Our Process
                </h2>
                <p className="text-lg text-[var(--fg-muted)] mt-6 leading-relaxed max-w-md">
                  A rigorous, engineering-first methodology designed to eliminate risk and guarantee scalable results.
                </p>

                {/* Step indicator dots */}
                <div className="flex items-center gap-3 mt-10">
                  {PROCESS_STEPS.map((step, index) => (
                    <div
                      key={step.id}
                      className="flex items-center justify-center transition-all duration-500 ease-out"
                      style={{
                        width: index === activeStep ? 32 : 10,
                        height: 10,
                        borderRadius: 999,
                        background:
                          index === activeStep
                            ? "var(--accent)"
                            : index < activeStep
                              ? "var(--accent)"
                              : "var(--border)",
                        opacity: index <= activeStep ? 1 : 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — stacked card display */}
            <div className="col-span-7 relative flex items-center justify-center">
              <div className="relative w-full max-w-[520px]" style={{ height: 260 }}>
                {PROCESS_STEPS.map((step, index) => {
                  const cs = getCardStyle(index);
                  return (
                    <div
                      key={step.id}
                      className="absolute inset-0 transition-all duration-500 ease-out"
                      style={{
                        opacity: cs.opacity,
                        transform: `translateY(${cs.y}px)`,
                        zIndex: cs.z,
                        pointerEvents: cs.z === 10 ? "auto" : "none",
                      }}
                    >
                      <div className="value-card h-full">
                        <StepContent step={step} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile: single-column stacked layout (UNCHANGED) ── */}
      <div className="container md:hidden max-w-2xl">
        <p className="text-[11px] tracking-[0.12em] font-bold uppercase text-[var(--accent)] mb-3">
          HOW WE WORK
        </p>
        <h2 className="font-extrabold text-[var(--fg)] tracking-tight mb-4 text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.1]">
          Our Process
        </h2>
        <p className="text-base text-[var(--fg-muted)] mb-12 leading-relaxed">
          A rigorous, engineering-first methodology designed to eliminate risk and guarantee scalable results.
        </p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)]" />

          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className="flex items-start relative mb-8">
              {/* Node */}
              <div className="absolute left-0 top-4 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-[var(--bg-alt)] border-[var(--accent)] z-10">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              </div>

              {/* Content card */}
              <div className="value-card ml-14 flex-1">
                <StepContent step={step} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
