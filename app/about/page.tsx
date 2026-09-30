import { AboutHero } from '@/components/about/about-hero';
import { WhatWeDo } from '@/components/about/what-we-do';
import { WhyChooseUs } from '@/components/about/why-choose-us';
import { OurProcess } from '@/components/about/our-process';
import { OurCommitment } from '@/components/about/our-commitment';
import { MeetTheFounders } from '@/components/about/meet-the-founders';
import { BTSMarquee } from '@/components/about/bts-marquee';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      <AboutHero />
      <WhatWeDo />
      <WhyChooseUs />
      <OurProcess />
      <MeetTheFounders />
      <OurCommitment />
      
      <BTSMarquee />

      {/* We reuse the global footer here, but enhanced with the massive CTA for this specific page */}
      <Footer enhancedCTA={true} />
    </main>
  );
}
