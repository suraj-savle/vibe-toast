import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400", // Pacifico only comes in 400
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "vibe-toast | Elite React Notifications",
    template: "%s | vibe-toast"
  },
  description: "A headless, glassmorphic toast library for React powered by Framer Motion.",
  keywords: ["react toast", "notification library", "shadcn toast", "framer motion animations", "vibe-toast"],
  authors: [{ name: "Suraj" }],
  openGraph: {
    title: "vibe-toast",
    description: "The most 'vibey' notification library for your modern React apps.",
    url: "https://vibetoast.vercel.app", // Replace with your actual URL
    siteName: "vibe-toast",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${pacifico.variable} antialiased font-sans` }
        suppressHydrationWarning
        data-scroll-behavior="smooth"
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
