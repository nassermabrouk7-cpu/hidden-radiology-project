import { notFound } from 'next/navigation'
import { Locale } from '@/lib/types'
import { arCases } from '@/content/ar/cases'
import { enCases } from '@/content/en/cases'
import CaseDetail from '@/components/case/CaseDetail'
import { generateMetadata as genMeta } from '@/lib/seo'

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const cases = params.locale === 'ar' ? arCases : enCases
  return cases.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const cases = params.locale === 'ar' ? arCases : enCases
  const caseItem = cases.find((c) => c.slug === params.slug)
  if (!caseItem) return {}
  return genMeta(caseItem.seo, params.locale)
}

export default function CasePage({ params }: { params: { locale: string; slug: string } }) {
  const locale = params.locale as Locale
  const cases = locale === 'ar' ? arCases : enCases
  const caseItem = cases.find((c) => c.slug === params.slug)

  if (!caseItem) notFound()

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CaseDetail caseItem={caseItem} locale={locale} />
      </div>
    </div>
  )
}
