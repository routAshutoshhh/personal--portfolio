"use client";
import Header from "@/components/ui-components/vertical-marginals/header";
import Footer from "@/components/ui-components/vertical-marginals/footer";
export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="flex flex-col min-h-screen items-center">
      {/* Header stays at the top */}
      <Header />

      {/* Main content area, centered and padded */}
      <main className="w-full max-w-2xl flex-grow px-2">{children}</main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
 