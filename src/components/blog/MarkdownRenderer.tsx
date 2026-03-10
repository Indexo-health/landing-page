import { Children, isValidElement } from 'react';
import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

/* ── Image layout helper ── */
function BlogImage({ src, alt }: { src?: string; alt?: string }) {
  const isAppScreenshot = src?.includes('/app-');

  if (isAppScreenshot) {
    /* Portrait app screenshots: centered on mobile, float right on md+ */
    return (
      <span className="block mx-auto w-[200px] mb-4 md:float-right md:ml-6 md:mr-0 md:w-[220px]">
        <img
          src={src}
          alt={alt ?? ''}
          className="w-full rounded-2xl shadow-card border border-surface-border/40"
        />
        {alt && <span className="block text-[11px] text-text-secondary mt-1.5 text-center leading-snug">{alt}</span>}
      </span>
    );
  }

  /* Landscape product/tech images: centered, capped width */
  return (
    <span className="block my-6 clear-both">
      <img
        src={src}
        alt={alt ?? ''}
        className="mx-auto max-w-[520px] w-full rounded-2xl shadow-card"
      />
      {alt && <span className="block text-[11px] text-text-secondary mt-1.5 text-center leading-snug">{alt}</span>}
    </span>
  );
}

/* ── Detect if a <p> only contains an <img> and unwrap it ── */
function SmartParagraph({ children }: { children?: ReactNode }) {
  const childArray = Children.toArray(children);
  /* If the paragraph contains exactly one element and it's our BlogImage, skip the <p> wrapper */
  if (childArray.length === 1 && isValidElement(childArray[0]) && childArray[0].type === BlogImage) {
    return <>{children}</>;
  }
  return <p className="text-text-secondary leading-relaxed mb-4 text-base">{children}</p>;
}

const components = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 tracking-tight clear-both">{children}</h1>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-12 mb-4 tracking-tight clear-both">{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="text-xl font-bold text-brand-navy mt-8 mb-3 clear-both">{children}</h3>
  ),
  p: SmartParagraph,
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a href={href} className="text-brand-teal hover:text-brand-teal/80 underline transition-colors">{children}</a>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="list-disc pl-6 mb-4 space-y-2 text-text-secondary">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2 text-text-secondary">{children}</ol>
  ),
  li: ({ children }: { children?: ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="border-l-4 border-brand-teal pl-6 italic text-text-secondary my-6 bg-brand-teal/5 py-4 pr-4 rounded-r-lg clear-both">{children}</blockquote>
  ),
  img: BlogImage,
  code: ({ children, className }: { children?: ReactNode; className?: string }) => {
    const isInline = !className;
    if (isInline) {
      return <code className="bg-gray-100 text-brand-navy px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>;
    }
    return (
      <pre className="bg-brand-navy text-white rounded-2xl p-6 overflow-x-auto my-6 text-sm clear-both">
        <code>{children}</code>
      </pre>
    );
  },
  hr: () => <hr className="border-surface-border my-8 clear-both" />,
  table: ({ children }: { children?: ReactNode }) => (
    <div className="overflow-x-auto my-6 clear-both">
      <table className="w-full border-collapse border border-surface-border rounded-lg">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: ReactNode }) => (
    <thead className="bg-background-subtle">{children}</thead>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="text-brand-navy font-bold text-left px-4 py-3 border border-surface-border text-sm">{children}</th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="px-4 py-3 border border-surface-border text-text-secondary text-sm">{children}</td>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-bold text-brand-navy">{children}</strong>
  ),
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
