"use client";

import React, { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function VibeFAQ() {
  const faqs = [
    {
      q: "What is Vibe Toast?",
      a: "Vibe Toast is a lightweight, high-performance notification library for React. It provides smooth, organic morphing animations with a developer-first API that takes seconds to set up.",
    },
    {
      q: "Why choose this over other libraries?",
      a: "It's built for the modern web—tiny bundle size, zero dependencies, and a unique 'vibe' system that ensures your toasts look premium out of the box.",
    },
    {
      q: "Which positions are supported?",
      a: "6 flexible positions: top-left, top-right, top-center, bottom-left, bottom-right, and bottom-center.",
    },
    {
      q: "Is it fully customizable?",
      a: "Yes. Control animations, colors, layout, and even render custom React components.",
    },
    {
      q: "How beginner-friendly is it?",
      a: "Extremely. Just add the Toaster and call toast.success() anywhere.",
    },
    {
      q: "How does it handle multiple toasts?",
      a: "Smart stacking + queue system ensures smooth performance even with high-frequency events.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // Split FAQs into two columns
  const midIndex = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midIndex);
  const rightColumn = faqs.slice(midIndex);

  return (
    <section
      id="faq"
      className="py-6 px-4 md:px-6 relative overflow-hidden bg-(--background)"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-full mx-auto relative z-10">
        {/* Header */}
        <header className="text-left mb-8">
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-main)" }}
        >
          Got questions? We’ve got answers.
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Everything you need to know about vibe-toast, all in one place.
        </p>
      </header>

        {/* 2-Column FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, index) => {
              const actualIndex = midIndex + index;
              return (
                <FAQItem
                  key={actualIndex}
                  faq={faq}
                  isOpen={openIndex === actualIndex}
                  onClick={() =>
                    setOpenIndex(openIndex === actualIndex ? null : actualIndex)
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 pt-6 border-t border-gray-200/20">
          <p className="text-sm text-gray-500">
            Still have questions?{" "}
            <a 
              href="https://github.com/suraj-savle/vibe-toast/discussions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-(--text-main) font-medium transition-colors"
            >
              Join github cummunity
            </a>
            {" "}or{" "}
            <a 
              href="https://github.com/suraj-savle/vibe-toast/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-(--text-main) font-medium transition-colors"
            >
              Open an issue
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      layout
      className="group transition-all duration-300 border border-(--border)/20"
      style={{
        backgroundColor: isOpen ? "var(--card)" : "transparent",
      }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span
          className="text-base md:text-lg font-semibold transition pr-4"
          style={{
            color: isOpen ? "var(--text-main)" : "var(--foreground)",
            opacity: isOpen ? 1 : 0.8,
          }}
        >
          {faq.q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="p-2 flex-shrink-0"
        >
          <FiChevronDown
            size={16}
            style={{
              color: isOpen
                ? "var(--background)"
                : "var(--foreground)",
            }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="px-6 pb-6">
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  color: "var(--foreground)",
                  opacity: 0.7,
                }}
              >
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}