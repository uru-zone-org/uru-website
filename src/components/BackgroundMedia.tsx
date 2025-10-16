'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface MediaItem {
  src: string
  type: 'image' | 'video' | 'youtube'
}

interface BackgroundMediaProps {
  media: (MediaItem | string)[]
  intervalMs?: number
  showIndicators?: boolean
  className?: string
}

export function BackgroundMedia({
  media,
  intervalMs = 6000,
  showIndicators = true,
  className = ''
}: BackgroundMediaProps) {
  const mediaItems: MediaItem[] = media.map(item =>
    typeof item === 'string' ? { src: item, type: 'image' } : item
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageError, setImageError] = useState<boolean[]>(
    new Array(mediaItems.length).fill(false)
  )

  useEffect(() => {
    if (mediaItems.length <= 1) return
    const id = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % mediaItems.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [mediaItems.length, intervalMs])

  const handleImageError = (index: number) => {
    setImageError(prev => {
      const next = [...prev]
      next[index] = true
      return next
    })
  }

  const renderMedia = (item: MediaItem, index: number) => {
    if (imageError[index]) {
      return (
        <div
          className="w-full h-full"
          style={{
            background:
              'linear-gradient(to bottom right, var(--greyscale-4), var(--greyscale-5))'
          }}
        />
      )
    }

    switch (item.type) {
      case 'youtube': {
        const videoId =
          item.src.match(
            /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\\s]{11})/
          )?.[1] ?? item.src

        return (
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )
      }
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
            alt={`Media ${index + 1}`}
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
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
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

      {/* Edge/Corner gradients + vignette */}
      <div
        className="absolute top-0 left-0 w-full h-64 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)'
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)'
        }}
      />
      <div
        className="absolute top-0 left-0 w-32 h-full pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
        }}
      />
      <div
        className="absolute top-0 right-0 w-32 h-full pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to left, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
        }}
      />
      <div
        className="absolute top-0 left-0 w-32 h-32 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse at bottom left, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%)'
        }}
      />

      {showIndicators && mediaItems.length > 1 && (
        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  index === currentIndex ? 'var(--yellow)' : 'var(--greyscale-4)',
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
