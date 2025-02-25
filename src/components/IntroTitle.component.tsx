"use client";

import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import GradientTextComponent from "./GradientText.component";

// Animation Variants
const fastLoadingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function IntroTitleComponent() {
  const { textEnter, textLeave } = useCursor();

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-10"
      style={{ boxShadow: "inset 0 0 20px 10px black" }}
      variants={fastLoadingVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative w-full h-full">
        {/* Title Section */}
        <div className="about-header h-full w-full flex justify-center items-center">
          <h1
            className="font-audioWide text-2xl sm:text-4xl md:text-5xl lg-1:text-6xl lg:text-7xl w-[60%] lg:w-[50%] text-center text-white"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            We are more than just a <GradientTextComponent texts="team" span={true} />
          </h1>
        </div>

        {/* Text Sections */}
        {[
          { text: "We are Listeners", position: "top-[20%] left-[5%] sm:left-[8%] md:left-[15%] lg:left-[20%]" },
          { text: "we are genies", position: "top-[30%] right-[5%] sm:right-[8%] md:right-[10%] lg:right-[15%]" },
          { text: "we are bunch of specialists", position: "top-[60%] sm:top-[60%] md:top-[75%] lg:top-[75%] left-[10%]" },
        ].map(({ text, position }, index) => (
          <p
            key={index}
            className={`text-lg md:text-xl lg:text-2xl font-bold absolute py-2 px-5 text-white ${position} border border-purple-600 bg-opacity-50 backdrop-blur-[15px] rounded-[50px]`}
          >
            {text}
          </p>
        ))}

        {/* Description Section */}
        <div className="absolute min-h-[120px] w-[300px] sm:w-[400px] md:w-[400px] lg:w-[500px] top-[70%] sm:top-[70%] md:top-[60%] lg:top-[65%] p-5 right-[5%] border border-purple-600 bg-opacity-50 backdrop-blur-[15px] rounded-[50px]">
          <p className="text-sm md:text-lg lg:text-xl text-white">
            We are visionaries, because we see and understand. We are creators,
            crafting more than just websites—we build experiences. We are a team
            of experts, ready to bring every idea to life with precision and care.
            We are Websero.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
