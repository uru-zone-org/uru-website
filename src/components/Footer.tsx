// components/Footer.tsx
export function Footer() {
  return (
    <footer className="mt-auto py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm" style={{ color: 'var(--greyscale-3)' }}>
            <div className="flex flex-wrap items-center gap-3" style={{ color: 'var(--greyscale-3)' }}>
            <div>© {new Date().getFullYear()} uru.zone</div>
            <div>built in reykjavík</div>
            </div>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-80">privacy</a>
            <a href="#" className="hover:opacity-80">terms</a>
            <a href="#" className="hover:opacity-80">support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}