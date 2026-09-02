import Link from 'next/link'
import Image from 'next/image'
import { ClinicalCase } from '@/lib/types'
import { Locale } from '@/lib/types'
import Badge from '@/components/ui/Badge'

interface CaseCardProps {
  caseItem: ClinicalCase
  locale: Locale
}

export default function CaseCard({ caseItem, locale }: CaseCardProps) {
  const isAr = locale === 'ar'

  return (
    <Link href={`/${locale}/cases/${caseItem.slug}`} className="block">
      <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-cyan/30 transition-all duration-300">
        <div className="relative aspect-[4/3] bg-brand-darker overflow-hidden">
          <Image
            src={caseItem.image}
            alt={caseItem.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="cyan">{caseItem.modality}</Badge>
            <span className="text-xs text-slate-500">{caseItem.region}</span>
          </div>
          <h3 className="text-white font-bold text-lg mb-2 hover:text-brand-cyan transition-colors">
            {caseItem.title}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-2">{caseItem.clinicalContext}</p>
        </div>
      </div>
    </Link>
  )
}
