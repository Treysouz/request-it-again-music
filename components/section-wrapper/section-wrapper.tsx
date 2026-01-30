"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionWrapperProps {
  /**ID for section element*/
  id: string;
  /** Content to render inside the section */
  children?: ReactNode;
  /** Additional CSS classes to apply to the section */
  className?: string;
}

/** A wrapper component for the sections of the site */
export default function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="odd:bg-urban-dark even:bg-white odd:text-white even:text-black overflow-hidden scroll-mt-28 lg:scroll-mt-0"
    >
      <motion.div
        className={`w-full flex flex-col items-center text-white  ${className || ""}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
