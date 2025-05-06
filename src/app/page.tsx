"use client";

import { useEffect, useRef } from "react";

export default function HomePage() {
  const divRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null); 
  useEffect(() => {
    const updateBackground = (x: number, y: number) => {
      if (!wrapperRef.current || !divRef.current) return;
  
      const rect = wrapperRef.current.getBoundingClientRect();
      const px = ((x - rect.left) / rect.width) * 100;
      const py = ((y - rect.top) / rect.height) * 100;
      console.log("Mouse/touch position (%):", px.toFixed(2), py.toFixed(2));

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
  
    const wrapperEl = wrapperRef.current;
    wrapperEl?.addEventListener("mousemove", handleMouseMove);
    wrapperEl?.addEventListener("touchmove", handleTouchMove, { passive: true });
  
    return () => {
      wrapperEl?.removeEventListener("mousemove", handleMouseMove);
      wrapperEl?.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-steel)] to-[var(--color-dumbell-10)]">
      <div ref={wrapperRef} className="w-100 h-140 flex items-center justify-center border border-black bg-transparent">
        <div
          ref={divRef}
          className="
            w-full h-full
            mask-[url('/URU_FaceFill.svg')] mask-no-repeat mask-center mask-size-contain
            drop-shadow-[0_0_20px_var(--color-electrical)]
            animate-pulse-slow
          "
          style={{
            backgroundImage:
                "radial-gradient(circle, var(--color-electrical) 2%, var(--color-steel) 40%, var(--color-blue) 100%)",
            backgroundSize: "300% 300%",
            backgroundPosition: "50% 50%",
            transition: "background-position 0.1s ease-out",
          }}
          aria-hidden
        />
      </div>
    </section>
  );
}
