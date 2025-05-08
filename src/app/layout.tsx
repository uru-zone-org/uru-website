import type { Metadata } from "next";
import '@/styles/globals.css';
import Nav from "@/components/Nav"
import ThemeToggle from '@/components/ThemeToggle'
import Header from "@/components/Header"
import Uru from "./uru/uru";


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
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
          <Nav />
          <Uru/>
          </header>
  <main>{children}</main>

<div>
  <ThemeToggle/>
</div>

</div>

      </body>
    </html>
  );
}
