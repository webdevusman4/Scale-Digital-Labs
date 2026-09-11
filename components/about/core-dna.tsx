'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { FaMicrochip, FaLayerGroup, FaFingerprint } from 'react-icons/fa6';

const FEATURES = [
  {
    icon: FaMicrochip,
    title: "Engineering Precision",
    description: "Custom-built high-performance frameworks designed for maximum speed and security."
  },
  {
    icon: FaLayerGroup,
    title: "Advanced Integration",
    description: "Seamlessly connecting complex enterprise ecosystems and multi-layered data structures."
  },
  {
    icon: FaFingerprint,
    title: "Brand Dominance",
    description: "Crafting high-authority visual identities that establish immediate market leadership."
  }
];

export function CoreDNA() {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden border-t border-white/5">
      
      {/* Tag */}
      <div className="flex items-center gap-4 mb-16">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-max"
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
            OUR CORE DNA
          </span>
        </div>
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse mr-2" />
          <span className="text-[10px] font-bold tracking-widest text-[#8B5CF6] uppercase">GLOBAL OPERATIONS ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white mb-10">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316] drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Architectural
            </span>
            <br />
            Authority for the <br />
            Digital Era.
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-6 font-medium">
            At ScaleDigitalLabs, we don&apos;t just build websites; we engineer digital legacies. Driven by a relentless pursuit of technical excellence, we operate at the intersection of data-driven strategy and architectural precision.
          </p>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium">
            Our commitment to ROI-first methodology has enabled over 125+ brands to scale across diverse international markets, delivering measurable leadership and institutional authority.
          </p>
        </motion.div>

        {/* Right Feature Cards */}
        <div className="flex flex-col gap-6 w-full max-w-xl mx-auto lg:ml-auto lg:mr-0">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <SpotlightCard className="p-8 group">
                <div className="flex items-start gap-6">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-white/10 bg-[#0B0F19] flex items-center justify-center transition-all duration-300 group-hover:border-[#8B5CF6]/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                    <feature.icon className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{feature.title}</h3>
                    <p className="text-white/50 text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
