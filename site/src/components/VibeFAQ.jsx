"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function VibeFAQ() {
  const faqs = [
    {
      q: "What is Vibe Toast?",
      a: "Vibe Toast is a lightweight, high-performance notification library for React. It provides smooth, organic morphing animations with a developer-first API that takes seconds to set up.",
    },
    {
      q: "Why choose this over other libraries?",
      a: "It’s built for the 2026 web—tiny bundle size, zero external dependencies, and a unique 'vibe' system that ensures your toasts look premium out of the box.",
    },
    {
      q: "Which positions are supported?",
      a: "Total flexibility with 6 core positions: top-left, top-right, top-center, bottom-left, bottom-right, and bottom-center.",
    },
    {
      q: "Is it fully customizable?",
      a: "Yes. Every aspect from spring physics and colors to rendering your own custom React components is supported through a simple config object.",
    },
    {
      q: "How beginner-friendly is it?",
      a: "Extremely. Just wrap your app in the Provider and call toast.success() from anywhere. No complex state management required.",
    },
    {
      q: "How does it handle high-frequency toasts?",
      a: "It features an intelligent stacking engine and queue management that prevents layout thrashing even when firing multiple notifications simultaneously.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-[var(--background)] px-6 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--text-main)]/5 rounded-full blur-[120px] -z-10" />

      <div className=" mx-auto">
       

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      initial={false}
      className={`group w-full rounded border transition-all duration-300 ${
        isOpen 
          ? "border-[var(--text-main)] shadow-xl shadow-[var(--text-main)]/5" 
          : "border-[var(--border)]/20 bg-transparent hover:border-[var(--border)]/30"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
      >
        <span className={`text-lg font-bold w-full transition-colors duration-300 ${
          isOpen ? "text-[var(--text-main)]" : "text-[var(--text-main)]/80"
        }`}>
          {faq.q}
        </span>

        <div className={`p-2 rounded-full transition-all duration-300 ${
          isOpen ? " rotate-180" : ""
        }`}>
          <FiChevronDown size={18} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="px-6 md:px-8 pb-8">
              <p className="text-[var(--foreground)]/70 leading-relaxed font-medium">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}