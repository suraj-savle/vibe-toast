import { Toast, ToastOptions, PromiseOptions } from '../types/types';
import { generateId } from '../utils/generateId';

type Listener = (toasts: Toast[]) => void;

class ToastStore {
  private toasts: Toast[] = [];
  private listeners: Set<Listener> = new Set();

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private emit() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  }

  /**
   * Core method to add a toast
   */
  add(options: ToastOptions): string {
    const id = generateId();
    
    const newToast: Toast = { 
      id, 
      variant: 'default',
      duration: 5000, 
      ...options 
    };
    
    // Maintain a maximum of 5 toasts for a clean, premium look
    this.toasts = [newToast, ...this.toasts].slice(0, 5);
    this.emit();
    return id;
  }

  /**
   * Update an existing toast (Used for promises/loading states)
   */
  update(id: string, options: Partial<ToastOptions>) {
    this.toasts = this.toasts.map((t) => 
      t.id === id ? { ...t, ...options } : t
    );
    this.emit();
  }

  /**
   * Remove a toast by ID, or clear all
   */
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
 * The main "vibe-toast" API
 */
export const toast = (options: ToastOptions) => {
  return toastStore.add(options);
};

/**
 * Premium Helper: Handles loading, success, and error states automatically
 */
toast.promise = <T>(
  promise: Promise<T>,
  { loading, success, error }: PromiseOptions<T>
) => {
  const id = toastStore.add({
    variant: 'loading',
    title: loading,
    duration: Infinity, // Keep open during loading
  });

  promise
    .then((data) => {
      const successTitle = typeof success === 'function' ? success(data) : success;
      toastStore.update(id, {
        variant: 'success',
        title: successTitle,
        duration: 5000,
      });
    })
    .catch((err) => {
      const errorTitle = typeof error === 'function' ? error(err) : error;
      toastStore.update(id, {
        variant: 'error',
        title: errorTitle,
        duration: 5000,
      });
    });

  return promise;
};

// Dismiss helper
toast.dismiss = (id?: string) => toastStore.dismiss(id);