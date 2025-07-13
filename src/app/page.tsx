// src/app/page.tsx
"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ProjectsSection from "@/components/ui-components/homePage/projects";
import TechStack from "@/components/ui-components/homePage/techStack";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Hello, Ashutosh here"],
    loop: 1,
    deleteSpeed: 0,
    delaySpeed: 1000,
    typeSpeed: 110,
  });

  return (
    <div className="container max-w-3xl mx-auto mt-8">
      <h3 className="text-3xl font-medium">
        <span> {text} </span>
        <Cursor />
      </h3>
      <div className="pt-4 text-gray-600 dark:text-gray-300 ">
        your average Pizza lover and caffine addict software dev from India,
        trying to barge into tech world.
      </div>
      <div className="mt-8">
        <ProjectsSection />
      </div>
      <div className="mt-8">
        <TechStack />
      </div>
    </div>
  );
}
