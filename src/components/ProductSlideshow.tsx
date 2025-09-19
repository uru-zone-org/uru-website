'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface ProductSlideshowProps {
  images: string[]
  title: string
  description: string
  ctaText: string
  ctaHref: string
}

export default function ProductSlideshow({
  images,
  title,
  description,
  ctaText,
  ctaHref
}: ProductSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageError, setImageError] = useState<boolean[]>(new Array(images.length).fill(false))

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleImageError = (index: number) => {
    setImageError(prev => {
      const newErrors = [...prev]
      newErrors[index] = true
      return newErrors
    })
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Images as full background - no borders */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {!imageError[index] ? (
              <Image
                src={src}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                onError={() => handleImageError(index)}
                sizes="100vw"
              />
            ) : (
              <div className="w-full h-full" style={{ background: 'linear-gradient(to bottom right, var(--greyscale-4), var(--greyscale-5))' }} />
            )}
          </div>
        ))}
      </div>

      {/* Text overlay on top of image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6" style={{ color: 'var(--primary-color)' }}>
              {title}
            </h2>
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--greyscale-2)' }}>
              {description}
            </p>
            <a 
              href={ctaHref}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full transition-colors"
            >
              {ctaText}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Optional: Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      
      {/* Slide Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: index === currentIndex ? 'var(--yellow)' : 'var(--greyscale-4)',
                opacity: index === currentIndex ? 1 : 0.5
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}