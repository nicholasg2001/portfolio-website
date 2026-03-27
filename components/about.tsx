"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a Forward Deployed Software Engineer at DMW&H, focused on taking complex warehouse systems from concept to production—integrating services, aligning with real workflows, and making sure everything works under real-world conditions.”
      </p>
      <p>
        When I’m not coding, I’m usually at electronic music events, in the gym, or going down a rabbit hole on military history. I’m also a big foodie and take full advantage of being in NYC to explore different cuisines.
      </p>
    </motion.section>
  );
}
