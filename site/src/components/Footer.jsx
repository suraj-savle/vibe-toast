import React from "react";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { CgNpm } from "react-icons/cg";

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="font-pacifico text-2xl text-[var(--foreground)]">
              vibe-toast
            </h2>
            <p className="text-sm max-w-xs opacity-60 leading-relaxed">
              An open-source notification system for React focused on organic motion and developer experience.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Library</span>
              <a href="/docs" className="text-sm hover:underline underline-offset-4">Documentation</a>
              <a href="/playground" className="text-sm hover:underline underline-offset-4">Playground</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Community</span>
              <a href="https://github.com" className="text-sm hover:underline underline-offset-4">GitHub</a>
              <a href="https://npmjs.com" className="text-sm hover:underline underline-offset-4">NPM Registry</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Sharp & Square */}
        <div className="mt-16 pt-8 border-t border-[var(--border)]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 border border-[var(--border)] text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d7a5f] animate-pulse" />
              All Systems Operational
            </div>
            <p className="text-[10px] font-medium opacity-40 uppercase tracking-widest">
              © 2026 Vibe Toast • MIT License
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-[var(--foreground)]">
            <a href="#" className="hover:opacity-60 transition-opacity"><BsGithub size={20} /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><CgNpm size={24} /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><BsTwitterX size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};