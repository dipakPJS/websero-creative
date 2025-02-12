"use client";
import { motion } from "framer-motion";

// Variants for random fade directions
const fadeInDirections = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
};

export default function FeatureTextComponent() {
  return (
    <div className=" relative h-full w-full">
      <div className="absolute h-full w-full lg:hidden">
        <div className="relative h-full w-full">
          <div className="absolute w-full h-[200px] top-[50%] flex flex-col gap-5 p-2">
            <div className="flex justify-between items-center">
              <motion.p
                initial={fadeInDirections.top.initial}
                whileInView={fadeInDirections.top.animate}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="backdrop-blur-20 text-md font-audioWide text-white px-5 md:px-10 lg-1:py-2 py-3 rounded-full border"
              >
                UI/UX Design
              </motion.p>
              <motion.p
                initial={fadeInDirections.bottom.initial}
                whileInView={fadeInDirections.bottom.animate}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="backdrop-blur-20 text-md font-audioWide text-white px-10 lg-1:py-2 py-3 rounded-full border"
              >
                Branding
              </motion.p>
            </div>
            <div className="flex justify-center">
              <motion.p
                initial={fadeInDirections.right.initial}
                whileInView={fadeInDirections.right.animate}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="backdrop-blur-20 text-md font-audioWide text-white px-5 md:px-10 lg-1:py-2  py-3 rounded-full border"
              >
                Web
              </motion.p>
            </div>
            <div className="flex justify-between items-center">
              <motion.p
                initial={fadeInDirections.left.initial}
                whileInView={fadeInDirections.left.animate}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="backdrop-blur-20 text-md font-audioWide text-white px-5 md:px-10 lg-1:py-2 py-3 rounded-full border"
              >
                SMM
              </motion.p>
              <motion.p
                initial={fadeInDirections.top.initial}
                whileInView={fadeInDirections.top.animate}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="backdrop-blur-20 text-md font-audioWide text-white px-5 md:px-10 lg-1:py-2 py-3 rounded-full border"
              >
                Chatbot
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-full w-full hidden lg:block">
        <div className="relative h-full w-full">
          <motion.p
            initial={fadeInDirections.top.initial}
            whileInView={fadeInDirections.top.animate}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bg-[#000000ab] top-[60%] left-[0%] sm:top-[60%] sm:left-[10%]
        md:top-[60%] md:left-[10%] lg:left-[30%] lg:top-[0%] lg-1:left-[25%] border
        border-white text-sm sm:text-lg md:font-bold md:text-xl lg:text-3xl 
        font-extralight text-slate-300 rounded-[100px] min-w-[100px] sm:w-[150px] md:w-[190px] lg:w-[200px] text-center backdrop-blur-20 p-1 py-2 md:p-2 lg:p-2 "
          >
            UI/UX Design
          </motion.p>
          <motion.p
            initial={fadeInDirections.bottom.initial}
            whileInView={fadeInDirections.bottom.animate}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bg-[#000000ab] top-[60%] right-[0%] sm:top-[60%] sm:left-[65%]
        md:top-[60%] md:left-[65%] lg:left-[43%] lg:top-[15%] lg-1:left-[36%] border
        border-white text-sm sm:text-lg md:font-bold md:text-xl lg:text-3xl 
        font-extralight text-slate-300 rounded-[100px] min-w-[100px] sm:w-[150px] md:w-[190px] lg:w-[200px] text-center backdrop-blur-20 p-1  py-2 md:p-2 lg:p-2"
          >
            Branding
          </motion.p>
          <motion.p
            initial={fadeInDirections.right.initial}
            whileInView={fadeInDirections.right.animate}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bg-[#000000ab] top-[80%] left-[30%] sm:top-[80%] sm:left-[37.5%] md:top-[80%] md:left-[39%] lg:left-[56%] lg:top-[30%] lg-1:left-[51%] border
          border-white text-sm sm:text-lg md:font-bold md:text-xl lg:text-3xl 
          font-extralight text-slate-300 rounded-[100px] min-w-[100px] sm:w-[150px] md:w-[190px] lg:w-[200px] text-center backdrop-blur-20 p-1  py-2 md:p-2 lg:p-2"
          >
            Web
          </motion.p>
          <motion.p
            initial={fadeInDirections.left.initial}
            whileInView={fadeInDirections.left.animate}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bg-[#000000ab] top-[100%] left-[0%] sm:top-[100%] sm:left-[10%] md:top-[100%] md:left-[10%] lg:left-[43%] lg:top-[45%] lg-1:left-[35%] border
          border-white text-sm sm:text-lg md:font-bold md:text-xl lg:text-3xl 
          font-extralight text-slate-300 rounded-[100px] min-w-[100px] sm:w-[150px] md:w-[190px] lg:w-[200px] text-center backdrop-blur-20 p-1  py-2 md:p-2 lg:p-2"
          >
            SMM
          </motion.p>
          <motion.p
            initial={fadeInDirections.top.initial}
            whileInView={fadeInDirections.top.animate}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bg-[#000000ab] top-[100%] right-[0%] sm:top-[100%] sm:left-[62%] md:top-[100%] md:left-[65%] lg:left-[30%] lg:top-[60%] lg-1:left-[25%] border
          border-white text-sm sm:text-lg md:font-bold md:text-xl lg:text-3xl 
          font-extralight text-slate-300 rounded-[100px] min-w-[100px] sm:w-[150px] md:w-[190px] lg:w-[200px] text-center backdrop-blur-20 p-1  py-2 md:p-2 lg:p-2"
          >
            Chatbot
          </motion.p>
        </div>
      </div>
    </div>
  );
}
