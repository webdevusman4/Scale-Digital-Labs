'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FaLinkedin, FaXTwitter, FaInstagram, FaGithub } from 'react-icons/fa6';

const FOOTER_LINKS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "SaaS Development", href: "/services#saas-development" },
      { label: "Web Dev & Maintenance", href: "/services#web-maintenance" },
      { label: "Shopify & E-commerce", href: "/services#shopify-ecommerce" },
      { label: "Social Media & Marketing", href: "/services#social-media-marketing" },
      { label: "Meta & Google Ads", href: "/services#meta-google-ads" },
      { label: "LinkedIn Branding", href: "/services#linkedin-branding" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/about#process" },
      { label: "Portfolio", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative w-full pt-24 pb-12 overflow-hidden bg-[#05070A] border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-gradient-to-b from-[#7B2FF7]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top CTA Section — FIX 4: Slimmer closing strip */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-12 mb-12 border-b border-white/10">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white text-center md:text-left">
            READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">SCALE?</span>
          </h2>
          <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-white transition-all duration-200 bg-[#7B2FF7] rounded-full hover:bg-[#6B21E0] hover:shadow-[0_0_20px_rgba(123,47,247,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B2FF7] overflow-hidden">
            <span className="relative z-10 tracking-widest uppercase text-xs">Start a Project</span>
            {/* Gradient arrow */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-transform group-hover:translate-x-0.5">
              <defs>
                <linearGradient id="footer-arrow-grad" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C4A1FF" />
                  <stop offset="55%" stopColor="#FFB3D9" />
                  <stop offset="100%" stopColor="#FFD4A8" />
                </linearGradient>
              </defs>
              <path d="M3 7h8m0 0L8 4m3 3L8 10" stroke="url(#footer-arrow-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7B2FF7] via-[#F72585] to-[#FF8C42]"></div>
              <span className="font-bold text-white tracking-tight text-xl">ScaleDigitalLabs</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Premium development and growth infrastructure studio replacing bloated systems with high-performance code and ROI-obsessed funnels.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {[FaLinkedin, FaXTwitter, FaInstagram, FaGithub].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#F72585] hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {FOOTER_LINKS.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h3 className="text-white font-bold tracking-widest uppercase text-sm">{col.title}</h3>
              <ul className="flex flex-col gap-4">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-0 h-px bg-[#7B2FF7] transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} ScaleDigitalLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <span>Designed with precision.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F72585] animate-pulse"></span>
            <span>Built to perform.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
