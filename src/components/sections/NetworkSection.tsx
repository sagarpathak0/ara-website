"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";

const nodes = [
  { id: "delhi", name: "Delhi", state: "NCR", top: "18%", left: "29%", online: "2,842", trust: "99.2%", latency: "12ms" },
  { id: "mumbai", name: "Mumbai", state: "MH", top: "38%", left: "18%", online: "1,240", trust: "98.0%", latency: "18ms" },
  { id: "bangalore", name: "Bangalore", state: "KA", top: "52%", left: "28%", online: "3,105", trust: "99.8%", latency: "08ms" },
  { id: "kolkata", name: "Kolkata", state: "WB", top: "28%", left: "42%", online: "892", trust: "94.5%", latency: "22ms", dimmed: true },
  { id: "hyderabad", name: "Hyderabad", state: "TS", top: "42%", left: "30%", online: "1,560", trust: "98.5%", latency: "15ms", dimmed: true },
];

export default function NetworkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isMuted } = useTheme();
  const [rotation, setRotation] = useState({ x: 45, z: -15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setRotation({ x: 45 + y * 5, z: -15 + x * 5 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="network" className="relative min-h-screen w-full overflow-hidden py-20" ref={ref}>
      {/* Background layers */}
      <div className={`absolute inset-0 transition-colors duration-700 ${isMuted ? "bg-[radial-gradient(circle_at_center,rgba(255,78,78,0.05)_0%,transparent_70%)]" : "bg-[radial-gradient(circle_at_center,rgba(255,78,78,0.08)_0%,transparent_70%)]"}`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      {/* Header */}
      <motion.header 
        className="absolute top-8 left-0 w-full px-8 flex justify-between items-start z-40 pointer-events-none"
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FF4E4E] text-3xl animate-pulse">hub</span>
            <h2 className={`font-display text-2xl tracking-widest uppercase transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-white"}`}>
              Network<span className="text-[#FF4E4E]">Map</span>
            </h2>
          </div>
          <div className={`text-xs font-mono tracking-widest pl-10 transition-colors duration-700 ${isMuted ? "text-gray-500" : "text-gray-500"}`}>
            LIVE FEED // DECENTRALIZED PROTOCOL
          </div>
        </div>
      </motion.header>

      {/* 3D Map */}
      <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden z-10">
        <motion.div
          className="relative w-[700px] h-[700px] md:w-[900px] md:h-[900px]"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg) scale(0.85)`,
            transition: "transform 0.5s ease-out",
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 0.85 } : {}}
          transition={{ duration: 1 }}
        >
          {/* India shape */}
          <svg className={`absolute top-0 left-0 w-full h-full opacity-20 fill-current pointer-events-none transition-colors duration-700 ${isMuted ? "text-gray-400" : "text-gray-600"}`} viewBox="0 0 612 792">
            <path d="M305,50 C320,60 350,80 360,100 C370,120 400,130 410,150 C420,170 450,180 440,200 C430,220 480,240 470,260 C460,280 440,290 430,310 C420,330 410,350 400,380 C390,410 380,450 360,500 C340,550 320,600 300,650 C280,600 260,550 240,500 C220,450 200,400 180,350 C160,300 120,280 100,250 C80,220 120,200 140,180 C160,160 180,140 200,120 C220,100 250,80 270,60 C290,40 300,45 305,50 Z" />
          </svg>

          {/* Node points */}
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute group"
              style={{ top: node.top, left: node.left }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            >
              <div className="absolute -inset-4 bg-[#FF4E4E]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`w-2 h-2 rounded-full bg-[#FF4E4E] cursor-pointer transition-all duration-300 shadow-[0_0_15px_#FF4E4E,0_0_30px_#FF4E4E] hover:scale-150 hover:bg-white ${node.dimmed ? "opacity-70 scale-75" : ""}`} />
              {/* Tooltip */}
              <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded w-48 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 ${isMuted ? "bg-white/90 border border-gray-200" : "glass-panel"}`}>
                <h3 className={`font-display text-lg uppercase tracking-wider mb-1 ${isMuted ? "text-charcoal" : "text-white"}`}>
                  {node.name} <span className="text-xs font-ui text-[#FF4E4E]">{node.state}</span>
                </h3>
                <div className={`w-full h-px mb-2 ${isMuted ? "bg-gray-200" : "bg-white/20"}`} />
                <div className={`text-xs font-ui space-y-1 ${isMuted ? "text-gray-600" : "text-gray-300"}`}>
                  <div className="flex justify-between"><span>Nodes:</span><span className={`font-mono ${isMuted ? "text-charcoal" : "text-white"}`}>{node.online}</span></div>
                  <div className="flex justify-between"><span>Trust:</span><span className="text-green-500 font-mono">{node.trust}</span></div>
                  <div className="flex justify-between"><span>Latency:</span><span className="text-[#FF4E4E] font-mono">{node.latency}</span></div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Connection lines */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-visible">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,78,78,0)" />
                <stop offset="50%" stopColor="rgba(255,78,78,0.4)" />
                <stop offset="100%" stopColor="rgba(255,78,78,0)" />
              </linearGradient>
            </defs>
            <line x1="29%" y1="18%" x2="18%" y2="38%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" />
            <line x1="18%" y1="38%" x2="28%" y2="52%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "1s" }} />
            <line x1="29%" y1="18%" x2="42%" y2="28%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
          </svg>
        </motion.div>
      </div>

      {/* Stats panel */}
      <motion.div 
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-40 w-64"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {[
          { label: "Total Nodes", value: "24,892", icon: "dns", sub: "+12% this week", subColor: "text-green-500" },
          { label: "Alerts", value: "03", icon: "notifications_active", sub: "Active Incidents", subColor: "text-[#FF4E4E]" },
          { label: "Uptime", value: "99.9%", icon: "timer", sub: "Last 30 Days", subColor: "text-gray-500" },
        ].map((stat) => (
          <div key={stat.label} className={`p-6 rounded-lg transition-colors duration-700 ${isMuted ? "bg-white/80 border border-gray-200" : "glass-panel hover:border-primary/30"}`}>
            <div className="flex items-center justify-between mb-2">
              <h4 className={`font-ui text-xs uppercase tracking-widest transition-colors duration-700 ${isMuted ? "text-gray-500" : "text-gray-400"}`}>{stat.label}</h4>
              <span className="material-symbols-outlined text-[#FF4E4E]/70 text-sm">{stat.icon}</span>
            </div>
            <div className={`text-4xl font-display mb-1 transition-colors duration-700 ${isMuted ? "text-charcoal" : "text-white"}`}>{stat.value}</div>
            <div className={`text-[10px] ${stat.subColor} flex items-center gap-1`}>{stat.sub}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
