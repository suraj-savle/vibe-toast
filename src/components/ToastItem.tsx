import React, { useState, useEffect } from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toast } from '../types/types';

export const ToastItem = ({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const duration = toast.duration || 5000;

  useEffect(() => {
    const startTimer = setTimeout(() => setIsStarted(true), 50);
    // Slower expansion (600ms)
    const expandTimer = setTimeout(() => setIsExpanded(true), 600);
    const closeTimer = setTimeout(onDismiss, duration);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(expandTimer);
      clearTimeout(closeTimer);
    };
  }, [duration, onDismiss]);

  const getIcon = () => {
    switch (toast.variant) {
      case 'error': return <XCircle size={20} className="vibe-icon-error" />;
      case 'success': return <CheckCircle2 size={20} className="vibe-icon-success" />;
      case 'warning': return <AlertTriangle size={20} className="vibe-icon-warning" />;
      default: return <Info size={20} className="vibe-icon-info" />;
    }
  };

  return (
    <motion.div
      layout
      drag="x"
      dragConstraints={{ left: 0, right: 400 }}
      // If dragged more than 100px, dismiss
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) onDismiss();
      }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      style={{ userSelect: 'none', cursor: 'grab' }}
      className={`vibe-toast-card vibe-variant-${toast.variant || 'info'}`}
    >
      <div className="vibe-toast-inner">
        <div className="vibe-toast-icon-side">{getIcon()}</div>
        
        <div className="vibe-toast-content-side">
          <div className="vibe-toast-top-row">
            <span className="vibe-toast-title">{toast.title}</span>
            <button className="vibe-close-btn" onClick={onDismiss}>
              <X size={16} />
            </button>
          </div>

          <AnimatePresence>
            {isExpanded && toast.description && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                // Slower height transition
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="vibe-description-area"
              >
                <p className="vibe-description-text">{toast.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="vibe-progress-track">
        <div 
          className="vibe-progress-fill" 
          style={{ 
            width: isStarted ? '0%' : '100%', 
            transition: `width ${duration}ms linear` 
          }} 
        />
      </div>
    </motion.div>
  );
};