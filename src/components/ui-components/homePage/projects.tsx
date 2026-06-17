"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Optional utility for conditional classNames

const projects = [
  {
    title: "MeetMind - AI Meeting Intelligence Orchestrator",
    description:
      "AI Meeting Intelligence Platform with Multi-Agent Orchestration, RAG Memory, Real-Time Streaming & Enterprise Workflow Fluency.",
    link: "https://github.com/routAshutoshhh/Meet_Mind_Orchestrator.git",
    tech: [
      "Next.js ",
      "JavaScript",
      "FastAPI",
      "CrewAI",
      "RAG Memory",
      "Vector DB",
      "LangChain",
      "FastMCP",
    ],
  },
  {
    title: "CodeOmen",
    description:
      "A Coding platform  with user interface just like Leetcode to test your skills in  Data Structure and algo .",
    link: "https://codeomen.vercel.app/",
    tech: [
      "Next.js ",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Firestore",
      "Firebase Authentication",
      "codeMirror",
    ],
  },

  {
    title: "Disease Prediction and Ayurvedic Formulation System",
    description:
      "Machine Learning & NLP-Based Clinical Decision Support System for Ayurvedic Healthcare.",
    link: "https://github.com/routAshutoshhh/Ayurvedic-disease-prediction-system.git",
    tech: ["HTML", "CSS", "JavaScript", "Machine Learning", "NLP"],
  },
];

const techColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  React: "bg-cyan-500",
  JavaScript: "bg-yellow-400",
  "node.js": "bg-green-500",
  "Next.js": "bg-neutral-700",
  "Express.js": "bg-orange-400",
  AWS: "bg-orange-500",
  Supabase: "bg-emerald-500",
  "Spotify API": "bg-emerald-600",
  "Context API": "bg-purple-500",
  Firestore: "bg-blue-800",
  "Firebase Authentication": "bg-yellow-500",
  codeMirror: "bg-red-300",
  "FastAPI": "bg-green-700",
  "CrewAI": "bg-blue-600",
  "RAG Memory": "bg-gray-700",
  "Vector DB": "bg-emerald-700",
  "LangChain": "bg-purple-600",
  "FastMCP": "bg-cyan-600",
  "Machine Learning": "bg-red-600",
  "NLP": "bg-yellow-600",
  "HTML": "bg-orange-500",
  "CSS": "bg-blue-400",
  
};

const ProjectsSection = () => {
  return (
    <section className="mt-12 flex flex-col sm:flex-row ">
      <h2 className="text-lg sm:text-xl font-medium tracking-tight">
        Projects
      </h2>
      <div className="ml-10 space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="space-y-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-300 dark:text-dark-700"
            >
              <h3 className="text-md font-medium">{project.title}</h3>
            </a>
            <p className="text-muted-foreground text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "text-sm px-2 py-1 rounded-md font-medium text-white",
                    techColors[tech] || "bg-gray-600"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
