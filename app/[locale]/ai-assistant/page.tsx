'use client';

import { useState } from 'react';
import { Locale } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';

interface PageProps {
  params: {
    locale: Locale;
  };
}

export default function AIAssistantPage({ params }: PageProps) {
  const t = getTranslations(params.locale);
  const [activeAssistant, setActiveAssistant] = useState<'content' | 'exercises' | 'student'>('content');

  const assistants = [
    {
      key: 'content' as const,
      title: 'Course Content Support',
      description: 'Ask questions about course concepts, clarify complex topics, and deepen your understanding of lecture materials.',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      url: '#content-assistant',
    },
    {
      key: 'exercises' as const,
      title: 'Structured Exercises',
      description: 'Practice with guided exercises that help you apply course concepts through structured problem-solving activities.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      url: '#exercises-assistant',
    },
    {
      key: 'student' as const,
      title: 'Teach to Learn',
      description: 'Explain course content to an AI student. Teaching is one of the most effective ways to consolidate your understanding.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      url: '#student-assistant',
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

      {/* Assistant Selection */}
      <section className="bg-background-light border-b border-gray-200">
        <div className="container-width py-8">
          <h2 className="text-h3 font-semibold text-primary mb-6">Choose Your AI Assistant</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assistants.map((assistant) => (
              <button
                key={assistant.key}
                onClick={() => setActiveAssistant(assistant.key)}
                className={`card p-6 text-left transition-all ${
                  activeAssistant === assistant.key
                    ? 'border-accent ring-2 ring-accent/20'
                    : 'hover:border-gray-300'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                    activeAssistant === assistant.key ? 'bg-accent/10' : 'bg-background-light'
                  }`}>
                    <svg className={`w-5 h-5 ${activeAssistant === assistant.key ? 'text-accent' : 'text-text-secondary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={assistant.icon} />
                    </svg>
                  </div>
                  <h3 className={`font-semibold ${activeAssistant === assistant.key ? 'text-accent' : 'text-primary'}`}>
                    {assistant.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm">{assistant.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Assistant Frame */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-5xl mx-auto">
            <div className="card p-8 min-h-[600px] flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                    assistants.find(a => a.key === activeAssistant)?.icon || ''
                  } />
                </svg>
              </div>

              <h3 className="text-h3 font-semibold text-primary mb-3">
                {assistants.find(a => a.key === activeAssistant)?.title}
              </h3>
              <p className="text-text-secondary mb-6 max-w-md">
                {activeAssistant === 'content' &&
                  'The content support assistant will be integrated here. Ask questions about any course topic and receive detailed explanations.'}
                {activeAssistant === 'exercises' &&
                  'The structured exercises assistant will be integrated here. Practice applying course concepts through guided problem-solving.'}
                {activeAssistant === 'student' &&
                  'The teach-to-learn assistant will be integrated here. Explain course concepts to an AI student and strengthen your understanding.'}
              </p>

              <div className="bg-background-light p-4 rounded-lg max-w-md">
                <p className="text-sm text-text-secondary">
                  <strong className="text-primary">Coming Soon:</strong><br />
                  This AI assistant will be available shortly. Each assistant opens in its own dedicated interface
                  tailored to its specific learning mode.
                </p>
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
                  href="mailto:riccardo.bovetti@gmail.com"
                  className="flex items-center text-accent hover:text-accent-dark text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  riccardo.bovetti@gmail.com
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
