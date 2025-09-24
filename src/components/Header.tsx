// components/Header.tsx
import { Logo } from './Logo'
import { Nav } from './Nav'

export function Header() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="mx-auto px-6 sm:px-6" style={{ maxWidth: '100%', width: '100%' }}>
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  )
}