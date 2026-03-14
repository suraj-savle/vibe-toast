import React from 'react';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info' | 'loading';

export type ToastPosition = 
  | 'top-left' | 'top-center' | 'top-right' 
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastAction {
  /** The text to display on the action button */
  label: string;
  /** Callback function triggered when the button is clicked */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // For different button styles
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface ToastFunction {
  (options: ToastOptions | string): string;
  success: (title: React.ReactNode, options?: Omit<ToastOptions, "title" | "variant">) => string;
  error: (title: React.ReactNode, options?: Omit<ToastOptions, "title" | "variant">) => string;
  warning: (title: React.ReactNode, options?: Omit<ToastOptions, "title" | "variant">) => string;
  info: (title: React.ReactNode, options?: Omit<ToastOptions, "title" | "variant">) => string;
  loading: (title: React.ReactNode, options?: Omit<ToastOptions, "title" | "variant">) => string;
  dismiss: (id?: string) => void;
  dismissAll: () => void;
  setLimit: (n: number) => void;
  promise: <T>(promise: Promise<T>, options: PromiseOptions<T>) => Promise<T>;
}

export interface Toast {
  /** Unique identifier for the toast */
  id: string;
  /** The visual style variant of the toast */
  variant?: ToastVariant;
  /** The main message heading */
  title: React.ReactNode;
  /** Sub-text details that appear after a short delay */
  description?: React.ReactNode;
  /** Duration in ms before auto-dismiss. Use Infinity to keep open. */
  duration?: number;
  /** Custom icon to override the variant default */
  icon?: React.ReactNode;
  /** Optional button for user interaction (e.g., Undo) */
  actions?: ToastAction[]; // Make sure this is plural and an array!
  action?: ToastAction;    // Keep this as optional if you want to support both
  /** Whether the user can manually close the toast */
  dismissible?: boolean;
  /** Callback fired when the toast is removed */
  onDismiss?: (id: string) => void;
  /** Custom CSS class for the toast card */
  className?: string;
  /** Set to true to hide the countdown progress bar */
  hideProgressBar?: boolean;
  
  /** Custom theme overrides for background, text, and accent colors */
  style?: React.CSSProperties & {
    background?: string;
    color?: string;
    accent?: string;
  };
  /** Additional data for custom internal logic */
  metadata?: Record<string, any>;
}

export type ToastOptions = Omit<Toast, 'id'>;

export interface PromiseOptions<T = any> {
  loading: string | React.ReactNode;
  success: string | React.ReactNode | ((data: T) => React.ReactNode);
  error: string | React.ReactNode | ((error: any) => React.ReactNode);
}

export interface ToasterProps {
  /** Where on the screen the toasts should appear */
  position?: ToastPosition;
  /** Force 'light' or 'dark' mode, or follow 'system' settings */
  theme?: 'light' | 'dark' | 'system';
  /** Whether multiple toasts should expand or stack (logical prop) */
  expand?: boolean;
  /** Use stronger background colors for variants */
  richColors?: boolean;
  /** Show a close button on all toasts by default */
  closeButton?: boolean;
  /** Custom CSS class for the toaster container */
  className?: string;
  /** Custom styles for the toaster container */
  style?: React.CSSProperties;
  /** Global duration in ms for all toasts. Individual toast duration overrides this. */
  duration?: number;
  /** Globally hide progress bars for all toasts */
  hideProgressBar?: boolean;
}