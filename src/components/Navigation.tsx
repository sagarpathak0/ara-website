"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

const navItems = [
  { href: "#home", icon: "home", label: "Home" },
  { href: "#manifesto", icon: "description", label: "Manifesto" },
  { href: "#network", icon: "share_location", label: "Network" },
  { href: "#tech", icon: "memory", label: "Tech" },
  { href: "#alliance", icon: "groups", label: "Alliance" },
  { href: "#awakening", icon: "visibility", label: "Awakening" },
  { href: "#join", icon: "grid_view", label: "Join" },
];

export default function Navigation() {
  const { isMuted, toggleMute } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
    >
      <div className="glass-panel px-3 py-2 rounded-full theme-glow flex items-center gap-1">
        {/* Left nav items */}
        <Link
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative theme-text-secondary hover:theme-text hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-xl">mail</span>
        </Link>
        
        <Link
          href="#manifesto"
          onClick={(e) => handleClick(e, "#manifesto")}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative theme-text-secondary hover:theme-text hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-xl">photo_camera</span>
        </Link>

        {/* Center Mic Toggle - THE MAIN TOGGLE */}
        <motion.button
          onClick={toggleMute}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 mx-2 relative ${
            isMuted 
              ? "bg-[#FF4E4E] text-white shadow-[0_0_20px_rgba(255,78,78,0.5)]" 
              : "bg-[#FF4E4E] text-white shadow-[0_0_30px_rgba(255,78,78,0.8)] ring-4 ring-[#FF4E4E]/30"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMuted ? "mic_off" : "mic"}
          </span>
          {/* Pulse ring when unmuted */}
          {!isMuted && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#FF4E4E]"
              animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          )}
        </motion.button>

        {/* Right nav items */}
        <Link
          href="#tech"
          onClick={(e) => handleClick(e, "#tech")}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative theme-text-secondary hover:theme-text hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-xl">tag</span>
        </Link>
        
        <Link
          href="#join"
          onClick={(e) => handleClick(e, "#join")}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative theme-text-secondary hover:theme-text hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-xl">play_arrow</span>
        </Link>
      </div>
    </motion.nav>
  );
}
