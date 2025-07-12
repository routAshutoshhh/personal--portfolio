import { cn } from "@/lib/utils";

const workTimeLine = [
  {
    title: "Acumensa Technologies Pvt Ltd",
    role: "Full Stack Developer Intern",
    description:
      " worked on project creating fully functional and synced  messaging systems  and handling states",
    date: "May 2025- July 2025",
    color: "bg-orange-400",
  },
  {
    title: "Little Paws Care",
    role: "Corporate Connect Intern",
    description:
      " worked on connecting and maintaining relations with different NGOs to provide quick help to needy strays",
    date: "May 2024 - July 2024",
    color: "bg-blue-300",
  },
];

export default function Worktimeline() {
  return (
    <section className="flex flex-col sm:flex-row  py-10">
      <h2 className="text-xl font-semibold mb-6"> Corporate Timeline</h2>
      <div className="relative border-l border-gray-700 ml-8 pl-2 space-y-10">
        {workTimeLine.map((item, index) => (
          <div key={index} className="relative">
            <span
              className={cn(
                "absolute left-[-12px] top-1 w-2 h-2  shadow shadow-white/100 rounded-full",
                item.color
              )}
            />
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-normal">{item.title}</h1>
                <p className="italic text-muted-foreground text-sm">
                  {item.role}
                </p>
                <ul className="list-disc ml-5 text-sm text-muted-foreground">
                  <li>{item.description}</li>
                </ul>
              </div>
              <span className="text-sm text-muted-foreground justify-end whitespace-nowrap">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
