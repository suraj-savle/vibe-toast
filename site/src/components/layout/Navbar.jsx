"use client";

import {
  IconBrandGithub,
  IconStarFilled,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [stars, setStars] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
  setIsOpen(false);

  setTimeout(() => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 80;
    const top =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, 200);
};

  useEffect(() => {
    fetch("https://api.github.com/repos/suraj-savle/vibe-toast")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(null));

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[100] py-4 transition-all duration-300`}
    >
      <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        {/* --- MOBILE ONLY: LOGO --- */}
        <div className="flex md:hidden items-center gap-2">
          <span className="font-pacifico text-xl text-(--text-main)">
            vibe-toast
          </span>
        </div>

        {/* --- DESKTOP VIEW: ORIGINAL LAYOUT (Hidden on Mobile) --- */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("playground")}
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Playground
          </button>
          <button
            onClick={() => scrollToSection("quick-start")}
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Quick Start
          </button>
          <Link
            href="/docs/introduction"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            Docs
          </Link>
        </div>

        {/* --- RIGHT SIDE: GITHUB & MOBILE TOGGLE --- */}
        <div className="flex items-center gap-4">
          {/* Desktop Only Extra Link */}
          <button
            onClick={() => scrollToSection("faq")}
            className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Got Questions?
          </button>
          {/* GitHub Stars (Visible on all screens) */}
          <Link
            href="https://github.com/suraj-savle/vibe-toast"
            target="_blank"
            className="hidden md:block group"
          >
            {stars !== null && (
              <span className="flex items-center gap-2 bg-slate-100 group-hover:bg-slate-200 px-3 py-1.5 rounded-full text-xs font-bold transition-all">
                <IconStarFilled size={12} />
                {stars.toLocaleString()}
                <IconBrandGithub size={18} className="text-slate-700" />
              </span>
            )}
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-(--background) border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col items-center p-5 gap-6">
              <button
                onClick={() => scrollToSection("playground")}
                className=""
              >
                Playground
              </button>
              <button
                onClick={() => scrollToSection("quick-start")}
                className=""
              >
                Quick Start
              </button>
              <Link href="/docs/introduction" className="">
                Docs
              </Link>
              <button
                onClick={() => scrollToSection("faq")}
                className=""
              >
                FAQ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
