"use client";

import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  recommended?: boolean
}

interface PricingTableProps {
  plans?: Plan[]
}

export default function PricingTable({
  plans = [
    {
      name: 'Starter',
      price: '$29/mo',
      description: 'For early-stage teams launching smarter workflows.',
      features: ['Up to 5 users', 'Core automations', 'Email support', 'Basic analytics'],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$99/mo',
      description: 'For scaling teams needing deeper visibility and control.',
      features: ['Up to 25 users', 'Advanced automations', 'Custom dashboards', 'Priority support'],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with compliance and scale needs.',
      features: ['Unlimited users', 'SSO + SCIM', 'Dedicated CSM', 'Custom SLA'],
      recommended: false,
    },
  ],
}: Partial<PricingTableProps>) {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Pricing that scales with your team</h2>
          <p className="mt-3 text-muted-foreground">Simple plans, transparent billing, and no hidden onboarding fees.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg',
                plan.recommended && 'border-[#2563EB] ring-2 ring-[#2563EB]/20'
              )}
            >
              {plan.recommended && (
                <p className="mb-3 inline-flex rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                  Recommended
                </p>
              )}
              <h3 className="text-lg font-semibold text-[#111827]">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-[#111827]">{plan.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#111827]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2563EB]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {plan.recommended ? (
                  <PrimaryButton text="Start 14-day trial" href="#cta" className="w-full justify-center" />
                ) : (
                  <SecondaryButton text="Choose plan" href="#cta" className="w-full justify-center" />
                )}
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          30-day money-back guarantee. Cancel anytime—no lock-in.
        </p>
      </div>
    </section>
  )
}
