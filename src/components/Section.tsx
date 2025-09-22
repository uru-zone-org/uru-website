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
  noBorder = false,
}: SectionProps) {
  // Always at least half a screen tall, but can grow with content.
  // If you ever want a true full-screen hero, pass fullHeight and it will be min-h-screen.
  const baseClass = fullHeight
    ? "min-h-screen py-16 md:py-24"
    : "min-h-[50vh] py-16 md:py-24";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </section>
  );
}
