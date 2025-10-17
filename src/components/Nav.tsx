'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Nav */}
<nav className="hidden md:flex items-center gap-6">
  <div className="flex items-center gap-6">
    <Link 
      href="/wear-page" 
      className="text-sm hover:opacity-80 transition-opacity" 
      style={{ color: 'var(--greyscale-3)' }}
    >
      wear
    </Link>
    <Link 
      href="/app" 
      className="text-sm hover:opacity-80 transition-opacity" 
      style={{ color: 'var(--greyscale-3)' }}
    >
      app
    </Link>
    <Link 
      href="/compare" 
      className="text-sm hover:opacity-80 transition-opacity" 
      style={{ color: 'var(--greyscale-3)' }}
    >
      compare
    </Link>
  </div>
  <div className="pl-8">
    <Button variant="secondary" href="#demo">request demo</Button>
  </div>
</nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 ml-auto"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 border-b md:hidden z-40 shadow-lg" style={{ borderColor: 'var(--greyscale-5)', backgroundColor: 'var(--background)' }}>
          <nav className="flex flex-col p-6 gap-4">
            <Link 
              href="/wear" 
              className="text-sm hover:opacity-80 transition-opacity py-2" 
              style={{ color: 'var(--greyscale-3)' }}
              onClick={() => setIsOpen(false)}
            >
              wear
            </Link>
            <Link 
              href="/app" 
              className="text-sm hover:opacity-80 transition-opacity py-2" 
              style={{ color: 'var(--greyscale-3)' }}
              onClick={() => setIsOpen(false)}
            >
              app
            </Link>
            <Link 
              href="/compare" 
              className="text-sm hover:opacity-80 transition-opacity py-2" 
              style={{ color: 'var(--greyscale-3)' }}
              onClick={() => setIsOpen(false)}
            >
              compare
            </Link>
            <Link 
              href="#demo" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-full text-sm"
              onClick={() => setIsOpen(false)}
            >
              request demo
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}