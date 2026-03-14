import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">© 2024 Vibe Toast • Built with Tailwind CSS</p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-400 hover:text-emerald-600">Privacy</a>
          <a href="#" className="text-sm text-gray-400 hover:text-emerald-600">License</a>
        </div>
      </div>
    </footer>
  );
};