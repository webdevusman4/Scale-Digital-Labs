import React from 'react';
import { 
  SiFigma, SiVercel, SiNetlify, SiMeta, SiGoogle, SiShopify, SiWoocommerce, SiStripe
} from 'react-icons/si';

const techStack = [
  { name: 'Figma', Icon: SiFigma },
  { name: 'Vercel', Icon: SiVercel },
  { name: 'Netlify', Icon: SiNetlify },
  { name: 'Meta', Icon: SiMeta },
  { name: 'Google', Icon: SiGoogle },
  { name: 'Shopify', Icon: SiShopify },
  { name: 'WooCommerce', Icon: SiWoocommerce },
  { name: 'Stripe', Icon: SiStripe },
];

interface TechMarqueeProps {
  headline?: string;
}

export function TechMarquee({ headline = "Trusted tools we work with" }: TechMarqueeProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start overflow-hidden">
      {headline && (
        <p className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white/50 mb-2">
          {headline}
        </p>
      )}
      <div className="relative w-full overflow-hidden flex py-6 bg-transparent">
        <div className="flex animate-marquee group cursor-pointer items-center">
        {/* Triple array for seamless loop across large screens */}
        {[...techStack, ...techStack, ...techStack].map((item, index) => (
          <div 
            key={`tech-${index}`} 
            className="flex items-center gap-3 pr-12 md:pr-24 transition-all duration-300 ease-out grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(247,37,133,0.5)] text-white"
          >
            <item.Icon className="w-8 h-8 flex-shrink-0" />
            <span className="font-semibold text-lg md:text-xl tracking-tight whitespace-nowrap">{item.name}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
