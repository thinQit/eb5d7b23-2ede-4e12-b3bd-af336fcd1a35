"use client";

import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface PrimaryButtonProps {
  text?: string
  href?: string
  className?: string
  iconName?: string
}

export default function PrimaryButton({
  text = 'Get Started',
  href = '#',
  className = '',
  iconName = 'ArrowRight',
}: Partial<PrimaryButtonProps>) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ArrowRight,
    Sparkles,
    PlayCircle,
  }
  const Icon = iconMap[iconName || 'ArrowRight'] || ArrowRight

  return (
    <Button asChild className={cn('rounded-lg bg-[#2563EB] px-6 py-3 font-medium text-white hover:bg-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#2563EB]/40', className)}>
      <a href={href} className="inline-flex items-center gap-2">
        {text}
        <Icon className="h-4 w-4" />
      </a>
    </Button>
  )
}
