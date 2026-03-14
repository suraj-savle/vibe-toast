# Vibe Toast

A high-vibe, lightweight, and beautifully animated toast library for React. Built with **Framer Motion** for silky-smooth physics and **TypeScript** for a flawless developer experience.

[![npm version](https://img.shields.io/npm/v/vibe-toast.svg)](https://www.npmjs.com/package/vibe-toast)
[![license](https://img.shields.io/npm/l/vibe-toast.svg)](https://github.com/yourusername/vibe-toast/blob/main/LICENSE)

## ✨ Key Features

- **⚡ Shorthand API**: Clean methods like `toast.success()`, `toast.error()`, and `toast.loading()`.
- **⏳ Promise Handling**: Manage async states (loading → success/error) automatically.
- **👆 Interactive Gestures**: Native swipe-to-dismiss support using Framer Motion gestures.
- **🎨 Highly Customizable**: Custom icons, action buttons, and individual styling.
- **📏 Smart Limits**: Prevent notification spam with a configurable toast limit.
- **🌓 Theme Support**: Built-in `light`, `dark`, and `system` themes.

## 📦 Installation

```bash
npm install vibe-toast
```

## 🛠️ Quick Start

### 1. Setup the Provider

Add the `Toaster` component at the root of your application (usually in `main.tsx` or `App.tsx`). This component manages the portal and animations.

```jsx
import { Toaster } from 'vibe-toast';
import 'vibe-toast/dist/style.css'; // Essential for layout and animations

function App() {
  return (
    <main>
      <Toaster 
        position="top-right" 
        theme="dark" 
        duration={4000} 
      />
      <YourAppContent />
    </main>
  );
}

```

### 2. Trigger Toasts

Import the `toast` function anywhere in your logic—no hooks required for the basic API!

```jsx
import { toast } from 'vibe-toast';

// Simple Strings
toast("Hello World!");

// Shorthand Variants
toast.success("Profile updated!");
toast.error("Something went wrong");
toast.warning("Storage is almost full");
toast.info("New update available");

```

## 🚀 Advanced Usage

### Custom Actions & Descriptions

Perfect for "Undo" functionality or complex notifications with multiple interaction points.

```jsx
toast.error("File Deleted", {
  description: "index.ts was moved to the trash.",
  actions: [
    { 
      label: "Undo", 
      variant: "primary", 
      onClick: () => console.log("Restored!") 
    },
    { 
      label: "View Trash", 
      variant: "ghost", 
      onClick: () => openTrash() 
    }
  ]
});

```

### Handling Promises

The `toast.promise` method automatically tracks a promise state and updates the UI from loading to success or error.

```jsx
const uploadFile = new Promise((resolve) => setTimeout(resolve, 2000));

toast.promise(uploadFile, {
  loading: 'Uploading image...',
  success: 'Image uploaded successfully!',
  error: (err) => `Upload failed: ${err.message}`,
});

```

### Setting Global Limits

Control the maximum number of toasts visible on screen. When the limit is reached, the oldest toast is automatically removed.

```jsx
toast.setLimit(3); // Maintains a clean UI by capping at 3 notifications

```

## ⚙️ Configuration (Toaster Props)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `string` | `'top-right'` | Placement: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`. |
| `theme` | `string` | `'system'` | Appearance: `'light'`, `'dark'`, or `'system'`. |
| `duration` | `number` | `4000` | Global auto-dismiss time in milliseconds. |
| `expand` | `boolean` | `false` | Whether multiple toasts should expand or stack behind each other. |
| `richColors` | `boolean` | `false` | If true, applies variant colors (green, red, etc.) to the toast background. |


## 📝 License

MIT © [suraj-savle](https://github.com/suraj-savle)

```
