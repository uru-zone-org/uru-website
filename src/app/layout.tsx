import type { Metadata } from "next";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
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

          {/* Header */}
          <header className="w-full px-4 py-2 text-xs font-medium uppercase tracking-wider border-b border-[var(--color-border)]">
            <nav className="flex justify-between items-center">
              <Nav />
            </nav>
          </header>

          {/* Main Layout Container (X) */}
          <main className="flex-1 px-6 py-10">
            <div className="flex flex-col md:flex-row gap-6">

              {/* Box A */}
              <div className="flex flex-col gap-6 p-4 w-full md:w-1/2">
                <div><Header /></div>
                <div><Uru /></div>
              </div>

              {/* Box B */}
              <div className="p-4 w-full md:w-1/2 space-y-8">
                <About />
                <UruMessage />
                <TheApp />
              </div>

            </div>
          </main>

          {/* Footer */}
          <footer className="w-full px-4 py-2 text-xs text-center border-t border-[var(--color-border)]">
            All rights reserved.
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
