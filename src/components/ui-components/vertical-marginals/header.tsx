"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "@/components/ui-components/theme-toggle";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-2xl">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-4 relative">
        {/* Avatar */}
        <Link href="/">
          <Image
            src="/avatar.png"
            alt="Profile avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        </Link>

        {/* Centered Nav */}
        <div className="flex gap-4 text-sm font-medium text-muted-foreground relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 rounded-sm"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-gray-200 dark:bg-muted rounded-sm z-[-1]"
                    transition={{ type: "tween", stiffness: 600, damping: 30 }}
                  />
                )}
                <span
                  className={
                    isActive ? "text-foreground" : "hover:text-foreground"
                  }
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
