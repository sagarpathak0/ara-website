export default function ManifestoPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute -right-20 top-0 w-2/3 h-full bg-[#1f1f1f] transform skew-x-12 opacity-50 z-0" />
        <div className="absolute bottom-0 left-0 text-[20vw] leading-[0.7] font-display text-white/5 pointer-events-none select-none z-0 whitespace-nowrap opacity-50">
          MANIFESTO
        </div>
      </div>

      <div className="relative z-10 w-full min-h-screen grid grid-cols-12 gap-4 p-4 md:p-8">
        {/* Left Content */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center h-full relative pl-4 md:pl-12 pt-20">
          <div className="absolute top-8 left-0 md:left-12 flex items-center gap-2">
            <span className="material-icons text-primary text-3xl">fingerprint</span>
            <span className="font-display text-xl tracking-widest uppercase">
              AntiRape<span className="text-primary">Alliance</span>
            </span>
          </div>

          <div className="mt-20 md:mt-0 space-y-2 relative">
            <div className="absolute -left-8 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />

            <h1 className="font-display text-7xl md:text-9xl uppercase tracking-tighter leading-[0.85] text-off-white z-20">
              WE ARE<br />
              THE <span className="text-primary">SHIELD</span>
            </h1>

            <div className="mt-8 md:mt-12 space-y-6 max-w-md">
              <div className="kinetic-block group">
                <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Protocol 01
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-300 group-hover:text-white">
                  Safety is not a privilege. It is an immutable block in the chain of human rights. 
                  We decentralize protection to centralize power.
                </p>
              </div>

              <div className="kinetic-block group">
                <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Protocol 02
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-300 group-hover:text-white">
                  Silence is the enemy. Our network amplifies the whisper until it becomes a roar. 
                  Every signal is verified, every voice is permanent.
                </p>
              </div>

              <div className="kinetic-block group">
                <h3 className="font-ui text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Protocol 03
                </h3>
                <p className="font-body text-sm leading-relaxed text-gray-300 group-hover:text-white">
                  Trust is earned through transparency. Every node, every action, every alert is 
                  recorded on an immutable ledger visible to all.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button className="bg-white text-charcoal px-8 py-3 font-ui text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                Sign The Manifesto
              </button>
              <div className="h-[1px] w-24 bg-primary/50" />
              <span className="font-mono text-xs text-primary">HASH: #8A2F99</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-span-12 md:col-span-7 relative h-full flex items-center justify-center md:justify-end overflow-hidden">
          <div className="absolute top-10 right-10 z-30 flex flex-col items-end gap-2 font-mono text-[10px] text-primary/80">
            <span>SYSTEM STATUS: ACTIVE</span>
            <span>NODES: 14,092</span>
            <span className="animate-pulse">● LIVE MONITORING</span>
          </div>

          <div className="absolute bottom-24 left-10 z-30 hidden md:block">
            <div className="w-32 h-32 border border-primary/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <span className="material-symbols-outlined text-4xl text-primary/40">security</span>
            </div>
          </div>

          <div className="relative w-full h-[60vh] md:h-[85vh] md:w-[90%] overflow-hidden group">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 pointer-events-none" />
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
              <p className="font-display text-4xl md:text-6xl text-white opacity-90 mix-blend-overlay">
                SOLIDARITY
              </p>
              <p className="font-mono text-xs text-primary tracking-[0.5em] uppercase mt-1">
                Is The Algorithm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scan line */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/30 shadow-[0_0_15px_rgba(255,78,78,0.6)] z-50 animate-scan pointer-events-none mix-blend-screen" />

      {/* Corner decorations */}
      <div className="fixed top-8 right-8 w-24 h-24 border-r border-t border-primary/30 pointer-events-none hidden md:block" />
      <div className="fixed bottom-8 left-8 w-24 h-24 border-l border-b border-primary/30 pointer-events-none hidden md:block" />
    </div>
  );
}
