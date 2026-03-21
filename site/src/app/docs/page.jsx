import { IconArrowRightBar, IconBrandGithub, IconBrandZapier, IconChevronRight, IconPackage, IconPalette } from "@tabler/icons-react";
import Link from "next/link";

export default function DocsHome() {
  return (
    <div className="py-8 space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <h1 className="text-6xl font-bold tracking-tighter text-[#2A1A10]">
              vibe-toast
            </h1>
            
          </div>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-slab">
            A high-frequency notification engine for React. 
            Engineered for speed, built for immersive interfaces, and beautiful by default.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center pt-2">
          <Link
            href="/docs/introduction"
            className="bg-[#2A1A10] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all flex items-center gap-2 group"
          >
            Get Started 
            <IconArrowRightBar size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://github.com/suraj-savle/vibe-toast"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#2A1A10]/10 px-8 py-4 rounded-xl font-bold hover:bg-[#2A1A10]/5 transition-all flex items-center gap-2 text-[#2A1A10]"
          >
            <IconBrandGithub size={22} /> GitHub
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<IconPackage size={28} stroke={1.5} />}
          title="Zero Dependencies"
          description="Pure React logic. Optimized for sub-millisecond response times and minimal bundle size."
        />
        <FeatureCard 
          icon={<IconBrandZapier size={28} stroke={1.5} />}
          title="Simple API"
          description="Forget complex Providers. Just one component and a direct function call to trigger motion."
        />
        <FeatureCard 
          icon={<IconPalette size={28} stroke={1.5} />}
          title="Elite Styles"
          description="Tailwind-ready architecture with built-in glassmorphism that adapts to any professional theme."
        />
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group p-8 rounded-2xl border border-[#2A1A10]/5 bg-white/50 backdrop-blur-sm hover:border-[#2A1A10]/20 transition-all duration-300">
      <div className="mb-6 text-[#2A1A10] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform w-fit">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 text-[#2A1A10] uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed font-slab">
        {description}
      </p>
      <div className="mt-6 flex items-center gap-1 text-[10px] font-bold text-[#2A1A10]/40 uppercase tracking-[0.2em] group-hover:text-[#2A1A10] transition-colors">
        Learn More <IconChevronRight size={12} stroke={3} />
      </div>
    </div>
  );
}