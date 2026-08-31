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
      { name: "STR", role: "ADMINISTRATOR" },
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
      {/* Mobile Toggle Button (Visible only on xl:hidden so it doesn't overlap clock) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-black/60 border border-amber-500/35 backdrop-blur-md text-amber-400/80 hover:text-amber-200 shadow-[0_0_20px_rgba(245,175,40,0.25)] transition-all duration-300 pointer-events-auto"
        aria-label="Toggle Developer Info"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </button>

      {/* Developer Panel */}
      <div
        className={`fixed xl:absolute left-0 top-0 xl:top-1/2 xl:-translate-y-1/2 w-full xl:w-auto h-full xl:h-auto xl:left-8 z-40 flex flex-col justify-center pointer-events-none transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0 bg-black/80 xl:bg-transparent backdrop-blur-xl xl:backdrop-blur-none" : "opacity-0 -translate-x-full xl:opacity-100 xl:translate-x-0"
        }`}
      >
        <div className="relative mx-6 xl:mx-0 p-6 xl:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-amber-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(245,175,40,0.05)] max-h-[85vh] overflow-y-auto pointer-events-auto custom-scrollbar">
          
          {/* Close button for mobile */}
          <button 
            onClick={() => setIsOpen(false)}
            className="xl:hidden absolute top-4 right-4 text-amber-500/50 hover:text-amber-400 transition-colors"
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
