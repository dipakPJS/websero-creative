"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

interface Prices {
    id: number;
    title: string;
    price: string;
    description: string;
    pages: string;
    duration: string;
    additional: string[];
  }
  

export function GlowingStarsCardBackgroundComponent(items: Prices) {

    const { title, description, price, pages, duration, additional } = items;

  return (
    <div className="min-h-[4orem] flex py-20 items-center justify-center antialiased relative">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
           {description}
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
