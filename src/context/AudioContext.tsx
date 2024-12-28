"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";

type AudioContextType = {
  isPlaying: boolean;
  togglePlay: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeDuration = 500; // Duration for fade in/out (in ms)
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/audio.mp3");
    audio.volume = 0;
    audio.loop = true;
    audioRef.current = audio;

    // Check if `document` is defined (only in the browser)
    if (typeof document !== "undefined") {
      // Add event listener for user interaction
      const handleUserInteraction = () => {
        setIsUserInteracted(true);
        document.removeEventListener("click", handleUserInteraction);
      };

      document.addEventListener("click", handleUserInteraction);

      // Cleanup listener on unmount
      return () => {
        document.removeEventListener("click", handleUserInteraction);
      };
    }
  }, []);

  const fadeAudio = (fadeIn: boolean) => {
    const audio = audioRef.current;
    if (audio) {
      const step = 0.01; // Step for volume adjustment
      const interval = fadeDuration / (1.0 / step); // Divide fade duration into steps
      const fade = setInterval(() => {
        if (fadeIn && audio.volume < 1.0) {
          audio.volume = Math.min(audio.volume + step, 1.0); // Increase volume to 1.0
        } else if (!fadeIn && audio.volume > 0) {
          audio.volume = Math.max(audio.volume - step, 0); // Decrease volume to 0
        } else {
          clearInterval(fade);
          if (!fadeIn) audio.pause(); // Pause audio after fade out
        }
      }, interval);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        fadeAudio(false); // Fade out and stop
      } else {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
        fadeAudio(true); // Fade in and play
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (isUserInteracted) {
      // Automatically play audio after 5 seconds of user interaction
      const autoPlayTimeout = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
          fadeAudio(true); // Fade in the audio
          setIsPlaying(true);
        }
      }, 1000);

      return () => clearTimeout(autoPlayTimeout);
    }
  }, [isUserInteracted]);

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
