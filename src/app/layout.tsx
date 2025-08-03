import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "@/app/layout-client-wrapper";
import PageTransitionProvider from "@/components/ui-components/page-transtion/page-transition";

//importing the toast first to make where it should look
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashutosh",
  description: "Hi, welcome here!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <PageTransitionProvider>
          <LayoutClientWrapper>
            {/*a step-1(for displaying the toast notification ) - adding the toaster component above children in the layout.ts*/}
            <Toaster position ="top-right"/>
            {children}</LayoutClientWrapper>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
