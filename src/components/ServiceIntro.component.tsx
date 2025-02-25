"use client";

import { useCursor } from "@/context/CursorContext";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GradientTextComponent from "./GradientText.component";

const MarketingAnimation = dynamic(() => import("./LottieFileComponents/MarketingLottie.component"), {
  ssr: false,
});

const fastLoadingVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServiceIntroComponent() {
  const { textEnter, textLeave } = useCursor();

  return (
    <div
      className="min-h-[100vh] flex flex-col items-center justify-center p-6 "
      style={{ overflow: "visible" }}
    >
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-8">
        <motion.div
          variants={fastLoadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 relative text-center lg:text-left"
        >
          <h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="font-audioWide text-5xl lg:text-7xl "
          >
            Our <GradientTextComponent texts="Services" span={true} />
          </h2>
          <p className="mt-4 text-base md:text-3xl lg-1:text-4xl lg:text-4xl font-bold text-slate-400">
            Our creative team of branding, web design, web development, and marketing experts care about your project,
            almost as much as you do!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 relative h-64 md:h-[300px] lg:h-[400px]"
        >
          <div className="w-full h-auto">
            <MarketingAnimation />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
