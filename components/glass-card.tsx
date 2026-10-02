import React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a standard cn utility, if not, we can use template literals

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  orbColor?: 'orange' | 'purple' | 'fuchsia' | 'primary';
  orbPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function GlassCard({
  children,
  className = '',
  orbColor = 'orange',
  orbPosition = 'top-left',
  ...props
}: GlassCardProps) {
  // Map our orb colors to actual gradients
  const orbGradients = {
    orange: 'from-[#FF512F] to-[#F09819]',
    purple: 'from-[#7B2FF7] to-[#B070FF]',
    fuchsia: 'from-[#F72585] to-[#FF4E9E]',
    primary: 'from-[#7B2FF7] via-[#F72585] to-[#FF8C42]',
  };

  const orbPositions = {
    'top-left': '-top-8 -left-8',
    'top-right': '-top-8 -right-8',
    'bottom-left': '-bottom-8 -left-8',
    'bottom-right': '-bottom-8 -right-8',
  };

  return (
    <div className={`relative group ${className}`} {...props}>
      {/* 
        The Vibrant Orb behind the glass.
        It sits absolutely positioned behind the main card, creating the colorful 
        backdrop that makes the glassmorphism pop.
      */}
      <div
        className={`absolute w-32 h-32 rounded-3xl bg-gradient-to-br ${orbGradients[orbColor]} ${orbPositions[orbPosition]} 
                    opacity-80 transition-transform duration-500 group-hover:scale-110 -z-10`}
      />

      {/* 
        The Glass Card itself.
        Using a dark translucent background, strong backdrop blur, and a crisp white translucent border.
      */}
      <div
        className="relative z-10 w-full h-full p-8 rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Subtle inner highlight to make it look like a physical glass edge */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 1px rgba(0,0,0,0.2)',
          }}
        />
        
        {/* Content goes here */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </div>
  );
}
