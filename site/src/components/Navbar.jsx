"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgNpm } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-[var(--border)]/10 bg-[var(--background)] sticky top-0 z-[100]">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-pacifico text-3xl tracking-tighter text-[var(--foreground)]"
          >
            vibe-toast
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-semibold">
            <Link href="/playground" className="text-gray-500 hover:text-[var(--foreground)] transition-colors">
              playground
            </Link>
            <Link href="/docs" className="text-gray-500 hover:text-[var(--foreground)] transition-colors">
              Docs
            </Link>
          </div>

          <div className="w-[1px] h-5 bg-[var(--border)]/20" />

          <div className="flex items-center gap-5 text-[var(--foreground)]/70">
            <a href="https://github.com/suraj-savle/vibe-toast" target="_blank" rel="noreferrer" className="hover:text-[var(--foreground)] transition-transform hover:scale-110">
              <BsGithub size={22} />
            </a>
            <a href="https://www.npmjs.com/package/vibe-toast" target="_blank" rel="noreferrer" className="hover:text-[#CB3837] transition-transform hover:scale-110">
              <CgNpm size={28} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-[var(--foreground)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--background)] border-b border-[var(--border)]/10 px-6 py-8 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <Link 
            href="/playground" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[var(--text-main)]"
          >
            playground
          </Link>
          <Link 
            href="/docs" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-[var(--text-main)]"
          >
            Docs
          </Link>
          
          <div className="h-[1px] bg-[var(--border)]/10 w-full" />
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/suraj-savle/vibe-toast" className="flex items-center gap-2 text-[var(--foreground)]/70 font-medium">
              <BsGithub size={20} /> GitHub
            </a>
            <a href="https://www.npmjs.com/package/vibe-toast" className="flex items-center gap-2 text-[var(--foreground)]/70 font-medium">
              <CgNpm size={24} /> NPM
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};