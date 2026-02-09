export default function TechPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className="absolute inset-0 opacity-40 animate-pulse" style={{
          background: "radial-gradient(at 47% 33%, hsl(262, 83%, 18%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218, 73%, 14%) 0, transparent 55%)"
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-secondary/20 rounded-full opacity-20 animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] border border-primary/10 rounded-full opacity-10 animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      {/* Nav */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-background-dark/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">security</span>
            <span className="font-display font-bold text-2xl tracking-wider uppercase">
              Anti<span className="text-primary">Rape</span>Alliance
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-display uppercase tracking-widest text-sm font-semibold">
            <a className="hover:text-primary transition-colors opacity-60" href="/manifesto">Manifesto</a>
            <a className="text-primary opacity-100 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="/tech">Tech Layer</a>
            <a className="hover:text-primary transition-colors opacity-60" href="/network">Nodes</a>
            <a className="hover:text-primary transition-colors opacity-60" href="/join">Join Grid</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase border border-primary/30 bg-primary/10 px-3 py-1 w-max rounded">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              System Online
            </div>

            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase relative">
              The Tech<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Layer</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl border-l-2 border-primary pl-6 py-2">
              A decentralized safety protocol embedded in the urban fabric. Utilizing IoT sensor arrays 
              and immutable blockchain verification to create a realtime shield for everyone, everywhere.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button className="btn-primary">
                Initialize Node
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="btn-secondary">
                View Whitepaper
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
              <div>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">Active Nodes</div>
                <div className="font-display font-bold text-2xl md:text-3xl">4,281</div>
              </div>
              <div>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">Encrypted Blocks</div>
                <div className="font-display font-bold text-2xl md:text-3xl">99.9%</div>
              </div>
              <div>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">Response Time</div>
                <div className="font-display font-bold text-2xl md:text-3xl text-secondary">&lt;2ms</div>
              </div>
            </div>
          </div>

          {/* Tech Panel */}
          <div className="lg:col-span-5 relative h-[500px] flex items-center justify-center animate-float">
            <div className="glass-panel w-full max-w-md p-6 rounded-xl relative overflow-hidden shadow-2xl">
              <div className="absolute left-0 w-full h-1 bg-primary/50 shadow-[0_0_15px_rgba(239,68,68,0.5)] z-20 animate-scan pointer-events-none" />

              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">hub</span>
                  <span className="font-display font-bold uppercase tracking-wider text-sm">Mesh Network 4.0</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                </div>
              </div>

              <div className="relative h-48 bg-black/40 rounded border border-white/10 mb-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
                  backgroundSize: "10px 10px"
                }} />
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#EF4444]">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                </div>
                <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#6366f1]">
                  <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75" style={{ animationDelay: "0.5s" }} />
                </div>
                <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span className="text-gray-500">VERIFICATION</span>
                  <span className="text-green-500 font-bold">ENCRYPTED [AES-256]</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span className="text-gray-500">LATENCY</span>
                  <span className="text-secondary font-bold">12ms (EDGE)</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span className="text-gray-500">TRUST SCORE</span>
                  <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary to-primary w-[92%]" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -right-8 -top-8 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -z-10 -left-8 -bottom-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 w-full bg-black/40 border-t border-white/10 backdrop-blur-sm py-3 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee flex gap-12 font-mono text-xs text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full" /> Blockchain Ledger Updated</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> New Node: Mumbai_Sector_7</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Smart Contract Verified</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full" /> IoT Grid Stable</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> SOS Protocol Ready</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full" /> Privacy Shield Active</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-green-500 rounded-full" /> Blockchain Ledger Updated</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full" /> New Node: Mumbai_Sector_7</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 hover:border-primary/50 transition-colors group bg-background-dark/50">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <span className="material-symbols-outlined">sensors</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">IoT Sensor Array</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deploying smart sensors in high-risk zones that detect audio anomalies and distress patterns, 
                instantly triggering the nearest help nodes.
              </p>
            </div>

            <div className="p-8 border border-white/10 hover:border-secondary/50 transition-colors group bg-background-dark/50">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                <span className="material-symbols-outlined">lock_person</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Zero-Knowledge Privacy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Data is processed at the edge. Identities are cryptographically shielded. 
                We verify safety without compromising personal freedom.
              </p>
            </div>

            <div className="p-8 border border-white/10 hover:border-primary/50 transition-colors group bg-background-dark/50">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <span className="material-symbols-outlined">share_location</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Community Response</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A decentralized mesh of volunteers and authorities receive real-time, 
                verified alerts with precise geolocation data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 font-mono">
            © 2024 AntiRapeAlliance. Decentralized Safety Protocol.
          </div>
          <div className="flex gap-6">
            <a className="text-gray-500 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">email</span>
            </a>
            <a className="text-gray-500 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">article</span>
            </a>
            <a className="text-gray-500 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">forum</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
