import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale if no locale in pathname
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, images, etc.)
    '/((?!api|_next/static|_next/image|images|pdfs|favicon.ico).*)',
  ],
};
