'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface WordRotatorProps {
  words: string[];
  className?: string;
}

export function WordRotator({ words, className = '' }: WordRotatorProps) {
  const [index, setIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState<number | 'auto'>('auto');
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const measure = () => {
      if (!measureRef.current) return;
      let max = 0;
      const span = document.createElement('span');
      span.style.visibility = 'hidden';
      span.style.position = 'absolute';
      span.style.whiteSpace = 'nowrap';
      
      const computed = window.getComputedStyle(measureRef.current);
      span.style.font = computed.font;
      span.style.fontSize = computed.fontSize;
      span.style.fontWeight = computed.fontWeight;
      span.style.letterSpacing = computed.letterSpacing;
      span.style.textTransform = computed.textTransform;
      
      document.body.appendChild(span);
      words.forEach((word) => {
        span.textContent = word;
        max = Math.max(max, span.offsetWidth);
      });
      document.body.removeChild(span);
      setMaxWidth(max + 2); // 2px buffer
    };

    measure();
    window.addEventListener('resize', measure);
    // Give fonts a moment to load
    const timeoutId = setTimeout(measure, 500);

    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timeoutId);
    };
  }, [words]);

  useEffect(() => {
    if (shouldReduceMotion || isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [words.length, isHovered, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span
      className={`inline-block relative text-left align-top ${className}`}
      style={{ width: maxWidth === 'auto' ? 'auto' : `${maxWidth}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-live="off"
    >
      {/* Invisible placeholder keeps the height stable */}
      <span ref={measureRef} className="invisible" aria-hidden="true">
        {words[0]}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
