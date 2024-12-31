"use client";
import { useState, useEffect } from "react";
import IntroTitleComponent from "./IntroTitle.component";
import dynamic from "next/dynamic";

// Loading Lottie with no SSR issues
const AboutBackgroundAnimation = dynamic(
  () => import("./LottieFileComponents/AboutBackgroundLottie.component"),
  { ssr: false }
);

export default function AboutIntroComponent() {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

  useEffect(() => {
    // Ensure this logic only runs on the client side
    if (typeof window !== "undefined") {
      const loadAnimation = async () => {
        await new Promise<void>((resolve) => {
          // Wait for the page to fully load
          if (document.readyState === "complete") {
            resolve();
          } else {
            window.addEventListener("load", () => resolve());
          }
        });

        // Set the state to render the animation
        setIsAnimationLoaded(true);
      };

      loadAnimation();

      // Cleanup event listener
      return () => window.removeEventListener("load", loadAnimation);
    }
  }, []);

  return (
    <div className="bg-black flex items-center relative justify-center h-[110vh] w-full overflow-hidden px-0 lg:px-5 md:px-3 sm:px-3 py-2">
      <div className="w-full h-full absolute top-0 left-0">
        {/* Render Lottie animation only when it's loaded */}
        {isAnimationLoaded && <AboutBackgroundAnimation />}
      </div>
      <IntroTitleComponent />
    </div>
  );
}
