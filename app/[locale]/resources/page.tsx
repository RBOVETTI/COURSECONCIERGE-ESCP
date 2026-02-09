'use client';

import { useState } from 'react';
import { Locale } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';

interface PageProps {
  params: {
    locale: Locale;
  };
}

export default function ResourcesPage({ params }: PageProps) {
  const t = getTranslations(params.locale);
  const [activeTab, setActiveTab] = useState<'pdfs' | 'readings' | 'glossary'>('pdfs');

  const pdfs = [
    { title: 'Course Introduction', file: '/pdfs/course-intro.pdf', description: 'Enterprise AI & ML Companion' },
    { title: 'Lecture 1: Enabling Technologies', file: '/pdfs/lecture-1.pdf', description: 'Cloud, IoT, Robotics, AR, Big Data' },
    { title: 'Lecture 2: Info-Economy', file: '/pdfs/lecture-2.pdf', description: 'Data Value Model & Analytics Spectrum' },
    { title: 'Lecture 3: Analytics Strategy Simulation', file: '/pdfs/lecture-3.pdf', description: 'HBS Data Analytics Simulation (Davenport)' },
    { title: 'Lecture 4: Machine Learning', file: '/pdfs/lecture-4.pdf', description: 'ML Applications in F&B' },
    { title: 'Lecture 5: Human Dimension', file: '/pdfs/lecture-5.pdf', description: 'Human Side of Big Data & Analytics' },
  ];

  const readings = [
    {
      title: 'The Fourth Revolution: How the Infosphere Is Reshaping Human Reality',
      authors: 'Luciano Floridi',
      description: 'A foundational exploration of how the information revolution is transforming our understanding of ourselves, our relationships, and our world',
      type: 'Book',
      year: '2016',
      publisher: 'Oxford University Press',
    },
    {
      title: 'Co-Intelligence: Living and Working with AI',
      authors: 'Ethan Mollick',
      description: 'A practical and insightful guide to understanding, leveraging, and coexisting with artificial intelligence in professional and personal contexts',
      type: 'Book',
      year: '2024',
      publisher: 'Portfolio',
    },
  ];

  const glossaryTerms = [
    { term: 'Algorithm', definition: 'A finite sequence of well-defined instructions to solve a problem or perform a computation' },
    { term: 'Analytics Spectrum', definition: 'The progression from Descriptive (what happened?) to Predictive (what will happen?) to Prescriptive (what should we do?) analytics' },
    { term: 'Big Data', definition: 'Datasets characterized by high Volume, Velocity, Variety, Veracity, and Value (5 Vs)' },
    { term: 'Classification', definition: 'ML task of predicting categorical outputs (e.g., spam/not spam, defect/no defect)' },
    { term: 'Confusion Matrix', definition: 'Table showing True Positives, False Positives, True Negatives, and False Negatives for model evaluation' },
    { term: 'Data Governance', definition: 'Policies and standards for data quality, security, and lifecycle management' },
    { term: 'Data Value Model', definition: 'Framework describing the stages of data value creation: Generation, Acquisition, Storage, Analysis, and Support' },
    { term: 'Feature Engineering', definition: 'Creating meaningful input variables from raw data to improve model performance' },
    { term: 'Infosphere', definition: 'The informational environment in which we exist, as conceptualized by Luciano Floridi — analogous to the biosphere for biological life' },
    { term: 'Knowledge Pyramid', definition: 'The hierarchy from raw Data to structured Information to actionable Knowledge to strategic Decisions' },
    { term: 'Overfitting', definition: 'When a model learns training data too well, including noise, failing to generalize' },
    { term: 'Precision', definition: 'TP / (TP + FP) - Of all positive predictions, how many were correct?' },
    { term: 'Productivity Paradox', definition: 'The observed phenomenon where technology investment does not immediately translate into measurable productivity gains, often due to organizational inertia' },
    { term: 'Recall', definition: 'TP / (TP + FN) - Of all actual positives, how many did we catch?' },
    { term: 'Regression', definition: 'ML task of predicting numerical outputs (e.g., sales forecast, price estimation)' },
    { term: 'Servitization', definition: 'The transformation from selling products to selling outcomes, enabled by data connectivity and predictive analytics' },
    { term: 'Supervised Learning', definition: 'ML approach using labeled training data to learn input-output mappings' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white section-padding">
        <div className="container-width">
          <h1 className="text-display font-bold mb-4">{t.nav.resources}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Access lecture materials, recommended readings, and a comprehensive glossary
            to support your learning journey.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding">
        <div className="container-width">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex flex-wrap gap-4">
              {[
                { key: 'pdfs' as const, label: 'Lecture PDFs', icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
                { key: 'readings' as const, label: 'Recommended Readings', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                { key: 'glossary' as const, label: 'Glossary', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center px-4 py-3 border-b-2 font-medium transition-colors ${
                    activeTab === tab.key
                      ? 'border-accent text-accent'
                      : 'border-transparent text-text-secondary hover:text-primary hover:border-gray-300'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                  </svg>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* PDF Tab */}
          {activeTab === 'pdfs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfs.map((pdf) => (
                <a
                  key={pdf.file}
                  href={pdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 hover:border-accent transition-all"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-h4 font-semibold text-primary mb-2">{pdf.title}</h3>
                  <p className="text-text-secondary text-sm">{pdf.description}</p>
                </a>
              ))}
            </div>
          )}

          {/* Readings Tab */}
          {activeTab === 'readings' && (
            <div className="space-y-4">
              {readings.map((reading) => (
                <div key={reading.title} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-h4 font-semibold text-primary mb-1">{reading.title}</h3>
                      <p className="text-sm text-text-light mb-2">{reading.authors} ({reading.year})</p>
                      <p className="text-text-secondary">{reading.description}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="inline-block bg-background-light text-text-secondary px-3 py-1 rounded text-xs">
                          {reading.type}
                        </span>
                        <span className="inline-block bg-background-light text-text-secondary px-3 py-1 rounded text-xs">
                          {reading.publisher}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Glossary Tab */}
          {activeTab === 'glossary' && (
            <div className="space-y-4">
              {glossaryTerms.map((item) => (
                <div key={item.term} className="card p-6">
                  <h3 className="text-h4 font-semibold text-primary mb-2">{item.term}</h3>
                  <p className="text-text-secondary">{item.definition}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
