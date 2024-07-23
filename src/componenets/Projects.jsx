import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-fuchia-600 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-sky-300 to-pink-950 bg-clip-text tracking-tight text-transparent"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                src={proj.image}
                width={150}
                height={150}
                alt={proj.title}
                className="mb-6 rounded"
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-l lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-slate-600">
                {proj.title}
              </h6>
              <p className="mb-4 text-slate-500">{proj.description}</p>
              {proj.technologies.map((tech, idx) => (
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

export default Projects;
