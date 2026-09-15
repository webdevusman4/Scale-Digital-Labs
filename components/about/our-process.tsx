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
      className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(247,37,133,0.3)] backdrop-blur-[20px]"
      style={{
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(rgba(11,15,25,0.95), rgba(11,15,25,0.95)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full cursor-default"
    >
      <div className="relative overflow-hidden rounded-[20px] bg-white/[0.05] backdrop-blur-[20px] backdrop-saturate-[180%] border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.35)] p-6 cursor-default">
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

/* ── Desktop Timeline (horizontal, alternating + zigzag) ── */

function DesktopTimeline() {
  const segments = [
    "M 0 20 Q 50 20, 100 80",
    "M 0 80 Q 50 80, 100 20",
    "M 0 20 Q 50 20, 100 80",
    "M 0 80 Q 50 80, 100 20",
  ];

  return (
    <div className="hidden md:block relative w-full">
      {/* Shared Gradient for Segments */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="process-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FF7" />
            <stop offset="55%" stopColor="#F72585" />
            <stop offset="100%" stopColor="#FF8C42" />
          </linearGradient>
        </defs>
      </svg>

      {/* The 5-column flex layout */}
      <div className="flex w-full items-stretch relative">
        {STEPS.map((step, idx) => {
          const isAbove = idx % 2 === 0; // Alternating: 0,2,4 above — 1,3 below

          return (
            <React.Fragment key={step.num}>
              {/* Column */}
              <div className="flex-[3] flex flex-col items-center gap-4 relative z-10">
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

              {/* Connector (inserted between columns) */}
              {idx < STEPS.length - 1 && (
                <div className="relative flex-1 h-full min-h-[100px] hidden md:block" aria-hidden="true">
                  <svg 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    className="absolute inset-0 w-full h-full"
                  >
                    <motion.path
                      d={segments[idx]}
                      stroke="url(#process-line-gradient)"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.5"
                      vectorEffect="non-scaling-stroke"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
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
    <div ref={containerRef} className="md:hidden relative">
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

export interface OurProcessProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  showBottomLink?: boolean;
}

export function OurProcess({
  eyebrow = "OUR PROCESS",
  title = "From Idea to Impact — Here's How We Work.",
  subtitle = "A clear, structured process so you always know what's happening and why.",
  showBottomLink = false,
}: OurProcessProps = {}) {
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
              {eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[26px] md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-5">
            {title}
          </h2>

          {/* Subheadline */}
          {subtitle && (
            <p className="text-base md:text-lg text-white/[0.65] font-normal leading-relaxed max-w-[560px]">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* ── Timeline ───────────────────────────────── */}
        <DesktopTimeline />
        <MobileTimeline />

        {/* Optional Footer Link */}
        {showBottomLink && (
          <div className="w-full flex justify-center mt-16 relative z-10">
            <a 
              href="/about"
              className="inline-flex items-center gap-2 text-[#7B2FF7] font-semibold tracking-widest uppercase hover:text-white transition-colors group text-sm"
            >
              See how it works
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
