import type { Metadata } from "next";
import '@/styles/globals.css';
import Nav from "@/components/Nav"
import ThemeToggle from '@/components/ThemeToggle'
import Header from "@/components/Header"
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
<body className="layout-grid p-4 bg-[var(--color-background)] text-[var(--color-text)]">
  <div className="area-header">
    <Header />
    <div className="area-nav flex justify-center items-center">
    <Nav />
  </div>
  </div>
  <div className="area-uru flex justify-center items-center">
    <Uru />
  </div>
  <div className="area-a p-4"><About/></div>
  <div className="area-b p-4"><UruMessage/></div>
  <div className="area-c p-4"><TheApp/></div>
  <div className="area-d p-4">Page D</div>
  <div><ThemeToggle/></div>
</body>

</html>

  );
}
