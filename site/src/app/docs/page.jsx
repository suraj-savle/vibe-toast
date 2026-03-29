import { IconArrowRightBar, IconBrandGithub, IconBrandZapier, IconChevronRight, IconPackage, IconPalette } from "@tabler/icons-react";
import Link from "next/link";

export default function DocsHome() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex gap-3">
            <h1 className="text-7xl md:text-9xl font-pacifico text-[#2A1A10]">
              vibe-toast
            </h1>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center pt-12">
          <Link
            href="/docs/introduction"
            className="bg-[#2A1A10] text-white px-8 py-4 rounded font-bold hover:opacity-90 transition-all flex items-center gap-2 group"
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
    </div>
  );
}
