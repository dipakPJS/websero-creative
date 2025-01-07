"use client";

import dynamic from "next/dynamic";

// Lazy load the EyeLottieAnimation
const EyeLottieAnimation = dynamic(
  () => import("./LottieFileComponents/EyeLottie.component"),
  { ssr: false }
);

const Preloader = () => {
  return (
    <div className="absolute inset-0 z-[99999] flex justify-center items-center bg-black">
      <EyeLottieAnimation />
    </div>
  );
};

export default Preloader;
