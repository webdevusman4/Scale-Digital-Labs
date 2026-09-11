'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '@/components/ui/glass-card';
import {
  HiOutlinePaperAirplane,
  HiOutlinePhone,
  HiOutlineDocumentText,
} from 'react-icons/hi2';

/* ── Step Data ──────────────────────────────────────────── */

const STEPS = [
  {
    num: '01',
    icon: HiOutlinePaperAirplane,
    title: 'Submit Your Info',
    description: 'Fill out the form or send us an email — takes less than 2 minutes.',
  },
  {
    num: '02',
    icon: HiOutlinePhone,
    title: 'Discovery Call',
    description: 'We schedule a short call to understand your goals and answer questions.',
  },
  {
    num: '03',
    icon: HiOutlineDocumentText,
    title: 'Get Your Proposal',
    description: 'You receive a clear plan, timeline, and pricing — no pressure to commit on the spot.',
  },
];

export function WhatHappensNext() {
  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[300px] bg-[#7B2FF7] opacity-[0.04] blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-14"
        >
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
              NEXT STEPS
            </span>
          </div>
          <h2 className="text-[26px] md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-5">
            Simple, No Surprises.
          </h2>
        </motion.div>

        {/* ── 3 Step Cards with connecting line ──────── */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] opacity-[0.2] rounded-full z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              >
                <GlassCard className="p-7 h-full relative overflow-hidden">
                  {/* Number badge */}
                  <span className="absolute top-4 right-5 text-[64px] font-black leading-none text-white/[0.05] pointer-events-none select-none">
                    {step.num}
                  </span>

                  <div className="relative z-10 flex flex-col items-center text-center gap-5">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.08] flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-white/60 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
