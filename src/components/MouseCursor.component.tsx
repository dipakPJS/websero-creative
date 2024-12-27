"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "../context/CursorContext"; // Update path if necessary
import { useEffect } from "react";

export default function MouseCursorComponent() {
  const { cursorVariant, variants } = useCursor();

  // Set up motion values for cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring animation for smooth movement
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const variant = variants[cursorVariant];
      const offset = variant ? variant.height / 2 : 15; // Dynamic offset based on size

      mouseX.set(e.clientX - offset);
      mouseY.set(e.clientY - offset);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorVariant, mouseX, mouseY, variants]);

  return (
    <motion.div
      className="bg-white rounded-full fixed top-0 left-0 pointer-events-none z-[500] mix-blend-difference"
      animate={{
        height: variants[cursorVariant].height,
        width: variants[cursorVariant].width,
        transition: variants[cursorVariant].transition,
      }}
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
