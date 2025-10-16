'use client'

import { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/Button'

interface SectionCardProps {
  title: string
  subtitle?: string
  text?: string | string[]
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  children?: ReactNode
  className?: string
}

export function SectionCard({
  title,
  subtitle,
  text,
  primaryAction,
  secondaryAction,
  children,
  className = ''
}: SectionCardProps) {
  const paragraphs = Array.isArray(text) ? text : text ? [text] : []

  return (
    <div
      className={`bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl 
      flex flex-col gap-8 p-6 sm:p-8 md:p-12 lg:p-16 ${className}`}
    >
      {/* Title & Subtitle */}
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium leading-snug">
            {subtitle}
          </h3>
        )}
      </div>

      {/* Main text */}
      {paragraphs.length > 0 && (
        <div className="space-y-4">
          {paragraphs.map((t, i) => (
            <p
              key={i}
              className="max-w-prose text-base sm:text-lg text-white/80 leading-relaxed"
            >
              {t}
            </p>
          ))}
        </div>
      )}

      {/* Optional custom content */}
      {children && <div>{children}</div>}

      {/* Buttons */}
      {(primaryAction || secondaryAction) && (
        <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 border-t border-white/10 mt-4">
          {primaryAction && (
            <Button variant="primary" href={primaryAction.href}>
              {primaryAction.label}
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
          {secondaryAction && (
            <Button variant="secondary" href={secondaryAction.href}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
