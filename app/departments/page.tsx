export default function Departments() {
  const departments = [
    {
      id: "pd",
      title: "THAMIZHAGAM POLICE",
      subtitle: "TMPD",
      desc: "To Serve and Protect. Join the elite force keeping the streets of Thamizhagam safe.",
      icon: "/pd.png",
      color: "blue",
      applyUrl: "https://discord.gg/Fg9ndHCtkM"
    },
    {
      id: "ems",
      title: "MEDICAL DEPARTMENT",
      subtitle: "EMS / Hospital",
      desc: "Dedicated to saving lives. The backbone of the city's health and wellness.",
      icon: "/ems.png",
      color: "red",
      applyUrl: "https://discord.gg/Fg9ndHCtkM"
    },
  ];

  return (
    <main className="relative min-h-screen bg-black pt-32 px-4 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-[var(--font-cinzel)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 tracking-widest mb-6">
            OUR DEPARTMENTS
          </h1>
          <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {departments.map((dept) => (
            <a
              href={dept.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={dept.id}
              className={`group relative bg-black/40 backdrop-blur-md border border-${dept.color}-500/20 hover:border-${dept.color}-500/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col items-center text-center shadow-lg hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]`}
            >
              {/* Glow effect */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-${dept.color}-500/20 blur-[50px] rounded-full pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100`}></div>

              <div className="w-32 h-32 mb-6 relative z-10 flex items-center justify-center bg-black/50 rounded-full border border-white/10 p-2 overflow-hidden">
                <img src={dept.icon} alt={dept.title} className="w-full h-full object-contain mix-blend-screen" />
              </div>

              <h3 className="text-2xl font-bold tracking-widest mb-2 font-[var(--font-cinzel)] text-white group-hover:text-amber-400 transition-colors">
                {dept.title}
              </h3>
              <div className={`text-${dept.color}-400 font-bold tracking-wider text-sm mb-4 uppercase`}>
                {dept.subtitle}
              </div>
              <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors mb-6">
                {dept.desc}
              </p>

              <div className={`mt-auto px-6 py-2 rounded-full border border-${dept.color}-500/30 text-${dept.color}-400 font-bold tracking-widest text-sm group-hover:bg-${dept.color}-500/10 transition-colors`}>
                APPLY NOW
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
