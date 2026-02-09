"use client";

import HeroSection from "@/components/sections/HeroSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import NetworkSection from "@/components/sections/NetworkSection";
import TechSection from "@/components/sections/TechSection";
import AllianceSection from "@/components/sections/AllianceSection";
import AwakeningSection from "@/components/sections/AwakeningSection";
import JoinSection from "@/components/sections/JoinSection";
import { useTheme } from "@/components/ThemeContext";

export default function HomePage() {
  const { isMuted } = useTheme();

  return (
    <main className="relative overflow-x-hidden max-w-[100vw]">
      <HeroSection />
      <ManifestoSection />
      <NetworkSection />
      <TechSection />
      <AllianceSection />
      <AwakeningSection />
      <JoinSection />
      
      {/* Footer */}
      <footer className={`relative z-10 py-12 border-t transition-colors duration-700 ${isMuted ? "bg-[#E8E4E0] border-gray-200" : "bg-background-dark border-white/10"}`}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className={`text-sm font-mono transition-colors duration-700 ${isMuted ? "text-gray-500" : "text-gray-500"}`}>
            © 2026 AntiRapeAlliance. Decentralized Safety Protocol.
          </div>
          <div className="flex gap-6">
            <a className={`hover:text-[#FF4E4E] transition-colors ${isMuted ? "text-gray-500" : "text-gray-500"}`} href="#">
              <span className="material-symbols-outlined">email</span>
            </a>
            <a className={`hover:text-[#FF4E4E] transition-colors ${isMuted ? "text-gray-500" : "text-gray-500"}`} href="#">
              <span className="material-symbols-outlined">article</span>
            </a>
            <a className={`hover:text-[#FF4E4E] transition-colors ${isMuted ? "text-gray-500" : "text-gray-500"}`} href="#">
              <span className="material-symbols-outlined">forum</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Corner decorations */}
      <div className={`fixed top-8 left-8 w-2 h-2 border-l border-t pointer-events-none hidden md:block z-50 transition-colors duration-700 ${isMuted ? "border-gray-300" : "border-white/30"}`} />
      <div className={`fixed top-8 right-8 w-2 h-2 border-r border-t pointer-events-none hidden md:block z-50 transition-colors duration-700 ${isMuted ? "border-gray-300" : "border-white/30"}`} />
    </main>
  );
}
