"use client";

import Lottie from "lottie-react";
import SphereLottie from "../../public/lottie/sphere.json";
 

export default function SphereLottieComponent() {
    return (
   
          <Lottie
            animationData={SphereLottie}
            className="h-full w-full"
          />
    
    )
}