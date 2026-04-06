"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaSearch, FaStar, FaDownload, FaTimes } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";

const navigation = [
  {
    section: "GETTING STARTED",
    items: [
      { slug: "introduction", title: "Introduction", description: "What is vibe-toast and why use it" },
      { slug: "installation", title: "Installation", description: "Install via npm, yarn, or pnpm" },
      { slug: "quick-start", title: "Quick Start", description: "Create your first toast in minutes" },
    ]
  },
  {
    section: "CORE CONCEPTS",
    items: [
      { slug: "basic-usage", title: "Basic Usage", description: "Fundamental toast patterns" },
      { slug: "variants", title: "Toast Variants", description: "Success, error, warning, and info" },
      { slug: "actions", title: "Actions & Buttons", description: "Add interactive buttons to toasts" },
      { slug: "promises", title: "Promise Toasts", description: "Handle async operations gracefully" },
      { slug: "positions", title: "Positions", description: "Place toasts anywhere on screen" },
    ]
  },
  {
    section: "CUSTOMIZATION",
    items: [
      { slug: "theming", title: "Theming", description: "Customize colors and appearance" },
      { slug: "icons", title: "Icons", description: "Use custom icons in toasts" },
    ]
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [stars, setStars] = useState("...");
  const [downloads, setDownloads] = useState("...");
  const [version, setVersion] = useState("0.1.6");

  useEffect(() => {
    // Fetch GitHub Stars
    fetch("https://api.github.com/repos/suraj-savle/vibe-toast")
      .then(res => res.json())
      .then(data => {
        const count = data.stargazers_count;
        setStars(count > 999 ? (count / 1000).toFixed(1) + "k" : count.toString());
      })
      .catch(() => setStars("1.2k"));

    // Fetch NPM Downloads
    fetch("https://api.npmjs.org/downloads/point/last-month/vibe-toast")
      .then(res => res.json())
      .then(data => {
        const count = data.downloads || 0;
        setDownloads(count > 9999 ? (count / 1000).toFixed(1) + "k" : count.toString());
      })
      .catch(() => setDownloads("1.5k"));

    // Fetch latest version from NPM
    fetch("https://registry.npmjs.org/vibe-toast/latest")
      .then(res => res.json())
      .then(data => {
        if (data.version) setVersion(data.version);
      })
      .catch(() => setVersion("0.1.6"));
  }, []);

  const filteredNav = navigation.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  const clearSearch = () => setSearch("");

  return (
    <aside className="w-72 border-r border-[var(--border)]/10 bg-white/50 backdrop-blur-sm overflow-y-auto h-screen sticky top-0">
      <div className="p-5">
        {/* Logo */}
        <Link href="/" className="block mb-6 group">
          <h2 className="text-4xl font-pacifico text-(--text-main)">
            vibe-toast
          </h2>
          
        </Link>

        {/* Search Bar */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-3.5" />
          <input
            type="text"
            placeholder="Search docs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded py-2 pl-9 pr-8 text-sm focus:outline-none focus:ring-1 focus:(--foreground)/10  transition-all"
          />
          {search && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes size={12} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-6">
          {filteredNav.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">
                {section.section}
              </h3>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const href = `/docs/${item.slug}`;
                  const isActive = pathname === href;

                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        className={`block px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? 'bg-(--foreground)/5' 
                            : 'hover:bg-gray-50'
                        }`}
                        style={isActive ? { borderLeftColor: 'var(--text-main)' } : {}}
                      >
                        <span className={`text-sm font-medium block `}>
                          {item.title}
                        </span>
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                          {item.description}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Version Info */}
        <div className="mt-4 pt-3 text-center">
          <p className="text-[10px] text-gray-400">
            MIT Licensed • Open Source
          </p>
        </div>
      </div>
    </aside>
  );
}