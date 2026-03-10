import type { ReactNode } from "react"
export type ToastType = "success" | "error" | "info" | "loading"

export interface ToastItem {
  id: string
  message: string
  type?: ToastType
  duration?: number
  visible?: boolean
}

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center"

export type ToastVariant =
  | "default"
  | "success"
  | "error"
  | "info"
  | "loading"

export type ToastTheme = "light" | "dark" | "system"


export interface ToastOptions {
  id?: string
  title?: string
  description?: string
  duration?: number
  position?: ToastPosition
  variant?: ToastVariant
  progress?: boolean
  icon?: ReactNode        // ✅ NEW
  render?: () => ReactNode
}

export interface Toast {
  id: string
  title: string
  description: string
  duration: number
  position: ToastPosition
  variant: ToastVariant
  progress: boolean
  icon?: ReactNode        // ✅ NEW
  render?: () => ReactNode
}

