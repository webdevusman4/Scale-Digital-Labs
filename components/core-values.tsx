import React from 'react';

const NEON_GLASS_STYLE: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.04)',
  backdropFilter: 'blur(24px) saturate(200%)',
  WebkitBackdropFilter: 'blur(24px) saturate(200%)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '20px',
  boxShadow:
    '0 0 40px rgba(123,47,247,0.45), 0 0 80px rgba(247,37,133,0.15), 0 8px 32px rgba(0,0,0,0.5)',
};

const values = [
  {
    id: "01",
    title: "Precision Engineering",
    description: "We don't do 'good enough.' Every line of code and micro-interaction is audited for maximum performance and pixel-perfect rendering.",
    metric: "Pixel-Perfect",
    metricLabel: "RENDERING STANDARD",
    glowColor: "rgba(123, 47, 247, 0.2)",
    color: "text-[#7B2FF7]"
  },
  {
    id: "02",
    title: "High-Velocity Deployment",
    description: "Speed is a feature. We architect lightweight Next.js and React infrastructures designed to handle global traffic spikes without breaking a sweat.",
    metric: "< 1s",
    metricLabel: "TARGET LOAD TIME",
    glowColor: "rgba(247, 37, 133, 0.2)",
    color: "text-[#F72585]"
  },
  {
    id: "03",
    title: "Impact & Conversion",
    description: "Traffic is useless if it doesn't convert. We build revenue engines using predictive analytics and neuromarketing to force user action.",
    metric: "ROI",
    metricLabel: "BUILT FOR CONVERSION",
    glowColor: "rgba(255, 140, 66, 0.2)",
    color: "bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]"
  },
  {
    id: "04",
    title: "Radical Transparency",
    description: "No black boxes. No offshore ghosting. We maintain tight feedback loops, open Slack channels, and ruthless honesty on every deliverable.",
    metric: "Always-On",
    metricLabel: "COMMUNICATION STANDARD",
    glowColor: "rgba(255, 255, 255, 0.08)",
    color: "text-white"
  }
];

export function CoreValues() {
  return (
    // 1. THE MASTER CONTAINER: This dictates the sticky boundaries for everything inside it.
    <section className="relative w-full max-w-5xl mx-auto pt-32 pb-[40vh] px-4 md:px-8">
      
      {/* 2. SECTION ONE: THE TITLE CONTAINER */}
      <div className="w-full pb-8 pt-4">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-max mb-4"
          style={{
            border: '1px solid transparent',
            backgroundImage:
              'linear-gradient(rgba(11,15,25,0.92), rgba(11,15,25,0.92)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)' }}
          />
          <span className="text-white/85 font-mono text-xs tracking-[0.08em] font-semibold uppercase">
            Core Architecture
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-4">
          ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">DNA.</span>
        </h2>
      </div>

      {/* 3. SECTION TWO: THE CARDS CONTAINER */}
      {/* This sits strictly beneath the title block. */}
      <div className="relative w-full flex flex-col mt-16">
        {values.map((value, index) => (
          <div 
            key={value.id}
            // Dynamic stacking math. Starts at 8rem and staggers.
            style={{
              top: `calc(8rem + ${index * 1.5}rem)`,
              ...NEON_GLASS_STYLE,
            }}
            className="relative md:sticky z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full min-h-[260px] p-6 md:p-10 mb-16"
          >
            {/* Top edge highlight — gradient-primary at 40% opacity */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none rounded-t-[20px]"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(123,47,247,0.4) 20%, rgba(247,37,133,0.4) 50%, rgba(255,140,66,0.35) 80%, transparent 100%)',
              }}
            />

            {/* Decorative oversized background numeral */}
            <div
              className="absolute top-2 right-6 md:right-10 font-black pointer-events-none select-none"
              style={{
                fontSize: '100px',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.04)',
                fontWeight: 800,
              }}
            >
              {value.id}
            </div>

            {/* Background Glow */}
            <div
              className="absolute inset-0 rounded-[20px] opacity-50 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 30% 50%, ${value.glowColor} 0%, transparent 70%)`,
              }}
            />
            
            {/* Left Column (Text) */}
            <div className="relative z-20 w-full md:w-[60%] flex flex-col">
              <div
                className="inline-flex items-center px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm w-max mb-2"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <span className="font-mono text-[10px] sm:text-xs text-white/50 tracking-widest uppercase font-bold">
                  {value.id} {"//"} VALUE
                </span>
              </div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white mt-4 mb-6">{value.title}</h3>
              <p className="text-base text-gray-400 leading-relaxed max-w-xl">{value.description}</p>
            </div>

            {/* Right Column (Data Metric) */}
            <div className="relative z-20 w-full md:w-[40%] flex flex-col mt-8 md:mt-0 md:items-end">
              <div className={`text-4xl md:text-6xl font-black tracking-tighter ${value.color}`}>
                {value.metric}
              </div>
              <div className="font-mono text-sm tracking-[0.2em] text-white/40 mt-2">{value.metricLabel}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}