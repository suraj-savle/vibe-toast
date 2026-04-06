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
      {/* Terminal Header */}
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-t-xl border-b"
        style={{
          backgroundColor: "#f5f5f5",
          borderColor: "rgba(31,31,31,0.1)",
        }}
      >
        <span className="text-xs text-gray-500 ml-2 font-mono">cmd</span>
        <button
          onClick={handleCopy}
          className="absolute right-3 p-1.5 rounded-md transition-all hover:bg-gray-100"
        >
          {copied ? (
            <FiCheck size={14} />
          ) : (
            <FiCopy size={14} />
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre
        className="bg-white p-4 rounded-b-xl overflow-x-auto text-sm font-mono border border-t-0"
        style={{
          backgroundColor: "var(--code-panel)",
          borderColor: "rgba(31,31,31,0.1)",
        }}
      >
        <code className="text-gray-800">{code}</code>
      </pre>

      {/* Copy Button */}
    </div>
  );
}
