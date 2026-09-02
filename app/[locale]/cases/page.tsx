import { Locale } from '@/lib/types'
import { arCases } from '@/content/ar/cases'
import { enCases } from '@/content/en/cases'
import CaseCard from '@/components/case/CaseCard'

export default function CasesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const cases = isAr ? arCases : enCases
  const visible = cases.filter(c => c.status === 'PUBLISHED')

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-poppins">
            {isAr ? 'حالات سريرية' : 'Clinical Cases'}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {isAr ? 'تعلم من حالات حقيقية — ليس مجرد معرض صور' : 'Learn from real cases — not just a gallery'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  )
}
