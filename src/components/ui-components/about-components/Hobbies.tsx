import { cn } from "@/lib/utils";

export default function Hobbies() {
  return (
    <section className="flex flex-col sm:flex-row py-10">
      <h2 className=" text-xl font-semibold mb-6 ">Hobbies</h2>
      <div className=" ml-15 flex fle-col sm:flex-row space-x-6">
        <div className="">
          <h1 className=" text-lg font-semibold">Gym</h1>
          <p className="text-muted-foreground pt-2">
            working out just to eat more
          </p>
          <span className="text-sm text-blue-400">2.5+ years</span>
        </div>
        <div className="">
          <h1 className=" text-lg font-semibold">Science of Universe</h1>
          <p className="text-muted-foreground pt-2">
            {" "}
            reading more than just aliens and pyramids
          </p>
          <span className="text-sm text-red-400">500+ doomscrolls</span>
        </div>
      </div>
    </section>
  );
}
