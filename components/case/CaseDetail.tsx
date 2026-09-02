import Image from 'next/image'
import { ClinicalCase } from '@/lib/types'
import { Locale } from '@/lib/types'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

interface CaseDetailProps {
  caseItem: ClinicalCase
  locale: Locale
}

export default function CaseDetail({ caseItem, locale }: CaseDetailProps) {
  const isAr = locale === 'ar'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="relative aspect-[4/3] bg-brand-darker rounded-2xl overflow-hidden border border-brand-border">
        <Image
          src={caseItem.image}
          alt={caseItem.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="cyan">{caseItem.modality}</Badge>
          <span className="text-sm text-slate-500">{caseItem.region}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white mb-4 font-poppins">{caseItem.title}</h1>
        <p className="text-slate-400 text-lg mb-6">{caseItem.clinicalContext}</p>

        <div className="space-y-4">
          <Card>
            <h3 className="text-brand-cyan font-bold mb-2">{isAr ? 'ما الذي تبحث عنه؟' : 'What to Look For'}</h3>
            <p className="text-slate-300">{caseItem.whatToLookFor}</p>
          </Card>
          <Card>
            <h3 className="text-red-400 font-bold mb-2">{isAr ? 'الخطأ الشائع' : 'Common Mistake'}</h3>
            <p className="text-slate-300">{caseItem.commonMistake}</p>
          </Card>
          <Card>
            <h3 className="text-yellow-400 font-bold mb-2">{isAr ? 'ملاحظة الجودة والسلامة' : 'Quality & Safety Note'}</h3>
            <p className="text-slate-300">{caseItem.safetyQualityNote}</p>
          </Card>
          <Card className="bg-brand-cyan/5 border-brand-cyan/20">
            <h3 className="text-brand-cyan font-bold mb-2">{isAr ? 'الخلاصة' : 'Takeaway'}</h3>
            <p className="text-white font-medium">{caseItem.takeaway}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
