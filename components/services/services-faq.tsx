'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiChevronDown } from 'react-icons/hi2';

/* ── FAQ Data ───────────────────────────────────────────── */

const FAQS = [
  {
    question: 'Can I combine multiple services into one package?',
    answer:
      "Yes — most clients combine development and marketing services since they compound each other's results.",
  },
  {
    question: 'Do you offer one-time projects or ongoing retainers?',
    answer:
      'Both. We scope each engagement based on what makes sense for your goals and budget.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      "Timelines vary by service — a Shopify build might take 2-4 weeks, while ongoing marketing is continuous. We'll give you a clear timeline during discovery.",
  },
  {
    question: "What if I'm not sure which service I need?",
    answer:
      "That's exactly what the discovery call is for — we'll help you figure out the right starting point.",
  },
];

/* ── Accordion Item ─────────────────────────────────────── */

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof FAQS)[number];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div
        className={`
          relative overflow-hidden rounded-[20px]
          bg-white/[0.05] backdrop-blur-[20px] backdrop-saturate-[180%]
          border transition-colors duration-300
          ${isOpen ? 'border-transparent' : 'border-white/[0.12]'}
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        `}
      >
        {/* Active State Background (Matches card hover background) */}
        <div 
          className={`absolute inset-0 rounded-[20px] pointer-events-none z-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: 'linear-gradient(rgba(20,20,30,0.93), rgba(20,20,30,0.93)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        />
        {/* Gradient Border Frame (Active State) */}
        <div 
          className={`absolute inset-0 rounded-[20px] pointer-events-none z-10 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{
            padding: '1px',
            background: 'linear-gradient(135deg, #7B2FF7 0%, #F72585 55%, #FF8C42 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Top Highlight (Inactive State) */}
        <div
          className={`absolute top-0 left-0 right-0 h-[1px] pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, transparent 100%)',
          }}
        />

        <button
          onClick={onToggle}
          className="relative z-10 w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        >
          <span className="text-base md:text-lg font-semibold text-white leading-snug pr-4">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-shrink-0"
          >
            <HiChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden relative z-10"
            >
              <div className="px-6 pb-5">
                <p className="text-[15px] text-white/[0.65] leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────── */

export function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-max mb-6"
            style={{
              border: '1px solid transparent',
              backgroundImage:
                'linear-gradient(rgba(11,15,25,0.92), rgba(11,15,25,0.92)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)' }}
            />
            <span className="text-white/85 font-mono text-xs tracking-[0.08em] font-semibold uppercase">
              FREQUENTLY ASKED
            </span>
          </div>
          <h2 className="text-[26px] md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
            Common Questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              faq={faq}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
