// components/Section.tsx
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  noBorder?: boolean;
  // Background options
  backgroundType?: 'none' | 'solid' | 'gradient' | 'radial';
  backgroundColor?: string;
  fadeIntensity?: 'light' | 'medium' | 'strong';
}

export function Section({
  id,
  children,
  className = "",
  fullHeight = false,
  noBorder = true,
  backgroundType = 'none',
  backgroundColor = '#333333',
  fadeIntensity = 'medium'
}: SectionProps) {
  const baseClass = fullHeight
    ? "min-h-screen py-20 md:py-32"
    : "min-h-[80vh] py-20 md:py-32";

  const borderClass = noBorder ? "" : "border-t";

  // Create background style
  const getBackgroundStyle = () => {
    switch (backgroundType) {
      case 'solid':
        return {
          background: backgroundColor,
        };
      case 'gradient':
        return {
          background: `linear-gradient(135deg, ${backgroundColor} 0%, black 100%)`,
        };
      case 'radial':
        return {
          background: `radial-gradient(ellipse at center, ${backgroundColor} 20%, black 80%)`,
        };
      default:
        return {};
    }
  };

  // Create fade overlay style
  const getFadeOverlayStyle = () => {
    if (backgroundType === 'none') return { display: 'none' };
    
    // Fade intensity values
    const intensityMap = {
      light: { edge: 0.3, mid: 0.1 },
      medium: { edge: 0.5, mid: 0.2 },
      strong: { edge: 0.7, mid: 0.3 }
    };
    
    const intensity = intensityMap[fadeIntensity];
    
    return {
      position: 'absolute' as const,
      inset: 0,
      background: `
        linear-gradient(to bottom, rgba(0,0,0,${intensity.edge}) 0%, rgba(0,0,0,${intensity.mid}) 15%, transparent 30%, transparent 70%, rgba(0,0,0,${intensity.mid}) 85%, rgba(0,0,0,${intensity.edge}) 100%),
        linear-gradient(to right, rgba(0,0,0,${intensity.edge}) 0%, rgba(0,0,0,${intensity.mid}) 10%, transparent 20%, transparent 80%, rgba(0,0,0,${intensity.mid}) 90%, rgba(0,0,0,${intensity.edge}) 100%)
      `,
      pointerEvents: 'none' as const,
    };
  };

  return (
    <section
      id={id}
      className={[
        baseClass,
        borderClass,
        "relative",
        className,
      ].join(" ")}
      style={{ 
        borderColor: "var(--greyscale-5)",
        ...getBackgroundStyle()
      }}
    >
      {/* Fade overlay */}
      <div style={getFadeOverlayStyle()} />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-10">
        {children}
      </div>
    </section>
  );
}