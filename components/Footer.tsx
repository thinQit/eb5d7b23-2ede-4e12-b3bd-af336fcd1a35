"use client";

import { Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  brand?: string;
  tagline?: string;
}

export default function Footer({
  brand = "FlowPilot",
  tagline = "Automate operations, align teams, and accelerate growth with one conversion-focused platform.",
}: Partial<FooterProps>) {
  const productLinks = ["Features", "Integrations", "Automations", "Security"];
  const companyLinks = ["About", "Careers", "Partners", "Contact"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "DPA"];

  return (
    <footer id="footer" className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-5 md:px-6">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-foreground">{brand}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">{tagline}</p>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@flowpilot.io
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +1 (415) 555-0189
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 88 Market St, San Francisco, CA
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Product</h4>
          <ul className="mt-4 space-y-2">
            {productLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Company</h4>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Legal</h4>
          <ul className="mt-4 space-y-2">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 text-center text-xs text-muted-foreground md:px-6">
        © {new Date().getFullYear()} {brand}. All rights reserved.
      </div>
    </footer>
  );
}
