import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Session Review — URUzone Beta",
  description: "Private session review form for URUzone beta testers.",
  robots: { index: false, follow: false },
};

export default function FeedbackLayout({
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
      {children}
    </div>
  );
}
