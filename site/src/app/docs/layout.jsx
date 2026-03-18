"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import this
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import { FiMenu, FiX, FiMoreVertical } from "react-icons/fi";
import { Toaster } from "vibe-toast";

export default function DocsLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get current path

  // Auto-close sidebars on navigation (Mobile only)
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
      setRightPanelOpen(false);
    }
  }, [pathname, isMobile]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // On desktop, keep them open. On mobile, keep them closed by default.
      setSidebarOpen(!mobile);
      setRightPanelOpen(!mobile);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const closeAll = () => {
    setSidebarOpen(false);
    setRightPanelOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#FDFCF7] relative overflow-hidden text-[#2A1A10]">
      
      {/* 1. MOBILE HEADER */}
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-[#EEEADF] z-[60] flex items-center justify-between px-4">
          <button
            onClick={() => { setSidebarOpen(!sidebarOpen); setRightPanelOpen(false); }}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
          
          <h2 className="font-black text-sm uppercase tracking-widest">
            vibe-toast <span className="text-gray-400 font-medium ml-1">docs</span>
          </h2>
          
          <button
            onClick={() => { setRightPanelOpen(!rightPanelOpen); setSidebarOpen(false); }}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            {rightPanelOpen ? <FiX size={20} /> : <FiMoreVertical size={20} />}
          </button>
        </header>
      )}

      {/* 2. OVERLAY */}
      {isMobile && (sidebarOpen || rightPanelOpen) && (
        <div
          className="fixed inset-0 bg-[#2A1A10]/40 z-40 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-300"
          onClick={closeAll}
        />
      )}

      {/* 3. LEFT SIDEBAR */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-50 bg-[#FDFCF7]
          transition-transform duration-300 ease-in-out border-r border-[#EEEADF]/50
          ${isMobile 
            ? sidebarOpen ? 'translate-x-0 w-[280px] pt-16 shadow-2xl' : '-translate-x-full w-[280px]'
            : 'translate-x-0 w-72 flex-shrink-0'
          }
        `}
      >
        <Sidebar onClose={closeAll} />
      </div>

      {/* 4. MAIN CONTENT */}
      <main 
        className={`
          flex-1 h-full overflow-y-auto scroll-smooth custom-scrollbar
          ${isMobile ? 'pt-16' : ''}
        `}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
          {children}
        </div>
      </main>

      {/* 5. RIGHT PANEL */}
      <div
        className={`
          fixed lg:sticky top-0 right-0 h-screen z-50 bg-[#FDFCF7]
          transition-transform duration-300 ease-in-out border-l border-[#EEEADF]/50
          ${isMobile 
            ? rightPanelOpen ? 'translate-x-0 w-[280px] pt-16 shadow-2xl' : 'translate-x-full w-[280px]'
            : 'translate-x-0 w-80 flex-shrink-0'
          }
        `}
      >
        <RightPanel onClose={closeAll} />
      </div>

      <Toaster 
        position="top-right"
        theme="light"
        duration={4000}
      />
    </div>
  );
}