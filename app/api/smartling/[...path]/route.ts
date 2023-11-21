import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const FALLBACK_SITE = 'https://nodejs--miguelnavarro8.repl.co';

export async function GET(request: NextRequest) {
  console.log(`${FALLBACK_SITE}/${request.nextUrl.locale}/${request.nextUrl.pathname}`)
  try {
    
    const headers = {
      'Host': request.nextUrl.hostname,
      'x-tested': request.nextUrl.hostname,
    };

    const response = await axios.get(`${FALLBACK_SITE}/${request.nextUrl.locale}/${request.nextUrl.pathname}`, {
      headers,
    });

    return NextResponse.json(response.data);
  } catch (error: Error | any) {
    console.error('Proxy request error:', error.message);
    return NextResponse.error();
  }
}

