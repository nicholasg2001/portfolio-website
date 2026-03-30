"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import ConveyorBelt from "./conveyor-belt";

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
      I build and deploy WCS and WMS systems. At DMW&H, that means working hands-on with customers, translating messy operational workflows into reliable software, and owning the system all the way through integration and go-live.      </p>
      <p>
        When I’m not coding, I’m usually at live music events, in the gym, or going down a rabbit hole on Youtube about anything really. I’m also a big foodie and take full advantage of being in NYC to explore different cuisines.
      </p>
      <ConveyorBelt />
    </motion.section>
  );
}
