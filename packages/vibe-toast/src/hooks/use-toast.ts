import { useState, useEffect, useCallback } from 'react'; // Added useCallback
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

  // Use useCallback so this function reference never changes
  const dismiss = useCallback((id?: string) => {
    toastStore.dismiss(id);
  }, []);

  return {
    toasts,
    dismiss,
  };
}