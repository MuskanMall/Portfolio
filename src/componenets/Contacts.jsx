import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

function Contacts() {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      className="border-b border-neutral-300 pb-20 text-center"
    >
      <h1 className="my-10 text-4xl bg-gradient-to-r from-pink-300 via-sky-300 to-pink-950 bg-clip-text tracking-tight text-transparent">
        Get In Touch
      </h1>
      <div className="tracking-tighter">
        <p className="my-4 text-slate-500">{CONTACT.address}</p>
        <p className="my-4 text-slate-500">{CONTACT.phoneNo}</p>
        <a href={CONTACT.email} className="border-b text-slate-500">
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
}

export default Contacts;
