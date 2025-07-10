"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ui-components/theme-toggle";

export default function Header() {
  return (
    <>
      <header>
        <nav className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-lg font-bold">
              Home
            </Link>
            <Link href="/About" className="hover:underline">
              About
            </Link>
            <Link href="/Contact" className="hover:underline">
              Contact
            </Link>
          </div>
          <ThemeToggle />
        </nav>
      </header>
    </>
  );
}
