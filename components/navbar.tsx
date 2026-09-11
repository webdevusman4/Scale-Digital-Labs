'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Inline SVG arrow icon with gradient stroke.
 * Matches the --gradient-primary system (purple→fuchsia→orange).
 */
function GradientArrow({ className = '' }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="nav-arrow-grad" x1="0" y1="0" x2="14" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7B2FF7" />
          <stop offset="55%" stopColor="#F72585" />
          <stop offset="100%" stopColor="#FF8C42" />
        </linearGradient>
      </defs>
      <path
        d="M3 7h8m0 0L8 4m3 3L8 10"
        stroke="url(#nav-arrow-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center md:top-6 md:px-6 pointer-events-none">
      <nav
        className="w-full max-w-7xl flex items-center justify-between px-6 py-4 md:py-3 md:rounded-full shadow-2xl transition-all duration-300 pointer-events-auto"
        style={{
          background: scrolled ? 'rgba(10, 10, 18, 0.85)' : 'rgba(255, 255, 255, 0.04)',
          backdropFilter: scrolled ? 'blur(12px) saturate(200%)' : 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(200%)' : 'blur(24px) saturate(200%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 0 30px rgba(123,47,247,0.15), 0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7B2FF7] via-[#F72585] to-[#FF8C42]"></div>
          <span className="font-bold text-white tracking-tight text-lg">ScaleDigitalLabs</span>
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium">
          <Link href="/about" className={`transition-colors ${pathname === '/about' ? 'text-white' : 'text-white/60 hover:text-white'}`}>
            About
          </Link>
          <Link href="/services" className={`transition-colors ${pathname === '/services' ? 'text-white' : 'text-white/60 hover:text-white'}`}>
            Services
          </Link>
          <Link href="/portfolio" className={`transition-colors ${pathname === '/portfolio' ? 'text-white' : 'text-white/60 hover:text-white'}`}>
            Portfolio
          </Link>
          <Link href="/contact" className={`transition-colors ${pathname === '/contact' ? 'text-white' : 'text-white/60 hover:text-white'}`}>
            Contact Us
          </Link>
        </div>

        {/* Right: CTA Button — FIX 4: gradient arrow icon */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black font-bold text-[10px] tracking-widest uppercase hover:bg-white/90 transition-colors shadow-lg"
        >
          Start a Project
          <GradientArrow className="transition-transform group-hover:translate-x-0.5" />
        </Link>
        
      </nav>
    </header>
  );
}
