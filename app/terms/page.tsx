export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <>
      <section className="animate-fade-in-up">
        <HeroSpotlight
          title="Terms"
          subtitle="These sample terms outline basic usage and purchase expectations. Replace with your final legal terms."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Privacy", href: "/privacy" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576877/site-images/corporate/14447085.jpg"
        />
      </section>

      <section className="bg-muted py-20 md:py-24 animate-fade-in-up">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4">
            <Card className="card-hover rounded-xl border border-border bg-card p-8 space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Key points</h2>
              <p className="text-muted-foreground">A concise summary of typical landing page template terms.</p>
              <div>
                <h3 className="font-semibold text-foreground">License</h3>
                <p className="text-muted-foreground">
                  Starter and Pro plans are intended for a single project. Team plan allows up to 5 projects.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Refunds</h3>
                <p className="text-muted-foreground">
                  Refund requests are accepted within 14 days of purchase, subject to the satisfaction guarantee policy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Support</h3>
                <p className="text-muted-foreground">
                  Support is provided via email with response times based on your plan.
                </p>
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
