"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import GradientTextComponent from "./GradientText.component";

export default function AboutIntroParaComponent() {
  return (
    <div className="min-h-[70vh] w-full px-2 lg:px-5 py-[50px] overflow-y-hidden relative flex flex-col justify-center items-center">
      {/* title text */}
      <motion.p
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full"
      >
        <GradientTextComponent
          span={true}
          texts="What we do"
          classNames="mb-[100px] uppercase font-audioWide text-4xl font-bold block md:hidden lg:hidden text-center"
        />
      </motion.p>

<div className="flex justify-center flex-col md:flex-row lg:flex-row h-full w-full gap-10">

      {/* First Block */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="shadow-[0_0_20px_blue] w-full md:w-[500px] lg:w-[700px] h-auto text-balance p-5 border border-white rounded-[50px]"
      >
        <div className="  text-white text-base sm:text-lg md:text-xl lg:text-2xl font-eagleLake ">
          <p>
            For us, it&lsquo;s all about creating meaningful experiences that
            resonate with your audience and help your business grow. We make our
            mark by creating unique branding, designing beautiful websites, and
            boosting visibility through SEO and PPC strategies that drive real
            growth.
          </p>
        </div>
      </motion.div>

      {/* Second Block */}
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="shadow-[0_0_20px_blue] w-full md:w-[500px] lg:w-[700px] h-auto text-balance p-5 border border-white rounded-[50px]"
        >
        <div className=" text-white text-base sm:text-lg md:text-xl lg:text-2xl font-eagleLake">
          <p>
            Our process begins with understanding your vision, goals, and
            challenges. Whether you&lsquo;re a startup making your mark or an
            established business expanding online, we dive deep into your needs.
            Then, we craft a custom approach that combines creativity and
            strategy to ensure your brand shines and your website excels.
          </p>
        </div>
      </motion.div>
    </div>
        </div>
  );
}
