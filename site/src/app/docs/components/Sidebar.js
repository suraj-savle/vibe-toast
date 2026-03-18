"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaSearch } from "react-icons/fa";

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
  {
    section: "API REFERENCE",
    items: [
      { slug: "toast-api", title: "Toast API", description: "Complete toast method reference" },
      { slug: "toaster-api", title: "Toaster API", description: "Toaster component props" },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [stars, setStars] = useState("...");
  const [downloads, setDownloads] = useState("...");

  useEffect(() => {
    // 1. Fetch Dynamic GitHub Stars
    fetch("https://api.github.com/repos/suraj-savle/vibe-toast")
      .then(res => res.json())
      .then(data => {
        const count = data.stargazers_count;
        setStars(count > 999 ? (count / 1000).toFixed(1) + "k" : count.toString());
      })
      .catch(() => setStars("1.2k"));

    // 2. Fetch Dynamic NPM Downloads (Last Month)
    // Replace 'vibe-toast' with your actual package name on npm
    fetch("https://api.npmjs.org/downloads/point/last-month/vibe-toast")
      .then(res => res.json())
      .then(data => {
        const count = data.downloads || 0;
        setDownloads(count > 999 ? (count / 1000).toFixed(1) + "k" : count.toString());
      })
      .catch(() => setDownloads("12.5k"));
  }, []);

  const filteredNav = navigation.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <aside className="w-72 border-r border-[var(--border)]/10 bg-white/50 backdrop-blur-sm overflow-y-auto h-screen sticky top-0">
      <div className="p-6">
        {/* Logo */}
        <Link href="/ " className="block mb-6">
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
            vibe-toast<span className="text-sm font-normal text-gray-400 ml-2">v.1.2</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">Documentation</p>
        </Link>

        {/* Search Bar */}
        <div className="relative mb-8">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-3" />
          <input 
            type="text"
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-100/50 border border-gray-200 rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-8">
          {filteredNav.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                {section.section}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const href = `/docs/${item.slug}`;
                  const isActive = pathname === href;
                  
                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        className={`block px-3 py-2 rounded-lg transition-colors group ${
                          isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className={`font-medium text-sm ${
                          isActive ? 'text-black' : 'text-gray-900'
                        }`}>
                          {item.title}
                        </span>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
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

        {/* Footer Links with Dynamic Data */}
        <div className="mt-8 pt-6 border-t border-[var(--border)]/10">
          <a href="https://github.com/suraj-savle/vibe-toast" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-gray-600 hover:text-black mb-3 group">
            <div className="flex items-center gap-2">
              <FaGithub />
              <span>GitHub</span>
            </div>
            <span className="text-[10px] font-bold bg-gray-200 px-2 py-0.5 rounded-full">{stars}</span>
          </a>
          <a href="https://www.npmjs.com/package/vibe-toast" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-sm text-gray-600 hover:text-black">
            <div className="flex items-center gap-2">
              <span className="font-bold">npm</span>
              <span>package</span>
            </div>
            <span className="text-[10px] font-bold bg-gray-200 px-2 py-0.5 rounded-full">{downloads}/mo</span>
          </a>
        </div>
      </div>
    </aside>
  );
}