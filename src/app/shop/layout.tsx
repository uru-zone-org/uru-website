import type { Metadata } from "next";
import '@/styles/globals.css';
import Link from "next/link";

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
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
