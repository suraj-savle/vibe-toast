"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import  Hero  from "../components/Hero";
import { Footer } from "../components/Footer";
import VibeLab from "@/components/VibeLab";
import VibeFeatures from "@/components/VibeFeatures";
import VibeFAQ from "@/components/VibeFAQ";
import Playground from "@/components/PlaygroundCom";
import QuickStart from "@/components/QuickStart";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

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
        <SocialLinks  />
      </main>

      <Footer />
    </div>
  );
}
