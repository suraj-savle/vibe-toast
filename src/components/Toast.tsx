import React, { useEffect, useCallback } from 'react';
import { Toast as ToastType } from '../types/types'; // Import the new Type
import { toastStore } from '../core/storeBridge';
import { resolveIcon } from '../internal/resolveIcon';

export const Toast: React.FC<ToastType> = ({ 
  id, 
  title, 
  description, 
  variant = 'default', 
  duration = 5000, 
  action,
  icon,
  className = ""
}) => {
  const handleDismiss = useCallback(() => {
    toastStore.dismiss(id);
  }, [id]);

  useEffect(() => {
    if (duration === Infinity) return;
    const timer = setTimeout(handleDismiss, duration);
    return () => clearTimeout(timer);
  }, [duration, handleDismiss]);

  return (
    <div className={`toast-card toast-${variant} ${className}`}>
      <div className="toast-main-content">
        <div className="toast-icon-wrapper">
          {icon || resolveIcon(variant)}
        </div>
        
        <div className="toast-text-content">
          {title && <div className="toast-title">{title}</div>}
          {description && <div className="toast-description">{description}</div>}
        </div>
      </div>
      
      <div className="toast-actions-area">
        {action && (
          <button 
            className="toast-action-btn"
            onClick={(e) => {
              action.onClick(e);
              handleDismiss();
            }}
          >
            {action.label}
          </button>
        )}
        <button className="toast-close-x" onClick={handleDismiss} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};