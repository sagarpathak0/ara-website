"use client";

import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function HeroSection() {
  const { isMuted } = useTheme();

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden transition-colors duration-700">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Large SILENCE text - visible in muted mode */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none z-0">
          <h1 className={`text-[16vw] md:text-[20vw] leading-[0.8] font-display uppercase tracking-tighter whitespace-nowrap transition-all duration-700 ${
            isMuted 
              ? "text-[#FF4E4E]/20 blur-none" 
              : "text-white/5 blur-sm"
          }`}>
            {isMuted ? "SILENCE" : "The Silence"}
          </h1>
        </div>
        
        {/* Background texture - different per theme */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            isMuted ? "opacity-5" : "opacity-10 mix-blend-overlay grayscale contrast-150"
          }`}
          style={{ 
            backgroundImage: isMuted 
              ? "url('https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2500&auto=format&fit=crop')"
              : "url('https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2500&auto=format&fit=crop')",
            filter: isMuted ? 'grayscale(1) contrast(0.8)' : 'none'
          }}
        />
        <div className="absolute inset-0 vignette pointer-events-none" />
      </div>

      {/* Header */}
      <motion.nav 
        className="relative z-40 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center transition-colors duration-700"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className={`material-icons text-3xl group-hover:rotate-180 transition-all duration-500 ${isMuted ? "text-[#FF4E4E]" : "text-primary"}`}>
            fingerprint
          </span>
          <span className="font-display text-xl tracking-widest uppercase hidden md:block theme-text">
            AntiRape<span className={isMuted ? "text-[#FF4E4E]" : "text-primary"}>Alliance</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-12 font-ui text-sm tracking-widest uppercase theme-text-secondary">
          <a className="hover:text-[#FF4E4E] transition-colors" href="#manifesto">Manifesto</a>
          <a className="hover:text-[#FF4E4E] transition-colors" href="#tech">The Tech</a>
          <a className="hover:text-[#FF4E4E] transition-colors" href="#join">Join Us</a>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 mt-[-4rem]">
        {/* Side lines */}
        <div className={`absolute left-6 md:left-16 top-1/4 h-48 w-[1px] bg-gradient-to-b from-transparent to-transparent hidden md:block transition-colors duration-700 ${isMuted ? "via-[#FF4E4E]/30" : "via-white/20"}`} />
        <div className={`absolute right-6 md:right-16 bottom-1/4 h-48 w-[1px] bg-gradient-to-b from-transparent to-transparent hidden md:block transition-colors duration-700 ${isMuted ? "via-[#FF4E4E]/30" : "via-white/20"}`} />

        <div className="relative w-full max-w-5xl h-[55vh] md:h-[65vh] flex items-end justify-center">
          {/* Image container with frame */}
          <motion.div
            className={`relative overflow-hidden transition-all duration-700 ${
              isMuted 
                ? "shadow-[0_0_60px_rgba(0,0,0,0.3)]" 
                : "shadow-none"
            }`}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              alt="Artistic representation of strength in silence"
              className={`h-[50vh] md:h-[60vh] object-cover object-top z-20 transition-all duration-700 ${
                isMuted 
                  ? "filter grayscale-0 brightness-100 contrast-110 opacity-80 mix-blend-multiply" 
                  : "filter grayscale brightness-[0.85] contrast-[1.1] mask-gradient-bottom drop-shadow-2xl"
              }`}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPT607EY5w47fj6RiBymI1lnFbtTSYmXBXbfzj719KryLD4t4XCZk3o2u13gr5Ji_z1GcRxqK9ENxi_1cZ6y4tMfehrf5XNdcoFLEF93WQJLlRRMTfVuCBWUZSrFZGMsLMjIXm4zQHiWRjg8cp2uRBHpwx0vgFcmdOQhyhEoFv3wLpgw_ceSNzi2xv0tx5aqpsWx5hmqeVcULNzeEf_CGtEiDwSgWD-e_d7Y7nZsu2IChJlJbmOUn5dkvBYvj3VlWH9Kk6AADCnQ"
            />
            
            {/* Dark gradient overlay on image - for muted theme */}
            {isMuted && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/20 pointer-events-none z-10" />
            )}
            
            {/* Overlay text on image - for muted theme */}
            {isMuted && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center">
                  <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.85] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    Fear Should<br />
                    <span className="italic font-body font-bold text-[#FF4E4E] drop-shadow-[0_0_20px_rgba(255,78,78,0.5)]">Never</span> Define<br />
                    Freedom
                  </h2>
                </div>
              </div>
            )}
          </motion.div>

          {/* Decorative elements */}
          <motion.div 
            className={`absolute top-1/4 left-10 md:left-24 w-12 h-12 border rounded-full flex items-center justify-center z-10 transition-colors duration-700 ${isMuted ? "border-[#FF4E4E]/30" : "border-white/20"}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className={`material-icons text-xs transition-colors duration-700 ${isMuted ? "text-[#FF4E4E]/50" : "text-white/50"}`}>hub</span>
          </motion.div>
          
          <div className={`absolute bottom-1/3 right-10 md:right-24 w-32 h-32 border border-dashed rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite] z-10 transition-colors duration-700 ${isMuted ? "border-[#FF4E4E]/20" : "border-white/10"}`}>
            <div className={`w-full h-[1px] absolute top-1/2 transition-colors duration-700 ${isMuted ? "bg-[#FF4E4E]/20" : "bg-white/10"}`} />
            <div className={`h-full w-[1px] absolute left-1/2 transition-colors duration-700 ${isMuted ? "bg-[#FF4E4E]/20" : "bg-white/10"}`} />
          </div>

          {/* Main heading overlay - for unmuted theme */}
          {!isMuted && (
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-30 mix-blend-difference"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="font-display text-6xl md:text-9xl uppercase tracking-tighter text-white leading-[0.85]">
                Fear Should<br />
                <span className="italic font-body font-bold text-outline">Never</span> Define<br />
                Freedom
              </h2>
            </motion.div>
          )}
        </div>

        <motion.div 
          className="mt-4 text-center max-w-lg mx-auto relative z-30"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className={`text-xs md:text-sm font-ui tracking-[0.2em] uppercase font-medium border-l pl-4 text-left ml-auto mr-auto md:ml-0 transition-colors duration-700 ${
            isMuted 
              ? "text-gray-500 border-[#FF4E4E]/50" 
              : "text-white/60 border-white/30"
          }`}>
            Reclaiming safety through decentralization.<br />
            {isMuted ? "The revolution is silent, watchful, and immutable." : "Silent. Watchful. Immutable."}
          </p>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-40 w-full pb-24 pt-4 px-6 flex flex-col md:flex-row justify-between items-end md:items-center">
        <div className="hidden md:flex flex-col gap-2 items-start">
          <span className={`text-[10px] uppercase tracking-widest rotate-90 origin-left translate-x-4 mb-8 transition-colors duration-700 ${isMuted ? "text-gray-400" : "text-white/40"}`}>
            Scroll
          </span>
          <div className={`w-[1px] h-12 overflow-hidden relative ml-1 transition-colors duration-700 ${isMuted ? "bg-gray-300" : "bg-white/20"}`}>
            <div className={`absolute top-0 left-0 w-full h-1/2 animate-dropdown transition-colors duration-700 ${isMuted ? "bg-[#FF4E4E]" : "bg-white"}`} />
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-700 ${isMuted ? "bg-green-500" : "bg-white"}`} />
            <span className={`text-[10px] font-ui tracking-wider uppercase transition-colors duration-700 ${isMuted ? "text-gray-500" : "text-white/50"}`}>
              System Online
            </span>
          </div>
          <div className={`text-[9px] font-mono transition-colors duration-700 ${isMuted ? "text-gray-400" : "text-white/30"}`}>
            BLK: 89342 // NODE: MUMBAI
          </div>
        </div>
      </footer>

      {/* Scan line - only visible when unmuted */}
      {!isMuted && (
        <div className="fixed top-0 left-0 w-full h-[1px] bg-white/10 z-50 animate-scan pointer-events-none" />
      )}
      
      {/* Red scan lines for muted theme */}
      {isMuted && (
        <>
          <div className="fixed top-1/4 left-0 w-full h-[1px] bg-[#FF4E4E]/20 z-40 pointer-events-none" />
          <div className="fixed top-3/4 left-0 w-full h-[1px] bg-[#FF4E4E]/20 z-40 pointer-events-none" />
        </>
      )}
    </section>
  );
}
