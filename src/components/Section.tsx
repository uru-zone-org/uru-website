'use client'

import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  fullHeight?: boolean
  accentBorder?: boolean
}

export function Section({
  id,
  children,
  className = '',
  fullHeight = false,
  accentBorder = false
}: SectionProps) {
  const baseClass = fullHeight
    ? 'min-h-screen py-20 md:py-32'
    : 'min-h-[80vh] py-20 md:py-32'

  return (
    <section
      id={id}
      className={`${baseClass} relative overflow-hidden ${className}`}
    >
      {accentBorder && (
        <div className="absolute inset-0 border-y-2 border-yellow-500/10 pointer-events-none z-10" />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-20">
        {children}
      </div>
    </section>
  )
}