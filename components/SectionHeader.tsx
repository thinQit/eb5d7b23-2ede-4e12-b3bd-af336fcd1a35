"use client";

import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  centered?: boolean
}

export default function SectionHeader({
  eyebrow = '',
  title = 'Section Title',
  subtitle = 'Add a clear, benefit-driven description that helps users understand the value quickly.',
  primaryCtaText = '',
  primaryCtaHref = '#',
  secondaryCtaText = '',
  secondaryCtaHref = '#',
  centered = true,
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center')}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">{title}</h2>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>
      {(primaryCtaText || secondaryCtaText) && (
        <div className={cn('mt-6 flex flex-wrap gap-3', centered && 'justify-center')}>
          {primaryCtaText ? <PrimaryButton text={primaryCtaText} href={primaryCtaHref} /> : null}
          {secondaryCtaText ? <SecondaryButton text={secondaryCtaText} href={secondaryCtaHref} /> : null}
        </div>
      )}
    </div>
  )
}
