'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';

/* ── Form State Types ───────────────────────────────────── */

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const PROJECT_TYPES = [
  'SaaS Development',
  'Web Maintenance',
  'Shopify & E-commerce',
  'Social Media Marketing',
  'Meta & Google Ads',
  'LinkedIn Branding',
  'Not Sure Yet',
];

const BUDGET_RANGES = [
  'Under $1k',
  '$1k–$5k',
  '$5k–$15k',
  '$15k+',
  "Let's Discuss",
];

/* ── Contact Form Card ──────────────────────────────────── */

function ContactFormInner() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams?.get('service') ?? '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: prefilledService,
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call — replace with Formspree, EmailJS, or custom endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses =
    'block w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/40 outline-none transition-all duration-300 focus:bg-white/[0.06] focus:border-transparent focus-visible:shadow-none peer relative';

  const selectClasses =
    'block w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:bg-white/[0.06] focus:border-transparent focus-visible:shadow-none appearance-none cursor-pointer peer relative';

  const GradientBorder = () => (
    <div
      className="absolute inset-0 rounded-xl pointer-events-none opacity-0 peer-focus:opacity-100 transition-opacity duration-300 z-10"
      style={{
        border: '1px solid transparent',
        background: 'linear-gradient(135deg, #7B2FF7 0%, #F72585 55%, #FF8C42 100%) border-box',
        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      }}
    />
  );

  return (
    <div className="interactive-card overflow-hidden p-6 md:p-10 w-full max-w-[480px]">
      {/* Top highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.25) 70%, transparent 100%)',
        }}
      />

      <AnimatePresence mode="wait">
        {submitted ? (
          /* ── Success State ──────────────────────────── */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center text-center gap-5 py-12"
          >
            <div className="w-16 h-16 rounded-full bg-white/[0.08] flex items-center justify-center">
              <HiOutlineCheckCircle className="w-8 h-8 text-[#8B5CF6]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Thanks!</h3>
            <p className="text-base text-white/65 leading-relaxed max-w-[320px]">
              We&apos;ll be in touch within 24 hours. Looking forward to learning about your project.
            </p>
          </motion.div>
        ) : (
          /* ── Form ───────────────────────────────────── */
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-4"
            noValidate
          >
            {/* Name */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputClasses}
                />
                <GradientBorder />
              </div>
              {errors.name && (
                <p className="text-[#FF6B6B] text-xs mt-1.5 ml-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={inputClasses}
                />
                <GradientBorder />
              </div>
              {errors.email && (
                <p className="text-[#FF6B6B] text-xs mt-1.5 ml-1">{errors.email}</p>
              )}
            </div>

            {/* Project Type + Budget (side by side on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`${selectClasses} ${formData.projectType ? 'text-white' : 'text-white/40'}`}
                >
                  <option value="" disabled>
                    Project Type
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-[#12121C] text-white">
                      {t}
                    </option>
                  ))}
                </select>
                <GradientBorder />
                {/* Custom chevron */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`${selectClasses} ${formData.budget ? 'text-white' : 'text-white/40'}`}
                >
                  <option value="" disabled>
                    Budget Range
                  </option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b} className="bg-[#12121C] text-white">
                      {b}
                    </option>
                  ))}
                </select>
                <GradientBorder />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us a bit about your project or goals..."
                  className={`${inputClasses} resize-none`}
                />
                <GradientBorder />
              </div>
              {errors.message && (
                <p className="text-[#FF6B6B] text-xs mt-1.5 ml-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full md:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] text-white font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(247,37,133,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_6px_28px_rgba(247,37,133,0.5)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="w-full max-w-[480px] h-[400px] bg-white/[0.05] rounded-3xl animate-pulse" />}>
      <ContactFormInner />
    </Suspense>
  );
}

/* ── Hero Section (Split: Left text, Right form) ────────── */

export function ContactHero() {
  return (
    <section className="relative w-full pt-4 md:pt-6 pb-16 md:pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden full-height-hero flex flex-col justify-center">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[50vw] h-[400px] bg-[#7B2FF7] opacity-[0.06] blur-[180px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* ── Left Column (Text) ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full flex flex-col items-center text-center lg:items-start lg:text-left gap-6"
        >
          {/* Eyebrow */}
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
              GET IN TOUCH
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.1]">
            Let&apos;s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316]">
              Great
            </span>{' '}
            Together.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/[0.65] font-normal leading-relaxed max-w-[480px]">
            Tell us about your project — we&apos;ll get back to you within 24 hours.
          </p>

          {/* Trust line */}
          <p className="text-sm text-white/50 font-medium italic">
            No sales pressure. Just a real conversation about your goals.
          </p>
        </motion.div>

        {/* ── Right Column (Form) ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full flex justify-center lg:justify-end"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
