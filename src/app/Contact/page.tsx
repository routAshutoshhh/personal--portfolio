"use client";
import { FaEnvelope, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion"; // Use correct import
import { useEffect, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hoverEffect = {
    whileHover: {
      scale: 1.05,
      y: -1,
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="text-3xl font-bold tracking-tight">Contact</h3>
          <p className="text-muted-foreground text-lg mt-1">
            Let&apos;s connect.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Connect with me through any of these platforms.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <motion.div
              {...hoverEffect}
              className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg"
            >
              <FaEnvelope className="w-5 h-5 mt-1 text-muted-foreground" />
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
              {...hoverEffect}
              className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg"
            >
              <FaInstagram className="w-5 h-5 mt-1 text-muted-foreground" />
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
              {...hoverEffect}
              className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg"
            >
              <FaLinkedin className="w-5 h-5 mt-1 text-muted-foreground" />
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
              {...hoverEffect}
              className="flex items-start gap-3 p-4 border border-muted-foreground/20 rounded-lg"
            >
              <FaDiscord className="w-5 h-5 mt-1 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">Discord</p>
                <p className="text-muted-foreground text-sm">Join Server</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
