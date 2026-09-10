"use client";

import { useState } from "react";

const developers = [
  {
    category: "FOUNDERS",
    members: [
      { name: "KING", role: "FOUNDER" },
      { name: "JACK", role: "FOUNDER" },
    ]
  },
  {
    category: "MANAGEMENT & ADMINS",
    members: [
      { name: "ZETRA", role: "DISCORDIST, ADMINISTRATOR, MANAGEMENT, DEVELOPER" },
      { name: "RICHARD", role: "ADMINISTRATOR, MANAGEMENT" },
      { name: "PIRATE", role: "ADMINISTRATOR, MANAGEMENT" },
      { name: "TT", role: "ADMINISTRATOR, MANAGEMENT, DEVELOPER" },
    ]
  },
  {
    category: "DEVELOPMENT TEAM",
    members: [
      { name: "JACK", role: "LEAD DEVELOPER, CORE, MANAGEMENT" },
      { name: "RIO", role: "LEAD DEVELOPER, CORE, MANAGEMENT" },
      { name: "MXD", role: "JUNIOR DEVELOPER, MANAGEMENT, SUPPORT DEV" },
    ]
  }
];

export default function DeveloperInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button (Visible on all screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 sm:left-6 lg:left-8 bottom-4 sm:bottom-6 lg:bottom-8 z-50 p-3 sm:p-4 rounded-full bg-black/60 border border-amber-500/35 backdrop-blur-md text-amber-400/80 hover:text-amber-200 hover:scale-105 shadow-[0_0_20px_rgba(245,175,40,0.25)] transition-all duration-300 pointer-events-auto"
        aria-label="Toggle Developer Info"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </button>

      {/* Developer Panel */}
      <div
        className={`fixed left-4 bottom-20 sm:left-6 sm:bottom-24 lg:left-24 lg:bottom-8 z-40 flex flex-col justify-end pointer-events-none transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-8 -translate-x-8"
        }`}
      >
        <div className="relative p-6 sm:p-8 rounded-2xl bg-black/70 backdrop-blur-xl border border-amber-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(245,175,40,0.05)] max-h-[75vh] w-[calc(100vw-2rem)] sm:w-[400px] overflow-y-auto pointer-events-auto custom-scrollbar">
          
          {/* Close button for mobile */}
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-amber-500/50 hover:text-amber-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="text-center mb-6">
            <h2 className="font-[var(--font-cinzel)] text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 tracking-widest drop-shadow-[0_0_10px_rgba(245,175,40,0.3)]">
              THAMIZHAGAM REBORN
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mt-2"></div>
          </div>

          <div className="flex flex-col gap-6">
            {developers.map((group, i) => (
              <div key={i} className="flex flex-col gap-3">
                <h3 className="font-mono text-xs text-amber-500/80 tracking-[0.2em] uppercase font-bold border-b border-amber-500/10 pb-1">
                  {group.category}
                </h3>
                <div className="flex flex-col gap-3">
                  {group.members.map((member, j) => (
                    <div key={j} className="flex flex-col">
                      <span className="font-[var(--font-cinzel)] font-bold text-amber-100 text-sm md:text-base tracking-wide">
                        {member.name}
                      </span>
                      <span className="font-sans text-[0.65rem] md:text-xs text-white/50 tracking-wider font-light uppercase leading-tight mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
