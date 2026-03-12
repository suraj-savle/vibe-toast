import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { resolveIcon } from "../utils/resolveIcon";

export const ToastItem = ({
  toast,
  onDismiss,
}: {
  toast: any;
  onDismiss: () => void;
}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const duration = toast.duration;

  useEffect(() => {
    // 1. Reset and start progress bar
    setIsStarted(false);
    const progressTimer = setTimeout(() => setIsStarted(true), 50);

    // 2. DELAYED EXPANSION: Show description 300ms after the toast appears
    const expansionTimer = setTimeout(() => setShowDesc(true), 300);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(expansionTimer);
    };
  }, [toast.id]);

  // --- Icon Logic ---
  const renderIcon = () => {
    // Determine the color based on priority
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

    const iconElement = resolveIcon(toast.variant);
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
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      drag="x"
      dragConstraints={{ left: 0, right: 300 }}
      onDragEnd={(_, info) => info.offset.x > 80 && onDismiss()}
      className={`vibe-toast-card vibe-variant-${toast.variant}`}
      style={containerStyle}
    >
      <div className="vibe-toast-inner">
        <div className="vibe-toast-icon-side">{renderIcon()}</div>

        <div className="vibe-toast-content-side">
          <div className="vibe-toast-top-row">
            <span className="vibe-toast-title" style={textStyle}>
              {toast.title}
            </span>
            <button
              className="vibe-close-btn"
              onClick={onDismiss}
              style={textStyle}
            >
              <MdClose size={18} />
            </button>
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
        </div>
      </div>

      {!toast.hideProgressBar && duration !== Infinity && (
        <div className="vibe-progress-track">
          <div
            className="vibe-progress-fill"
            onTransitionEnd={onDismiss}
            style={{
              backgroundColor: toast.style?.accent || undefined,
              width: isStarted ? "0%" : "100%",
              transition: `width ${duration}ms linear`,
            }}
          />
        </div>
      )}
    </motion.div>
  );
};
