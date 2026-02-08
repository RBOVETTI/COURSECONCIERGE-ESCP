'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n';
import { Translations } from '@/lib/utils/i18n';

interface BreadcrumbsProps {
  locale: Locale;
  t: Translations;
}

export default function Breadcrumbs({ locale, t }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter((segment) => segment !== '' && segment !== locale);

    const breadcrumbs = [
      { name: t.nav.home, href: `/${locale}`, current: false },
    ];

    let currentPath = `/${locale}`;

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Convert segment to display name
      let displayName = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Use translation if available
      const segmentKey = segment as keyof typeof t.nav;
      if (segmentKey in t.nav) {
        displayName = t.nav[segmentKey];
      }

      breadcrumbs.push({
        name: displayName,
        href: currentPath,
        current: index === pathSegments.length - 1,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="container-width py-4">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <svg
                className="flex-shrink-0 h-4 w-4 text-text-light mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            )}
            {breadcrumb.current ? (
              <span className="text-text-primary font-medium" aria-current="page">
                {breadcrumb.name}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-text-secondary hover:text-accent transition-colors"
              >
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
