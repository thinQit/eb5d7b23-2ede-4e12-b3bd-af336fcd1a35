export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <>
      <section className="animate-fade-in-up">
        <HeroSpotlight
          title="Privacy Policy"
          subtitle="We collect only what we need to respond to your messages and improve the site experience."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Back to home", href: "/" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576911/site-images/corporate/1181610.jpg"
        />
      </section>

      <section className="bg-muted py-20 md:py-24 animate-fade-in-up">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4">
            <Card className="card-hover rounded-xl border border-border bg-card p-8 space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Our approach</h2>
              <p className="text-muted-foreground">
                This is a sample policy for a landing page blueprint. Replace with your legal text as needed.
              </p>
              <div>
                <h3 className="font-semibold text-foreground">Information we collect</h3>
                <p className="text-muted-foreground">If you contact us, we collect the information you provide (name, email, and message).</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">How we use information</h3>
                <p className="text-muted-foreground">We use your information to respond to inquiries, provide support, and improve the website content and usability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Data retention</h3>
                <p className="text-muted-foreground">We retain contact messages for up to 12 months unless you request deletion sooner.</p>
              </div>
            </Card>
          </div>
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
