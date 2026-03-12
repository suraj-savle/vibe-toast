import { useState, useEffect } from 'react';
import { toastStore } from '../core/storeBridge';
import { Toast } from '../types/types'; 

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  

  useEffect(() => {
    const unsubscribe = toastStore.subscribe((newToasts) => {
      setToasts(newToasts);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    toasts,
    dismiss: (id?: string) => toastStore.dismiss(id),
  };
}