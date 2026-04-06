'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoItem {
  name: string
  imageSrc: string
}

interface LogoCloudProps {
  title?: string
  logos?: LogoItem[]
}

export default function LogoCloud({
  title = 'Trusted by high-growth teams worldwide',
  logos = [
    { name: 'Northpeak', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576887/site-images/corporate/16553906.jpg' },
    { name: 'Clearlane', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576909/site-images/corporate/1181638.jpg' },
    { name: 'Auralith', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576881/site-images/corporate/11901335.jpg' },
    { name: 'Brightforge', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576879/site-images/corporate/16585156.jpg' },
    { name: 'Metrico', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576911/site-images/corporate/1181610.jpg' },
    { name: 'Nexboard', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576877/site-images/corporate/14447085.jpg' },
  ],
}: Partial<LogoCloudProps>) {
  return (
    <section id="social-proof" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">{title}</p>
        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name + index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex h-16 items-center justify-center rounded-xl border border-border bg-white p-3"
            >
              <Image
                src={logo.imageSrc}
                alt={logo.name}
                width={140}
                height={48}
                unoptimized
                className="h-8 w-auto rounded object-cover grayscale transition duration-300 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
