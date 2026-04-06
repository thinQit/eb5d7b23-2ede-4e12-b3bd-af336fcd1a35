'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items?: FAQItem[]
}

export default function FAQAccordion({
  items = [
    { question: 'How fast can we get started?', answer: 'Most teams are fully live in under one week with guided onboarding and prebuilt templates.' },
    { question: 'Do you offer a free trial?', answer: 'Yes. Every plan includes a 14-day free trial with full access to core features.' },
    { question: 'Can we migrate from our current tools?', answer: 'Absolutely. We provide import tools and customer success support for smooth migration.' },
    { question: 'Is FlowPilot secure?', answer: 'We use enterprise-grade encryption, role-based access controls, and ongoing infrastructure monitoring.' },
  ],
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-white">
          {items.map((item, idx) => {
            const isOpen = idx === openIndex
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-[#111827]">{item.question}</span>
                  <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
