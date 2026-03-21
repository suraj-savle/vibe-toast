import { notFound } from "next/navigation";
import path from "path";
import fs from "fs/promises";
import MDXContent from "../components/MDXContent";

const pageMetadata = {
  introduction: {
    title: "Introduction",
    description: "Learn about vibe-toast",
  },
  installation: { title: "Installation", description: "Install vibe-toast" },
  "quick-start": { title: "Quick Start", description: "Get started" },
  "basic-usage": {
    title: "Basic Usage",
    description:
      "Learn the fundamental patterns for using vibe-toast in your React applications. All examples below are interactive – click the buttons to see real toasts in action!",
  },
  variants: {
    title: "Variants",
    description: "Explore different toast styles",
  },
  customization: {
    title: "Customization",
    description: "Learn how to customize your toasts",
  },
  icons: {
    title: "Icons",
    description: "Available icons for use in your application",
  },
  positions: {
    title: "Positions",
    description:
      "Control where your toasts appear on the screen with 6 different position options.",
  },
  theming: {
    title: "Theming",
    description:
      "Vibe Toast supports light and dark themes out of the box, with easy customization.",
  },
  promises: {
    title: "Promises",
    description: "Handle async operations with promise-based toasts",
  },
  actions: {
    title: "Actions",
    description: "Add buttons and interactivity to your toasts",
  },
};

export default async function DocsPage({ params }) {
  const { slug } = await params;
  const metadata = pageMetadata[slug];

  if (!metadata) {
    notFound();
  }

  let source;
  try {
    const mdxPath = path.join(
      process.cwd(),
      "src/app/docs/[slug]/content",
      `${slug}.mdx`,
    );
    source = await fs.readFile(mdxPath, "utf-8");
  } catch (error) {
    console.error("Error loading MDX content:", error);
    notFound();
  }

  return (
    <article className="space-y-6">
      <div className="space-y-2 pb-6 border-b border-[var(--border)]/10">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-main)" }}
        >
          {metadata.title}
        </h1>
        <p className="text-lg text-gray-600">{metadata.description}</p>
      </div>

      <div className="prose prose-gray max-w-none">
        <MDXContent source={source} />
      </div>
    </article>
  );
}
