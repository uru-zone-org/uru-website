// components/Logo.tsx
import Image from 'next/image'
import { InteractiveLogo } from './InteractiveLogo'

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <InteractiveLogo />
      <div style={{ filter: 'brightness(0) invert(1)' }}>
        <Image 
          src="/svg/URU_logo.svg" 
          alt="uru.zone" 
          width={80} 
          height={24}
          className="h-6"
        />
      </div>
    </div>
  )
}