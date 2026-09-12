import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export function AgencyIntro() {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex justify-center">
      {/* Ambient Wash */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(123,47,247,0.08) 0%, rgba(247,37,133,0.08) 25%, rgba(255,140,66,0.05) 50%, transparent 60%)',
          filter: 'blur(120px)',
        }}
      />
      
      {/* Neon Glassmorphic Card */}
      <div
        className="relative z-10 w-full rounded-[20px] p-8 md:p-12 lg:p-16 overflow-hidden max-w-[1100px]"
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 0 40px rgba(123,47,247,0.45), 0 0 80px rgba(247,37,133,0.15), 0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        {/* Top edge highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none rounded-t-[20px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(123,47,247,0.4) 20%, rgba(247,37,133,0.4) 50%, rgba(255,140,66,0.35) 80%, transparent 100%)',
          }}
        />
        
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-16 bg-transparent">
          
          {/* Left Column (Typography) */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6 items-start">

            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-max"
              style={{
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(rgba(11,15,25,0.92), rgba(11,15,25,0.92)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)' }}
              />
              <span className="text-white/85 font-mono text-xs tracking-[0.08em] font-semibold uppercase">
                OUR MISSION
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
              We Build Systems{' '}
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]"
                style={{ filter: 'drop-shadow(0 0 10px rgba(247,37,133,0.3))' }}
              >
                That Scale.
              </span>
            </h2>
            
            <p className="text-white/65 text-base md:text-lg max-w-md leading-relaxed">
              ScaleDigitalLabs is a development and growth studio replacing bloated systems with high-performance code and ROI-driven marketing.
            </p>

            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#F72585] hover:text-white transition-colors group mt-2"
            >
              Learn more about us
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column (Visual Container) */}
          <div className="w-full lg:w-[50%] relative">
            
            {/* ANCHORED GLOW */}
            <div
              className="absolute pointer-events-none hidden lg:block"
              aria-hidden="true"
              style={{
                top: '50%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(123,47,247,0.2) 0%, rgba(247,37,133,0.2) 35%, rgba(255,140,66,0.15) 70%, transparent 100%)',
                filter: 'blur(60px)',
                transform: 'translate(20%, -50%)',
                zIndex: 0,
              }}
            />
            
            {/* Dashboard Mockup Illustration */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#0B0F19]/80 backdrop-blur-md z-10 flex flex-col p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* Header */}
              <div className="w-full flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="w-24 h-2 rounded-full bg-white/5" />
              </div>

              {/* Grid Content */}
              <div className="flex-1 flex gap-4 md:gap-6">
                {/* Sidebar */}
                <div className="w-[30%] h-full flex flex-col gap-3">
                  <div className="w-full h-8 rounded-md bg-white/10" />
                  <div className="w-full h-8 rounded-md bg-white/5" />
                  <div className="w-full h-8 rounded-md bg-white/5" />
                  <div className="w-full h-8 rounded-md bg-white/5" />
                </div>
                
                {/* Main Area */}
                <div className="flex-1 h-full flex flex-col gap-4 md:gap-6">
                  {/* Chart area */}
                  <div className="w-full h-[60%] rounded-lg border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-4 relative overflow-hidden">
                    {/* Abstract line chart */}
                    <svg viewBox="0 0 100 50" className="absolute bottom-0 left-0 w-full h-[80%]" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7B2FF7" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#7B2FF7" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,50 L0,30 C20,30 30,10 50,20 C70,30 80,5 100,10 L100,50 Z" fill="url(#chartGrad)" />
                      <path d="M0,30 C20,30 30,10 50,20 C70,30 80,5 100,10" fill="none" stroke="#F72585" strokeWidth="2" />
                    </svg>
                  </div>
                  {/* Stats area */}
                  <div className="flex gap-4 md:gap-6 flex-1">
                    <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-3 flex flex-col justify-end">
                      <div className="w-8 h-2 rounded-full bg-[#FF8C42]/60 mb-2" />
                      <div className="w-full h-1.5 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-3 flex flex-col justify-end">
                      <div className="w-12 h-2 rounded-full bg-[#F72585]/60 mb-2" />
                      <div className="w-3/4 h-1.5 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
