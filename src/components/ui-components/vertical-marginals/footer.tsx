"use client";

import { Linkedin, Github, MailIcon, Twitter, Compass } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white">
        <div className="flex flex-row items-center space-x-4">
          <a href="https://www.linkedin.com/in/ashutoshkrout" target="_blank">
            <Linkedin className="w-2 h-2 text-white hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://github.com/routAshutoshhh " target="_blank">
            <Github className="w-2 h-2 text-white hover:text-blue-500 transition-colors" />
          </a>
          <a href="mailto:egoisticdev@gmail.com" target="_blank ">
            <MailIcon className="w-2 h-2 text-white hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://x.com/kumar_rout66561" target="_blamk">
            <Twitter className="w-2 h-2 text-white hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://x.com/kumar_rout66561" target="_blamk">
            <Compass className="w-2 h-2 text-white hover:text-blue-500 transition-colors" />
          </a>
        </div>
      </footer>
    </>
  );
}
