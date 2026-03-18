import { notFound } from "next/navigation";
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import fs from 'fs/promises';
import MDXContent from "../components/MDXContent";

const pageMetadata = {
  introduction: { title: "Introduction", description: "Learn about notiflow" },
  installation: { title: "Installation", description: "Install notiflow" },
  "quick-start": { title: "Quick Start", description: "Get started" },
  "basic-usage": { title: "Basic Usage", description: "Learn how to use notiflow" },
};

export default async function DocsPage({ params }) {
  const { slug } = await params;
  const metadata = pageMetadata[slug];

  if (!metadata) {
    notFound();
  }

  // Try/catch only for data fetching
  let mdxSource;
  try {
    const mdxPath = path.join(process.cwd(), 'src/app/docs/[slug]/content', `${slug}.mdx`);
    const mdxContent = await fs.readFile(mdxPath, 'utf-8');
    mdxSource = await serialize(mdxContent, {
      parseFrontmatter: true,
    });
  } catch (error) {
    console.error('Error reading MDX file:', error);
    notFound();
  }

  // JSX rendering outside try/catch
  return (
    <article className="space-y-6">
      <div className="space-y-2 pb-6 border-b border-[var(--border)]/10">
        <h1 className="text-4xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
          {metadata.title}
        </h1>
        <p className="text-lg text-gray-600">{metadata.description}</p>
      </div>

      <div className="prose prose-gray max-w-none">
        <MDXContent source={mdxSource} />
      </div>
    </article>
  );
}