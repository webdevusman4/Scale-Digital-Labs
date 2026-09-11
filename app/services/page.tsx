import { ServicesHero } from '@/components/services/services-hero';
import { TechMarquee } from '@/components/tech-marquee';
import { ServicesOverview } from '@/components/services/services-overview';
import { ServiceDeepDives } from '@/components/services/service-block';
import { OurProcess } from '@/components/about/our-process';
import { ServicesFaq } from '@/components/services/services-faq';
import { ServicesCta } from '@/components/services/services-cta';
import { Footer } from '@/components/footer';

import { SectionDivider } from '@/components/ui/section-divider';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      {/* Hero */}
      <ServicesHero />

      {/* Reused Trust/Tech Stack Bar */}
      <section className="bg-transparent pb-16 pt-8">
        <TechMarquee headline="The platforms we build and grow on" />
      </section>

      <SectionDivider />

      {/* Jump-link overview grid */}
      <ServicesOverview />

      <SectionDivider />

      {/* 6 service deep-dive blocks */}
      <ServiceDeepDives />

      <SectionDivider />

      {/* Reused Our Process timeline */}
      <OurProcess />

      <SectionDivider />

      {/* Services-specific FAQ */}
      <ServicesFaq />

      <SectionDivider />

      {/* Final CTA */}
      <ServicesCta />

      {/* Global footer */}
      <Footer />
    </main>
  );
}
