// components/page-transition/FrozenRoute.tsx
"use client";

import { useRef, useContext } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function FrozenRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}
