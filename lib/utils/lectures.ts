import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface LectureFrontmatter {
  title: string;
  slug: string;
  lectureNumber: number;
  date: string;
  duration: number;
  image: string;
  pdfFile: string;
  description: string;
  keywords: string[];
  objectives: string[];
}

export interface Lecture {
  frontmatter: LectureFrontmatter;
  content: string;
}

const lecturesDirectory = path.join(process.cwd(), 'content/lectures');

export function getAllLectures(): Lecture[] {
  try {
    const fileNames = fs.readdirSync(lecturesDirectory);
    const lectures = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        return getLectureBySlug(slug);
      })
      .filter((lecture): lecture is Lecture => lecture !== null)
      .sort((a, b) => a.frontmatter.lectureNumber - b.frontmatter.lectureNumber);

    return lectures;
  } catch {
    return [];
  }
}

export function getLectureBySlug(slug: string): Lecture | null {
  try {
    const fullPath = path.join(lecturesDirectory, `${slug}.md`);

    // Try .md first, then .mdx
    let fileContents: string;
    try {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } catch {
      const mdxPath = path.join(lecturesDirectory, `${slug}.mdx`);
      fileContents = fs.readFileSync(mdxPath, 'utf8');
    }

    const { data, content } = matter(fileContents);

    return {
      frontmatter: {
        slug,
        ...data,
      } as LectureFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export function getLectureSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(lecturesDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx?$/, ''));
  } catch {
    return [];
  }
}

export function getAdjacentLectures(currentSlug: string): {
  previous: Lecture | null;
  next: Lecture | null;
} {
  const lectures = getAllLectures();
  const currentIndex = lectures.findIndex((l) => l.frontmatter.slug === currentSlug);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: currentIndex > 0 ? lectures[currentIndex - 1] : null,
    next: currentIndex < lectures.length - 1 ? lectures[currentIndex + 1] : null,
  };
}
