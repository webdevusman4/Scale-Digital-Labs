'use client';

import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function SpotlightCard({ 
  children, 
  className = '',
  glowColor = 'rgba(123, 47, 247, 0.15)' // Default neon purple glow
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[20px] transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(24px) saturate(200%)',
        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow:
          '0 0 40px rgba(123,47,247,0.45), 0 0 80px rgba(247,37,133,0.15), 0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      {/* Top edge highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(123,47,247,0.4) 20%, rgba(247,37,133,0.4) 50%, rgba(255,140,66,0.35) 80%, transparent 100%)',
        }}
      />

      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      
      {/* Content wrapper to ensure it stays above the glow layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
