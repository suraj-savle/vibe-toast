"use client";

import { MDXRemote } from 'next-mdx-remote';
import CodeBlock from "./CodeBlock";
import InfoBox from "./InfoBox";
import { 
  BasicToast,
  SuccessToasts,
  ErrorToasts,
  WarningToasts,
  InfoToasts,
  StructuredToast,
  IconToasts,
  DurationToasts,
  UpdateToast,
  DismissToasts,
  Playground 
} from './ToastButtons';

const components = {
  // Built-in components
  pre: CodeBlock,
  InfoBox,
  code: (props) => <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--text-main)' }} {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,
  p: (props) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 mb-4 space-y-1 text-gray-700" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  a: (props) => <a className="text-purple-600 hover:underline" {...props} />,
  
  // Toast button components
  BasicToast,
  SuccessToasts,
  ErrorToasts,
  WarningToasts,
  InfoToasts,
  StructuredToast,
  IconToasts,
  DurationToasts,
  UpdateToast,
  DismissToasts,
  Playground,
};

export default function MDXContent({ source }) {
  if (!source) {
    return null;
  }

  return <MDXRemote {...source} components={components} />;
}