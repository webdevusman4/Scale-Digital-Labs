'use client';

import React from 'react';
import { motion } from 'motion/react';

export function AboutHero() {
  return (
    <section className="about-hero-height relative w-full pt-8 pb-10 md:pb-[60px] px-6 md:px-12 max-w-7xl mx-auto overflow-x-clip flex flex-col justify-center">

      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] opacity-[0.08] blur-[150px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-12 lg:gap-16">

        {/* Left Column (Heading + Sub Context) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pb-6">

          {/* Main Context (Heading) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <h1 className="about-hero-headline text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[1.0] text-white pt-2">
              DRIVING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">
                DIGITAL GROWTH
              </span> <br />
              GLOBALLY.
            </h1>
          </motion.div>

          {/* Sub Context (Mission Statement) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6 w-full mt-12"
          >
            <div className="flex items-center gap-6">
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
                    ABOUT US
                  </span>
                </div>
              </div>

              <div className="flex-1 h-[1px] bg-white/20" />
            </div>

            <div className="about-hero-text space-y-4">
              <p className="text-[16px] leading-[1.65] text-white/65">
                ScaleDigitalLabs is a premier digital agency specializing in high-performance web development, Shopify & e-commerce stores, and data-driven digital marketing.
              </p>
              <p className="text-[16px] leading-[1.65] text-white/65">
                We build and maintain what powers your brand &mdash; SaaS development, Web Dev &amp; Maintenance, and Shopify-powered stores. Then we grow it with Google &amp; Meta Ads, social media marketing, and LinkedIn branding.
              </p>
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
          <div className="about-hero-image-wrapper relative w-full h-full aspect-[4/3] md:aspect-auto overflow-visible rounded-[24px] group">

            {/* Ambient Glow — only visible on hover */}
            <div
              className="absolute inset-[-20px] rounded-[30px] -z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
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
              src="/images/about-hero.png"
              alt="ScaleDigitalLabs - Analytics and Development Workspace"
              className="w-full h-full object-cover rounded-[24px]"
              style={{ filter: 'none' }}
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}
