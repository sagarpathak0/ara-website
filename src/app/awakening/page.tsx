export default function AwakeningPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background-dark">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">fingerprint</span>
          <span className="font-ui font-bold text-sm tracking-[0.2em] text-white uppercase">
            ARA <span className="text-primary">Protocol</span> V2.4
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-[2px] bg-primary" />
          <button className="text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Status indicator */}
      <div className="absolute top-24 right-6 z-40 text-right">
        <div className="text-primary font-mono text-sm uppercase tracking-wider mb-1">
          System: Alert
        </div>
        <div className="text-gray-500 font-mono text-xs">
          LAT: 28.6139° N<br />
          LON: 77.2090° E
        </div>
        <div className="text-primary/70 font-mono text-xs mt-2">
          ENCRYPTED CONNECTION
        </div>
      </div>

      {/* Left badge */}
      <div className="absolute top-1/3 left-6 z-40">
        <div className="glass-panel px-4 py-3 rounded border-l-2 border-primary">
          <div className="text-primary font-mono text-xs uppercase tracking-wider">Target Acquired</div>
          <div className="text-primary font-ui font-bold text-sm uppercase tracking-wider">Protection Active</div>
        </div>
      </div>

      {/* Central image with glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Radial glow behind figure */}
        <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-white/20 via-white/5 to-transparent rounded-full" />
        
        {/* Background ghost figures */}
        <div className="absolute left-10 top-1/3 opacity-10">
          <div className="w-32 h-64 bg-gradient-to-b from-primary/30 to-transparent rounded-full blur-xl" />
        </div>
        <div className="absolute right-10 top-1/3 opacity-10">
          <div className="w-32 h-64 bg-gradient-to-b from-primary/30 to-transparent rounded-full blur-xl" />
        </div>

        {/* Main Figure Illustration */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Eye icon at top */}
          <div className="mb-8">
            <div className="w-16 h-10 border-2 border-primary/50 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">visibility</span>
            </div>
          </div>

          {/* Stylized figure */}
          <div className="relative">
            <svg 
              viewBox="0 0 200 400" 
              className="w-48 h-96 md:w-64 md:h-[500px]"
              fill="none"
            >
              {/* Head */}
              <ellipse cx="100" cy="50" rx="35" ry="45" fill="#4A4A4A" />
              
              {/* Hair */}
              <path 
                d="M65 50 Q50 20 70 10 Q100 0 130 10 Q150 20 135 50 Q130 30 100 25 Q70 30 65 50" 
                fill="#2A2A2A"
              />
              <path 
                d="M60 55 Q45 80 50 120 Q55 140 65 150" 
                stroke="#2A2A2A" 
                strokeWidth="15" 
                fill="none"
              />
              <path 
                d="M140 55 Q155 80 150 120 Q145 140 135 150" 
                stroke="#2A2A2A" 
                strokeWidth="15" 
                fill="none"
              />
              
              {/* Neck */}
              <rect x="85" y="90" width="30" height="30" fill="#5A5A5A" />
              
              {/* Body (sports bra/top) */}
              <path 
                d="M70 120 Q65 130 65 160 Q65 180 80 185 L120 185 Q135 180 135 160 Q135 130 130 120 Z" 
                fill="#2A2A2A"
              />
              
              {/* Torso */}
              <path 
                d="M75 185 Q70 220 75 280 L125 280 Q130 220 125 185 Z" 
                fill="#4A4A4A"
              />
              
              {/* Lower body */}
              <path 
                d="M75 280 Q70 320 75 380 Q80 395 100 395 Q120 395 125 380 Q130 320 125 280 Z" 
                fill="#2A2A2A"
              />
              
              {/* Face features - lips */}
              <path 
                d="M90 65 Q100 70 110 65" 
                stroke="#8B0000" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
            
            {/* Accent lines */}
            <div className="absolute -right-20 top-1/2 w-16 h-[2px] bg-gradient-to-r from-primary to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom left title */}
      <div className="absolute bottom-32 left-6 z-40">
        <div className="border-l-4 border-primary pl-4">
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-white leading-[0.9]">
            THE<br />
            <span className="text-primary">AWAKENING</span>
          </h1>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-panel px-2 py-2 rounded-full flex items-center gap-1 bg-black/80">
          <a className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-lg">email</span>
          </a>
          <a className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-lg">photo_camera</span>
          </a>
          <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,78,78,0.5)] mx-2">
            <span className="material-symbols-outlined text-xl">fingerprint</span>
          </button>
          <a className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-lg">tag</span>
          </a>
          <a className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" href="#">
            <span className="material-symbols-outlined text-lg">music_note</span>
          </a>
        </div>
      </div>

      {/* Background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <span className="font-display text-[40vw] uppercase tracking-tighter text-primary">W</span>
      </div>
      <div className="absolute right-0 inset-y-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <span className="font-display text-[40vw] uppercase tracking-tighter text-primary">TCH</span>
      </div>
    </div>
  );
}
