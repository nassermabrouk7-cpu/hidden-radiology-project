import { Course } from '../../lib/types'

export const arCourses: Course[] = [
  {
    id: 'hr-course-ar-001',
    sku: 'HR-COURSE-AR-001',
    language: 'ar',
    slug: 'radiology-basics',
    title: 'أساسيات الأشعة للمبتدئين',
    description: 'دورة تأسيسية مبسطة لفهم علم الأشعة، تكوين الصورة، مبادئ الأشعة السينية، والسلامة الإشعاعية. مناسبة لطلاب وفنيي الأشعة في بداية الطريق.',
    level: 'BEGINNER',
    cover: '/assets/images/ar/courses/basics-radiology-course-cover.jpg',
    lessons: [
      { id: 'l1', slug: 'intro', title: 'مقدمة في علم الأشعة', duration: '15 دقيقة' },
      { id: 'l2', slug: 'xray-physics', title: 'فيزياء الأشعة السينية', duration: '20 دقيقة' },
      { id: 'l3', slug: 'image-formation', title: 'كيف تتكون صورة الأشعة؟', duration: '20 دقيقة' },
      { id: 'l4', slug: 'image-quality', title: 'أساسيات جودة الصورة', duration: '18 دقيقة' },
      { id: 'l5', slug: 'radiation-safety', title: 'السلامة الإشعاعية', duration: '18 دقيقة' },
      { id: 'l6', slug: 'patient-positioning', title: 'أساسيات وضع المريض', duration: '20 دقيقة' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'أساسيات الأشعة للمبتدئين | Hidden Radiology',
      description: 'دورة تأسيسية لتعلم أساسيات الأشعة للطلاب وفنيي الأشعة المبتدئين.',
      canonical: '/ar/courses/radiology-basics',
    },
  },

  {
    id: 'hr-course-ar-002',
    sku: 'HR-COURSE-AR-002',
    language: 'ar',
    slug: 'ct-mastery',
    title: 'إتقان CT',
    description: 'دورة متقدمة لفنيي الأشعة والطلاب المهتمين بالتصوير المقطعي، تبدأ من فهم الجهاز والبروتوكولات وحتى جودة الصورة ومبادئ التعامل مع مواد التباين.',
    level: 'CLINICAL',
    cover: '/assets/images/ar/courses/ct-course-cover.jpg',
    lessons: [
      { id: 'l1', slug: 'ct-basics', title: 'أساسيات التصوير المقطعي CT', duration: '20 دقيقة' },
      { id: 'l2', slug: 'ct-protocols', title: 'بروتوكولات CT', duration: '25 دقيقة' },
      { id: 'l3', slug: 'ct-parameters', title: 'عوامل وتقنيات التصوير', duration: '22 دقيقة' },
      { id: 'l4', slug: 'ct-image-quality', title: 'جودة صورة CT', duration: '20 دقيقة' },
      { id: 'l5', slug: 'contrast-media', title: 'مواد التباين في CT', duration: '22 دقيقة' },
      { id: 'l6', slug: 'ct-artifacts', title: 'الـ Artifacts في CT', duration: '20 دقيقة' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'إتقان CT | Hidden Radiology',
      description: 'دورة متقدمة في التصوير المقطعي CT تشمل البروتوكولات والتقنيات وجودة الصورة.',
      canonical: '/ar/courses/ct-mastery',
    },
  },

  {
    id: 'hr-course-ar-003',
    sku: 'HR-COURSE-AR-003',
    language: 'ar',
    slug: 'chest-xray',
    title: 'إتقان أشعة الصدر Chest X-Ray',
    description: 'دورة عملية لفهم أساسيات تصوير الصدر، وضعيات التصوير، جودة الصورة، والتعرف على أهم العلامات التي يجب ملاحظتها عند مراجعة صورة الصدر.',
    level: 'CLINICAL',
    cover: '/assets/images/ar/courses/cxr-course.jpg',
    lessons: [
      { id: 'l1', slug: 'chest-anatomy', title: 'تشريح الصدر في صورة الأشعة', duration: '20 دقيقة' },
      { id: 'l2', slug: 'pa-ap-view', title: 'PA و AP: ما الفرق؟', duration: '18 دقيقة' },
      { id: 'l3', slug: 'chest-image-quality', title: 'تقييم جودة صورة الصدر', duration: '22 دقيقة' },
      { id: 'l4', slug: 'systematic-approach', title: 'طريقة منظمة لمراجعة صورة الصدر', duration: '25 دقيقة' },
      { id: 'l5', slug: 'common-findings', title: 'علامات شائعة يجب الانتباه إليها', duration: '25 دقيقة' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'إتقان أشعة الصدر | Hidden Radiology',
      description: 'دورة تعليمية عملية في أساسيات وتصوير ومراجعة أشعة الصدر.',
      canonical: '/ar/courses/chest-xray',
    },
  },

  {
    id: 'hr-course-ar-004',
    sku: 'HR-COURSE-AR-004',
    language: 'ar',
    slug: 'mri-basics',
    title: 'أساسيات MRI',
    description: 'مقدمة منظمة إلى الرنين المغناطيسي MRI، تشمل المبادئ الأساسية، السلامة، التسلسلات، وجودة الصورة.',
    level: 'BEGINNER',
    cover: '/assets/images/ar/covers/ana-fahim-mri-ar.png',
    lessons: [
      { id: 'l1', slug: 'mri-introduction', title: 'مقدمة في MRI', duration: '18 دقيقة' },
      { id: 'l2', slug: 'mri-safety', title: 'السلامة في MRI', duration: '25 دقيقة' },
      { id: 'l3', slug: 'mri-sequences', title: 'فهم أهم تسلسلات MRI', duration: '25 دقيقة' },
      { id: 'l4', slug: 'mri-image-quality', title: 'جودة الصورة في MRI', duration: '20 دقيقة' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'أساسيات MRI | Hidden Radiology',
      description: 'دورة تأسيسية لفهم مبادئ الرنين المغناطيسي MRI والسلامة وجودة الصورة.',
      canonical: '/ar/courses/mri-basics',
    },
  },

  {
    id: 'hr-course-ar-005',
    sku: 'HR-COURSE-AR-005',
    language: 'ar',
    slug: 'quality-safety',
    title: 'الجودة والسلامة في قسم الأشعة',
    description: 'دورة متخصصة لفهم معايير الجودة والسلامة في أقسام الأشعة، وضمان سلامة المرضى والعاملين وتحسين جودة الصورة.',
    level: 'PROFESSIONAL',
    cover: '/assets/images/ar/courses/quality-safety-course-cover.jpg',
    lessons: [
      { id: 'l1', slug: 'quality-standards', title: 'معايير الجودة في قسم الأشعة', duration: '20 دقيقة' },
      { id: 'l2', slug: 'radiation-safety', title: 'السلامة الإشعاعية', duration: '20 دقيقة' },
      { id: 'l3', slug: 'compliance', title: 'الامتثال والجودة', duration: '22 دقيقة' },
      { id: 'l4', slug: 'quality-training', title: 'التدريب على الجودة والسلامة', duration: '20 دقيقة' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'الجودة والسلامة في قسم الأشعة | Hidden Radiology',
      description: 'دليل عملي لفهم معايير الجودة والسلامة، وتحسين الأداء وجودة الصور في أقسام الأشعة.',
      canonical: '/ar/courses/quality-safety',
    },
  },

  {
    id: 'hr-course-ar-006',
    sku: 'HR-COURSE-AR-006',
    language: 'ar',
    slug: 'c-arm',
    title: 'التصوير باستخدام C-Arm',
    description: 'دورة عملية لفهم جهاز C-Arm، مكوناته، مبادئ التصوير الفلوري، الوضعيات والتطبيقات الجراحية، السلامة الإشعاعية، واستكشاف الأخطاء الشائعة.',
    level: 'CLINICAL',
    cover: '/assets/images/ar/courses/AR_c-arm-course-cover.jpg',

    lessons: [
      { id: 'l1', slug: 'c-arm-introduction', title: 'مقدمة في جهاز C-Arm', duration: '18 دقيقة' },
      { id: 'l2', slug: 'c-arm-components', title: 'مكونات جهاز C-Arm', duration: '20 دقيقة' },
      { id: 'l3', slug: 'c-arm-fluoroscopy-principles', title: 'مبادئ التصوير الفلوري', duration: '22 دقيقة' },
      { id: 'l4', slug: 'c-arm-positioning-surgical-applications', title: 'الوضعيات والتطبيقات الجراحية', duration: '25 دقيقة' },
      { id: 'l5', slug: 'c-arm-radiation-safety', title: 'السلامة الإشعاعية في C-Arm', duration: '22 دقيقة' },
      { id: 'l6', slug: 'c-arm-clinical-applications-troubleshooting', title: 'التطبيقات العملية واستكشاف الأخطاء', duration: '25 دقيقة' },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'التصوير باستخدام C-Arm | Hidden Radiology',
      description: 'دورة عملية لفهم جهاز C-Arm والتصوير الفلوري والتطبيقات الجراحية والسلامة الإشعاعية.',
      canonical: '/ar/courses/c-arm',
    },
  },

  {
    id: 'hr-course-ar-007',
    sku: 'HR-COURSE-AR-007',
    language: 'ar',
    slug: 'mammography',
    title: 'أساسيات الماموجرافي',
    description: 'دورة تعليمية منظمة لفهم أساسيات تصوير الثدي بالماموجرافي، مكونات الجهاز، الوضعيات والإسقاطات، جودة الصورة، السلامة الإشعاعية، ومراجعة الصور.',
    level: 'CLINICAL',
    cover: '/assets/images/ar/courses/AR_mammography-course-cover.jpg',

    lessons: [
      { id: 'l1', slug: 'mammography-introduction', title: 'مقدمة في تصوير الثدي', duration: '18 دقيقة' },
      { id: 'l2', slug: 'mammography-equipment', title: 'جهاز الماموجرافي ومكوناته', duration: '20 دقيقة' },
      { id: 'l3', slug: 'mammography-positioning-views', title: 'وضعية الثدي والإسقاطات', duration: '25 دقيقة' },
      { id: 'l4', slug: 'mammography-image-quality-compression', title: 'جودة الصورة والضغط', duration: '22 دقيقة' },
      { id: 'l5', slug: 'mammography-radiation-safety', title: 'السلامة الإشعاعية في الماموجرافي', duration: '20 دقيقة' },
      { id: 'l6', slug: 'mammography-image-review', title: 'قراءة ومراجعة صور الماموجرافي', duration: '25 دقيقة' },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'أساسيات الماموجرافي | Hidden Radiology',
      description: 'دورة تعليمية في أساسيات تصوير الثدي بالماموجرافي والوضعيات وجودة الصورة والسلامة الإشعاعية.',
      canonical: '/ar/courses/mammography',
    },
  },
]


