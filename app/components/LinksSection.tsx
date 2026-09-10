export default function LinksSection() {
  const links = [
    { title: "Main Discord", url: "https://discord.gg/VCDjbKBbCm", icon: "fa-brands fa-discord", category: "Social" },
    { title: "YouTube", url: "https://www.youtube.com/@TMRP-REBORN", icon: "fa-brands fa-youtube", category: "Social" },
    { title: "Server Assets", url: "https://discord.gg/kESmJSKr8r", icon: "fa-solid fa-box", category: "Servers" },
    { title: "Announcements", url: "https://discord.gg/dh79BtBZ55", icon: "fa-solid fa-bullhorn", category: "Servers" },
    { title: "City Alerts", url: "https://discord.gg/XfTw6VUmNE", icon: "fa-solid fa-triangle-exclamation", category: "Servers" },
    { title: "Patch Updates", url: "https://discord.gg/cFyXATxHCe", icon: "fa-solid fa-wrench", category: "Servers" },
    { title: "Registered Communities", url: "https://discord.gg/4SMDdqWH8f", icon: "fa-solid fa-users", category: "Servers" },
    { title: "Connect to City", url: "https://discord.gg/37vBJtKzdu", icon: "fa-solid fa-play", category: "Action" },
    { title: "Apply for Visa", url: "https://discord.gg/YDRzpXFQGr", icon: "fa-solid fa-passport", category: "Action" },
    { title: "Apply for Job", url: "https://discord.gg/Fg9ndHCtkM", icon: "fa-solid fa-briefcase", category: "Action" }
  ];

  return (
    <div id="links" className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-[var(--font-cinzel)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 mb-4 tracking-wider drop-shadow-[0_0_10px_rgba(245,175,40,0.3)]">
          CONNECT WITH US
        </h2>
        <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-6"></div>
        <p className="text-amber-100/60 font-sans text-sm sm:text-base max-w-2xl mx-auto">
          Join our massive community of roleplayers. Apply for visas, jobs, and stay up to date with the latest announcements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center p-6 bg-black/50 backdrop-blur-md border border-amber-500/20 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,175,40,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300 mr-5">
              <i className={`${link.icon} text-xl`}></i>
            </div>
            
            <div>
              <div className="text-xs text-amber-500/60 uppercase tracking-widest font-bold mb-1">
                {link.category}
              </div>
              <h3 className="text-lg font-[var(--font-cinzel)] font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                {link.title}
              </h3>
            </div>
            
            <div className="ml-auto text-amber-500/30 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
