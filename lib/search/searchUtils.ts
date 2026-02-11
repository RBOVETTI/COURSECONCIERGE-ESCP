export function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, " ");
}

export function normalizeWhitespace(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

export function createPlainSnippet(
  content: string,
  query: string,
  length = 160
): string {
  const safeContent = normalizeWhitespace(stripHtml(content));
  if (!safeContent) {
    return "";
  }

  const queryWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  if (queryWords.length === 0) {
    return safeContent.slice(0, length);
  }

  const lowerContent = safeContent.toLowerCase();
  let matchPosition = -1;

  for (const word of queryWords) {
    const position = lowerContent.indexOf(word);
    if (position !== -1 && (matchPosition === -1 || position < matchPosition)) {
      matchPosition = position;
    }
  }

  if (matchPosition === -1) {
    return safeContent.length > length ? `${safeContent.slice(0, length)}...` : safeContent;
  }

  const half = Math.floor(length / 2);
  const start = Math.max(0, matchPosition - half);
  const end = Math.min(safeContent.length, start + length);
  const chunk = safeContent.slice(start, end);

  const prefix = start > 0 ? "..." : "";
  const suffix = end < safeContent.length ? "..." : "";
  return `${prefix}${chunk}${suffix}`;
}
