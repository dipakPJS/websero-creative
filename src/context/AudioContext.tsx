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
  const fadeDuration = 1000; // Duration for fade in/out (in ms)

  useEffect(() => {
    const audio = new Audio("/music/audio.mp3");
    audio.volume = 0;
    audio.loop = true;
    audioRef.current = audio;

    const playAudio = async () => {
      try {
        await audio.play();
        fadeAudio(true); // Fade in the audio
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    };

    // Automatically attempt to play audio after 2 seconds
    const autoPlayTimeout = setTimeout(() => {
      playAudio();
    }, 5000);

    return () => {
      clearTimeout(autoPlayTimeout); // Cleanup timeout
      audioRef.current?.pause(); // Stop playback on unmount
      audioRef.current = null; // Release audio reference
    };
  }, []);

  const fadeAudio = (fadeIn: boolean) => {
    const audio = audioRef.current;
    if (audio) {
      const step = 0.01; // Step for volume adjustment
      const intervalTime = fadeDuration / (1.0 / step); // Time per step

      const fade = setInterval(() => {
        if (fadeIn && audio.volume < 1.0) {
          audio.volume = Math.min(audio.volume + step, 1.0); // Increase volume to 1.0
        } else if (!fadeIn && audio.volume > 0) {
          audio.volume = Math.max(audio.volume - step, 0); // Decrease volume to 0
        } else {
          clearInterval(fade);
          if (!fadeIn) audio.pause(); // Pause audio after fade out
        }
      }, intervalTime);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        fadeAudio(false); // Fade out and stop
      } else {
        audio.play().catch((error) => console.error("Audio playback error:", error));
        fadeAudio(true); // Fade in and play
      }
      setIsPlaying(!isPlaying);
    }
  };

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
