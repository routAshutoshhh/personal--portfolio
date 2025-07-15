// components/page-transition/PageTransitionProvider.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import FrozenRoute from "@/components/ui-components/page-transtion/FrozenRoute";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
