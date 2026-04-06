"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { resolveIcon } from "../utils/resolveIcon";
import { Toast, ToastAction } from "../types/types";
import { toastVariants } from "@/core/animations";

export const ToastItem = ({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: (id?: string) => void;
}) => {
  const [showDesc, setShowDesc] = useState(false);

  // ⏱ Auto dismiss
  useEffect(() => {
    const toastDuration = toast.duration;
    if (!toastDuration || toastDuration === Infinity) return;

    const timer = setTimeout(() => {
      onDismiss(toast.id);
    }, toastDuration);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, toast.updatedAt, onDismiss]);

  // 📦 Description delay
  useEffect(() => {
    const expansionTimer = setTimeout(() => setShowDesc(true), 300);
    return () => clearTimeout(expansionTimer);
  }, [toast.id, toast.updatedAt]);

  // 🎯 Icon
  const renderIcon = () => {
    const iconColor = toast.style?.accent || `var(--vibe-accent)`;

    if (toast.icon) {
      if (React.isValidElement(toast.icon)) {
        return React.cloneElement(toast.icon as React.ReactElement<any>, {
          size: 20,
          style: { color: iconColor, flexShrink: 0 },
        });
      }
      return toast.icon;
    }

    const iconElement = resolveIcon(toast.variant || "default");
    if (React.isValidElement(iconElement)) {
      return React.cloneElement(iconElement as React.ReactElement<any>, {
        size: 20,
        style: { color: iconColor, flexShrink: 0 },
      });
    }
    return iconElement;
  };

  const containerStyle: React.CSSProperties = {
    ...toast.style,
    backgroundColor: toast.style?.background || "var(--vibe-bg)",
    color: toast.style?.color || "var(--vibe-text-main)",
    borderColor: !!toast.style?.background
      ? "transparent"
      : "var(--vibe-border)",
  };

  const textStyle = { color: toast.style?.color || "inherit" };

  return (
    <motion.div
      layout
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`vibe-toast-card vibe-variant-${toast.variant}`}
      style={containerStyle}
      drag="x"
      dragConstraints={{ left: 0, right: 300 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 80 || info.velocity.x > 500) {
          onDismiss(toast.id);
        }
      }}
    >
      <div className="vibe-toast-inner">
        <div className="vibe-toast-icon-side">{renderIcon()}</div>

        <div className="vibe-toast-content-side">
          <div className="vibe-toast-top-row">
            <span className="vibe-toast-title" style={textStyle}>
              {toast.title}
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {toast.count && toast.count > 1 && (
                <span className="vibe-toast-count">X{toast.count}</span>
              )}

              <button
                className="vibe-close-btn"
                onClick={() => onDismiss(toast.id)}
              >
                <MdClose size={18} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showDesc && toast.description && (
              <motion.div
                key="desc"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.2, delay: 0.1 },
                }}
                style={{ overflow: "hidden" }}
              >
                <p className="vibe-description-text">{toast.description}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showDesc && toast.actions && toast.actions.length > 0 && (
              <motion.div
                key="actions"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.4 },
                  opacity: { duration: 0.2, delay: 0.1 },
                }}
              >
                <div className="vibe-action-stack">
                  {toast.actions.map((action: ToastAction, idx: number) => (
                    <button
                      key={idx}
                      className={`vibe-action-btn vibe-btn-${action.variant || "secondary"}`}
                      onClick={(e) => {
                        action.onClick(e);
                        if (!toast.duration || toast.duration !== Infinity)
                          onDismiss();
                      }}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ✅ Premium Progress Bar */}
      {!toast.hideProgressBar && toast.duration !== Infinity && (
        <div className="vibe-progress-track">
          <div
            key={`${toast.id}-${toast.updatedAt || 0}`}
            className="vibe-progress-fill"
            style={{
              animation: `vibe-progress-shrink ${toast.duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};
