// components/Section.tsx
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  noBorder?: boolean;
}

export function Section({ id, children, className = "", fullHeight = false, noBorder = false }: SectionProps) {
  const baseClass = fullHeight 
    ? "min-h-screen flex items-center py-16" 
    : "py-16 md:py-24"  // Match HeroSection padding
  const borderClass = noBorder ? "" : "border-t"
  
  return (
    <section 
      id={id} 
      className={`${baseClass} ${borderClass} ${className}`}
      style={{ borderColor: 'var(--greyscale-5)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  )
}