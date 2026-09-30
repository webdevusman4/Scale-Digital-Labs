import { HomeHero } from '@/components/home-hero';
import { TechMarquee } from '@/components/tech-marquee';
import { AgencyIntro } from '@/components/agency-intro';
import { CoreValues } from '@/components/core-values';
import { ServicesShowcase } from '@/components/services-showcase';
import { OurProcess } from '@/components/about/our-process';
import { Footer } from '@/components/footer';
import { GlobalLogoBar } from '@/components/ui/global-logo-bar';
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel';

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent text-white font-sans selection:bg-purple-500/30">
      
      {/* Hero Section */}
      <HomeHero />
      
      <GlobalLogoBar />

      {/* Dual-Track Tech Marquee */}
      <section className="bg-transparent pb-16">
        <TechMarquee headline="Trusted tools we work with" />
      </section>

      {/* Agency Introduction Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 bg-transparent">
        <AgencyIntro />
      </section>

      {/* Sticky Core Values Section */}
      <CoreValues />

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Process Section */}
      <OurProcess 
        eyebrow="How We Work"
        title={<>Our Process, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] via-[#F72585] to-[#FF8C42]">Simplified.</span></>}
        subtitle={null}
        showBottomLink={true}
      />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Footer */}
      <Footer />
    </main>
  );
}
