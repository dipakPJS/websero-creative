"use client"
import { motion } from "framer-motion";
import PricingFilterComponent from "./PricingFilters.component";

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


export default function PricingComponent() {
  return (
    <div className=" w-full min-h-screen py-[50px]">
      
      <div className="z-10 h-full w-full relative lg:p-10 p-2">

      <motion.p
       variants={fastLoadingVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.2 }}
        className=" text-left pl-5 lg:pl-8 font-iceBerg font-bold text-white text-5xl sm:text-6xl md-1:text-7xl md:text-7xl lg-1:text-8xl lg:text-8xl uppercase"
        >
        Pricing
      </motion.p>
      <br />
      <br />
      <div className="w-full text-center h-full">
        <p className="text-white font-audioWide text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold uppercase w-full">
          Website <span className="text-purple-600">Packages</span>
        </p>
      </div>
      <div className=" mt-5 w-full min-h-screen ">
        <PricingFilterComponent />
        </div>
      </div>
    </div>
  );
}