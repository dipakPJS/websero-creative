"use client";

import Lottie from "lottie-react";
import ErrorLottie from "../../public/lottie/404.json";
// import { ShootingStarsComponent } from "@/components/ShootingStars.component";
import { useCursor } from "@/context/CursorContext";

export default function NotFound() {

    const {textEnter, textLeave} = useCursor();

  return (
    <div className="min-h-screen w-full bg-black relative">
      <div className="absolute inset-0">
        {/* <ShootingStarsComponent /> */}
      </div>
      <div className="absolute z-10 h-full w-full flex justify-center items-center text-center">
        <div className="w-auto h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}>
        <Lottie animationData={ErrorLottie} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
