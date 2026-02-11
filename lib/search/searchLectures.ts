import { getAllLectures } from "@/lib/utils/lectures";
import { createPlainSnippet, normalizeWhitespace } from "@/lib/search/searchUtils";

export interface SearchResult {
  id: string;
  title: string;
  slug: string;
  description: string;
  lectureNumber: number;
  score: number;
  snippet: string;
}

function markdownToPlainText(input: string): string {
  return normalizeWhitespace(
    input
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`[^`]*`/g, " ")
      .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
      .replace(/\[[^\]]*\]\([^)]+\)/g, " ")
      .replace(/[#>*_~|-]/g, " ")
  );
}

function scoreText(source: string, word: string): boolean {
  return source.toLowerCase().includes(word);
}

export function searchLecturesFromContent(query: string, limit = 20): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return [];
  }

  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  const lectures = getAllLectures();

  const scored = lectures.map((lecture) => {
    const { frontmatter, content } = lecture;
    const title = frontmatter.title ?? "";
    const description = frontmatter.description ?? "";
    const keywords = frontmatter.keywords ?? [];
    const bodyText = markdownToPlainText(content);
    const searchable = `${title} ${description} ${keywords.join(" ")} ${bodyText}`.toLowerCase();

    let score = 0;
    for (const word of queryWords) {
      if (scoreText(title, word)) score += 12;
      if (keywords.some((keyword) => scoreText(keyword, word))) score += 6;
      if (scoreText(description, word)) score += 4;
      if (scoreText(bodyText, word)) score += 1;
    }

    if (searchable.includes(normalizedQuery)) {
      score += 20;
    }

    return {
      id: frontmatter.slug,
      title: frontmatter.title,
      slug: frontmatter.slug,
      description: frontmatter.description ?? "",
      lectureNumber: frontmatter.lectureNumber,
      score,
      snippet: createPlainSnippet(bodyText || description, normalizedQuery),
    };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
