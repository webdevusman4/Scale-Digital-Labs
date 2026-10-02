// import { AboutHero } from '@/components/about/about-hero';
// import { WhatWeDo } from '@/components/about/what-we-do';
// import { WhyChooseUs } from '@/components/about/why-choose-us';
// import { OurProcess } from '@/components/about/our-process';
// import { OurCommitment } from '@/components/about/our-commitment';
// import { MeetTheFounders } from '@/components/about/meet-the-founders';
// import { BTSMarquee } from '@/components/about/bts-marquee';

import { AboutHero2 } from '@/components/about2/about-hero2';
import { WhatWeDo2 } from '@/components/about2/what-we-do2';
import { WhyChooseUs2 } from '@/components/about2/why-choose-us2';
import { OurProcess2 } from '@/components/about2/our-process2';
import { OurCommitment2 } from '@/components/about2/our-commitment2';
import { MeetTheFounders2 } from '@/components/about2/meet-the-founders2';
import { BTSMarquee2 } from '@/components/about2/bts-marquee2';

import { Footer2 } from '@/components/footer2';
import { LightThemeToggle } from '@/components/light-theme-toggle';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      <LightThemeToggle />
      {/* 
      <AboutHero />
      <WhatWeDo />
      <WhyChooseUs />
      <OurProcess />
      <MeetTheFounders />
      <OurCommitment />
      <BTSMarquee /> 
      */}

      <AboutHero2 />
      <WhatWeDo2 />
      <WhyChooseUs2 />
      <OurProcess2 />
      <MeetTheFounders2 />
      <OurCommitment2 />
      <BTSMarquee2 />

      {/* We reuse the global footer here, but enhanced with the massive CTA for this specific page */}
      <Footer2 enhancedCTA={true} />
    </main>
  );
}

