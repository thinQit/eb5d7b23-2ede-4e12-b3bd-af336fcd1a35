"use client";

import { ArrowRight, PlayCircle, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface SecondaryButtonProps {
  text?: string
  href?: string
  className?: string
  iconName?: string
}

export default function SecondaryButton({
  text = 'Learn More',
  href = '#',
  className = '',
  iconName = 'ArrowRight',
}: Partial<SecondaryButtonProps>) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ArrowRight,
    PlayCircle,
    MessageCircle,
  }
  const Icon = iconMap[iconName || 'ArrowRight'] || ArrowRight

  return (
    <Button asChild variant="outline" className={cn('rounded-lg border-border px-6 py-3 font-medium text-[#111827] hover:bg-[#2563EB]/5', className)}>
      <a href={href} className="inline-flex items-center gap-2">
        {text}
        <Icon className="h-4 w-4" />
      </a>
    </Button>
  )
}
