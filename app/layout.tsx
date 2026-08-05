import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Developer | Creative Developer & Designer",
  description: "Full-stack developer crafting immersive digital experiences with modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
