import { ClinicalCase } from '../../lib/types'

export const arCases: ClinicalCase[] = [
  {
    id: 'hr-case-ar-001',
    language: 'ar',
    slug: 'chest-pneumonia',
    title: 'ذات الرئة — حالة سريرية',
    modality: 'Chest X-Ray',
    region: 'الصدر',
    clinicalContext: 'مريض يبلغ من العمر 45 عاماً يعاني من سعال وحمى منذ 5 أيام.',
    image: '/assets/images/ar/cases/xray/chest-xray.png',
    whatToLookFor: 'تعتيم موضعي في الفص السفلي الأيمن مع حدود هوائية (air bronchograms).',
    commonMistake: 'الخلط بين ذات الرئة والانصباب الجنبي.',
    safetyQualityNote: 'تأكد من وضع المريض في وضعية PA وليس AP إذا كان واعياً.',
    takeaway: 'تعتيم موضعي + حدود هوائية = ذات رئة.',
    status: 'PUBLISHED',
    seo: {
      title: 'حالة سريرية: ذات الرئة | Hidden Radiology',
      description: 'حالة سريرية في أشعة الصدر - ذات الرئة',
      canonical: '/ar/cases/chest-pneumonia',
    },
  },
  {
    id: 'hr-case-ar-002',
    language: 'ar',
    slug: 'ct-brain-stroke',
    title: 'السكتة الدماغية — حالة CT',
    modality: 'CT',
    region: 'الدماغ',
    clinicalContext: 'مريض يبلغ من العمر 68 عاماً، فقدان مفاجئ للوعي، ضعف في الجانب الأيسر.',
    image: '/assets/images/ar/cases/ct/ct-brain-hemorrhage.jpg',
    whatToLookFor: 'علامات الدماغ المبكرة: فقدان التمييز بين المادة الرمادية والبيضاء، علامة الشريط الكثيف.',
    commonMistake: 'التأخر في تشخيص السكتة الدماغية بسبب عدم ملاحظة التغييرات المبكرة الدقيقة.',
    safetyQualityNote: 'CT الدماغ بدون تباين هو الفحص الأول في السكتة الدماغية الحادة.',
    takeaway: 'الوقت = دماغ. كل دقيقة تؤخر العلاج تفقد 1.9 مليون خلية عصبية.',
    status: 'PUBLISHED',
    seo: {
      title: 'حالة سريرية: السكتة الدماغية | Hidden Radiology',
      description: 'حالة CT في السكتة الدماغية - تشخيص مبكر',
      canonical: '/ar/cases/ct-brain-stroke',
    },
  },
]

