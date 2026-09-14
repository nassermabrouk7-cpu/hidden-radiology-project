import { Locale } from '@/lib/types'
import { arCases } from '@/content/ar/cases'
import { enCases } from '@/content/en/cases'
import HiddenCasesExperience from '@/components/case/HiddenCasesExperience'

export default function CasesPage({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'

  const cases = isAr ? arCases : enCases

  const visible = cases.filter(
    (caseItem) => caseItem.status === 'PUBLISHED'
  )

  return (
    <HiddenCasesExperience
      cases={visible}
      locale={isAr ? 'ar' : 'en'}
    />
  )
}
