import React from 'react';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info' | 'loading';

export type ToastPosition = 
  | 'top-left' | 'top-center' | 'top-right' 
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastAction {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Consolidating all options into the main Toast interface
export interface Toast {
  id: string;
  variant?: ToastVariant;
  title: React.ReactNode;
  description?: React.ReactNode;
  duration?: number;
  icon?: React.ReactNode;
  action?: ToastAction;
  dismissible?: boolean;
  onDismiss?: (id: string) => void;
  className?: string;
  hideProgressBar?: boolean; // Toggle visibility of the bar
  
  // Custom theme overrides
  style?: React.CSSProperties & {
    background?: string;
    color?: string;
    accent?: string;
  };
  metadata?: Record<string, any>;
}

export type ToastOptions = Omit<Toast, 'id'>;

export interface PromiseOptions<T = any> {
  loading: string | React.ReactNode;
  success: string | React.ReactNode | ((data: T) => React.ReactNode);
  error: string | React.ReactNode | ((error: any) => React.ReactNode);
}

export interface ToasterProps {
  position?: ToastPosition;
  theme?: 'light' | 'dark' | 'system';
  expand?: boolean;
  richColors?: boolean;
  closeButton?: boolean;
  className?: string;
  style?: React.CSSProperties;
}