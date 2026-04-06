import { Variants } from "framer-motion";

export const toastVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 32,
      mass: 0.8,
      opacity: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  },

  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 35,
      mass: 0.6,
      opacity: {
        duration: 0.12,
        ease: "easeIn",
      },
    },
  },
} as const;