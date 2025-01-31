"use client";

import dynamic from "next/dynamic";
import { useCursor } from "@/context/CursorContext";

// Lazy-loaded components
const VerticalText = dynamic(() => import("./VerticalText.component"), {
  ssr: false,
});
const IntroComponent = dynamic(() => import("./Intro.component"), {
  ssr: false,
});
const CurveComponent = dynamic(() => import("./Curve.component"), {
  ssr: false,
});
const FeatureTextComponent = dynamic(() => import("./FeatureText.component"), {
  ssr: false,
});
const ScrollDownLottieComponent = dynamic(
  () => import("./ScrollDownLottie.component"),
  { ssr: false }
);
const SphereAnimation = dynamic(
  () => import("./LottieFileComponents/SphereLottie.component"),
  { ssr: false }
);

export default function HomePageComponent() {
  const { textLeave } = useCursor();

  return (
    <>
      <div
        onMouseEnter={textLeave}
        className="homepage relative min-h-[120vh] bg-black"
      >
        {/* homepage second starts */}
        <div className=" z-[10] homepage-second h-full w-full absolute ">
          <div className="h-full w-full relative">
            <div className=" absolute top-1/2 md:top-[70%] lg:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2
             h-[250px] w-[250px] sm:h-[300px] sm:w-[300px]
             md:h-[300px] md:w-[300px] lg-1:h-[400px] lg-1:w-[400px]
              lg:h-[500px] lg:w-[500px]">
              <SphereAnimation />
            </div>
          </div>
        </div>
        {/* homepage second ends */}
        {/* homepage third starts */}
        <div className=" z-[20] homepage-third absolute h-full w-full ">
          <div className=" flex justify-center items-center h-full w-full">
            <div className="flex flex-col lg:flex-row justify-evenly h-[90%] w-full px-10 pt-[100px] ">
              <div className=" h-full w-full md:px-[50px] md:text-center">
                <IntroComponent />
              </div>
              <div className="h-full w-full relative ">
                <FeatureTextComponent />
              </div>
            </div>
          </div>
        </div>
        {/* homepage third ends */}
        {/* homepage 4th starts */}
        <div className="homepage-4th absolute h-full w-full z-10 ">
          <div className="h-full w-full relative">
            <VerticalText />
            <div className="absolute top-[100%] md:top-[90%] lg:top-[70%] h-auto w-full flex lg:justify-end justify-center px-5">
              <ScrollDownLottieComponent />
            </div>
          </div>
        </div>
        {/* homepage 4th ends */}
      </div>
      {/* homepage section ends */}
      {/* curve starts */}
      <CurveComponent />
      {/* curve ends */}
    </>
  );
}
