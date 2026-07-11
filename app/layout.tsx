import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cleara — The AI Workspace for Freelancers & Agencies",
  description:
    "Turn ideas into polished documents, manage projects with clients, and review contracts before signing — without juggling multiple tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-white text-dark font-sans">{children}</body>
    </html>
  );
}
