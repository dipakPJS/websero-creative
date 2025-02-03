"use client";

import GradientTextComponent from "./GradientText.component";

 

interface ParallaxText {
  title: string;
  description: string;
}
 

const colors: string[] = ["#706fd3", "#8e44ad", "#3498db"]; 

export default function ServiceParallaxComponent({
  title,
  description,
}: ParallaxText) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
 
  return (
    <div
      className="flex flex-col items-center text-center gap-4 p-6 rounded-[40px] text-slate-400
         transition duration-300 w-full bg-black"
      style={{
        boxShadow: `0 0 10px 2px ${randomColor}`,
        
      }}
       
    >
      <h2 className=" text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-audioWide"><GradientTextComponent span={true} texts={title} /></h2>
      <p className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{description}</p>
    </div>
  );
}