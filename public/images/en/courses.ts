import type { Course } from '@/lib/types'

export const enCourses: Course[] = [
  {
    id: 'hr-course-en-001',
    sku: 'HR-COURSE-EN-001',
    language: 'en',
    slug: 'radiology-basics',
    title: 'Radiology Fundamentals for Beginners',
    description:
      'A comprehensive foundational course covering X-ray physics principles, image formation mechanisms, image quality optimization, radiation protection protocols, and patient positioning techniques. Designed for radiography students and entry-level radiologic technologists.',
    level: 'BEGINNER',
    cover: '/assets/images/en/courses/EN_radiology-basics-course-cover.jpg',


    lessons: [
      {
        id: 'l1',
        slug: 'intro',
        title: 'Introduction to Diagnostic Radiology',
        duration: '15 min',
      },
      {
        id: 'l2',
        slug: 'xray-physics',
        title: 'X-Ray Physics Principles',
        duration: '20 min',
      },
      {
        id: 'l3',
        slug: 'image-formation',
        title: 'Radiographic Image Formation',
        duration: '20 min',
      },
      {
        id: 'l4',
        slug: 'image-quality',
        title: 'Image Quality Fundamentals',
        duration: '18 min',
      },
      {
        id: 'l5',
        slug: 'radiation-safety',
        title: 'Radiation Protection & Safety',
        duration: '18 min',
      },
      {
        id: 'l6',
        slug: 'patient-positioning',
        title: 'Patient Positioning Basics',
        duration: '20 min',
      },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'Radiology Fundamentals Course — X-Ray Physics & Patient Positioning | Hidden Radiology',
      description:
        'Comprehensive foundational radiology course covering X-ray physics, image formation, radiation safety, and patient positioning for students and new radiographers.',
      canonical: '/en/courses/radiology-basics',
    },
  },

  {
    id: 'hr-course-en-002',
    sku: 'HR-COURSE-EN-002',
    language: 'en',
    slug: 'ct-mastery',
    title: 'Computed Tomography (CT) Mastery',
    description:
      'An advanced clinical course covering CT scanner fundamentals, imaging protocols, acquisition parameters, image quality optimization, iodinated contrast media administration, and CT artifact recognition and reduction. Designed for radiologic technologists seeking CT specialization.',
    level: 'CLINICAL',
    cover: '/assets/images/en/courses/EN_ct-mastery-course-cover.jpg',


    lessons: [
      {
        id: 'l1',
        slug: 'ct-basics',
        title: 'CT Scanner Fundamentals',
        duration: '20 min',
      },
      {
        id: 'l2',
        slug: 'ct-protocols',
        title: 'CT Imaging Protocols',
        duration: '25 min',
      },
      {
        id: 'l3',
        slug: 'ct-parameters',
        title: 'Acquisition Parameters & Techniques',
        duration: '22 min',
      },
      {
        id: 'l4',
        slug: 'ct-image-quality',
        title: 'CT Image Quality Optimization',
        duration: '20 min',
      },
      {
        id: 'l5',
        slug: 'contrast-media',
        title: 'Iodinated Contrast Media',
        duration: '22 min',
      },
      {
        id: 'l6',
        slug: 'ct-artifacts',
        title: 'CT Artifacts & Reduction',
        duration: '20 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'CT Mastery Course — Computed Tomography Protocols & Techniques | Hidden Radiology',
      description:
        'Advanced CT course covering imaging protocols, acquisition parameters, contrast media, image quality, and artifact reduction for radiologic technologists.',
      canonical: '/en/courses/ct-mastery',
    },
  },

  {
    id: 'hr-course-en-003',
    sku: 'HR-COURSE-EN-003',
    language: 'en',
    slug: 'quality-safety',
    title: 'Quality Assurance & Radiation Safety in Radiology',
    description:
      'A professional development course covering quality management systems, radiation protection programs, regulatory compliance, and continuous quality improvement in diagnostic imaging departments. Essential for QA managers, lead technologists, and radiology administrators.',
    level: 'PROFESSIONAL',
    cover: '/assets/images/en/courses/EN_quality-safety-course-cover.jpg',


    lessons: [
      {
        id: 'l1',
        slug: 'quality-standards',
        title: 'Quality Management Standards',
        duration: '20 min',
      },
      {
        id: 'l2',
        slug: 'radiation-safety',
        title: 'Radiation Protection Programs',
        duration: '20 min',
      },
      {
        id: 'l3',
        slug: 'compliance',
        title: 'Regulatory Compliance & Documentation',
        duration: '22 min',
      },
      {
        id: 'l4',
        slug: 'quality-training',
        title: 'Quality & Safety Training Implementation',
        duration: '20 min',
      },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'Quality Assurance & Radiation Safety Course — Radiology Department Management | Hidden Radiology',
      description:
        'Professional course covering quality management systems, radiation protection programs, regulatory compliance, and QA training for radiology departments.',
      canonical: '/en/courses/quality-safety',
    },
  },

  {
    id: 'hr-course-en-004',
    sku: 'HR-COURSE-EN-004',
    language: 'en',
    slug: 'chest-xray',
    title: 'Chest Radiography Mastery',
    description:
      'A comprehensive clinical course covering thoracic anatomy radiographic appearance, PA vs AP projection techniques, chest radiograph quality assessment, systematic image interpretation, common pathological findings, and clinical correlation. Designed for radiographers seeking chest X-ray specialization.',
    level: 'CLINICAL',
    cover: '/assets/images/en/courses/EN_chest-xray-course-cover.jpg',


    lessons: [
      {
        id: 'l1',
        slug: 'chest-anatomy',
        title: 'Thoracic Anatomy on Chest Radiography',
        duration: '20 min',
      },
      {
        id: 'l2',
        slug: 'pa-ap',
        title: 'PA vs AP Projection Techniques',
        duration: '18 min',
      },
      {
        id: 'l3',
        slug: 'chest-image-quality',
        title: 'Chest Radiograph Quality Assessment',
        duration: '22 min',
      },
      {
        id: 'l4',
        slug: 'systematic-review',
        title: 'Systematic Chest X-Ray Interpretation',
        duration: '25 min',
      },
      {
        id: 'l5',
        slug: 'common-signs',
        title: 'Common Radiographic Signs & Pathology',
        duration: '22 min',
      },
      {
        id: 'l6',
        slug: 'clinical-application',
        title: 'Clinical Correlation & Case Studies',
        duration: '20 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'Chest Radiography Mastery Course — Thoracic Anatomy & Systematic Interpretation | Hidden Radiology',
      description:
        'Comprehensive chest X-ray course covering thoracic anatomy, projection techniques, quality assessment, systematic interpretation, and common pathological findings.',
      canonical: '/en/courses/chest-xray',
    },
  },

  {
    id: 'hr-course-en-005',
    sku: 'HR-COURSE-EN-005',
    language: 'en',
    slug: 'mri-basics',
    title: 'Magnetic Resonance Imaging (MRI) Fundamentals',
    description:
      'A foundational course covering MRI physics principles, magnet safety protocols, pulse sequence fundamentals, and MRI image quality optimization. Designed for radiography students and technologists new to MRI imaging.',
    level: 'BEGINNER',
    cover: '/assets/images/en/courses/EN_mri-basics-course-cover.jpg',


    lessons: [
      {
        id: 'l1',
        slug: 'mri-introduction',
        title: 'Introduction to Magnetic Resonance Imaging',
        duration: '18 min',
      },
      {
        id: 'l2',
        slug: 'mri-safety',
        title: 'MRI Safety & Screening Protocols',
        duration: '25 min',
      },
      {
        id: 'l3',
        slug: 'mri-sequences',
        title: 'MRI Pulse Sequence Fundamentals',
        duration: '25 min',
      },
      {
        id: 'l4',
        slug: 'mri-image-quality',
        title: 'MRI Image Quality Parameters',
        duration: '20 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'MRI Fundamentals Course — Magnetic Resonance Physics & Safety | Hidden Radiology',
      description:
        'Foundational MRI course covering physics principles, safety protocols, pulse sequences, and image quality for radiography students and new technologists.',
      canonical: '/en/courses/mri-basics',
    },
  },

  {
    id: 'hr-course-en-006',
    sku: 'HR-COURSE-EN-006',
    language: 'en',
    slug: 'c-arm-imaging',
    title: 'Mobile C-Arm Fluoroscopy Imaging',
    description:
      'A practical clinical course covering mobile C-arm system fundamentals, fluoroscopic imaging principles, surgical positioning techniques, intraoperative applications, radiation dose management, image quality optimization, and common troubleshooting scenarios. Essential for interventional radiology and operating room technologists.',
    level: 'CLINICAL',
    cover: '/assets/images/en/courses/EN_c-arm-course-cover.jpg',


    lessons: [
      {
        id: 'l1',
        slug: 'c-arm-introduction',
        title: 'Mobile C-Arm System Introduction',
        duration: '18 min',
      },
      {
        id: 'l2',
        slug: 'c-arm-components',
        title: 'C-Arm System Components & Operation',
        duration: '20 min',
      },
      {
        id: 'l3',
        slug: 'fluoroscopy-principles',
        title: 'Fluoroscopic Imaging Principles',
        duration: '22 min',
      },
      {
        id: 'l4',
        slug: 'c-arm-positioning-surgical-applications',
        title: 'Surgical Positioning & Intraoperative Applications',
        duration: '25 min',
      },
      {
        id: 'l5',
        slug: 'c-arm-radiation-safety',
        title: 'Radiation Dose Management in Fluoroscopy',
        duration: '20 min',
      },
      {
        id: 'l6',
        slug: 'c-arm-image-quality-troubleshooting',
        title: 'Image Quality Optimization & Troubleshooting',
        duration: '22 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'Mobile C-Arm Fluoroscopy Course — Surgical Imaging & Radiation Safety | Hidden Radiology',
      description:
        'Practical C-arm fluoroscopy course covering system operation, surgical positioning, intraoperative applications, radiation safety, and troubleshooting for interventional technologists.',
      canonical: '/en/courses/c-arm-imaging',
    },
  },

  {
    id: 'hr-course-en-007',
    sku: 'HR-COURSE-EN-007',
    language: 'en',
    slug: 'mammography',
    title: 'Diagnostic Mammography Fundamentals',
    description:
      'A comprehensive clinical course covering mammographic imaging principles, digital mammography equipment, breast positioning techniques, standard screening projections, image quality assessment, compression protocols, radiation dose optimization, and basic mammographic pathology recognition. Designed for mammography technologists and breast imaging specialists.',
    level: 'CLINICAL',
    cover: '/assets/images/en/courses/EN_mammography-course-cover.jpg',


    lessons: [
      {
        id: 'l1',
        slug: 'mammography-introduction',
        title: 'Introduction to Diagnostic Mammography',
        duration: '18 min',
      },
      {
        id: 'l2',
        slug: 'mammography-equipment',
        title: 'Digital Mammography Equipment & Technology',
        duration: '20 min',
      },
      {
        id: 'l3',
        slug: 'mammography-positioning-views',
        title: 'Breast Positioning & Standard Projections',
        duration: '25 min',
      },
      {
        id: 'l4',
        slug: 'mammography-image-quality-compression',
        title: 'Image Quality & Compression Protocols',
        duration: '22 min',
      },
      {
        id: 'l5',
        slug: 'mammography-radiation-safety',
        title: 'Radiation Dose Optimization in Mammography',
        duration: '20 min',
      },
      {
        id: 'l6',
        slug: 'mammography-basic-findings',
        title: 'Basic Mammographic Pathology Recognition',
        duration: '25 min',
      },
    ],

    status: 'COMING_SOON',

    seo: {
      title: 'Diagnostic Mammography Course — Breast Imaging & Positioning Techniques | Hidden Radiology',
      description:
        'Comprehensive mammography course covering digital equipment, breast positioning, standard projections, image quality, compression protocols, and basic pathology recognition.',
      canonical: '/en/courses/mammography',
    },
  },
]
