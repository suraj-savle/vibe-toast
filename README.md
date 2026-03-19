# Vibe Toast 🎯

A lightweight, zero-dependency toast notification library for React. Beautiful, customizable, and easy to use.

![npm version](https://img.shields.io/npm/v/vibe-toast.svg)
![npm downloads](https://img.shields.io/npm/dm/vibe-toast.svg)
![license](https://img.shields.io/npm/l/vibe-toast.svg)
![bundle size](https://img.shields.io/bundlephobia/minzip/vibe-toast)

## ✨ Features

- 🚀 **Lightweight** - Only 1.4kb gzipped, zero dependencies
- 🎨 **Customizable** - Themes, positions, icons, and actions
- 📱 **Responsive** - Works perfectly on all screen sizes
- ⌨️ **Accessible** - Built with ARIA labels and keyboard navigation
- 🔧 **TypeScript Ready** - Full type definitions included
- ⚡ **Smart Stacking** - Notifications stack without layout shifts
- 🎯 **Simple API** - Intuitive and easy to learn
- 🔄 **Promise Support** - Built-in promise toast handling

## 📦 Installation

```bash
npm install vibe-toast
```

## 🚀 Quick Start

### 1. Add the Toaster to your app

```jsx
import { Toaster } from 'vibe-toast';

function App() {
  return (
    <div>
      <Toaster 
        position="top-right"
        theme="light"
        duration={4000}
      />
      {/* Your app content */}
    </div>
  );
}
```

### 2. Trigger toasts from anywhere

```jsx
import { toast } from 'vibe-toast';

function MyComponent() {
  const showToast = () => {
    toast.success('Welcome to Vibe Toast! 🚀');
  };

  return (
    <button onClick={showToast}>
      Show Toast
    </button>
  );
}
```

## 📚 API Reference

### Toast Variants

```jsx
// Success
toast.success('Operation completed successfully!');

// Error
toast.error('Something went wrong');

// Warning
toast.warning('Your session will expire soon');

// Info
toast.info('New update available');

// Default
toast('Basic toast message');
```

### Toast with Title and Description

```jsx
toast({
  title: 'Welcome back!',
  description: 'You have 3 new messages',
  variant: 'success',
});
```

### Custom Duration

```jsx
// Short duration (1.5 seconds)
toast.success('Quick message', { duration: 1500 });

// Long duration (8 seconds)
toast.info('Important notice', { duration: 8000 });

// Persistent (won't auto-dismiss)
toast.warning('Click to dismiss', { duration: 0 });
```

### Custom Icons

```jsx
import { FaRocket, FaHeart } from 'react-icons/fa';

toast({
  title: 'Blast off!',
  description: 'Your app is ready',
  icon: <FaRocket className="text-purple-500" />,
});
```

### Action Buttons

```jsx
toast.warning('File deleted', {
  description: 'This action can be undone',
  actions: [
    {
      label: 'Undo',
      variant: 'primary',
      onClick: () => toast.success('File restored!'),
    },
    {
      label: 'Dismiss',
      variant: 'ghost',
      onClick: () => console.log('Dismissed'),
    },
  ],
});
```

### Promise Toasts

```jsx
const saveData = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { id: 123 };
};

toast.promise(saveData(), {
  loading: 'Saving...',
  success: (data) => `Data saved with ID: ${data.id}`,
  error: (err) => `Error: ${err.message}`,
});
```

### Updating Toasts

```jsx
const id = toast.loading('Downloading...');

setTimeout(() => {
  toast.update(id, {
    variant: 'success',
    title: 'Download complete!',
    description: 'Your file is ready',
  });
}, 2000);
```

### Dismissing Toasts

```jsx
// Dismiss a specific toast
const id = toast('Hello');
toast.dismiss(id);

// Dismiss all toasts
toast.dismissAll();
```

## ⚙️ Configuration

### Toaster Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `string` | `'top-right'` | Toast position (`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`) |
| `theme` | `string` | `'light'` | Theme (`light` or `dark`) |
| `duration` | `number` | `4000` | Default toast duration in milliseconds |
| `maxToasts` | `number` | `5` | Maximum number of toasts shown at once |

### Toast Options

| Option | Type | Description |
|--------|------|-------------|
| `title` | `string` | Toast title |
| `description` | `string` | Toast description |
| `variant` | `string` | `'success'`, `'error'`, `'warning'`, `'info'` |
| `duration` | `number` | Duration in milliseconds |
| `icon` | `ReactNode` | Custom icon |
| `actions` | `array` | Array of action buttons |
| `hideProgressBar` | `boolean` | Hide progress bar |
| `style` | `object` | Custom styles (background, color, accent) |

## 🎨 Custom Styling

### Using CSS Variables

```css
:root {
  --toast-background: #ffffff;
  --toast-text: #1a1a1a;
  --toast-accent: #3b82f6;
  --toast-success: #10b981;
  --toast-error: #ef4444;
  --toast-warning: #f59e0b;
  --toast-info: #3b82f6;
}
```

### Inline Styles

```jsx
toast({
  title: 'Custom Styled Toast',
  description: 'With custom colors',
  style: {
    background: '#4c1d95',
    color: '#ede9fe',
    accent: '#a78bfa',
  },
});
```

## 📱 Examples

### Next.js App Router

```jsx
// app/layout.js
import { Toaster } from 'vibe-toast';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
```

### React with TypeScript

```tsx
import { toast, ToastOptions } from 'vibe-toast';

interface UserData {
  id: number;
  name: string;
}

const handleSave = async (data: UserData) => {
  try {
    await saveUser(data);
    toast.success('User saved!');
  } catch (error) {
    toast.error('Failed to save user');
  }
};
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/suraj-savle/vibe-toast.git

# Install dependencies
npm install

# Run development playground
npm run dev

# Build the library
npm run build

# Run tests
npm test
```

## 📄 License

MIT © [Your Name]

## ⭐ Support

If you find this library useful, please consider giving it a star on GitHub!
