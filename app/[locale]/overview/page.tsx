import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n';

interface PageProps {
  params: {
    locale: Locale;
  };
}

export const metadata = {
  title: 'Course Overview | AI & Data Transformation',
  description: 'Learn about the AI & Data Transformation in Food & Beverage course structure, pedagogy, and professor.',
};

export default function OverviewPage({ params }: PageProps) {

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white section-padding">
        <div className="container-width">
          <h1 className="text-display font-bold mb-4">Course Overview</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            A comprehensive exploration of AI and data transformation in the Food & Beverage industry,
            combining strategic insights with practical applications.
          </p>
        </div>
      </section>

      {/* About the Course */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">About the Course</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-text-primary leading-relaxed mb-4">
                The AI & Data Transformation in Food & Beverage course represents a paradigm shift in business education.
                Moving beyond theoretical frameworks, this course equips students with the strategic and technical capabilities
                to lead digital transformation initiatives in one of the world&apos;s most traditional and essential industries.
              </p>

              <p className="text-text-primary leading-relaxed mb-4">
                The Food & Beverage sector faces unprecedented challenges: supply chain volatility, changing consumer preferences,
                sustainability imperatives, and technological disruption. This course positions AI and data analytics not as
                abstract concepts but as concrete tools for navigating these complexities.
              </p>

              <h3 className="text-h3 font-semibold text-primary mt-8 mb-4">What Makes This Course Different</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                <div className="card p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-h4 font-semibold text-primary mb-2">Industry-Focused</h4>
                  <p className="text-text-secondary">
                    Concepts are grounded in Food & Beverage applications, connecting theory to industry practice.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-h4 font-semibold text-primary mb-2">Hands-On Learning</h4>
                  <p className="text-text-secondary">
                    Practical exercises, simulations, and interactive activities to apply concepts in context.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-h4 font-semibold text-primary mb-2">Strategic & Technical Balance</h4>
                  <p className="text-text-secondary">
                    Combining business strategy (when and why to use AI) with practical implementation approaches.
                  </p>
                </div>

                <div className="card p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-h4 font-semibold text-primary mb-2">Ethics & Governance</h4>
                  <p className="text-text-secondary">
                    Exploring algorithmic bias, privacy considerations, and responsible AI deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Professor */}
      <section className="section-padding bg-background-light">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">About Professor Riccardo Bovetti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/photo.jpg"
                    alt="Professor Riccardo Bovetti"
                    fill
                    className="object-cover object-top grayscale"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-text-primary leading-relaxed mb-4">
                  Professor Riccardo Bovetti is a Partner at EY based in Milan. He has been in the consulting business since 1997,
                  starting in the ICT field before transitioning to managerial consulting. His professional focus lies primarily
                  in Consumer Products & Retail, with additional experience in Diversified Industrial Products.
                </p>

                <p className="text-text-primary leading-relaxed mb-4">
                  He holds a degree in Information Science and has been a university adjunct professor since 2003, teaching at
                  <strong> Università di Torino</strong>, <strong>CUOA Business School</strong>, <strong>SAA</strong>, <strong>Università Cattolica di Milano</strong>, <strong>ESCP Business School</strong> (Turin & Berlin campuses), and <strong>ESA Beirut</strong>. His unique combination of deep industry consulting and academic
                  experience allows him to bridge the gap between theoretical frameworks and practical business transformation.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-h3 font-semibold text-primary mb-4">Teaching Philosophy</h3>

              <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-text-secondary mb-6 bg-white p-4 rounded">
                &ldquo;Technology alone changes nothing. Organizations that succeed with AI don&apos;t just adopt tools—they reimagine
                workflows, challenge assumptions, and build data-driven cultures. My goal is to equip you with both the
                technical skills and the strategic mindset to lead that transformation.&rdquo;
              </blockquote>

              <p className="text-text-primary leading-relaxed">
                This course reflects that philosophy: expect rigorous analysis, hands-on simulations, interactive activities,
                and a relentless focus on applicability. The course combines traditional lectures with a Harvard Business School
                simulation and group exercises to ensure learning is both deep and practical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">Course Structure</h2>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-h3 font-semibold text-primary mb-3">Lectures</h3>
                <p className="text-text-secondary mb-3">
                  Five sessions combining lectures, a hands-on simulation, and interactive group activities covering
                  enabling technologies, the info-economy, analytics strategy, machine learning, and the human dimension of data.
                </p>
                <Link href={`/${params.locale}/lectures`} className="text-accent hover:text-accent-dark font-medium inline-flex items-center">
                  View All Lectures
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="card p-6">
                <h3 className="text-h3 font-semibold text-primary mb-3">Assessments</h3>
                <p className="text-text-secondary mb-3">
                  Assessment is based on individual in-class participation, group activities (simulation and case study),
                  and an individual written examination.
                </p>
                <Link href={`/${params.locale}/syllabus`} className="text-accent hover:text-accent-dark font-medium inline-flex items-center">
                  View Syllabus & Schedule
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="card p-6">
                <h3 className="text-h3 font-semibold text-primary mb-3">Resources</h3>
                <p className="text-text-secondary mb-3">
                  Access lecture PDFs, recommended readings, AI-powered learning tools, and a comprehensive glossary
                  of AI and data analytics terminology.
                </p>
                <Link href={`/${params.locale}/resources`} className="text-accent hover:text-accent-dark font-medium inline-flex items-center">
                  Browse Resources
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-width text-center">
          <h2 className="text-h2 font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with the course introduction or jump directly to the lectures that interest you most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.locale}/lectures/course-introduction`}
              className="inline-block bg-white text-primary hover:bg-background-light px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start with Introduction
            </Link>
            <Link
              href={`/${params.locale}/lectures`}
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
            >
              Browse All Lectures
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
