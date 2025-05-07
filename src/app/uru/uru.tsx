"use client";

import { useEffect, useRef } from "react";

export default function UruPage() {
  const divRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateBackground = (x: number, y: number) => {
      if (!divRef.current) return;
  
      const width = window.innerWidth;
      const height = window.innerHeight;
      const px = (x / width) * 100;
      const py = (y / height) * 100;
  
      divRef.current.style.backgroundPosition = `${px}% ${py}%`;
    };
  
    const handleMouseMove = (e: MouseEvent) => {
      updateBackground(e.clientX, e.clientY);
    };
  
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateBackground(touch.clientX, touch.clientY);
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
    <section className="flex items-center justify-center w-screen h-screen">
      <div
        ref={wrapperRef}
        className="relative w-[500px] h-[500px] flex items-center justify-center"
      >
        <div
          ref={divRef}
          className="
          w-full h-full
          mask-[url('/URU_FaceFill.svg')] mask-no-repeat mask-center mask-[size:contain]
          transition-all duration-1000 ease-in-out
          transform translate-y-[-6px]
          animate-soft-breathe
          drop-shadow-[0_0_30px_var(--color-electrical)]
          ring-2 ring-[var(--color-electrical)] ring-offset-4 ring-offset-[var(--color-background)]
          hover:scale-[1.03] hover:drop-shadow-[0_0_50px_var(--color-electrical)]
        "
        
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-electrical) 0%, var(--color-dumbell-30) 25%, var(--color-background) 30%, var(--color-steel) 40%, var(--color-blue) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "50% 50%",
            transition: "background-position 0.1s ease-out",
          }}
          aria-hidden
        />
      </div>
    </section>
  );
}
