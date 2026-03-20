# vibe-toast 🎯

[![npm version](https://img.shields.io/npm/v/vibe-toast.svg)](https://www.npmjs.com/package/vibe-toast)
[![npm downloads](https://img.shields.io/npm/dm/vibe-toast.svg)](https://www.npmjs.com/package/vibe-toast)
[![bundle size](https://img.shields.io/bundlephobia/minzip/vibe-toast)](https://bundlephobia.com/package/vibe-toast)
[![license](https://img.shields.io/npm/l/vibe-toast.svg)](https://github.com/suraj-savle/vibe-toast/blob/main/LICENSE)

A lightweight, zero-dependency toast notification library for React. Beautiful, customizable, and easy to use.

```bash
npm install vibe-toast
```

## ✨ Features

- 🚀 **Lightweight** – Only 1.4kb gzipped, zero dependencies
- 🎨 **Customizable** – Themes, positions, icons, and actions
- 📱 **Responsive** – Works on all screen sizes
- ⌨️ **Accessible** – ARIA labels and keyboard navigation
- 🔧 **TypeScript Ready** – Full type definitions included
- 🔄 **Promise Support** – Built-in promise toast handling

## 🚀 Quick Start

```jsx
import { Toaster, toast } from 'vibe-toast'

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <button onClick={() => toast.success('Hello!')}>
        Show Toast
      </button>
    </>
  )
}
```

## 📚 Examples

### Basic Toasts
```jsx
toast.success('Operation completed!')
toast.error('Something went wrong')
toast.warning('Your session expires soon')
toast.info('New update available')
```

### With Title & Description
```jsx
toast({
  title: 'Welcome back!',
  description: 'You have 3 new messages',
  variant: 'success',
})
```

### With Actions
```jsx
toast.warning('File deleted', {
  actions: [
    {
      label: 'Undo',
      onClick: () => toast.success('Restored!')
    }
  ]
})
```

### Promise Toast
```jsx
const save = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return { id: 123 }
}

toast.promise(save(), {
  loading: 'Saving...',
  success: 'Saved!',
  error: 'Failed',
})
```


### Toast Methods
- `toast.success(message, options?)`
- `toast.error(message, options?)`
- `toast.warning(message, options?)`
- `toast.info(message, options?)`
- `toast(message, options?)`
- `toast.promise(promise, messages)`
- `toast.loading(message)`
- `toast.dismiss(id)`
- `toast.dismissAll()`
- `toast.update(id, options)`


<div align="center">
  <a href="https://github.com/suraj-savle/vibe-toast">GitHub</a> •
  <a href="https://github.com/suraj-savle/vibe-toast/issues">Issues</a> •
  <a href="https://github.com/suraj-savle/vibe-toast#readme">Documentation</a>
</div>