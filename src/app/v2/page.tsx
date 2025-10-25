"use client";

// Duplicado de src/app/page.tsx
import HeroKaleidos from "@/components/ui/hero-kaleidos";
import { TrustedBy } from "@/components/ui/trusted-by";
import BentoGrid from "@/components/bento-grid";
import FAQSection from "@/components/faq-section";
import ProcessSection from "@/components/process-section";
import { CtaAjuda } from "@/components/ui/cta-ajuda";
import CasesCarousel from "@/components/cases-carousel";
import { FooterDemo } from "@/components/ui/footer-demo";


export default function HomeV2() {
  return (
    <main className="min-h-screen bg-white">
      <HeroKaleidos />
      <TrustedBy />
      <BentoGrid />
      <ProcessSection variant="light" />
      <CasesCarousel />
      <CtaAjuda variant="light" />
      <FAQSection />
      <div id="contact-section">
        <FooterDemo />
      </div>
    </main>
  );
}


