"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronRight, FiGithub, FiStar } from "react-icons/fi";

export default function DocsClient({ children, navigation }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-[#1a1a1a] text-white p-4 rounded-full shadow-lg"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`
        fixed lg:hidden top-0 left-0 h-full w-80 bg-white border-r border-[var(--border)] 
        overflow-y-auto z-50 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-bold text-xl">notiflow</span>
            </Link>
            <button onClick={() => setSidebarOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          {/* GitHub stats */}
          <div className="flex items-center gap-4 mb-8 text-sm">
            <a href="https://github.com" className="flex items-center gap-1 text-gray-600 hover:text-black">
              <FiGithub /> <span>GitHub</span>
            </a>
            <a href="https://github.com/stars" className="flex items-center gap-1 text-gray-600 hover:text-black">
              <FiStar /> <span>1.2k</span>
            </a>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-6">
            {navigation.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
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
                          onClick={() => setSidebarOpen(false)}
                          className={`
                            flex items-center gap-2 px-3 py-2 rounded-lg text-sm
                            transition-colors duration-200
                            ${isActive 
                              ? 'bg-gray-100 text-black font-medium' 
                              : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                            }
                          `}
                        >
                          <span>{item.icon}</span>
                          <span className="flex-1">{item.title}</span>
                          {isActive && <FiChevronRight className="text-gray-400" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </>
  );
}