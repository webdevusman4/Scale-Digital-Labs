'use client';

import React from 'react';
import Image from 'next/image';

const btsImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800&auto=format&fit=crop"
];

export function BTSMarquee() {
  return (
    <section className="w-full py-20 bg-[#05070A] overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B] z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

      <div className="w-full text-center mb-10 relative z-20">
        <h3 className="text-white/40 font-mono text-sm tracking-[0.2em] uppercase font-bold">
          Building the Infrastructure
        </h3>
      </div>

      <div className="flex animate-marquee gap-6 opacity-70">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-6 items-center">
            {btsImages.map((src, idx) => (
              <div 
                key={idx} 
                className="relative w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-lg overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 hover:z-20 border border-white/5"
              >
                <Image
                  src={src}
                  alt={`Behind the scenes ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 450px"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
