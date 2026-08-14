import { useEffect, useRef, useState } from "react";
import { Search, Map, Code, Gauge, Rocket, TrendingUp, Mouse } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
      <span className="process-step__bg-num">{step.id}</span>
      <div className="process-step__top">
        <span className="process-step__keyword">{step.category}</span>
        <span className="process-step__icon">
          <Icon size={20} />
        </span>
      </div>
      <h3 className="process-step__title text-[1.5rem]">{step.title}</h3>
      <p className="process-step__desc">{step.desc}</p>
      <div className="process-step__bar" />
    </>
  );
};

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useScrollAnimation();
  const rightColRef = useScrollAnimation();
  const mobileTitleRef = useScrollAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ── Scroll-progress listener ── */
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const sectionH = el.offsetHeight;
      const viewportH = window.innerHeight;

      const scrolled = -rect.top;
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

  const getCardStyle = (index: number) => {
    const isActive = index === activeStep;
    const isPast = index < activeStep;

    if (isActive) return { opacity: 1, y: 0, z: 10 };
    if (isPast) return { opacity: 0, y: -20, z: 0 };
    return { opacity: 0, y: 20, z: 0 };
  };

  const scrollToStep = (index: number) => {
    const el = sectionRef.current;
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    
    const sectionH = el.offsetHeight;
    const viewportH = window.innerHeight;
    const totalScrollable = sectionH - viewportH;
    
    const targetScroll = sectionTop + ((index + 0.5) / STEP_COUNT) * totalScrollable;
    
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section md:h-[300vh] relative"
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
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <div ref={titleRef as React.RefObject<HTMLDivElement>} className="animate-on-scroll">
                  <span className="section-label">HOW WE WORK</span>
                  <h2 className="section-title">Our Process</h2>
                  <p className="text-lg text-[var(--fg-muted)] mt-6 leading-relaxed max-w-md">
                    A rigorous, engineering-first methodology designed to eliminate risk and guarantee scalable results.
                  </p>
                </div>

                {/* Step indicator dots */}
                <div className="flex items-center gap-3 mt-10">
                  {PROCESS_STEPS.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => scrollToStep(index)}
                      className="group relative flex items-center justify-center p-2 -m-2 focus:outline-none"
                      aria-label={`Go to step: ${step.title}`}
                    >
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--fg)] text-xs px-2 py-1 rounded pointer-events-none z-20 shadow-lg">
                        {step.title}
                      </div>
                      
                      {/* Visual Dot */}
                      <div
                        className="transition-all duration-500 ease-out"
                        style={{
                          width: index === activeStep ? 32 : 10,
                          height: 10,
                          borderRadius: 999,
                          background:
                            index <= activeStep
                              ? "var(--gradient)"
                              : "var(--border)",
                          opacity: index <= activeStep ? 1 : 0.5,
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — stacked card display */}
            <div className="col-span-7 relative flex items-center justify-center">
              <div ref={rightColRef as React.RefObject<HTMLDivElement>} className="animate-on-scroll relative w-full max-w-[520px]" style={{ height: 260 }}>
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
                      <div className="process-step h-full">
                        <StepContent step={step} />
                      </div>
                    </div>
                  );
                })}

                {/* Intro Card Removed */}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile: single-column stacked layout ── */}
      <div className="container md:hidden max-w-2xl">
        <div ref={mobileTitleRef as React.RefObject<HTMLDivElement>} className="animate-on-scroll">
          <span className="section-label">HOW WE WORK</span>
          <h2 className="section-title mb-4">Our Process</h2>
          <p className="text-base text-[var(--fg-muted)] mb-[20px] leading-relaxed">
            A rigorous, engineering-first methodology designed to eliminate risk and guarantee scalable results.
          </p>
        </div>

        <div className="flex flex-col gap-[20px]" style={{ paddingTop: "20px" }}>
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="process-step animate-on-scroll"
              style={{ "--delay": `${index * 150}ms` } as React.CSSProperties}
            >
              <StepContent step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
