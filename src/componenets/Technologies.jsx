import React from "react";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiMui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { SiAzuredevops } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { motion } from "framer-motion";

const iconVariant = (duration) => ({
  initial: { y: -7 },
  animate: {
    y: [7, -7],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-fuchia-600 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-sky-300 to-pink-950 bg-clip-text tracking-tight text-transparent"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiMongodb className="text-5xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-5xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlask className="text-5xl text-slate-900" />
        </motion.div>
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineDotNet className="text-5xl text-violet-800" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMui className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="text-5xl " />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoNodejs className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAzuredevops className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FcLinux className="text-5xl text-cyan-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
