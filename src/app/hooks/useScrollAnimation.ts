import { useEffect, useRef } from "react";

/**
 * Attach the returned ref to any element.
 * When it enters the viewport, the hook adds "visible" to its class list,
 * triggering the CSS transition defined on .animate-on-scroll in global.css.
 */
export function useScrollAnimation(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
