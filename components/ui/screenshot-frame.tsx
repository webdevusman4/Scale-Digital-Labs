'use client';

import React from 'react';

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

/**
 * Reusable browser-window frame for project screenshots.
 * Renders a consistent chrome bar with 3 dots on top of any image,
 * enforcing uniform aspect ratio via the .project-screenshot-frame CSS class.
 */
export function ScreenshotFrame({ src, alt, className = '', eager = false }: ScreenshotFrameProps) {
  return (
    <div className={`project-screenshot-frame ${className}`}>
      {/* Chrome bar background */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[rgba(20,20,30,0.9)] z-[2] flex items-center px-3 gap-1.5">
        <span className="w-[10px] h-[10px] rounded-full bg-white/[0.15]" />
        <span className="w-[10px] h-[10px] rounded-full bg-white/[0.15]" />
        <span className="w-[10px] h-[10px] rounded-full bg-white/[0.15]" />
      </div>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="relative z-[1]"
      />
    </div>
  );
}
