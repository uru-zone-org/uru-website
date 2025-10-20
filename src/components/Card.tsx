interface CardProps {
  title: string
  description?: string
  children?: React.ReactNode
  featured?: boolean
}

export function Card({ title, description, children, featured = false }: CardProps) {
  return (
    <div className={featured ? 'card card-featured' : 'card'}>
      <h3 className="mb-4">{title}</h3>
      {description && <p className="mb-2 text-white/80">{description}</p>}
      {children}
    </div>
  )
}
