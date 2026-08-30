"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Target: September 11, 2026 at 6:30 PM (18:30:00)
const TARGET_DATE = new Date("September 11, 2026 18:30:00");

function calculateTimeLeft(): TimeLeft | null {
  const now = new Date();
  if (now >= TARGET_DATE) return null;

  let months =
    (TARGET_DATE.getFullYear() - now.getFullYear()) * 12 +
    (TARGET_DATE.getMonth() - now.getMonth());

  const targetDayTime = TARGET_DATE.getTime() % 86400000;
  const nowDayTime = now.getTime() % 86400000;

  if (
    now.getDate() > TARGET_DATE.getDate() ||
    (now.getDate() === TARGET_DATE.getDate() && nowDayTime > targetDayTime)
  ) {
    months--;
  }

  const futureDate = new Date(now);
  futureDate.setMonth(futureDate.getMonth() + months);
  const diff = TARGET_DATE.getTime() - futureDate.getTime();

  return {
    months: Math.max(0, months),
    days: Math.max(0, Math.floor(diff / 86400000)),
    hours: Math.max(0, Math.floor((diff % 86400000) / 3600000)),
    minutes: Math.max(0, Math.floor((diff % 3600000) / 60000)),
    seconds: Math.max(0, Math.floor((diff % 60000) / 1000)),
  };
}

function formatTwoDigits(num: number): string {
  return num < 10 ? "0" + num : "" + num;
}

// Audio track - Launch Theme MP3
export const AUDIO_TRACKS = {
  THEME: "/reborn-countdown/Reborn-Clock-Sound.mp3",
};

// Export audio control functions
let globalAudio: HTMLAudioElement | null = null;

export function getAudio() {
  return globalAudio;
}

export function toggleAudio() {
  if (!globalAudio) return false;
  globalAudio.muted = !globalAudio.muted;
  if (!globalAudio.muted && globalAudio.paused) {
    globalAudio.play().catch(() => {});
  }
  return globalAudio.muted;
}

export default function Countdown() {
  const [showDate, setShowDate] = useState(true);
  const [time, setTime] = useState<TimeLeft | null>(null);
  const [displayValues, setDisplayValues] = useState({
    months: "00",
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    globalAudio = new Audio(AUDIO_TRACKS.THEME);
    globalAudio.loop = true;
    globalAudio.volume = 1.0;
    globalAudio.preload = "auto";

    // Explicit loop fallback ensuring infinite continuous playback
    const handleEnded = () => {
      if (globalAudio) {
        globalAudio.currentTime = 0;
        globalAudio.play().catch(() => {});
      }
    };
    globalAudio.addEventListener("ended", handleEnded);

    let audioUnlocked = false;

    const tryPlayAudio = () => {
      if (!globalAudio || audioUnlocked) return;

      globalAudio
        .play()
        .then(() => {
          audioUnlocked = true;
          removeListeners();
        })
        .catch(() => {
          // Autoplay blocked, will retry on user interaction
        });
    };

    const removeListeners = () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
      document.removeEventListener("keydown", enableAudio);
      document.removeEventListener("scroll", enableAudio);
    };

    const enableAudio = () => {
      tryPlayAudio();
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);
    document.addEventListener("keydown", enableAudio);
    document.addEventListener("scroll", enableAudio);

    // Attempt autoplay immediately
    tryPlayAudio();

    const startTimer = setTimeout(() => {
      const initialTime = calculateTimeLeft();
      if (!initialTime) return;

      setShowDate(false);
      setTime(initialTime);

      const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const shuffleDuration = 1000;
      const startTime = Date.now();

      const shuffleInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= shuffleDuration) {
          clearInterval(shuffleInterval);
          setDisplayValues({
            months: formatTwoDigits(initialTime.months),
            days: formatTwoDigits(initialTime.days),
            hours: formatTwoDigits(initialTime.hours),
            minutes: formatTwoDigits(initialTime.minutes),
            seconds: formatTwoDigits(initialTime.seconds),
          });
          tryPlayAudio();
        } else {
          setDisplayValues({
            months: Array.from({ length: 2 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""),
            days: Array.from({ length: 2 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""),
            hours: Array.from({ length: 2 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""),
            minutes: Array.from({ length: 2 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""),
            seconds: Array.from({ length: 2 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""),
          });
        }
      }, 50);
    }, 3500);

    return () => {
      clearTimeout(startTimer);
      if (globalAudio) {
        globalAudio.removeEventListener("ended", handleEnded);
        globalAudio.pause();
      }
      globalAudio = null;
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
      document.removeEventListener("keydown", enableAudio);
      document.removeEventListener("scroll", enableAudio);
    };
  }, []);

  useEffect(() => {
    if (!time) return;

    const interval = setInterval(() => {
      const newTime = calculateTimeLeft();
      if (newTime) {
        setTime(newTime);
        setDisplayValues({
          months: formatTwoDigits(newTime.months),
          days: formatTwoDigits(newTime.days),
          hours: formatTwoDigits(newTime.hours),
          minutes: formatTwoDigits(newTime.minutes),
          seconds: formatTwoDigits(newTime.seconds),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="countdown-container relative z-20 pointer-events-none whitespace-nowrap flex flex-col justify-center items-center opacity-0">
      {/* Static date */}
      <div
        className="font-[var(--font-cinzel)] text-[3.4vmin] sm:text-[2.8vmin] font-bold tracking-[0.4vmin] text-amber-200 uppercase transition-opacity duration-700 text-center"
        style={{
          textShadow: "0 0 20px rgba(245, 180, 50, 0.8), 0 0 40px rgba(218, 165, 32, 0.4)",
          opacity: showDate ? 1 : 0,
          position: showDate ? "relative" : "absolute",
        }}
      >
        SEPTEMBER 11, 2026 • 6:30 PM
      </div>

      {/* Countdown wrapper */}
      <div
        className="flex items-center gap-[1.5vmin] sm:gap-[2vmin] px-6 py-2.5 sm:px-8 sm:py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-amber-500/30 shadow-[0_0_35px_rgba(230,160,30,0.25)] transition-opacity duration-700"
        style={{ opacity: showDate ? 0 : 1 }}
      >
        <TimeBox value={displayValues.months} label="MONTHS" />
        <Separator />
        <TimeBox value={displayValues.days} label="DAYS" />
        <Separator />
        <TimeBox value={displayValues.hours} label="HOURS" />
        <Separator />
        <TimeBox value={displayValues.minutes} label="MINUTES" />
        <Separator />
        <TimeBox value={displayValues.seconds} label="SECONDS" />
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[6.2vmin] sm:min-w-[7.2vmin]">
      <span
        className="font-mono text-[4.2vmin] sm:text-[3.6vmin] font-bold text-amber-100 tracking-[0.2vmin] leading-none"
        style={{
          textShadow:
            "0 0 18px rgba(255, 200, 50, 0.7), 0 2px 10px rgba(0, 0, 0, 0.9)",
        }}
      >
        {value}
      </span>
      <span
        className="text-[1.1vmin] sm:text-[0.95vmin] font-bold uppercase text-amber-400/80 mt-[0.8vmin] tracking-[0.25vmin]"
        style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.9)" }}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      className="font-mono text-[3.6vmin] sm:text-[3vmin] text-amber-400 font-bold -mt-[1vmin] opacity-80"
      style={{
        textShadow: "0 0 12px rgba(245, 180, 50, 0.7)",
      }}
    >
      :
    </span>
  );
}
