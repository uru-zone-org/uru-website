// components/Card.tsx
interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  featured?: boolean; // Simple flag for the second type
}

export function Card({ title, description, children, featured = false }: CardProps) {
  if (featured) {
    return (
      <div 
        className="rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.02]"
        style={{ 
          background: 'linear-gradient(135deg, var(--greyscale-6) 0%, var(--greyscale-4) 100%)',
        //   border: '1px solid var(--yellow)'
        }}
      >
        <h3 className="mb-4" style={{ color: 'var(--yellow)' }}>{title}</h3>
        {description && (
          <p style={{ color: 'var(--greyscale-1)' }}>{description}</p>
        )}
        {children}
      </div>
    )
  }

  return (
    <div className="panel rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.02]"
        style={{ 
        background: 'linear-gradient(135deg, var(--greyscale-6) 0%, var(--greyscale-4) 100%)',
        border: '1px solid var(--greyscale-4)'
        }}>
      <h3 className="mb-4" style={{ color: 'var(--grayscale-1)' }}>{title}</h3>
      {description && (
        <p style={{ color: 'var(--greyscale-1)' }}>{description}</p>
      )}
      {children}
    </div>
  )
}