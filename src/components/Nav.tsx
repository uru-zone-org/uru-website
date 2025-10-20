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
            href="/#product"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--greyscale-3)' }}
          >
            Product
          </Link>
          <Link
            href="/#science"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--greyscale-3)' }}
          >
            Science
          </Link>
          <Link
            href="/#mission"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--greyscale-3)' }}
          >
            Mission
          </Link>
          <Link
            href="/#compare"
            className="text-sm hover:opacity-80 transition-opacity"
            style={{ color: 'var(--greyscale-3)' }}
          >
            Compare
          </Link>
        </div>
        <Button variant="secondary" href="#demo">
          watch demo
        </Button>
      </nav>

      {/* Mobile Menu Button (styled like your buttons) */}
      <button
        className="md:hidden inline-flex items-center justify-center px-3 py-2 border rounded-full"
        style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Nav (dropdown anchored to the pill) */}
      {isOpen && (
        <div
          className="absolute left-0 right-0 top-full mt-2 md:hidden z-40"
        >
          <div
            className="border rounded-2xl shadow-lg"
            style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--background)' }}
          >
            <nav className="flex flex-col p-4 gap-2">
              <Link
                href="/#product"
                className="text-sm hover:opacity-80 transition-opacity py-2"
                style={{ color: 'var(--greyscale-3)' }}
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/#science"
                className="text-sm hover:opacity-80 transition-opacity py-2"
                style={{ color: 'var(--greyscale-3)' }}
                onClick={() => setIsOpen(false)}
              >
                Science
              </Link>
              <Link
                href="/#mission"
                className="text-sm hover:opacity-80 transition-opacity py-2"
                style={{ color: 'var(--greyscale-3)' }}
                onClick={() => setIsOpen(false)}
              >
                Mission
              </Link>
              <Link
                href="/#compare"
                className="text-sm hover:opacity-80 transition-opacity py-2"
                style={{ color: 'var(--greyscale-3)' }}
                onClick={() => setIsOpen(false)}
              >
                Compare
              </Link>
              <a
                href="/#demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-full text-sm mt-2"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                onClick={() => setIsOpen(false)}
              >
                Join Waitlist
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
