import { Locale } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';

interface PageProps {
  params: {
    locale: Locale;
  };
}

export default function AIAssistantPage({ params }: PageProps) {
  const t = getTranslations(params.locale);

  const assistants = [
    {
      title: 'Course Content Support',
      description: 'Ask questions about course concepts, clarify complex topics, and deepen your understanding of lecture materials.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      url: 'https://chatgpt.com/g/g-67a5eb44fed08191953f6f36e0e2428b-escp-tutor',
      step: '1',
    },
    {
      title: 'Structured Exercises',
      description: 'Practice with guided exercises that help you apply course concepts through structured problem-solving activities.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      url: 'https://chatgpt.com/g/g-67a7840863cc819184e0ebdae32c9b20-escp-tutor-2',
      step: '2',
    },
    {
      title: 'Teach to Learn',
      description: 'Explain course content to an AI student. Teaching is one of the most effective ways to consolidate your understanding.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      url: 'https://chatgpt.com/g/g-675a9d1c35608191aca49915476ab49a-es-tudent-cp',
      step: '3',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container-width">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-h2 font-bold">{t.nav.aiAssistant}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Three AI-powered tools to support your learning: get help with content, practice with exercises,
            or consolidate knowledge by teaching.
          </p>
        </div>
      </section>

      {/* Assistants */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {assistants.map((assistant) => (
                <div key={assistant.title} className="card p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent">{assistant.step}</span>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={assistant.icon} />
                        </svg>
                        <h3 className="text-h3 font-semibold text-primary">{assistant.title}</h3>
                      </div>
                      <p className="text-text-secondary mb-4">{assistant.description}</p>
                      <a
                        href={assistant.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Open Assistant
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Manifesto Section */}
            <div className="mt-12 card p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-h2 font-bold text-primary">AI Manifesto</h2>
              </div>
              <p className="text-text-secondary mb-6 text-lg">
                Principles of Conscious Engagement with AI
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Inviting AI to the Table</h4>
                    <p className="text-text-secondary">AI as advisor, not substitute</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Human-in-the-Loop</h4>
                    <p className="text-text-secondary">Humans maintain ultimate agency</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Persona-Driven Interaction</h4>
                    <p className="text-text-secondary">Define AI&apos;s role explicitly</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">&ldquo;Worst AI&rdquo; Assumption</h4>
                    <p className="text-text-secondary">Current tools are most primitive; mastery now = future advantage</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Academic Integrity Rule</h4>
                    <p className="text-text-secondary">AI prohibited during final individual exam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-8 card p-6 bg-background-light">
              <h3 className="font-semibold text-primary mb-3">Contact</h3>
              <p className="text-text-secondary text-sm mb-3">
                For questions about the course or the AI assistants, reach out to Professor Bovetti:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:riccardo.bovetti@escp.eu"
                  className="flex items-center text-accent hover:text-accent-dark text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  riccardo.bovetti@escp.eu
                </a>
                <a
                  href="https://rbovetti.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-accent hover:text-accent-dark text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  rbovetti.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
