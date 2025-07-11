"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "@/components/ui-components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-xl ">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Avatar */}
        <Link href="/">
          <Image
            src="/avatar.png" // replace with your actual image path
            alt="Profile avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        </Link>

        {/* Centered Nav */}
        <div className="flex gap-4 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-sm transition-colors ${
                pathname === link.href
                  ? "bg-gray-200 dark:bg-muted text-foreground"
                  : "hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
