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
    <section className="py-6 bg-(--background)">
      <div className=" px-6">

        <header className="text-left mb-8">
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-main)" }}
        >
          Why Choose Vibe Toast?
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Everything you need to know about Vibe Toast.
        </p>
      </header>
        {/* Feature Grid - Utilizing the --border and --card variables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-(--border)/20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-10 border-r border-b border-(--border)/10 bg-(--background) group hover:bg-(--card) transition-all duration-300"
            >
              <div className="text-2xl text-(--foreground) opacity-20 mb-6 group-hover:opacity-100 transition-opacity">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-(--text-main) mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-(--foreground) opacity-60 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}