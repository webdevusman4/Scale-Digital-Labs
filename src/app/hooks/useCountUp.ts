import { useState, useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

/**
 * Counts up from 0 → `end` over `duration` ms once the element
 * attached via `ref` scrolls into view.
 *
 * Uses Framer Motion's `useInView` for visibility detection and
 * `animate` for the tween — replacing the manual IntersectionObserver
 * and requestAnimationFrame loop.
 *
 * Usage:
 *   const { count, ref } = useCountUp(40, 2000);
 *   return <span ref={ref}>{count}+</span>;
 */
export function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration: duration / 1000,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    });

    return () => controls.stop();
  }, [isInView, end, duration]);

  return { count, ref };
}
