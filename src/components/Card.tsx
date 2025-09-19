// components/Card.tsx
interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Card({ title, description, children }: CardProps) {
  return (
    <div className="panel rounded-2xl p-6">
      <h3 className="text-xl md:text-2xl mb-4">{title}</h3>
      {description && (
        <p style={{ color: 'var(--greyscale-3)' }}>{description}</p>
      )}
      {children}
    </div>
  )
}