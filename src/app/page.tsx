// src/app/page.tsx
"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ProjectsSection from "@/components/ui-components/homePage/projects";
import TechStack from "@/components/ui-components/homePage/techStack";
import BlogSection from "@/components/ui-components/homePage/blog";
import { motion, Transition } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cardVariant = {
    hovered: {
      whileHover: {
        scale: 1.05,
        y: -1,
      },
    },
    other: {
      scale: 0.9,
      y: 0,
    },
  };

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
        your average Pizza lover and caffeine addict software dev from India,
        trying to barge into tech world.
      </div>

      {/**blogs section  */}
      <motion.div
        onHoverStart={() => setHoveredCard("blogs")}
        onHoverEnd={() => setHoveredCard(null)}
        className="mt-6"
      >
        <motion.div
          variants={cardVariant}
          animate={hoveredCard === "blogs" ? "hovered" : "other"}
          className={`  ${
            hoveredCard && hoveredCard !== "blogs"
              ? "text-muted-foreground"
              : "text-foreground"
          }`}
        >
          <BlogSection />
        </motion.div>
      </motion.div>

      {/**projects section  */}
      <motion.div
        onHoverStart={() => setHoveredCard("projects")}
        onHoverEnd={() => setHoveredCard(null)}
        className="mt-8"
      >
        <motion.div
          variants={cardVariant}
          animate={hoveredCard === "projects" ? "hovered" : "other"}
          className={`  ${
            hoveredCard && hoveredCard !== "projects"
              ? "text-muted-foreground"
              : "text-foreground"
          }`}
        >
          <ProjectsSection />
        </motion.div>
      </motion.div>

      {/**tech stack section  */}
      <motion.div
        onHoverStart={() => setHoveredCard("techStack")}
        onHoverEnd={() => setHoveredCard(null)}
        className="mt-8"
      >
        <motion.div
          variants={cardVariant}
          animate={hoveredCard === "techStack" ? "hovered" : "other"}
          className={`  ${
            hoveredCard && hoveredCard !== "techStack"
              ? "text-muted-foreground"
              : "text-foreground"
          }`}
        >
          <TechStack />
        </motion.div>
      </motion.div>
    </div>
  );
}
