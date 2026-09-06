import Link from 'next/link'
import { BRAND } from '@/lib/config'
import { Locale } from '@/lib/types'
import { Youtube, Mail, MessageCircle } from 'lucide-react'
import PaymentMethods from '../product/PaymentMethods'
import BrandLogo from './BrandLogo'

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const isAr = locale === 'ar'

  const navItems = [
    { label: isAr ? 'الرئيسية' : 'Home', href: `/${locale}` },
    { label: isAr ? 'المتجر' : 'Store', href: `/${locale}/store` },
    { label: isAr ? 'الدورات' : 'Courses', href: `/${locale}/courses` },
    { label: isAr ? 'عنّا' : 'About', href: `/${locale}/about` },
  ]

  return (
    <footer className="mt-20 border-t border-brand-border bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PaymentMethods locale={locale} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo locale={locale} showFull={true} size="md" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {isAr ? BRAND.sloganAr : BRAND.slogan}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{isAr ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-400 hover:text-brand-cyan text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{isAr ? 'تواصل معنا' : 'Contact Us'}</h4>
            <div className="space-y-3">
              <a href="https://youtube.com/@HiddenRadiology" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-red-400 text-sm transition-colors">
                <Youtube className="w-4 h-4" /> YouTube
              </a>
              <a href="mailto:hiddenradiology@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-brand-cyan text-sm transition-colors">
                <Mail className="w-4 h-4" /> hiddenradiology@gmail.com
              </a>
              <a href="https://wa.me/201115440838" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-green-400 text-sm transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp: 01115440838
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border text-center">
          <p className="text-slate-500 text-sm">
            {isAr 
              ? `جميع الحقوق محفوظة © ${BRAND.name} 2026` 
              : `All rights reserved © ${BRAND.name} 2026`}
          </p>
        </div>
      </div>
    </footer>
  )
}
