"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../ThemeContext";

export default function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isMuted } = useTheme();

  return (
    <section id="manifesto" className="relative min-h-screen w-full overflow-hidden py-20" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className={`absolute -right-20 top-0 w-2/3 h-full transform skew-x-12 opacity-50 z-0 transition-colors duration-700 ${isMuted ? "bg-gray-300" : "bg-[#1f1f1f]"}`} />
        <div className={`absolute bottom-0 left-0 text-[20vw] leading-[0.7] font-display pointer-events-none select-none z-0 whitespace-nowrap opacity-50 transition-colors duration-700 ${isMuted ? "text-[#FF4E4E]/10" : "text-white/5"}`}>
          MANIFESTO
        </div>
      </div>

      <div className="relative z-10 w-full min-h-screen grid grid-cols-12 gap-4 p-4 md:p-8">
        {/* Left Content */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center h-full relative pl-4 md:pl-12">
          <motion.div 
            className="space-y-2 relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className={`absolute -left-8 top-0 h-full w-[1px] bg-gradient-to-b from-transparent to-transparent hidden md:block transition-colors duration-700 ${isMuted ? "via-[#FF4E4E]" : "via-primary"}`} />

            <h2 className={`font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.85] z-20 transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-off-white"}`}>
              WE ARE<br />
              THE <span className="text-[#FF4E4E]">SHIELD</span>
            </h2>

            <div className="mt-8 md:mt-12 space-y-6 max-w-md">
              {[
                { title: "Protocol 01", text: "Safety is not a privilege. It is an immutable block in the chain of human rights. We decentralize protection to centralize power." },
                { title: "Protocol 02", text: "Silence is the enemy. Our network amplifies the whisper until it becomes a roar. Every signal is verified, every voice is permanent." },
                { title: "Protocol 03", text: "Trust is earned through transparency. Every node, every action, every alert is recorded on an immutable ledger visible to all." },
              ].map((protocol, index) => (
                <motion.div 
                  key={protocol.title}
                  className={`group p-4 border-l-2 cursor-default transition-all duration-300 hover:skew-x-[-10deg] hover:translate-x-[5px] hover:bg-[#FF4E4E] hover:text-white ${isMuted ? "border-[#FF4E4E]/50" : "border-white/20"}`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                >
                  <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-[#FF4E4E] group-hover:text-white mb-2 transition-colors duration-300">
                    {protocol.title}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed transition-colors duration-700 ${isMuted ? "text-gray-600" : "text-gray-300"}`}>
                    {protocol.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex flex-wrap items-center gap-3 md:gap-4 mt-6 md:mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className={`px-4 md:px-8 py-2 md:py-3 font-ui text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#FF4E4E] hover:text-white transition-all duration-300 ${isMuted ? "bg-charcoal text-white" : "bg-white text-charcoal"}`}>
                Sign The Manifesto
              </button>
              <div className="h-[1px] w-12 md:w-24 bg-[#FF4E4E]/50 hidden sm:block" />
              <span className="font-mono text-[10px] md:text-xs text-[#FF4E4E]">HASH: #8A2F99</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="col-span-12 md:col-span-7 relative h-full flex items-center justify-center md:justify-end overflow-hidden">
          <motion.div 
            className={`absolute top-10 right-10 z-30 flex flex-col items-end gap-2 font-mono text-[10px] ${isMuted ? "text-[#FF4E4E]" : "text-primary/80"}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span>SYSTEM STATUS: ACTIVE</span>
            <span>NODES: 14,092</span>
            <span className="animate-pulse">● LIVE MONITORING</span>
          </motion.div>

          <motion.div 
            className="relative w-full h-[60vh] md:h-[85vh] md:w-[90%] overflow-hidden group"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[#FF4E4E]/10 mix-blend-multiply z-10 pointer-events-none" />
            <div className="absolute inset-0 vignette z-20 pointer-events-none" />
            <img
              alt="Charcoal sketch of women in solidarity"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5E_y3JKbAnCYCXHmKqf7IhCmhJ4pj04rfaQkHiRWm83lU4F9SqzrUA7XtDS6QbFzUaBnhPzwxGJ4004viKP2pGZJRcTmIE4xsXiKy5qG1ZSFq3rGSXM790sa5mvGDmSxaI4WCpaCbGQl-OJjiPg4pQ961XJC_bOj54WSOPDCc-xGkiVWXW-6qLIzP_J5-mKQBaDbTrBmwVHFvX5m9wCx8DicYuJAhCX80YYAE5zW6lLBv5kZLRLkBc2bzqnorMu83bEhs63K_kQ"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 100%)",
              }}
            />
            <div className="absolute bottom-8 right-8 z-30 text-right">
              <p className={`font-display text-4xl md:text-6xl opacity-90 transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-white mix-blend-overlay"}`}>
                SOLIDARITY
              </p>
              <p className="font-mono text-xs text-[#FF4E4E] tracking-[0.5em] uppercase mt-1">
                Is The Algorithm
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
