import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import urlMetadata from 'url-metadata';

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get('url') || '';
    const metadata = await urlMetadata(url);
    return NextResponse.json(
      { responsemessage: 'success', metadata },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { responsemessage: 'Unknown error', err },
      { status: 400 }
    );
  }
}
