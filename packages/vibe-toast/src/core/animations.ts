import { Variants } from 'framer-motion';

export const toastVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20, 
    scale: 0.9, 
    filter: 'blur(4px)' 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { 
      type: 'spring', // TypeScript now knows this is specifically "spring"
      stiffness: 300, 
      damping: 25 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    filter: 'blur(4px)',
    transition: { 
      duration: 0.2 
    } 
  }
} as const; // 'as const' is the magic fix here