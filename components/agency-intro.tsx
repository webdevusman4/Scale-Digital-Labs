import React from 'react';
import Link from 'next/link';
import { HiArrowRight, HiLightningBolt, HiChartBar, HiCode } from 'react-icons/hi';

export function AgencyIntro() {
  return (
    <div className="relative w-full flex flex-col gap-6">
      
      {/* Top Row: Mission + Main Visual */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        
        {/* Main Mission Card */}
        <div className="interactive-card group relative flex-1 p-8 md:p-12 overflow-hidden">
          <div className="relative z-10 flex flex-col h-full justify-between gap-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-max border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 shadow-[0_0_10px_#F72585]"
                style={{ background: 'linear-gradient(135deg, #7B2FF7, #F72585)' }}
              />
              <span className="text-white/80 font-mono text-xs tracking-[0.15em] font-semibold uppercase">
                Our Mission
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-white">
                We Build Systems <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">
                  That Scale.
                </span>
              </h2>
              
              <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                ScaleDigitalLabs is a development and growth studio replacing bloated systems with high-performance code and ROI-driven marketing.
              </p>

              <Link 
                href="/about"
                className="inline-flex items-center justify-center gap-3 w-max mt-4 px-6 py-3 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:scale-105 transition-transform duration-300"
              >
                Learn more about us
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Visual / Abstract Card */}
        <div className="static-card group relative w-full lg:w-[400px] xl:w-[450px] min-h-[400px] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F72585]/5 via-transparent to-[#FF8C42]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Abstract Glowing Orb */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            {/* Pulsing layers */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7B2FF7] to-[#F72585] blur-[40px] opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#F72585] to-[#FF8C42] blur-[20px] mix-blend-overlay opacity-60" />
            <div className="absolute inset-12 rounded-full bg-white blur-[8px] opacity-30 mix-blend-overlay" />
            
            <div className="relative z-10 w-24 h-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(247,37,133,0.3)] group-hover:rotate-180 transition-transform duration-1000 ease-in-out">
               <HiCode className="w-10 h-10 text-white/80" />
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B2FF7] to-[#F72585] flex items-center justify-center shrink-0">
                 <HiLightningBolt className="text-white w-5 h-5" />
               </div>
               <div>
                 <p className="text-white font-bold text-sm">Clean Architecture</p>
                 <p className="text-white/60 text-xs">Built for the future</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Three feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* Feature 1 */}
        <div className="interactive-card group relative p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#7B2FF7]/10 blur-[40px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-[#7B2FF7]/20 transition-colors duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#7B2FF7] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_15px_rgba(123,47,247,0.15)]">
              <HiCode className="w-7 h-7" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">High-Performance Code</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We write clean, optimized code that loads blazing fast and provides a buttery smooth user experience.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="interactive-card group relative p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F72585]/10 blur-[40px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-[#F72585]/20 transition-colors duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#F72585] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_15px_rgba(247,37,133,0.15)]">
              <HiChartBar className="w-7 h-7" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">ROI-Driven Marketing</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Data-backed strategies designed to maximize your return on investment and scale your growth predictably.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="interactive-card group relative p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF8C42]/10 blur-[40px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-[#FF8C42]/20 transition-colors duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#FF8C42] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_15px_rgba(255,140,66,0.15)]">
              <HiLightningBolt className="w-7 h-7" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Rapid Execution</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We ship fast and iterate quicker. Get your product to market and start learning from real users immediately.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
