import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "motion/react";

/* ── Inline SVG Icons (outline, 1.5px stroke, round caps) ───── */

const IconWebDev = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const IconMaintenance = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconMetaAds = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IconGoogleAds = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
    <line x1="11" y1="8" x2="11" y2="14" />
  </svg>
);

const IconShopify = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const IconSocialMedia = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ── Card data ──────────────────────────────────────────────── */

interface ServiceCard {
  label: string;
  Icon: React.FC;
  tier: "lg" | "md" | "sm";
  top: string;
  left: string;
  rotate: string;
  duration: string;
  delay: string;
}

const CARDS: ServiceCard[] = [
  {
    label: "Web Development",
    Icon: IconWebDev,
    tier: "lg",
    top: "6%",
    left: "12%",
    rotate: "-3deg",
    duration: "7.2s",
    delay: "0s",
  },
  {
    label: "Google Ads",
    Icon: IconGoogleAds,
    tier: "md",
    top: "4%",
    left: "62%",
    rotate: "4deg",
    duration: "8.5s",
    delay: "1.2s",
  },
  {
    label: "Meta Ads",
    Icon: IconMetaAds,
    tier: "lg",
    top: "33%",
    left: "3%",
    rotate: "2deg",
    duration: "6.8s",
    delay: "0.6s",
  },
  {
    label: "Shopify & eCommerce",
    Icon: IconShopify,
    tier: "md",
    top: "30%",
    left: "52%",
    rotate: "-5deg",
    duration: "9.1s",
    delay: "2.1s",
  },
  {
    label: "Social Media",
    Icon: IconSocialMedia,
    tier: "lg",
    top: "58%",
    left: "22%",
    rotate: "-2deg",
    duration: "7.8s",
    delay: "3.4s",
  },
  {
    label: "Maintenance",
    Icon: IconMaintenance,
    tier: "sm",
    top: "56%",
    left: "70%",
    rotate: "6deg",
    duration: "8.2s",
    delay: "1.8s",
  },
  {
    label: "LinkedIn Branding",
    Icon: IconLinkedIn,
    tier: "md",
    top: "72%",
    left: "38%",
    rotate: "-4deg",
    duration: "6.5s",
    delay: "4.2s",
  },
];

/* ── Component ──────────────────────────────────────────────── */

export default function ServiceIconCluster() {
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  /* Don't render any DOM on non-desktop viewports */
  if (!isDesktop) return null;

  return (
    <motion.div 
      className="service-cluster" 
      aria-hidden="true"
      initial={{ opacity: 0, y: "-45%" }}
      animate={{ opacity: 1, y: "-50%" }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {CARDS.map((card) => (
        <div
          key={card.label}
          className={`service-cluster__card service-cluster__card--${card.tier}`}
          style={{
            top: card.top,
            left: card.left,
            "--sc-rotate": card.rotate,
            "--sc-duration": card.duration,
            "--sc-delay": card.delay,
          } as React.CSSProperties}
        >
          <card.Icon />
          {card.tier !== "sm" && (
            <span className="service-cluster__label">{card.label}</span>
          )}
        </div>
      ))}
    </motion.div>
  );
}
