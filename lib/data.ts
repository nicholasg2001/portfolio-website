import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCertificate, FaGoogle } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BeeEnrolled from "@/public/BeeEnrolled.png"
import QuickPrompts from "@/public/QuickPrompts.png";
import AIPDF from "@/public/AIPDF.png"
import Discord from "@/public/discord.png"
import Oyster from "@/public/Oyster.png"

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
    location: "Google Student Developer Club, FSC",
    description:
      "Assisted in the creation and preparation of technical workshops and student events.",
    icon: React.createElement(FaGoogle),
    date: "Sep 2023 - May 2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Remote",
    description:
      "Developed an E-Learning provider equipped with powerful AI tools for teachers and tutors to leverage to augment their workflow.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Sep 2024",
  },
  {
    title: "CodePath TIP102 Student",
    location: "Remote",
    description:
      "Intermediate technical interview prep course. Focused on applying data structures and algorithms to solving technical interview problems.",
    icon: React.createElement(FaCertificate),
    date: "Jun 2024 - Aug 2024"
  },
  {
    title: "Software Engineer",
    location: "Fairfield, NJ",
    description:
      "Integrations Team",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Present"
  }
] as const;

export const projectsData = [
  {
    title: "BeeEnrolled",
    description:
      "Interned as a full-stack developer working on building an E-learning platform with powerful AI tools for teachers and tutors.",
    tags: ["Vue", "Tailwind", "Laravel", "PHP", "MySQL", "OpenAI", "daisyUI", "Figma"],
    imageUrl: BeeEnrolled,
  },
  {
    title: "Oyster",
    description: "The open-source software that powers the ColorStack community experience.",
    tags: ["TypeScript", "PostgreSQL", "Kysely", "Zod", "Remix"],
    imageUrl: Oyster
  },
  {
    title: "AI PDF Analyzer",
    description:
      "A web app that analyzes user submitted PDFs via the RAG technique and vector similarity.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Pinecone", "OpenAI"],
    imageUrl: AIPDF,
  },
  {
    title: "QuickPrompts",
    description:
      "A web app for AI prompt sharing. Has full CRUD functionality and a search feature including search by content and tag.",
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
] as const;

export const skillsData = [
  "Angular",
  "C#",
  "Docker",
  "Git",
  "HTML/CSS",
  "Java",
  "Kotlin",
  "Laravel",
  "Next.js",
  "Node.js",
  "NoSQL",
  "PHP",
  "Python",
  "Postman",
  "React",
  "Redux",
  "SQL",
  "TypeScript",
  "Vue.js",
] as const;

