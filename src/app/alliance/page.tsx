export default function AlliancePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative w-full pt-12 pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      <div className="fixed inset-0 bg-noise opacity-30 z-0 pointer-events-none mix-blend-overlay" />

      {/* Large background text */}
      <div className="absolute top-1/4 left-0 w-full text-center z-0 pointer-events-none select-none opacity-10 transform -translate-y-12">
        <h1 className="font-display text-[12vw] sm:text-[15vw] leading-[0.8] tracking-tighter text-primary">
          MARS<br />REJECTS
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 opacity-80 animate-pulse text-primary">
          <svg fill="currentColor" height="64" viewBox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" opacity="0.3" />
            <path d="M12 6C9.79 6 8 7.79 8 10V11H9V10C9 8.34 10.34 7 12 7C13.66 7 15 8.34 15 10V14C15 15.1 14.1 16 13 16H11C9.9 16 9 15.1 9 14V13H8V14C8 15.66 9.34 17 11 17H13C14.66 17 16 15.66 16 14V10C16 7.79 14.21 6 12 6Z" />
            <circle cx="12" cy="12" fill="none" r="9" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-6xl h-[400px] md:h-[600px] flex items-end justify-center mb-12">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-gradient-to-t from-primary/20 to-transparent blur-3xl rounded-full z-0" />
          <div className="relative z-10 w-full h-full flex items-end justify-center">
            <img
              alt="Diverse group of stylish cyberpunk characters standing united"
              className="object-contain object-bottom w-full h-full max-h-[600px] filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700 ease-in-out drop-shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcyC2Cb1Kvz6qQ1qbnROCjM-PJAfIFszc9KBZhPsKWT-YR8FXnk1YllQj9FadyX8o5KJ2txhCgZ0t66JQhlhuhXrjBucIF_7hfhWsCYALHQVpg1WrveKs971veu8ag4QgBJ8kXakSma6l1y2F0LLCwMPkDV7v2MdfP4avjCyHz9qD_X9wWSLswCgD47AAFOGJ5V4ie_1eBs-SSbzIg0wwNrsJH-orLhgb9NWvDGBhBt_ZYcBS6TyeJSiHNJ--2cySJyvdHg00kZA"
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-dark to-transparent z-20" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center relative z-20 -mt-10 mb-16 max-w-3xl">
          <h2 className="font-display text-5xl md:text-7xl mb-4 text-white uppercase tracking-tight">
            <span className="text-primary">AntiRape</span>Alliance
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            A unique collective of safety guardians brought to life by blockchain. 
            Together, we build the shield.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <button className="group relative px-8 py-5 bg-surface-dark border-2 border-white/20 hover:border-primary transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-10" />
            <span className="relative flex items-center justify-between font-display text-xl uppercase tracking-wider text-white group-hover:text-primary transition-colors">
              Join Revolution
              <span className="material-symbols-outlined transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                arrow_forward
              </span>
            </span>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10 group-hover:bg-primary" />
          </button>

          <button className="group relative px-8 py-5 bg-primary text-white border-2 border-primary shadow-[0_0_20px_rgba(255,78,78,0.3)] hover:shadow-[0_0_30px_rgba(255,78,78,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            <span className="relative flex items-center justify-center font-display text-2xl uppercase tracking-wider">
              Build Network
            </span>
          </button>

          <button className="group relative px-8 py-5 bg-surface-dark border-2 border-white/20 hover:border-primary transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-10" />
            <span className="relative flex items-center justify-between font-display text-xl uppercase tracking-wider text-white group-hover:text-primary transition-colors">
              Empower Safety
              <span className="material-symbols-outlined transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                shield
              </span>
            </span>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10 group-hover:bg-primary" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 left-10 hidden lg:block animate-float">
        <div className="h-24 w-1 bg-gradient-to-b from-primary to-transparent opacity-50" />
        <div className="font-mono text-xs text-primary rotate-90 origin-bottom-left mt-2 tracking-widest">SYSTEM_SECURE</div>
      </div>

      <div className="absolute top-40 right-10 hidden lg:block">
        <div className="w-16 h-16 border border-dashed border-white/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
          <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-40 w-full bg-black/40 backdrop-blur-md border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            © 2024 AntiRapeAlliance. All systems operational.
          </div>
          <div className="flex items-center gap-4">
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all relative group" href="#">
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="material-symbols-outlined text-sm">email</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all" href="#">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </a>
            <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 mx-2 ring-4 ring-background-dark">
              <span className="material-symbols-outlined text-xl">more_horiz</span>
            </button>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all" href="#">
              <span className="material-symbols-outlined text-sm">tag</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all" href="#">
              <span className="material-symbols-outlined text-sm">play_arrow</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 h-3 items-end">
              <div className="w-1 h-2 bg-primary/40 animate-pulse" />
              <div className="w-1 h-3 bg-primary/60 animate-pulse" style={{ animationDelay: "75ms" }} />
              <div className="w-1 h-1 bg-primary/30 animate-pulse" style={{ animationDelay: "150ms" }} />
            </div>
            <span className="text-xs font-mono text-primary">LIVE</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
