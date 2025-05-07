"use client";

import { useRef, useEffect } from "react";

export default function TestPulse() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!boxRef.current) return;

      const { clientX, clientY } = e;
      boxRef.current.style.left = `${clientX - 25}px`;
      boxRef.current.style.top = `${clientY - 25}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log("MouseTest component is mounted");

  return (
    <div className="relative w-screen h-screen bg-gray-900">
      <div
        ref={boxRef}
        className="
    absolute w-[200px] h-[200px]
    mask-[url('/URU_FaceFill.svg')] mask-no-repeat mask-center mask-[size:contain]
    drop-shadow-[0_0_40px_var(--color-electrical)]
    animate-eye-pulse
  "
  style={{
    backgroundImage: "radial-gradient(circle, var(--color-electrical), var(--color-blue))",
    backgroundSize: "100% 100%",
    left: "50px",
    top: "50px",
  }}
  aria-hidden
      />
    </div>
  );
}
