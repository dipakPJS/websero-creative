"use client";
 
import { motion } from "motion/react";
import GradientTextComponent from "./GradientText.component";

 

const fadeInDirection = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
}

export function WorldMapComponent() {
  return (
    <div className=" py-40 w-full">
      <div className="max-w-5xl mx-auto text-center pb-[100px] relative">
        <motion.p 
        initial={fadeInDirection.top.initial}
        whileInView={fadeInDirection.top.animate}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=" z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-audioWide text-white">
          We work with clients all over the <GradientTextComponent span={true} texts="World!" />
        </motion.p>
        
      </div>
 
    </div>
  );
}