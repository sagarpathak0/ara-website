"use client";

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

type ThemeContextType = {
  isMuted: boolean;
  toggleMute: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true); // Start muted (grey theme)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element on client side
    audioRef.current = new Audio("/background-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // 30% volume
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        // Play music when unmuted
        audioRef.current.play().catch(() => {
          // Browser may block autoplay, that's okay
        });
      } else {
        // Pause when muted
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isMuted, toggleMute }}>
      <div className={`theme-wrapper transition-all duration-700 ${isMuted ? "theme-muted" : "theme-unmuted"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
