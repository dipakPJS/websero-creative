"use client";
 
import { motion } from "motion/react";
import GradientTextComponent from "./GradientText.component";
import Image from "next/image";

 

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
        className=" z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-audioWide text-white">
          We work with clients all over the <GradientTextComponent span={true} texts="World!" />
        </motion.p>
        
      </div>
      <div className="flex justify-center items-center h-[15rem] sm:h-[25rem] md:h-[35rem] lg:h-[40rem] w-full p-2 md:p-5 lg:p-10">
      <Image 
      src="/images/world.svg"
      width={1000}
      height={1000}
      alt="linear demo image"
      className=" h-full w-full"
      
       />
       </div>
    </div>
  );
}