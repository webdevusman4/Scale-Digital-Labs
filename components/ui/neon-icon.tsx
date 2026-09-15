'use client';

import React from 'react';

export type NeonIconName =
  | 'code-brackets'
  | 'shopping-cart'
  | 'ad-graph'
  | 'megaphone'
  | 'linkedin-card'
  | 'gear-api'
  | 'server-stack'
  | 'shield-check'
  | 'shopping-bag-arrow'
  | 'megaphone-signal'
  | 'target-chart'
  | 'badge-profile'
  | 'users-group'
  | 'hand-point'
  | 'bar-chart'
  | 'lightning-bolt'
  | 'chat-bubble'
  | 'document-check'
  | 'paper-plane'
  | 'phone-call';

interface NeonIconProps {
  icon: NeonIconName;
  size?: number;
  className?: string;
  /** Whether to animate the glow pulse */
  animated?: boolean;
}

/**
 * Neon line-art icon system.
 * 
 * Icons rendered as glowing outline/neon-line art strokes, gradient
 * applied via SVG stroke, CSS drop-shadow glow. All purple→fuchsia→orange.
 */
export function NeonIcon({ icon, size = 48, className = '', animated = false }: NeonIconProps) {
  return (
    <div
      className={`inline-flex items-center justify-center ${animated ? 'animate-icon-glow' : ''} ${className}`}
      style={{
        filter: animated ? undefined : 'drop-shadow(0 0 12px rgba(247, 37, 133, 0.45))',
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        {getIconPath(icon, 'service-icon-gradient')}
      </svg>
    </div>
  );
}

function getIconPath(icon: NeonIconName, gradientId: string): React.ReactNode {
  const stroke = `url(#${gradientId})`;
  const sw = 2;
  const common = { stroke, strokeWidth: sw, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };

  switch (icon) {
    case 'code-brackets':
      return (
        <>
          <polyline points="18,12 8,24 18,36" {...common} />
          <polyline points="30,12 40,24 30,36" {...common} />
          <line x1="26" y1="10" x2="22" y2="38" {...common} />
        </>
      );

    case 'server-stack':
      return (
        <>
          {/* Stacked server layers */}
          <rect x="8" y="6" width="32" height="10" rx="3" {...common} />
          <rect x="8" y="19" width="32" height="10" rx="3" {...common} />
          <rect x="8" y="32" width="32" height="10" rx="3" {...common} />
          {/* Status dots */}
          <circle cx="14" cy="11" r="1.5" fill={stroke} />
          <circle cx="14" cy="24" r="1.5" fill={stroke} />
          <circle cx="14" cy="37" r="1.5" fill={stroke} />
          {/* Lines */}
          <line x1="20" y1="11" x2="34" y2="11" {...common} strokeWidth={1.5} />
          <line x1="20" y1="24" x2="34" y2="24" {...common} strokeWidth={1.5} />
          <line x1="20" y1="37" x2="30" y2="37" {...common} strokeWidth={1.5} />
        </>
      );

    case 'shield-check':
      return (
        <>
          {/* Shield body */}
          <path d="M24 4L6 12v12c0 10 8 16 18 20 10-4 18-10 18-20V12L24 4z" {...common} />
          {/* Checkmark */}
          <polyline points="16,24 22,30 34,18" {...common} strokeWidth={2.5} />
        </>
      );

    case 'shopping-cart':
    case 'shopping-bag-arrow':
      return (
        <>
          {/* Bag body */}
          <path d="M10 16h28l-3 22H13L10 16z" {...common} />
          {/* Handles */}
          <path d="M18 16v-4a6 6 0 0112 0v4" {...common} />
          {/* Upward arrow */}
          <line x1="24" y1="34" x2="24" y2="24" {...common} strokeWidth={2} />
          <polyline points="20,28 24,24 28,28" {...common} strokeWidth={2} />
        </>
      );

    case 'ad-graph':
    case 'target-chart':
      return (
        <>
          {/* Bullseye rings */}
          <circle cx="18" cy="24" r="14" {...common} strokeWidth={1.5} opacity={0.4} />
          <circle cx="18" cy="24" r="8" {...common} strokeWidth={1.5} opacity={0.7} />
          <circle cx="18" cy="24" r="3" fill={stroke} opacity={0.9} />
          {/* Ascending bars */}
          <rect x="32" y="30" width="4" height="10" rx="1" {...common} />
          <rect x="38" y="24" width="4" height="16" rx="1" {...common} />
          <rect x="44" y="18" width="4" height="22" rx="1" {...common} />
          {/* Trend line */}
          <polyline points="34,28 40,22 46,16" {...common} strokeWidth={1.5} />
        </>
      );

    case 'megaphone':
    case 'megaphone-signal':
      return (
        <>
          {/* Megaphone body */}
          <path d="M8 20v8l6 2v-12l-6 2z" {...common} />
          <path d="M14 18l20-8v28l-20-8" {...common} />
          {/* Radiating signal lines */}
          <path d="M38 18c2 2 3 4 3 6s-1 4-3 6" {...common} strokeWidth={1.5} />
          <path d="M41 14c3 3 5 6 5 10s-2 7-5 10" {...common} strokeWidth={1.5} />
          <path d="M44 10c4 4 6 9 6 14s-2 10-6 14" {...common} strokeWidth={1.2} opacity={0.5} />
          {/* Handle */}
          <line x1="10" y1="28" x2="10" y2="36" {...common} />
        </>
      );

    case 'linkedin-card':
    case 'badge-profile':
      return (
        <>
          {/* Ribbon/badge shape */}
          <path d="M12 4h24a4 4 0 014 4v28l-8-4-8 4-8-4-8 4V8a4 4 0 014-4z" {...common} />
          {/* Profile avatar */}
          <circle cx="24" cy="16" r="5" {...common} />
          {/* Name line */}
          <line x1="16" y1="26" x2="32" y2="26" {...common} strokeWidth={1.5} />
          {/* Title line */}
          <line x1="18" y1="31" x2="30" y2="31" {...common} strokeWidth={1.5} opacity={0.6} />
          {/* Corner fold */}
          <path d="M40 4v8h-8" {...common} strokeWidth={1.5} opacity={0.4} />
        </>
      );

    case 'gear-api':
      return (
        <>
          <path
            d="M24 6l3 4 5-1 2 5 5 2-1 5 4 3-4 3 1 5-5 2-2 5-5-1-3 4-3-4-5 1-2-5-5-2 1-5-4-3 4-3-1-5 5-2 2-5 5 1z"
            {...common}
          />
          <circle cx="24" cy="24" r="6" {...common} />
          <text x="24" y="26" textAnchor="middle" fill={`url(#${gradientId})`} fontSize="7" fontWeight="800" fontFamily="monospace">
            {'{ }'}
          </text>
        </>
      );

    case 'users-group':
      return (
        <>
          {/* Center person */}
          <circle cx="24" cy="16" r="5" {...common} />
          <path d="M16 36v-4a8 8 0 0116 0v4" {...common} />
          {/* Left person */}
          <circle cx="10" cy="18" r="4" {...common} strokeWidth={1.5} opacity={0.7} />
          <path d="M4 36v-3a6 6 0 0112 0" {...common} strokeWidth={1.5} opacity={0.7} />
          {/* Right person */}
          <circle cx="38" cy="18" r="4" {...common} strokeWidth={1.5} opacity={0.7} />
          <path d="M32 33a6 6 0 0112 0v3" {...common} strokeWidth={1.5} opacity={0.7} />
        </>
      );

    case 'hand-point':
      return (
        <>
          {/* Pointing hand */}
          <path d="M24 8v16" {...common} strokeWidth={2.5} />
          <path d="M18 28h-2a4 4 0 01-4-4v-2a4 4 0 014-4h2" {...common} strokeWidth={1.5} />
          <path d="M30 28h2a4 4 0 004-4v-2a4 4 0 00-4-4h-2" {...common} strokeWidth={1.5} />
          <path d="M20 24h8v10a4 4 0 01-4 4h0a4 4 0 01-4-4V24z" {...common} />
          {/* Emphasis dot */}
          <circle cx="24" cy="6" r="2" fill={stroke} />
        </>
      );

    case 'bar-chart':
      return (
        <>
          {/* Bars */}
          <rect x="6" y="26" width="8" height="16" rx="2" {...common} />
          <rect x="20" y="16" width="8" height="26" rx="2" {...common} />
          <rect x="34" y="6" width="8" height="36" rx="2" {...common} />
          {/* Trend line */}
          <polyline points="10,24 24,14 38,4" {...common} strokeWidth={1.5} opacity={0.5} />
        </>
      );

    case 'lightning-bolt':
      return (
        <>
          <path d="M26 4L10 26h12l-2 18L36 22H24l2-18z" {...common} strokeWidth={2.5} />
        </>
      );

    case 'chat-bubble':
      return (
        <>
          {/* Main bubble */}
          <path d="M8 10h32a2 2 0 012 2v16a2 2 0 01-2 2H18l-8 8v-8H8a2 2 0 01-2-2V12a2 2 0 012-2z" {...common} />
          {/* Text lines */}
          <line x1="14" y1="18" x2="34" y2="18" {...common} strokeWidth={1.5} />
          <line x1="14" y1="24" x2="28" y2="24" {...common} strokeWidth={1.5} opacity={0.6} />
        </>
      );

    case 'document-check':
      return (
        <>
          {/* Document */}
          <path d="M12 4h16l8 8v28a4 4 0 01-4 4H12a4 4 0 01-4-4V8a4 4 0 014-4z" {...common} />
          {/* Fold */}
          <path d="M28 4v8h8" {...common} strokeWidth={1.5} opacity={0.5} />
          {/* Checkmark */}
          <polyline points="16,26 22,32 34,20" {...common} strokeWidth={2.5} />
        </>
      );

    case 'paper-plane':
      return (
        <>
          {/* Paper plane body */}
          <path d="M44 4L22 44l-6-16-12-6L44 4z" {...common} />
          <path d="M44 4L16 28v12l6-8" {...common} />
        </>
      );

    case 'phone-call':
      return (
        <>
          {/* Phone receiver */}
          <path d="M37 29c-1 3-4 5-7 5-11 0-20-9-20-20 0-3 2-6 5-7l5 7-3 4c3 6 7 10 13 13l4-3 6 5z" {...common} />
        </>
      );

    default:
      return <circle cx="24" cy="24" r="20" {...common} />;
  }
}
