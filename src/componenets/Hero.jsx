import React from "react";
import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/muskP.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-fuchia-600 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-center lg:items-center">
        <div className="flex justify-center lg:w-1/2 lg:p-8">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="rounded-full w-80 h-80"
            src={ProfilePic}
            alt="Muskan Mall Profile Picture"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-6xl font-thin text-amber-500 tracking-tight lg:text-8xl"
          >
            Muskan Mall
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text bg-clip-text tracking-tight text-transparent text-3xl mt-4"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light text-slate-500 tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
