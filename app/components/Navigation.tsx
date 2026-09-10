"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show navigation on the launch/countdown page
  if (pathname === "/") return null;

  const links = [
    { href: "/home", label: "HOME" },
    { href: "/departments", label: "DEPARTMENTS" },
    { href: "/rules", label: "RULES" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/connect", label: "CONNECT" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-[0_4px_30px_rgba(245,175,40,0.1)]"
          : "bg-gradient-to-b from-black/80 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-3 group">
          <img
            src="/thamizhagam-logo.png"
            alt="TMRP Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(245,175,40,0.5)] transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-[var(--font-cinzel)] font-bold text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 hidden sm:block transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(245,175,40,0.8)]">
            THAMIZHAGAM
          </span>
        </Link>

        {/* Links */}
        <div className="flex gap-4 sm:gap-8 overflow-x-auto custom-scrollbar pb-2 sm:pb-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 relative group whitespace-nowrap ${
                pathname === link.href ? "text-amber-400" : "text-white/60 hover:text-amber-200"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-amber-500 transition-all duration-300 ${
                  pathname === link.href ? "w-full shadow-[0_0_10px_rgba(245,175,40,0.8)]" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
