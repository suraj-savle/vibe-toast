"use client";

import { toast } from "vibe-toast";
import { FaRocket, FaHeart } from "react-icons/fa";

export function BasicToast() {
  return (
    <button
      onClick={() => toast('Hello, world!')}
      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
    >
      Show Basic Toast
    </button>
  );
}

export function SuccessToasts() {
  return (
    <div className="space-x-2">
      <button
        onClick={() => toast.success('Operation completed successfully!')}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Simple Success
      </button>
      <button
        onClick={() => toast.success('Profile updated', {
          description: 'Your changes have been saved.'
        })}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Success with Description
      </button>
    </div>
  );
}

export function ErrorToasts() {
  return (
    <div className="space-x-2">
      <button
        onClick={() => toast.error('Something went wrong!')}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Simple Error
      </button>
      <button
        onClick={() => toast.error('Upload failed', {
          description: 'File size exceeds 10MB limit.'
        })}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Error with Description
      </button>
    </div>
  );
}

export function WarningToasts() {
  return (
    <div className="space-x-2">
      <button
        onClick={() => toast.warning('Your session will expire soon')}
        className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
      >
        Simple Warning
      </button>
      <button
        onClick={() => toast.warning('Low disk space', {
          description: 'Only 500MB remaining.'
        })}
        className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
      >
        Warning with Description
      </button>
    </div>
  );
}

export function InfoToasts() {
  return (
    <div className="space-x-2">
      <button
        onClick={() => toast.info('New update available')}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Simple Info
      </button>
      <button
        onClick={() => toast.info('Weekly report ready', {
          description: 'Click to download.'
        })}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Info with Description
      </button>
    </div>
  );
}

export function StructuredToast() {
  return (
    <button
      onClick={() => toast({
        title: 'Welcome back!',
        description: 'You have 3 new messages.',
        variant: 'success',
      })}
      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    >
      Show Structured Toast
    </button>
  );
}

export function IconToasts() {
  return (
    <div className="space-x-2">
      <button
        onClick={() => toast({
          title: 'Blast off!',
          description: 'Your app is ready.',
          icon: <FaRocket className="text-purple-500" />,
        })}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <span className="flex items-center gap-2">
          <FaRocket /> Rocket Toast
        </span>
      </button>
      <button
        onClick={() => toast({
          title: 'Thank you!',
          description: 'Your support means a lot.',
          icon: <FaHeart className="text-pink-500" />,
        })}
        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
      >
        <span className="flex items-center gap-2">
          <FaHeart /> Heart Toast
        </span>
      </button>
    </div>
  );
}

export function DurationToasts() {
  return (
    <div className="space-x-2">
      <button
        onClick={() => toast.success('Quick message', { duration: 1500 })}
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Short (1.5s)
      </button>
      <button
        onClick={() => toast.info('Important notice', { duration: 8000 })}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Long (8s)
      </button>
      <button
        onClick={() => toast.warning('Click to dismiss', { duration: 0 })}
        className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
      >
        Persistent
      </button>
    </div>
  );
}

export function UpdateToast() {
  return (
    <button
      onClick={() => {
        const id = toast.loading('Downloading...');
        setTimeout(() => {
          toast.update(id, {
            variant: 'success',
            title: 'Download complete!',
            description: 'Your file is ready.',
          });
        }, 2000);
      }}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      Simulate Download (2s)
    </button>
  );
}

export function DismissToasts() {
  return (
    <div className="space-x-2">
      <button
        onClick={() => {
          const id = toast('This toast will dismiss in 2 seconds');
          setTimeout(() => toast.dismiss(id), 2000);
        }}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Show & Auto-dismiss
      </button>
      <button
        onClick={() => {
          toast('Toast 1');
          toast('Toast 2');
          toast('Toast 3');
          setTimeout(() => toast.dismissAll(), 2000);
        }}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Show & Dismiss All
      </button>
    </div>
  );
}

export function Playground() {
  return (
    <div className="my-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Toast Playground</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => toast('Basic toast')}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          Basic
        </button>
        <button
          onClick={() => toast.success('Success!')}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Success
        </button>
        <button
          onClick={() => toast.error('Error!')}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Error
        </button>
        <button
          onClick={() => toast.warning('Warning!')}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
        >
          Warning
        </button>
        <button
          onClick={() => toast.info('Info!')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Info
        </button>
        <button
          onClick={() => toast({
            title: 'Custom',
            description: 'With title and description',
            variant: 'success',
          })}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Custom
        </button>
        <button
          onClick={() => toast.loading('Loading...')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Loading
        </button>
      </div>
    </div>
  );
}