// components/Header.tsx
interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'var(--background-color)', borderColor: 'var(--greyscale-5)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {children}
        </div>
      </div>
    </header>
  )
}
