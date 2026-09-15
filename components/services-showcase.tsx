'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { NeonIcon, type NeonIconName } from '@/components/ui/neon-icon';
import { HiArrowRight } from 'react-icons/hi';

const GRADIENT_TEXT =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]";

const services: { icon: NeonIconName; title: string; href: string }[] = [
  { icon: 'server-stack', title: 'SaaS Development', href: '/services#saas-development' },
  { icon: 'shield-check', title: 'Web Dev & Maintenance', href: '/services#web-maintenance' },
  { icon: 'shopping-bag-arrow', title: 'Shopify & E-commerce Stores', href: '/services#shopify-ecommerce' },
  { icon: 'megaphone-signal', title: 'Social Media & Digital Marketing', href: '/services#social-media-marketing' },
  { icon: 'target-chart', title: 'Meta & Google Ads', href: '/services#meta-google-ads' },
  { icon: 'badge-profile', title: 'LinkedIn Branding', href: '/services#linkedin-branding' },
];

export function ServicesShowcase() {
  return (
    <section className="relative w-full max-w-5xl mx-auto pt-32 pb-24 px-4 md:px-8">
      {/* Title */}
      <div className="w-full pb-10 flex flex-col items-center text-center">
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
            What We Do
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
          Our <span className={GRADIENT_TEXT}>Services.</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
          >
            <Link href={service.href} className="interactive-card block h-full group">
              <div className="py-8 px-6 h-full flex flex-col items-center justify-center text-center gap-4">
                <div
                  className="w-[56px] h-[56px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-white/25"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <NeonIcon icon={service.icon} size={28} animated />
                </div>
                <h3 className="text-[18px] m-0 font-bold text-white tracking-tight leading-snug">
                  {service.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="w-full flex justify-center mt-12">
        <Link 
          href="/services"
          className="inline-flex items-center gap-2 text-[#7B2FF7] font-semibold tracking-widest uppercase hover:text-white transition-colors group text-sm"
        >
          Explore All Services
          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
