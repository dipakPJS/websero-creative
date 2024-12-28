"use client";

import Lottie from "lottie-react";
import ErrorLottie from "../../public/lottie/404.json";
import { useCursor } from "@/context/CursorContext";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  x: number;
  y: number;
  angle: number;
}

interface ShootingStarsProps {
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = (width: number, height: number) => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * (side % 2 === 0 ? width : height);

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: width, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: height, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint(
        dimensions.width,
        dimensions.height
      );
      const newStar: ShootingStar = { x, y, angle };
      setStar(newStar);
    };

    createStar();
  }, [dimensions]);

  return (
    <svg
      ref={svgRef}
      className={cn("absolute inset-0", className)}
      width="100%"
      height="100%"
    >
      {star && (
        <line
          x1={star.x}
          y1={star.y}
          x2={star.x + starWidth}
          y2={star.y + starHeight}
          stroke={trailColor}
          strokeWidth="2"
        />
      )}
    </svg>
  );
};

export default function NotFound() {
  const { textEnter, textLeave } = useCursor();

  return (
    <div className="min-h-screen w-full bg-black relative">
      <div className="absolute z-10 h-full w-full flex justify-center items-center text-center">
        <div
          className="w-auto h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <Lottie animationData={ErrorLottie} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
