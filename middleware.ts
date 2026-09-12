import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['ar', 'en']
const DEFAULT_LOCALE = 'ar'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // لو داخل /ar او /en سيبه يعدي
  if (
    pathname.startsWith('/ar/') ||
    pathname.startsWith('/en/') ||
    pathname === '/ar' ||
    pathname === '/en' ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // اي مسار تاني حوله لـ /ar
  const newUrl = request.nextUrl.clone()
  if (pathname === '/') {
    newUrl.pathname = '/ar'
  } else {
    newUrl.pathname = '/' + DEFAULT_LOCALE + pathname
  }
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|favicon.ico|.*\\..*).*)'],
}
