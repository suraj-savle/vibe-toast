"use client";
import React, { useState } from "react";
import { BiBell, BiCopy, BiCheck } from "react-icons/bi";
import { toast } from "vibe-toast";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install vibe-toast");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePreview = () => {
    const promise = new Promise((res) => setTimeout(() => res(), 2000));
    toast.promise(promise, {
      loading: "Initializing...",
      success: "Vibe check complete!",
      error: "Error occurred",
      style: {
        background: "var(--card)",
        color: "var(--foreground)",
        border: "1px solid var(--border)",
      }
    });
  };

  return (
    <header className="flex flex-col items-center text-center pt-20 pb-15 mx-auto overflow-visible">
      {/* 1. Heading - Fixed clipping with extra horizontal padding and leading */}
      <div className="px-6">
        <h1 className="text-7xl md:text-9xl font-pacifico bg-linear-to-b from-[var(--foreground)] to-[var(--foreground)]/60 bg-clip-text text-transparent leading-[1.3] pb-4 px-4">
          vibe-toast
        </h1>
      </div>

      {/* 2. Body text using Roboto Slab */}
      <p className="text-[var(--foreground)] text-lg md:text-2xl max-w-2xl mt-4 mb-14 leading-relaxed font-light opacity-90 px-6">
        <span className="font-bold underline decoration-1 underline-offset-4">
          Morphing toast notifications
        </span> for React. 
        Organic blob animations, promise tracking, and minimal configuration.
      </p>

      {/* 3. Square Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-stretch px-6">
        
        {/* Copy Button (Square Style) */}
        <div className="flex items-center bg-white border border-[var(--border)] px-6 py-4 font-mono text-sm text-[var(--foreground)] shadow-sm">
          <span className="mr-3 font-bold opacity-30">$</span>
          <span className="pr-10">npm install vibe-toast</span>
          <button
            onClick={copyToClipboard}
            className="p-1 transition-all active:scale-90 text-[var(--foreground)] hover:text-[#2d7a5f]"
          >
            {copied ? (
              <BiCheck size={22} className="text-[#2d7a5f]" />
            ) : (
              <BiCopy size={20} className="opacity-50 hover:opacity-100" />
            )}
          </button>
        </div>

        {/* Primary Action Button (Square Charcoal) */}
        <button
          onClick={handlePreview}
          className="bg-[var(--foreground)] text-white px-10 py-4 font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all active:scale-95 border border-[var(--border)]"
        >
          <BiBell size={20} />
          <span>Preview Toast</span>
        </button>
      </div>
    </header>
  );
};