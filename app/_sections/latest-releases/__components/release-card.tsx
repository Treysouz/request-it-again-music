"use client";

import { motion } from "motion/react";

export default function ReleaseCard() {
  return (
    <motion.div
      className="carousel-item shadow even:shadow-primary odd:shadow-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <figure className="bg-white border border-secondary text-black gap-8 p-8  flex items-center justify-center flex-col">
        <div className="bg-black size-60"></div>

        <figcaption className="w-full">
          <h4 className="uppercase text-secondary font-bold text-2xl tracking-wider">
            Album Title
          </h4>
          <h5 className="text-lg font-bold tracking-wide">Tremayne Souza</h5>
          <span className="text-neutral">9/2/2025</span>
        </figcaption>
      </figure>
    </motion.div>
  );
}
