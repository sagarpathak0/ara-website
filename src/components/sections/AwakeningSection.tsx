"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "../ThemeContext";

const ModelViewer = dynamic(() => import("../ModelViewer"), { ssr: false });

export default function AwakeningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isMuted } = useTheme();
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowModel(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="awakening" className="relative min-h-screen w-full overflow-hidden" ref={ref}>
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className={`font-display text-[35vw] uppercase tracking-tighter transition-colors duration-700 ${isMuted ? "text-[#FF4E4E]/10" : "text-white/5"}`}>WATCH</span>
      </div>

      {/* Protocol header */}
      <motion.div 
        className="absolute top-6 left-6 z-40"
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 text-[#FF4E4E]">
          <span className="material-symbols-outlined text-lg">fingerprint</span>
          <span className="font-mono text-sm uppercase tracking-widest">ARA Protocol V2.4</span>
        </div>
      </motion.div>

      {/* Status indicator */}
      <motion.div 
        className="absolute top-24 right-6 z-40 text-right"
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-[#FF4E4E] font-mono text-sm uppercase tracking-wider mb-1">System: Alert</div>
        <div className="font-mono text-xs text-gray-500">LAT: 28.6139° N<br />LON: 77.2090° E</div>
        <div className="text-[#FF4E4E]/70 font-mono text-xs mt-2 uppercase tracking-wider">Encrypted Connection</div>
      </motion.div>

      {/* Left badge */}
      <motion.div 
        className="absolute top-1/3 left-6 z-40"
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className={`px-4 py-3 rounded border-l-2 border-[#FF4E4E] ${isMuted ? "bg-white/80" : "bg-black/40 backdrop-blur"}`}>
          <div className="text-[#FF4E4E] font-mono text-xs uppercase tracking-wider">Target Acquired</div>
          <div className="text-[#FF4E4E] font-ui font-bold text-sm uppercase tracking-wider">Protection Active</div>
        </div>
      </motion.div>

      {/* FULL WIDTH 3D Model Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Glow */}
        <motion.div 
          className="absolute w-[80vw] h-[80vh] rounded-full pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={{
            background: isMuted 
              ? "radial-gradient(circle, rgba(200,200,200,0.5) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(255,78,78,0.2) 0%, transparent 70%)"
          }}
        />

        {/* FULL WIDTH Model Container */}
        <motion.div 
          className="relative z-10 w-full h-full"
          style={{ opacity: isMuted ? 0.7 : 0.9 }}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: isMuted ? 0.7 : 0.9 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Eye icon */}
          <motion.div 
            className="absolute top-16 left-1/2 -translate-x-1/2 z-30"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-16 h-10 border-2 border-[#FF4E4E]/50 rounded-full flex items-center justify-center bg-[#FF4E4E]/10">
              <span className="material-symbols-outlined text-[#FF4E4E] text-2xl">visibility</span>
            </div>
          </motion.div>

          {/* 3D Canvas - FULL SIZE */}
          {showModel && <ModelViewer isMuted={isMuted} />}

          {/* TEXT OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className={`font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85] ${isMuted ? "text-charcoal/70" : "text-white/80"}`}>
                BREAK THE
              </h3>
              <h3 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-[#FF4E4E] drop-shadow-[0_0_30px_rgba(255,78,78,0.5)]">
                SILENCE
              </h3>
            </motion.div>
          </div>

          {/* Scan line */}
          <motion.div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
            <motion.div 
              className="absolute w-full h-[2px] bg-[#FF4E4E]/40"
              animate={{ top: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </motion.div>
          
          {/* Corner frames - positioned at screen edges */}
          <div className="absolute top-4 left-4 w-10 h-10 sm:w-16 sm:h-16 border-t-2 border-l-2 border-[#FF4E4E]/50 pointer-events-none z-30" />
          <div className="absolute top-4 right-4 w-10 h-10 sm:w-16 sm:h-16 border-t-2 border-r-2 border-[#FF4E4E]/50 pointer-events-none z-30" />
          <div className="absolute bottom-16 sm:bottom-20 left-4 w-10 h-10 sm:w-16 sm:h-16 border-b-2 border-l-2 border-[#FF4E4E]/50 pointer-events-none z-30" />
          <div className="absolute bottom-16 sm:bottom-20 right-4 w-10 h-10 sm:w-16 sm:h-16 border-b-2 border-r-2 border-[#FF4E4E]/50 pointer-events-none z-30" />
        </motion.div>
      </div>

      {/* Bottom title */}
      <motion.div 
        className="absolute bottom-24 md:bottom-32 left-6 z-40"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="border-l-4 border-[#FF4E4E] pl-4">
          <h2 className={`font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tight leading-[0.9] ${isMuted ? "text-charcoal" : "text-white"}`}>
            THE<br />
            <span className="text-[#FF4E4E]">AWAKENING</span>
          </h2>
        </div>
      </motion.div>
    </section>
  );
}
