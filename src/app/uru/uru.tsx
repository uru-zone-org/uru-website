"use client";

import { useEffect, useRef } from "react";

export default function UruPage() {
  const divRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (!wrapperRef.current || !divRef.current) return;
  
    const wrapper = wrapperRef.current;
    const div = divRef.current;
  
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;
  
    const update = () => {
      // Easing interpolation
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
  
      div.style.backgroundPosition = `${currentX}% ${currentY}%`;
      requestAnimationFrame(update);
    };
  
    const handleInput = (x: number, y: number) => {
      const rect = wrapper.getBoundingClientRect();
      targetX = ((x - rect.left) / rect.width) * 100;
      targetY = ((y - rect.top) / rect.height) * 100;
    };
  
    const handleMouseMove = (e: MouseEvent) => {
      handleInput(e.clientX, e.clientY);
    };
  
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleInput(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
  
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("touchmove", handleTouchMove, { passive: true });
  
    // Add subtle autonomous drift
    setInterval(() => {
      targetX += Math.sin(Date.now() / 1500) * 0.3;
      targetY += Math.cos(Date.now() / 1300) * 0.3;
    }, 50);
  
    requestAnimationFrame(update);
  
    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
  

  return (
    <section className="flex items-center justify-center">
      <div ref={wrapperRef} className="w-100 h-140 flex items-center justify-center">
        <div
          ref={divRef}
          className="
            w-full h-full
            mask-[url('/URU_FaceFill.svg')] mask-no-repeat mask-center mask-[size:contain]
            drop-shadow-[0_0_40px_var(--color-electrical)]
            animate-eye-pulse
          "

          
          style={{
            backgroundImage:
                "radial-gradient(circle, var(--color-electrical) 0%, var(--color-dumbell-30) 25%, var(--color-background) 30%,var(--color-steel) 40%,  var(--color-blue) 100%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "50% 50%",
            transition: "background-position 0.1s ease-out",
          }}
          aria-hidden
        />
      </div>
    </section>
  );
}
