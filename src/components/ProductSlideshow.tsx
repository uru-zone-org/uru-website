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
    }, 6000)

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
    <div className="relative w-full h-full overflow-hidden">
      {/* Background gradient as fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
      
      {/* Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
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
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zinc-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-zinc-400 text-sm">Product Image</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute left-[5%] bottom-[10%] max-w-lg text-white z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 lowercase drop-shadow-lg">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 mb-6 drop-shadow-md">
          {description}
        </p>
        <a 
          href={ctaHref}
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-colors drop-shadow-lg"
        >
          {ctaText}
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  )
}