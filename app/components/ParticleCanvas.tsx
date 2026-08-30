"use client";

import { useEffect, useRef } from "react";

interface DustParticle {
  x: number;
  y: number;
  baseSize: number;
  baseVx: number;
  baseVy: number;
  alpha: number;
  fadeSpeed: number;
  fadingOut: boolean;
  angle: number;
  hue: number;
}

// Global particle count with getter/setter (Default to maximum 1000)
let particleCount = 1000;
let onParticleCountChange: (() => void) | null = null;

export function getParticleCount() {
  return particleCount;
}

export function setParticleCount(count: number) {
  particleCount = Math.max(10, Math.min(1000, count)); // Clamp between 10-1000
  onParticleCountChange?.();
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<DustParticle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const createParticle = (initial = false): DustParticle => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      baseSize: Math.random() * 1.8 + 0.3,
      baseVx: (Math.random() - 0.5) * 0.2,
      baseVy: -Math.random() * 0.4 - 0.1, // Float gently upwards
      alpha: initial ? Math.random() * 0.7 : 0,
      fadeSpeed: Math.random() * 0.003 + 0.001,
      fadingOut: Math.random() > 0.5,
      angle: Math.random() * Math.PI * 2,
      hue: Math.random() * 20 + 35, // Warm gold/amber range (35-55 deg hue)
    });

    const resetParticle = (p: DustParticle) => {
      p.x = Math.random() * window.innerWidth;
      p.y = window.innerHeight + Math.random() * 20;
      p.baseSize = Math.random() * 1.8 + 0.3;
      p.baseVx = (Math.random() - 0.5) * 0.2;
      p.baseVy = -Math.random() * 0.4 - 0.1;
      p.alpha = 0;
      p.fadeSpeed = Math.random() * 0.003 + 0.001;
      p.fadingOut = false;
      p.angle = Math.random() * Math.PI * 2;
      p.hue = Math.random() * 20 + 35;
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = Array.from({ length: particleCount }, () => createParticle(true));
    };

    onParticleCountChange = init;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scaleFactor = Math.min(window.innerWidth, window.innerHeight) / 1000;

      particlesRef.current.forEach((p) => {
        p.angle += 0.008;
        p.x += p.baseVx * scaleFactor + Math.sin(p.angle) * (0.2 * scaleFactor);
        p.y += p.baseVy * scaleFactor;

        if (p.x < -20 || p.x > window.innerWidth + 20 || p.y < -20) {
          resetParticle(p);
        }

        if (p.fadingOut) {
          p.alpha -= p.fadeSpeed;
          if (p.alpha <= 0) {
            p.fadingOut = false;
            resetParticle(p);
          }
        } else {
          p.alpha += p.fadeSpeed;
          if (p.alpha >= 0.8) p.fadingOut = true;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseSize * scaleFactor, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${p.alpha})`;
        ctx.shadowBlur = 8 * scaleFactor;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 50%, ${p.alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
      onParticleCountChange = null;
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas absolute inset-0 z-[8] pointer-events-none" />;
}
