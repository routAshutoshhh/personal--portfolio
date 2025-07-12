import React from "react";
import Timeline from "@/components/ui-components/about-components/timeline";
import Worktimeline from "@/components/ui-components/about-components/workTimeline";
import { cn } from "@/lib/utils";
import Hobbies from "@/components/ui-components/about-components/Hobbies";

export const metadata = {
  title: "Ashutosh | About",
};

export default function About() {
  return (
    <>
      <div className="container overflow-y-auto">
        <h1 className=" text-3xl text-shadow-black font-medium">About</h1>
        <div className="font-medium text-mute-foreground relative pt-2">
          {" "}
          योऽहम् .
        </div>
        <Worktimeline />
        <Timeline />
        <Hobbies />
      </div>
    </>
  );
}
