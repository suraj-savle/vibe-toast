"use client";

import {
  IconBrandGithub,
  IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [stars, setStars] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for your fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Fetch GitHub Stars & Handle Scroll
  useEffect(() => {
    // Fetching from your vibe-toast repo
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
      className={`sticky top-0 z-[100] py-4 transition-all duration-300 bg-(--background)`}
    >
      <div className="flex justify-between items-center px-2 max-w-7xl mx-auto gap-8">
        
        {/* Left Side: Main Nav Links */}
        <div className="flex items-center gap-1 bg-muted/50 rounded-full">
          <NavLink href="/playground">Playground</NavLink>
          <NavLink href="/docs/introduction">Docs</NavLink>
        </div>

        {/* Right Side: FAQ, GitHub Stars, and CTA */}
        <div className="flex items-center gap-6 ml-auto">
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Got Questions?
          </button>

          <Link
            href="https://github.com/suraj-savle/vibe-toast"
            target="_blank"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {stars !== null && (
              <span className="flex items-center gap-1 bg-muted group-hover:bg-muted/80 px-2 py-0.5 rounded-full text-[10px] border border-border/50 transition-colors">
                <IconStarFilled size={10} className="" />
                {stars.toLocaleString()}
                <IconBrandGithub size={18} />
              </span>
            )}
          </Link>

          
        </div>
      </div>
      
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="px-2 py-1.5 text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-background rounded-full transition-all duration-200"
  >
    {children}
  </Link>
);