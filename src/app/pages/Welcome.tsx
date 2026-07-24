import { useNavigate } from "react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Welcome() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="welcome">
      {/* Background orbs */}
      <div className="welcome__orb welcome__orb--1" />
      <div className="welcome__orb welcome__orb--2" />

      {/* Top-right controls */}
      <div className="welcome__nav">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
      </div>

      <p className="welcome__eyebrow">Digital Development Studio</p>

      <h1 className="welcome__title gradient-text">ScaleDigitalLabs</h1>

      <p className="welcome__tagline">
        We craft bold digital experiences for ambitious brands —{" "}
        from strategy to pixel-perfect launch.
      </p>

      <div className="welcome__cta">
        <button
          className="btn btn--dark btn--lg"
          onClick={() => navigate("/home")}
        >
          Enter Site →
        </button>
        <button
          className="btn btn--outline btn--lg"
          onClick={() => navigate("/contact")}
        >
          {"Let's Talk"}
        </button>
      </div>

      <div className="welcome__scroll">
        <span>scroll</span>
        <div className="welcome__scroll-line" />
      </div>
    </div>
  );
}
