// components/SectionHeader.tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="w-full md:w-2/3 lg:w-1/2">{title}</h2>
      {subtitle && (
        <p style={{ color: 'var(--greyscale-3)' }}>{subtitle}</p>
      )}
    </div>
  )
}