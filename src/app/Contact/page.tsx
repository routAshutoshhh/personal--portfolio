import React from "react";

//for handling the title change with the page change
export const metadata = {
  title: "Ashutosh | Contact",
};

export default function Contact() {
  return (
    <div>
      <h3 className=" text-4xl text-shadow-black font-bold tracking-tight">
        Contact
      </h3>
      <div className="font-normal text-lg text-gray-600 dark:text-gray-200 relative pt-2">
        {" "}
        Let&apos;s connect.
      </div>
      <div className="mt-6 text-sm text-muted-foreground ">
        Connect with me through any of these platforms.
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <div className="">
          <div className="border rounded-sm border-muted-foreground">Email</div>
          <div className="border rounded-sm border-muted-foreground">
            LinkedIn
          </div>
        </div>
        <div>
          <div className="border rounded-sm border-muted-foreground">
            Twitter
          </div>
          <div className="border rounded-sm border-muted-foreground">
            Discord
          </div>
        </div>
      </div>
    </div>
  );
}
