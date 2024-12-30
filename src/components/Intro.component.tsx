"use client"
import { FlipWordsComponent } from "./FlipWords.component";
import { HoverBorderGradientComponent } from "./HoverBorderGradient.component";

export default function IntroComponent() {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col md:text-center w-full  ">
        <FlipWordsComponent />
        <p className=" text-center lg-1:text-left lg:text-left mt-[30px] lg-1:mt-[20px] lg:mt-[20px] text-md md:text-4xl lg:text-3xl font-bold  text-slate-300 lg-1:w-[80%] lg:w-[80%]">
          Enhancing Your Online Presence – Distinguish Yourself on the Web and
          Attract Potential Clients
        </p>
      </div>

      <HoverBorderGradientComponent />
    </div>
  );
}