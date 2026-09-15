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
    <section className="relative w-full py-10 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-[600px] mx-auto flex flex-col items-center text-center gap-8">
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

        {/* Email */}
        <motion.a
          href="mailto:hello@scaledigitallabs.com"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 text-base text-white/75 font-medium hover:text-white transition-colors group"
        >
          <HiOutlineEnvelope className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          <span className="border-b border-transparent group-hover:border-white transition-colors">
            hello@scaledigitallabs.com
          </span>
        </motion.a>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#7B2FF7] hover:to-[#FF8C42] hover:border-transparent hover:scale-110 group"
            >
              <s.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* Global note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 text-xs text-white/40 font-medium"
        >
          <HiOutlineGlobeAlt className="w-3.5 h-3.5" />
          Working with clients globally, remotely.
        </motion.p>
      </div>
    </section>
  );
}
