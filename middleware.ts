import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const path = url.pathname

  if (path.startsWith('/admin/orders') || path.startsWith('/admin/factory')) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  if (path.startsWith('/admin')) {
    const host = request.headers.get('host') || ''
    const isLocal = host.includes('localhost') || host.includes('127.0.0.1')
    if (!isLocal) {
      const secret = url.searchParams.get('key')
      if (secret !== 'HR_2026_NASSER_SECRET_ROYAL') {
        return NextResponse.rewrite(new URL('/404', request.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
