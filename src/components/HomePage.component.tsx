"use client";
import "./HomePageComponent.styles.css";

import ScrollDownLottieComponent from "./ScrollDownLottie.component";
import VerticalText from "./VerticalText.component";
import IntroComponent from "./Intro.component";
import CurveComponent from "./Curve.component";
import FeatureTextComponent from "./FeatureText.component";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import { useCursor } from "@/context/CursorContext";
import { ShootingStarsComponent } from "./ShootingStars.component";
import SphereLottieComponent from "./SphereLottie.component";
import { useEffect } from "react";
 
 

export default function HomePageComponent() {
  const { textLeave } = useCursor();
 

  return (
    <>
      <div onMouseEnter={textLeave} className="homepage relative h-[110vh]">
        {/* homepage first starts */}
        <div className="homepage-first absolute h-full w-full">
          <ShootingStarsComponent />
        </div>
        {/* homepage first ends */}

        {/* homepage second starts */}
        <div className=" z-[10] homepage-second absolute h-full w-full flex justify-center items-end lg:items-center">
          <div className=" h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[500px] md:w-[500px] lg-1:h-[500px] lg-1:w-[500px] lg:h-[500px] lg:w-[500px] transform rotate-[20deg]">
            <SphereLottieComponent />
          </div>
        </div>
        {/* homepage second ends */}
        {/* homepage third starts */}
        <div className=" z-[20] homepage-third absolute h-full w-full ">
          <div className=" flex justify-center items-center h-full w-full">
            <div className="flex flex-col lg:flex-row justify-evenly h-[90%] w-full px-10 pt-[100px] ">
              <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className=" h-full w-full md:px-[50px] pt-10 md:text-center"
              >
                <IntroComponent />
              </motion.div>
              <div className="h-full w-full relative ">
                <FeatureTextComponent />
                <ScrollDownLottieComponent />
              </div>
            </div>
          </div>
        </div>
        {/* homepage third ends */}
        {/* homepage 4th starts */}
        <div className="homepage-4th absolute h-full w-full z-10 ">
          <div className="h-full w-full relative">
            <VerticalText />
          </div>
        </div>
        {/* homepage 4th ends */}
      </div>
      {/* homepage section ends */}
      {/* curve starts */}
      <CurveComponent />
      {/* curve ends */}
    </>
  );
}
