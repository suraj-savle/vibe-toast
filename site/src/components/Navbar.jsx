import React from "react";
import { FaGithub } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6 md:px-20 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight text-[#2d7a5f]">vibe-toast ☁️</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-6 bg-gray-50 px-6 py-2 rounded-full border border-gray-200">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Examples</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Builder</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Docs</a>
        </div>
        <div className="flex gap-4 text-gray-400">
          <FaGithub size={20} className="hover:text-black cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};