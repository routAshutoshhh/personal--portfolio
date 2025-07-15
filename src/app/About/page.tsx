"use client";
import React from "react";
import Timeline from "@/components/ui-components/about-components/timeline";
import Worktimeline from "@/components/ui-components/about-components/workTimeline";
import Hobbies from "@/components/ui-components/about-components/Hobbies";
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cardVariant = {
    hovered: {
      whileHover: {
        scale: 1.05,
        y: -1,
      },
    },
    other: {
      scale: 0.95,
      y: 0,
    },
  };

  return (
    <>
      <div className="container overflow-y-auto max-w-3xl mx-auto mt-8">
        <h3 className=" text-3xl text-shadow-black font-bold tracking-tight">
          About
        </h3>
        <div className="font-normal text-lg text-mute-foreground relative pt-2">
          {" "}
          योऽहम् .
        </div>

        {/**work timeline */}
        <motion.div
          onHoverStart={() => setHoveredCard("WorkTimeline")}
          onHoverEnd={() => setHoveredCard(null)}
        >
          <motion.div
            variants={cardVariant}
            animate={hoveredCard === "WorkTimeline" ? "hovered" : "other"}
            className={`  ${
              hoveredCard && hoveredCard !== "WorkTimeline"
                ? "text-muted-foreground"
                : "text-foreground"
            }`}
          >
            <Worktimeline />
          </motion.div>
        </motion.div>

        {/**timeline show for study */}
        <motion.div
          onHoverStart={() => setHoveredCard("timeline")}
          onHoverEnd={() => setHoveredCard(null)}
        >
          <motion.div
            variants={cardVariant}
            animate={hoveredCard === "timeline" ? "hovered" : "other"}
            className={`  ${
              hoveredCard && hoveredCard !== "timeline"
                ? "text-muted-foreground"
                : "text-foreground"
            }`}
          >
            <Timeline />
          </motion.div>
        </motion.div>

        {/**hobbies section */}
        <motion.div
          onHoverStart={() => setHoveredCard("hobbies")}
          onHoverEnd={() => setHoveredCard(null)}
        >
          <motion.div
            variants={cardVariant}
            animate={hoveredCard === "hobbies" ? "hovered" : "other"}
            className={`  ${
              hoveredCard && hoveredCard !== "hobbies"
                ? "text-muted-foreground"
                : "text-foreground"
            }`}
          >
            <Hobbies />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
