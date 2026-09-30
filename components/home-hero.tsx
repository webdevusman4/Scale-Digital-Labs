import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export function HomeHero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[calc(100vh_-_80px)] pt-[100px] pb-[60px] max-md:pt-[48px] max-md:pb-[32px] px-6 bg-transparent overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[600px] bg-[#7B2FF7] opacity-[0.05] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[780px] mx-auto text-center flex flex-col items-center mt-12 md:mt-24">
        
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 md:px-4 md:py-2 rounded-full w-max mb-8"
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
          <span className="text-white/85 font-mono text-base md:text-sm tracking-[0.08em] font-semibold uppercase">
            DIGITAL GROWTH PARTNERS
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 
          className="font-extrabold leading-[1.1] tracking-tight mb-6"
          style={{ 
            fontSize: 'clamp(42px, 5.5vw, 58px)',
            overflow: 'visible',
            whiteSpace: 'normal',
            wordBreak: 'keep-all',
            maxWidth: '100%'
          }}
        >
          ONE TEAM. EVERY DIGITAL NEED.{' '}
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]" 
            style={{ filter: 'drop-shadow(0 0 15px rgba(247, 37, 133, 0.4))' }}
          >
            GLOBALLY.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/65 font-normal leading-relaxed max-w-[700px] mb-12">
          We architect scalable systems and ROI-obsessed marketing funnels for brands ready to grow.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 md:px-9 md:py-4 rounded-full text-lg md:text-base font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
              boxShadow: '0 0 20px rgba(247, 37, 133, 0.3)',
              color: 'white',
            }}
          >
            Start a Project
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-lg md:text-base font-semibold tracking-wide text-white/80 hover:text-white transition-colors group"
          >
            See Our Work
            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
