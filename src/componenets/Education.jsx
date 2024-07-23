import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

function Education() {
  return (
    <div className="border-b border-fuchia-600 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-sky-300 to-pink-950 bg-clip-text tracking-tight text-transparent"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((education, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-2 text-sm text-slate-500"
              >
                {education.year}
              </motion.p>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-l lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-slate-900">
                {education.school}
              </h6>
              <p className="mb-4 text-slate-500">{education.degree}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
