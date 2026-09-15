'use client';

import React from 'react';
import { motion } from 'motion/react';

export function PortfolioHero() {
  return (
    <section className="relative w-full pt-8 md:pt-12 pb-12 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[50vw] h-[400px] bg-[#7B2FF7] opacity-[0.06] blur-[180px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-[700px] mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
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
              OUR WORK
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.1]"
        >
          Real Projects.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316]">
            Real Results.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/[0.6] font-normal leading-relaxed max-w-[560px]"
        >
          A mix of client work and self-directed builds — see the craft behind every service we offer.
        </motion.p>
      </div>
    </section>
  );
}
