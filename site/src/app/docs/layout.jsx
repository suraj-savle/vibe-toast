"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import { FiMenu, FiX, FiMoreVertical } from "react-icons/fi";
import { Toaster } from "vibe-toast";
import Link from "next/link";

export default function DocsLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const pathname = usePathname();

  // Fix: Use a side-effect that doesn't trigger immediate cascading renders
  // and close sidebars when the URL changes
  useEffect(() => {
    const handleRouteChange = () => {
      setSidebarOpen(false);
      setRightPanelOpen(false);
    };
    handleRouteChange();
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-[#FDFCF7] text-[#2A1A10] w-full m-0 p-0">
      
      {/* MOBILE HEADER - No padding, full width */}
      <header className="lg:hidden fixed top-0 w-full h-12 bg-(--background) border-b border-[#EEEADF] z-50 flex items-center justify-between">
        <button 
          onClick={() => { setSidebarOpen(true); setRightPanelOpen(false); }} 
          className="h-full px-4 hover:bg-[#F3F0E6]"
        >
          <FiMenu size={20} />
        </button>
        <Link href="/" className="font-pacifico text-xl">
          vibe-toast
        </Link>
        <button 
          onClick={() => { setRightPanelOpen(true); setSidebarOpen(false); }} 
          className="h-full px-4 hover:bg-[#F3F0E6]"
        >
          <FiMoreVertical size={20} />
        </button>
      </header>

      {/* OVERLAY */}
      {(sidebarOpen || rightPanelOpen) && (
        <div 
          className="fixed inset-0 bg-black/5 backdrop-blur-[1px] z-60 lg:hidden" 
          onClick={() => { setSidebarOpen(false); setRightPanelOpen(false); }} 
        />
      )}

      {/* LEFT SIDEBAR - Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-[70] w-fit bg-[#FDFCF7] border-r border-[#EEEADF]/60 transition-transform duration-200
        lg:sticky lg:translate-x-0 lg:z-30 lg:h-screen lg:top-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="h-full overflow-hidden">
          {/* Sidebar content should handle its own internal padding if needed */}
          <Sidebar />
        </div>
      </aside>

      {/* MAIN CONTENT - ZERO PADDING */}
      <main className="flex-1 min-w-0 w-full p-4 m-4">
        <div className="w-full pt-12 lg:pt-10"> 
          {/* pt-12 only on mobile to clear the fixed header */}
          {children}
        </div>
      </main>

      {/* RIGHT PANEL - Drawer */}
      <aside className={`
        fixed inset-y-0 right-0 z-[70] w-84 bg-[#FDFCF7] border-l border-[#EEEADF]/60 transition-transform duration-200
        lg:sticky lg:translate-x-0 lg:z-30 lg:h-screen lg:top-0
        ${rightPanelOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <div className="h-full overflow-y-auto">
          <RightPanel />
        </div>
      </aside>

      <Toaster position="bottom-right" />
    </div>
  );
}