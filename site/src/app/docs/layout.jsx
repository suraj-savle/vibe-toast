import DocsClient from "./DocsClient";

export default function DocsLayout({ children }) {
  const navigation = [
    { 
      section: "Getting Started",
      items: [
        { slug: "introduction", title: "Introduction", icon: "🎯" },
        { slug: "installation", title: "Installation", icon: "📦" },
        { slug: "quick-start", title: "Quick Start", icon: "⚡" },
      ]
    },
    {
      section: "Core Concepts",
      items: [
        { slug: "basic-usage", title: "Basic Usage", icon: "🚀" },
        { slug: "variants", title: "Toast Variants", icon: "🎨" },
        { slug: "actions", title: "Actions & Buttons", icon: "🔘" },
        { slug: "promises", title: "Promise Toasts", icon: "🤝" },
      ]
    },
    {
      section: "Customization",
      items: [
        { slug: "theming", title: "Theming", icon: "🎭" },
        { slug: "positions", title: "Positions", icon: "📍" },
        { slug: "animations", title: "Animations", icon: "✨" },
        { slug: "styling", title: "Custom Styling", icon: "🎨" },
      ]
    },
    {
      section: "API Reference",
      items: [
        { slug: "toast-api", title: "Toast API", icon: "⚙️" },
        { slug: "toaster-api", title: "Toaster API", icon: "🔧" },
        { slug: "types", title: "TypeScript Types", icon: "📘" },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      {/* Desktop Sidebar - Server Component */}
      <aside className="hidden lg:block w-80 bg-white border-r border-[var(--border)] overflow-y-auto h-screen sticky top-0">
        <div className="p-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 mb-8">
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-xl">notiflow</span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">v1.0.0</span>
          </a>

          {/* GitHub stats */}
          <div className="flex items-center gap-4 mb-8 text-sm">
            <a href="https://github.com" className="flex items-center gap-1 text-gray-600 hover:text-black">
              <span>GitHub</span>
            </a>
            <a href="https://github.com/stars" className="flex items-center gap-1 text-gray-600 hover:text-black">
              <span>⭐ 1.2k</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="space-y-6">
            {navigation.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {section.section}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const href = `/docs/${item.slug}`;
                    
                    return (
                      <li key={item.slug}>
                        <a
                          href={href}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                        >
                          <span>{item.icon}</span>
                          <span className="flex-1">{item.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Client Component for mobile and interactive features */}
      <DocsClient navigation={navigation}>
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </div>
        </main>
      </DocsClient>
    </div>
  );
}