'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { HiOutlineCheckCircle, HiArrowRight } from 'react-icons/hi2';
import { NeonIcon, type NeonIconName } from '@/components/ui/neon-icon';

/* ── Types ──────────────────────────────────────────────── */

interface ServiceBlockProps {
  id: string;
  cluster: string;
  title: string;
  description: string;
  deliverables: string[];
  outcomeLine?: string;
  /** 'left' = text on left, visual on right; 'right' = reversed */
  side: 'left' | 'right';
  /** Query param value for contact form pre-fill */
  projectType: string;
  /** Path to the generated service image */
  imageSrc: string;
  /** Descriptive alt text for the image */
  imageAlt: string;
  /** Whether to eagerly load the image (first block only) */
  eagerLoad?: boolean;
  /** Icon name for the badge */
  icon: NeonIconName;
  /** Index number for the ghost numeral */
  index: number;
}

/* ── Reusable Service Block ─────────────────────────────── */

export function ServiceBlock({
  id,
  cluster,
  title,
  description,
  deliverables,
  outcomeLine,
  side,
  projectType,
  imageSrc,
  imageAlt,
  eagerLoad = false,
  icon,
  index,
}: ServiceBlockProps) {
  const isLeft = side === 'left';
  const isBuild = cluster.includes('BUILD');

  // Reduced cluster-based ambient glow (dialed back to avoid competing with image glow)
  const glowStyle = isBuild
    ? 'radial-gradient(circle, rgba(123,47,247,0.15) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(247,37,133,0.14) 0%, rgba(255,140,66,0.08) 45%, transparent 70%)';

  return (
    <section id={id} className="relative w-full py-16 md:py-20 px-6 md:px-12 overflow-hidden scroll-mt-28">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Cluster-specific ambient glow behind the block — reduced opacity */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-[800px] h-[800px] pointer-events-none z-0" 
        style={{ background: glowStyle, filter: 'blur(100px)', opacity: 0.6 }}
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

          {/* ── Text Side ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex flex-col relative"
          >
            {/* Ghost Numeral */}
            <div className="absolute -top-5 right-5 text-[100px] font-extrabold text-white/[0.07] leading-none z-0 pointer-events-none select-none">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              {/* Cluster label & Icon Badge */}
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ boxShadow: '0 0 0px rgba(247,37,133,0)' }}
                  whileInView={{ boxShadow: ['0 0 20px rgba(247,37,133,0.6)', '0 0 8px rgba(247,37,133,0.4)'] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-12 h-12 rounded-[14px] bg-white/5 border border-white/[0.12] flex flex-shrink-0 items-center justify-center"
                >
                  <NeonIcon icon={icon} size={24} />
                </motion.div>
                <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">
                  {cluster}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-[34px] lg:text-[36px] font-extrabold text-white tracking-tight leading-tight">
                {title}
              </h2>

              {/* Description */}
              <p className="text-base md:text-[17px] text-white/[0.65] leading-relaxed font-normal max-w-[480px]">
                {description}
              </p>

              {/* Deliverables */}
              <ul className="flex flex-col gap-3 mt-2">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#7B2FF7] flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-white/70 leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>

              {/* Outcome line */}
              {outcomeLine && (
                <p className="text-sm italic font-medium mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F72585] to-[#FF8C42]">
                  {outcomeLine}
                </p>
              )}

              {/* CTA link */}
              <Link
                href={`/contact?service=${encodeURIComponent(projectType)}`}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] hover:opacity-80 transition-opacity mt-2 group w-fit"
              >
                Start a Project
                <HiArrowRight className="w-4 h-4 text-[#F72585] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ── Visual Side (Image Slot — no Neon Glass frame) ── */}
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex items-center justify-center min-h-[240px] md:min-h-[320px] order-first lg:order-none group/img"
          >
            <img 
              src={imageSrc}
              alt={imageAlt}
              loading={eagerLoad ? 'eager' : 'lazy'}
              className="w-full h-full max-w-[560px] object-contain transition-all duration-400 ease-out group-hover/img:scale-[1.02] group-hover/img:drop-shadow-[0_0_35px_rgba(247,37,133,0.6)]"
              style={{ filter: 'drop-shadow(0 0 0px transparent)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── All 6 Service Blocks (data-driven) ─────────────────── */

const SERVICES_DATA: Omit<ServiceBlockProps, 'index'>[] = [
  {
    id: 'saas-development',
    icon: 'server-stack',
    imageSrc: '/images/service-saas-development.png',
    imageAlt: 'SaaS development dashboard showing 99.9% uptime and rising usage metrics',
    eagerLoad: true,
    cluster: 'BUILD & POWER',
    title: 'SaaS Development',
    description: 'Custom software built to scale with your business — from MVP to full production platform. We handle the full lifecycle — architecture, development, and deployment — using modern frameworks built for long-term maintainability, so your platform grows without needing a rebuild.',
    deliverables: [
      'Custom web app development',
      'API integration',
      'Scalable cloud architecture',
      'Ongoing technical support',
    ],
    outcomeLine: 'Optimized for speed, security, and growth.',
    side: 'left',
    projectType: 'SaaS Development',
  },
  {
    id: 'web-maintenance',
    icon: 'shield-check',
    imageSrc: '/images/service-web-development-maintenance.png',
    imageAlt: 'Website security and maintenance monitoring panel with uptime and performance status',
    cluster: 'BUILD & POWER',
    title: 'Web Development & Maintenance',
    description: "From custom-built websites to ongoing care — we design, develop, and maintain sites that stay fast, secure, and up to date long after launch. Whether you need a brand-new platform or want your existing site running flawlessly, our team handles it end-to-end — no juggling separate agencies for build and upkeep.",
    deliverables: [
      'Custom website design & development',
      'Responsive, conversion-focused builds',
      'Ongoing security updates & performance monitoring',
      'Uptime monitoring & backups',
    ],
    outcomeLine: 'Built right the first time. Kept right every time after.',
    side: 'right',
    projectType: 'Web Maintenance',
  },
  {
    id: 'shopify-ecommerce',
    icon: 'shopping-bag-arrow',
    imageSrc: '/images/service-shopify-ecommerce.png',
    imageAlt: 'Branded e-commerce storefront interface with product grid and checkout button',
    cluster: 'BUILD & POWER',
    title: 'Shopify & E-commerce Stores',
    description: 'High-converting online stores built to sell, from custom Shopify builds to full checkout optimization. We design every step of the buyer journey — product pages, cart flow, and payment — to reduce drop-off and turn browsers into repeat customers.',
    deliverables: [
      'Custom Shopify theme development',
      'Product page optimization',
      'Checkout & payment setup',
      'Ongoing store support',
    ],
    outcomeLine: 'Built to convert, designed to scale.',
    side: 'left',
    projectType: 'Shopify & E-commerce',
  },
  {
    id: 'social-media-marketing',
    icon: 'megaphone-signal',
    imageSrc: '/images/service-social-media.png',
    imageAlt: 'Social media content calendar and engagement analytics interface',
    cluster: 'MARKET & GROW',
    title: 'Social Media & Digital Marketing',
    description: 'Content and campaigns that build real audiences and turn followers into customers. From content calendars to community management, we build a consistent brand presence that compounds trust over time instead of chasing short-term spikes.',
    deliverables: [
      'Content strategy & calendar',
      'Community management',
      'Brand voice development',
      'Performance tracking',
    ],
    outcomeLine: 'Real engagement, not vanity metrics.',
    side: 'right',
    projectType: 'Social Media Marketing',
  },
  {
    id: 'meta-google-ads',
    icon: 'target-chart',
    imageSrc: '/images/service-meta-google-ads.png',
    imageAlt: 'Ad performance dashboard showing rising click-through-rate trend and audience targeting',
    cluster: 'MARKET & GROW',
    title: 'Meta & Google Ads',
    description: 'Paid campaigns engineered for ROI, not just reach — every dollar tracked and optimized. We continuously test creative, audiences, and placements — cutting what underperforms and scaling what converts, so your spend gets more efficient every month.',
    deliverables: [
      'Campaign strategy & setup',
      'Audience targeting & A/B testing',
      'Ad creative direction',
      'Monthly performance reporting',
    ],
    outcomeLine: 'Every dollar tracked. Every result measured.',
    side: 'left',
    projectType: 'Meta & Google Ads',
  },
  {
    id: 'linkedin-branding',
    icon: 'badge-profile',
    imageSrc: '/images/service-linkedin-branding.png',
    imageAlt: 'LinkedIn professional branding profile card with engagement and connection stats',
    cluster: 'MARKET & GROW',
    title: 'LinkedIn Branding',
    description: 'Positioning your business — and its founders — as an authority in your industry. We build out profiles, thought-leadership content, and engagement strategy that turns LinkedIn into a real B2B pipeline, not just a static resume page.',
    deliverables: [
      'Company page optimization',
      'Founder/executive personal branding',
      'Thought-leadership content',
      'Engagement strategy',
    ],
    outcomeLine: 'Authority that compounds over time.',
    side: 'right',
    projectType: 'LinkedIn Branding',
  },
];

/* ── Cluster Re-announcement Component ──────────────────── */

function ClusterDivider({ label }: { label: string }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center pt-24 pb-8">
      <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/20 mb-6" />
      <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">
          {label}
        </span>
      </div>
    </div>
  );
}

export function ServiceDeepDives() {
  return (
    <div className="pb-24">
      {SERVICES_DATA.map((service, index) => {
        // Render a divider before the very first item, and before the first item of a new cluster
        const showDivider = index === 0 || service.cluster !== SERVICES_DATA[index - 1].cluster;
        
        return (
          <React.Fragment key={service.id}>
            {showDivider && <ClusterDivider label={service.cluster} />}
            <ServiceBlock index={index} {...service} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
