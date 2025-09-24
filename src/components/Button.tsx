
// components/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', href, children }: ButtonProps) {
  const className = variant === 'primary' 
    ? "btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-full"
    : "btn-secondary inline-flex items-center gap-2 px-4 py-2 border rounded-full"
  
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
