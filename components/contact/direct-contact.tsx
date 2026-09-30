'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2';
import { FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';

/* ── Social Icon Button ─────────────────────────────────── */

const SOCIALS = [
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaXTwitter, href: '#', label: 'X / Twitter' },
];

export function DirectContact() {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-max"
          style={{
            border: '1px solid transparent',
            backgroundImage:
              'linear-gradient(rgba(11,15,25,0.92), rgba(11,15,25,0.92)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)' }} />
          <span className="text-white/85 font-mono text-xs tracking-[0.08em] font-semibold uppercase">
            OR REACH US DIRECTLY
          </span>
        </motion.div>

        {/* Horizontal Content Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-6 md:gap-8 flex-wrap justify-center"
        >
          {/* Email */}
          <a
            href="mailto:hello@scaledigitallabs.com"
            className="flex items-center gap-3 text-[17px] text-white font-semibold hover:text-white transition-colors group"
          >
            <HiOutlineEnvelope 
              className="w-[22px] h-[22px] group-hover:scale-110 transition-transform" 
              style={{ stroke: 'url(#service-icon-gradient)', filter: 'drop-shadow(0 0 8px rgba(247, 37, 133, 0.5))' }}
            />
            hello@scaledigitallabs.com
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-white/15 hidden md:block" />

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#7B2FF7] hover:to-[#FF8C42] hover:border-transparent hover:scale-110 group"
              >
                <s.icon className="w-[18px] h-[18px] text-white/70 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-white/15 hidden md:block" />

          {/* Global note */}
          <p className="flex items-center gap-2.5 text-[15px] text-white/50 font-medium">
            <HiOutlineGlobeAlt 
              className="w-[18px] h-[18px]" 
              style={{ stroke: 'url(#service-icon-gradient)', filter: 'drop-shadow(0 0 6px rgba(247, 37, 133, 0.45))' }}
            />
            Working with clients globally, remotely.
          </p>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
