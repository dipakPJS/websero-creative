"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook, FiLinkedin, FiInstagram  } from "react-icons/fi";
import GradientTextComponent from "./GradientText.component";
 

const navVariants = {
  hidden: {
    clipPath: "circle(0% at 100% 0%)",
  },
  visible: {
    clipPath: "circle(150% at 50% 50%)",
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  },
  exit: {
    clipPath: "circle(0% at 100% 0%)",
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const buttonTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const FullPageNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);
 
  return (
    
    <>
      {/* Toggle Button */}
      <div className="fixed top-0 right-0 w-auto p-5 z-[700] flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-black border border-[#9430ff] text-sm md:text-lg font-audioWide font-extrabold focus:outline-none h-14 w-14 md:h-[70px] md:w-[70px] lg:h-[80px] lg:w-[80px] rounded-full flex justify-center items-center shadow-inner"
          style={{
            boxShadow: "inset 0 0 3px 2px #9430ff",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "Close" : "Menu"}
              variants={buttonTextVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="block"
            >
              {isOpen ? "Close" : "Menu"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariants}
            className="fixed inset-0 z-[600] bg-[#000000cc] backdrop-blur-20"
            style={{ overflow: "hidden" }}
          >
            {/* Logo */}
            <div className="p-5 flex lg:justify-center lg:items-center items-start ">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  alt="Logo"
                  src="/images/logo.png"
                  width={100}
                  height={100}
                  className="mx-auto h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center lg:justify-between lg:items-start h-full  ">
              <motion.nav
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-wrap w-full lg:w-[90%] mx-auto lg:pt-[50px] py-5 items-center justify-center gap-5"
              >
                {["Home", "About", "Services", "Work", "Contact"].map(
                  (label, index) => (
                    <motion.div
                      key={label}
                      variants={linkVariants}
                      transition={{ delay: index * 0.1 }}
                      className=" p-2 px-10 border-2 rounded-full transition duration-1000 ease-in-out text-white border-white  hover:bg-white hover:text-black"
                    >
                      <Link
                    
                        href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                        onClick={handleLinkClick}
                        className="text-4xl sm:text-6xl md:text-7xl lg-1:text-7xl lg:text-8xl font-audioWide "
                      >
                        {label}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>

              {/* Social Links */}
              <div className=" flex flex-col items-center gap-6  w-full h-full p-5 lg:pt-[50px]">
                <ul className="flex gap-8">
                  {[
                    {
                      href: "https://www.facebook.com/dipak.light.roshni.diyo",
                      icon: <FiFacebook />,
                      color: "hover:text-blue-700",
                    },
                    {
                      href: "https://www.instagram.com/diwakar_codess/",
                      icon: <FiInstagram />,
                      color: "hover:text-pink-500",
                    },
                    {
                      href: "https://x.com/DeepakP18273070",
                      icon: <BsTwitterX />,
                      color: "hover:text-blue-400",
                    },
                    {
                      href: "https://www.linkedin.com/in/dipak-developer/",
                      icon: <FiLinkedin />,
                      color: "hover:text-sky-500",
                    },
                  ].map(({ href, icon, color }, idx) => (
                    <li key={idx}>
                      <a
                        href={href}
                        target="_blank"
                        className={`text-4xl text-white md:text-5xl ${color} transform hover:scale-125 duration-200 font-`}
                        rel="noreferrer"
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className=" text-center">
                   <GradientTextComponent span={false} texts="info@websero.com" classNames="text-xl" />
                  <code><GradientTextComponent span={true} texts="+977 - 986 721 6630" classNames="text-xl" /></code>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullPageNav;
