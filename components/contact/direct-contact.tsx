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
          className="flex items-center gap-2.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
          <span className="text-xs font-bold tracking-[0.1em] uppercase text-white/50">
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
            className="flex items-center gap-3 text-[17px] text-white font-semibold hover:text-[#7B2FF7] transition-colors group"
          >
            <HiOutlineEnvelope className="w-[22px] h-[22px] text-[#7B2FF7] group-hover:scale-110 transition-transform" />
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
            <HiOutlineGlobeAlt className="w-[18px] h-[18px]" />
            Working with clients globally, remotely.
          </p>
        </motion.div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] max-w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
