"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import PrimaryButton from "@/components/PrimaryButton";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText?: string;
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Navbar({
  logoText = "FlowPilot",
  items = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  ctaLabel = "Start Free Trial",
  ctaHref = "#pricing",
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = items.map((i) => i.href.replace("#", "")).filter(Boolean);
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.05 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          {logoText}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground min-h-10 flex items-center px-2",
                active === item.href && "text-primary"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton text={ctaLabel} href={ctaHref} iconName="ArrowRight" />
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm font-medium text-muted-foreground min-h-10 px-2 py-3 flex items-center rounded transition-colors hover:text-foreground hover:bg-muted",
                  active === item.href && "text-primary"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href={ctaHref}
              className="mt-2 inline-flex min-h-10 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
