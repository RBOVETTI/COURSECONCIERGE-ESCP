import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-h1 font-bold text-primary mb-6 mt-8">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2
      id={id || children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
      className="text-h2 font-semibold text-primary mb-4 mt-8 scroll-mt-20"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      id={id || children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
      className="text-h3 font-semibold text-primary mb-3 mt-6 scroll-mt-20"
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-h4 font-semibold text-primary mb-2 mt-4">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-body text-text-primary mb-4 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-text-primary ml-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-text-primary ml-4">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-body text-text-primary leading-relaxed">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-4 py-2 mb-4 italic text-text-secondary bg-background-light">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-primary text-white">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm text-text-primary border-t border-gray-200">
      {children}
    </td>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-background-dark text-accent px-1.5 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    return (
      <code className={`${className} block bg-primary text-white p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4`}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-primary text-white p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent hover:text-accent-dark underline transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-primary">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-text-secondary">
      {children}
    </em>
  ),
  hr: () => (
    <hr className="my-8 border-t-2 border-gray-200" />
  ),
};
