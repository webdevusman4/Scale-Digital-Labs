import { ContactHero } from '@/components/contact/contact-hero';
import { DirectContact } from '@/components/contact/direct-contact';
import { WhatHappensNext } from '@/components/contact/what-happens-next';
import { FaqAccordion } from '@/components/contact/faq-accordion';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden flex flex-col pt-20">
      {/* Hero with embedded contact form */}
      <ContactHero />

      {/* Alternative contact methods */}
      <DirectContact />

      {/* Post-submit process explanation */}
      <WhatHappensNext />

      {/* FAQ accordion */}
      <FaqAccordion />

      {/* Global footer */}
      <Footer />
    </main>
  );
}
