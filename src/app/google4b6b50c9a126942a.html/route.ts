import { NextResponse } from 'next/server';

export async function GET() {
  const html = `<meta name="google-site-verification" content="google4b6b50c9a126942a" />`;
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
