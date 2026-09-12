import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }]
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  const locale = params?.locale || 'ar'
  if (!['ar','en'].includes(locale)) notFound()
  return (
    <div dir={locale === 'ar'? 'rtl':'ltr'} className="min-h-screen flex flex-col bg-brand-dark">
      <Navbar locale={locale as any} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as any} />
    </div>
  )
}
