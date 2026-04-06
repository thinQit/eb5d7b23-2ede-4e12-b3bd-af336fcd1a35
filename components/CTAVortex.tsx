'use client'

import { Check } from 'lucide-react'
import { BackgroundBeams } from '@/components/ui/backgrounds/background-beams'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'

interface CTAVortexProps {
  title?: string
  subtitle?: string
  bullets?: string[]
}

export default function CTAVortex({
  title = 'Ready to unify your team and grow faster?',
  subtitle = 'Join modern teams replacing fragmented tools with one platform built for execution.',
  bullets = ['No credit card required', '14-day free trial', 'Setup support included'],
}: Partial<CTAVortexProps>) {
  return (
    <section id="cta" className="relative overflow-hidden py-20 md:py-24">
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton text="Start Free Trial" href="#pricing" />
          <SecondaryButton text="Book a Demo" href="#footer" />
        </div>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          {bullets.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-[#2563EB]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
