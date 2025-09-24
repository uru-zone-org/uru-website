// components/Section.tsx
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean; // keep prop for compatibility
  noBorder?: boolean;
  
}

export function Section({
  id,
  children,
  className = "",
  fullHeight = false,
  noBorder = true, // changed default to true
}: SectionProps) {
  // Always at least half a screen tall, but can grow with content.
  // If you ever want a true full-screen hero, pass fullHeight and it will be min-h-screen.
  const baseClass = fullHeight
    ? "min-h-screen py-20 md:py-32"
    : "min-h-[80vh] py-20 md:py-32";

  const borderClass = noBorder ? "" : "border-t";
  
  return (
    <section
      id={id}
      className={[
        baseClass,
        borderClass,
        "relative overflow-visible", // never clip
        className,
      ].join(" ")}
      style={{ borderColor: "var(--greyscale-5)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {children}
      </div>
    </section>
  );
}