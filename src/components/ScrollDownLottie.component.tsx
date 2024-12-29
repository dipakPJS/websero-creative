"use client";

// loading lottie with no ssr issues

import dynamic from "next/dynamic";

const ScrollDownAnimation = dynamic(
  () => import("./LottieFileComponents/ScrollDownLottie.component"),
  { ssr: false }
);

export default function ScrollDownLottieComponent() {
  return (
    <div className="absolute cursor-pointer top-[75%] h-auto w-full flex justify-center md:justify-end lg:justify-end px-[50px]">
      <a href="#work">
        <ScrollDownAnimation />
      </a>
    </div>
  );
}
