import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';
import { getAllLectures } from '@/lib/utils/lectures';

interface PageProps {
  params: {
    locale: Locale;
  };
}

export const metadata = {
  title: 'All Lectures | AI & Data Transformation',
  description: 'Explore all lectures in the AI & Data Transformation in Food & Beverage course.',
};

export default function LecturesHubPage({ params }: PageProps) {
  const t = getTranslations(params.locale);
  const lectures = getAllLectures();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white section-padding">
        <div className="container-width">
          <h1 className="text-display font-bold mb-4">{t.lectures.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            A comprehensive journey through AI and data transformation in the Food & Beverage industry.
            Each lecture builds upon the previous, creating a complete learning experience.
          </p>
        </div>
      </section>

      {/* Lectures Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lectures.map((lecture, index) => (
              <div key={lecture.frontmatter.slug} className="relative">
                {/* Connector Line (except for last item) */}
                {index < lectures.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 bottom-0 w-0.5 h-8 bg-accent/30 transform translate-y-full z-0" />
                )}

                {/* Lecture Card */}
                <Link
                  href={`/${params.locale}/lectures/${lecture.frontmatter.slug}`}
                  className="block card overflow-hidden hover:scale-[1.02] transition-transform"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary to-accent">
                    {lecture.frontmatter.image && (
                      <Image
                        src={lecture.frontmatter.image}
                        alt={lecture.frontmatter.title}
                        fill
                        className="object-cover opacity-50"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {t.lectures.title} {lecture.frontmatter.lectureNumber}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-h3 font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {lecture.frontmatter.title}
                    </h2>

                    {lecture.frontmatter.description && (
                      <p className="text-text-secondary mb-4 line-clamp-3">
                        {lecture.frontmatter.description}
                      </p>
                    )}

                    {/* Metadata */}
                    {(lecture.frontmatter.duration || lecture.frontmatter.date) && (
                      <div className="flex items-center gap-4 text-sm text-text-light mb-4">
                        {lecture.frontmatter.duration && (
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {lecture.frontmatter.duration} {t.lectures.minutes}
                          </div>
                        )}
                        {lecture.frontmatter.date && (
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(lecture.frontmatter.date).toLocaleDateString(params.locale, {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Keywords Tags */}
                    {lecture.frontmatter.keywords && lecture.frontmatter.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {lecture.frontmatter.keywords.slice(0, 4).map((keyword) => (
                          <span
                            key={keyword}
                            className="bg-background-light text-text-secondary px-2 py-1 rounded text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                        {lecture.frontmatter.keywords.length > 4 && (
                          <span className="text-text-light text-xs py-1">
                            +{lecture.frontmatter.keywords.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-6 flex items-center text-accent font-medium">
                      <span>{t.common.readMore}</span>
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
