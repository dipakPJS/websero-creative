"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

const TextScrollComponent = React.memo(() => {
  const { textEnter, textLeave } = useCursor();

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Transforms for text motion
  const x1 = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-40%", "30%"]);

  const text = "What We D0";
  const textArray = Array.from(text); // Avoid redundant .split() calls in map

  return (
    <div
      ref={targetRef}
      className="h-[300vh] hidden lg:block"
    >
      <div className="relative h-full w-full">
        <div className="sticky top-0 h-screen w-[100vw] items-center overflow-hidden ">
          <div className="w-full h-full flex ">
            {/* First layer of text */}
            <motion.div
              style={{ x: x1 }}
              className="absolute top-[60%] flex gap-x-[5px] md:gap-x-[10px] lg:gap-x-[20px]"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {textArray.map((char, index) => (
                <p
                  key={`layer1-${index}`}
                  className="text-[70px] lg-1:text-[180px] lg:text-[150px] font-audioWide font-extrabold text-slate-300"
                >
                  {char}
                </p>
              ))}
            </motion.div>

            {/* Second layer of text */}
            <motion.div
              style={{ x: x2 }}
              className="absolute top-[30%] flex gap-x-[5px] md:gap-x-[10px] lg:gap-x-[20px]"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {textArray.map((char, index) => (
                <p
                  key={`layer2-${index}`}
                  className="text-[70px] lg-1:text-[180px] lg:text-[150px] font-audioWide font-extrabold text-slate-300 "
                >
                  {char}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Add display name for the memoized component
TextScrollComponent.displayName = "TextScrollComponent";

export default TextScrollComponent;
