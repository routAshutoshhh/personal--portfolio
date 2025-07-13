import React from "react";
import Timeline from "@/components/ui-components/about-components/timeline";
import Worktimeline from "@/components/ui-components/about-components/workTimeline";
import Hobbies from "@/components/ui-components/about-components/Hobbies";

export const metadata = {
  title: "Ashutosh | About",
};

export default function About() {
  return (
    <>
      <div className="container overflow-y-auto max-w-3xl mx-auto mt-8">
        <h3 className=" text-3xl text-shadow-black font-bold tracking-tight">
          About
        </h3>
        <div className="font-normal text-lg text-mute-foreground relative pt-2">
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
