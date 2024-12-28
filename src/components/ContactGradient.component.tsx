"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { CoverComponent } from "./Cover.component";

// loading lottie with no ssr issues

import dynamic from "next/dynamic";

const BackgroundAnimation = dynamic(() => import("./LottieFileComponents/BackgroundLottie.component"), { ssr: false });


export default function ContactGradientComponent() {
  return (
    <div className=" h-[42rem] w-full overflow-hidden relative">

     <div className="absolute h-full w-full z-10 bg-[#00000021] backdrop-blur-20">
 <div className="py-[50px] h-full w-full">
 <div className="w-full">
        <motion.p
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="font-audioWide pl-8 font-bold text-white text-4xl sm:text-4xl md-1:text-5xl md:text-6xl lg-1:text-7xl lg:text-8xl uppercase"
        >
          Contact
        </motion.p>
      </div>
  <div className="h-full w-full flex items-start justify-center text-center">
  <CoverComponent />
  </div>
 </div>
     </div>

      {/* lottie background */}
      <div className="absolute h-full w-full">
        <BackgroundAnimation />
      </div>
    </div>
  );
}
