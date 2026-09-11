'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function SectionDivider() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full flex justify-center py-10 md:py-16">
      <motion.div
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-[80%] max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent origin-center"
      />
    </div>
  );
}
