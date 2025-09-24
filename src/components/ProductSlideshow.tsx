'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface MediaItem {
  src: string
  type: 'image' | 'video' | 'youtube'
}

interface ProductSlideshowProps {
  media: MediaItem[] | string[] // Support both new format and legacy format
  title: string
  description: string
  ctaText: string
  ctaHref: string
}

export default function ProductSlideshow({
  media,
  title,
  description,
  ctaText,
  ctaHref
}: ProductSlideshowProps) {
  // Convert legacy string array to MediaItem array
  const mediaItems: MediaItem[] = media.map(item => 
    typeof item === 'string' 
      ? { src: item, type: 'image' } 
      : item
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageError, setImageError] = useState<boolean[]>(new Array(mediaItems.length).fill(false))

  useEffect(() => {
    if (mediaItems.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length)
    }, 6000) // Longer interval to account for videos

    return () => clearInterval(interval)
  }, [mediaItems.length])

  const handleImageError = (index: number) => {
    setImageError(prev => {
      const newErrors = [...prev]
      newErrors[index] = true
      return newErrors
    })
  }

  const renderMedia = (item: MediaItem, index: number) => {
    if (imageError[index]) {
      return (
        <div className="w-full h-full" style={{ background: 'linear-gradient(to bottom right, var(--greyscale-4), var(--greyscale-5))' }} />
      )
    }

    switch (item.type) {
      case 'youtube':
        // Extract YouTube video ID
        const videoId = item.src.includes('youtube.com') || item.src.includes('youtu.be') 
          ? item.src.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1]
          : item.src
        
        return (
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )

      case 'video':
        return (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onError={() => handleImageError(index)}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        )

      case 'image':
      default:
        return (
          <Image
            src={item.src}
            alt={`${title} ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            onError={() => handleImageError(index)}
            sizes="100vw"
          />
        )
    }
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Media as full background */}
      <div className="absolute inset-0">
        {mediaItems.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {renderMedia(item, index)}
          </div>
        ))}
      </div>

     {/* Enhanced gradient border overlays */}
      {/* Top gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-64 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)'
        }}
      />
      
      {/* Bottom gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)'
        }}
      />
      
      {/* Left gradient */}
      <div 
        className="absolute top-0 left-0 w-32 h-full pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
        }}
      />
      
      {/* Right gradient */}
      <div 
        className="absolute top-0 right-0 w-32 h-full pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Corner gradients for smoother blending */}
      {/* Top-left corner */}
      <div 
        className="absolute top-0 left-0 w-32 h-32 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      
      {/* Top-right corner */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      
      {/* Bottom-left corner */}
      <div 
        className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at bottom left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      
      {/* Bottom-right corner */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />

      {/* Optional: Central vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%)'
        }}
      />
      
      {mediaItems.length > 1 && (
        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
          {mediaItems.map((_, index) => (
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