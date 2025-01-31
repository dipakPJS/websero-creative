"use client"
import { motion } from "framer-motion";
import { WobbleCardComponent } from "./WobbleCard.component";
import GradientTextComponent from "./GradientText.component";

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


export default function AchievementsComponent() {
  return (
    <div className="w-full min-h-[170vh]">
      <div className="z-10 relative  py-[50px] h-full w-full">
        <motion.p
        variants={fastLoadingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
          className=" text-left pl-5 lg:pl-8 font-audioWide z-[100] text-5xl lg:text-7xl"
        >
 <GradientTextComponent texts="Success" span={true} />
        </motion.p>
        <div className="w-full mt-[100px]">
          <WobbleCardComponent />
        </div>
      </div>
    </div>
  );
}