'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { HiArrowRight } from 'react-icons/hi';

const services = [
  { 
    title: 'High-Performance SaaS & React Development', 
    href: '/services#saas-development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-2' // Large square
  },
  { 
    title: 'Web Development & Maintenance', 
    href: '/services#web-maintenance',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1' // Standard small
  },
  { 
    title: 'Shopify Architecture & E-commerce', 
    href: '/services#shopify-ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1' // Standard small
  },
  { 
    title: 'Social Media & Digital Marketing', 
    href: '/services#social-media-marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-2' // Tall portrait
  },
  { 
    title: 'ROI-Driven Meta & Google Ads Management', 
    href: '/services#meta-google-ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    className: 'md:col-span-2 md:row-span-1' // Wide landscape
  },
  { 
    title: 'B2B LinkedIn Branding & Authority', 
    href: '/services#linkedin-branding',
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop',
    className: 'md:col-span-1 md:row-span-1' // Standard small
  },
];

export function ServicesShowcase() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto pt-32 pb-24 px-4 md:px-8">
      {/* Title */}
      <div className="w-full pb-10 flex flex-col items-center text-center">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-max mb-6"
          style={{
            border: '1px solid transparent',
            backgroundImage:
              'linear-gradient(rgba(10,10,11,0.92), rgba(10,10,11,0.92)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)' }}
          />
          <span className="text-white/85 font-sans font-black text-xs tracking-widest uppercase">
            Production-Grade Capabilities
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-2 font-sans brutalist-text">
          The Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">Growth Arsenal.</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[250px] gap-4 w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
            className={`group relative overflow-hidden rounded-[24px] glassmorphism gradient-border-hover ${service.className}`}
          >
            <Link href={service.href} className="block w-full h-full relative outline-none focus-visible:ring-2 focus-visible:ring-[#F72585]">
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Default subtle overlay to make it look purely image-based but not harsh */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Hover Dark Gradient Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                {/* Thin typography reveal */}
                <h3 className="text-lg md:text-xl text-white font-sans font-light tracking-wide leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="w-full flex justify-center mt-12">
        <Link 
          href="/services"
          className="inline-flex items-center gap-2 text-[#7B2FF7] font-semibold tracking-widest uppercase hover:text-white transition-colors group text-sm font-sans"
        >
          Explore the Full Arsenal
          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      

    </section>
  );
}
