import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaProvider } from "../../context/EmblaContext";

import "./embla.styles.css";
import data from "../../data/WorkData.json";
import Image from "next/image";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import EmblaControls from "./EmblaControls.component";

// Type definition for WorkData
type WorkDataType = {
  image: string;
  title: string;
  link: string;
  tags: string[];
}[];

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
  const [Autoplay, setAutoplay] = useState<any>(null); // State to hold Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(options, Autoplay ? [Autoplay()] : []);

  useEffect(() => {
    // Dynamically import Autoplay only on the client side
    (async () => {
      if (typeof window !== "undefined") {
        const { default: autoplay } = await import("embla-carousel-autoplay");
        setAutoplay(() => autoplay);
      }
    })();
  }, []);

  return (
    <EmblaProvider emblaApi={emblaApi}>
      <section className="embla pb-[100px]">
        <EmblaControls />
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {(data as WorkDataType).map((item, idx) => (
              <div
                className="embla__slide flex-none w-full lg:w-1/3 md:w-3/4 sm:w-full"
                key={`slide-${idx}`}
              >
                <div className="relative group rounded-[50px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="responsive"
                    loading="lazy"
                    width={500}
                    height={300}
                    className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-500"
                  >
                    <button className="p-10 rounded-full bg-[#8200cdce] shadow-lg">
                      <CgArrowsExpandUpRight className="text-yellow-500 scale-150" />
                    </button>
                  </a>
                </div>
                <div className="text-left">
                  <p className="text-3xl font-iceBerg font-extrabold py-5 pl-3">
                    {item.title}
                  </p>
                </div>
                <div className="tags flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={`tag-${tagIdx}`}
                      className="py-1 px-3 border border-black rounded-full text-sm font-iceBerg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </EmblaProvider>
  );
};

export default EmblaCarousel;
