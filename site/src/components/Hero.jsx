import React from "react";
import { BiBell } from "react-icons/bi";

export const Hero = ({ onMakeToast }) => {
  return (
    <header className="flex flex-col items-start text-left px-6 md:px-20 pt-20 pb-16 max-w-4xl">
      <div className="mb-6 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full inline-flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-mono text-gray-500">v0.2.0</span>
      </div>

      <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#2d7a5f] mb-6 flex items-center gap-4">
        vibe-toast <span className="text-5xl md:text-7xl">☁️</span>
      </h1>
      
      <p className="text-gray-500 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
        Morphing toast notifications for React. Organic blob animations, 
        promise tracking, and full customization out of the box.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-mono text-sm text-gray-600 group">
          <span className="mr-2 text-gray-400">$</span>
          npm install vibe-toast
          <button className="ml-4 p-1 hover:bg-gray-200 rounded transition-colors">📋</button>
        </div>
        <button 
          onClick={onMakeToast}
          className="bg-[#2d7a5f] text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-emerald-100"
        >
           <BiBell size={20} /> Preview Toast
        </button>
      </div>
    </header>
  );
};