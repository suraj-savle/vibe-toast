"use client";

import React, { useState } from "react";
import { IconCopy, IconCheck, IconTerminal, IconCode } from "@tabler/icons-react";
import { toast } from "vibe-toast";

export default function QuickStart() {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("npm install vibe-toast");
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
    toast.success("Install command copied!");
  };

  const copyUsage = () => {
    const code = `import { Toaster, toast } from 'vibe-toast';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <button onClick={() => toast.success('Hello!')}>
        Show Toast
      </button>
    </>
  );
}`;
    navigator.clipboard.writeText(code);
    setCopiedUsage(true);
    setTimeout(() => setCopiedUsage(false), 2000);
    toast.success("Usage code copied!");
  };

  return (
    <section id="quick-start" className="py-6 px-6">
      <div className="">
        {/* Header */}
        <header className="text-left mb-8">
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-main)" }}
        >
          Quick Start Guide
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Get Vibe Toast running in your project in 2 steps
        </p>
      </header>

        {/* Step 1 - Installation */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-semibold" >
              Install the package
            </h3>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-md border border-(--border)/50 max-w-xl ">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-(--card) border-b border-(--border)/20">
              <IconTerminal size={14}  />
              <span className="text-xs">terminal</span>
            </div>

            <div className="relative p-4">
              <pre className="font-mono text-sm overflow-x-auto">
                <code>npm install vibe-toast</code>
              </pre>

              <button
                onClick={copyInstall}
                className="absolute top-4 right-4 p-2 rounded-lg transition-all hover:bg-white/10"
              >
                {copiedInstall ? (
                  <IconCheck size={16}/>
                ) : (
                  <IconCopy size={16} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Step 2 - Usage */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-main)" }}>
              Add Toaster and trigger toasts
            </h3>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-md border border-(--border)/50 w-xl " >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-(--border)/20 bg-(--card)">
              <IconCode size={14} />
              <span className="text-xs">App.jsx or Main.jsx</span>
            </div>

            <div className="relative p-4">
              <pre className="font-mono text-sm overflow-x-auto" >
                <code>{`import { Toaster, toast } from 'vibe-toast';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <button onClick={() => toast.success('Hello!')}>
        Show Toast
      </button>
    </>
  );
}`}</code>
              </pre>

              <button
                onClick={copyUsage}
                className="absolute top-4 right-4 p-2 rounded-lg transition-all hover:bg-white/10"
              >
                {copiedUsage ? (
                  <IconCheck size={16} />
                ) : (
                  <IconCopy size={16}/>
                )}
              </button>
            </div>
          </div>

          {/* Comment Section */}
          <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="font-medium text-gray-600">💡 Tip:</span> Place <code className="px-1 py-0.5 rounded" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>&lt;Toaster /&gt;</code> once in your root component. 
              Then call <code className="px-1 py-0.5 rounded" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>toast.success()</code>, <code className="px-1 py-0.5 rounded" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>toast.error()</code>, or <code className="px-1 py-0.5 rounded" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>toast.info()</code> anywhere in your app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}