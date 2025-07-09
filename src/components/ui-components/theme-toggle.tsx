"use-client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  //stastes to handle the theme
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //useEffect hook to mount the component
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      variant="ghost"
      className="w-9 h-9 p-0"
      onClick={handleThemeToggle}
      aria-label="theme toggle"
    >
      {mounted && theme === "dark" ? (
        <Moon className="" />
      ) : (
        <Sun className="" />
      )}
    </Button>
  );
}
