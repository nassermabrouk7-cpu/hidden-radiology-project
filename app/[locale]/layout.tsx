import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { notFound } from 'next/navigation'

const LOCALES = ['ar', 'en'] as const
type Locale = typeof LOCALES[number]

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: any
}) {
  const p = params?.locale? params : await params
  const locale = p.locale as Locale
  if (!['ar','en'].includes(locale)) notFound()
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark" dir={locale === 'ar'? 'rtl' : 'ltr'}>
      <Navbar locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}
