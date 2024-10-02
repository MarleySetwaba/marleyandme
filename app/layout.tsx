import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Nav from "@/components/Marley/Nav";
import Footer from "@/components/Marley/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marley&Me",
  description: "Explore the work of Malesela Setwaba, a skilled South African software developer and business analyst with a passion for building innovative solutions. Discover their portfolio of projects, showcasing expertise in Business analysis, web development, technical support and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="/icon1.png"
  sizes="any"

/>
      </head>
      <body className={inter.className}>
<main className="max-w-screen-2xl">

        {children}
</main>

        <Analytics/>
        </body>
    </html>
  );
}
