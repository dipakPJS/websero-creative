"use client";
import IntroTitleComponent from "./IntroTitle.component";
import dynamic from "next/dynamic";

// loading lottie with no ssr issues

const AboutBackgroundAnimation = dynamic(
  () => import("./LottieFileComponents/AboutBackgroundLottie.component"),
  { ssr: false }
);

export default function AboutIntroComponent() {
  return (
    <div className=" bg-black flex items-center relative justify-center h-[110vh] w-full overflow-hidden px-0 lg:px-5 md:px-3 sm:px-3 py-2">
      <div className="w-full h-full absolute top-0 left-0">
        <AboutBackgroundAnimation />
      </div>

      <IntroTitleComponent />
    </div>
  );
}
