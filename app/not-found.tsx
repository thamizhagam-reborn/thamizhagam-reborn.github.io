"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

export default function NotFound() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 0);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const scene = sceneRef.current;
      if (!scene) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;

      currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.08);
      currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.08);

      scene.style.setProperty("--x", currentPos.current.x + "px");
      scene.style.setProperty("--y", currentPos.current.y + "px");
      scene.style.setProperty("--nx", String((currentPos.current.x / w) * 2 - 1));
      scene.style.setProperty("--ny", String((currentPos.current.y / h) * 2 - 1));

      animationRef.current = requestAnimationFrame(animate);
    };

    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    currentPos.current = { ...mousePos.current };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className={`scene relative w-screen h-screen flex justify-center items-center ${isActive ? "active" : ""}`}
    >
      {/* Background Central Emblem */}
      <div className="bg-base absolute inset-0 z-[1] flex items-center justify-center opacity-30 pointer-events-none">
        <div
          className="w-full h-full max-w-[70vmin] max-h-[70vmin] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/thamizhagam-logo.png')" }}
        />
      </div>

      {/* God rays */}
      <div className="god-rays absolute -top-[100vmin] -left-[100vmin] -right-[100vmin] -bottom-[100vmin] z-[2] mix-blend-screen blur-[1.5vmin] pointer-events-none scale-[1.4]" />

      {/* 3D shadow effect */}
      <div className="faux-3d-shadow absolute inset-0 z-[4] mix-blend-multiply pointer-events-none" />

      {/* Specular highlight */}
      <div className="faux-3d-specular absolute inset-0 z-[5] mix-blend-overlay pointer-events-none" />

      {/* Mouse bloom */}
      <div className="mouse-bloom absolute inset-0 z-[6] mix-blend-screen pointer-events-none" />

      {/* Vignette */}
      <div className="vignette absolute inset-0 z-[9] pointer-events-none" />

      {/* 404 Content */}
      <div className="relative z-[100] text-center px-4">
        {/* 404 Number */}
        <h1
          className="font-[var(--font-cinzel)] text-[18vmin] font-black text-amber-200 leading-none mb-2"
          style={{
            textShadow:
              "0 0 50px rgba(245, 180, 50, 0.7), 0 0 100px rgba(218, 165, 32, 0.4)",
          }}
        >
          404
        </h1>

        {/* Main Message */}
        <p
          className="font-[var(--font-cinzel)] text-[3vmin] font-bold text-amber-100 tracking-[0.4vmin] mb-4 uppercase"
          style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}
        >
          PAGE NOT FOUND
        </p>

        {/* Sub Message */}
        <p className="font-[var(--font-cinzel)] text-[1.6vmin] text-amber-300/70 tracking-[0.2em] mb-8">
          Remembering our greatness, let us build our future
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block font-[var(--font-cinzel)] text-[1.4vmin] tracking-[0.25em] text-amber-200 border border-amber-500/30 px-8 py-3 rounded-full bg-black/40 backdrop-blur-sm hover:bg-amber-500/20 hover:border-amber-400 hover:text-amber-100 transition-all duration-300 shadow-[0_0_20px_rgba(245,175,40,0.2)]"
        >
          RETURN TO LAUNCH COUNTDOWN →
        </Link>
      </div>
    </div>
  );
}
