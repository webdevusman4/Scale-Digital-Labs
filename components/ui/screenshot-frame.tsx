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
      {/* Removed Chrome bar background to prevent hiding image */}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="relative z-[1]"
      />
    </div>
  );
}
