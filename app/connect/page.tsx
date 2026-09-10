export default function Connect() {
  const socials = [
    {
      name: "Discord",
      desc: "Join our official community server to start your journey.",
      url: "https://discord.gg/thamizhagam",
      color: "from-[#5865F2]/20 to-[#5865F2]/5",
      border: "border-[#5865F2]/30",
      hoverBorder: "hover:border-[#5865F2]",
      textColor: "text-[#5865F2]",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      desc: "Watch our epic trailers, tutorials, and gameplay highlights.",
      url: "https://www.youtube.com/@TMRP-REBORN",
      color: "from-[#FF0000]/20 to-[#FF0000]/5",
      border: "border-[#FF0000]/30",
      hoverBorder: "hover:border-[#FF0000]",
      textColor: "text-[#FF0000]",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen bg-black pt-32 px-4 pb-24">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0a] to-black z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-[var(--font-cinzel)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 tracking-widest mb-6">
            CONNECT WITH US
          </h1>
          <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          <p className="mt-8 text-white/60 max-w-2xl mx-auto text-lg">
            Join the community, stay updated, and become part of the story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-b ${social.color} backdrop-blur-xl border ${social.border} ${social.hoverBorder} rounded-3xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden`}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

              <div className={`mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2 ${social.textColor}`}>
                {social.icon}
              </div>

              <h2 className="text-3xl font-bold font-[var(--font-cinzel)] text-white mb-4 tracking-widest group-hover:text-white transition-colors">
                {social.name}
              </h2>

              <p className="text-white/60 leading-relaxed font-light group-hover:text-white/90 transition-colors">
                {social.desc}
              </p>

              {/* Decorative line */}
              <div className={`mt-8 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-700 ease-out ${social.textColor}`}></div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
