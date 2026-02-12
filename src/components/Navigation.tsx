"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

/* ===================== ANIME CHARACTER (PNG) ===================== */
function AnimeCharacter({ isMuted }: { isMuted: boolean }) {
  const [showHappy, setShowHappy] = useState(false);
  const [prevMuted, setPrevMuted] = useState(true);

  // Detect unmute transition
  useEffect(() => {
    if (prevMuted && !isMuted) {
      setShowHappy(true);
      const timer = setTimeout(() => setShowHappy(false), 2800);
      return () => clearTimeout(timer);
    }
    setPrevMuted(isMuted);
  }, [isMuted, prevMuted]);

  return (
    <AnimatePresence mode="wait">
      {isMuted ? (
        /* ========== MUTED STATE ========== */
        <motion.div
          key="muted"
          initial={{ y: 80, opacity: 0, scale: 0.4 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -15, opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          {/* Speech bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute -top-34 left-1/2 -translate-x-1/2 whitespace-nowrap z-50"
          >
            <motion.div 
              className="bg-white px-4 py-2 rounded-xl text-sm font-semibold text-[#FF4E4E] shadow-lg border border-gray-100"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Unmute me! 🔇
            </motion.div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
          </motion.div>

          {/* Taped Character Image */}
          <motion.div
            className="relative"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image_taped.png"
              alt="Muted character"
              className="drop-shadow-lg scale-[7] origin-bottom"
            />
          </motion.div>

          {/* Arrow pointing down */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <svg width="12" height="8" viewBox="0 0 12 8">
              <path d="M6 8L0 0H12L6 8Z" fill="#FF4E4E" />
            </svg>
          </motion.div>
        </motion.div>
      ) : showHappy ? (
        /* ========== HAPPY STATE ========== */
        <motion.div
          key="happy"
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -30, opacity: 0, scale: 1.1, transition: { duration: 0.4 } }}
          transition={{ type: "spring", stiffness: 280, damping: 14 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          {/* Good Job! bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="absolute -top-34 left-1/2 -translate-x-1/2 whitespace-nowrap z-50"
          >
            <div className="bg-white px-4 py-2 rounded-xl text-sm font-semibold text-[#FF4E4E] shadow-lg border border-gray-100">
              Good Job! 🎉
            </div>
          </motion.div>

          {/* Happy Character Image */}
          <motion.div
            className="relative"
            animate={{ rotate: [-2, 2, -2], y: [0, -5, 0] }}
            transition={{ duration: 0.35, repeat: 6 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image_happy.png"
              alt="Happy character"
              className="drop-shadow-lg scale-[7] origin-bottom"
            />

            {/* Music notes */}
            <motion.div
              className="absolute -right-3 top-3 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], y: -12, x: 4 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              🎵
            </motion.div>
            <motion.div
              className="absolute -left-2 top-5 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0], y: -10, x: -3 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              🎶
            </motion.div>
          </motion.div>

          {/* Hearts */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute text-sm"
              style={{ left: `${15 + i * 22}%`, top: "35%" }}
              initial={{ scale: 0, y: 0 }}
              animate={{ scale: [0, 1.1, 1], y: -40, opacity: [1, 1, 0] }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
            >
              ❤️
            </motion.div>
          ))}

          {/* Sparkles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`s-${i}`}
              className="absolute text-xs"
              style={{ left: `${10 + i * 25}%`, top: `${25 + (i % 2) * 20}%` }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 1.2, 0], rotate: 180 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              ✨
            </motion.div>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

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
          {/* Animated Character - shows whenever muted */}
          <AnimeCharacter isMuted={isMuted} />

          <motion.button
            onClick={toggleMute}
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
