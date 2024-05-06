import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BeeEnrolled from "@/public/BeeEnrolled.png"
import QuickPrompts from "@/public/QuickPrompts.png";
import AIPDF from "@/public/AIPDF.png"
import Discord from "@/public/discord.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.S. Computer Science",
    location: "Farmingdale State College",
    description:
      "Coursework: Object-Oriented Programming, Software Engineering, AI & Machine Learning, Data Structures & Algorithms",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Co-Technical Lead",
    location: "Google Student Developer Club",
    description:
      "Assisted in the creation and preparation of technical workshops and student events.",
    icon: React.createElement(FaGoogle),
    date: "Sep 2023 - Present",
  },
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description:
      "Actively working on developing an E-Learning provider equipped with powerful AI tools for teachers and tutors to leverage to augment their workflow.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "BeeEnrolled",
    description:
      "I'm currently interning as a full-stack developer working on building an E-learning platform with powerful AI tools for teachers and tutors.",
    tags: ["Vue", "Tailwind", "Laravel", "PHP", "MySQL", "OpenAI", "daisyUI", "Figma"],
    imageUrl: BeeEnrolled,
  },
  {
    title: "AI PDF Analyzer",
    description:
      "A public web app that analyzes user submitted PDFs via the RAG technique and cosine similarity. This is still an active work in progress.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Pinecone", "OpenAI"],
    imageUrl: AIPDF,
  },
  {
    title: "QuickPrompts",
    description:
      "A public web app for AI prompt sharing. Has full CRUD functionality and a search feature including search by content and tag.",
    tags: ["React", "JavaScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: QuickPrompts,
  },
  {
    title: "LangBot",
    description:
      "A discord bot that leverages multiple language related APIs for commands pertaining to language translation, dictionary functions, and thesaurus functions.",
    tags: ["JavaScript", "Node.js", "Docker", "Heroku"],
    imageUrl: Discord,
  },
  {
    title: "MP3 Player",
    description:
      "A multithreaded JavaFX desktop GUI application that allows users full media controls with their MP3 files, store playlist metadata to a JSON file, and more."
    tags:["Java", "SQL", "Multithreading"],
    imageUrl: 
  }
] as const;

export const skillsData = [
  "CSS",
  "Express",
  "Docker",
  "Firebase",
  "Git",
  "Google Cloud Platform",
  "HTML",
  "Java",
  "JavaScript",
  "Jetpack Compose",
  "Kotlin",
  "MongoDB",
  "MySQL",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
  "React",
  "Redux",
  "Tailwind",
  "TypeScript",
  "Vue.js",
] as const;

