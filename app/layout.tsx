import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Spotlight Landing — Conversion-first landing page blueprint",
  description:
    "A clean, conversion-driven landing page with an Aceternity HeroSpotlight, social proof, features, testimonials, pricing, FAQ, and a final CTA—built with Next.js, Tailwind, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logoText="Spotlight Landing"
          items={navItems}
          ctaLabel="Get the template"
          ctaHref="/pricing"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Spotlight Landing"
          description="A clean, conversion-driven landing page blueprint."
          columns={footerColumns}
          address="Spotlight Landing Studio, 548 Market St, Suite 912, San Francisco, CA 94104"
          email="hello@spotlightlanding.studio"
          copyright="© 2026 Spotlight Landing. All rights reserved."
        />
      </body>
    </html>
  );
}
