'use client';

import React from 'react';

export type ServiceIllustrationVariant =
  | 'web-dev'
  | 'ecommerce'
  | 'google-ads'
  | 'meta-ads'
  | 'social-media'
  | 'linkedin-branding';

interface ServiceIllustrationProps {
  variant: ServiceIllustrationVariant;
  className?: string;
}

/**
 * "Control Room" style illustrations per service.
 * 
 * Each variant renders a dark scene with:
 * - Near-black background (#080B12)
 * - Faint circuit/grid linework at 10% opacity
 * - Unique glowing neon elements per service
 * - Background radial bloom (--glow-purple, 15% opacity, blurred 60px)
 * - All strokes in purple→fuchsia→orange palette
 */
export function ServiceIllustration({ variant, className = '' }: ServiceIllustrationProps) {
  return (
    <div
      className={`relative w-full aspect-[4/3] overflow-hidden rounded-2xl ${className}`}
      style={{ background: '#080B12' }}
    >
      {/* Circuit grid background at 10% opacity */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${variant}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${variant})`} />
      </svg>

      {/* Radial glow bloom behind illustration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(123,47,247,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Scene-specific SVG illustration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <IllustrationScene variant={variant} />
      </div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(8,11,18,0.8) 100%)',
        }}
      />
    </div>
  );
}

function IllustrationScene({ variant }: { variant: ServiceIllustrationVariant }) {
  const gradId = `ill-grad-${variant}`;
  const glowId = `ill-glow-${variant}`;

  return (
    <svg
      width="280"
      height="200"
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="280" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7B2FF7" />
          <stop offset="55%" stopColor="#F72585" />
          <stop offset="100%" stopColor="#FF8C42" />
        </linearGradient>
        <filter id={glowId}>
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#${glowId})`}>
        {getIllustration(variant, gradId)}
      </g>
    </svg>
  );
}

