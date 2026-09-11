'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { NeonIcon, type NeonIconName } from '@/components/ui/neon-icon';
import { HiArrowDown } from 'react-icons/hi2';
import { ScrollReveal, ScrollRevealItem } from '@/components/ui/scroll-reveal';

/* ── Service overview data — with upgraded icon names ───── */

const BUILD_SERVICES: { icon: NeonIconName; title: string; anchor: string }[] = [
  { icon: 'server-stack', title: 'SaaS Development', anchor: '#saas-development' },
  { icon: 'shield-check', title: 'Web Dev & Maintenance', anchor: '#web-maintenance' },
  { icon: 'shopping-bag-arrow', title: 'Shopify & E-commerce', anchor: '#shopify-ecommerce' },
];

const MARKET_SERVICES: { icon: NeonIconName; title: string; anchor: string }[] = [
  { icon: 'megaphone-signal', title: 'Social Media & Digital Marketing', anchor: '#social-media-marketing' },
  { icon: 'target-chart', title: 'Meta & Google Ads', anchor: '#meta-google-ads' },
  { icon: 'badge-profile', title: 'LinkedIn Branding', anchor: '#linkedin-branding' },
];

/* ── Jump-link card with upgraded icon container ────────── */

function JumpCard({
  service,
}: {
  service: { icon: NeonIconName; title: string; anchor: string };
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(service.anchor);
    if (el) {
      const offset = 100;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <ScrollRevealItem className="h-full">
      <a href={service.anchor} onClick={handleClick} className="overview-card block h-full group">
        <div className="p-6 h-full flex flex-col items-center text-center gap-4">
          <div
            className="w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-white/25"
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <NeonIcon icon={service.icon} size={36} animated />
          </div>

          <h3 className="text-sm md:text-base font-bold text-white tracking-tight leading-snug">
            {service.title}
          </h3>

          <HiArrowDown className="w-4 h-4 text-white/0 group-hover:text-white/40 transition-all duration-300 -mt-1" />
        </div>
      </a>
    </ScrollRevealItem>
  );
}

/* ── Cluster label ──────────────────────────────────────── */

function ClusterLabel({ label }: { label: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      className="flex items-center gap-6 mb-4 mt-8 w-full"
    >
      <motion.div 
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent origin-left" 
      />
      <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] whitespace-nowrap">
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

export function ServicesOverview() {
  return (
    <section className="relative w-full py-8 md:py-14 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* Build & Power */}
        <ClusterLabel label="Build & Power" />
        <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-10 auto-rows-fr">
          {BUILD_SERVICES.map((s) => (
            <JumpCard key={s.title} service={s} />
          ))}
        </ScrollReveal>

        {/* Market & Grow */}
        <ClusterLabel label="Market & Grow" />
        <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 auto-rows-fr">
          {MARKET_SERVICES.map((s) => (
            <JumpCard key={s.title} service={s} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
