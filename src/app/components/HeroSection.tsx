import { motion, type Variants } from "motion/react";
import { Link } from "react-router";
import { useCountUp } from "../hooks/useCountUp";
import ServiceIconCluster from "./ServiceIconCluster";

/* ── Premium easing ─────────────────────────────────────────── */
const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ── Variant definitions ────────────────────────────────────── */

/** Word-level stagger — only used on the <h1> */
const wordContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: premiumEase },
  },
};

/** Per-element snap — accepts a custom delay via Framer's `custom` prop */
const itemSnap: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delayTime: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delayTime, duration: 0.8, ease: premiumEase },
  }),
};

/* ── Constants ──────────────────────────────────────────────── */
const WORDS = ["We", "Build", "Digital", "Experiences"];

/* ── Stat (unchanged — IntersectionObserver driven) ─────────── */
function Stat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div>
      <div className="stat-num" ref={ref as React.RefObject<HTMLDivElement>}>
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ── HeroSection ────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          {/* Group 2 start — Pill */}
          <motion.div
            className="hero__badge"
            custom={0.2}
            variants={itemSnap}
            initial="hidden"
            animate="show"
          >
            <span className="hero__dot" />
            Available for new projects
          </motion.div>

          {/* Group 2 middle — Headline (words stagger internally) */}
          <motion.h1
            className="hero__title"
            variants={wordContainer}
            initial="hidden"
            animate="show"
          >
            {WORDS.map((word, i) => (
              <motion.span key={i} className="hero__word pb-1" variants={wordReveal}>
                {i === 2 ? <span className="gradient-text">{word}</span> : word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Group 2 end — Subtitle */}
          <motion.p
            className="hero__sub"
            custom={0.6}
            variants={itemSnap}
            initial="hidden"
            animate="show"
          >
            ScaleDigitalLabs is a digital studio crafting bold products for ambitious
            brands — from strategy to pixel-perfect launch.
          </motion.p>

          {/* Group 3 start — CTA Buttons */}
          <motion.div
            className="hero__cta"
            custom={0.8}
            variants={itemSnap}
            initial="hidden"
            animate="show"
          >
            <Link to="/work" className="btn btn--dark btn--lg">
              See Our Work →
            </Link>
            <Link to="/contact" className="btn btn--outline btn--lg">
              Get in Touch
            </Link>
          </motion.div>

          {/* Group 3 follow-up — Stats */}
          <motion.div
            className="hero__stats"
            custom={1.0}
            variants={itemSnap}
            initial="hidden"
            animate="show"
            style={{ paddingBottom: "40px" }}
          >
            <Stat end={40} suffix="+" label="Projects Delivered" />
            <Stat end={28} suffix="" label="Happy Clients" />
            <Stat end={6} suffix="" label="Years of Craft" />
            <Stat end={98} suffix="%" label="Client Satisfaction" />
          </motion.div>
        </div>

          {/* Desktop-only floating service icons — right half of hero */}
          <ServiceIconCluster />
      </div>
    </section>
  );
}
