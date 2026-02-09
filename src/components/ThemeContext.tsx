"use client";

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

type ThemeContextType = {
  isMuted: boolean;
  isPlaying: boolean;
  toggleMute: () => void;
  togglePlay: () => void;
  songName: string;
  analyserRef: React.RefObject<AnalyserNode | null>;
  volume: number;
  setVolume: (volume: number) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(true); // Start muted (grey theme)
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.2); // 20% volume initially
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const songName = "Drip - Corbin Roe";

  useEffect(() => {
    // Create audio element on client side
    audioRef.current = new Audio("/Drip - Corbin Roe, Mayne & NicXIX.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2; // 20% volume initially
    audioRef.current.crossOrigin = "anonymous";
    
    // Add event listeners for play state
    const audio = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    
    return () => {
      if (audio) {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        audio.pause();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      audioRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      sourceRef.current = null;
    };
  }, []);

  // Initialize Web Audio API for frequency analysis
  const initAudioContext = () => {
    if (!audioRef.current || audioContextRef.current) return;
    
    try {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 64; // Small for performance, gives us 32 frequency bins
      analyserRef.current.smoothingTimeConstant = 0.8;
      
      sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    } catch (e) {
      console.error("Failed to initialize audio context:", e);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        // Initialize audio context on first unmute (requires user interaction)
        initAudioContext();
        
        // Resume audio context if suspended
        if (audioContextRef.current?.state === "suspended") {
          audioContextRef.current.resume();
        }
        
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
  
  const setVolume = (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolumeState(clampedVolume);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  };
  
  const togglePlay = () => {
    if (!audioRef.current || isMuted) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Browser may block autoplay
      });
    }
  };

  return (
    <ThemeContext.Provider value={{ isMuted, isPlaying, toggleMute, togglePlay, songName, analyserRef, volume, setVolume }}>
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
