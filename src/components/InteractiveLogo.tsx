// components/InteractiveLogo.tsx
"use client";

import { useEffect, useRef } from "react";

export function InteractiveLogo() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBackground = (x: number, y: number) => {
      if (!divRef.current) return;

      const px = (x / window.innerWidth) * 100;
      const py = (y / window.innerHeight) * 100;
      divRef.current.style.backgroundPosition = `${px}% ${py}%`;
    };

    const handleMouseMove = (e: MouseEvent) =>
      updateBackground(e.clientX, e.clientY);

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length) {
        const { clientX, clientY } = e.touches[0];
        updateBackground(clientX, clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="w-7 h-7 flex items-center justify-center">
      <div
        ref={divRef}
        aria-hidden
        className="w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--highlight-color) 0%, var(--secondary-color) 30%, var(--greyscale-3) 70%)",
          backgroundSize: "200% 200%",
          backgroundPosition: "50% 50%",
          transition: "background-position 0.1s ease-out",
          maskImage: "url('/svg/URU_FaceFill.svg')",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
          WebkitMaskImage: "url('/svg/URU_FaceFill.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
        }}
      />
    </div>
  );
}