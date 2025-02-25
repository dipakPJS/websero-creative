"use client"
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { useCursor } from "@/context/CursorContext";

export function FlipWordsComponent() {
  const words = ["better", "cute", "pretty", "modern"];
  const { textEnter, textLeave } = useCursor();

  return (
    <div className="text-2xl w-full text-center lg-1:text-left lg:text-left rounded-3xl sm:text-3xl md:text-3xl lg-1:text-3xl lg:text-5xl text-balance font-audioWide text-slate-300">
      <span onMouseEnter={textEnter} onMouseLeave={textLeave}>
        Build
        <FlipWords className="text-purple-700" words={words} /> <br />
        websites with <br></br> Websero
      </span>
    </div>
  );
}