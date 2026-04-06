'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
  rating: number
}

interface TestimonialsAnimatedProps {
  items?: Testimonial[]
}

export default function TestimonialsAnimated({
  items = [
    {
      quote: 'FlowPilot cut our manual reporting by 70% in the first month.',
      name: 'Maya Chen',
      role: 'VP Operations',
      company: 'Northpeak',
      avatar: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg',
      rating: 5,
    },
    {
      quote: 'We replaced three tools and improved pipeline visibility overnight.',
      name: 'Jordan Lee',
      role: 'Revenue Lead',
      company: 'Clearlane',
      avatar: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg',
      rating: 5,
    },
    {
      quote: 'The onboarding was effortless, and our team adopted it immediately.',
      name: 'Avery Brooks',
      role: 'Head of Growth',
      company: 'Metrico',
      avatar: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg',
      rating: 5,
    },
  ],
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section id="testimonials" className="bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 md:px-6">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex w-[200%] gap-6"
        >
          {[...items, ...items].map((item, idx) => (
            <Card key={item.name + idx} className="w-full max-w-md shrink-0 rounded-xl border border-border bg-white p-6">
              <div className="mb-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-6 text-[#111827]">“{item.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <Image src={item.avatar} alt={item.name} width={44} height={44} unoptimized className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}, {item.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
