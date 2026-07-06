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
  title: {
    default: "Shihab | Full Stack Developer",
    template: "%s | Shihab",
  },

  description:
    "Personal portfolio of Shihab, a Full Stack Developer specializing in Next.js, React, TypeScript, Tailwind CSS and AI.",

  keywords: [
    "Shihab",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Artificial Intelligence",
  ],

  authors: [
    {
      name: "Shihab",
    },
  ],

  creator: "Shihab",

  metadataBase: new URL("https://shihabium.vercel.app"),
alternates: {
  canonical: "https://shihabium.vercel.app",
},
  openGraph: {
    title: "Shihab | Full Stack Developer",
    description:
      "Modern portfolio built with Next.js, Tailwind CSS and Framer Motion.",

    url: "https://shihabium.vercel.app",

    siteName: "Shihab Portfolio",

    locale: "en_US",

    type: "website",
    images: ["/og-image.png"],
  },

  twitter: {
    card: "summary_large_image",

    title: "Shihab | Full Stack Developer",

    description:
      "Modern portfolio built with Next.js, Tailwind CSS and Framer Motion.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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