import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Up, Chicago",
  description: "A way to find the best places to study and work in Chicago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0`}
      >
        <div className="flex h-screen w-screen">
          <Navbar />
          <main className="flex-1 h-full overflow-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
