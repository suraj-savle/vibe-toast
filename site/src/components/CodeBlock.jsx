"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function CodeBlock({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <FiCheck className="text-green-400" /> : <FiCopy className="text-gray-400" />}
      </button>
    </div>
  );
}