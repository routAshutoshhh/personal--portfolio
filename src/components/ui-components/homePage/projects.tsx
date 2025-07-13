"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Optional utility for conditional classNames

const projects = [
  {
    title: "CodeOmen",
    description:
      "A Coding platform  with user interface just like Leetcode to test your skills in  Data Structure and algo .",
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
    title: "Todo web Application ",
    description:
      "A todo web application which leverages local storage with simple user interface  to just say everyday task.",
    tech: ["React", "Context API", "JavaScript"],
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
            <h3 className="text-md font-medium">{project.title}</h3>
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
