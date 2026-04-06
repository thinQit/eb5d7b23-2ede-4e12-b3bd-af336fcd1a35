export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import ContactForm from "@/components/ContactForm";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <>
      <section className="animate-fade-in-up">
        <HeroSpotlight
          title="Contact us"
          subtitle="Tell us what you’re launching and your timeline. We’ll respond within 1 business day."
          primaryCta={{ label: "Email us", href: "mailto:hello@spotlightlanding.studio" }}
          secondaryCta={{ label: "See pricing", href: "/pricing" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576879/site-images/corporate/16585156.jpg"
        />
      </section>

      <section className="bg-muted py-20 md:py-24 animate-fade-in-up">
        <ScrollReveal>
          <ContactForm
            headline="Send a message"
            subheadline="Use the form for general questions, plan recommendations, or partnership inquiries."
            contactInfo={[
              { icon: "Mail", label: "Email", value: "hello@spotlightlanding.studio" },
              { icon: "MapPin", label: "Address", value: "548 Market St, Suite 912, San Francisco, CA 94104" },
              { icon: "Clock3", label: "Hours", value: "Mon–Fri, 9:00 AM–5:00 PM PT" },
            ]}
          />
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
