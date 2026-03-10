export { Toaster } from "./components/Toaster"

import {
  createToast,
  removeToast,
  updateToast,
} from "./core/store"

import type { ToastOptions } from "./types/types"

function base(message: string, options?: Partial<ToastOptions>) {
  return createToast({
    title: message,
    ...options,
  })
}

base.success = function (
  message: string,
  options?: Partial<ToastOptions>
) {
  return createToast({
    title: message,
    variant: "success",
    ...options,
  })
}

base.error = function (
  message: string,
  options?: Partial<ToastOptions>
) {
  return createToast({
    title: message,
    variant: "error",
    ...options,
  })
}

base.info = function (
  message: string,
  options?: Partial<ToastOptions>
) {
  return createToast({
    title: message,
    variant: "info",
    ...options,
  })
}

base.loading = function (
  message: string,
  options?: Partial<ToastOptions>
) {
  return createToast({
    title: message,
    variant: "loading",
    duration: Infinity,
    ...options,
  })
}

base.promise = function <T>(
  promise: Promise<T>,
  {
    loading,
    success,
    error,
  }: {
    loading: string
    success: string
    error: string
  }
) {
  const id = createToast({
    title: loading,
    variant: "loading",
    duration: Infinity,
  })

  promise
    .then(() => {
      updateToast(id, {
        title: success,
        variant: "success",
        duration: 4000,
      })
      setTimeout(() => removeToast(id), 4000)
    })
    .catch(() => {
      updateToast(id, {
        title: error,
        variant: "error",
        duration: 4000,
      })
      setTimeout(() => removeToast(id), 4000)
    })

  return promise
}

export const toast = base as typeof base & {
  success: typeof base.success
  error: typeof base.error
  info: typeof base.info
  loading: typeof base.loading
  promise: typeof base.promise
}
