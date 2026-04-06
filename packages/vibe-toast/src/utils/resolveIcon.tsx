import React from 'react';
import { ToastVariant } from '../types/types';
import { FaCheckCircle, FaCircleNotch } from 'react-icons/fa';
import { TbAlertCircle, TbBan, TbCircleX } from 'react-icons/tb';

export const resolveIcon = (variant: ToastVariant) => {
  const props = { size: 20, strokeWidth: 2.25 };

  switch (variant) {
    case 'success': return <FaCheckCircle  {...props} className="vibe-icon-success" />;
    case 'error':   return <TbCircleX      {...props} className="vibe-icon-error" />;
    case 'warning': return <TbBan    {...props} className="vibe-icon-warning" />;
    case 'info':    return <TbAlertCircle   {...props} className="vibe-icon-info" />;
    case 'loading': return <FaCircleNotch {...props} className="vibe-icon-spin" />;
    default:        return null;
  }
};