import React from 'react';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info' | 'loading';

export type ToastPosition = 
  | 'top-left' | 'top-center' | 'top-right' 
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

export interface ToastAction {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface Toast {
  id: string;
  variant?: ToastVariant;
  title?: React.ReactNode;
  description?: React.ReactNode;
  duration?: number;
  icon?: React.ReactNode;
  action?: ToastAction;
  dismissible?: boolean;
  onDismiss?: (id: string) => void;
  className?: string;
  style?: React.CSSProperties;
  metadata?: Record<string, any>;
}

export type ToastOptions = Omit<Toast, 'id'>;

export interface PromiseOptions<T = any> {
  loading: string | React.ReactNode;
  success: string | React.ReactNode | ((data: T) => React.ReactNode);
  error: string | React.ReactNode | ((error: any) => React.ReactNode);
}

export interface ToastState {
  toasts: Toast[];
}

export interface ToasterProps {
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  theme?: 'light' | 'dark' | 'system'; // Add this line
  expand?: boolean;
  richColors?: boolean;
  closeButton?: boolean;
  className?: string;
  style?: React.CSSProperties;
}