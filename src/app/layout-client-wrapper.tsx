"use client ";

import Header from "@/components/ui-components/vertical-marginals/header";
import Footer from "@/components/ui-components/vertical-marginals/footer";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen relative bg-gray-500 text-black">
        <Header />
        <main className="">{children} </main>
        <Footer />
      </div>
    </>
  );
}
