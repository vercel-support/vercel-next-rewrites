import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const FALLBACK_SITE = 'https://nodejs--miguelnavarro8.repl.co';

export async function GET(request: NextRequest) {
  try {

    const headers = {
      'Host': request.nextUrl.hostname,
      'x-tested': request.nextUrl.hostname,
    };

    console.log(`${FALLBACK_SITE}${request.url}`)
    const response = await axios.get(`${FALLBACK_SITE}${request.url}`, {
      headers,
    });

    return NextResponse.json(response.data);
  } catch (error: Error | any) {
    console.error('Proxy request error:', error.message);
    return NextResponse.error();
  }
}

