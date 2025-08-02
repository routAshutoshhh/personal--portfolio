"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion"; 
import { MailModal } from "../comp/mail-modal";
import { useModalStore } from "@/stores/modalStore";

export default function Footer() {
    //cusing the modal store to open the mail
    const {openModal} = useModalStore();

    //creating  a hover icon feature for the icons in the footer using framer-motion
  const iconHover = {
    whileHover: {
      scale: 1,
      y: -2,
    },
  };

  return (
    <footer className="w-full flex flex-col items-center justify-center pt-2 pb-4 px-4 text-gray-600 dark:text-muted-foreground">
      <div className="flex gap-10 mb-2">
        <motion.a
          href="https://linkedin.com/in/ashutoshkrout"
          target="_blank"
          rel="noopener noreferrer"
          {...iconHover}
        >
          <FaLinkedin className="w-5 h-5 hover:text-primary transition-colors" />
        </motion.a>

        <motion.a
          href="https://github.com/routAshutoshhh"
          target="_blank"
          rel="noopener noreferrer"
          {...iconHover}
        >
          <FaGithub className="w-5 h-5 hover:text-primary transition-colors" />
        </motion.a>

        <MailModal/>  {/*injecting Modal Component */}

        <motion.div
          onClick={openModal}
          {...iconHover}
        >
          <FaEnvelope className="w-5 h-5 hover:text-primary transition-colors" />
        </motion.div>

        <motion.a
          href="https://x.com/kumar_rout66561"
          target="_blank"
          rel="noopener noreferrer"
          {...iconHover}
        >
          <FaTwitter className="w-5 h-5 hover:text-primary transition-colors" />
        </motion.a>

        <motion.a
          href="https://codolio.com/profile/ashhhuuuu"
          target="_blank"
          rel="noopener noreferrer"
          {...iconHover}
        >
          <SiLeetcode className="w-5 h-5 hover:text-primary transition-colors" />
        </motion.a>
      </div>

      <div className="text-xs text-center">
        © 2025 Ashutosh. All rights reserved.
      </div>
    </footer>
  );
}
