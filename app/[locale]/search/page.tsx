'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { use, useEffect, useState, Suspense } from 'react';
import { Locale } from '@/i18n';
import { getTranslations } from '@/lib/utils/i18n';

interface SearchResult {
  id: string;
  title: string;
  slug: string;
  description: string;
  lectureNumber: number;
  score: number;
  snippet: string;
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface SearchContentProps {
  locale: string;
}

function SearchContent({ locale }: SearchContentProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const t = getTranslations(locale as Locale);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setLoading(true);
      const controller = new AbortController();

      try {
        fetch(`/api/search?q=${encodeURIComponent(query)}&limit=20`, {
          signal: controller.signal,
        })
          .then(async (response) => {
            if (!response.ok) {
              throw new Error(`Search request failed with status ${response.status}`);
            }

            const payload = await response.json();
            setResults((payload.results ?? []) as SearchResult[]);
          })
          .catch((error) => {
            if ((error as Error).name !== 'AbortError') {
              console.error('Search error:', error);
              setResults([]);
            }
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
        setLoading(false);
      }

      return () => controller.abort();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-12">
        <div className="container-width">
          <h1 className="text-h2 font-bold mb-2">{t.search.results}</h1>
          {query && (
            <p className="text-xl text-white/90">
              {t.search.resultsCount
                .replace('{count}', results.length.toString())
                .replace('{query}', query)}
            </p>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                <p className="mt-4 text-text-secondary">{t.common.loading}</p>
              </div>
            )}

            {!loading && !query && (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 text-text-light mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h2 className="text-h3 font-semibold text-primary mb-2">
                  Enter a search query
                </h2>
                <p className="text-text-secondary">
                  Use the search bar above to find lectures and content
                </p>
              </div>
            )}

            {!loading && query && results.length === 0 && (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 text-text-light mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-h3 font-semibold text-primary mb-2">
                  {t.search.noResults}
                </h2>
                <p className="text-text-secondary mb-6">
                  {t.search.noResultsDesc}
                </p>
                <Link
                  href={`/${locale}/lectures`}
                  className="btn-primary inline-block"
                >
                  Browse All Lectures
                </Link>
              </div>
            )}

            {!loading && results.length > 0 && (
              <div className="space-y-6">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={`/${locale}/lectures/${result.slug}`}
                    className="block card p-6 hover:border-accent transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <span className="text-accent font-bold text-lg">
                            {result.lectureNumber}
                          </span>
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h2 className="text-h4 font-semibold text-primary mb-2 group-hover:text-accent">
                          {result.title}
                        </h2>

                        {result.snippet && (
                          <p className="text-text-secondary text-sm mb-3 line-clamp-3">
                            {result.snippet}
                          </p>
                        )}

                        {!result.snippet && result.description && (
                          <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                            {result.description}
                          </p>
                        )}

                        <div className="flex items-center text-accent text-sm font-medium">
                          <span>{t.common.readMore}</span>
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SearchPage({ params }: PageProps) {
  const { locale } = use(params);
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent mb-4"></div>
          <p className="text-text-secondary">Loading search...</p>
        </div>
      </div>
    }>
      <SearchContent locale={locale} />
    </Suspense>
  );
}
