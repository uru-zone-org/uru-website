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
    }, 4000) // Changed to 4 seconds for better visibility

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
    <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: 'var(--background-color)' }}>
      {/* Background gradient as fallback */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, var(--greyscale-5), var(--greyscale-6))' }} />
      
      {/* Images */}
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
                className="object-contain" // Changed from object-cover to object-contain to show full image
                priority={index === 0}
                onError={() => handleImageError(index)}
                sizes="100vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, var(--greyscale-4), var(--greyscale-5))' }}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: 'var(--greyscale-5)' }}>
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--greyscale-3)' }}>Product Image</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute left-[5%] bottom-[10%] max-w-lg z-10" style={{ color: 'var(--primary-color)' }}>
        <h2 className="section-headline text-4xl md:text-6xl lg:text-7xl mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-6" style={{ color: 'var(--greyscale-2)' }}>
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

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      
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