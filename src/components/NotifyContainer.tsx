import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '../hooks/use-toast';
import { Toast as ToastComponent } from './Toast'; // Renamed to avoid collision with Type
import { toastVariants } from '../core/animations';

export const NotifyContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="vibe-viewport">
      <AnimatePresence mode="popLayout">
        {toasts.map((toastData) => (
          <motion.div
            key={toastData.id}
            layout
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ pointerEvents: 'auto' }}
          >
            <ToastComponent {...toastData} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};