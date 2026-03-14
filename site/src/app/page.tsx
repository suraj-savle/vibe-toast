"use client";
import React from "react";
import { Toaster, toast } from "vibe-toast";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { FaCheck, FaLayerGroup, FaExclamationCircle, FaCode, FaRocket, FaTerminal } from 'react-icons/fa';

export default function VibeLanding() {
  const handlePromise = () => {
    const upload = new Promise((res) => setTimeout(() => res("image.png"), 2000));
    toast.promise(upload, {
      loading: "Syncing to cloud...",
      success: (file) => `Uploaded ${file} successfully!`,
      error: "Upload failed."
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-emerald-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto">
        <Hero onMakeToast={handlePromise} />

        {/* Feature Grid */}
        <section className="px-6 md:px-20 pb-24">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-3xl font-bold tracking-tight">Examples</h2>
             <span className="text-sm text-gray-400">Click to preview</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<FaCheck className="text-emerald-500" />} 
              title="Success" 
              desc="Standard feedback for completed operations."
              onClick={() => toast.success("Settings Saved!")}
              color="bg-emerald-500"
            />
            <FeatureCard 
              icon={<FaLayerGroup className="text-amber-500" />} 
              title="Action Stack" 
              desc="Let users undo or respond directly inside."
              onClick={() => toast.warning("File Deleted", { description: "Moved to trash." })}
              color="bg-amber-500"
            />
             <FeatureCard 
              icon={<FaExclamationCircle className="text-rose-500" />} 
              title="Error State" 
              desc="Notify users of failures or breaking changes."
              onClick={() => toast.error("Auth Failed")}
              color="bg-rose-500"
            />
            <FeatureCard 
              icon={<FaCode className="text-violet-500" />} 
              title="Custom Vibe" 
              desc="Override accents and icons easily."
              onClick={() => toast("Custom Icon", { icon: <FaRocket /> })}
              color="bg-violet-500"
            />
          </div>
        </section>
      </main>

      <Footer />
      <Toaster theme="light" position="bottom-right" />
    </div>
  );
}

// Helper Card Component
const FeatureCard = ({ icon, title, desc, onClick, color }) => (
  <div className="group bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all">
    <div className="mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-400 mb-6 leading-relaxed">{desc}</p>
    <button onClick={onClick} className={`w-full py-3 rounded-xl ${color} text-white font-bold text-sm hover:opacity-90 transition-opacity`}>
      Preview
    </button>
  </div>
);