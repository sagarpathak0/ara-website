"use client";

import { useEffect, useRef } from "react";

const nodes = [
  { id: "delhi", name: "Delhi", state: "NCR", top: "18%", left: "29%", online: "2,842", trust: "99.2%", latency: "12ms" },
  { id: "mumbai", name: "Mumbai", state: "MH", top: "38%", left: "18%", online: "1,240", trust: "98.0%", latency: "18ms" },
  { id: "bangalore", name: "Bangalore", state: "KA", top: "52%", left: "28%", online: "3,105", trust: "99.8%", latency: "08ms" },
  { id: "kolkata", name: "Kolkata", state: "WB", top: "28%", left: "42%", online: "892", trust: "94.5%", latency: "22ms", dimmed: true },
  { id: "hyderabad", name: "Hyderabad", state: "TS", top: "42%", left: "30%", online: "1,560", trust: "98.5%", latency: "15ms", dimmed: true },
];

export default function NetworkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      const plane = containerRef.current.querySelector(".map-plane") as HTMLElement;
      if (plane) {
        plane.style.transform = `rotateX(${45 + y * 5}deg) rotateZ(${-15 + x * 5}deg) scale(0.9)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" ref={containerRef}>
      {/* Background layers */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,78,78,0.08)_0%,transparent_70%)]" />
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-40 pointer-events-none">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl animate-pulse">hub</span>
            <h1 className="font-display text-2xl tracking-widest uppercase">
              Network<span className="text-primary">Map</span>
            </h1>
          </div>
          <div className="text-xs font-mono text-gray-500 tracking-widest pl-10">
            LIVE FEED // DECENTRALIZED PROTOCOL
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded border border-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-ui tracking-wider uppercase text-gray-400">Status: Operational</span>
          </div>
          <div className="text-[10px] font-mono text-primary/70">HASH: 0x8F...3A2C</div>
        </div>
      </header>

      {/* 3D Map */}
      <main className="relative w-full h-full flex items-center justify-center overflow-hidden z-10">
        <div
          className="map-plane relative w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(45deg) rotateZ(-15deg) scale(0.9)",
          }}
        >
          {/* India shape placeholder */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-20 fill-current text-gray-600 pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" viewBox="0 0 612 792">
            <path d="M305,50 C320,60 350,80 360,100 C370,120 400,130 410,150 C420,170 450,180 440,200 C430,220 480,240 470,260 C460,280 440,290 430,310 C420,330 410,350 400,380 C390,410 380,450 360,500 C340,550 320,600 300,650 C280,600 260,550 240,500 C220,450 200,400 180,350 C160,300 120,280 100,250 C80,220 120,200 140,180 C160,160 180,140 200,120 C220,100 250,80 270,60 C290,40 300,45 305,50 Z" />
          </svg>

          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
            style={{
              backgroundImage: "linear-gradient(rgba(255,78,78,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,78,78,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              maskImage: "radial-gradient(circle, black 40%, transparent 80%)",
            }}
          />

          {/* Node points */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute group"
              style={{ top: node.top, left: node.left, transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className={`w-2 h-2 rounded-full bg-primary cursor-pointer transition-all duration-300 shadow-[0_0_15px_#FF4E4E,0_0_30px_#FF4E4E] hover:scale-150 hover:bg-white hover:shadow-[0_0_20px_#FF4E4E,0_0_40px_#FF4E4E,0_0_60px_#FF4E4E] ${
                  node.dimmed ? "opacity-70 scale-75" : ""
                }`}
              />
              {/* Tooltip */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-panel p-3 rounded w-48 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50">
                <h3 className="font-display text-xl uppercase tracking-wider text-white mb-1">
                  {node.name} <span className="text-xs font-ui text-primary align-top ml-1">{node.state}</span>
                </h3>
                <div className="w-full h-px bg-white/20 mb-2" />
                <div className="flex justify-between text-xs font-ui text-gray-300 mb-1">
                  <span>Nodes Online:</span>
                  <span className="text-white font-mono">{node.online}</span>
                </div>
                <div className="flex justify-between text-xs font-ui text-gray-300 mb-1">
                  <span>Trust Index:</span>
                  <span className="text-green-400 font-mono">{node.trust}</span>
                </div>
                <div className="flex justify-between text-xs font-ui text-gray-300">
                  <span>Latency:</span>
                  <span className="text-primary font-mono">{node.latency}</span>
                </div>
              </div>
            </div>
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
            <line x1="30%" y1="42%" x2="28%" y2="52%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
          </svg>
        </div>

        {/* Scan line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_15px_rgba(255,78,78,0.8)] animate-scan z-20 opacity-30" />
      </main>

      {/* Stats panel */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-40 w-64">
        <div className="glass-panel p-6 rounded-lg hover:border-primary/30 transition-colors group">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-ui text-xs uppercase tracking-widest text-gray-400">Total Nodes</h4>
            <span className="material-symbols-outlined text-primary/70 text-sm group-hover:rotate-12 transition-transform">dns</span>
          </div>
          <div className="text-4xl font-display text-white mb-1">24,892</div>
          <div className="text-[10px] text-green-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[10px]">trending_up</span> +12% this week
          </div>
        </div>
        <div className="glass-panel p-6 rounded-lg hover:border-primary/30 transition-colors group">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-ui text-xs uppercase tracking-widest text-gray-400">Alerts</h4>
            <span className="material-symbols-outlined text-primary/70 text-sm group-hover:animate-ping">notifications_active</span>
          </div>
          <div className="text-4xl font-display text-white mb-1">03</div>
          <div className="text-[10px] text-primary flex items-center gap-1">Active Incidents</div>
        </div>
        <div className="glass-panel p-6 rounded-lg hover:border-primary/30 transition-colors group">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-ui text-xs uppercase tracking-widest text-gray-400">Uptime</h4>
            <span className="material-symbols-outlined text-primary/70 text-sm">timer</span>
          </div>
          <div className="text-4xl font-display text-white mb-1">99.9%</div>
          <div className="text-[10px] text-gray-500 flex items-center gap-1">Last 30 Days</div>
        </div>
      </div>

      {/* Corner markers */}
      <div className="fixed top-8 left-8 w-4 h-4 border-l border-t border-primary/50 pointer-events-none hidden md:block z-50" />
      <div className="fixed top-8 right-8 w-4 h-4 border-r border-t border-primary/50 pointer-events-none hidden md:block z-50" />
      <div className="fixed bottom-8 left-8 w-4 h-4 border-l border-b border-primary/50 pointer-events-none hidden md:block z-50" />
      <div className="fixed bottom-8 right-8 w-4 h-4 border-r border-b border-primary/50 pointer-events-none hidden md:block z-50" />
    </div>
  );
}
