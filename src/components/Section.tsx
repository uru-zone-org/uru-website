'use client'

import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  fullHeight?: boolean
  accentBorder?: boolean
  container?: boolean
  containerClassName?: string
}

export function Section({
  id,
  children,
  className = '',
  fullHeight = false,
  accentBorder = false,
  container = true,
  containerClassName = ''
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

      {container ? (
<div className={`h-full w-full px-4 sm:px-6 relative z-20 ${containerClassName}`}>
  {children}
</div>
      ) : (
        // No container: let callers control layout/positioning completely
<div className="relative z-20 h-full w-full">
  {children}
</div>

      )}
    </section>
  )
}
