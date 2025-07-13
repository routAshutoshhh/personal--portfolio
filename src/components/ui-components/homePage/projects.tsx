"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Optional utility for conditional classNames

const projects = [
  {
    title: "Cypher Chat",
    description:
      "Secure client-server chat web app enabling real-time and private communication.",
    tech: ["TypeScript", "React", "Next.js", "Node.js", "Express.js", "AWS"],
  },
  {
    title: "Sole Exchange",
    description:
      "Forum that allows users to post, interact, and search about anything sneaker related.",
    tech: ["React", "JavaScript", "Node.js", "Supabase"],
  },
  {
    title: "Spotify Data Dashboard",
    description:
      "Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.",
    tech: ["React", "Spotify API", "JavaScript", "Node.js"],
  },
];

const techColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  React: "bg-cyan-500",
  JavaScript: "bg-yellow-400 text-black",
  "node.js": "bg-green-500",
  "Next.js": "bg-neutral-700",
  "Express.js": "bg-orange-400",
  AWS: "bg-orange-500",
  Supabase: "bg-emerald-500",
  "Spotify API": "bg-emerald-600",
};

const ProjectsSection = () => {
  return (
    <section className="mt-12 flex flex-col sm:flex-row border border-red-700">
      <h2 className="text-lg sm:text-xl font-medium tracking-tight border border-red-300">
        Projects
      </h2>
      <div className="ml-6 space-y-8">
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
