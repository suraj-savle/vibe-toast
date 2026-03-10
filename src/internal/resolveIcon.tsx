import React from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, Loader2 } from 'lucide-react';
import { ToastVariant } from '../types/types';

export const resolveIcon = (variant: ToastVariant) => {
  const props = { size: 20, strokeWidth: 2.25 };

  switch (variant) {
    case 'success': return <CheckCircle2 {...props} className="vibe-icon-success" />;
    case 'error':   return <AlertCircle {...props} className="vibe-icon-error" />;
    case 'warning': return <AlertTriangle {...props} className="vibe-icon-warning" />;
    case 'info':    return <Info {...props} className="vibe-icon-info" />;
    case 'loading': return <Loader2 {...props} className="vibe-icon-spin" />;
    default:        return null;
  }
};