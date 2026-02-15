'use client';

import { use, useState } from 'react';
import { Locale } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';
import LMSModal from '@/components/lectures/LMSModal';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default function ResourcesPage({ params }: PageProps) {
  const { locale } = use(params);
  const t = getTranslations(locale as Locale);
  const [activeTab, setActiveTab] = useState<'pdfs' | 'readings' | 'additional' | 'glossary'>('pdfs');
  const [lmsModalOpen, setLmsModalOpen] = useState(false);

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

  const additionalReadings = [
    {
      title: 'The Ethics of Artificial Intelligence: Principles, Challenges, and Opportunities',
      authors: 'Luciano Floridi',
      description: 'Floridi\'s definitive work on AI ethics, developing the thesis that AI represents an unprecedented divorce between agency and intelligence, with a framework for ethical AI governance including principles, risks, and post-compliance ethics',
      type: 'Book',
      year: '2023',
      publisher: 'Oxford University Press',
    },
    {
      title: 'Ethics, Governance, and Policies in Artificial Intelligence',
      authors: 'Luciano Floridi (ed.)',
      description: 'An edited collection examining the intersection of AI, ethics, and governance, addressing how policy and regulatory frameworks can shape responsible AI development',
      type: 'Book',
      year: '2021',
      publisher: 'Springer',
    },
    {
      title: 'AI First: The Playbook for a Future-Proof Business and Brand',
      authors: 'Adam Brotman, Andy Sack',
      description: 'A practical guide for executives on building AI-first organizations, drawing on insights from technology leaders on how AI democratizes creative capability and reshapes business models',
      type: 'Book',
      year: '2024',
      publisher: 'Harvard Business Review Press',
    },
    {
      title: 'Human + Machine: Reimagining Work in the Age of AI',
      authors: 'Paul R. Daugherty, H. James Wilson',
      description: 'Examines how AI is redesigning industries and work processes, emphasizing AI as a tool that augments human workers through new collaboration models rather than replacing them',
      type: 'Book',
      year: '2024',
      publisher: 'Harvard Business Review Press',
    },
    {
      title: 'More Human: How the Power of AI Can Transform the Way You Lead',
      authors: 'Rasmus Hougaard, Jacqueline Carter, Marissa Afton, Rob Stembridge',
      description: 'Argues that leaders who thrive in the AI age are those who use AI to become more human, not less, presenting a practical roadmap for blending technological capability with essential human qualities in leadership',
      type: 'Book',
      year: '2025',
      publisher: 'Harvard Business Review Press',
    },
    {
      title: 'Competing on Analytics: The New Science of Winning',
      authors: 'Thomas H. Davenport, Jeanne G. Harris',
      description: 'Foundational text on building analytics-driven organizations and competitive advantage through data — a strategic classic that remains highly relevant',
      type: 'Book',
      year: '2007',
      publisher: 'Harvard Business Review Press',
    },
    {
      title: 'Professor Riccardo Bovetti\'s Writings',
      authors: 'Riccardo Bovetti',
      description: 'Essays, case studies, and reflections on digital transformation, AI strategy, and business innovation in the F&B sector and beyond',
      type: 'Website',
      year: 'Ongoing',
      publisher: '',
      url: 'https://writings.rbovetti.com',
    },
  ];

  const glossaryTerms = [
    { term: 'A/B Testing', definition: 'Experimental method comparing two variants to determine which performs better, essential for data-driven decision making' },
    { term: 'Algorithm', definition: 'A finite sequence of well-defined instructions to solve a problem or perform a computation' },
    { term: 'Analytics Spectrum', definition: 'The progression from Descriptive (what happened?) to Predictive (what will happen?) to Prescriptive (what should we do?) analytics' },
    { term: 'Artificial Intelligence (AI)', definition: 'Systems that exhibit intelligent behavior by analyzing their environment and taking actions to achieve specific goals' },
    { term: 'Augmented Reality (AR)', definition: 'Technology overlaying digital information on the physical world, enhancing human perception and decision-making' },
    { term: 'Bias-Variance Tradeoff', definition: 'The balance between model simplicity (high bias, underfitting) and complexity (high variance, overfitting)' },
    { term: 'Big Data', definition: 'Datasets characterized by high Volume, Velocity, Variety, Veracity, and Value (5 Vs)' },
    { term: 'Classification', definition: 'ML task of predicting categorical outputs (e.g., spam/not spam, defect/no defect)' },
    { term: 'Cloud Computing', definition: 'On-demand delivery of computing resources (servers, storage, databases, networking) over the internet' },
    { term: 'Confusion Matrix', definition: 'Table showing True Positives, False Positives, True Negatives, and False Negatives for model evaluation' },
    { term: 'Data Governance', definition: 'Policies and standards for data quality, security, and lifecycle management' },
    { term: 'Data Leakage', definition: 'When information from outside the training dataset is used to create the model, leading to overly optimistic performance estimates' },
    { term: 'Data Value Model', definition: 'Framework describing the stages of data value creation: Generation, Acquisition, Storage, Analysis, and Support' },
    { term: 'Deep Learning', definition: 'Subset of ML using neural networks with multiple layers to learn hierarchical representations' },
    { term: 'Digital Twin', definition: 'Virtual replica of a physical system used for simulation, monitoring, and optimization' },
    { term: 'Ensemble Methods', definition: 'Combining multiple ML models to improve prediction accuracy (e.g., Random Forest, Gradient Boosting)' },
    { term: 'Explainable AI (XAI)', definition: 'Methods and techniques that make AI model decisions transparent and interpretable to humans' },
    { term: 'False Negative (Type II Error)', definition: 'Incorrectly predicting negative when the true value is positive (e.g., missing a disease diagnosis)' },
    { term: 'False Positive (Type I Error)', definition: 'Incorrectly predicting positive when the true value is negative (e.g., false alarm in fraud detection)' },
    { term: 'Feature Engineering', definition: 'Creating meaningful input variables from raw data to improve model performance' },
    { term: 'Generative AI', definition: 'AI systems that create new content (text, images, code) based on patterns learned from training data' },
    { term: 'Gradient Descent', definition: 'Optimization algorithm that iteratively adjusts model parameters to minimize error' },
    { term: 'Hyperparameter', definition: 'Configuration setting for an ML algorithm that is set before training (e.g., learning rate, tree depth)' },
    { term: 'Infosphere', definition: 'The informational environment in which we exist, as conceptualized by Luciano Floridi — analogous to the biosphere for biological life' },
    { term: 'Internet of Things (IoT)', definition: 'Network of physical devices embedded with sensors, software, and connectivity to exchange data' },
    { term: 'Knowledge Pyramid', definition: 'The hierarchy from raw Data to structured Information to actionable Knowledge to strategic Decisions' },
    { term: 'Machine Learning (ML)', definition: 'Systems that improve performance through experience without being explicitly programmed' },
    { term: 'Model Drift', definition: 'Degradation of model performance over time as real-world data distributions change' },
    { term: 'Moravec Paradox', definition: 'Observation that tasks easy for humans (perception, motor skills) are hard for AI, while tasks hard for humans (math, logic) are easy for AI' },
    { term: 'Natural Language Processing (NLP)', definition: 'Branch of AI focused on enabling computers to understand, interpret, and generate human language' },
    { term: 'Neural Network', definition: 'ML model inspired by biological neurons, consisting of interconnected layers of nodes that process information' },
    { term: 'Overfitting', definition: 'When a model learns training data too well, including noise, failing to generalize' },
    { term: 'Polanyi Paradox', definition: 'We know more than we can tell — humans perform many tasks without being able to articulate the rules, making them difficult to automate' },
    { term: 'Precision', definition: 'TP / (TP + FP) - Of all positive predictions, how many were correct?' },
    { term: 'Predictive Analytics', definition: 'Using historical data and ML algorithms to forecast future outcomes' },
    { term: 'Productivity Paradox', definition: 'The observed phenomenon where technology investment does not immediately translate into measurable productivity gains, often due to organizational inertia' },
    { term: 'Random Forest', definition: 'Ensemble ML method that builds multiple decision trees and aggregates their predictions for improved accuracy' },
    { term: 'Recall (Sensitivity)', definition: 'TP / (TP + FN) - Of all actual positives, how many did we catch?' },
    { term: 'Regression', definition: 'ML task of predicting numerical outputs (e.g., sales forecast, price estimation)' },
    { term: 'Reinforcement Learning', definition: 'ML approach where an agent learns by taking actions in an environment and receiving rewards or penalties' },
    { term: 'Servitization', definition: 'The transformation from selling products to selling outcomes, enabled by data connectivity and predictive analytics' },
    { term: 'Supervised Learning', definition: 'ML approach using labeled training data to learn input-output mappings' },
    { term: 'Synthetic Data', definition: 'Artificially generated data that mimics real-world data characteristics, used to supplement or replace actual data for ML training' },
    { term: 'Training Set', definition: 'Subset of data used to train an ML model by adjusting its parameters' },
    { term: 'Transfer Learning', definition: 'Technique where a model trained on one task is adapted for a related task, reducing training time and data requirements' },
    { term: 'Turing Test', definition: 'Test of a machine\'s ability to exhibit intelligent behavior indistinguishable from a human' },
    { term: 'Underfitting', definition: 'When a model is too simple to capture the underlying pattern in the data, resulting in poor performance' },
    { term: 'Unsupervised Learning', definition: 'ML approach that finds patterns in unlabeled data (e.g., clustering, dimensionality reduction)' },
    { term: 'Validation Set', definition: 'Subset of data used to tune model hyperparameters and prevent overfitting during development' },
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
                { key: 'readings' as const, label: 'Core Readings', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                { key: 'additional' as const, label: 'Additional Reading & References', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
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
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pdfs.map((pdf) => (
                  <button
                    key={pdf.file}
                    onClick={() => setLmsModalOpen(true)}
                    className="card p-6 hover:border-accent transition-all text-left cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-h4 font-semibold text-primary mb-2">{pdf.title}</h3>
                    <p className="text-text-secondary text-sm">{pdf.description}</p>
                  </button>
                ))}
              </div>
              <LMSModal isOpen={lmsModalOpen} onClose={() => setLmsModalOpen(false)} />
            </>
          )}

          {/* Core Readings Tab */}
          {activeTab === 'readings' && (
            <div className="space-y-4">
              <div className="bg-accent/10 border-l-4 border-accent p-4 mb-6">
                <p className="text-text-primary">
                  <strong>Core readings</strong> are essential foundational texts referenced throughout the course lectures.
                </p>
              </div>
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
                        {reading.publisher && (
                          <span className="inline-block bg-background-light text-text-secondary px-3 py-1 rounded text-xs">
                            {reading.publisher}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Additional Reading Tab */}
          {activeTab === 'additional' && (
            <div className="space-y-4">
              <div className="bg-primary/10 border-l-4 border-primary p-4 mb-6">
                <p className="text-text-primary">
                  <strong>Additional reading and references</strong> provide deeper exploration of specific topics, diverse perspectives, and supplementary materials to enhance your understanding.
                </p>
              </div>
              {additionalReadings.map((reading) => (
                <div key={reading.title} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        {reading.publisher && (
                          <span className="inline-block bg-background-light text-text-secondary px-3 py-1 rounded text-xs">
                            {reading.publisher}
                          </span>
                        )}
                        {reading.url && (
                          <a
                            href={reading.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-accent hover:text-accent-dark text-sm font-medium"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Visit Website
                          </a>
                        )}
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
