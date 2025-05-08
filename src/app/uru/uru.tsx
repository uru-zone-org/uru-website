"use client";

import { useEffect, useRef } from "react";

export default function UruPage() {
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
    <section className="flex w-screen h-screen justify-center">
      <div className="relative w-[500px] h-[500px] flex items-center justify-center group">
        <div
          ref={divRef}
          aria-hidden
          className="
            w-full h-full                                     
            [mask-image:url('/URU_FaceFill.svg')]
            [mask-repeat:no-repeat]
            [mask-position:center]
            [mask-size:contain]
            [-webkit-mask-image:url('/URU_FaceFill.svg')]
            [-webkit-mask-repeat:no-repeat]
            [-webkit-mask-position:center]
            [-webkit-mask-size:contain]

            filter
             [filter:drop-shadow(0_0_40px_var(--color-electrical))]
            [-webkit-filter:drop-shadow(0_0_40px_var(--color-electrical))]

            transition-all duration-500 ease-in-out transform translate-y-[-4px]
            group-hover:scale-105 group-hover:-rotate-1 group-hover:drop-shadow-[0_0_60px_var(--color-electrical)]
            animate-pulse
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-electrical) 0%, var(--color-dumbell-30) 25%, var(--color-steel) 30%, var(--color-steel) 20%, var(--color-blue) 100%)",
            backgroundSize: "200% 200%",
            backgroundPosition: "50% 50%",
            transition: "background-position 0.1s ease-out",
          }}
        />
      </div>
    </section>
  );
}
