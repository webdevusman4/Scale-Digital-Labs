'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/* ── Step Data ──────────────────────────────────────────── */

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    description:
      'We start by understanding your business, goals, and audience — no cookie-cutter templates.',
  },
  {
    num: '02',
    title: 'Strategize',
    description:
      'We build a custom roadmap across development and marketing tailored to your growth stage.',
  },
  {
    num: '03',
    title: 'Build',
    description:
      'Our team designs and develops your platform, store, or campaign with regular check-ins.',
  },
  {
    num: '04',
    title: 'Launch',
    description:
      'We go live with a full quality check, tracking setup, and performance baseline in place.',
  },
  {
    num: '05',
    title: 'Scale',
    description:
      'We monitor real data and continuously optimize — this is where long-term growth compounds.',
  },
];

/* ── Step Node (circle on the timeline) ─────────────────── */

function StepNode({ num, index }: { num: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white/[0.08] backdrop-blur-[20px] border border-white/[0.15] flex items-center justify-center shadow-[0_0_24px_rgba(139,92,246,0.15)]"
    >
      <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">
        {num}
      </span>
    </motion.div>
  );
}

/* ── Step Card (glassmorphism content card) ──────────────── */

function StepCard({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="w-full"
    >
      <div className="relative overflow-hidden rounded-[20px] bg-white/[0.05] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.35)] p-6">
        {/* Top highlight edge */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.25) 70%, transparent 100%)',
          }}
        />

        <div className="relative z-10 flex flex-col gap-2.5">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
            {step.title}
          </h3>
          <p className="text-sm md:text-[15px] text-white/60 leading-relaxed font-normal max-w-[260px]">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Desktop Timeline (horizontal, alternating) ─────────── */

function DesktopTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Scroll-driven timeline fill */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 40%'],
  });
  const trackWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="hidden lg:block relative">
      {/* The 5-column grid — each column holds a top card, node, bottom card */}
      <div className="grid grid-cols-5 gap-6 relative">
        {/* ── Timeline Track (behind everything) ──── */}
        <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[2px] z-0">
          {/* Background track */}
          <div className="absolute inset-0 bg-white/[0.08] rounded-full" />
          {/* Animated fill */}
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: trackWidth,
              background:
                'linear-gradient(90deg, #7B2FF7, #F72585, #FF8C42)',
              opacity: 0.35,
            }}
          />
        </div>

        {/* ── Steps ─────────────────────────────────── */}
        {STEPS.map((step, idx) => {
          const isAbove = idx % 2 === 0; // Alternating: 0,2,4 above — 1,3 below

          return (
            <div key={step.num} className="flex flex-col items-center gap-4 relative z-10">
              {/* Top card area — only visible for "above" steps */}
              <div className={`flex-1 flex items-end w-full ${isAbove ? '' : 'opacity-0 pointer-events-none'}`}>
                {isAbove && <StepCard step={step} index={idx} />}
              </div>

              {/* Node */}
              <StepNode num={step.num} index={idx} />

              {/* Bottom card area — only visible for "below" steps */}
              <div className={`flex-1 flex items-start w-full ${!isAbove ? '' : 'opacity-0 pointer-events-none'}`}>
                {!isAbove && <StepCard step={step} index={idx} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Mobile Timeline (vertical, left-aligned) ───────────── */

function MobileTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  });
  const trackHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="lg:hidden relative">
      {/* Vertical track line */}
      <div className="absolute left-7 top-0 bottom-0 w-[2px] z-0">
        <div className="absolute inset-0 bg-white/[0.08] rounded-full" />
        <motion.div
          className="absolute inset-x-0 top-0 rounded-full"
          style={{
            height: trackHeight,
            background: 'linear-gradient(180deg, #7B2FF7, #F72585, #FF8C42)',
            opacity: 0.35,
          }}
        />
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-10">
        {STEPS.map((step, idx) => (
          <div key={step.num} className="flex items-start gap-5 relative z-10">
            {/* Node */}
            <StepNode num={step.num} index={idx} />
            {/* Card */}
            <div className="flex-1 pt-1">
              <StepCard step={step} index={idx} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Section ───────────────────────────────────────── */

export function OurProcess() {
  return (
    <section className="relative w-full py-12 md:py-24 px-6 md:px-12 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[400px] bg-[#7B2FF7] opacity-[0.04] blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
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
              OUR PROCESS
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[26px] md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-5">
            From Idea to Impact — Here&apos;s How We Work.
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/[0.65] font-normal leading-relaxed max-w-[560px]">
            A clear, structured process so you always know what&apos;s happening and why.
          </p>
        </motion.div>

        {/* ── Timeline ───────────────────────────────── */}
        <DesktopTimeline />
        <MobileTimeline />
      </div>
    </section>
  );
}
