"use client"
import React from "react";
import Link from "next/link";
import GradientTextComponent from "./GradientText.component";
import { useCursor } from "@/context/CursorContext";

export function CoverComponent() {
  const {textEnter, textLeave} = useCursor();
  return (
    <div className="pointer-events-auto">
      <h1 className="text-white flex flex-col  text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-hubballi font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 ">
        Let&lsquo;s Get 
        <Link
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        onClick={textLeave}
        href={"/contact"} className="backdrop-blur-20 rounded-full mt-2 p-10 sm:p-11 md:p-14 lg:p-14 sm:mt-5 md:mt-5 lg:mt-5 bg-gradient-to-br from-[#632289] via-[#000000ae] to-[#0008a461]">
          <GradientTextComponent span={true} texts="Started!" />
        </Link>
      </h1>
    </div>
  );
}