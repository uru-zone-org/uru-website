// src/sections/VideoSection.tsx
'use client'

import { BackgroundMedia } from '@/components/BackgroundMedia'

export function VideoSection() {
  return (
    <section
      id="demo"
      className="relative full-bleed h-[60vh] md:h-[70vh] lg:h-[80vh]"
    >
      <BackgroundMedia
        media={[{ src: 'https://youtu.be/4LV5p36JO9Y', type: 'youtube' }]}
        showIndicators={false}
      />
    </section>
  )
}
