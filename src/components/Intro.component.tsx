"use client"


import { FlipWordsComponent } from "./FlipWords.component";
import { HoverBorderGradientComponent } from "./HoverBorderGradient.component";
import {motion} from "framer-motion";

// Animation Variants
const fastLoadingVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function IntroComponent() {
  return (
    <motion.div className="flex flex-col gap-[50px] text-center"
    variants={fastLoadingVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:text-center w-[80%] lg:w-[65%] mx-auto lg:mx-0">
        <FlipWordsComponent />
        <p className=" text-center lg-1:text-left lg:text-left mt-[5px] lg-1:mt-[20px] lg:mt-[20px] text-sm md:text-xl lg-1:text-2xl lg:text-3xl font-bold  text-slate-400 w-full">
          Enhancing Your Online Presence – Distinguish Yourself on the Web and
          Attract Potential Clients
        </p>
      </div>

      <HoverBorderGradientComponent />
    </motion.div>
  );
}