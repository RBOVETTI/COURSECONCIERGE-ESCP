export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function extractTableOfContents(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // Number of # characters
    const title = match[2].trim();

    // Only include h2 and h3
    if (level === 2 || level === 3) {
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      toc.push({
        id,
        title,
        level,
      });
    }
  }

  return toc;
}
