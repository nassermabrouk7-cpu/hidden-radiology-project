import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Locale } from '@/lib/types'
import { notFound } from 'next/navigation'
import { LOCALES } from '@/lib/config'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  const isAr = params.locale === 'ar'
  return {
    title: isAr ? 'Hidden Radiology | الأشعة الخفية' : 'Hidden Radiology',
    description: isAr 
      ? 'محتوى تعليمي احترافي في عالم الأشعة - 30 عاماً من الخبرة'
      : 'Professional educational content in radiology - 30 years of experience',
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale as Locale

  if (!LOCALES.includes(locale)) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}
