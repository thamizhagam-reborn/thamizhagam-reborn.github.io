import ParticleCanvas from "../components/ParticleCanvas";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col items-center justify-center pt-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10"></div>
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8 py-20 animate-in fade-in duration-1000 slide-in-from-bottom-10">
        <div className="relative">
          <img src="/reborn-countdown/thamizhagam-logo.png" alt="TMRP Logo" className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(245,175,40,0.6)] animate-pulse" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-[var(--font-cinzel)] font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 drop-shadow-[0_0_15px_rgba(245,175,40,0.3)]">
          THAMIZHAGAM REBORN
        </h1>
        
        <p className="text-xl sm:text-2xl text-amber-100/80 max-w-3xl leading-relaxed font-light tracking-wide">
          Remembering our greatness, let us build our future. Step into the most immersive and authentic roleplay experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-10">
          <Link href="/connect" className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/50 rounded-xl font-bold tracking-widest text-amber-400 hover:text-amber-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,175,40,0.3)] transition-all duration-300">
            JOIN DISCORD
          </Link>
          <a href="https://youtu.be/rt_GCzdljqU" target="_blank" rel="noopener noreferrer" className="px-8 py-4 flex items-center justify-center gap-3 bg-red-600/10 hover:bg-red-600/30 border border-red-500/50 rounded-xl font-bold tracking-widest text-red-400 hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all duration-300">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            WATCH TRAILER
          </a>
          <Link href="/departments" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold tracking-widest text-white/70 hover:text-white hover:scale-105 transition-all duration-300">
            DEPARTMENTS
          </Link>
        </div>
      </div>
    </main>
  );
}
