'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n';
import { Translations } from '@/lib/utils/i18n';
import SearchBar from '@/components/search/SearchBar';

interface HeaderProps {
  locale: Locale;
  t: Translations;
}

export default function Header({ locale, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: t.nav.home, href: `/${locale}` },
    { name: t.nav.overview, href: `/${locale}/overview` },
    { name: t.nav.syllabus, href: `/${locale}/syllabus` },
    { name: t.nav.lectures, href: `/${locale}/lectures` },
    { name: t.nav.resources, href: `/${locale}/resources` },
    { name: t.nav.aiAssistant, href: `/${locale}/ai-assistant` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container-width" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="hidden md:block font-semibold text-primary text-lg">
                AI & Data Transformation
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-secondary hover:bg-background-dark hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side: Home link, Search & Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Home link to rbovetti.com */}
            <a
              href="https://rbovetti.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-primary flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all duration-200"
              aria-label="Visit rbovetti.com"
              title="Back to rbovetti.com"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>

            {/* Search Bar */}
            <SearchBar locale={locale} t={t} />

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-background-dark transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-accent/10 text-accent'
                      : 'text-text-secondary hover:bg-background-dark hover:text-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
