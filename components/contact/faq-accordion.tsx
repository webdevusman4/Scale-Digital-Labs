'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiChevronDown } from 'react-icons/hi2';

/* ── FAQ Data ───────────────────────────────────────────── */

const FAQS = [
  {
    question: 'How fast will I hear back?',
    answer: 'Within 24 hours, usually sooner.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer:
      'No — we work project-by-project or month-to-month, based on what fits your needs.',
  },
  {
    question: "I'm not sure which service I need — can I still reach out?",
    answer:
      'Absolutely. Most first calls are exactly about figuring that out together.',
  },
  {
    question: 'Do you work with businesses outside my country?',
    answer:
      'Yes, we work with clients globally and operate fully remotely.',
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
          ${isOpen ? 'border-white/20' : 'border-white/[0.12]'}
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        `}
      >
        {/* Top highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, transparent 100%)',
          }}
        />

        {/* Question (toggle button) */}
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

        {/* Answer (collapsible) */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
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

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 max-w-[800px] mx-auto">
        {/* ── Header ─────────────────────────────────── */}
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

        {/* ── Accordion ──────────────────────────────── */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              faq={faq}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
