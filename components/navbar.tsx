'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { HiBars3, HiXMark, HiArrowRight } from 'react-icons/hi2';

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
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on route change (in case a link is clicked programmatically)
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
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
            <span className="font-bold text-white tracking-tight text-lg max-[360px]:text-base">ScaleDigitalLabs</span>
          </Link>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`transition-colors ${pathname === link.href ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA Button and Hamburger */}
          <div className="flex items-center gap-3 max-[360px]:gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white text-black font-bold text-[10px] tracking-widest uppercase hover:bg-white/90 transition-colors shadow-lg group"
            >
              <span className="hidden sm:inline">Start a Project</span>
              <span className="sm:hidden">Start</span>
              <GradientArrow className="transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Hamburger Button (Mobile only) */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="md:hidden flex items-center justify-center flex-shrink-0 w-11 h-11 max-[360px]:w-10 max-[360px]:h-10 rounded-full bg-white/5 border border-white/12 text-white"
            >
              <HiBars3 className="w-6 h-6 max-[360px]:w-5 max-[360px]:h-5" />
            </button>
          </div>
          
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <MobileMenu links={navLinks} pathname={pathname} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ links, pathname, onClose }: { links: any[], pathname: string, onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 right-0 bottom-0 z-[70] w-[80%] max-w-[340px] 
                   bg-[#0B0F19]/98 backdrop-blur-xl border-l border-white/10 
                   flex flex-col p-6 md:hidden"
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-11 h-11 flex items-center justify-center rounded-full 
                       bg-white/5 border border-white/12 text-white"
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto flex-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center h-14 px-4 rounded-xl text-lg 
                           font-semibold transition-colors ${
                  isActive ? 'text-white bg-white/5' : 'text-white/60'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 
                                    rounded-full bg-gradient-to-b from-[#7B2FF7] via-[#F72585] to-[#FF8C42]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto pt-6 border-t border-white/10">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full h-14 rounded-full 
                       bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] 
                       text-white font-bold group"
          >
            Start a Project
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </>
  );
}
