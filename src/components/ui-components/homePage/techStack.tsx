"use client";

import React from "react";

const stack = {
  Languages: ["C++", "HTML", "JavaScript", "TypeScript", "Python"],
  Frontend: ["ReactJs", "NextJs", "React-Redux", "Tailwind CSS", "Zustand"],
  Backend: ["NodeJs", "Express.Js"],
  Databases: ["MySQL", "MongoDB"],
  VersionControl: ["GIT/GIT-REMOTE", "Docker"],
};

// Optional color map per tech (adjust freely)
const badgeColors: Record<string, string> = {
  "C++": "bg-blue-700",
  HTML: "bg-orange-500",
  JavaScript: "bg-yellow-400 text-black",
  TypeScript: "bg-blue-500",
  Python: "bg-green-600",
  ReactJs: "bg-cyan-500",
  NextJs: "bg-gray-800",
  "React-Redux": "bg-purple-600",
  "Tailwind CSS": "bg-sky-400",
  Zustand: "bg-orange-300 text-black",
  NodeJs: "bg-green-500",
  "Express.Js": "bg-zinc-700",
  MySQL: "bg-blue-400",
  MongoDB: "bg-emerald-500",
  "GIT/GIT-REMOTE": "bg-red-300",
  JIRA: "bg-indigo-500",
  Docker: "bg-blue-600",
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
