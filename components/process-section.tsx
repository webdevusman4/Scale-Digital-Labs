'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { HiArrowRight } from 'react-icons/hi';
import { NeonIcon, type NeonIconName } from '@/components/ui/neon-icon';

const GRADIENT_TEXT =
  "text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]";

const steps: { title: string; icon: NeonIconName }[] = [
  { title: 'Discover', icon: 'badge-profile' },
  { title: 'Strategize', icon: 'target-chart' },
  { title: 'Build', icon: 'server-stack' },
  { title: 'Launch', icon: 'megaphone-signal' },
  { title: 'Scale', icon: 'shopping-bag-arrow' },
];

export function ProcessSection() {
  return (
    <section className="relative w-full max-w-5xl mx-auto pt-24 pb-32 px-4 md:px-8">
      {/* Title */}
      <div className="w-full pb-16 flex flex-col items-center text-center">
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
            How We Work
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2">
          Our Process, <span className={GRADIENT_TEXT}>Simplified.</span>
        </h2>
      </div>

      {/* Process Nodes (Desktop) */}
      <div className="relative w-full max-w-[900px] mx-auto hidden md:flex justify-between items-center mt-8">
        {/* Connecting Gradient Line */}
        <div 
          className="absolute top-8 left-[5%] right-[5%] h-[2px] -translate-y-1/2 z-0"
          style={{
            background: 'linear-gradient(90deg, rgba(123,47,247,0.2) 0%, rgba(247,37,133,0.5) 50%, rgba(255,140,66,0.2) 100%)',
          }}
        />

        {steps.map((step, index) => (
          <motion.div 
            key={step.title}
            className="relative z-10 flex flex-col items-center gap-4 w-[120px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Node Circle */}
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center cursor-default shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 0 20px rgba(247,37,133,0.2)',
              }}
            >
              <NeonIcon icon={step.icon} size={24} animated />
            </div>
            
            {/* Text */}
            <div className="flex flex-col items-center text-center">
              <span className={`text-[12px] font-mono font-bold tracking-widest mb-1 ${GRADIENT_TEXT}`}>
                0{index + 1}
              </span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                {step.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Vertical List fallback */}
      <div className="flex flex-col gap-8 md:hidden relative px-4">
        {/* Vertical Line */}
        <div 
          className="absolute left-[47px] top-0 bottom-0 w-[2px] z-0"
          style={{
            background: 'linear-gradient(180deg, rgba(123,47,247,0.2) 0%, rgba(247,37,133,0.5) 50%, rgba(255,140,66,0.2) 100%)',
          }}
        />

        {steps.map((step, index) => (
          <div key={step.title} className="relative z-10 flex items-center gap-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <NeonIcon icon={step.icon} size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`text-[12px] font-mono font-bold tracking-widest mb-1 ${GRADIENT_TEXT}`}>
                0{index + 1}
              </span>
              <span className="text-lg font-bold text-white uppercase tracking-wider">
                {step.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="w-full flex justify-center mt-16">
        <Link 
          href="/about"
          className="inline-flex items-center gap-2 text-[#7B2FF7] font-semibold tracking-widest uppercase hover:text-white transition-colors group text-sm"
        >
          See how it works
          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
