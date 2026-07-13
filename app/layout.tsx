import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteName = "Cleara";
const title = "Cleara — The AI Workspace for Freelancers & Agencies";
const description =
  "Turn ideas into polished documents, manage projects with clients, and review contracts before signing — without juggling multiple tools.";
const url = "https://cleara.app";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/assets/icons/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    siteName: "Cleara",
    title,
    description,
    images: [
      {
        url: "/assets/icons/logo.png",
        width: 1200,
        height: 630,
        alt: "Cleara — The AI Workspace for Freelancers & Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/icons/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "AI workspace",
    "freelancer tools",
    "client management",
    "document creation",
    "contract review",
    "project management",
    "proposal generator",
    "Cleara",
  ],
  authors: [{ name: "Cleara" }],
  creator: "Cleara",
  publisher: "Cleara",
  applicationName: "Cleara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-white text-dark font-sans">
        {children}
      </body>
    </html>
  );
}
