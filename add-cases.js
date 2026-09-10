const fs = require('fs');
const p = 'content/ar/cases.ts';
let c = fs.readFileSync(p, 'utf8');

// احذف المحاولة الفاشلة السابقة لو موجودة
c = c.replace(/,\s*\{\s*slug:\s*'brainstem-pontine-lesion-t2'[\s\S]*?thoracic-intradural-extramedullary-mass'[\s\S]*?\}\s*\}\s*\]/, '\n]');

let idx = c.lastIndexOf(']');
let newData = `,
  {
    id: 'brainstem-pontine-lesion-t2',
    language: 'ar',
    slug: 'brainstem-pontine-lesion-t2',
    title: 'آفة جذع الدماغ الخفية - البؤرة الجسرية على T2',
    modality: 'MRI',
    region: 'الدماغ',
    clinicalContext: 'حالة تعليمية لآفة دقيقة في جذع الدماغ.',
    indication: 'تقييم آفة جذع دماغ مشتبه بها.',
    technique: 'MRI Brain T2 Axial.',
    image: '/assets/images/ar/cases/mri/MRI Brain-T2-Weighted - Axial Views.jpg',
    imageDescription: 'بؤرة صغيرة في pons.',
    keyFindings: 'بؤرة صغيرة عالية الإشارة في pons.',
    interpretation: 'آفة صغيرة.',
    differentialDiagnosis: 'التهاب.',
    whatToLookFor: 'راجع جذع الدماغ.',
    commonMistake: 'الإغفال.',
    safetyQualityNote: 'تعليمية.',
    finalImpression: 'بؤرة جسرية.',
    takeaway: 'راجع جذع الدماغ.',
    status: 'PUBLISHED',
    seo: { title: 'آفة جذع الدماغ', description: 'حالة MRI', canonical: '/ar/cases/brainstem-pontine-lesion-t2' }
  },
  {
    id: 'cervicothoracic-cord-lesion-enhancement',
    language: 'ar',
    slug: 'cervicothoracic-cord-lesion-enhancement',
    title: 'آفة الحبل الرقبي الصدري - التباين يكشف الخفي',
    modality: 'MRI',
    region: 'العمود الفقري',
    clinicalContext: 'حالة حبل شوكي.',
    indication: 'تقييم آفة حبل.',
    technique: 'MRI T2 & T1 Post-Contrast.',
    image: '/assets/images/ar/cases/mri/MRI CervicalThoracic Spine - T2 & T1 Post-Contrast..png',
    imageDescription: 'بؤرة حبل مع تعزيز.',
    keyFindings: 'بؤرة مع تعزيز.',
    interpretation: 'التهاب نخاع.',
    differentialDiagnosis: 'التهاب.',
    whatToLookFor: 'قارن T2 مع الصبغة.',
    commonMistake: 'نسيان الصبغة.',
    safetyQualityNote: 'تعليمية.',
    finalImpression: 'آفة حبلية.',
    takeaway: 'الصبغة مهمة.',
    status: 'PUBLISHED',
    seo: { title: 'آفة الحبل', description: 'حالة MRI', canonical: '/ar/cases/cervicothoracic-cord-lesion-enhancement' }
  },
  {
    id: 'thoracic-intradural-extramedullary-mass',
    language: 'ar',
    slug: 'thoracic-intradural-extramedullary-mass',
    title: 'كتلة خارج الحبل داخل الأم الجافية',
    modality: 'MRI',
    region: 'العمود الفقري',
    clinicalContext: 'كتلة شوكية.',
    indication: 'تقييم كتلة.',
    technique: 'MRI Thoracic.',
    image: '/assets/images/ar/cases/mri/MRI & CT Thoracic Spine.jpg',
    imageDescription: 'كتلة خلف الحبل.',
    keyFindings: 'كتلة مع فاصل CSF.',
    interpretation: 'meningioma.',
    differentialDiagnosis: 'meningioma.',
    whatToLookFor: 'فاصل CSF.',
    commonMistake: 'الخلط.',
    safetyQualityNote: 'تعليمية.',
    finalImpression: 'كتلة خارج الحبل.',
    takeaway: 'CSF cleft.',
    status: 'PUBLISHED',
    seo: { title: 'كتلة خارج الحبل', description: 'حالة MRI', canonical: '/ar/cases/thoracic-intradural-extramedullary-mass' }
  }
]`;
c = c.substring(0, idx) + newData;
fs.writeFileSync(p, c, 'utf8');
console.log('FIXED - Added id and language');