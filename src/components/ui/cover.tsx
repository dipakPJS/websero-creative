"use client";

import React, { useId, useState, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";

export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const containerSize = useMemo(() => {
    const element = ref.current;
    return element
      ? { width: element.clientWidth, height: element.clientHeight }
      : { width: 0, height: 0 };
  }, [ref.current]);

  const beamPositions = useMemo(() => {
    const { height } = containerSize;
    const numberOfBeams = Math.floor(height / 10); // Adjust the divisor to control spacing
    return Array.from(
      { length: numberOfBeams },
      (_, i) => (i + 1) * (height / (numberOfBeams + 1))
    );
  }, [containerSize]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={ref}
      className={cn(
        "relative hover:bg-black bg-[#6a066d79] mt-[-10px] overflow-hidden shadow-custom backdrop-blur-20 group/cover inline-block px-[50px] transition duration-200 rounded-tr-[50px] rounded-2xl rounded-bl-[50px]",
        className
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={{ translateX: ["-50%", "0%"] }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
              className="w-[200%] h-full flex"
            >
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <SparklesCore
                    key={i}
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={500}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                  />
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {beamPositions.map((position, index) => (
        <Beam
          key={index}
          hovered={hovered}
          duration={Math.random() * 2 + 1}
          delay={Math.random() * 2 + 1}
          width={containerSize.width}
          style={{ top: `${position}px` }}
        />
      ))}

      <motion.span
        key={String(hovered)}
        animate={{
          scale: hovered ? 0.8 : 1,
          x: hovered ? [0, -30, 30, -30, 30, 0] : 0,
          y: hovered ? [0, 30, -30, 30, -30, 0] : 0,
        }}
        transition={{
          duration: 0.2,
          x: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
          y: { duration: 0.2, repeat: Infinity, repeatType: "loop" },
        }}
        className="inline-block text-slate-200 relative z-20 transition duration-300"
      >
        {children}
      </motion.span>
    </div>
  );
};

export const Beam = ({
  className,
  delay,
  duration,
  hovered,
  width = 600,
  ...svgProps
}: {
  className?: string;
  delay?: number;
  duration?: number;
  hovered?: boolean;
  width?: number;
} & React.ComponentProps<typeof motion.svg>) => {
  const id = useId();

  return (
    <motion.svg
      width={width}
      height="1"
      viewBox={`0 0 ${width} 1`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-x-0 w-full", className)}
      {...svgProps}
    >
      <motion.path
        d={`M0 0.5H${width}`}
        stroke={`url(#svgGradient-${id})`}
      />
      <defs>
        <motion.linearGradient
          id={`svgGradient-${id}`}
          key={String(hovered)}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: "0%", x2: "-5%", y1: 0, y2: 0 }}
          animate={{ x1: "110%", x2: hovered ? "100%" : "105%", y1: 0, y2: 0 }}
          transition={{
            duration: hovered ? 0.5 : duration,
            ease: "linear",
            repeat: Infinity,
            delay: hovered ? Math.random() * 0.8 + 0.2 : delay,
          }}
        >
          <stop stopColor="#2EB9DF" stopOpacity="0" />
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};
