import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useCountUp } from "../hooks/useCountUp";

const WORDS = ["We", "Build", "Digital", "Experiences"];

function HeroWords() {
  const [shown, setShown] = useState<number[]>([]);

  useEffect(() => {
    WORDS.forEach((_, i) => {
      setTimeout(() => setShown((p) => [...p, i]), 360 + i * 320);
    });
  }, []);

  return (
    <h1 className="hero__title">
      {WORDS.map((word, i) => (
        <span
          key={i}
          className="hero__word"
          style={{ animationDelay: `${360 + i * 320}ms`, display: shown.includes(i) ? "inline-block" : "inline-block" }}
        >
          {i === 2 ? <span className="gradient-text">{word}</span> : word}
        </span>
      ))}
    </h1>
  );
}

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

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div
            className="hero__badge"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
          >
            <span className="hero__dot" />
            Available for new projects
          </div>

          <HeroWords />

          <p
            className="hero__sub"
            style={{ animation: "fadeUp 0.75s ease 0.9s both" }}
          >
            ScaleDigitalLabs is a digital studio crafting bold products for ambitious
            brands — from strategy to pixel-perfect launch.
          </p>

          <div
            className="hero__cta"
            style={{ animation: "fadeUp 0.75s ease 1.1s both" }}
          >
            <Link to="/work" className="btn btn--dark btn--lg">
              See Our Work →
            </Link>
            <Link to="/contact" className="btn btn--outline btn--lg">
              Get in Touch
            </Link>
          </div>

          <div
            className="hero__stats"
            style={{ animation: "fadeUp 0.75s ease 1.3s both", paddingBottom: "40px" }}
          >
            <Stat end={40} suffix="+" label="Projects Delivered" />
            <Stat end={28} suffix="" label="Happy Clients" />
            <Stat end={6} suffix="" label="Years of Craft" />
            <Stat end={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
}
