import type { Toast, ToastOptions } from "../types/types";

type Listener = (toasts: Toast[]) => void;

let toasts: Toast[] = [];
const listeners = new Set<Listener>();

const DEFAULT_DURATION = 4000;
const DEFAULT_POSITION = "top-center";

function emit() {
  listeners.forEach((l) => l(toasts));
}

export function subscribe(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function createToast(options: ToastOptions) {
  const id = options.id ?? crypto.randomUUID();

  const toast: Toast = {
    id,
    title: options.title ?? "",
    description: options.description ?? "",
    duration:
      options.variant === "loading"
        ? Infinity
        : (options.duration ?? DEFAULT_DURATION),
    position: options.position ?? DEFAULT_POSITION,
    variant: options.variant ?? "default",
    progress: options.progress ?? false,
    icon: options.icon, // ✅ NEW
    render: options.render,
  };

  toasts = [...toasts, toast];
  emit();

  if (toast.duration !== Infinity) {
    setTimeout(() => removeToast(id), toast.duration);
  }

  return id;
}

export function updateToast(id: string, options: Partial<ToastOptions>) {
  toasts = toasts.map((t) =>
    t.id === id
      ? {
          ...t,
          ...options,
        }
      : t,
  );
  emit();
}

export function removeToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  emit();
}
