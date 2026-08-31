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
  THEME: "/Reborn-Clock-Sound.mp3",
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
      {/* Scrambling Text (Replaces Date) */}
      <div
        className="font-[var(--font-cinzel)] text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-bold tracking-[0.5em] text-amber-200 uppercase transition-all duration-1000 text-center animate-pulse"
        style={{
          textShadow: "0 0 20px rgba(245, 180, 50, 0.8), 0 0 40px rgba(218, 165, 32, 0.4)",
          opacity: showDate ? 1 : 0,
          position: showDate ? "relative" : "absolute",
          filter: showDate ? "blur(0px)" : "blur(10px)",
          transform: showDate ? "scale(1)" : "scale(1.1)",
        }}
      >
        INITIALIZING REBORN...
      </div>

      {/* Countdown wrapper - Now a flex container for individual cards */}
      <div
        className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 md:gap-5 lg:gap-6 2xl:gap-8 w-full max-w-full px-2 sm:px-4 transition-all duration-1000"
        style={{ 
          opacity: showDate ? 0 : 1,
          filter: showDate ? "blur(10px)" : "blur(0px)",
          transform: showDate ? "scale(0.95)" : "scale(1)",
        }}
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
    <div className="flex flex-col items-center justify-center flex-1 sm:flex-none min-w-[4rem] sm:min-w-[4.5rem] md:min-w-[7rem] lg:min-w-[9rem] 2xl:min-w-[12rem] py-3 sm:py-4 md:py-6 lg:py-8 bg-black/40 backdrop-blur-xl border border-amber-500/30 rounded-xl md:rounded-2xl shadow-[inset_0_0_20px_rgba(245,175,40,0.1),0_5px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.02]">
      {/* Metallic Gradient Text */}
      <span
        className="font-mono text-3xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold tracking-wider leading-none bg-clip-text text-transparent bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600"
        style={{
          filter: "drop-shadow(0 0 15px rgba(245, 175, 40, 0.6))",
        }}
      >
        {value}
      </span>
      {/* Sleek Pill Badge for Label */}
      <div className="mt-2 sm:mt-3 md:mt-4 px-2 sm:px-3 py-1 bg-black/50 border border-amber-500/20 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] overflow-hidden text-center max-w-[90%]">
        <span
          className="block text-[0.5rem] sm:text-[0.65rem] md:text-xs lg:text-sm 2xl:text-base font-bold uppercase text-amber-400/90 tracking-[0.1em] md:tracking-[0.25em] truncate"
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-mono text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-amber-500/60 font-bold -translate-y-3 sm:-translate-y-4 md:-translate-y-6">
      :
    </span>
  );
}
