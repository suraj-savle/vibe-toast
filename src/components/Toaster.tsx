import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useToasts } from "../hooks/use-toast";
import { removeToast } from "../core/store";
import type { ToastPosition, ToastTheme, ToastVariant } from "../types/types";
import { Check, X, Info, Loader2, Bell } from "lucide-react";

const variantColors: Record<ToastVariant, string> = {
  default: "#000000",
  success: "#00ab66",
  error: "#e11d48",
  info: "#2563eb",
  loading: "#7c3aed",
};

export function Toaster({ theme = "light" }: { theme?: ToastTheme }) {
  const toasts = useToasts();
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(media.matches);
    const listener = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [theme]);

  const isDark = theme === "system" ? systemDark : theme === "dark";

  const grouped = toasts.reduce((acc, toast) => {
    if (!acc[toast.position]) acc[toast.position] = [];
    acc[toast.position].push(toast);
    return acc;
  }, {} as Record<string, typeof toasts>);

  return (
    <>
      {Object.entries(grouped).map(([position, items]) => (
        <div
          key={position}
          style={{
            position: "fixed",
            zIndex: 9999,
            display: "flex",
            flexDirection: position.includes("top") ? "column" : "column-reverse",
            gap: "8px",
            padding: "16px",
            pointerEvents: "none",
            inset: 0,
            justifyContent: position.includes("top") ? "flex-start" : "flex-end",
            alignItems: position.includes("left") ? "flex-start" : position.includes("right") ? "flex-end" : "center",
          }}
        >
          <AnimatePresence mode="popLayout">
            {items.map((toast) => (
              <motion.div
                layout
                key={toast.id}
                initial={{ opacity: 0, scale: 0.8, y: position.includes("top") ? -10 : 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                style={{
                  pointerEvents: "auto",
                  minWidth: "220px",
                  maxWidth: "380px",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: isDark ? "#1f1f1f" : "#fff",
                  color: isDark ? "#fff" : "#333",
                  // Simple, crisp border and soft shadow
                  border: isDark ? "1px solid #333" : "1px solid #e5e5e5",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => removeToast(toast.id)}
              >
                {/* Minimal Icon */}
                <div style={{ color: variantColors[toast.variant], display: "flex", flexShrink: 0 }}>
                  {toast.variant === "loading" ? (
                    <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                  ) : (
                    toast.icon ?? (
                      toast.variant === "success" ? <Check size={18} strokeWidth={3} /> :
                      toast.variant === "error" ? <X size={18} strokeWidth={3} /> :
                      toast.variant === "info" ? <Info size={18} /> : <Bell size={18} />
                    )
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  {toast.title && (
                    <p style={{ margin: 0, fontSize: "14px", fontWeight: 500 }}>
                      {toast.title}
                    </p>
                  )}
                  {toast.description && (
                    <p style={{ margin: 0, fontSize: "13px", opacity: 0.6, fontWeight: 400 }}>
                      {toast.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ))}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </>
  );
}