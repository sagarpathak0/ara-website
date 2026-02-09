"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "../ThemeContext";

const HeroModel = dynamic(() => import("../HeroModel"), { ssr: false });

export default function AllianceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isMuted } = useTheme();

  return (
    <section id="alliance" className="relative min-h-screen flex flex-col items-center justify-center w-full py-24" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />

      {/* Large background text */}
      <div className="absolute top-1/4 left-0 w-full text-center z-0 pointer-events-none select-none opacity-10">
        <h2 className="font-display text-[12vw] sm:text-[15vw] leading-[0.8] tracking-tighter text-[#FF4E4E]">
          JOIN THE<br />ALLIANCE
        </h2>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div 
          className="mb-8 opacity-80 text-[#FF4E4E]"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <svg fill="currentColor" height="64" viewBox="0 0 24 24" width="64">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" opacity="0.3" />
            <circle cx="12" cy="12" fill="none" r="9" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </motion.div>

        {/* 3D Model Container - extends behind the title */}
        <motion.div 
          className="relative w-full max-w-5xl h-[600px] md:h-[750px] flex items-center justify-center -mb-32 md:-mb-48"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Glow effect behind model */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-gradient-to-t from-[#FF4E4E]/20 to-transparent blur-3xl rounded-full z-0" />
          
          {/* 3D Model */}
          <div className="relative z-10 w-full h-full">
            <HeroModel isMuted={isMuted} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div 
          className="text-center relative z-20 mb-12 max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className={`font-display text-5xl md:text-7xl mb-4 uppercase tracking-tight transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-white"}`}>
            <span className="text-[#FF4E4E]">AntiRape</span>Alliance
          </h2>
          <p className={`font-body text-lg md:text-xl font-light leading-relaxed transition-colors duration-700 ${isMuted ? "text-gray-600" : "text-gray-400"}`}>
            A unique collective of safety guardians brought to life by blockchain. 
            Together, we build the shield.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="relative z-30 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { text: "Join Revolution", icon: "arrow_forward" },
            { text: "Build Network", primary: true },
            { text: "Empower Safety", icon: "shield" },
          ].map((btn) => (
            <motion.button
              key={btn.text}
              className={`group relative px-8 py-5 transition-all duration-300 overflow-hidden ${
                btn.primary 
                  ? "bg-[#FF4E4E] text-white border-2 border-[#FF4E4E] shadow-[0_0_20px_rgba(255,78,78,0.3)] hover:shadow-[0_0_30px_rgba(255,78,78,0.6)] hover:-translate-y-1" 
                  : `border-2 ${isMuted ? "bg-white border-gray-300 hover:border-[#FF4E4E]" : "bg-surface-dark border-white/20 hover:border-[#FF4E4E]"}`
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {!btn.primary && (
                <div className="absolute inset-0 w-0 bg-[#FF4E4E] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10" />
              )}
              <span className={`relative flex items-center ${btn.primary ? "justify-center" : "justify-between"} font-display ${btn.primary ? "text-2xl" : "text-xl"} uppercase tracking-wider transition-colors duration-700 ${
                btn.primary ? "text-white" : (isMuted ? "text-charcoal group-hover:text-[#FF4E4E]" : "text-white group-hover:text-[#FF4E4E]")
              }`}>
                {btn.text}
                {btn.icon && (
                  <span className="material-symbols-outlined transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                    {btn.icon}
                  </span>
                )}
              </span>
              {!btn.primary && <div className={`absolute bottom-0 left-0 h-1 w-full group-hover:bg-[#FF4E4E] transition-colors duration-700 ${isMuted ? "bg-gray-200" : "bg-white/10"}`} />}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
