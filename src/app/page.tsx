"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [pos, setPos] = useState({ x: 50, y: 50 }); // % position

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 100;
      const y = (e.clientY / innerHeight) * 100;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-steel)] to-[var(--color-dumbell-10)]">
      <div
        className="
          w-120 h-120
          bg-[radial-gradient(circle,_var(--color-electrical),_var(--color-dumbell),_var(--color-steel))]
          bg-[length:200%_200%]
          transition-[background-position] duration-300 ease-out
          mask-[url('/URU_FaceFill.svg')] mask-no-repeat mask-center mask-size-contain
          drop-shadow-[0_0_20px_var(--color-electrical)]
        "
        style={{
          backgroundPosition: `${pos.x}% ${pos.y}%`,
        }}
        aria-hidden
      />
    </section>
  );
}
