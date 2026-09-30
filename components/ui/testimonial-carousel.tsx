'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

const testimonials = [
  {
    highlight: "Cut load times in half. 30% increase in conversions.",
    quote: "ScaleDigitalLabs completely transformed our infrastructure. Their Next.js architecture was flawless.",
    name: "Sarah Jenkins",
    title: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    link: "techflow.com"
  },
  {
    highlight: "120% revenue increase within 6 weeks.",
    quote: "Shahzeb Khan’s financially disciplined ad architecture took our e-commerce performance score to a 98/100.",
    name: "David Chen",
    title: "Founder, Peak E-commerce",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    link: "peakecommerce.co"
  },
  {
    highlight: "Feels like having an elite in-house team.",
    quote: "The transition to a headless Shopify setup was flawless and our revenue metrics reflect it immediately.",
    name: "Elena Rodriguez",
    title: "COO, Aura Beauty",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    link: "aurabeauty.com"
  },
  {
    highlight: "Zero bloat. Pure performance.",
    quote: "They delivered exactly what they promised: senior-level execution from day one. No bureaucracy.",
    name: "Marcus Thorne",
    title: "CTO, Nexus Systems",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    link: "nexus-systems.io"
  }
];

export function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-24 md:py-32 bg-[#0A0A0B] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-[#7B2FF7] opacity-[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 brutalist-text">
          Don&apos;t just take our word for it.
        </h2>
        <p className="text-white/60 text-lg">
          We let our clients&apos; results speak for themselves.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 md:px-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx} 
            className="shrink-0 w-[85vw] md:w-[450px] snap-center interactive-card glassmorphism p-8 rounded-[24px] flex flex-col justify-between"
          >
            <div>
              <svg className="w-8 h-8 text-[#F72585]/40 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <h3 className="font-sans font-black text-[22px] leading-tight text-white mb-4">
                &quot;{testimonial.highlight}&quot;
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-white/70 line-clamp-2 mb-8">
                {testimonial.quote}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/10">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-[15px] tracking-tight">{testimonial.name}</h4>
                <p className="text-white/50 text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
