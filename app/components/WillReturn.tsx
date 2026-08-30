"use client";

import { useEffect, useState, useRef } from "react";

// Global state for visibility
let willReturnEnabled = true;
let listeners: ((enabled: boolean) => void)[] = [];

export function setWillReturnEnabled(enabled: boolean) {
  willReturnEnabled = enabled;
  listeners.forEach((fn) => fn(enabled));
}

export function getWillReturnEnabled() {
  return willReturnEnabled;
}

export function subscribeWillReturn(fn: (enabled: boolean) => void) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}

export default function WillReturn() {
  const [step, setStep] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const lastTimeRef = useRef<number>(0);
  const cycleStartRef = useRef<number>(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const unsubscribe = subscribeWillReturn(setEnabled);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let animationId: number;

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
        cycleStartRef.current = timestamp + 1500;
      }

      if (timestamp < cycleStartRef.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (!startedRef.current) {
        startedRef.current = true;
        cycleStartRef.current = timestamp;
      }

      const elapsed = timestamp - cycleStartRef.current;

      if (elapsed < 500) {
        setStep(0);
      } else if (elapsed < 3500) {
        setStep(1);
      } else if (elapsed < 6500) {
        setStep(2);
      } else if (elapsed < 12000) {
        setStep(3);
      } else {
        cycleStartRef.current = timestamp;
        setStep(0);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="relative z-[30] text-center px-4 w-full max-w-5xl">
      <p className="font-[var(--font-cinzel)] text-[2.4vmin] sm:text-[2vmin] tracking-[0.24em] text-amber-100/95 drop-shadow-[0_2px_15px_rgba(245,175,40,0.6)] uppercase leading-relaxed font-semibold select-none">
        <span className={`inline transition-opacity duration-1000 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
          Remembering our greatness,
        </span>
        <span className={`inline transition-opacity duration-1000 ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
          {" "}let us build our future
        </span>
        <br className="sm:inline" />
        <span className={`inline transition-opacity duration-1000 ml-0 sm:ml-3 ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
          <a
            href="https://discord.gg/thamizhagam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold text-amber-300 hover:text-amber-100 hover:scale-105 transition-all duration-300 underline decoration-amber-500/40 hover:decoration-amber-300 underline-offset-4 hover:drop-shadow-[0_0_20px_rgba(255,215,80,0.9)] cursor-pointer pointer-events-auto"
          >
            ~ Thamizhagam Reborn
          </a>
        </span>
      </p>
    </div>
  );
}
