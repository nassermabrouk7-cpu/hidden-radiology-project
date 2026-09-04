import type { Course } from '@/lib/types'

export const enCourses: Course[] = [
  {
    id: 'hr-course-en-001',
    sku: 'HR-COURSE-EN-001',
    language: 'en',
    slug: 'radiology-basics',
    title: 'Radiology Basics for Beginners',
    description:
      'A comprehensive foundational course covering X-ray physics, image formation, image quality, radiation safety, and patient positioning. Suitable for students and new radiographers.',
    level: 'BEGINNER',
    cover: '/images/en/courses/EN_radiology-basics-course-cover.jpg',
    

    lessons: [
      {
        id: 'l1',
        slug: 'intro',
        title: 'Introduction to Radiology',
        duration: '15 min',
      },
      {
        id: 'l2',
        slug: 'xray-physics',
        title: 'X-Ray Physics',
        duration: '20 min',
      },
      {
        id: 'l3',
        slug: 'image-formation',
        title: 'Image Formation',
        duration: '20 min',
      },
      {
        id: 'l4',
        slug: 'image-quality',
        title: 'Image Quality',
        duration: '18 min',
      },
      {
        id: 'l5',
        slug: 'radiation-safety',
        title: 'Radiation Safety',
        duration: '18 min',
      },
      {
        id: 'l6',
        slug: 'patient-positioning',
        title: 'Patient Positioning',
        duration: '20 min',
      },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'Radiology Basics for Beginners | Hidden Radiology',
      description:
        'A comprehensive foundational radiology course for students and new radiographers.',
      canonical: '/en/courses/radiology-basics',
    },
  },

  {
    id: 'hr-course-en-002',
    sku: 'HR-COURSE-EN-002',
    language: 'en',
    slug: 'ct-mastery',
    title: 'CT Mastery',
    description:
      'An advanced course covering CT fundamentals, protocols, parameters, image quality, contrast media, and CT artifacts.',
    level: 'CLINICAL',
    cover: '/images/en/courses/EN_ct-mastery-course-cover.jpg',
    

    lessons: [
      {
        id: 'l1',
        slug: 'ct-basics',
        title: 'CT Basics',
        duration: '20 min',
      },
      {
        id: 'l2',
        slug: 'ct-protocols',
        title: 'CT Protocols',
        duration: '25 min',
      },
      {
        id: 'l3',
        slug: 'ct-parameters',
        title: 'CT Parameters',
        duration: '22 min',
      },
      {
        id: 'l4',
        slug: 'ct-image-quality',
        title: 'CT Image Quality',
        duration: '20 min',
      },
      {
        id: 'l5',
        slug: 'contrast-media',
        title: 'Contrast Media',
        duration: '22 min',
      },
      {
        id: 'l6',
        slug: 'ct-artifacts',
        title: 'CT Artifacts',
        duration: '20 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'CT Mastery | Hidden Radiology',
      description:
        'Advanced CT course covering protocols, techniques, image quality, contrast media, and artifacts.',
      canonical: '/en/courses/ct-mastery',
    },
  },

  {
    id: 'hr-course-en-003',
    sku: 'HR-COURSE-EN-003',
    language: 'en',
    slug: 'quality-safety',
    title: 'Quality & Safety in Radiology',
    description:
      'A professional course covering quality standards, radiation safety, compliance, and quality and safety training in radiology departments.',
    level: 'PROFESSIONAL',
    cover: '/images/en/courses/EN_quality-safety-course-cover.jpg',
    

    lessons: [
      {
        id: 'l1',
        slug: 'quality-standards',
        title: 'Quality Standards',
        duration: '20 min',
      },
      {
        id: 'l2',
        slug: 'radiation-safety',
        title: 'Radiation Safety',
        duration: '20 min',
      },
      {
        id: 'l3',
        slug: 'compliance',
        title: 'Compliance',
        duration: '22 min',
      },
      {
        id: 'l4',
        slug: 'quality-training',
        title: 'Quality & Safety Training',
        duration: '20 min',
      },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'Quality & Safety in Radiology | Hidden Radiology',
      description:
        'A professional guide to quality standards, radiation safety, compliance, and training in radiology departments.',
      canonical: '/en/courses/quality-safety',
    },
  },

  {
    id: 'hr-course-en-004',
    sku: 'HR-COURSE-EN-004',
    language: 'en',
    slug: 'chest-xray',
    title: 'Chest X-Ray Mastery',
    description:
      'A practical course covering chest anatomy, positioning, image quality, and systematic chest X-ray review.',
    level: 'CLINICAL',
    cover: '/images/en/courses/EN_chest-xray-course-cover.jpg',
    

    lessons: [
      {
        id: 'l1',
        slug: 'chest-anatomy',
        title: 'Chest Anatomy',
        duration: '20 min',
      },
      {
        id: 'l2',
        slug: 'pa-ap',
        title: 'PA vs AP Chest X-Ray',
        duration: '18 min',
      },
      {
        id: 'l3',
        slug: 'chest-image-quality',
        title: 'Chest Image Quality',
        duration: '22 min',
      },
      {
        id: 'l4',
        slug: 'systematic-review',
        title: 'Systematic Chest X-Ray Review',
        duration: '25 min',
      },
      {
        id: 'l5',
        slug: 'common-signs',
        title: 'Common Chest X-Ray Signs',
        duration: '22 min',
      },
      {
        id: 'l6',
        slug: 'clinical-application',
        title: 'Clinical Application',
        duration: '20 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'Chest X-Ray Mastery | Hidden Radiology',
      description:
        'A practical chest X-ray course covering anatomy, positioning, image quality, systematic review, and common radiographic signs.',
      canonical: '/en/courses/chest-xray',
    },
  },

  {
    id: 'hr-course-en-005',
    sku: 'HR-COURSE-EN-005',
    language: 'en',
    slug: 'mri-basics',
    title: 'MRI Basics',
    description:
      'A foundational MRI course covering how MRI works, MRI safety, sequences, and image quality.',
    level: 'BEGINNER',
    cover: '/images/en/courses/EN_mri-basics-course-cover.jpg',
    

    lessons: [
      {
        id: 'l1',
        slug: 'mri-introduction',
        title: 'Introduction to MRI',
        duration: '18 min',
      },
      {
        id: 'l2',
        slug: 'mri-safety',
        title: 'MRI Safety',
        duration: '25 min',
      },
      {
        id: 'l3',
        slug: 'mri-sequences',
        title: 'MRI Sequences',
        duration: '25 min',
      },
      {
        id: 'l4',
        slug: 'mri-image-quality',
        title: 'MRI Image Quality',
        duration: '20 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'MRI Basics | Hidden Radiology',
      description:
        'A foundational course covering MRI principles, safety, sequences, and image quality.',
      canonical: '/en/courses/mri-basics',
    },
  },

  {
    id: 'hr-course-en-006',
    sku: 'HR-COURSE-EN-006',
    language: 'en',
    slug: 'c-arm-imaging',
    title: 'C-Arm Imaging',
    description:
      'A practical course covering C-Arm fundamentals, system components, fluoroscopy principles, positioning, surgical applications, radiation safety, image quality, and troubleshooting.',
    level: 'CLINICAL',
    cover: '/images/en/courses/EN_c-arm-course-cover.jpg',
    

    lessons: [
      {
        id: 'l1',
        slug: 'c-arm-introduction',
        title: 'Introduction to C-Arm',
        duration: '18 min',
      },
      {
        id: 'l2',
        slug: 'c-arm-components',
        title: 'C-Arm Components',
        duration: '20 min',
      },
      {
        id: 'l3',
        slug: 'fluoroscopy-principles',
        title: 'Fluoroscopy Principles',
        duration: '22 min',
      },
      {
        id: 'l4',
        slug: 'c-arm-positioning-surgical-applications',
        title: 'Positioning & Surgical Applications',
        duration: '25 min',
      },
      {
        id: 'l5',
        slug: 'c-arm-radiation-safety',
        title: 'Radiation Safety in C-Arm',
        duration: '20 min',
      },
      {
        id: 'l6',
        slug: 'c-arm-image-quality-troubleshooting',
        title: 'Image Quality & Troubleshooting',
        duration: '22 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'C-Arm Imaging | Hidden Radiology',
      description:
        'A practical C-Arm imaging course covering fluoroscopy, positioning, surgical applications, radiation safety, image quality, and troubleshooting.',
      canonical: '/en/courses/c-arm-imaging',
    },
  },

  {
    id: 'hr-course-en-007',
    sku: 'HR-COURSE-EN-007',
    language: 'en',
    slug: 'mammography',
    title: 'Mammography',
    description:
      'A practical course covering mammography fundamentals, equipment, breast positioning, standard views, image quality, compression, radiation safety, and basic mammographic findings.',
    level: 'CLINICAL',
    cover: '/images/en/courses/EN_mammography-course-cover.jpg',
    

    lessons: [
      {
        id: 'l1',
        slug: 'mammography-introduction',
        title: 'Introduction to Mammography',
        duration: '18 min',
      },
      {
        id: 'l2',
        slug: 'mammography-equipment',
        title: 'Mammography Equipment',
        duration: '20 min',
      },
      {
        id: 'l3',
        slug: 'mammography-positioning-views',
        title: 'Breast Positioning & Views',
        duration: '25 min',
      },
      {
        id: 'l4',
        slug: 'mammography-image-quality-compression',
        title: 'Image Quality & Compression',
        duration: '22 min',
      },
      {
        id: 'l5',
        slug: 'mammography-radiation-safety',
        title: 'Radiation Safety',
        duration: '20 min',
      },
      {
        id: 'l6',
        slug: 'mammography-basic-findings',
        title: 'Basic Mammographic Findings',
        duration: '25 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'Mammography | Hidden Radiology',
      description:
        'A practical mammography course covering equipment, positioning, image quality, compression, radiation safety, and basic mammographic findings.',
      canonical: '/en/courses/mammography',
    },
  },
]
