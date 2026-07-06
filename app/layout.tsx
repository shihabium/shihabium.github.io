import MouseGlow from "@/components/effects/MouseGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shihab | Full Stack Developer",
  description:
    "Official portfolio of Shihab. Full Stack Developer, AI Enthusiast and Content Creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />

        <MouseGlow />
        {/* <MouseGlow /> */}
        {children}
        <Toaster
          position="bottom-right"
          richColors
          theme="dark"
          closeButton 
        />
      </body>
    </html>
  );
}
