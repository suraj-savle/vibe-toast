import Link from "next/link";
import { FiArrowRight, FiGithub, FiPackage, FiZap } from "react-icons/fi";

export default function DocsHome() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          notiflow{" "}
          <span className="text-gray-400 text-2xl font-normal ml-2">v1.0.0</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          A lightweight, customizable toast notification library for React.
          Simple API, zero dependencies, and beautiful by default.
        </p>
        
        <div className="flex gap-4 pt-4">
          <Link
            href="/docs/introduction"
            className="bg-[#1a1a1a] text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            Get Started <FiArrowRight />
          </Link>
          <a
            href="https://github.com"
            className="border border-[var(--border)] px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors flex items-center gap-2"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>

      {/* Features grid */}
      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <div className="bg-white p-6 rounded-xl border border-[var(--border)]">
          <FiPackage className="text-2xl mb-4 text-gray-700" />
          <h3 className="font-semibold mb-2">Zero Dependencies</h3>
          <p className="text-sm text-gray-600">Lightweight and fast, with no external dependencies.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[var(--border)]">
          <FiZap className="text-2xl mb-4 text-gray-700" />
          <h3 className="font-semibold mb-2">Simple API</h3>
          <p className="text-sm text-gray-600">Intuitive API that just works. No complex configuration.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[var(--border)]">
          <span className="text-2xl mb-4 block">🎨</span>
          <h3 className="font-semibold mb-2">Customizable</h3>
          <p className="text-sm text-gray-600">Fully customizable themes, positions, and animations.</p>
        </div>
      </div>

      {/* Quick example */}
      <div className="bg-white p-8 rounded-xl border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-4">Quick Example</h2>
        <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`import { toast, Toaster } from 'notiflow'

function App() {
  return (
    <>
      <Toaster />
      <button onClick={() => toast.success('Hello world!')}>
        Show Toast
      </button>
    </>
  )
}`}</code>
        </pre>
      </div>
    </div>
  );
}