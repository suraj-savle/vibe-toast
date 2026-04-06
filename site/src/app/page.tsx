"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import Hero from "@/components/marketing/Hero";
import { Footer } from "@/components/layout/Footer";
import VibeLab from "@/components/marketing/TestLabsSection";
import VibeFeatures from "@/components/marketing/FeaturesSection";
import VibeFAQ from "@/components/marketing/FAQSection";
import Playground from "@/components/marketing/PlaygroundSection";
import QuickStart from "@/components/marketing/QuickStart";
import SocialLinks from "@/components/shared/SocialLinks";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Toaster } from "vibe-toast";

export default function VibeLanding() {
  return (
    <div className="max-w-6xl overflow-x-hidden mx-auto text-[#1a1a1a] font-sans selection:bg-(--text)">
      <Navbar />

      <main>
        <Hero />
        <div className="flex flex-col justify-between mt-2 md:flex-row">
          <VibeLab />
          <Playground />
        </div>
        <VibeFeatures />
        <QuickStart />
        <VibeFAQ />
        <SocialLinks />
        <ScrollToTop />
      </main>

      <Footer />
    </div>
  );
}
