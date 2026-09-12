'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HiArrowRight } from 'react-icons/hi2';

export function ServicesHero() {
  return (
    <section className="relative w-full services-hero-height flex items-center pt-8 pb-10 md:pb-[60px] px-6 md:px-12 max-w-7xl mx-auto overflow-x-clip">
      
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] opacity-[0.08] blur-[150px] pointer-events-none" />

      <div className="relative w-full z-10 flex flex-col md:flex-row items-stretch gap-12 lg:gap-16">
        
        {/* Left Column (Heading + Sub Context) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pb-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 w-full"
          >
            {/* Main Context (Heading) */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[1.0] text-white pt-2">
              ONE TEAM. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] drop-shadow-[0_0_30px_rgba(123,47,247,0.4)]">
                EVERY DIGITAL NEED.
              </span>
            </h1>

            {/* Eyebrow & Divider */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex flex-col items-start">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-max"
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
                    WHAT WE DO
                  </span>
                </div>
              </div>
              <div className="flex-1 h-[1px] bg-white/20" />
            </div>

            {/* Subheadline & CTA */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-[15px] leading-[1.65] text-white/65">
                  From building your platform to growing your audience — explore the full ecosystem we bring to your brand.
                </p>
                <p className="text-[15px] leading-[1.65] text-white/65">
                  Whether you need to build and maintain what powers your business, or grow the audience that finds it, every service below works together as one connected system — not six separate vendors.
                </p>
              </div>
              
              <a 
                href="#process" 
                className="inline-flex items-center gap-2 text-[15px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] group hover:opacity-80 transition-opacity w-max"
              >
                See Our Process
                <HiArrowRight className="w-4 h-4 text-[#F72585] transition-transform group-hover:translate-x-1" />
              </a>

              {/* Trust Stats Row */}
              <div className="flex items-center gap-5 mt-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] bg-[length:60px_100%] bg-left">6</span>
                  <span className="text-[12px] text-white/50 uppercase tracking-[0.05em]">Core Services</span>
                </div>
                <div className="w-[1px] h-[28px] bg-white/[0.12]" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] bg-[length:60px_100%] bg-left">1</span>
                  <span className="text-[12px] text-white/50 uppercase tracking-[0.05em]">Dedicated Team</span>
                </div>
                <div className="w-[1px] h-[28px] bg-white/[0.12]" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[20px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] bg-[length:60px_100%] bg-left">24/7</span>
                  <span className="text-[12px] text-white/50 uppercase tracking-[0.05em]">Support</span>
                </div>
              </div>

            </div>
          </motion.div>
          
        </div>

        {/* Right Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-1/2 flex-1 h-auto self-stretch"
        >
          {/* 
            On mobile, we enforce an aspect ratio. 
            On desktop, it stretches to match the height of the left column.
          */}
          <div className="relative w-full h-full aspect-[4/3] md:aspect-auto overflow-visible rounded-[24px]">
            
            {/* Ambient Glow */}
            <div 
              className="absolute inset-[-20px] rounded-[30px] -z-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(123,47,247,0.15) 0%, rgba(247,37,133,0.15) 35%, rgba(255,140,66,0.1) 70%, transparent 100%)',
                filter: 'blur(30px)',
              }}
            />

            {/* Gradient Border Frame using Mask Composite */}
            <div 
              className="absolute inset-[-2px] rounded-[26px] pointer-events-none z-10"
              style={{
                padding: '2px',
                background: 'linear-gradient(135deg, #7B2FF7 0%, #F72585 55%, #FF8C42 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.6,
              }}
            />

            <img 
              src="/images/service-hero.png" 
              alt="ScaleDigitalLabs team reviewing a glowing growth dashboard wall display"
              className="w-full h-full object-cover rounded-[24px]"
              style={{ filter: 'none' }}
            />
            
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
