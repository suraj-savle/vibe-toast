let container: HTMLDivElement | null = null

export function getContainer() {
  if (container) return container

  container = document.createElement("div")
  container.id = "vibe-toast-root"
  container.style.position = "fixed"
  container.style.top = "20px"
  container.style.right = "20px"
  container.style.zIndex = "9999"
  document.body.appendChild(container)

  return container
}
