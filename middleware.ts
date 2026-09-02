import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LOCALES, DEFAULT_LOCALE } from './lib/config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameHasLocale = LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) ||
      pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  const locale = DEFAULT_LOCALE
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|images|.*\..*).*)'],
}
