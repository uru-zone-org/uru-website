import type { Metadata } from "next";
import { AuthProvider } from "./_auth-provider";

export const metadata: Metadata = {
  title: "Beta Interface — URUzone",
  description: "URUzone beta scoring system — trainer logging, user session review, and scoreboard.",
  robots: { index: false, follow: false },
};

export default function ScoreboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        /* Override the main site's body overflow: hidden and scroll-snap */
        position: "fixed",
        inset: 0,
        overflow: "auto",
        zIndex: 50,
      }}
    >
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
