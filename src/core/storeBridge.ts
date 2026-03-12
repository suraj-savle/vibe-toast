import { Toast, ToastOptions, PromiseOptions, ToastVariant } from "../types/types";
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
  // 1. Initialize the settings property here
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
      ...options, // 2. Spread options FIRST so variant is respected
      variant,    
      duration,
    };

    // 3. limit check now works because this.settings exists
    this.toasts = [newToast, ...this.toasts].slice(0, this.settings.limit);

    this.emit();
    return id;
  }

  update(id: string, options: Partial<ToastOptions>) {
  this.toasts = this.toasts.map((t) => {
    if (t.id === id) {
      const newVariant = options.variant || t.variant || "default";
      
      // If we are updating the variant (e.g., loading -> success), 
      // we should reset the duration to the new variant's default.
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
 * API Logic
 */
// Exported API now includes the fixed methods
export const toast = (options: ToastOptions) => toastStore.add(options);
// Individual dismissal
toast.dismiss = (id: string) => toastStore.dismiss(id);

// NEW: Clear all toasts with a clean method name
toast.dismissAll = () => toastStore.dismiss();toast.setLimit = (n: number) => toastStore.setLimit(n);

toast.promise = <T>(
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
    const successTitle = typeof success === 'function' ? success(data) : success;
    toastStore.update(id, {
      variant: 'success',
      title: successTitle,
    });
  })
  .catch((err) => {
    const errorTitle = typeof error === 'function' ? error(err) : error;
    toastStore.update(id, {
      variant: 'error',
      title: errorTitle,
    });
  });
  
  return promise;
};