import "./globals.css";
import { Inter, Pacifico } from "next/font/google";
import Analytics from "@/components/lib/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://vibetoast.vercel.app"),
  title: {
    default: "vibe-toast | Modern React Toast Library",
    template: "%s | vibe-toast",
  },
  verification: {
    google: "2s5LQ5zlcB8ctu_O090b2BpAvumV7vZ-McHp7jf5dro",
  },
  description:
    "A modern, headless, hot toast notification library for React and Next.js powered by smooth animations.",

  keywords: [
    "react toast",
    "toast notification",
    "react notification library",
    "nextjs toast",
    "framer motion toast",
    "glassmorphism ui",
    "vibe-toast",
  ],
  authors: [{ name: "Suraj" }],
  openGraph: {
    title: "vibe-toast | Modern React Toast Library",
    description:
      "Beautiful animated toast notifications for React and Next.js apps.",
    url: "https://vibetoast.vercel.app", // Replace with your actual URL
    siteName: "vibe-toast",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "vibe-toast | Modern React Toast Library",
    description:
      "Beautiful animated toast notifications for React and Next.js apps.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${pacifico.variable} antialiased font-sans`}
        suppressHydrationWarning
        data-scroll-behavior="smooth"
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
