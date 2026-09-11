import { AboutHero } from '@/components/about/about-hero';
import { WhatWeDo } from '@/components/about/what-we-do';
import { WhyChooseUs } from '@/components/about/why-choose-us';
import { OurProcess } from '@/components/about/our-process';
import { OurCommitment } from '@/components/about/our-commitment';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      <AboutHero />
      <WhatWeDo />
      <WhyChooseUs />
      <OurProcess />
      <OurCommitment />

      {/* We reuse the global footer here */}
      <Footer />
    </main>
  );
}
