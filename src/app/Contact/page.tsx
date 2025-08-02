"use client";
import { useState } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { MailModal}  from "@/components/ui-components/comp/mail-modal";
import { useModalStore } from "@/stores/modalStore";


export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const {openModal} = useModalStore();


  //to handle hover on cards
  const hoverEffect = {
    whileHover: {
      scale: 1.05,
      y: -1,
    },
    transition: { stiffness: 300 },
  };

  //to animate the icon rotate  on hover
  const iconVariants = {
    initial: { rotate: 0 },
    hovered: { rotate: 10 },
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h3 className="text-3xl font-bold tracking-tight">Contact</h3>
      <p className="text-gray-700 dark:text-gray-200 text-lg mt-1">
        Let&apos;s connect.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        Connect with me through any of these platforms.
      </p>

      {/*injecting Modal Component */}
      <MailModal/>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <motion.div
          onHoverStart={() => setHoveredCard("email")}
          onHoverEnd={() => setHoveredCard(null)}
          whileHover={hoverEffect.whileHover}
          transition={hoverEffect.transition}
          onClick={openModal}
          className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg"
        >
          <motion.div
            variants={iconVariants}
            animate={hoveredCard === "email" ? "hovered" : "initial"}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 mt-3 text-gray-700 dark:text-gray-200"
          >
            <FaEnvelope />
          </motion.div>

          <div>
            <p className="font-medium text-sm">Email</p>
            <a
              href="mailto:egoisticdev@gmail.com"
              className="text-muted-foreground text-sm"
            >
              egoisticdev@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Instagram */}
        <motion.div
          onHoverStart={() => setHoveredCard("instagram")}
          onHoverEnd={() => setHoveredCard(null)}
          whileHover={hoverEffect.whileHover}
          transition={hoverEffect.transition}
          className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg"
        >
          <motion.div
            variants={iconVariants}
            animate={hoveredCard === "instagram" ? "hovered" : "initial"}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 mt-3 text-gray-700 dark:text-gray-200"
          >
            <FaInstagram />
          </motion.div>

          <div>
            <p className="font-medium text-sm">Instagram</p>
            <a
              href="https://instagram.com/geekgoes.gym"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm"
            >
              @geekgoes.gym
            </a>
          </div>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          onHoverStart={() => setHoveredCard("linkedin")}
          onHoverEnd={() => setHoveredCard(null)}
          whileHover={hoverEffect.whileHover}
          transition={hoverEffect.transition}
          className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg"
        >
          <motion.div
            variants={iconVariants}
            animate={hoveredCard === "linkedin" ? "hovered" : "initial"}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 mt-3 text-gray-700 dark:text-gray-200"
          >
            <FaLinkedin />
          </motion.div>

          <div>
            <p className="font-medium text-sm">LinkedIn</p>
            <a
              href="https://linkedin.com/in/ashutoshkrout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm"
            >
              in/ashutoshkrout
            </a>
          </div>
        </motion.div>

        {/* Discord */}
        <motion.div
          onHoverStart={() => setHoveredCard("discord")}
          onHoverEnd={() => setHoveredCard(null)}
          whileHover={hoverEffect.whileHover}
          transition={hoverEffect.transition}
          className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg"
        >
          <motion.div
            variants={iconVariants}
            animate={hoveredCard === "discord" ? "hovered" : "initial"}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 mt-3 text-gray-700 dark:text-gray-200"
          >
            <FaDiscord />
          </motion.div>

          <div>
            <p className="font-medium text-sm">Discord</p>
            <a
              href="https://discordapp.com/users/ashutosh8179"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm"
            >
              join Server
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
