"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { useEffect, useState, useRef, useCallback } from "react";

export default function DVDPlayer() {
  const { isMuted, isPlaying, togglePlay, songName, analyserRef, volume, setVolume } = useTheme();
  const [frequencyData, setFrequencyData] = useState<number[]>(Array(24).fill(0));
  const animationRef = useRef<number | undefined>(undefined);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // Update frequency data from analyser
  const updateFrequency = useCallback(() => {
    if (analyserRef.current && isPlaying) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(dataArray);
      
      // Take 24 samples evenly distributed across frequency spectrum
      const samples = 24;
      const newData: number[] = [];
      const step = Math.floor(dataArray.length / samples);
      
      for (let i = 0; i < samples; i++) {
        const value = dataArray[i * step] / 255; // Normalize to 0-1
        newData.push(value);
      }
      
      setFrequencyData(newData);
    } else {
      // Reset to zero when not playing
      setFrequencyData(Array(24).fill(0));
    }
    
    animationRef.current = requestAnimationFrame(updateFrequency);
  }, [analyserRef, isPlaying]);

  useEffect(() => {
    if (!isMuted) {
      animationRef.current = requestAnimationFrame(updateFrequency);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMuted, updateFrequency]);

  // Only show in unmuted state
  if (isMuted) return null;

  const discSize = 80; // Increased size to accommodate frequency bars
  const barCount = 24;
  const innerRadius = 32;
  const maxBarHeight = 16;

  // Get volume icon based on level
  const getVolumeIcon = () => {
    if (volume === 0) return "volume_off";
    if (volume < 0.5) return "volume_down";
    return "volume_up";
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 md:gap-3"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Song name label - only visible when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="hidden sm:block bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 md:px-4 md:py-2 max-w-[140px] md:max-w-[180px]"
            initial={{ opacity: 0, x: 40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">Now Playing</div>
            <div className="text-xs md:text-sm text-white font-medium truncate">{songName}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DVD disc button with frequency visualizer and volume control */}
      <div 
        className="relative" 
        style={{ width: discSize, height: discSize }}
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        {/* Vertical Volume Slider - appears on hover */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
          style={{ bottom: discSize + 8 }}
          initial={false}
          animate={{ 
            opacity: showVolumeSlider ? 1 : 0,
            y: showVolumeSlider ? 0 : 10,
            scale: showVolumeSlider ? 1 : 0.9
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Volume percentage badge */}
          <motion.div 
            className="bg-gradient-to-b from-[#FF4E4E]/20 to-black/80 backdrop-blur-md border border-[#FF4E4E]/30 rounded-full px-2 py-0.5 shadow-[0_0_12px_rgba(255,78,78,0.3)]"
            animate={{ 
              boxShadow: isPlaying 
                ? ['0 0 12px rgba(255,78,78,0.3)', '0 0 20px rgba(255,78,78,0.5)', '0 0 12px rgba(255,78,78,0.3)']
                : '0 0 12px rgba(255,78,78,0.3)'
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-xs font-medium text-white/90">{Math.round(volume * 100)}%</span>
          </motion.div>
          
          {/* Vertical slider container */}
          <div 
            className="relative bg-black/70 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
            onMouseDown={(e) => {
              e.stopPropagation();
              const track = e.currentTarget.querySelector('.volume-track') as HTMLElement;
              if (!track) return;
              
              const updateVolume = (clientY: number) => {
                const rect = track.getBoundingClientRect();
                const y = clientY - rect.top;
                const percentage = 1 - Math.max(0, Math.min(1, y / rect.height));
                setVolume(percentage);
              };
              
              updateVolume(e.clientY);
              
              const handleMouseMove = (moveEvent: MouseEvent) => {
                updateVolume(moveEvent.clientY);
              };
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              const track = e.currentTarget.querySelector('.volume-track') as HTMLElement;
              if (!track) return;
              
              const updateVolume = (clientY: number) => {
                const rect = track.getBoundingClientRect();
                const y = clientY - rect.top;
                const percentage = 1 - Math.max(0, Math.min(1, y / rect.height));
                setVolume(percentage);
              };
              
              updateVolume(e.touches[0].clientY);
              
              const handleTouchMove = (moveEvent: TouchEvent) => {
                updateVolume(moveEvent.touches[0].clientY);
              };
              
              const handleTouchEnd = () => {
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', handleTouchEnd);
              };
              
              document.addEventListener('touchmove', handleTouchMove);
              document.addEventListener('touchend', handleTouchEnd);
            }}
          >
            {/* Track background with glow */}
            <div className="volume-track relative w-2 h-24 bg-white/10 rounded-full overflow-visible">
              {/* Filled portion */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FF4E4E] to-[#FF6B6B] rounded-full pointer-events-none"
                style={{ height: `${volume * 100}%` }}
                animate={{
                  boxShadow: isPlaying 
                    ? ['0 0 8px rgba(255,78,78,0.6)', '0 0 15px rgba(255,78,78,0.8)', '0 0 8px rgba(255,78,78,0.6)']
                    : '0 0 8px rgba(255,78,78,0.6)'
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              
              {/* Thumb indicator - positioned within track */}
              <motion.div 
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#FF4E4E] shadow-[0_0_10px_rgba(255,78,78,0.8)] pointer-events-none"
                style={{ 
                  bottom: `calc(${volume * 100}% - 8px)`,
                }}
                animate={{
                  boxShadow: ['0 0 10px rgba(255,78,78,0.8)', '0 0 18px rgba(255,78,78,1)', '0 0 10px rgba(255,78,78,0.8)']
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
          
          {/* Volume icon */}
          <button 
            onClick={() => setVolume(volume === 0 ? 0.2 : 0)}
            className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF4E4E]/50 hover:shadow-[0_0_12px_rgba(255,78,78,0.4)] transition-all duration-200"
            title={volume === 0 ? "Unmute" : "Mute"}
          >
            <span className="material-symbols-outlined text-base">{getVolumeIcon()}</span>
          </button>
        </motion.div>

        {/* Frequency bars around the disc */}
        <svg
          className="absolute inset-0"
          width={discSize}
          height={discSize}
          viewBox={`0 0 ${discSize} ${discSize}`}
        >
          {frequencyData.map((value, index) => {
            const angle = (index / barCount) * Math.PI * 2 - Math.PI / 2;
            const barHeight = Math.max(2, value * maxBarHeight);
            const x1 = discSize / 2 + Math.cos(angle) * innerRadius;
            const y1 = discSize / 2 + Math.sin(angle) * innerRadius;
            const x2 = discSize / 2 + Math.cos(angle) * (innerRadius + barHeight);
            const y2 = discSize / 2 + Math.sin(angle) * (innerRadius + barHeight);
            
            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={`rgba(255, 78, 78, ${0.4 + value * 0.6})`}
                strokeWidth={3}
                strokeLinecap="round"
                style={{
                  filter: value > 0.5 ? `drop-shadow(0 0 ${value * 4}px rgba(255, 78, 78, 0.8))` : 'none',
                  transition: 'all 0.05s ease-out',
                }}
              />
            );
          })}
        </svg>
        
        {/* Main disc button */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-white/10 shadow-lg hover:shadow-[0_0_20px_rgba(255,78,78,0.4)] transition-shadow duration-300 overflow-hidden group"
          title={isPlaying ? "Pause" : "Play"}
        >
          {/* Outer ring - CD reflective effect */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-[#FF4E4E]/30 via-transparent to-[#FF4E4E]/20" />
          
          {/* Spinning disc background */}
          <motion.div
            className="absolute inset-2 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, #1a1a1a, #333, #1a1a1a, #444, #1a1a1a, #333, #1a1a1a)`,
            }}
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{
              duration: 3,
              repeat: isPlaying ? Infinity : 0,
              ease: "linear",
            }}
          >
            {/* Track grooves */}
            <div className="absolute inset-0 rounded-full opacity-30">
              <div className="absolute inset-[20%] border border-white/20 rounded-full" />
              <div className="absolute inset-[40%] border border-white/10 rounded-full" />
            </div>
          </motion.div>
          
          {/* Center content - switches between hole and song name */}
          <AnimatePresence mode="wait">
            {isPlaying ? (
              /* Center hole when playing */
              <motion.div 
                key="hole"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/20 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4E4E]/80" />
              </motion.div>
            ) : (
              /* Song name when paused */
              <motion.div 
                key="song"
                className="absolute inset-2 rounded-full flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div 
                  className="text-[6px] text-[#FF4E4E] uppercase tracking-wider font-bold mb-0.5"
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Paused
                </motion.div>
                <motion.div 
                  className="text-[5px] text-white/80 font-medium text-center px-1 leading-tight max-w-[40px] truncate"
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {songName.split(' - ')[0]}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Play/Pause icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 rounded-full">
            <span className="material-symbols-outlined text-white text-lg">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </div>
        </button>
        
        {/* Glow effect when playing */}
        {isPlaying && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#FF4E4E]/20 blur-md -z-10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
}
