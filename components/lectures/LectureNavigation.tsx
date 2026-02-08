import Link from 'next/link';
import { Locale } from '@/i18n';
import { Translations } from '@/lib/utils/i18n';
import type { Lecture } from '@/lib/utils/lectures';

interface LectureNavigationProps {
  locale: Locale;
  t: Translations;
  previous: Lecture | null;
  next: Lecture | null;
}

export default function LectureNavigation({
  locale,
  t,
  previous,
  next,
}: LectureNavigationProps) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Lecture */}
        {previous ? (
          <Link
            href={`/${locale}/lectures/${previous.frontmatter.slug}`}
            className="group card p-6 hover:border-accent transition-all"
          >
            <div className="flex items-center text-text-secondary mb-2">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">{t.lectures.previousLecture}</span>
            </div>
            <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
              {previous.frontmatter.title}
            </h3>
          </Link>
        ) : (
          <div></div>
        )}

        {/* Next Lecture */}
        {next && (
          <Link
            href={`/${locale}/lectures/${next.frontmatter.slug}`}
            className="group card p-6 hover:border-accent transition-all text-right"
          >
            <div className="flex items-center justify-end text-text-secondary mb-2">
              <span className="text-sm font-medium">{t.lectures.nextLecture}</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
              {next.frontmatter.title}
            </h3>
          </Link>
        )}
      </div>

      {/* Back to All Lectures */}
      <div className="mt-6 text-center">
        <Link
          href={`/${locale}/lectures`}
          className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {t.lectures.backToHub}
        </Link>
      </div>
    </div>
  );
}
