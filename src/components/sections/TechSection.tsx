"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../ThemeContext";

export default function TechSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isMuted } = useTheme();

  const features = [
    { icon: "sensors", title: "IoT Sensor Array", description: "Deploying smart sensors in high-risk zones that detect audio anomalies and distress patterns, instantly triggering the nearest help nodes." },
    { icon: "lock_person", title: "Zero-Knowledge Privacy", description: "Data is processed at the edge. Identities are cryptographically shielded. We verify safety without compromising personal freedom." },
    { icon: "share_location", title: "Community Response", description: "A decentralized mesh of volunteers and authorities receive real-time, verified alerts with precise geolocation data." },
  ];

  return (
    <section id="tech" className="relative min-h-screen overflow-hidden py-24" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className={`absolute inset-0 opacity-40 transition-opacity duration-700 ${isMuted ? "opacity-20" : ""}`} style={{
          background: isMuted ? "none" : "radial-gradient(at 47% 33%, hsl(262, 83%, 18%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218, 73%, 14%) 0, transparent 55%)"
        }} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border rounded-full opacity-20 animate-[spin_60s_linear_infinite] transition-colors duration-700 ${isMuted ? "border-gray-300" : "border-secondary/20"}`} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 text-[#FF4E4E] font-mono text-xs tracking-widest uppercase border border-[#FF4E4E]/30 bg-[#FF4E4E]/10 px-3 py-1 rounded mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF4E4E] animate-pulse" />
            System Online
          </div>

          <h2 className={`font-display font-bold text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-white"}`}>
            The Tech<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#FF4E4E]">Layer</span>
          </h2>

          <p className={`text-lg md:text-xl max-w-2xl border-l-2 border-[#FF4E4E] pl-6 py-2 mt-6 transition-colors duration-700 ${isMuted ? "text-gray-600" : "text-gray-400"}`}>
            A decentralized safety protocol embedded in the urban fabric. Utilizing IoT sensor arrays 
            and immutable blockchain verification to create a realtime shield for everyone, everywhere.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { label: "Active Nodes", value: "4,281" },
            { label: "Encrypted Blocks", value: "99.9%" },
            { label: "Response Time", value: "<2ms", highlight: true },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</div>
              <div className={`font-display font-bold text-2xl md:text-3xl transition-colors duration-700 ${stat.highlight ? "text-secondary" : (isMuted ? "text-charcoal" : "text-white")}`}>{stat.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech Panel */}
        <motion.div 
          className={`w-full max-w-xl mx-auto p-6 rounded-xl mb-16 relative overflow-hidden shadow-2xl transition-colors duration-700 ${isMuted ? "bg-white/80 border border-gray-200" : "glass-panel"}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="absolute left-0 w-full h-1 bg-[#FF4E4E]/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] z-20 animate-scan pointer-events-none" />

          <div className={`flex justify-between items-center mb-6 border-b pb-4 transition-colors duration-700 ${isMuted ? "border-gray-200" : "border-white/10"}`}>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">hub</span>
              <span className={`font-display font-bold uppercase tracking-wider text-sm transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-white"}`}>Mesh Network 4.0</span>
            </div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
            </div>
          </div>

          <div className={`relative h-48 rounded border mb-6 overflow-hidden transition-colors duration-700 ${isMuted ? "bg-gray-100 border-gray-200" : "bg-black/40 border-white/10"}`}>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
              backgroundSize: "10px 10px"
            }} />
            <motion.div 
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FF4E4E] rounded-full shadow-[0_0_10px_#EF4444]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.div 
              className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#6366f1]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            />
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className={`flex justify-between items-center p-2 rounded transition-colors duration-700 ${isMuted ? "bg-gray-100" : "bg-white/5"}`}>
              <span className="text-gray-500">VERIFICATION</span>
              <span className="text-green-500 font-bold">ENCRYPTED [AES-256]</span>
            </div>
            <div className={`flex justify-between items-center p-2 rounded transition-colors duration-700 ${isMuted ? "bg-gray-100" : "bg-white/5"}`}>
              <span className="text-gray-500">LATENCY</span>
              <span className="text-secondary font-bold">12ms (EDGE)</span>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`p-8 border transition-colors duration-700 group ${isMuted ? "border-gray-200 bg-white/50 hover:border-[#FF4E4E]/50" : "border-white/10 bg-background-dark/50 hover:border-primary/50"}`}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-[#FF4E4E]/10 flex items-center justify-center rounded mb-6 group-hover:bg-[#FF4E4E] group-hover:text-white transition-colors text-[#FF4E4E]">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className={`font-display font-bold text-xl mb-3 transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-white"}`}>{feature.title}</h3>
              <p className={`text-sm leading-relaxed transition-colors duration-700 ${isMuted ? "text-gray-600" : "text-gray-400"}`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className={`absolute bottom-0 w-full border-t backdrop-blur-sm py-3 overflow-hidden transition-colors duration-700 ${isMuted ? "bg-white/60 border-gray-200" : "bg-black/40 border-white/10"}`}>
        <div className="whitespace-nowrap animate-marquee flex gap-12 font-mono text-xs text-gray-500 uppercase tracking-widest">
          <span className="flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full" /> Blockchain Ledger Updated</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 bg-[#FF4E4E] rounded-full" /> New Node: Mumbai_Sector_7</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Smart Contract Verified</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full" /> IoT Grid Stable</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 bg-[#FF4E4E] rounded-full" /> SOS Protocol Ready</span>
          <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Privacy Shield Active</span>
        </div>
      </div>
    </section>
  );
}
