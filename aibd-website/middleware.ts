import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a supported locale
  const pathnameStartsWithLocale = pathname.startsWith('/en') || pathname.startsWith('/it');

  if (pathnameStartsWithLocale) {
    return NextResponse.next();
  }

  // Redirect to /en for paths without locale
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next (Next.js internals)
     * - Static files (images, fonts, etc.)
     * - API routes
     */
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\..*).*)'
  ],
};
