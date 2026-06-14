"use client";

import React from "react";

const stack = {
  Languages: [
    "C++",
    "JavaScript",
    "TypeScript",
    "Python",
    "C#",
    "HTML",
  ],

  Frontend: [
    "React.js",
    "Next.js",
    "React-Redux",
    "Tailwind CSS",
    "Zustand",
    "Motion",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "Appwrite",
    "JSON Web Token (JWT)",
    "ASP.NET",
  ],

  Databases: [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Neo4j",
  ],

  VersionControlSystems: [
    "Git",
    "GitHub",
    "Docker",
  ],

  AI: [
    "RAG",
    "AI Agents",
    "LangChain",
    "MCP",
    "CrewAI",
    "Vector Databases",
  ],
};

// Optional color map per tech (adjust freely)
const badgeColors: Record<string, string> = {
  // Languages
  "C++": "bg-[#00599C]",
  HTML: "bg-[#E34F26]",
  JavaScript: "bg-[#F7DF1E] text-black",
  TypeScript: "bg-[#3178C6]",
  Python: "bg-[#3776AB]",
  "C#": "bg-[#512BD4]",

  // Frontend
  "React.js": "bg-[#61DAFB] text-black",
  "Next.js": "bg-[#454545]",
  "React-Redux": "bg-[#764ABC]",
  "Tailwind CSS": "bg-[#06B6D4]",
  Zustand: "bg-[#FFB86C] text-black",
  Motion: "bg-[#FF0080]",

  // Backend
  "Node.js": "bg-[#339933]",
  "Express.js": "bg-[#404D59]",
  Appwrite: "bg-[#FD366E]",
  "JSON Web Token (JWT)": "bg-[#D63AFF]",
  "ASP.NET": "bg-[#512BD4]",

  // Databases
  MySQL: "bg-[#4479A1]",
  MongoDB: "bg-[#47A248]",
  PostgreSQL: "bg-[#336791]",
  Neo4j: "bg-[#008CC1]",

  // Version Control & DevOps
  Git: "bg-[#F05032]",
  GitHub: "bg-[#181717]",
  Docker: "bg-[#2496ED]",

  // AI & LLM Engineering
  RAG: "bg-[#0F766E]",
  "AI Agents": "bg-[#7C3AED]",
  LangChain: "bg-[#1C3C3C]",
  MCP: "bg-[#0891B2]",
  CrewAI: "bg-[#4F46E5]",
  "Vector Databases": "bg-[#059669]",

  // Other
  JIRA: "bg-[#0052CC]",
};

const TechStack = () => {
  return (
    <section className="my-12 flex flex-col sm:flex-row">
      <h2 className="text-lg sm:text-xl font-medium tracking-tight mb-6">
        Tech-Stack
      </h2>
      <div className="space-y-8 ml-6">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-md font-medium mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className={`text-sm px-2 py-1 rounded-md font-medium text-white ${
                    badgeColors[tech] || "bg-gray-600"
                  }`}
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

export default TechStack;
