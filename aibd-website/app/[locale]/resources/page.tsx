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
  const [activeTab, setActiveTab] = useState<'pdfs' | 'readings' | 'tools' | 'glossary'>('pdfs');

  const pdfs = [
    { title: 'Course Introduction', file: '/pdfs/course-intro.pdf', description: 'Enterprise AI & ML Companion' },
    { title: 'Lecture 1: Enabling Technologies', file: '/pdfs/lecture-1.pdf', description: 'Cloud, IoT, Robotics, AR, Big Data' },
    { title: 'Lecture 2: Info-Economy', file: '/pdfs/lecture-2.pdf', description: 'Data Value Model & Analytics Spectrum' },
    { title: 'Lecture 3: Analytics Strategy', file: '/pdfs/lecture-3.pdf', description: 'DELTA Framework & Data Governance' },
    { title: 'Lecture 4: Machine Learning', file: '/pdfs/lecture-4.pdf', description: 'ML Applications in F&B' },
  ];

  const readings = [
    {
      title: 'Competing on Analytics',
      authors: 'Thomas H. Davenport & Jeanne G. Harris',
      description: 'The foundational text on building competitive advantage through data and analytics',
      type: 'Book',
    },
    {
      title: 'The Second Machine Age',
      authors: 'Erik Brynjolfsson & Andrew McAfee',
      description: 'Work, progress, and prosperity in a time of brilliant technologies',
      type: 'Book',
    },
    {
      title: 'Prediction Machines',
      authors: 'Ajay Agrawal, Joshua Gans & Avi Goldfarb',
      description: 'The simple economics of artificial intelligence',
      type: 'Book',
    },
    {
      title: 'Weapons of Math Destruction',
      authors: 'Cathy O\'Neil',
      description: 'How big data increases inequality and threatens democracy',
      type: 'Book',
    },
    {
      title: 'AI Superpowers',
      authors: 'Kai-Fu Lee',
      description: 'China, Silicon Valley, and the new world order',
      type: 'Book',
    },
  ];

  const tools = [
    {
      title: 'Python & Jupyter Notebooks',
      description: 'Primary programming environment for data analysis and machine learning',
      link: 'https://jupyter.org/',
      category: 'Programming',
    },
    {
      title: 'Tableau Public',
      description: 'Free data visualization tool for creating interactive dashboards',
      link: 'https://public.tableau.com/',
      category: 'Visualization',
    },
    {
      title: 'Google Colab',
      description: 'Free cloud-based Jupyter notebook environment with GPU access',
      link: 'https://colab.research.google.com/',
      category: 'Cloud Platform',
    },
    {
      title: 'Scikit-learn',
      description: 'Python library for machine learning algorithms',
      link: 'https://scikit-learn.org/',
      category: 'ML Library',
    },
    {
      title: 'Kaggle',
      description: 'Data science competition platform with datasets and learning resources',
      link: 'https://www.kaggle.com/',
      category: 'Learning Platform',
    },
  ];

  const glossaryTerms = [
    { term: 'Algorithm', definition: 'A finite sequence of well-defined instructions to solve a problem or perform a computation' },
    { term: 'Big Data', definition: 'Datasets characterized by high Volume, Velocity, Variety, Veracity, and Value (5 Vs)' },
    { term: 'Classification', definition: 'ML task of predicting categorical outputs (e.g., spam/not spam, defect/no defect)' },
    { term: 'Confusion Matrix', definition: 'Table showing True Positives, False Positives, True Negatives, and False Negatives for model evaluation' },
    { term: 'Data Governance', definition: 'Policies and standards for data quality, security, and lifecycle management' },
    { term: 'DELTA Framework', definition: 'Analytics maturity assessment: Data, Enterprise, Leadership, Targets, Analysts' },
    { term: 'Feature Engineering', definition: 'Creating meaningful input variables from raw data to improve model performance' },
    { term: 'Overfitting', definition: 'When a model learns training data too well, including noise, failing to generalize' },
    { term: 'Precision', definition: 'TP / (TP + FP) - Of all positive predictions, how many were correct?' },
    { term: 'Recall', definition: 'TP / (TP + FN) - Of all actual positives, how many did we catch?' },
    { term: 'Regression', definition: 'ML task of predicting numerical outputs (e.g., sales forecast, price estimation)' },
    { term: 'Supervised Learning', definition: 'ML approach using labeled training data to learn input-output mappings' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent text-white section-padding">
        <div className="container-width">
          <h1 className="text-display font-bold mb-4">{t.nav.resources}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Access lecture materials, recommended readings, analytical tools, and a comprehensive glossary
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
                { key: 'tools' as const, label: 'Tools & Software', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
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
                      <p className="text-sm text-text-light mb-2">{reading.authors}</p>
                      <p className="text-text-secondary">{reading.description}</p>
                      <span className="inline-block mt-3 bg-background-light text-text-secondary px-3 py-1 rounded text-xs">
                        {reading.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <a
                  key={tool.title}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 hover:border-accent transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-h4 font-semibold text-primary">{tool.title}</h3>
                    <svg className="w-5 h-5 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-text-secondary mb-3">{tool.description}</p>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded text-xs font-medium">
                    {tool.category}
                  </span>
                </a>
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
