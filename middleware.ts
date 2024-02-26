/* eslint-disable no-console */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { locale, pathname } = request.nextUrl;
  const fullPathname = `/${locale}${pathname}`;
  let response;

  if (['/us/ai-meetings/'].includes(fullPathname)) {
    response = NextResponse.next({
      request: {
        headers: new Headers({
          'x-rewrite-exclude': 'true'
        })
      }
    });
  }

  return response || NextResponse.next();
}

export const config = {
  matcher: [
    {
      source: '/((?!_vercel|assets|api|_next/static|_next/image|favicon.ico).+)'
    }
  ]
};
