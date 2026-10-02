'use client';

import React from 'react';
import { motion } from 'motion/react';
import { NeonIcon, type NeonIconName } from '@/components/ui/neon-icon';

/* ── Differentiator Data ────────────────────────────────── */

const DIFFERENTIATORS: { num: string; icon: NeonIconName; title: string; description: string }[] = [
  {
    num: '01',
    icon: 'users-group',
    title: 'Full-Ecosystem Team',
    description:
      'One team for development, e-commerce, and marketing — no juggling multiple vendors or miscommunication between agencies.',
  },
  {
    num: '02',
    icon: 'code-brackets',
    title: 'Lean Architecture',
    description:
      'No bloated teams or outsourced junior devs. You get senior-level execution from day one.',
  },
  {
    num: '03',
    icon: 'bar-chart',
    title: 'Data-Driven Decisions',
    description:
      'Every campaign and build decision is backed by real performance data, not guesswork.',
  },
  {
    num: '04',
    icon: 'lightning-bolt',
    title: 'Built for Speed',
    description:
      'As a fresh, agile team, we move faster than legacy agencies weighed down by bureaucracy.',
  },
];

/* ── Differentiator Card ────────────────────────────────── */

function DifferentiatorCard({
  item,
  index,
}: {
  item: (typeof DIFFERENTIATORS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className="relative h-full group">
        {/* The Vibrant Orb behind the glass */}
        <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-tl from-[#FF8C42] to-[#F72585] opacity-15 transition-all duration-500 group-hover:scale-125 group-hover:opacity-30 blur-xl -z-10" />

        <div className="interactive-card p-6 h-full relative overflow-hidden z-10 bg-white/60">
          {/* Number Badge — large, low-opacity background flourish */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.06 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
            className="absolute top-2 right-4 text-[72px] font-black leading-none text-slate-900 pointer-events-none select-none"
          >
            {item.num}
          </motion.span>

          <div className="relative z-10 flex flex-col gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/60 border border-slate-200 flex items-center justify-center backdrop-blur-md">
              <NeonIcon icon={item.icon} size={22} />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────── */

export function WhyChooseUs2() {
  return (
    <section className="relative w-full py-10 md:py-20 px-6 md:px-12 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-[#EC4899] opacity-[0.15] blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-max mb-6"
            style={{
              border: '1px solid transparent',
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)' }}
            />
            <span className="text-slate-900 font-mono text-xs tracking-[0.08em] font-semibold uppercase">
              THE DIFFERENCE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[26px] md:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Zero Bureaucracy. Absolute Transparency.
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-[560px]">
            We&apos;re not a call center or a revolving door of account managers. You work directly with the people building your growth.
          </p>
        </motion.div>

        {/* ── 2x2 Grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {DIFFERENTIATORS.map((item, idx) => (
            <DifferentiatorCard key={item.num} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
