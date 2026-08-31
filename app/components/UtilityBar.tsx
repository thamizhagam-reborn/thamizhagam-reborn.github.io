"use client";

import { useState } from "react";
import { toggleAudio } from "./Countdown";
import { setWillReturnEnabled } from "./WillReturn";
import { getParticleCount, setParticleCount } from "./ParticleCanvas";

interface UtilityButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

function UtilityButton({ icon, label, onClick, href }: UtilityButtonProps) {
  const baseClass =
    "p-2 rounded-md text-amber-200/60 hover:bg-amber-500/15 hover:text-amber-200 transition-all duration-200 cursor-pointer flex items-center justify-center";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={baseClass}
      >
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={label} className={baseClass}>
      {icon}
    </button>
  );
}

// Royal Sun / Flame Emblem Icon
const EmblemIcon = () => (
  <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3m0 14v3M2 12h3m14 0h3m-3.07-6.93l-2.12 2.12m-9.62 9.62l-2.12 2.12m0-13.86l2.12 2.12m9.62 9.62l2.12 2.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const VolumeOnIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6 9H4a1 1 0 00-1 1v4a1 1 0 001 1h2l4 4V5L6 9z" />
  </svg>
);

const VolumeOffIcon = () => (
  <svg className="w-5 h-5 text-red-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-5 h-5 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const CloseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const TextOnIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const TextOffIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const ParticleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="4" cy="4" r="2" opacity="0.6"/>
    <circle cx="12" cy="6" r="1.5" opacity="0.8"/>
    <circle cx="20" cy="4" r="1" opacity="0.5"/>
    <circle cx="6" cy="12" r="1.5" opacity="0.7"/>
    <circle cx="12" cy="12" r="2" opacity="0.9"/>
    <circle cx="18" cy="10" r="1" opacity="0.6"/>
    <circle cx="4" cy="18" r="1" opacity="0.5"/>
    <circle cx="10" cy="18" r="1.5" opacity="0.7"/>
    <circle cx="16" cy="20" r="2" opacity="0.8"/>
    <circle cx="20" cy="16" r="1" opacity="0.6"/>
  </svg>
);

export default function UtilityBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [textEnabled, setTextEnabled] = useState(true);
  const [showParticlePopup, setShowParticlePopup] = useState(false);
  const [particleInput, setParticleInput] = useState(getParticleCount().toString());

  const handleAudioToggle = () => {
    const muted = toggleAudio();
    setIsMuted(muted);
  };

  const toggleText = () => {
    const newState = !textEnabled;
    setTextEnabled(newState);
    setWillReturnEnabled(newState);
  };

  const handleParticleSubmit = () => {
    const count = parseInt(particleInput, 10);
    if (!isNaN(count)) {
      setParticleCount(count);
      setParticleInput(getParticleCount().toString());
    }
    setShowParticlePopup(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col items-end gap-2">
      {/* Particle Count Popup */}
      {showParticlePopup && (
        <div className="absolute bottom-0 right-16 bg-black/85 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-amber-500/30 min-w-[210px]">
          <div className="text-amber-200 text-sm font-medium mb-1">Golden Embers</div>
          <div className="text-amber-400/60 text-xs mb-3">Density: 10 - 300 (Max)</div>
          <input
            type="number"
            min="10"
            max="300"
            value={particleInput}
            onChange={(e) => setParticleInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleParticleSubmit()}
            className="w-full bg-white/5 border border-amber-500/40 rounded px-3 py-2 text-amber-200 text-sm focus:outline-none focus:border-amber-400"
            autoFocus
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setShowParticlePopup(false)}
              className="flex-1 px-3 py-1.5 text-xs text-amber-200/60 hover:text-amber-200 bg-white/5 hover:bg-white/10 rounded transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleParticleSubmit}
              className="flex-1 px-3 py-1.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Expandable Menu */}
      <div
        className={`flex flex-col gap-1 rounded-xl bg-black/70 border border-amber-500/25 backdrop-blur-md p-1.5 transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100 translate-y-0 max-h-[300px]" : "opacity-0 translate-y-4 max-h-0 p-0 pointer-events-none"
        }`}
      >
        <UtilityButton
          icon={isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          label={isMuted ? "Unmute Music (Hangova South Melody)" : "Mute Music"}
          onClick={handleAudioToggle}
        />
        <UtilityButton
          icon={<DiscordIcon />}
          label="Join Thamizhagam Roleplay Discord"
          href="https://discord.gg/thamizhagam"
        />
        <UtilityButton
          icon={<ParticleIcon />}
          label="Embers Settings (Max 300)"
          onClick={() => {
            setParticleInput(getParticleCount().toString());
            setShowParticlePopup(!showParticlePopup);
          }}
        />
        <UtilityButton
          icon={textEnabled ? <TextOnIcon /> : <TextOffIcon />}
          label={textEnabled ? "Hide Tagline" : "Show Tagline"}
          onClick={toggleText}
        />
      </div>

      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={`p-3 rounded-full bg-black/60 border border-amber-500/35 backdrop-blur-md text-amber-400/80 hover:text-amber-200 hover:bg-black/80 hover:border-amber-400/70 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(245,175,40,0.25)] ${
          isOpen ? "rotate-90" : ""
        }`}
      >
        {isOpen ? <CloseIcon /> : <EmblemIcon />}
      </button>
    </div>
  );
}
