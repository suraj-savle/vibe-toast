import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "../hooks/use-toast";
import { ToasterProps } from "../types/types";
import { ToastItem } from "./ToastItem";

export const Toaster: React.FC<ToasterProps> = ({
  position = "top-right",
  theme = "system",
  duration: globalDuration, // Added
  hideProgressBar: globalHideProgress, // Added
}) => {
  const { toasts, dismiss } = useToast();
  const isTop = position.includes("top");

  return (
    <div
      className={`vibe-toaster-container ${position}`}
      data-theme={theme}
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: isTop ? "column" : "column-reverse",
        alignItems: position.includes("center")
          ? "center"
          : position.includes("left")
            ? "flex-start"
            : "flex-end",
        pointerEvents: "none",
        zIndex: 9999,
        padding: "16px",
        inset: 0,
        gap: "12px",
      }}
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id} // This MUST stay here for AnimatePresence
            toast={{
              ...toast,
              duration: toast.duration ?? globalDuration,
              hideProgressBar: toast.hideProgressBar ?? globalHideProgress,
            }}
            onDismiss={dismiss}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
