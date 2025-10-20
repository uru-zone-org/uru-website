// src/components/Header.tsx
import Link from 'next/link'
import { Logo } from './Logo'
import { Nav } from './Nav'

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="content-wrap pt-[env(safe-area-inset-top)] py-4">
        <div className="head-surface px-4 py-2 flex items-center justify-between relative">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <Nav />
        </div>
      </div>
    </header>
  )
}
