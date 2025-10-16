// components/Section.tsx
'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, CSSProperties } from 'react'

interface MediaItem {
  src: string
  type: 'image' | 'video' | 'youtube'
}

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  fullHeight?: boolean
  
  // Media options
  media?: (MediaItem | string)[]
  mediaAutoplay?: boolean
  mediaInterval?: number
  pauseOnHover?: boolean
  
  // Overlay/fade options
  fadeIntensity?: 'none' | 'light' | 'medium' | 'strong'
  overlayOpacity?: number
  
  // UX enhancements
  accentBorder?: boolean
}

export function Section({
  id,
  children,
  className = "",
  fullHeight = false,
  media = [],
  mediaAutoplay = true,
  mediaInterval = 6000,
  pauseOnHover = true,
  fadeIntensity = 'medium',
  overlayOpacity = 0.3,
  accentBorder = false
}: SectionProps) {
  // Convert legacy string array to MediaItem array
  const mediaItems: MediaItem[] = media.map(item => 
    typeof item === 'string' 
      ? { src: item, type: 'image' } 
      : item
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [imageError, setImageError] = useState<boolean[]>(new Array(mediaItems.length).fill(false))

  useEffect(() => {
    if (!mediaAutoplay || mediaItems.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
    }, mediaInterval)

    return () => clearInterval(interval)
  }, [mediaItems.length, mediaAutoplay, mediaInterval, isPaused])

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
        <div 
          className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" 
        />
      )
    }

    switch (item.type) {
      case 'youtube':
        const videoId = item.src.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1]
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
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            onError={() => handleImageError(index)}
            sizes="100vw"
          />
        )
    }
  }

  // Fade overlay styles based on intensity
  const getFadeStyle = (): CSSProperties | undefined => {
    if (fadeIntensity === 'none') return undefined
    
    const intensityMap = {
      light: 0.4,
      medium: 0.6,
      strong: 0.8
    }
    
    const intensity = intensityMap[fadeIntensity]
    
    return {
      background: `
        linear-gradient(to bottom, 
          rgba(0,0,0,${intensity}) 0%, 
          rgba(0,0,0,${intensity * 0.5}) 20%, 
          rgba(0,0,0,${overlayOpacity}) 50%, 
          rgba(0,0,0,${intensity * 0.5}) 80%, 
          rgba(0,0,0,${intensity}) 100%
        ),
        radial-gradient(ellipse at center, 
          rgba(0,0,0,0) 40%, 
          rgba(0,0,0,${overlayOpacity * 0.5}) 70%, 
          rgba(0,0,0,${overlayOpacity}) 100%
        )
      `
    }
  }

  const baseClass = fullHeight
    ? "min-h-screen py-20 md:py-32"
    : "min-h-[80vh] py-20 md:py-32"

  return (
    <section
      id={id}
      className={`${baseClass} relative overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Media background if provided */}
      {mediaItems.length > 0 && (
        <div className="absolute inset-0">
          {mediaItems.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {renderMedia(item, index)}
            </div>
          ))}
        </div>
      )}

      {/* Fade overlay */}
      {mediaItems.length > 0 && fadeIntensity !== 'none' && (
        <div 
          className="absolute inset-0 pointer-events-none z-10" 
          style={getFadeStyle()}
        />
      )}

      {/* Enhanced gradient borders for better edge blending */}
      {mediaItems.length > 0 && (
        <>
          {/* Top gradient */}
          <div 
            className="absolute top-0 left-0 w-full h-32 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
            }}
          />
          
          {/* Bottom gradient */}
          <div 
            className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
            }}
          />
          
          {/* Left gradient */}
          <div 
            className="absolute top-0 left-0 w-24 h-full pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
            }}
          />
          
          {/* Right gradient */}
          <div 
            className="absolute top-0 right-0 w-24 h-full pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)'
            }}
          />
        </>
      )}

      {/* Accent border for Von Restorff Effect */}
      {accentBorder && (
        <div className="absolute inset-0 border-y-2 border-yellow-500/10 pointer-events-none z-30" />
      )}

      {/* Media indicators - Bigger for Fitts's Law */}
      {mediaItems.length > 1 && (
        <div className="absolute bottom-8 right-8 flex gap-3 z-20">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                hover:scale-125 focus:scale-125 focus:outline-none 
                focus:ring-2 focus:ring-yellow-500/50
                ${index === currentIndex 
                  ? 'bg-yellow-500' 
                  : 'bg-gray-400/50 hover:bg-gray-300/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Pause indicator */}
      {isPaused && mediaItems.length > 1 && (
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs text-white/70">Paused</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-20">
        {children}
      </div>
    </section>
  )
}
