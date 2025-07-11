"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center pt-2 pb-4 px-4 text-muted-foreground">
      <div className="flex gap-10 mb-2">
        <a
          href="https://linkedin.com/in/ashutoshkrout"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-5 h-5 hover:text-primary transition-colors" />
        </a>
        <a
          href="https://github.com/routAshutoshhh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-5 h-5 hover:text-primary transition-colors" />
        </a>
        <a
          href="mailto:egoisticdev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="w- h-5 hover:text-primary transition-colors" />
        </a>
        <a
          href="https://x.com/kumar_rout66561"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="w-5 h-5 hover:text-primary transition-colors" />
        </a>
        <a
          href="https://codolio.com/profile/ashhhuuuu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="w-5 h-5 hover:text-primary transition-colors" />
        </a>
      </div>
      <div className="text-xs text-center">
        © 2025 Ashutosh. All rights reserved.
      </div>
    </footer>
  );
}
