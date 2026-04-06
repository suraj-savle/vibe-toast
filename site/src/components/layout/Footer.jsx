"use client";

import Link from "next/link";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { CgNpm } from "react-icons/cg";

export const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)]/10 bg-[var(--background)] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <h2 className="font-pacifico text-xl md:text-2xl text-[var(--text-main)]">
              vibe-toast
            </h2>
            <p className="text-sm opacity-60 max-w-xs leading-relaxed">
              Lightweight toast system for React with smooth animations and
              clean developer experience.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">
              Explore
            </span>

            <Link
              href="/docs/introduction"
              className="text-sm hover:opacity-70 transition"
            >
              Documentation
            </Link>

            <button
              onClick={() => scrollToSection("playground")}
              className="text-sm text-left hover:opacity-70 transition"
            >
              Playground
            </button>

            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm text-left hover:opacity-70 transition"
            >
              FAQ
            </button>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">
              Community
            </span>

            <Link
              href="https://github.com/suraj-savle/vibe-toast"
              target="_blank"
              className="text-sm hover:opacity-70 transition"
            >
              GitHub
            </Link>

            <Link
              href="https://npmjs.com/package/vibe-toast"
              target="_blank"
              className="text-sm hover:opacity-70 transition"
            >
              NPM Package
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[var(--border)]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <p className="text-xs opacity-50 text-center md:text-left">
            © 2026 vibe-toast • MIT License
          </p>

          {/* Right - Social */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/suraj-savle/vibe-toast"
              target="_blank"
              className="hover:opacity-60 transition"
            >
              <BsGithub size={18} />
            </Link>

            <Link
              href="https://npmjs.com/package/vibe-toast"
              target="_blank"
              className="hover:opacity-60 transition"
            >
              <CgNpm size={22} />
            </Link>

            <Link
              href="https://x.com/SurajSavle"
              target="_blank"
              className="hover:opacity-60 transition"
            >
              <BsTwitterX size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};