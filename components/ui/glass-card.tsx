'use client';

import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** Optional href — if provided, the card renders as a clickable link */
  href?: string;
  /** Whether the card responds to hover (lift, glow, mouse tracking). Defaults to true. */
  interactive?: boolean;
}

/**
 * NEON GLASS CARD v2 — Master reusable glassmorphism card.
 *
 * Spec:
 * - Background: rgba(255,255,255,0.04), backdrop-blur: 24px, saturate: 200%
 * - Border: 1px solid rgba(255,255,255,0.12), radius: 20px
 * - Outer glow: 40px purple + 80px fuchsia + 8px 32px deep shadow
 * - Top-edge gradient highlight (--gradient-primary at 40% opacity)
 * - Hover: glow expands +20px, fuchsia rises to 0.6, border brightens,
 *          translateY(-4px), transition 0.35s ease
 * - Mouse-tracking radial glow on hover
 */
export function GlassCard({ children, className = '', href, interactive = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const restShadow =
    '0 0 40px rgba(123,47,247,0.45), 0 0 80px rgba(247,37,133,0.15), 0 8px 32px rgba(0,0,0,0.5)';
  const hoverShadow =
    '0 0 60px rgba(123,47,247,0.55), 0 0 100px rgba(247,37,133,0.6), 0 12px 40px rgba(0,0,0,0.55)';

  const card = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative overflow-hidden rounded-[20px]
        ${href ? 'cursor-pointer' : interactive ? 'cursor-default' : ''}
        ${className}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(24px) saturate(200%)',
        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
        border: (hovered && interactive)
          ? '1px solid rgba(255, 255, 255, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: (hovered && interactive) ? hoverShadow : restShadow,
        transform: (hovered && interactive) ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Top highlight edge — gradient-primary at 40% opacity, fading toward edges */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(123,47,247,0.4) 20%, rgba(247,37,133,0.4) 50%, rgba(255,140,66,0.35) 80%, transparent 100%)',
        }}
      />

      {/* Mouse-tracking radial glow */}
      {interactive && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(123,47,247,0.15), rgba(247,37,133,0.06) 40%, transparent 60%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {card}
      </a>
    );
  }

  return card;
}
