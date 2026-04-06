export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import LogoCloud from "@/components/LogoCloud";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <section className="animate-fade-in-up">
        <HeroSpotlight
          title="Launch a high-converting landing page in a single afternoon."
          subtitle="Spotlight Landing pairs an animated hero with proven sections—social proof, features, testimonials, pricing, and FAQ—so you can ship faster and convert more visitors."
          primaryCta={{ label: "Get the template", href: "/pricing" }}
          secondaryCta={{ label: "See how it works", href: "#features" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576887/site-images/corporate/16553906.jpg"
        />
      </section>

      <section className="bg-muted animate-fade-in-up py-20 md:py-24">
        <ScrollReveal>
          <LogoCloud />
        </ScrollReveal>
      </section>

      <section id="features" className="animate-fade-in-up py-20 md:py-24">
        <ScrollReveal>
          <FeaturesGrid
            badge="Conversion-first toolkit"
            headline="Everything you need to convert—nothing you don’t."
            subheadline="A simple, focused landing page system designed for clarity, speed, and measurable outcomes."
            features={[
              {
                icon: "Sparkles",
                title: "Spotlight hero that grabs attention",
                description:
                  "Aceternity-powered HeroSpotlight animation with a clear value prop and two CTAs—ideal for demos and signups.",
              },
              {
                icon: "ShieldCheck",
                title: "Social proof that builds trust",
                description:
                  "Logo cloud + animated testimonials to reduce hesitation and increase click-through on your primary CTA.",
              },
              {
                icon: "CreditCard",
                title: "Pricing that answers objections",
                description:
                  "A clear pricing table with a highlighted recommended plan and concise feature bullets.",
              },
              {
                icon: "HelpCircle",
                title: "FAQ that removes friction",
                description:
                  "Accordion layout that handles common questions without forcing users to leave the page.",
              },
              {
                icon: "Gauge",
                title: "Fast, responsive, accessible",
                description:
                  "Tailwind + shadcn/ui components with sensible defaults for keyboard navigation and readable contrast.",
              },
              {
                icon: "Search",
                title: "SEO-ready structure",
                description:
                  "Metadata, semantic sections, and clean headings so your page is ready for search and sharing.",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section id="testimonials" className="bg-muted animate-fade-in-up py-20 md:py-24">
        <ScrollReveal>
          <TestimonialsAnimated />
        </ScrollReveal>
      </section>

      <section id="pricing" className="animate-fade-in-up py-20 md:py-24">
        <ScrollReveal>
          <PricingTable />
        </ScrollReveal>
      </section>

      <section id="faq" className="bg-muted animate-fade-in-up py-20 md:py-24">
        <ScrollReveal>
          <FAQAccordion />
        </ScrollReveal>
      </section>

      <section className="animate-fade-in-up py-20 md:py-24">
        <ScrollReveal>
          <CTAVortex />
        </ScrollReveal>
      </section>
    </>
  );
}
