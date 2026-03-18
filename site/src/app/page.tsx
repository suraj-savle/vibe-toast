"use client"
import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import VibeLab from "@/components/VibeLab";
import VibeFeatures from "@/components/VibeFeatures";

export default function VibeLanding() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto text-[#1a1a1a] font-sans selection:bg-(--text)">

      <Navbar />

      <main>
        <Hero />
        <VibeLab />
        <VibeFeatures />
      </main>

      <Footer />
    </div>
  );
}
