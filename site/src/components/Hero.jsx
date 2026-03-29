"use client";

import React, { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install vibe-toast");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[50vh] md:min-h-[90vh] flex items-center justify-center px-4 md:px-6 overflow-hidden bg-(--background)">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="w-full max-w-6xl mx-auto text-center pt-20 md:pt-0"
      >
        {/* 1. Responsive Character-by-character Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-pacifico mb-4 md:mb-6 text-(--text-main) tracking-tight leading-tight md:leading-none select-none">
          {"vibe-toast".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* 2. Subtitle: Optimized font sizes for readability */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-(--foreground)/80 leading-relaxed mb-8 md:mb-12 font-medium px-2"
        >
          Beautiful toast notifications built for modern React apps.
          <br className="hidden sm:block" />
          <span className="text-(--foreground) font-bold sm:inline-block sm:mt-1">
            Smooth animations. Zero config. Premium DX.
          </span>
        </motion.p>

        {/* 3. Action Dock: Responsive sizing */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center px-2"
        >
          <div className="w-full max-w-[280px] sm:max-w-sm group">
            <div className="flex items-center justify-between rounded-xl md:rounded-2xl px-4 md:px-5 py-2 md:py-2.5 bg-(--card) border border-(--border) shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                <span className="text-(--foreground)/30 font-mono font-bold select-none text-xs md:text-sm">
                  $
                </span>
                <code className="text-xs md:text-base font-mono text-(--foreground) font-semibold tracking-tight truncate">
                  npm i vibe-toast
                </code>
              </div>

              <button
                onClick={copyToClipboard}
                className="p-2 md:p-3 text-(--text-main) hover:scale-110 active:scale-90 transition-all"
                aria-label="Copy command"
              >
                {copied ? (
                  <IconCheck size={18} className="text-green-600" />
                ) : (
                  <IconCopy size={18} />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};