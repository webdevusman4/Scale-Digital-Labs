import { useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/* Homepage section anchors + standalone routes, in page order */
const NAV_LINKS: { label: string; id?: string; to?: string }[] = [
  { label: "Values",   id: "values" },
  { label: "Services", id: "services" },
  { label: "Process",  id: "process" },
  { label: "Work",     to: "/work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  /* Scroll to a homepage section, navigating home first if needed */
  const goToSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__pill">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          ScaleDigital<span className="gradient-text">Labs</span>
        </Link>

        {/* Separator */}
        <span className="navbar__sep" aria-hidden />

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_LINKS.map(({ label, to, id }) =>
            to ? (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ) : (
              <button
                key={label}
                type="button"
                className="navbar__link"
                onClick={() => goToSection(id!)}
              >
                {label}
              </button>
            )
          )}
        </div>

        {/* Separator */}
        <span className="navbar__sep" aria-hidden />

        {/* Desktop Theme Toggle */}
        <button
          className="navbar__theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
        </button>

        {/* CTA */}
        <Link to="/contact" className="navbar__cta">
          {"Let's Talk"} <span className="navbar__cta-arrow">→</span>
        </Link>

        {/* Mobile controls */}
        <div className="navbar__mobile-actions">
          <button className="navbar__icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>
          <button
            className="navbar__icon-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="navbar__drawer">
          {NAV_LINKS.map(({ label, to, id }) =>
            to ? (
              <NavLink
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `navbar__drawer-link${isActive ? " navbar__drawer-link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ) : (
              <button
                key={label}
                type="button"
                className="navbar__drawer-link"
                onClick={() => goToSection(id!)}
              >
                {label}
              </button>
            )
          )}
          <Link to="/contact" className="navbar__drawer-cta" onClick={() => setOpen(false)}>
            {"Let's Talk →"}
          </Link>
        </div>
      )}
    </nav>
  );
}
