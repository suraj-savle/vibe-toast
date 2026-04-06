"use client";

import React from "react";
import { FiBell, FiLayers, FiZap, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function VibeGroupFeature() {
  const basicToasts = [
    { id: 1, title: "Login failed", message: "Invalid credentials", time: "just now" },
    { id: 2, title: "Session expired", message: "Please sign in again", time: "2s ago" },
    { id: 3, title: "Connection lost", message: "Retrying...", time: "5s ago" },
  ];

  const vibeToasts = [
    { id: 1, title: "Login failed", message: "Invalid credentials", count: 3 },
    { id: 2, title: "Connection lost", message: "Network issues", count: 2 },
  ];

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--text-main)" }}>
            Clean toasts. No clutter.
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--foreground)", opacity: 0.6 }}>
            Traditional toasts pile up. Vibe Toast groups them intelligently.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column - Traditional Toast */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full" style={{ background: "var(--foreground)", opacity: 0.3 }}></div>
              <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--foreground)", opacity: 0.5 }}>
                Traditional Toast
              </h3>
            </div>
            
            <div className="rounded-xl border p-5 space-y-3" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              {basicToasts.map((toast, idx) => (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{ 
                    background: "var(--background)", 
                    border: "1px solid var(--border)",
                    opacity: 0.8
                  }}
                >
                  <div className="flex items-center gap-3">
                    <FiBell className="w-4 h-4" style={{ color: "var(--foreground)", opacity: 0.5 }} />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--text-main)" }}>{toast.title}</p>
                      <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.5 }}>{toast.message}</p>
                    </div>
                  </div>
                  <span className="text-xs" style={{ color: "var(--foreground)", opacity: 0.3 }}>{toast.time}</span>
                </motion.div>
              ))}
              
              <div className="mt-3 pt-3 text-center border-t" style={{ borderColor: "var(--border)" }}>
                <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.4 }}>
                  3 toasts = cluttered screen
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Vibe Toast */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="w-1 h-4 rounded-full" style={{ background: "var(--text-main)" }}></div>
              <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--text-main)" }}>
                Vibe Toast
              </h3>
            </div>
            
            <div className="rounded-xl border p-5 space-y-4" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              {vibeToasts.map((toast, idx) => (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Stack effect - using theme colors */}
                  <div className="absolute -bottom-1 left-1 right-1 h-12 rounded-lg" style={{ background: "var(--foreground)", opacity: 0.05 }}></div>
                  <div className="absolute -bottom-0.5 left-0.5 right-0.5 h-12 rounded-lg" style={{ background: "var(--foreground)", opacity: 0.02 }}></div>
                  
                  {/* Main toast */}
                  <div className="relative flex items-center justify-between p-3 rounded-lg border-2" style={{ background: "var(--card)", borderColor: "var(--text-main)" }}>
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg" style={{ background: "var(--background)" }}>
                        <FiBell className="w-4 h-4" style={{ color: "var(--text-main)" }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold" style={{ color: "var(--text-main)" }}>{toast.title}</p>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: "var(--background)", color: "var(--text-main)" }}>
                            +{toast.count}
                          </span>
                        </div>
                        <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.6 }}>{toast.message}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-10 h-7 rounded-full" style={{ background: "var(--text-main)" }}>
                      <span className="text-xs font-bold" style={{ color: "var(--background)" }}>x{toast.count + 1}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div className="mt-3 pt-3 flex items-center justify-center gap-2">
                <FiCheckCircle className="w-3.5 h-3.5" style={{ color: "var(--text-main)", opacity: 0.6 }} />
                <p className="text-xs" style={{ color: "var(--foreground)", opacity: 0.6 }}>
                  Grouped • Stacked • Clean
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 text-center border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm mb-4" style={{ color: "var(--foreground)", opacity: 0.6 }}>
            ✨ 5 errors become 1 smart card
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all"
            style={{ background: "var(--text-main)", color: "var(--background)" }}
          >
            See grouping in action
            <FiArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}