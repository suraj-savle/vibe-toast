"use client";

import { useSearchParams } from "next/navigation";
import docs from "../data/docs";
import CodeBlock from "./CodeBlock";

export default function Content() {

  const params = useSearchParams();
  const slug = params.get("doc") || "intro";

  const page = docs.find((d) => d.slug === slug);

  return (
    <div className="max-w-3xl">

      <h1 className="text-4xl font-bold mb-6">
        {page.title}
      </h1>

      <p className="mb-6">
        {page.description}
      </p>

      {page.code && (
        <CodeBlock code={page.code} />
      )}

    </div>
  );
}