function getIllustration(variant: ServiceIllustrationVariant, gradId: string): React.ReactNode {
  const s = `url(#${gradId})`;
  const p = { stroke: s, strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
  const pThin = { ...p, strokeWidth: 1 };
  const pThick = { ...p, strokeWidth: 2 };

  switch (variant) {
    case 'web-dev':
      return (
        <>
          {/* Terminal window */}
          <rect x="60" y="30" width="160" height="110" rx="8" {...pThick} />
          <line x1="60" y1="50" x2="220" y2="50" {...p} />
          {/* Window dots */}
          <circle cx="75" cy="40" r="3" stroke={s} strokeWidth={1.5} fill="none" />
          <circle cx="87" cy="40" r="3" stroke={s} strokeWidth={1.5} fill="none" />
          <circle cx="99" cy="40" r="3" stroke={s} strokeWidth={1.5} fill="none" />
          {/* Code lines */}
          <line x1="75" y1="65" x2="115" y2="65" {...pThin} />
          <line x1="85" y1="78" x2="145" y2="78" {...pThin} />
          <line x1="85" y1="91" x2="130" y2="91" {...pThin} />
          <line x1="95" y1="104" x2="155" y2="104" {...pThin} />
          <line x1="75" y1="117" x2="105" y2="117" {...pThin} />
          {/* Floating brackets */}
          <text x="180" y="85" fill={s} fontSize="28" fontWeight="800" fontFamily="monospace" opacity="0.6">{'<>'}</text>
          {/* Cursor blink */}
          <rect x="157" y="100" width="2" height="12" fill={s} opacity="0.8" />
          {/* Floating orb */}
          <circle cx="40" cy="60" r="8" {...pThin} opacity="0.4" />
          <circle cx="245" cy="150" r="6" {...pThin} opacity="0.3" />
        </>
      );

    case 'ecommerce':
      return (
        <>
          {/* Shopping cart */}
          <path d="M50 50h15l12 60h100l12-42H85" {...pThick} />
          <circle cx="95" cy="120" r="6" {...p} />
          <circle cx="160" cy="120" r="6" {...p} />
          {/* Bar chart */}
          <rect x="190" y="90" width="16" height="50" rx="2" {...p} />
          <rect x="212" y="70" width="16" height="70" rx="2" {...p} />
          <rect x="234" y="50" width="16" height="90" rx="2" {...p} />
          {/* Trend arrow */}
          <polyline points="195,85 220,65 240,45 255,30" {...pThick} />
          <polyline points="248,30 255,30 255,37" {...p} />
          {/* Price tags */}
          <rect x="50" y="140" width="40" height="20" rx="4" {...pThin} opacity="0.5" />
          <text x="60" y="154" fill={s} fontSize="10" fontFamily="monospace" opacity="0.5">$99</text>
          {/* Plus sign */}
          <line x1="120" y1="50" x2="120" y2="70" {...pThin} opacity="0.4" />
          <line x1="110" y1="60" x2="130" y2="60" {...pThin} opacity="0.4" />
        </>
      );

    case 'google-ads':
      return (
        <>
          {/* Search bar */}
          <rect x="60" y="30" width="160" height="30" rx="15" {...pThick} />
          <circle cx="195" cy="45" r="8" {...p} />
          <line x1="199" y1="49" x2="205" y2="55" {...p} />
          {/* Ad results */}
          <rect x="60" y="75" width="160" height="25" rx="4" {...p} opacity="0.6" />
          <text x="70" y="91" fill={s} fontSize="8" fontWeight="700" fontFamily="sans-serif" opacity="0.5">AD</text>
          <line x1="90" y1="88" x2="160" y2="88" {...pThin} opacity="0.4" />
          <rect x="60" y="108" width="160" height="25" rx="4" {...p} opacity="0.4" />
          {/* Analytics graph */}
          <polyline points="60,170 90,160 120,165 150,145 180,150 210,130 240,120" {...pThick} />
          {/* Data points */}
          <circle cx="90" cy="160" r="3" {...p} />
          <circle cx="150" cy="145" r="3" {...p} />
          <circle cx="210" cy="130" r="3" {...p} />
          {/* Dollar signs floating */}
          <text x="240" y="60" fill={s} fontSize="14" fontWeight="700" opacity="0.3">$</text>
          <text x="35" y="90" fill={s} fontSize="12" fontWeight="700" opacity="0.2">$</text>
        </>
      );

    case 'meta-ads':
      return (
        <>
          {/* Targeting rings */}
          <circle cx="140" cy="100" r="60" {...pThin} opacity="0.3" />
          <circle cx="140" cy="100" r="40" {...p} opacity="0.5" />
          <circle cx="140" cy="100" r="20" {...pThick} opacity="0.8" />
          <circle cx="140" cy="100" r="4" fill={s} opacity="0.9" />
          {/* Megaphone on the left */}
          <path d="M30 80v20l8 3v-26l-8 3z" {...p} />
          <path d="M38 77l30-12v70l-30-12" {...p} />
          {/* Sound waves */}
          <path d="M72 82c3 3 4 6 4 9s-1 6-4 9" {...pThin} opacity="0.5" />
          <path d="M78 76c5 5 7 10 7 15s-2 10-7 15" {...pThin} opacity="0.3" />
          {/* Engagement metrics */}
          <rect x="200" y="50" width="55" height="25" rx="4" {...pThin} opacity="0.5" />
          <text x="210" y="67" fill={s} fontSize="9" fontFamily="monospace" opacity="0.5">2.4K</text>
          <rect x="200" y="85" width="55" height="25" rx="4" {...pThin} opacity="0.4" />
          <text x="210" y="102" fill={s} fontSize="9" fontFamily="monospace" opacity="0.4">8.1%</text>
          <rect x="200" y="120" width="55" height="25" rx="4" {...pThin} opacity="0.3" />
          <text x="210" y="137" fill={s} fontSize="9" fontFamily="monospace" opacity="0.3">$0.42</text>
          {/* Connection lines */}
          <line x1="170" y1="80" x2="200" y2="63" {...pThin} opacity="0.3" />
          <line x1="175" y1="100" x2="200" y2="98" {...pThin} opacity="0.3" />
          <line x1="170" y1="120" x2="200" y2="133" {...pThin} opacity="0.3" />
        </>
      );

    case 'social-media':
      return (
        <>
          {/* Calendar grid */}
          <rect x="40" y="40" width="120" height="100" rx="6" {...pThick} />
          <line x1="40" y1="60" x2="160" y2="60" {...p} />
          {/* Calendar header dots */}
          {[0, 1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <line x1={55 + i * 22} y1="65" x2={55 + i * 22} y2="130" {...pThin} opacity="0.15" />
            </React.Fragment>
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={`h-${i}`} x1="40" y1={77 + i * 16} x2="160" y2={77 + i * 16} {...pThin} opacity="0.15" />
          ))}
          {/* Content markers */}
          <circle cx="55" cy="72" r="4" {...p} opacity="0.7" />
          <circle cx="99" cy="88" r="4" {...p} opacity="0.5" />
          <circle cx="143" cy="72" r="4" {...p} opacity="0.8" />
          <circle cx="77" cy="104" r="4" {...p} opacity="0.6" />
          <circle cx="121" cy="120" r="4" {...p} opacity="0.4" />
          {/* Trending arrow */}
          <polyline points="180,130 200,110 220,115 245,80" {...pThick} />
          <polyline points="238,80 245,80 245,87" {...p} />
          {/* Heart icon */}
          <path d="M200 55c-3-8-14-8-14 2 0 8 14 16 14 16s14-8 14-16c0-10-11-10-14-2z" {...p} opacity="0.6" />
          {/* Share icon */}
          <circle cx="230" cy="150" r="4" {...pThin} opacity="0.4" />
          <circle cx="250" cy="140" r="4" {...pThin} opacity="0.4" />
          <circle cx="250" cy="160" r="4" {...pThin} opacity="0.4" />
          <line x1="234" y1="148" x2="246" y2="142" {...pThin} opacity="0.4" />
          <line x1="234" y1="152" x2="246" y2="158" {...pThin} opacity="0.4" />
        </>
      );

    case 'linkedin-branding':
      return (
        <>
          {/* Profile card */}
          <rect x="60" y="35" width="120" height="130" rx="8" {...pThick} />
          {/* Avatar */}
          <circle cx="120" cy="65" r="16" {...p} />
          {/* Name line */}
          <line x1="90" y1="95" x2="150" y2="95" {...pThick} opacity="0.8" />
          {/* Title line */}
          <line x1="95" y1="107" x2="145" y2="107" {...pThin} opacity="0.5" />
          {/* Stats */}
          <line x1="75" y1="125" x2="100" y2="125" {...pThin} opacity="0.4" />
          <line x1="110" y1="125" x2="135" y2="125" {...pThin} opacity="0.4" />
          <line x1="145" y1="125" x2="165" y2="125" {...pThin} opacity="0.4" />
          {/* Connection nodes */}
          <circle cx="30" cy="70" r="8" {...pThin} opacity="0.4" />
          <circle cx="210" cy="60" r="8" {...pThin} opacity="0.4" />
          <circle cx="230" cy="120" r="6" {...pThin} opacity="0.3" />
          <circle cx="25" cy="140" r="6" {...pThin} opacity="0.3" />
          {/* Connection lines */}
          <line x1="38" y1="70" x2="60" y2="65" {...pThin} opacity="0.25" />
          <line x1="180" y1="60" x2="202" y2="60" {...pThin} opacity="0.25" />
          <line x1="180" y1="100" x2="224" y2="118" {...pThin} opacity="0.2" />
          <line x1="60" y1="130" x2="31" y2="138" {...pThin} opacity="0.2" />
          {/* Shield / trust badge */}
          <path d="M240 150l-8-4v-10l8-4 8 4v10z" {...pThin} opacity="0.5" />
          <polyline points="236,146 240,150 248,142" {...pThin} opacity="0.5" />
        </>
      );

    default:
      return null;
  }
}
