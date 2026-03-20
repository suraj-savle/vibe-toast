"use client";

import React from "react";
import {
  FiWind,
  FiZap,
  FiEdit3,
  FiCode,
  FiMaximize,
  FiLayers,
  FiTerminal,
  FiShield,
} from "react-icons/fi";

export default function VibeFeatures() {
  const features = [
    {
      title: "Lightweight",
      desc: "Zero external dependencies. Tiny 1.4kb bundle footprint.",
      icon: <FiWind />,
    },
    {
      title: "Shorthand API",
      desc: "Intuitive methods like toast.success() for rapid development.",
      icon: <FiZap />,
    },
    {
      title: "Customizable",
      desc: "Total control over themes, animations, and custom JSX.",
      icon: <FiEdit3 />,
    },
    {
      title: "TypeScript",
      desc: "First-class type support for a rock-solid developer experience.",
      icon: <FiCode />,
    },
    {
      title: "Positioning",
      desc: "6 dynamic screen positions with smart collision detection.",
      icon: <FiMaximize />,
    },
    {
      title: "Stacking",
      desc: "Intelligent notification queues with elegant entry/exit flows.",
      icon: <FiLayers />,
    },
    {
      title: "Interactive",
      desc: "Add buttons, inputs, or complex components inside toasts.",
      icon: <FiTerminal />,
    },
    {
      title: "Accessible",
      desc: "WAI-ARIA compliant. Focus on keyboard and screen readers.",
      icon: <FiShield />,
    },
  ];

  return (
    <section className="py-24 bg-[var(--background)] border-t border-[var(--border)]/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Feature Grid - Utilizing the --border and --card variables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[var(--border)]/10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-10 border-r border-b border-[var(--border)]/10 bg-[var(--background)] group hover:bg-[var(--card)] transition-all duration-300"
            >
              <div className="text-2xl text-[var(--foreground)] opacity-20 mb-6 group-hover:opacity-100 transition-opacity">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-[var(--foreground)] opacity-60 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
