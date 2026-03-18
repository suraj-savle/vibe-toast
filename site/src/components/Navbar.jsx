import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgNpm } from "react-icons/cg";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-(--border)/30 bg-[var(--background)] sticky top-0 z-50">
      {/* Logo using Pacifico Font and Charcoal Color */}
      <div className="flex items-center">
        <span className="font-pacifico text-3xl tracking-tighter text-[var(--foreground)]">
          vibe-toast
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <a
            href="/playground"
            className="text-sm font-semibold text-gray-500 hover:text-[var(--foreground)] transition-colors"
          >
            playground
          </a>
          <a
            href="/docs"
            className="text-sm font-semibold text-gray-500 hover:text-[var(--foreground)] transition-colors"
          >
            Docs
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-5 bg-[var(--border)]" />

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-[var(--foreground)]/70">
          <a 
            href="https://github.com/suraj-savle/vibe-toast" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[var(--foreground)] transition-transform hover:scale-110"
          >
            <BsGithub size={22} />
          </a>
          <a 
            href="https://www.npmjs.com/package/vibe-toast" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#CB3837] transition-transform hover:scale-110"
          >
            <CgNpm size={28} />
          </a>
        </div>
      </div>
    </nav>
  );
};