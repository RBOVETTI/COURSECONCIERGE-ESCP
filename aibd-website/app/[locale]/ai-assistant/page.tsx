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
  const [showIntro, setShowIntro] = useState(true);

  const suggestedPrompts = [
    'Explain the Productivity Paradox with a modern example',
    'What is the difference between supervised and unsupervised learning?',
    'How can I apply the DELTA framework to my organization?',
    'Explain overfitting in simple terms with an example',
    'What are the key considerations for deploying ML in F&B?',
    'Compare precision and recall in the context of food safety',
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
            Get instant help with course concepts, clarify complex topics, and deepen your understanding
            through AI-powered conversation.
          </p>
        </div>
      </section>

      {/* Collapsible Introduction */}
      {showIntro && (
        <section className="bg-background-light border-b border-gray-200">
          <div className="container-width py-8">
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <h2 className="text-h3 font-semibold text-primary mb-4">How to Use the AI Assistant</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">
                        1
                      </span>
                      <h3 className="font-semibold text-primary">Ask Questions</h3>
                    </div>
                    <p className="text-text-secondary text-sm">
                      Type your question about course concepts, lectures, or F&B applications of AI and data analytics.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">
                        2
                      </span>
                      <h3 className="font-semibold text-primary">Get Explanations</h3>
                    </div>
                    <p className="text-text-secondary text-sm">
                      Receive clear, contextual answers based on course materials. Request examples or clarifications as needed.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">
                        3
                      </span>
                      <h3 className="font-semibold text-primary">Deepen Learning</h3>
                    </div>
                    <p className="text-text-secondary text-sm">
                      Use follow-up questions to explore topics in depth and connect concepts across lectures.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-accent p-4 rounded">
                  <p className="text-sm text-text-secondary">
                    <strong className="text-primary">Pro Tip:</strong> Be specific in your questions. Instead of &ldquo;Tell me about ML,&rdquo;
                    try &ldquo;How does the confusion matrix help evaluate a food safety detection model?&rdquo;
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowIntro(false)}
                className="ml-4 text-text-light hover:text-primary transition-colors"
                aria-label="Close introduction"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      )}

      {!showIntro && (
        <div className="container-width py-4">
          <button
            onClick={() => setShowIntro(true)}
            className="text-accent hover:text-accent-dark font-medium text-sm flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Show usage guide
          </button>
        </div>
      )}

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-5xl mx-auto">
            {/* Suggested Prompts */}
            <div className="mb-8">
              <h2 className="text-h3 font-semibold text-primary mb-4">Suggested Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    className="card p-4 text-left hover:border-accent transition-all"
                  >
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-text-primary">{prompt}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Assistant Placeholder */}
            <div className="card p-8 min-h-[600px] flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              <h3 className="text-h3 font-semibold text-primary mb-3">AI Assistant Interface</h3>
              <p className="text-text-secondary mb-6 max-w-md">
                The AI assistant will be integrated here. Students can ask questions about course content,
                request explanations, and explore concepts interactively.
              </p>

              <div className="bg-background-light p-4 rounded-lg max-w-md">
                <p className="text-sm text-text-secondary">
                  <strong className="text-primary">Configuration Needed:</strong><br />
                  Set the <code className="bg-white px-2 py-1 rounded text-accent">AI_ASSISTANT_URL</code> environment
                  variable to integrate your preferred AI platform (ChatGPT, Claude, custom assistant, etc.).
                </p>
              </div>
            </div>

            {/* Tips Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6 bg-background-light">
                <h3 className="font-semibold text-primary mb-3">Best Practices</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Ask specific, focused questions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Request F&B examples for abstract concepts
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Use follow-ups to dig deeper
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Ask for step-by-step explanations
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-background-light">
                <h3 className="font-semibold text-primary mb-3">Limitations</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-text-light mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Cannot access real-time data or web
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-text-light mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    May occasionally provide incorrect information
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-text-light mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Complements but doesn&apos;t replace lectures
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-text-light mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Cannot complete assignments for you
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
