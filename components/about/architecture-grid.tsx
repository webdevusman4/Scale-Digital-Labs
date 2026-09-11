'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { FaCrosshairs, FaSatelliteDish, FaChartLine } from 'react-icons/fa6'; // Approximate icons

const PILLARS = [
  {
    id: "01",
    title: "Architecture",
    icon: FaCrosshairs,
    description: "We build technically superior digital ecosystems that ensure long-term stability and unmatched performance at scale."
  },
  {
    id: "02",
    title: "Intelligence",
    icon: FaSatelliteDish,
    description: "Our strategy is driven by advanced AI automation and deep data analytics to maximize ROI and operational efficiency."
  },
  {
    id: "03",
    title: "Authority",
    icon: FaChartLine,
    description: "We design high-authority brands that command market share and establish institutional trust through technical precision."
  }
];

export function ArchitectureGrid() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col mb-20">
        <span className="text-sm font-bold tracking-widest uppercase text-white/60 mb-4 block">
          OUR ARCHITECTURAL CORE
        </span>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
          ENGINEERED FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316] drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            TECHNICAL
          </span> DOMINANCE
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILLARS.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 flex flex-col group min-h-[400px]">
              
              {/* Top Row: Icon & Number */}
              <div className="flex justify-between items-start mb-auto">
                <pillar.icon className="w-8 h-8 text-[#8B5CF6] transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
                <span className="text-6xl font-black text-white/10 tracking-tighter leading-none transition-colors duration-300 group-hover:text-white/20">
                  {pillar.id}
                </span>
              </div>
              
              {/* Content */}
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>

            </SpotlightCard>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
