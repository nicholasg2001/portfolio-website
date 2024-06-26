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
        I'm currently a senior at Farmingdale State College studying{" "}
        <span className="font-medium">Computer Science</span>. I am currently interning at an E-Learning provider startup company called BeeEnrolled. During my time
        there I have been focused on full stack development using technologies such as Laravel, Vue, and MySQL.
      </p>

      <p>
        When I'm not coding, I enjoy attending electronic music events, going to the gym, and learning about military history. I'm also a huge
        foodie and love to take advantage of my close proximity to NYC to try out different cultural cuisines.
      </p>
    </motion.section>
  );
}
