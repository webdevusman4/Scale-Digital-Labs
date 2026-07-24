import HeroSection from "../components/HeroSection";
import ValuesSection from "../components/ValuesSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import WorkPreviewSection from "../components/WorkPreviewSection";
import CtaSection from "../components/CtaSection";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Divider />
      <ValuesSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <ProcessSection />
      <Divider />
      <WorkPreviewSection />
      <Divider />
      <CtaSection />
    </main>
  );
}

