const FALLBACK_SITE = 'https://dialpad-cms-staging.appspot.com';

import { NextResponse, type NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {

  if (!smartlingLocales.includes(request.nextUrl.locale)) {
    return NextResponse.next();
  }

  const headers = new Headers(request.headers);
  // this is for Smartling to work
  headers.set('Host', 'www.dialpadbeta.com');
  headers.set('x-forwarded-host', 'www.dialpadbeta.com');

  return NextResponse.next({
    request: {
      headers,
    },
  })

  // const proxyUrl = `${FALLBACK_SITE}/${request.nextUrl.locale}${request.nextUrl.pathname}`;
  // let response;

  // try {
  //   response = await fetch(proxyUrl, {
  //     method: 'GET',
  //     headers
  //   });
  // } catch (error) {
  //   console.log(error);
  //   response = Response.json(null, { status: 404 });
  // }

  // return response;
}

const smartlingLocales = ['fr', 'de'];
