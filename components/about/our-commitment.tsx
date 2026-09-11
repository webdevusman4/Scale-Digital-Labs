'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '@/components/ui/glass-card';
import { NeonIcon, type NeonIconName } from '@/components/ui/neon-icon';

/* ── Pledge Data ────────────────────────────────────────── */

const PLEDGES: { icon: NeonIconName; title: string; description: string }[] = [
  {
    icon: 'chat-bubble',
    title: 'Direct Communication',
    description:
      "You'll always know who's working on your project and where things stand — no black boxes.",
  },
  {
    icon: 'document-check',
    title: 'Transparent Reporting',
    description:
      'Real performance data, shared openly, every step of the way.',
  },
  {
    icon: 'shield-check',
    title: 'Results Over Retainers',
    description:
      "We'd rather earn your long-term trust than lock you into a contract that doesn't deliver.",
  },
];

/* ── Pledge Card ────────────────────────────────────────── */

function PledgeCard({
  pledge,
  index,
}: {
  pledge: (typeof PLEDGES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
    >
      <GlassCard className="p-8 h-full" interactive={false}>
        <div className="flex flex-col items-center text-center gap-5">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/[0.12] flex items-center justify-center">
            <NeonIcon icon={pledge.icon} size={24} />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
              {pledge.title}
            </h3>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed font-normal">
              {pledge.description}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────── */

export function OurCommitment() {
  return (
    <section className="relative w-full py-12 md:py-24 px-6 md:px-12 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[350px] bg-[#EC4899] opacity-[0.04] blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
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
              OUR COMMITMENT
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[26px] md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-5">
            New Agency. Non-Negotiable Standards.
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/[0.65] font-normal leading-relaxed max-w-[560px]">
            We&apos;re early in our journey — but our commitment to your results isn&apos;t.
          </p>
        </motion.div>

        {/* ── Pledge Cards (3-column) ────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {PLEDGES.map((pledge, idx) => (
            <PledgeCard key={pledge.title} pledge={pledge} index={idx} />
          ))}
        </div>

        {/* ── Founder Attribution ────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-white/40 font-medium italic tracking-wide"
        >
          — The ScaleDigitalLabs Founding Team
        </motion.p>
      </div>
    </section>
  );
}
