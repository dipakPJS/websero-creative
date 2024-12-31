"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import ServiceParallaxComponent from "@/components/ServiceParallax.component";
import ServiceData from "@/data/ServicePageData.json";

export default function ServicesListComponent() {
  // Framer Motion hook for scroll progress
  const { scrollYProgress } = useScroll(); // Tracks vertical scroll position as 0 to 1
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 0.6]); // Map scroll to scale (1 -> zoom-out)

  return (
    <div className="w-full min-h-screen relative py-10 flex flex-col items-center justify-start">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
        {ServiceData.map(({ id, title, description }, index) => (
          <motion.div
            key={id}
            className="relative w-full md:w-[30rem] lg:w-[50rem] pt-[100px] px-2 sm:pt-[130px] mt:pt-[150px] lg:pt-[200px]"
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            style={{
              position: "sticky",
              top: "20px",  
              zIndex: ServiceData.length + index,  
              scale, 
            }}
          >
            <motion.div
              style={{ scale }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <ServiceParallaxComponent title={title} description={description} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}