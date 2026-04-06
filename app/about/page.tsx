export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <section className="animate-fade-in-up">
        <HeroSpotlight
          title="A landing page system built for clarity and speed."
          subtitle="We focus on the sections that move visitors from curiosity to action—without bloated pages or distracting UI."
          primaryCta={{ label: "See pricing", href: "/pricing" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576909/site-images/corporate/1181638.jpg"
        />
      </section>

      <section className="bg-muted py-20 md:py-24 animate-fade-in-up">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2">
            <Card className="card-hover rounded-xl border border-border bg-card p-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Why this layout works</h2>
              <p className="mt-4 text-muted-foreground">
                Most landing pages fail because they bury the offer or overwhelm visitors. This blueprint follows a
                proven order: attention → trust → value → proof → price → objections → final push.
              </p>
              <ul className="mt-6 space-y-4 text-foreground">
                <li><strong>One message per section:</strong> Each section has a single goal and a single primary CTA.</li>
                <li><strong>Trust before price:</strong> Logos and testimonials come before pricing to build confidence.</li>
                <li><strong>Objections handled in-page:</strong> FAQ reduces friction right before the final CTA.</li>
              </ul>
            </Card>
            <Card className="card-hover rounded-xl border border-border bg-card p-8">
              <h3 className="text-2xl font-semibold text-foreground">Team</h3>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="font-semibold text-foreground">Jordan Lee — Design Systems</p>
                  <p className="text-muted-foreground">
                    Builds clean, scalable UI tokens and component libraries optimized for marketing sites.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Samira Patel — Front-end Engineering</p>
                  <p className="text-muted-foreground">
                    Specializes in Next.js performance, accessibility, and animation polish.
                  </p>
                </div>
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
