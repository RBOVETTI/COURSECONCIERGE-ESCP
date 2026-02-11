import Link from 'next/link';
import { Locale } from '@/i18n';
import { getAllLectures } from '@/lib/utils/lectures';
import { parseLectureDate } from '@/lib/utils/lectureMeta';

interface PageProps {
  params: {
    locale: Locale;
  };
}

export const metadata = {
  title: 'Syllabus & Schedule | AI & Data Transformation',
  description: 'Course schedule, assessment structure, and learning outcomes for AI & Data Transformation in F&B.',
};

export default function SyllabusPage({ params }: PageProps) {
  const lectures = getAllLectures();
  const formatLectureDate = (value?: string) => {
    const parsed = parseLectureDate(value);
    if (!parsed) {
      return null;
    }

    return parsed.toLocaleDateString(params.locale, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white section-padding">
        <div className="container-width">
          <h1 className="text-display font-bold mb-4">Syllabus & Schedule</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive course structure, assessment criteria, and weekly schedule for the
            AI & Data Transformation in Food & Beverage course.
          </p>
        </div>
      </section>

      {/* Course Information */}
      <section className="section-padding bg-background-light">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-h4 font-semibold text-primary">Duration</h3>
              </div>
              <p className="text-text-secondary">5 sessions plus examination</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-h4 font-semibold text-primary">Format</h3>
              </div>
              <p className="text-text-secondary">In-person sessions with online resources</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-h4 font-semibold text-primary">Credits</h3>
              </div>
              <p className="text-text-secondary">6 ECTS credits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">Learning Outcomes</h2>
            <p className="text-text-secondary mb-6">
              Upon successful completion of this course, students will be able to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Analyze the strategic implications of AI and data technologies for F&B organizations',
                'Design data-driven decision-making processes aligned with business objectives',
                'Evaluate and select appropriate machine learning algorithms for specific business problems',
                'Apply analytics strategy frameworks through hands-on simulation exercises',
                'Assess organizational readiness for AI transformation',
                'Navigate ethical and governance challenges in AI deployment',
                'Implement predictive and prescriptive analytics for operational optimization',
                'Communicate technical concepts to non-technical stakeholders effectively',
              ].map((outcome, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-primary">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Readings */}
      <section className="section-padding bg-background-light">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">Recommended Readings</h2>
            <div className="space-y-4">
              <div className="card p-6">
                <h3 className="text-h4 font-semibold text-primary mb-1">The Fourth Revolution: How the Infosphere Is Reshaping Human Reality</h3>
                <p className="text-sm text-text-light mb-2">Floridi, L. (2016) — Oxford University Press</p>
                <p className="text-text-secondary">A foundational exploration of how the information revolution is transforming our understanding of ourselves, our relationships, and our world.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-h4 font-semibold text-primary mb-1">Co-Intelligence: Living and Working with AI</h3>
                <p className="text-sm text-text-light mb-2">Mollick, E. (2024) — Portfolio</p>
                <p className="text-text-secondary">A practical and insightful guide to understanding, leveraging, and coexisting with artificial intelligence in professional and personal contexts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-h2 font-bold text-primary mb-8">Course Schedule</h2>

          <div className="space-y-4">
            {lectures.map((lecture) => (
              <Link
                key={lecture.frontmatter.slug}
                href={`/${params.locale}/lectures/${lecture.frontmatter.slug}`}
                className="card p-6 hover:border-accent transition-all block"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-accent/10 rounded-lg px-4 py-2 text-center">
                      <div className="text-2xl font-bold text-accent">
                        {lecture.frontmatter.lectureNumber}
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-h4 font-semibold text-primary group-hover:text-accent transition-colors">
                        {lecture.frontmatter.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-light">
                      {formatLectureDate(lecture.frontmatter.date) && (
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatLectureDate(lecture.frontmatter.date)}
                        </div>
                      )}
                      {lecture.frontmatter.duration && (
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {lecture.frontmatter.duration} minutes
                        </div>
                      )}
                    </div>

                    {lecture.frontmatter.description && (
                      <p className="text-text-secondary mt-2 line-clamp-2">
                        {lecture.frontmatter.description}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="section-padding bg-background-light">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">Assessment Structure</h2>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-h3 font-semibold text-primary">Individual Performance</h3>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    10%
                  </span>
                </div>
                <p className="text-text-secondary">
                  Active engagement in in-class discussions, case analyses, and interactive exercises.
                  Quality of contributions matters more than quantity.
                </p>
              </div>

              <div className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-h3 font-semibold text-primary">Group Activities</h3>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    10%
                  </span>
                </div>
                <p className="text-text-secondary">
                  Team-based activities including the Harvard Business School simulation and case study discussion.
                  Assessed on collaboration, analytical quality, and presentation of results.
                </p>
              </div>

              <div className="card p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-h3 font-semibold text-primary">Individual Written Examination</h3>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    80%
                  </span>
                </div>
                <p className="text-text-secondary mb-3">
                  Individual written exam covering all course materials, concepts, and their practical applications.
                  Minimum qualifying mark: 8/20.
                </p>
                <p className="text-text-secondary text-sm">
                  Note: AI tools are not permitted during the examination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
