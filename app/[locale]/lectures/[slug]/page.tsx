import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';
import { getLectureBySlug, getLectureSlugs, getAdjacentLectures } from '@/lib/utils/lectures';
import { extractTableOfContents } from '@/lib/utils/toc';
import TableOfContents from '@/components/lectures/TableOfContents';
import LectureNavigation from '@/components/lectures/LectureNavigation';
import { mdxComponents } from '@/components/lectures/MdxComponents';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface PageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getLectureSlugs();
  const locales: Locale[] = ['en'];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const lecture = getLectureBySlug(params.slug);

  if (!lecture) {
    return {
      title: 'Lecture Not Found',
    };
  }

  return {
    title: `${lecture.frontmatter.title} | AI & Data Transformation`,
    description: lecture.frontmatter.description,
    keywords: lecture.frontmatter.keywords?.join(', '),
  };
}

export default function LecturePage({ params }: PageProps) {
  const t = getTranslations(params.locale);
  const lecture = getLectureBySlug(params.slug);

  if (!lecture) {
    notFound();
  }

  const { frontmatter, content } = lecture;
  const toc = extractTableOfContents(content);
  const { previous, next } = getAdjacentLectures(params.slug);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-br from-primary via-primary-light to-accent">
        {frontmatter.image && (
          <div className="absolute inset-0 opacity-30">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />

        <div className="relative h-full container-width flex flex-col justify-end pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
              {t.lectures.title} {frontmatter.lectureNumber}
            </span>
            <span className="text-white/80 text-sm">
              {frontmatter.duration} {t.lectures.minutes}
            </span>
          </div>
          <h1 className="text-display font-bold text-white mb-4 max-w-4xl">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="text-xl text-white/90 max-w-3xl mb-6">
              {frontmatter.description}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            {frontmatter.pdfFile && (
              <a
                href={frontmatter.pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.lectures.downloadPdf}
              </a>
            )}
            <Link
              href={`/${params.locale}/ai-assistant`}
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {t.lectures.askAi}
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      {frontmatter.objectives && frontmatter.objectives.length > 0 && (
        <section className="bg-background-light border-b border-gray-200">
          <div className="container-width py-8">
            <h2 className="text-h3 font-semibold text-primary mb-4">
              {t.lectures.learningObjectives}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {frontmatter.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-primary">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1">
              <TableOfContents items={toc} title={t.lectures.tableOfContents} />
            </div>

            {/* Lecture Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <MDXRemote
                  source={content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug, rehypeHighlight],
                    },
                  }}
                />
              </article>

              {/* Navigation */}
              <LectureNavigation
                locale={params.locale}
                t={t}
                previous={previous}
                next={next}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
