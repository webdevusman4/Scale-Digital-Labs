import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const posRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        cursor.style.left = `${posRef.current.x}px`;
        cursor.style.top = `${posRef.current.y}px`;
        rafRef.current = null;
      });
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const attachHover = () => {
      document
        .querySelectorAll("a, button, .service-card, .project-card, .filter-tag, [data-hover]")
        .forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    window.addEventListener("mousemove", onMove);
    attachHover();

    const mo = new MutationObserver(attachHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      mo.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor${hovered ? " cursor--hovered" : ""}`}
    />
  );
}
