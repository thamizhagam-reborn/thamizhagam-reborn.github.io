"use client";

import { useEffect, useState } from "react";
import ParticleCanvas from "./ParticleCanvas";
import RulesSection from "./RulesSection";
import LinksSection from "./LinksSection";
import DeveloperInfo from "./DeveloperInfo";

export default function OfficialWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans w-full">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10"></div>
      </div>

      {/* Navigation Bar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-amber-500/20 py-4 shadow-lg shadow-amber-500/5" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src="/icon.png" alt="TMRP Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(245,175,40,0.5)]" />
            <span className="font-[var(--font-cinzel)] font-bold text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 hidden sm:block">
              THAMIZHAGAM
            </span>
          </div>
          
          <div className="flex gap-6 sm:gap-8">
            <button onClick={() => scrollToSection("departments")} className="text-sm font-bold tracking-widest text-white/70 hover:text-amber-400 uppercase transition-colors">
              Departments
            </button>
            <button onClick={() => scrollToSection("rules")} className="text-sm font-bold tracking-widest text-white/70 hover:text-amber-400 uppercase transition-colors hidden sm:block">
              Rules
            </button>
            <button onClick={() => scrollToSection("links")} className="text-sm font-bold tracking-widest text-white/70 hover:text-amber-400 uppercase transition-colors hidden sm:block">
              Connect
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative z-20 min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div className="text-center flex flex-col items-center">
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-amber-500/20 blur-[50px] rounded-full group-hover:bg-amber-500/30 transition-all duration-500"></div>
            <img 
              src="/thamizhagam-logo.png" 
              alt="Thamizhagam Reborn" 
              className="relative w-full max-w-[400px] sm:max-w-[600px] drop-shadow-[0_0_30px_rgba(245,175,40,0.5)] animate-pulse-slow"
            />
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-[var(--font-cinzel)] font-bold tracking-[0.3em] text-amber-100 mb-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            THE REBIRTH OF ROLEPLAY
          </h1>
          
          <p className="max-w-2xl text-white/70 text-base sm:text-lg mb-10 leading-relaxed drop-shadow-md">
            Welcome to the official home of Thamizhagam Reborn. Immerse yourself in a high-quality, serious roleplay experience featuring custom frameworks, strict rules, and a dedicated community.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://discord.gg/VCDjbKBbCm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-amber-500/20 hover:bg-amber-500/40 border border-amber-500 text-amber-100 font-bold uppercase tracking-widest rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,175,40,0.4)] flex items-center gap-2"
            >
              <i className="fa-brands fa-discord text-xl"></i>
              Join Discord
            </a>
            <a 
              href="https://discord.gg/37vBJtKzdu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white/80 hover:text-white font-bold uppercase tracking-widest rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <i className="fa-solid fa-play text-xl"></i>
              Connect IP
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce text-amber-500/50 cursor-pointer" onClick={() => scrollToSection("departments")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </div>

      {/* Departments Section */}
      <div id="departments" className="relative z-20 w-full py-24 bg-gradient-to-b from-transparent to-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-[var(--font-cinzel)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 mb-4 tracking-wider drop-shadow-[0_0_10px_rgba(245,175,40,0.3)]">
              OUR DEPARTMENTS
            </h2>
            <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-6"></div>
            <p className="text-amber-100/60 font-sans text-sm sm:text-base max-w-2xl mx-auto">
              Thamizhagam offers various opportunities to shape your career in the city. Become a public servant and protect the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {/* PD Card */}
            <div className="group relative bg-black/60 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500"></div>
              <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                <i className="fa-solid fa-shield-halved text-4xl"></i>
              </div>
              <h3 className="text-2xl font-[var(--font-cinzel)] font-bold text-white mb-3 tracking-widest">T.M.P.D</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">
                Thamizhagam Police Department. To protect and serve the citizens of Thamizhagam. Uphold the law and maintain peace in our streets.
              </p>
              <a href="https://discord.gg/Fg9ndHCtkM" target="_blank" rel="noopener noreferrer" className="mt-auto px-6 py-2 bg-blue-600/20 border border-blue-500 text-blue-200 hover:bg-blue-600 hover:text-white rounded text-sm font-bold uppercase tracking-wider transition-all duration-300">
                Apply for PD
              </a>
            </div>

            {/* EMS Card */}
            <div className="group relative bg-black/60 backdrop-blur-md border border-red-500/20 hover:border-red-500/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500"></div>
              <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                <i className="fa-solid fa-staff-snake text-4xl"></i>
              </div>
              <h3 className="text-2xl font-[var(--font-cinzel)] font-bold text-white mb-3 tracking-widest">T.M.M.D</h3>
              <p className="text-white/60 mb-6 text-sm leading-relaxed">
                Thamizhagam Medical Department. Dedicated to saving lives and providing the highest quality healthcare across the city.
              </p>
              <a href="https://discord.gg/Fg9ndHCtkM" target="_blank" rel="noopener noreferrer" className="mt-auto px-6 py-2 bg-red-600/20 border border-red-500 text-red-200 hover:bg-red-600 hover:text-white rounded text-sm font-bold uppercase tracking-wider transition-all duration-300">
                Apply for EMS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <RulesSection />

      {/* Links Section */}
      <LinksSection />

      {/* Developer Info */}
      <DeveloperInfo />

      {/* Footer */}
      <footer className="relative z-20 border-t border-amber-500/20 bg-black/80 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          <img src="/icon.png" alt="TMRP Logo" className="w-12 h-12 opacity-50 mb-4 grayscale" />
          <p className="text-white/40 text-sm font-sans text-center">
            &copy; {new Date().getFullYear()} Thamizhagam Reborn. All Rights Reserved.<br />
            Not affiliated with Rockstar Games, Take-Two Interactive, or Grand Theft Auto.
          </p>
        </div>
      </footer>
    </div>
  );
}
