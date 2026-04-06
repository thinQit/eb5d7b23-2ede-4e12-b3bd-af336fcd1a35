export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function PricingPage() {
  return (
    <>
      <section className="animate-fade-in-up">
        <HeroSpotlight
          title="Pricing built for fast launches."
          subtitle="Choose a plan that matches how many sites you’re shipping. All plans include the full conversion-focused layout."
          primaryCta={{ label: "Get Pro", href: "/contact" }}
          secondaryCta={{ label: "Read FAQ", href: "#faq" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576881/site-images/corporate/11901335.jpg"
        />
      </section>

      <section className="py-20 md:py-24 animate-fade-in-up">
        <ScrollReveal>
          <PricingTable />
        </ScrollReveal>
      </section>

      <section id="faq" className="bg-muted py-20 md:py-24 animate-fade-in-up">
        <ScrollReveal>
          <FAQAccordion />
        </ScrollReveal>
      </section>

      <section className="py-20 md:py-24 animate-fade-in-up">
        <ScrollReveal>
          <CTAVortex />
        </ScrollReveal>
      </section>
    </>
  );
}
