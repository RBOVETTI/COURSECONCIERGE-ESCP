import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'it'] as const;
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If locale is already present, continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale if no locale in pathname
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, images, etc.)
    '/((?!api|_next|images|pdfs|locales|favicon.ico|manifest.json|robots.txt|sitemap.xml).*)',
  ],
};
