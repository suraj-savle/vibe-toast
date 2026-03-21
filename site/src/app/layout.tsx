import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import  Analytics  from "@/components/Analytics";

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
  title: "vibe-toast | Elite React Notifications",
  description: "A high-frequency notification engine for React. Engineered for speed, styled with glassmorphism, and built for immersive interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pacifico.variable} antialiased font-sans`}>
         <Analytics />
        {children}
      </body>
    </html>
  );
}
