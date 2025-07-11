import { cn } from "@/lib/utils";

const studyTimeline = [
  {
    title: "Kalinga Institute of Industrial Technology",
    education: "Bachelor of Technology in Computer Science and Engineering",
    description: "got my degree to find a place in the tech and corporate",
    date: "2021 - 20225",
    color: "bg-blue-400",
  },
  {
    title: "BNS DAV Public School",
    education: "Senior Secondary Education",
    description:
      "got top ranking in the school to make my parents proud - 94.5%",
    date: "2019 - 2020",
    color: "bg-red-400",
  },
  {
    title: "BNS DAV Public School",
    education: "Secondary Education",
    description: "ranked in top 10 in my school by just studying for 1 month ",
    date: "2017 - 2018",
    color: "bg-green-400",
  },
];

export default function Timeline() {
  return (
    <section className="flex flex-col sm:flex-row  py-10">
      <h2 className="text-xl font-semibold mb-6">Timeline</h2>
      <div className="relative border-l border-gray-700 ml-2 pl-2 space-y-10">
        {studyTimeline.map((item, index) => (
          <div key={index} className="relative">
            <span
              className={cn(
                "absolute left-[-12px] top-1 w-2 h-2 rounded-full",
                item.color
              )}
            />
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-normal">{item.title}</h1>
                <p className="italic text-muted-foreground text-sm">
                  {item.education}
                </p>
                <ul className="list-disc ml-5 text-sm text-muted-foreground">
                  <li>{item.description}</li>
                </ul>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
