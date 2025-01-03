"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

interface EmblaContextType {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}

const EmblaContext = createContext<EmblaContextType | undefined>(undefined);

const useEmbla = (emblaApi: EmblaCarouselType | undefined): EmblaContextType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Stop autoplay functionality
  const stopAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (autoplay) autoplay.stop();
  }, [emblaApi]);

  // Scroll to previous slide
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    stopAutoplay(); // Stop autoplay when previous button is clicked
  }, [emblaApi, stopAutoplay]);

  // Scroll to next slide
  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    stopAutoplay(); // Stop autoplay when next button is clicked
  }, [emblaApi, stopAutoplay]);

  // Update button states
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  // Listen for Embla events
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Set initial button states
    emblaApi.on("reInit", onSelect).on("select", onSelect); // Recalculate button states on re-init or selection
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const EmblaProvider: React.FC<{
  children: React.ReactNode;
  emblaApi: EmblaCarouselType | undefined;
}> = ({ children, emblaApi }) => {
  const value = useEmbla(emblaApi);
  return <EmblaContext.Provider value={value}>{children}</EmblaContext.Provider>;
};

export const useEmblaContext = (): EmblaContextType => {
  const context = useContext(EmblaContext);
  if (!context) {
    throw new Error("useEmblaContext must be used within an EmblaProvider");
  }
  return context;
};
