import Link from "next/link";
import { FiArrowRight, FiGithub, FiPackage, FiZap, FiInfo, FiLayers, FiMousePointer } from "react-icons/fi";

export default function DocsHome() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight text-[#2A1A10]">
          vibe-toast{" "}
          <span className="text-gray-400 text-2xl font-normal ml-2">v1.2.0</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          A lightweight, customizable toast notification library for React.
          Simple API, zero dependencies, and beautiful by default.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/docs/introduction"
            className="bg-[#1a1a1a] text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            Get Started <FiArrowRight />
          </Link>
          <a
            href="https://github.com/suraj-savle/vibe-toast"
            target="_blank"
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
          <p className="text-sm text-gray-600">Pure React logic. Optimized for performance and bundle size.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[var(--border)]">
          <FiZap className="text-2xl mb-4 text-gray-700" />
          <h3 className="font-semibold mb-2">Simple API</h3>
          <p className="text-sm text-gray-600">No complex Providers. Just one component and a simple function.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[var(--border)]">
          <span className="text-2xl mb-4 block">🎨</span>
          <h3 className="font-semibold mb-2">Customizable</h3>
          <p className="text-sm text-gray-600">Tailwind-ready styles. Change themes and positions with ease.</p>
        </div>
      </div>

      {/* Pro Tips Section */}
      <div className="space-y-6 pt-4">
        <h2 className="text-2xl font-bold text-[#2A1A10] flex items-center gap-2">
          <FiInfo className="text-orange-500" /> Pro Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[#FDFCF7] border border-[#EEEADF] flex gap-4">
            <div className="mt-1 text-orange-600"><FiLayers size={18} /></div>
            <div>
              <h4 className="font-bold text-sm mb-1">Global Toaster</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Place the <code>&lt;Toaster /&gt;</code> component at the top level of your app (usually in <code>layout.js</code>) so its accessible everywhere.</p>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-[#FDFCF7] border border-[#EEEADF] flex gap-4">
            <div className="mt-1 text-orange-600"><FiMousePointer size={18} /></div>
            <div>
              <h4 className="font-bold text-sm mb-1">Interactive Toasts</h4>
              <p className="text-xs text-gray-500 leading-relaxed">You can pass JSX as the toast message. This allows you to add buttons or links directly inside your notification.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick example */}
      <div className="bg-white p-8 rounded-xl border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-4 text-[#2A1A10]">Quick Example</h2>
        <pre className="bg-gray-50 p-6 rounded-lg overflow-x-auto text-sm border border-gray-100">
          <code className="text-gray-800">{`import { toast, Toaster } from 'vibe-toast'

function App() {
  const notify = () => toast.success('Vibe check passed! 🚀')

  return (
    <>
      <Toaster position="top-center" />
      <button onClick={notify}>
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