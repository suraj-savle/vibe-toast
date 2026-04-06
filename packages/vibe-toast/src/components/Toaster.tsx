import React from "react";
import { AnimatePresence } from "framer-motion";
import { useToast } from "../hooks/use-toast";
import { ToasterProps } from "../types/types";
import { ToastItem } from "./ToastItem";

export const Toaster: React.FC<ToasterProps> = ({
  position = "top-center",
  theme = "light",
  duration: globalDuration,
  hideProgressBar: globalHideProgress = true,
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
        gap: "10px",
      }}
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
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
