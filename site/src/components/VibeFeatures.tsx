"use client";

import React from "react";
import { 
  FaBolt, FaPalette, FaCode, 
  FaLayerGroup, FaWind, FaArrowsAlt, FaTerminal, FaFingerprint 
} from 'react-icons/fa';

export default function VibeFeatures() {
  
  const features = [
    { title: "Lightweight", desc: "Zero dependencies. Tiny bundle.", icon: <FaWind /> },
    { title: "Shorthand", desc: "toast.success('Done!')", icon: <FaBolt /> },
    { title: "Customizable", desc: "Total control over styling.", icon: <FaPalette /> },
    { title: "TypeScript", desc: "First-class type support.", icon: <FaCode /> },
    { title: "Positioning", desc: "6 dynamic screen positions.", icon: <FaArrowsAlt /> },
    { title: "Stacking", desc: "Intelligent notification queues.", icon: <FaLayerGroup /> },
    { title: "Interactive", desc: "Add buttons and custom JSX.", icon: <FaTerminal /> },
    { title: "Accessible", desc: "Focus on keyboard and screen readers.", icon: <FaFingerprint /> },
  ];

  return (
    <section className="py-24 bg-[#FDFCF7] border-t border-[#EEEADF]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Simple & Clean */}
        

        {/* Feature List - Bordered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#EEEADF]">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-10 border-r border-b border-[#EEEADF] group hover:bg-white transition-colors duration-300"
            >
              <div className="text-xl text-gray-300 mb-6 group-hover:text-[#2A1A10] transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-lg font-bold text-[#2A1A10] mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Simple Footer Text */}
        <div className="mt-16 flex items-center gap-4 text-gray-300">
           <div className="flex-grow h-[1px] bg-[#EEEADF]" />
           <p className="text-[10px] font-bold uppercase tracking-[0.4em]">vibe-toast core capabilities</p>
           <div className="flex-grow h-[1px] bg-[#EEEADF]" />
        </div>
      </div>
    </section>
  );
}