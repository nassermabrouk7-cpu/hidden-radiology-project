import Link from 'next/link'
import { Locale } from '@/lib/types'
import Card from '@/components/ui/Card'
import { Shield, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react'

export default function QualitySafetyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'

  const content = {
    ar: {
      title: 'الجودة والسلامة',
      subtitle: 'معايير الجودة في أقسام الأشعة',
      intro: 'قسم متخصص لمعايير الجودة والسلامة في الأشعة — من الخبرة الميدانية إلى التطبيق العملي.',
      sections: [
        {
          icon: Shield,
          title: 'معايير الجودة',
          desc: 'قوائم مراجعة شاملة لتقييم جودة أقسام الأشعة وفق المعايير الدولية.',
        },
        {
          icon: AlertTriangle,
          title: 'السلامة الإشعاعية',
          desc: 'مبادئ ALARA، حماية المرضى والعاملين، وإدارة الجرعات.',
        },
        {
          icon: CheckCircle,
          title: 'الامتثال',
          desc: 'التأكد من مطابقة القسم للمعايير المحلية والدولية.',
        },
        {
          icon: BookOpen,
          title: 'التدريب',
          desc: 'برامج تدريبية للفنيين الجدد في مجال الجودة والسلامة.',
        },
      ],
    },

    en: {
      title: 'Quality & Safety',
      subtitle: 'Quality Standards in Radiology Departments',
      intro: 'A dedicated section for quality and safety standards in radiology — from field experience to practical application.',
      sections: [
        {
          icon: Shield,
          title: 'Quality Standards',
          desc: 'Comprehensive checklists for evaluating radiology department quality according to international standards.',
        },
        {
          icon: AlertTriangle,
          title: 'Radiation Safety',
          desc: 'ALARA principles, patient and staff protection, and dose management.',
        },
        {
          icon: CheckCircle,
          title: 'Compliance',
          desc: 'Ensuring department compliance with local and international standards.',
        },
        {
          icon: BookOpen,
          title: 'Training',
          desc: 'Training programs for new technicians in quality and safety.',
        },
      ],
    },
  }

  const c = isAr ? content.ar : content.en

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-poppins">
            {c.title}
          </h1>

          <p className="text-brand-cyan text-xl font-medium mb-6">
            {c.subtitle}
          </p>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {c.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.sections.map((section) => (
            <Card key={section.title}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                  <section.icon className="w-6 h-6 text-brand-cyan" />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {section.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {section.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Link
          href={`/${locale}/courses/quality-safety`}
          className="block mt-8"
        >
          <div className="bg-brand-cyan/10 border border-brand-cyan/30 rounded-2xl p-6 text-center hover:bg-brand-cyan/15 hover:border-brand-cyan/60 transition-all">
            <h2 className="text-xl font-bold text-brand-cyan mb-2">
              {isAr
                ? 'ابدأ دورة الجودة والسلامة'
                : 'Start Quality & Safety Course'}
            </h2>

            <p className="text-slate-300">
              {isAr
                ? 'انتقل إلى الدروس الأربعة وابدأ التعلم'
                : 'Access the four lessons and start learning'}
            </p>
          </div>
        </Link>

      </div>
    </div>
  )
}
