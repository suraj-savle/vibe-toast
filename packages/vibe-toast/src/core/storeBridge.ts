// packages/vibe-toast/src/core/storeBridge.ts
import React from 'react';
import { 
  Toast, 
  ToastOptions, 
  PromiseOptions, 
  ToastVariant, 
  ToastFunction 
} from "../types/types";
import { generateId } from "../utils/generateId";

export const DEFAULT_TIMEOUTS: Record<ToastVariant, number> = {
  default: 4000,
  success: 4000,
  error: 4000,
  loading: Infinity,
  warning: 4000,
  info: 4000,
};

interface StoreSettings {
  limit: number;
}

type Listener = (toasts: Toast[]) => void;

class ToastStore {
  private toasts: Toast[] = [];
  private listeners: Set<Listener> = new Set();
  private settings: StoreSettings = { limit: 5 };

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private emit() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  }

  setLimit(newLimit: number) {
    this.settings.limit = newLimit;
    if (this.toasts.length > newLimit) {
      this.toasts = this.toasts.slice(0, newLimit);
      this.emit();
    }
  }

  add(options: ToastOptions): string {
    const id = generateId();
    const variant = options.variant || "default";
    const duration = options.duration !== undefined 
      ? options.duration 
      : DEFAULT_TIMEOUTS[variant];

    const newToast: Toast = {
      id,
      ...options,
      variant,    
      duration,
    };

    // Add new toast to the front and enforce limit
    this.toasts = [newToast, ...this.toasts].slice(0, this.settings.limit);

    this.emit();
    return id;
  }

  update(id: string, options: Partial<ToastOptions>) {
    this.toasts = this.toasts.map((t) => {
      if (t.id === id) {
        const newVariant = options.variant || t.variant || "default";
        const newDuration = options.duration !== undefined 
          ? options.duration 
          : DEFAULT_TIMEOUTS[newVariant as ToastVariant];

        return { ...t, ...options, variant: newVariant, duration: newDuration };
      }
      return t;
    });
    this.emit();
  }

  dismiss(id?: string) {
    if (id) {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    } else {
      this.toasts = [];
    }
    this.emit();
  }
}

export const toastStore = new ToastStore();

/**
 * Internal base function to handle the logic
 */
const baseToast = (options: ToastOptions | string): string => {
  if (typeof options === "string") {
    return toastStore.add({ title: options, variant: "default" });
  }
  return toastStore.add(options);
};

/**
 * Helper to create variant-specific methods (success, error, etc.)
 */
const createHandler = (variant: ToastVariant) => {
  return (title: React.ReactNode, options?: Omit<ToastOptions, "title" | "variant">) => {
    return toastStore.add({
      ...options,
      title,
      variant,
    });
  };
};

// Assign Shorthand Methods
baseToast.success = createHandler("success");
baseToast.error = createHandler("error");
baseToast.warning = createHandler("warning");
baseToast.info = createHandler("info");
baseToast.loading = createHandler("loading");

// Assign Utility Methods
baseToast.dismiss = (id?: string) => toastStore.dismiss(id);
baseToast.dismissAll = () => toastStore.dismiss();
baseToast.setLimit = (n: number) => toastStore.setLimit(n);

/**
 * Promise Handler Logic
 */
baseToast.promise = <T>(
  promise: Promise<T>,
  { loading, success, error }: PromiseOptions<T>
) => {
  const id = toastStore.add({
    variant: 'loading',
    title: loading,
    duration: Infinity, 
  });
  
  promise
    .then((data) => {
      const successTitle = typeof success === 'function' ? (success as Function)(data) : success;
      toastStore.update(id, {
        variant: 'success',
        title: successTitle,
        duration: DEFAULT_TIMEOUTS.success
      });
    })
    .catch((err) => {
      const errorTitle = typeof error === 'function' ? (error as Function)(err) : error;
      toastStore.update(id, {
        variant: 'error',
        title: errorTitle,
        duration: DEFAULT_TIMEOUTS.error
      });
    });
  
  return promise;
};

/**
 * Final Export: Cast to ToastFunction for full TypeScript support
 */
export const toast = (baseToast as unknown) as ToastFunction;