"use client";

import HeroKaleidos from "@/components/ui/hero-kaleidos";
import { TrustedBy } from "@/components/ui/trusted-by";
import BentoGrid from "@/components/bento-grid";
import FAQSection from "@/components/faq-section";
import ProcessSection from "@/components/process-section";
import { CtaAjuda } from "@/components/ui/cta-ajuda";
import CasesCarousel from "@/components/cases-carousel";
import { FooterDemo } from "@/components/ui/footer-demo";
import { useTracking } from "@/hooks/use-tracking";

export default function Home() {
  useTracking();
  return (
    <main id="main-content" className="min-h-screen bg-white" role="main">
      <HeroKaleidos />
      <TrustedBy />
      <BentoGrid />
      <ProcessSection variant="light" />
      <div id="cases-section">
        <CasesCarousel />
      </div>
      <CtaAjuda variant="light" />
      <FAQSection />
      <div id="contact-section">
        <FooterDemo />
      </div>
    </main>
  );
}
