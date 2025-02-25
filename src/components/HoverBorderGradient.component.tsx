"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FaSquareArrowUpRight } from "react-icons/fa6";


export function HoverBorderGradientComponent() {
  return (

      <HoverBorderGradient
        containerClassName="rounded-full"
        className=" text-slate-300 flex items-center  px-5 py-1"
      >
        <div className="flex gap-x-2 h-full items-center">
          <span className=" text-md sm:text-md md:text-lg lg:text-xl font-bold font-hubballi">Get Started</span>
          <FaSquareArrowUpRight className="text-xl" />
        </div>
      </HoverBorderGradient>
   
  );
}