import { notFound } from 'next/navigation';
import { PROJECTS_DATA, getProjectBySlug, getRelatedProjects } from '@/lib/projects-data';
import { ProjectDetail } from '@/components/portfolio/project-detail';
import { PortfolioCta } from '@/components/portfolio/portfolio-cta';
import { Footer } from '@/components/footer';

/* ── Static Params (pre-render all 20 slugs) ────────────── */

export function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic Metadata ───────────────────────────────────── */

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — ScaleDigitalLabs Portfolio`,
    description: project.oneLineSummary,
  };
}

/* ── Page ────────────────────────────────────────────────── */

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug, 3);

  return (
    <main className="min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      <ProjectDetail project={project} relatedProjects={related} />
      <PortfolioCta />
      <Footer />
    </main>
  );
}
