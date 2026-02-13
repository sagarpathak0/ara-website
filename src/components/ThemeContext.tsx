"use client";

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";

type ThemeContextType = {
  isMuted: boolean;
  isPlaying: boolean;
  toggleMute: () => void;
  togglePlay: () => void;
  setTheme: (muted: boolean) => void;
  enableAudioFromGesture: () => void;
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
  const audioEnabledRef = useRef(false); // Track if user has enabled audio
  const isMutedRef = useRef(true); // Track current muted state for click handler
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const songName = "Drip - Corbin Roe";

  // Keep refs in sync with state
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Initialize Web Audio API for frequency analysis
  const initAudioContext = () => {
    if (!audioRef.current || audioContextRef.current) return;
    
    try {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;
      analyserRef.current.smoothingTimeConstant = 0.8;
      
      sourceRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    } catch (e) {
      console.error("Failed to initialize audio context:", e);
    }
  };

  useEffect(() => {
    // Create audio element on client side
    const audioSrc = "/Drip - Corbin Roe, Mayne & NicXIX.mp3";
    audioRef.current = new Audio(encodeURI(audioSrc));
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    audioRef.current.crossOrigin = "anonymous";
    audioRef.current.preload = "auto";
    
    // Add event listeners for play state
    const audio = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      const error = audio.error?.message || "unknown audio error";
      console.warn("Audio load error:", error);
    };
    
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);
    
    return () => {
      if (audio) {
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("error", handleError);
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

  useEffect(() => {
    if (audioRef.current) {
      if (!isMuted) {
        // Only try to play if audio has been enabled by user interaction
        if (audioEnabledRef.current) {
          initAudioContext();
          if (audioContextRef.current?.state === "suspended") {
            audioContextRef.current.resume();
          }
          audioRef.current.play().catch(() => {});
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    audioEnabledRef.current = true; // User clicked, so enable audio
    setIsMuted((prev) => !prev);
  };
  
  // Set theme (for scroll-triggered changes)
  const setTheme = (muted: boolean) => setIsMuted(muted);

  // Start audio in direct response to a user gesture (scroll/click/etc.)
  const enableAudioFromGesture = () => {
    audioEnabledRef.current = true;
    if (audioRef.current) {
      initAudioContext();
      if (audioContextRef.current?.state === "suspended") {
        audioContextRef.current.resume();
      }
      audioRef.current.play().catch((error) => {
        console.warn("Audio play blocked:", error);
      });
    }
    setIsMuted(false);
  };
  
  const setVolume = (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolumeState(clampedVolume);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  };
  
  const togglePlay = () => {
    if (!audioRef.current || isMuted) return;
    
    // Ensure audio is enabled and context is initialized
    audioEnabledRef.current = true;
    initAudioContext();
    if (audioContextRef.current?.state === "suspended") {
      audioContextRef.current.resume();
    }
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <ThemeContext.Provider value={{ isMuted, isPlaying, toggleMute, togglePlay, setTheme, enableAudioFromGesture, songName, analyserRef, volume, setVolume }}>
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
