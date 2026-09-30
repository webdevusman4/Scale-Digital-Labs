import React from 'react';

export function GlobalLogoBar() {
  const logos = [
    { name: 'GLOBEX', style: 'font-serif font-black tracking-widest' },
    { name: 'Acme Corp', style: 'font-sans font-extrabold tracking-tight' },
    { name: 'SENTRY', style: 'font-mono font-bold tracking-[0.2em]' },
    { name: 'Vercel', style: 'font-sans font-bold italic' },
    { name: 'Stripe', style: 'font-sans font-black' },
  ];

  return (
    <div className="w-full py-8 md:py-10 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col items-center">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-6 text-center">
          Trusted by High-Growth Teams Globally
        </p>
        <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className={`text-xl md:text-2xl text-white/80 ${logo.style}`}>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
