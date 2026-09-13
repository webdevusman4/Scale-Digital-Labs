'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { ScrollReveal, ScrollRevealItem } from '@/components/ui/scroll-reveal';
import { NeonIcon, type NeonIconName } from '@/components/ui/neon-icon';

/* ── Service Data ───────────────────────────────────────── */

const BUILD_SERVICES: { icon: NeonIconName; title: string; description: string; anchor: string }[] = [
  {
    icon: 'server-stack',
    title: 'SaaS Development',
    description: 'Custom software built to scale with your business',
    anchor: '#saas-development',
  },
  {
    icon: 'shield-check',
    title: 'Web Dev & Maintenance',
    description: 'Keeping your site fast, secure, and always up to date',
    anchor: '#web-maintenance',
  },
  {
    icon: 'shopping-bag-arrow',
    title: 'Shopify & E-commerce Stores',
    description: 'High-converting online stores built to sell',
    anchor: '#shopify-ecommerce',
  },
];

const MARKET_SERVICES: { icon: NeonIconName; title: string; description: string; anchor: string }[] = [
  {
    icon: 'megaphone-signal',
    title: 'Social Media & Digital Marketing',
    description: 'Content and campaigns that build real audiences',
    anchor: '#social-media-marketing',
  },
  {
    icon: 'target-chart',
    title: 'Meta & Google Ads',
    description: 'Paid campaigns engineered for ROI, not just reach',
    anchor: '#meta-google-ads',
  },
  {
    icon: 'badge-profile',
    title: 'LinkedIn Branding',
    description: 'Positioning your business as an authority in your industry',
    anchor: '#linkedin-branding',
  },
];

/* ── Service Card ───────────────────────────────────────── */

function ServiceCard({
  service,
}: {
  service: { icon: NeonIconName; title: string; description: string; anchor: string };
}) {
  return (
    <ScrollRevealItem className="h-full">
      <Link href={`/services${service.anchor}`} className="interactive-card block h-full group">
        <div className="py-5 px-5 h-full flex flex-col items-center justify-center text-center">
          <div
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-white/25"
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <NeonIcon icon={service.icon} size={28} animated />
          </div>
          <h3 className="text-[18px] font-bold text-white tracking-tight flex-shrink-0 mt-4 mb-2 leading-snug">
            {service.title}
          </h3>
          <p className="text-[14px] text-white/60 leading-[1.5] font-normal m-0">
            {service.description}
          </p>
        </div>
      </Link>
    </ScrollRevealItem>
  );
}

/* ── Cluster Label with Gradient Divider ────────────────── */

function ClusterLabel({ label }: { label: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      className="flex items-center gap-6 my-6 w-full"
    >
      <motion.div 
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent origin-left" 
      />
      <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316] whitespace-nowrap">
        {label}
      </span>
      <motion.div 
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent origin-right" 
      />
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────── */

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const shouldReduceMotion = useReducedMotion();
  const yParallax = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -40]);

  return (
    <section ref={sectionRef} className="relative w-full py-20 md:py-24 px-6 md:px-12 overflow-hidden">
      
      {/* SVG Gradient Definition for Neon Icons */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="service-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FF7" />
            <stop offset="55%" stopColor="#F72585" />
            <stop offset="100%" stopColor="#FF8C42" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[500px] bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] opacity-[0.06] blur-[180px]" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
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
              CAPABILITIES
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-[40px] lg:text-[48px] font-extrabold text-white tracking-tight leading-tight mb-5">
            One Team. Every Digital Need.
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/[0.65] font-normal leading-relaxed max-w-[600px]">
            From building your platform to growing your audience — we&apos;re the complete digital ecosystem for your brand.
          </p>
        </motion.div>

        {/* ── Cluster 1: Build & Power ───────────────── */}
        <ClusterLabel label="Build & Power" />

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 auto-rows-fr">
          {BUILD_SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ScrollReveal>

        {/* ── Cluster 2: Market & Grow ──────────────── */}
        <ClusterLabel label="Market & Grow" />

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {MARKET_SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
