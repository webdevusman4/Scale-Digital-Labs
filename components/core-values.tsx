import React from 'react';

import { NeonIcon, type NeonIconName } from '@/components/ui/neon-icon';

const values: {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  color: string;
  icon: NeonIconName;
}[] = [
  {
    id: "01",
    title: "Precision Engineering",
    description: "We don't do 'good enough.' Every line of code and micro-interaction is audited for maximum performance and pixel-perfect rendering.",
    metric: "Pixel-Perfect",
    metricLabel: "RENDERING STANDARD",
    color: "bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]",
    icon: "code-brackets"
  },
  {
    id: "02",
    title: "High-Velocity Deployment",
    description: "Speed is a feature. We architect lightweight Next.js and React infrastructures designed to handle global traffic spikes without breaking a sweat.",
    metric: "< 1s",
    metricLabel: "TARGET LOAD TIME",
    color: "bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]",
    icon: "lightning-bolt"
  },
  {
    id: "03",
    title: "Impact & Conversion",
    description: "Traffic is useless if it doesn't convert. We build revenue engines using predictive analytics and neuromarketing to force user action.",
    metric: "ROI",
    metricLabel: "BUILT FOR CONVERSION",
    color: "bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]",
    icon: "target-chart"
  },
  {
    id: "04",
    title: "Radical Transparency",
    description: "No black boxes. No offshore ghosting. We maintain tight feedback loops, open Slack channels, and ruthless honesty on every deliverable.",
    metric: "Always-On",
    metricLabel: "COMMUNICATION STANDARD",
    color: "bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]",
    icon: "chat-bubble"
  }
];

export function CoreValues() {
  return (
    // 1. THE MASTER CONTAINER
    <section className="relative w-full max-w-5xl mx-auto pt-32 pb-32 px-4 md:px-8">
      
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
        {values.map((value) => (
          <div 
            key={value.id}
            className="interactive-card relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full min-h-[260px] p-6 md:p-10 mb-16"
          >
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

            {/* Left Column (Text) */}
            <div className="relative z-20 w-full md:w-[60%] flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center">
                  <NeonIcon icon={value.icon} size={22} />
                </div>
                <div
                  className="inline-flex items-center px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm w-max"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <span className="font-mono text-[10px] sm:text-xs text-white/50 tracking-widest uppercase font-bold">
                    {value.id} {"//"} VALUE
                  </span>
                </div>
              </div>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-6">{value.title}</h3>
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