import { MDXRemote } from "next-mdx-remote/rsc";
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
  Playground,
} from "../shared/ToastButtons";
const components = {
  pre: CodeBlock,
  InfoBox,

  code: (props) => (
    <code
      className="rounded-md border px-1.5 py-0.5 text-[13px] font-medium"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--border)",
      }}
      {...props}
    />
  ),

  h2: (props) => (
    <h2
      className="text-2xl font-bold mt-6 mb-2 tracking-tight"
      style={{ color: "var(--text-main)" }}
      {...props}
    />
  ),

  h3: (props) => (
    <h3
      className="text-lg font-semibold mt-5 mb-2 tracking-tight"
      style={{ color: "var(--text-main)" }}
      {...props}
    />
  ),

  p: (props) => (
    <p
      className="leading-7 mb-3 text-[15px]"
      style={{ color: "var(--text-secondary)" }}
      {...props}
    />
  ),

  ul: (props) => (
    <ul
      className="list-disc pl-5 mb-3 space-y-1.5 text-[15px]"
      style={{ color: "var(--text-secondary)" }}
      {...props}
    />
  ),

  ol: (props) => (
    <ol
      className="list-decimal pl-5 mb-3 space-y-1.5 text-[15px]"
      style={{ color: "var(--text-secondary)" }}
      {...props}
    />
  ),

  li: (props) => <li className="leading-7" {...props} />,

  a: (props) => (
    <a
      className="font-medium hover:underline transition-all"
      style={{ color: "var(--accent)" }}
      {...props}
    />
  ),

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

  return <MDXRemote source={source} components={components} />;
}
