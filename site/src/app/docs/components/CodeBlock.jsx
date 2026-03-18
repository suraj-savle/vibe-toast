"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);
  const code = children?.props?.children || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <pre className="bg-[var(--code-panel)] text-gray-100 p-4 rounded-xl overflow-x-auto text-sm font-mono border border-white/5">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-700"
      >
        {copied ? <FiCheck className="text-green-400" /> : <FiCopy className="text-gray-400" />}
      </button>
    </div>
  );
}