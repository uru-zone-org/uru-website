import type { Metadata } from "next";
import '@/styles/globals.css';
import Nav from "@/components/Nav"


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
      <body>
        <header className="flex justify-center">
          <Nav/>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
