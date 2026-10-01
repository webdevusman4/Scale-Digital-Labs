'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import { type Project } from '@/lib/projects-data';
import { ScreenshotFrame } from '@/components/ui/screenshot-frame';

/* ── Related Project Card (compact) ─────────────────────── */

function RelatedCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="interactive-card block overflow-hidden group"
    >
      <ScreenshotFrame src={project.thumbnailImage} alt={project.title} />
      <div className="p-4 flex flex-col gap-2">
        <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-white/40 bg-white/[0.06] px-2.5 py-1 rounded-full w-fit">
          {project.category}
        </span>
        <h4 className="text-base font-bold text-white tracking-tight">{project.title}</h4>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">
          View Project
          <HiArrowRight className="w-3.5 h-3.5 text-[#F72585] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

/* ── Project Detail Component ───────────────────────────── */

export function ProjectDetail({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: Project[];
}) {
  const allImages = [project.thumbnailImage, ...project.galleryImages];
  const heroImage = allImages[0];
  const remainingImages = allImages.slice(1);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < allImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };
  
  const prevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-[1100px] mx-auto px-6 md:px-12 pt-8 pb-16">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white/80 transition-colors mb-10 group"
        >
          <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </motion.div>

      {/* ── Project Header ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col gap-4 mb-10"
      >
        {/* Tags */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-white/40 bg-white/[0.06] px-2.5 py-1 rounded-full">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-[12px] font-medium">
            <span
              className="w-[6px] h-[6px] rounded-full flex-shrink-0"
              style={{
                background: project.type === 'client' ? '#34D399' : '#6B7280',
              }}
            />
            <span className={project.type === 'client' ? 'text-emerald-400/80' : 'text-white/40'}>
              {project.type === 'client' ? 'Client Project' : 'Concept Build'}
            </span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h1>

        {/* Summary */}
        <p className="text-lg text-white/[0.6] leading-relaxed max-w-[700px]">
          {project.oneLineSummary}
        </p>
      </motion.div>

      {/* ── Hero Screenshot ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-16 cursor-pointer"
        onClick={() => openLightbox(0)}
      >
        <ScreenshotFrame src={heroImage} alt={`${project.title} — main view`} eager />
      </motion.div>

      {/* ── Problem / Approach ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            The Problem
          </h2>
          <p className="text-base md:text-[17px] text-white/[0.65] leading-relaxed font-normal">
            {project.problem}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
            The Approach
          </h2>
          <p className="text-base md:text-[17px] text-white/[0.65] leading-relaxed font-normal">
            {project.approach}
          </p>
        </div>
      </motion.div>

      {/* ── Result (conditional) ────────────────────── */}
      {project.type === 'client' && project.result && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex justify-center"
        >
          <div className="static-card px-8 py-6 md:px-12 md:py-8 text-center">
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-white/40 mb-3">
              THE RESULT
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F72585] to-[#FF8C42]">
              {project.result}
            </p>
          </div>
        </motion.div>
      )}

      {/* ── Gallery ─────────────────────────────────── */}
      {remainingImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight mb-8">
            More Screens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {remainingImages.map((img, idx) => (
              <div key={idx} onClick={() => openLightbox(idx + 1)} className="cursor-pointer">
                <ScreenshotFrame
                  src={img}
                  alt={`${project.title} — screen ${idx + 2}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Related Projects ────────────────────────── */}
      {relatedProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight mb-8 text-center">
            Related Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((rp) => (
              <RelatedCard key={rp.slug} project={rp} />
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Lightbox Overlay ─────────────────────────── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[101]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          
          {/* Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            disabled={lightboxIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-[101]"
          >
            <HiArrowLeft className="w-6 h-6" />
          </button>
          
          {/* Image */}
          <img
            src={allImages[lightboxIndex]}
            alt="Expanded view"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl relative z-[101]"
          />
          
          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            disabled={lightboxIndex === allImages.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-[101]"
          >
            <HiArrowRight className="w-6 h-6" />
          </button>

          {/* Click background to close */}
          <div className="absolute inset-0 z-[100]" onClick={closeLightbox} />
        </div>
      )}
    </div>
  );
}
