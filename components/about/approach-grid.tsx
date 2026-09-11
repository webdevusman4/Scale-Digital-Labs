'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/ui/spotlight-card';

const APPROACHES = [
  {
    id: "01",
    tag: "CONCEPT",
    title: ["Radical", "Discovery"],
    description: "We don't solve symptoms; we engineer solutions at the root level using a first-principles deep dive into your business model."
  },
  {
    id: "02",
    tag: "PROCESS",
    title: ["Technical", "Precision"],
    description: "Every pixel is optimized and every line of code is audited for speed, security, and global responsiveness."
  },
  {
    id: "03",
    tag: "GOAL",
    title: ["Exponential", "Scale"],
    description: "Our systems are built to handle the future demands of a global enterprise, scaling seamlessly with your growth."
  },
  {
    id: "04",
    tag: "LEGACY",
    title: ["Digital", "Dominance"],
    description: "The end result is more than a product—it is a digital legacy that defines your authority in the industry."
  }
];

export function ApproachGrid() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col mb-20 max-w-2xl">
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
            OUR APPROACH
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
          Infinite <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316] drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">Vision</span>
        </h2>
        <p className="text-lg text-white/50 leading-relaxed font-medium">
          We build digital experiences that outlast trends and define industries.
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {APPROACHES.map((approach, idx) => (
          <motion.div
            key={approach.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-10 flex flex-col group min-h-[380px]">
              
              {/* Top Row: Tag & Number */}
              <div className="flex justify-between items-center mb-16 relative z-10">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5">
                  <span className="text-[10px] font-bold tracking-widest text-[#8B5CF6] uppercase">
                    {approach.tag}
                  </span>
                </div>
                <span className="text-7xl font-black text-white/[0.03] tracking-tighter leading-none transition-colors duration-500 group-hover:text-white/[0.08] absolute right-0 top-0 pointer-events-none select-none">
                  {approach.id}
                </span>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col mt-auto">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  {approach.title[0]} <span className="text-[#8B5CF6] drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">{approach.title[1]}</span>
                </h3>
                <p className="text-white/50 text-base leading-relaxed max-w-md">
                  {approach.description}
                </p>
                
                {/* Decorative Line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-transparent mt-8 transition-all duration-500 group-hover:w-24 group-hover:from-[#EC4899]" />
              </div>

            </SpotlightCard>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
