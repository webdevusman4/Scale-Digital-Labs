'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'motion/react';

const PHRASES = [
  { text: "EVERY DIGITAL NEED.", highlight: "GLOBALLY." },
  { text: "UNMATCHED DIGITAL", highlight: "EXCELLENCE." },
  { text: "SCALABLE GROWTH", highlight: "ARCHITECTURE." },
  { text: "LIMITLESS BRAND", highlight: "ELEVATION." },
  { text: "NEXT-GEN WEB", highlight: "EXPERIENCES." },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % PHRASES.length);
        setFade(true);
      }, 300);
    }, 1800); // 1.8 seconds rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[calc(100vh_-_80px)] pt-[60px] pb-[55px] px-6 bg-transparent overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[600px] bg-[#7B2FF7] opacity-[0.05] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[780px] mx-auto text-center flex flex-col items-center mt-12 md:mt-24">
        
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 md:px-4 md:py-2 rounded-full w-max mb-8"
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
          <span className="text-white/85 font-mono text-base md:text-sm tracking-[0.08em] font-semibold uppercase">
            DIGITAL GROWTH PARTNERS
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 
          className="font-extrabold leading-[1.1] tracking-tight mb-6"
          style={{ 
            fontSize: 'clamp(42px, 5.5vw, 58px)',
            overflow: 'visible',
            whiteSpace: 'normal',
            wordBreak: 'keep-all',
            maxWidth: '100%',
            minHeight: '140px'
          }}
        >
          ONE TEAM.{' '}
          <motion.span
            animate={{ opacity: fade ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {PHRASES[index].text}{' '}
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]" 
              style={{ filter: 'drop-shadow(0 0 15px rgba(247, 37, 133, 0.4))' }}
            >
              {PHRASES[index].highlight}
            </span>
          </motion.span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/65 font-normal leading-relaxed max-w-[700px] mb-12">
          We architect scalable systems and ROI-obsessed marketing funnels for brands ready to grow.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 md:px-9 md:py-4 rounded-full text-lg md:text-base font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
              boxShadow: '0 0 20px rgba(247, 37, 133, 0.3)',
              color: 'white',
            }}
          >
            Start a Project
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-lg md:text-base font-semibold tracking-wide text-white/80 hover:text-white transition-colors group"
          >
            See Our Work
            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
