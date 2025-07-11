import type { Metadata } from "next";
import "@/styles/globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Header from "@/components/Header";
import Uru from "./uru/uru";
import HomePage from "./page";
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

          {/* Hero + content wrapper */}
          <div className="flex flex-1 xl:flex-row flex-col">
            {/* Left: Uru always visible */}
            <div className="flex-1 h-screen flex items-center justify-center">
              <Uru />
            </div>

            {/* Right: dynamic page content */}
            <div className="flex-1 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 overflow-auto">
              {children}
            </div>
          </div>

          <footer className="w-full px-4 py-2 text-xs text-center border-t border-[var(--color-border)]">
            All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}

