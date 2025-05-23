import type { Metadata } from "next";
import "@/styles/globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Header from "@/components/Header";
import Uru from "./uru/uru";
import About from "./about/page";
import UruMessage from "./urumessage/urumessage";
import TheApp from "./theapp/page";

export const metadata: Metadata = {
  title: "URU Website",
  description: "The Official Uru Wear Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-background)] text-[var(--color-text)]">
        <div className="min-h-screen flex flex-col justify-between">
          <header className="w-full px-4 text-xs font-medium uppercase tracking-wider border-b border-[var(--color-border)]">
            <nav className="flex justify-between items-center">
              <Header />
            </nav>
          </header>
          <main className="flex-1 px-4 sm:px-6 pt-4 sm:pt-6 lg:pt-10 pb-6 sm:pb-10 xl:pt-2">
            <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full md:flex-1 md:h-screen">
            <div className="w-full md:flex-1 md:h-screen md:flex md:items-center md:justify-center">
              <Uru />
              </div>
              </div>
              <div className="flex-1 px-4 sm:px-6 pt-4 sm:pt-6 lg:pt-10 pb-6 sm:pb-10 xl:pt-2 flex items-center justify-center">
                <div className="w-full">
                  <About />
                  </div>
                  </div>
            </div>
          </main>
          <footer className="w-full px-4 py-2 text-xs text-center border-t border-[var(--color-border)]">
            All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
