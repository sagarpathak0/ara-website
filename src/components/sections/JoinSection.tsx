"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTheme } from "../ThemeContext";

export default function JoinSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isMuted } = useTheme();
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!alias.trim() || !email.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: alias, email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setAlias("");
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.error });
      }
    } catch {
      setStatus({ type: "error", message: "Connection failed. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="join" className="relative min-h-screen w-full overflow-hidden py-24" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] opacity-10 pointer-events-none">
          <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
            <path d="M100,10 L190,50 L190,150 L100,190 L10,150 L10,50 Z" fill="none" stroke="#990000" strokeWidth="0.5" />
            <circle cx="100" cy="100" fill="none" r="60" stroke="#990000" strokeDasharray="4 4" strokeWidth="0.2" />
          </svg>
        </div>
        <div className="absolute inset-0 vignette pointer-events-none" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-0">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Left side - Title */}
          <motion.div 
            className="flex-1 text-center md:text-left space-y-2 relative"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className={`absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#FF4E4E]/50 to-transparent hidden md:block`} />

            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.85] tracking-tight">
              <span className={`block bg-clip-text transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500"}`}>
                Join The
              </span>
              <span className="block text-[#FF4E4E] drop-shadow-[0_0_15px_rgba(153,0,0,0.6)]">
                Resistance
              </span>
            </h2>

            <p className={`font-ui text-lg mt-6 max-w-md tracking-wide transition-colors duration-700 ${isMuted ? "text-gray-600" : "text-gray-500"}`}>
              The grid is our shield. Your device is a beacon. Connect to the decentralized safety network.
            </p>

            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <div className="px-3 py-1 border border-[#FF4E4E]/30 rounded text-[10px] font-mono text-[#FF4E4E] uppercase tracking-widest bg-[#FF4E4E]/5">
                Anon-V2 Protocol
              </div>
              <div className={`px-3 py-1 border rounded text-[10px] font-mono uppercase tracking-widest transition-colors duration-700 ${isMuted ? "border-gray-300 text-gray-500 bg-gray-100" : "border-gray-500/50 text-gray-500 bg-gray-500/10"}`}>
                E2E Encrypted
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div 
            className="flex-1 w-full max-w-md"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={`rounded-2xl p-8 relative overflow-hidden shadow-2xl transition-colors duration-700 ${isMuted ? "bg-white border border-gray-200" : "glass-panel"}`}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FF4E4E] rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF4E4E] rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF4E4E] rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF4E4E] rounded-br-lg" />

              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                {/* Status Message */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg border ${
                      status.type === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        {status.type === "success" ? "check_circle" : "error"}
                      </span>
                      <span className="text-sm font-mono">{status.message}</span>
                    </div>
                  </motion.div>
                )}

                <motion.div 
                  className="space-y-3 group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <label className="flex items-center gap-2 text-xs font-ui font-bold tracking-[0.15em] text-gray-500 uppercase group-focus-within:text-[#FF4E4E] transition-colors">
                    <span className="material-symbols-outlined text-sm">fingerprint</span>
                    Identify Your Node
                  </label>
                  <input
                    className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 font-mono focus:outline-none focus:border-[#FF4E4E] focus:shadow-[0_0_20px_rgba(153,0,0,0.4)] transition-all duration-300 ${isMuted ? "bg-gray-50 border-gray-200 text-charcoal" : "bg-black/40 border-gray-700 text-white"}`}
                    placeholder="ENTER ALIAS"
                    type="text"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    disabled={isLoading}
                  />
                </motion.div>

                <motion.div 
                  className="space-y-3 group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <label className="flex items-center gap-2 text-xs font-ui font-bold tracking-[0.15em] text-gray-500 uppercase group-focus-within:text-[#FF4E4E] transition-colors">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    Establish Trust
                  </label>
                  <input
                    className={`w-full border rounded-lg px-4 py-3 placeholder-gray-400 font-mono focus:outline-none focus:border-[#FF4E4E] focus:shadow-[0_0_20px_rgba(153,0,0,0.4)] transition-all duration-300 ${isMuted ? "bg-gray-50 border-gray-200 text-charcoal" : "bg-black/40 border-gray-700 text-white"}`}
                    placeholder="SECURE COMM LINK (EMAIL)"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </motion.div>

                <motion.button 
                  type="submit"
                  disabled={isLoading}
                  className={`w-full mt-6 group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#FF4E4E] to-red-900 p-[1px] shadow-[0_0_15px_rgba(153,0,0,0.5)] transition-transform ${isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02] active:scale-[0.98]"}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  <div className={`relative h-full w-full overflow-hidden rounded-lg px-6 py-4 transition-colors group-hover:bg-opacity-80 ${isMuted ? "bg-white" : "bg-black"}`}>
                    <span className="pointer-events-none absolute inset-0 translate-y-full bg-[#FF4E4E] transition-transform duration-300 ease-out group-hover:translate-y-0" />
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {isLoading ? (
                        <span className={`font-ui font-bold tracking-widest uppercase transition-colors duration-700 ${isMuted ? "text-[#FF4E4E] group-hover:text-black" : "text-white"}`}>
                          Transmitting...
                        </span>
                      ) : (
                        <>
                          <span className={`font-ui font-bold tracking-widest uppercase transition-colors duration-700 ${isMuted ? "text-[#FF4E4E] group-hover:text-black" : "text-white"}`}>
                            Initiate Uplink
                          </span>
                          <span className={`material-symbols-outlined animate-pulse transition-colors duration-700 ${isMuted ? "text-[#FF4E4E] group-hover:text-black" : "text-white"}`}>arrow_forward</span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.button>

                <div className="text-center mt-4">
                  <span className="text-[10px] font-mono text-gray-500">
                    Newsletter signup • No password required
                  </span>
                </div>
              </form>

              {/* Glow effects */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF4E4E]/10 rounded-full blur-[50px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-500/10 rounded-full blur-[50px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
