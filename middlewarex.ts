/* eslint-disable no-console */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { locale, pathname } = request.nextUrl;
  const fullPathname = `/${locale}${pathname}`
  const response = NextResponse.next();

  if (['/us/ai-meetings/'].includes(fullPathname)) {
      response.headers.set('x-rewrite-exclude', 'true');
    }

  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!_vercel|assets|api|_next/static|_next/image|favicon.ico).+)'
    }
  ]
};
