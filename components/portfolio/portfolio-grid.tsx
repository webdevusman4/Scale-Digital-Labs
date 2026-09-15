'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { PROJECTS_DATA, CATEGORIES, type CategoryFilter, type Project } from '@/lib/projects-data';
import { ScreenshotFrame } from '@/components/ui/screenshot-frame';

/* ── Constants ──────────────────────────────────────────── */

const INITIAL_VISIBLE = 9;
const LOAD_INCREMENT = 9;

/* ── Project Card ───────────────────────────────────────── */

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="interactive-card block h-full overflow-hidden group"
      >
        {/* Screenshot */}
        <ScreenshotFrame
          src={project.thumbnailImage}
          alt={project.title}
        />

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          {/* Tags row */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Category */}
            <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-white/40 bg-white/[0.06] px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            {/* Client/Concept tag */}
            <span className="flex items-center gap-1.5 text-[11px] font-medium">
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
          <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-white/90 transition-colors">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-white/55 leading-relaxed line-clamp-2">
            {project.oneLineSummary}
          </p>

          {/* Conditional result / concept note */}
          {project.type === 'client' && project.result && (
            <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F72585] to-[#FF8C42] font-semibold">
              {project.result}
            </p>
          )}
          {project.type === 'concept' && (
            <p className="text-[13px] text-white/40 italic">
              Concept project — self-directed
            </p>
          )}

          {/* View link */}
          <div className="flex items-center gap-1.5 mt-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">
            View Project
            <HiArrowRight className="w-3.5 h-3.5 text-[#F72585] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Filter Tabs ────────────────────────────────────────── */

function FilterTabs({
  active,
  onChange,
}: {
  active: CategoryFilter;
  onChange: (cat: CategoryFilter) => void;
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              px-4 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 cursor-pointer
              ${isActive
                ? 'text-white/90'
                : 'bg-white/[0.04] border border-white/[0.1] text-white/50 hover:text-white/70 hover:border-white/20'
              }
            `}
            style={
              isActive
                ? {
                    border: '1px solid transparent',
                    backgroundImage:
                      'linear-gradient(rgba(11,15,25,0.92), rgba(11,15,25,0.92)), linear-gradient(135deg, #7B2FF7, #F72585, #FF8C42)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }
                : undefined
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

/* ── Portfolio Grid Section ─────────────────────────────── */

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  // Reset visible count when filter changes
  const handleFilterChange = (cat: CategoryFilter) => {
    setActiveFilter(cat);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="relative w-full py-8 md:py-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Filter Tabs */}
      <div className="mb-12">
        <FilterTabs active={activeFilter} onChange={handleFilterChange} />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + LOAD_INCREMENT)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 transition-all text-[15px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42] cursor-pointer"
          >
            Load More Projects
            <HiArrowRight className="w-4 h-4 text-[#F72585]" />
          </button>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-white/50 text-lg">No projects in this category yet.</p>
          <button
            onClick={() => handleFilterChange('All')}
            className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#FF8C42] cursor-pointer"
          >
            View all projects →
          </button>
        </div>
      )}
    </section>
  );
}
