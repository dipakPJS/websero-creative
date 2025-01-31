"use client"
import { motion } from "framer-motion";
import ProcessData from "@/data/ProcessData.json";
import { MeteorsComponent } from "./Meteors.component";
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


export default function ProcessComponent() {
  return (
    <div className="w-full min-h-[100vh] pt-[50px] pb-[100px] flex flex-col items-center text-left ">
      <div className="w-full">
        <motion.p
         variants={fastLoadingVariants}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.2 }}
          className="font-audioWide text-left pl-5 lg:pl-8 text-5xl lg:text-7xl"
        >
          <GradientTextComponent texts="Process" span={true} />
        </motion.p>
      </div>

      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5 lg:gap-10 p-2 lg:p-10 place-items-center w-full">
        {ProcessData.map((item, index) => {
          return (
            <MeteorsComponent
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}