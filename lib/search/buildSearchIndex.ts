// Simple client-side search implementation
export interface SearchDocument {
  id: string;
  title: string;
  slug: string;
  content: string;
  keywords: string[];
  description: string;
  lectureNumber: number;
}

// Static search data - in a real app, this would be generated at build time
const searchData: SearchDocument[] = [
  {
    id: 'course-introduction',
    slug: 'course-introduction',
    title: 'Course Introduction: The Enterprise AI & Machine Learning Companion',
    description: 'From Productivity Paradox to Autonomous Agents',
    lectureNumber: 0,
    keywords: ['Productivity Paradox', 'Machine Learning', 'Algorithm', 'Supervised Learning', 'Confusion Matrix'],
    content: 'productivity paradox machine learning algorithm supervised unsupervised confusion matrix AI artificial intelligence',
  },
  {
    id: 'lecture-1-enabling-technologies',
    slug: 'lecture-1-enabling-technologies',
    title: 'AI & Data Transformation: Enabling Technologies',
    description: 'Cloud, IoT, Robotics, AR, and Big Data',
    lectureNumber: 1,
    keywords: ['Cloud Computing', 'IoT', 'Robotics', '3D Printing', 'Augmented Reality', 'Big Data'],
    content: 'cloud computing iot internet things robotics automation 3d printing additive manufacturing augmented reality big data',
  },
  {
    id: 'lecture-2-info-economy',
    slug: 'lecture-2-info-economy',
    title: 'The Info-Economy and the Data Value Model',
    description: 'Strategic Foundations for the Digital Age',
    lectureNumber: 2,
    keywords: ['Bits vs Atoms', 'Data Value Model', 'Analytics Spectrum', 'Digital Ethics'],
    content: 'information economy bits atoms data value model analytics descriptive predictive prescriptive ethics bias',
  },
  {
    id: 'lecture-3-analytics-strategy',
    slug: 'lecture-3-analytics-strategy',
    title: 'Analytics Strategy Simulation: Data-Driven Decision Making',
    description: 'HBS Data Analytics Simulation by Thomas H. Davenport',
    lectureNumber: 3,
    keywords: ['HBS Simulation', 'Strategic Decision Making', 'Analytics Strategy', 'Data-Driven'],
    content: 'analytics strategy simulation harvard business school davenport strategic decision making data-driven organizational readiness',
  },
  {
    id: 'lecture-4-machine-learning',
    slug: 'lecture-4-machine-learning',
    title: 'Machine Learning Applications in Food & Beverage',
    description: 'Practical ML applications and model evaluation',
    lectureNumber: 4,
    keywords: ['Feature Engineering', 'Model Evaluation', 'Precision', 'Recall', 'Overfitting'],
    content: 'machine learning ml feature engineering model evaluation precision recall f1 score overfitting classification regression',
  },
  {
    id: 'lecture-5-human-dimension',
    slug: 'lecture-5-human-dimension',
    title: 'Mastering the Human Dimension of Big Data & Analytics',
    description: 'From Data to Decision - human-centric analytics and philosophy',
    lectureNumber: 5,
    keywords: ['Human-Centric Analytics', 'Customer Journey', 'Strategic Trade-offs', 'Floridi', 'Infosphere'],
    content: 'human dimension customer journey crm gamification trade-offs big data small data philosophy ontology epistemology floridi infosphere ethics',
  },
];

export function searchLectures(query: string, limit = 10) {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const lowerQuery = query.toLowerCase();
  const queryWords = lowerQuery.split(/\s+/).filter((w) => w.length > 0);

  // Score each document
  const scored = searchData.map((doc) => {
    let score = 0;
    const searchText = `${doc.title} ${doc.description} ${doc.keywords.join(' ')} ${doc.content}`.toLowerCase();

    queryWords.forEach((word) => {
      // Title matches (highest weight)
      if (doc.title.toLowerCase().includes(word)) {
        score += 10;
      }

      // Keyword matches
      if (doc.keywords.some((k) => k.toLowerCase().includes(word))) {
        score += 5;
      }

      // Description matches
      if (doc.description.toLowerCase().includes(word)) {
        score += 3;
      }

      // Content matches
      if (doc.content.includes(word)) {
        score += 1;
      }

      // Exact match bonus
      if (searchText.includes(lowerQuery)) {
        score += 20;
      }
    });

    return {
      ...doc,
      score,
      snippet: generateSnippet(doc.description, query),
    };
  });

  // Filter and sort by score
  return scored
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function generateSnippet(content: string, query: string, length = 150): string {
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const queryWords = lowerQuery.split(/\s+/);

  // Find first occurrence of any query word
  let position = -1;
  for (const word of queryWords) {
    const pos = lowerContent.indexOf(word);
    if (pos !== -1 && (position === -1 || pos < position)) {
      position = pos;
    }
  }

  if (position === -1) {
    return content.substring(0, length) + '...';
  }

  // Extract snippet around the match
  const start = Math.max(0, position - length / 2);
  const end = Math.min(content.length, position + length / 2);

  let snippet = content.substring(start, end);

  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet = snippet + '...';

  // Highlight query terms
  queryWords.forEach((word) => {
    const regex = new RegExp(`(${word})`, 'gi');
    snippet = snippet.replace(regex, '<mark>$1</mark>');
  });

  return snippet;
}
