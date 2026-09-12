import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LOCALES, DEFAULT_LOCALE } from './lib/config/locales'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameHasLocale = LOCALES.some(
    (locale) =>
      pathname.startsWith(//) ||
      pathname === /
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  const newUrl = request.nextUrl.clone()
  newUrl.pathname = /
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|favicon.ico|images|.*\\..*).*)'],
}
