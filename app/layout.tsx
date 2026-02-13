import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Added weights for headers
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "APM-AI - AI-Powered Hiring Platform",
  description:
    "Shaping the next era of AI you can trust. Answer insightful questions, explore fresh perspectives, and discover how AI's evaluation can lead you to the next level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kanit.variable}`}>
      <body className="font-kanit antialiased bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
