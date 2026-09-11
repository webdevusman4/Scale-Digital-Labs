'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '@/components/ui/glass-card';
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
    icon: 'hand-point',
    title: 'Founder-Led Attention',
    description:
      'Direct access to the people actually building your project, not layers of account managers.',
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
      <GlassCard className="p-8 h-full relative overflow-hidden" interactive={false}>
        {/* Number Badge — large, low-opacity background flourish */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
          className="absolute top-4 right-5 text-[80px] font-black leading-none text-white pointer-events-none select-none"
        >
          {item.num}
        </motion.span>

        <div className="relative z-10 flex flex-col gap-5">
          {/* Icon */}
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center">
            <NeonIcon icon={item.icon} size={24} />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────── */

export function WhyChooseUs() {
  return (
    <section className="relative w-full py-10 md:py-20 px-6 md:px-12 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-[#EC4899] opacity-[0.04] blur-[180px] pointer-events-none" />

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
              THE DIFFERENCE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[26px] md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-5">
            One Team You Can Actually Reach.
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/[0.65] font-normal leading-relaxed max-w-[560px]">
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
