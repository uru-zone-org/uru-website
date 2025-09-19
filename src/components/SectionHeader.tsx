// components/SectionHeader.tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between mb-12">
      <h2 className="text-3xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p style={{ color: 'var(--greyscale-3)' }}>{subtitle}</p>
      )}
    </div>
  )
}