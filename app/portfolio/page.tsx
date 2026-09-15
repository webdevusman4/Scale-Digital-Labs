import { PortfolioHero } from '@/components/portfolio/portfolio-hero';
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid';
import { PortfolioCta } from '@/components/portfolio/portfolio-cta';
import { SectionDivider } from '@/components/ui/section-divider';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Portfolio — ScaleDigitalLabs',
  description:
    'Explore our portfolio of SaaS development, web design, Shopify stores, social media campaigns, paid ads, and LinkedIn branding projects.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      {/* Hero */}
      <PortfolioHero />

      {/* Filterable project grid */}
      <PortfolioGrid />

      <SectionDivider />

      {/* Final CTA */}
      <PortfolioCta />

      {/* Global footer */}
      <Footer />
    </main>
  );
}
