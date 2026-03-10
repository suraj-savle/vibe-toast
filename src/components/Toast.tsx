import type { Toast } from "../types/types";

interface ToastProps {
  toast: Toast;
}

export function Toast({ toast }: ToastProps) {
  return (
    <div>
      <strong>{toast.title}</strong>
      <div>{toast.description}</div>
    </div>
  );
}
