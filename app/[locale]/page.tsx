import Link from 'next/link';
import { Locale } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';
import { getAllLectures } from '@/lib/utils/lectures';
import { selectCurrentLectureSlug } from '@/lib/utils/courseProgress';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);
  const lectures = getAllLectures();
  const currentWeekSlug = selectCurrentLectureSlug(
    lectures.map((lecture) => ({
      slug: lecture.frontmatter.slug,
      lectureNumber: lecture.frontmatter.lectureNumber,
      date: lecture.frontmatter.date,
    }))
  );
  const currentWeekHref = currentWeekSlug
    ? `/${params.locale}/lectures/${currentWeekSlug}`
    : `/${params.locale}/lectures`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent text-white section-padding">
        <div className="container-width">
          <div className="max-w-4xl">
            <h1 className="text-display font-bold mb-4 text-balance">
              {t.home.hero.title}
            </h1>
            <p className="text-h3 mb-2 text-accent-light font-semibold">
              {t.home.hero.subtitle}
            </p>
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              {t.home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${params.locale}/lectures`}
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
              >
                {t.home.hero.ctaPrimary}
              </Link>
              <Link
                href={`/${params.locale}/overview`}
                className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm text-center"
              >
                {t.home.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="section-padding bg-background-light">
        <div className="container-width">
          <h2 className="text-h2 font-bold text-primary mb-8 text-center">
            {t.home.quickAccess.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Week Card */}
            <Link
              href={currentWeekHref}
              className="card p-6 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-h4 font-semibold text-primary mb-2">
                {t.home.quickAccess.currentWeek}
              </h3>
              <p className="text-text-secondary">
                {t.home.quickAccess.currentWeekDesc}
              </p>
            </Link>

            {/* All Lectures Card */}
            <Link
              href={`/${params.locale}/lectures`}
              className="card p-6 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-h4 font-semibold text-primary mb-2">
                {t.home.quickAccess.allLectures}
              </h3>
              <p className="text-text-secondary">
                {t.home.quickAccess.allLecturesDesc}
              </p>
            </Link>

            {/* AI Assistant Card */}
            <Link
              href={`/${params.locale}/ai-assistant`}
              className="card p-6 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-h4 font-semibold text-primary mb-2">
                {t.home.quickAccess.aiAssistant}
              </h3>
              <p className="text-text-secondary">
                {t.home.quickAccess.aiAssistantDesc}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-h2 font-bold text-primary mb-12 text-center">
            {t.home.highlights.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Practical Focus */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold text-primary mb-3">
                {t.home.highlights.practical}
              </h3>
              <p className="text-text-secondary">
                {t.home.highlights.practicalDesc}
              </p>
            </div>

            {/* Innovative Pedagogy */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold text-primary mb-3">
                {t.home.highlights.innovative}
              </h3>
              <p className="text-text-secondary">
                {t.home.highlights.innovativeDesc}
              </p>
            </div>

            {/* Expert Guidance */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-h3 font-semibold text-primary mb-3">
                {t.home.highlights.expert}
              </h3>
              <p className="text-text-secondary">
                {t.home.highlights.expertDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
