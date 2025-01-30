"use client";
import GradientTextComponent from "./GradientText.component";
import { motion } from "framer-motion";

// Animation Variants
const fastLoadingVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50, y: 50 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function VerticalText() {
  return (
   
    <motion.div
      variants={fastLoadingVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="h-full w-full relative p-0"
    >
      <p className=" text-center text-xs sm:text-xl md:text-xl lg-1:text-xl lg:text-xl text-white font-audioWide absolute top-[39.5%] right-[-12%]  sm:right-[-15%] md-1:right-[-13%] md:right-[-13%] lg-1:right-[-12%] lg:right-[-8%] transform rotate-90">
        Your Success, <GradientTextComponent span={true} texts="Our Mission" />
      </p>
    </motion.div>
  
  );
}
