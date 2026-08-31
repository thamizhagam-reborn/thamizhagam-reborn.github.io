"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import ParticleCanvas from "./ParticleCanvas";
import Countdown from "./Countdown";
import WillReturn from "./WillReturn";
import DeveloperInfo from "./DeveloperInfo";

function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

export default function DoomsdayClock() {
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

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
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
    window.addEventListener("touchmove", handleTouchMove);
    animate();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className={`scene relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-black ${isActive ? "active" : ""}`}
    >
      {/* God rays */}
      <div className="god-rays absolute -top-[100vmin] -left-[100vmin] -right-[100vmin] -bottom-[100vmin] z-[2] mix-blend-screen blur-[1.5vmin] pointer-events-none scale-[1.4]" />

      {/* 3D shadow effect */}
      <div className="faux-3d-shadow absolute inset-0 z-[4] mix-blend-multiply pointer-events-none" />

      {/* Specular highlight */}
      <div className="faux-3d-specular absolute inset-0 z-[5] mix-blend-overlay pointer-events-none" />

      {/* Mouse bloom */}
      <div className="mouse-bloom absolute inset-0 z-[6] mix-blend-screen pointer-events-none" />

      {/* Fog */}
      <div className="absolute w-full h-full overflow-hidden z-[7] pointer-events-none opacity-25 mix-blend-screen">
        <div className="fog-layer absolute w-[200%] h-full top-0 -left-1/2 blur-[4vmin]" />
      </div>

      {/* Vignette */}
      <div className="vignette absolute inset-0 z-[9] pointer-events-none" />

      {/* Particles */}
      <ParticleCanvas />

      {/* Main Vertical Stack (Logo -> Countdown -> Verse) */}
      <div
        className="relative z-20 flex flex-col items-center justify-center gap-4 sm:gap-5 max-w-full px-4 pt-1 transition-transform duration-200 ease-out select-none"
        style={{
          transform: "perspective(1000px) rotateX(calc(var(--ny) * -4deg)) rotateY(calc(var(--nx) * 4deg))",
        }}
      >
        {/* 1. Main Logo - Clickable to Discord */}
        <a
          href="https://discord.gg/thamizhagam"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center cursor-pointer group pointer-events-auto"
        >
          {/* Ambient glow behind logo */}
          <div
            className="ambient-glow absolute inset-0 mix-blend-screen pointer-events-none opacity-0 group-hover:opacity-90 blur-[3vmin] scale-105 transition-opacity duration-500"
            style={{
              backgroundImage: "url('/thamizhagam-logo.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Base Logo Image */}
          <img
            src="/thamizhagam-logo.png"
            alt="Thamizhagam Reborn"
            className="bg-base w-[62vmin] h-auto max-h-[57vh] max-w-[90vw] object-contain drop-shadow-[0_0_55px_rgba(245,175,40,0.4)] group-hover:drop-shadow-[0_0_70px_rgba(255,215,50,0.6)] group-hover:scale-[1.02] transition-all duration-300 pointer-events-none"
          />
        </a>

        {/* 2. Countdown directly below logo */}
        <div>
          <Countdown />
        </div>

        {/* 3. Verse directly below countdown */}
        <div>
          <Suspense fallback={null}>
            <WillReturn />
          </Suspense>
        </div>
      </div>

      {/* 4. Developer Info Panel (Left Side) */}
      <DeveloperInfo />
    </div>
  );
}
