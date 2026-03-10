import { useEffect, useState } from "react"
import { subscribe } from "../core/store"
import type { Toast } from "../types/types"

export function useToasts() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const unsub = subscribe(setToasts)
    return unsub
  }, [])

  return toasts
}
