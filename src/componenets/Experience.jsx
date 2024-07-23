import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-fuchia-600 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-sky-300 to-pink-950 bg-clip-text tracking-tight text-transparent"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-2 text-sm text-slate-500"
              >
                {experience.year}
              </motion.p>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-l lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-slate-700 ">
                {experience.role} -{" "}
                <span className="text-sm text-teal-500">
                  {experience.company}
                </span>
              </h6>
              <div className="mb-4 text-slate-500">
                {experience.description.split("•").map((line, index) => (
                  <p key={index} className="mb-2">
                    {line.trim() && `• ${line.trim()}`}
                  </p>
                ))}
              </div>
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="mr-2 mt-4 rounded bg-amber-50 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
