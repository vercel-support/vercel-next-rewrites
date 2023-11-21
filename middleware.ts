const FALLBACK_SITE = 'https://nodejs--miguelnavarro8.repl.co';

import { NextResponse, type NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {

  if (!smartlingLocales.includes(request.nextUrl.locale)) {
    return NextResponse.next();
  }

  const headers = new Headers(request.headers);
  headers.set('Host', 'www.dialpadbeta.com');
  headers.set('x-forwarded-host', 'www.dialpadbeta.com');

  const proxyUrl = `${FALLBACK_SITE}/${request.nextUrl.locale}${request.nextUrl.pathname}`;
  console.log(proxyUrl);
  
  let response;

  try {
    response = await fetch(proxyUrl, {
      method: request.method,
      headers,
      body: request.body,
    });
    console.log(response);
  } catch (error) {
    console.log(JSON.stringify(error));
    response = Response.json(null, { status: 404 });
  }

  return response;
}

const smartlingLocales = ['de'];
