"use client";

import { useState } from "react";

export default function JoinPage() {
  const [alias, setAlias] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 transform perspective-1000 scale-110" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] opacity-10 pointer-events-none">
          <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
            <path d="M100,10 L190,50 L190,150 L100,190 L10,150 L10,50 Z" fill="none" stroke="#990000" strokeWidth="0.5" />
            <path d="M100,20 L180,55 L180,145 L100,180 L20,145 L20,55 Z" fill="none" stroke="#8E8E8E" strokeWidth="0.8" style={{ opacity: 0.6 }} />
            <circle cx="100" cy="100" fill="none" r="60" stroke="#990000" strokeDasharray="4 4" strokeWidth="0.2" />
            <circle cx="100" cy="100" fill="none" r="40" stroke="#8E8E8E" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute inset-0 vignette pointer-events-none" />
        <div className="absolute w-full h-[100px] z-10 animate-scan opacity-10 pointer-events-none" style={{
          background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(153, 0, 0, 0.05) 50%, rgba(0,0,0,0) 100%)"
        }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-start pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="material-symbols-outlined text-primary animate-pulse">encrypted</span>
          <div className="flex flex-col">
            <span className="font-ui font-bold text-sm tracking-[0.2em] text-white">
              ARA<span className="text-primary">.NET</span>
            </span>
            <span className="font-mono text-[10px] text-gray-500">SECURE MESH // V.2.0.4</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2 text-xs font-mono text-primary/80">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            LIVE NODES: 8,492
          </div>
          <div className="text-[10px] text-gray-600 font-mono">LATENCY: 12ms</div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-0">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Left side - Title */}
          <div className="flex-1 text-center md:text-left space-y-2 relative">
            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />
            
            <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Join The
              </span>
              <span className="block text-primary drop-shadow-[0_0_15px_rgba(153,0,0,0.6)]">
                Resistance
              </span>
            </h1>
            
            <p className="font-ui text-lg text-gray-500 mt-6 max-w-md tracking-wide">
              The grid is our shield. Your device is a beacon. Connect to the decentralized safety network.
            </p>
            
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <div className="px-3 py-1 border border-primary/30 rounded text-[10px] font-mono text-primary uppercase tracking-widest bg-primary/5">
                Anon-V2 Protocol
              </div>
              <div className="px-3 py-1 border border-gray-500/50 rounded text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-gray-500/10">
                E2E Encrypted
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 w-full max-w-md">
            <div className="glass-panel rounded-2xl p-8 relative overflow-hidden shadow-2xl">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3 group">
                  <label className="flex items-center gap-2 text-xs font-ui font-bold tracking-[0.15em] text-gray-500 uppercase group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">fingerprint</span>
                    Identify Your Node
                  </label>
                  <input
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(153,0,0,0.4)] transition-all duration-300"
                    placeholder="ENTER ALIAS"
                    type="text"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                  />
                </div>

                <div className="space-y-3 group">
                  <label className="flex items-center gap-2 text-xs font-ui font-bold tracking-[0.15em] text-gray-500 uppercase group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                    Establish Trust
                  </label>
                  <input
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(153,0,0,0.4)] transition-all duration-300"
                    placeholder="SECURE COMM LINK (EMAIL)"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-3 group">
                  <label className="flex items-center gap-2 text-xs font-ui font-bold tracking-[0.15em] text-gray-500 uppercase group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">hub</span>
                    Secure The Mesh
                  </label>
                  <div className="flex gap-2">
                    <input
                      className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(153,0,0,0.4)] transition-all duration-300"
                      placeholder="ACCESS KEY"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-charcoal hover:bg-gray-800 text-gray-400 hover:text-white p-3 rounded-lg border border-gray-700 transition-colors">
                      <span className="material-symbols-outlined text-sm">key</span>
                    </button>
                  </div>
                </div>

                <button className="w-full mt-6 group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-red-900 p-[1px] shadow-[0_0_15px_rgba(153,0,0,0.5),0_0_30px_rgba(153,0,0,0.2)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <div className="relative h-full w-full bg-black rounded-lg px-6 py-4 transition-colors group-hover:bg-opacity-80">
                    <div className="flex items-center justify-center gap-3">
                      <span className="font-ui font-bold tracking-widest uppercase text-white group-hover:text-white transition-colors">
                        Initiate Uplink
                      </span>
                      <span className="material-symbols-outlined text-white animate-pulse">arrow_forward</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                <div className="text-center mt-4">
                  <a className="text-[10px] font-mono text-gray-500 hover:text-primary transition-colors border-b border-transparent hover:border-primary" href="#">
                    ALREADY A NODE? SYNC HERE
                  </a>
                </div>
              </form>

              {/* Glow effects */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-500/10 rounded-full blur-[50px] pointer-events-none" />
            </div>
          </div>
        </div>
      </main>

      {/* Side decorations */}
      <div className="fixed top-1/2 left-6 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
        <div className="w-1 h-2 bg-primary/50" />
        <div className="w-1 h-2 bg-primary/30" />
        <div className="w-1 h-12 bg-primary/20" />
        <div className="w-1 h-2 bg-primary/30" />
        <div className="w-1 h-2 bg-primary/50" />
      </div>
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20 items-end">
        <span className="text-[10px] font-mono text-primary/50 rotate-90 origin-right translate-x-2">
          GRID STATUS: ONLINE
        </span>
      </div>
    </div>
  );
}
