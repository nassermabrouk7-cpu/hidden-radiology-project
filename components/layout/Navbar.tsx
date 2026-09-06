'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { NAV_ITEMS, BRAND } from '@/lib/config'
import { Locale } from '@/lib/types'
import BrandLogo from './BrandLogo'

interface NavbarProps {
  locale: Locale
}

export default function Navbar({ locale }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const navItems = NAV_ITEMS[locale]
  const isAr = locale === 'ar'

  const switchLocale = isAr ? 'en' : 'ar'
  const switchPath = pathname.replace(`/${locale}`, `/${switchLocale}`)

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="flex items-center gap-2 sm:gap-3">
            <BrandLogo locale={locale} showFull={true} size="md" className="hidden sm:flex" />
            <BrandLogo locale={locale} showFull={false} size="md" className="sm:hidden" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const href = `/${locale}${item.href}`
              const isActive = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={item.href}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-cyan/10 text-brand-cyan'
                      : 'text-slate-300 hover:text-white hover:bg-brand-card'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={switchPath}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-card transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{isAr ? 'English' : 'العربية'}</span>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-brand-card"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-brand-border bg-brand-dark/95 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const href = `/${locale}${item.href}`
              const isActive = pathname === href
              return (
                <Link
                  key={item.href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-cyan/10 text-brand-cyan'
                      : 'text-slate-300 hover:text-white hover:bg-brand-card'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
