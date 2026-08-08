import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { ThemeProvider } from "../context/ThemeContext";
import Cursor from "./Cursor";
import Navbar from "./Navbar";

/* Fades the page in on every route change */
function PageFader() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [location.key]);

  return (
    <div className={`page-transition${visible ? " page-transition--in" : ""}`}>
      <Outlet />
    </div>
  );
}

/* Observes every .animate-on-scroll element after each navigation */
function ScrollAnimator() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(
        ".animate-on-scroll:not(.visible)"
      );
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      els.forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

import Footer from "./Footer";

function LayoutInner() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;

    if (scrollTo) {
      // Cross-page anchor: wait one frame for the DOM to paint,
      // then scroll to the target section deterministically.
      requestAnimationFrame(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location.pathname, location.state]);

  return (
    <>
      <Cursor />
      <ScrollAnimator />
      <Navbar />
      <PageFader />
      <Footer />
    </>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <LayoutInner />
    </ThemeProvider>
  );
}
