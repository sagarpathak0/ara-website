"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

export default function Navigation() {
  const { isMuted, toggleMute, setTheme, enableAudioFromGesture } = useTheme();
  const hasScrolled = useRef(false);

  // Auto-switch to dark mode on first scroll and start audio
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled.current && isMuted) {
        hasScrolled.current = true;
        setTheme(false);
        enableAudioFromGesture();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAudioFromGesture, isMuted, setTheme]);

  const handleMicClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isMuted) {
      enableAudioFromGesture();
      return;
    }
    toggleMute();
  };

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
          <span className="material-symbols-outlined text-xl">home</span>
        </Link>
        
        <Link
          href="#manifesto"
          onClick={(e) => handleClick(e, "#manifesto")}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative theme-text-secondary hover:theme-text hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-xl">description</span>
        </Link>

        {/* Center Mic Toggle - THE MAIN TOGGLE */}
        <div className="relative mx-2 flex items-center justify-center">
          <motion.button
            onClick={handleMicClick}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 relative overflow-hidden ${
              isMuted
                ? "bg-[#FF4E4E] text-white shadow-[0_0_20px_rgba(255,78,78,0.5)]"
                : "bg-[#FF4E4E] text-white shadow-[0_0_30px_rgba(255,78,78,0.8)] ring-4 ring-[#FF4E4E]/30"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            <motion.span 
              className="material-symbols-outlined text-2xl"
              animate={isMuted ? {} : { rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isMuted ? "mic_off" : "mic"}
            </motion.span>
            
            {/* Pulse ring when unmuted */}
            {!isMuted && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#FF4E4E]"
                animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            )}

            {/* Sound waves animation when unmuted */}
            <AnimatePresence>
              {!isMuted && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`wave-${i}`}
                      className="absolute inset-0 rounded-full border border-white/40"
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 1.8 + i * 0.3, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Right nav items */}
        <Link
          href="#tech"
          onClick={(e) => handleClick(e, "#tech")}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative theme-text-secondary hover:theme-text hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-xl">memory</span>
        </Link>
        
        <Link
          href="#join"
          onClick={(e) => handleClick(e, "#join")}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group relative theme-text-secondary hover:theme-text hover:bg-white/10"
        >
          <span className="material-symbols-outlined text-xl">person_add</span>
        </Link>
      </div>
    </motion.nav>
  );
}
