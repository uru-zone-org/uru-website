interface CardProps {
  title: string;
  description?: string; // used as subtitle
  children?: React.ReactNode;
  featured?: boolean;
}

export function Card({
  title,
  description,
  children,
  featured = false,
}: CardProps) {
  return (
    <div className={featured ? "card card-featured" : "card"}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-subtitle">{description}</p>}
      </div>

      <div className="card-body">{children}</div>
    </div>
  );
}
