import Image from 'next/image'
import { ClinicalCase, Locale } from '@/lib/types'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

interface CaseDetailProps {
  caseItem: ClinicalCase
  locale: Locale
}

export default function CaseDetail({ caseItem, locale }: CaseDetailProps) {
  const isAr = locale === 'ar'

  const sections = [
    {
      title: isAr ? 'ما الحالة السريرية؟' : 'Clinical Presentation',
      content: caseItem.clinicalContext,
      color: 'text-brand-cyan',
    },
    {
      title: isAr ? 'سبب الفحص' : 'Indication',
      content: caseItem.indication,
      color: 'text-brand-cyan',
    },
    {
      title: isAr ? 'طريقة الفحص' : 'Technique',
      content: caseItem.technique,
      color: 'text-brand-cyan',
    },
    {
      title: isAr ? 'ما الذي نراه في الصورة؟' : 'Image Description',
      content: caseItem.imageDescription,
      color: 'text-brand-cyan',
    },
    {
      title: isAr ? 'العلامات الرئيسية' : 'Key Findings',
      content: caseItem.keyFindings,
      color: 'text-brand-cyan',
    },
    {
      title: isAr ? 'التحليل والتفسير' : 'Interpretation',
      content: caseItem.interpretation,
      color: 'text-brand-cyan',
    },
    {
      title: isAr ? 'التشخيص التفريقي' : 'Differential Diagnosis',
      content: caseItem.differentialDiagnosis,
      color: 'text-brand-cyan',
    },
    {
      title: isAr ? 'ما الذي يجب أن تبحث عنه؟' : 'What to Look For',
      content: caseItem.whatToLookFor,
      color: 'text-brand-cyan',
    },
    {
      title: isAr ? 'الخطأ الشائع' : 'Common Mistake',
      content: caseItem.commonMistake,
      color: 'text-red-400',
    },
    {
      title: isAr ? 'ملاحظة الجودة والسلامة' : 'Quality & Safety Note',
      content: caseItem.safetyQualityNote,
      color: 'text-yellow-400',
    },
    {
      title: isAr ? 'الانطباع النهائي' : 'Final Impression',
      content: caseItem.finalImpression,
      color: 'text-brand-cyan',
    },
  ]

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-[4/3] bg-brand-darker rounded-2xl overflow-hidden border border-brand-border">
          <Image
            src={caseItem.image}
            alt={caseItem.imageDescription}
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

          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-5 font-poppins">
            {caseItem.title}
          </h1>

          <Card className="border-brand-cyan/20">
            <h2 className="text-brand-cyan font-bold text-lg mb-3">
              {isAr ? 'الحالة السريرية' : 'Clinical Presentation'}
            </h2>
            <p className="text-slate-300 leading-8">{caseItem.clinicalContext}</p>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sections.slice(1).map((section) => (
          <Card key={section.title}>
            <h2 className={`${section.color} font-bold text-lg mb-3`}>
              {section.title}
            </h2>
            <p className="text-slate-300 leading-8">
              {section.content}
            </p>
          </Card>
        ))}
      </div>

      <Card className="bg-brand-cyan/5 border-brand-cyan/20">
        <h2 className="text-brand-cyan font-bold text-xl mb-3">
          {isAr ? 'الخلاصة التعليمية' : 'Learning Point'}
        </h2>
        <p className="text-white text-lg font-medium leading-8">
          {caseItem.takeaway}
        </p>
      </Card>
    </div>
  )
}
