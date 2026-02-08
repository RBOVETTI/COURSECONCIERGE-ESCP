'use client';

import { useEffect, useState } from 'react';
import type { TocItem } from '@/lib/utils/toc';

interface TableOfContentsProps {
  items: TocItem[];
  title: string;
}

export default function TableOfContents({ items, title }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile: Collapsible Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-background-light rounded-lg border border-gray-200"
        >
          <span className="font-semibold text-primary">{title}</span>
          <svg
            className={`w-5 h-5 text-text-secondary transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <nav className="mt-2 p-4 bg-white rounded-lg border border-gray-200">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm transition-colors ${
                      activeId === item.id
                        ? 'text-accent font-medium'
                        : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop: Sticky Sidebar */}
      <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="bg-background-light p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-primary mb-4">{title}</h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm transition-colors block w-full ${
                    activeId === item.id
                      ? 'text-accent font-medium border-l-2 border-accent pl-3'
                      : 'text-text-secondary hover:text-primary pl-3'
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
