'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function ServicesCta() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[30vw] h-[300px] bg-[#7B2FF7] opacity-[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[25vw] h-[250px] bg-[#F72585] opacity-[0.06] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="interactive-card relative overflow-hidden rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_0_60px_rgba(123,47,247,0.1)] px-8 py-14 md:px-16 md:py-20 flex flex-col items-center text-center gap-6"
        >

          {/* Top highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-10"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.3) 70%, transparent 100%)',
            }}
          />

          {/* Headline */}
          <h2 className="relative z-20 text-2xl md:text-[36px] lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
            Not Sure Where to Start?{' '}
            <br className="hidden md:block" />
            Let&apos;s Figure It Out Together.
          </h2>

          {/* Subheadline */}
          <p className="relative z-20 text-base md:text-lg text-white/[0.6] font-normal leading-relaxed max-w-[520px]">
            Whether it&apos;s one service or the full ecosystem, we&apos;ll help you build the right plan.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="relative z-20 mt-4 px-10 py-4 rounded-full bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] text-white font-bold text-sm tracking-wide shadow-[0_4px_24px_rgba(247,37,133,0.4)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_6px_32px_rgba(247,37,133,0.55)]"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
