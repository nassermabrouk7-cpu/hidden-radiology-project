import { Course } from '@/lib/types'

export const arCourses: Course[] = [
  {
    id: 'hr-course-ar-001',
    sku: 'HR-COURSE-AR-001',
    language: 'ar',
    slug: 'radiology-basics',
    title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„Ø£Ø´Ø¹Ø© Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ†',
    description: 'Ø¯ÙˆØ±Ø© ØªØ£Ø³ÙŠØ³ÙŠØ© Ù…Ø¨Ø³Ø·Ø© Ù„ÙÙ‡Ù… Ø¹Ù„Ù… Ø§Ù„Ø£Ø´Ø¹Ø©ØŒ ØªÙƒÙˆÙŠÙ† Ø§Ù„ØµÙˆØ±Ø©ØŒ Ù…Ø¨Ø§Ø¯Ø¦ Ø§Ù„Ø£Ø´Ø¹Ø© Ø§Ù„Ø³ÙŠÙ†ÙŠØ©ØŒ ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ©. Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ø·Ù„Ø§Ø¨ ÙˆÙÙ†ÙŠÙŠ Ø§Ù„Ø£Ø´Ø¹Ø© ÙÙŠ Ø¨Ø¯Ø§ÙŠØ© Ø§Ù„Ø·Ø±ÙŠÙ‚.',
    level: 'BEGINNER',
    cover: '/assets/images/ar/courses/basics-radiology-course-cover.jpg',
    lessons: [
      { id: 'l1', slug: 'intro', title: 'Ù…Ù‚Ø¯Ù…Ø© ÙÙŠ Ø¹Ù„Ù… Ø§Ù„Ø£Ø´Ø¹Ø©', duration: '15 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l2', slug: 'xray-physics', title: 'ÙÙŠØ²ÙŠØ§Ø¡ Ø§Ù„Ø£Ø´Ø¹Ø© Ø§Ù„Ø³ÙŠÙ†ÙŠØ©', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l3', slug: 'image-formation', title: 'ÙƒÙŠÙ ØªØªÙƒÙˆÙ† ØµÙˆØ±Ø© Ø§Ù„Ø£Ø´Ø¹Ø©ØŸ', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l4', slug: 'image-quality', title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø©', duration: '18 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l5', slug: 'radiation-safety', title: 'Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ©', duration: '18 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l6', slug: 'patient-positioning', title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª ÙˆØ¶Ø¹ Ø§Ù„Ù…Ø±ÙŠØ¶', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„Ø£Ø´Ø¹Ø© Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ† | Hidden Radiology',
      description: 'Ø¯ÙˆØ±Ø© ØªØ£Ø³ÙŠØ³ÙŠØ© Ù„ØªØ¹Ù„Ù… Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„Ø£Ø´Ø¹Ø© Ù„Ù„Ø·Ù„Ø§Ø¨ ÙˆÙÙ†ÙŠÙŠ Ø§Ù„Ø£Ø´Ø¹Ø© Ø§Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ†.',
      canonical: '/ar/courses/radiology-basics',
    },
  },

  {
    id: 'hr-course-ar-002',
    sku: 'HR-COURSE-AR-002',
    language: 'ar',
    slug: 'ct-mastery',
    title: 'Ø¥ØªÙ‚Ø§Ù† CT',
    description: 'Ø¯ÙˆØ±Ø© Ù…ØªÙ‚Ø¯Ù…Ø© Ù„ÙÙ†ÙŠÙŠ Ø§Ù„Ø£Ø´Ø¹Ø© ÙˆØ§Ù„Ø·Ù„Ø§Ø¨ Ø§Ù„Ù…Ù‡ØªÙ…ÙŠÙ† Ø¨Ø§Ù„ØªØµÙˆÙŠØ± Ø§Ù„Ù…Ù‚Ø·Ø¹ÙŠØŒ ØªØ¨Ø¯Ø£ Ù…Ù† ÙÙ‡Ù… Ø§Ù„Ø¬Ù‡Ø§Ø² ÙˆØ§Ù„Ø¨Ø±ÙˆØªÙˆÙƒÙˆÙ„Ø§Øª ÙˆØ­ØªÙ‰ Ø¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø© ÙˆÙ…Ø¨Ø§Ø¯Ø¦ Ø§Ù„ØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ù…ÙˆØ§Ø¯ Ø§Ù„ØªØ¨Ø§ÙŠÙ†.',
    level: 'CLINICAL',
    cover: '/assets/images/ar/courses/ct-course-cover.jpg',
    lessons: [
      { id: 'l1', slug: 'ct-basics', title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„ØªØµÙˆÙŠØ± Ø§Ù„Ù…Ù‚Ø·Ø¹ÙŠ CT', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l2', slug: 'ct-protocols', title: 'Ø¨Ø±ÙˆØªÙˆÙƒÙˆÙ„Ø§Øª CT', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l3', slug: 'ct-parameters', title: 'Ø¹ÙˆØ§Ù…Ù„ ÙˆØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„ØªØµÙˆÙŠØ±', duration: '22 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l4', slug: 'ct-image-quality', title: 'Ø¬ÙˆØ¯Ø© ØµÙˆØ±Ø© CT', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l5', slug: 'contrast-media', title: 'Ù…ÙˆØ§Ø¯ Ø§Ù„ØªØ¨Ø§ÙŠÙ† ÙÙŠ CT', duration: '22 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l6', slug: 'ct-artifacts', title: 'Ø§Ù„Ù€ Artifacts ÙÙŠ CT', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'Ø¥ØªÙ‚Ø§Ù† CT | Hidden Radiology',
      description: 'Ø¯ÙˆØ±Ø© Ù…ØªÙ‚Ø¯Ù…Ø© ÙÙŠ Ø§Ù„ØªØµÙˆÙŠØ± Ø§Ù„Ù…Ù‚Ø·Ø¹ÙŠ CT ØªØ´Ù…Ù„ Ø§Ù„Ø¨Ø±ÙˆØªÙˆÙƒÙˆÙ„Ø§Øª ÙˆØ§Ù„ØªÙ‚Ù†ÙŠØ§Øª ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø©.',
      canonical: '/ar/courses/ct-mastery',
    },
  },

  {
    id: 'hr-course-ar-003',
    sku: 'HR-COURSE-AR-003',
    language: 'ar',
    slug: 'chest-xray',
    title: 'Ø¥ØªÙ‚Ø§Ù† Ø£Ø´Ø¹Ø© Ø§Ù„ØµØ¯Ø± Chest X-Ray',
    description: 'Ø¯ÙˆØ±Ø© Ø¹Ù…Ù„ÙŠØ© Ù„ÙÙ‡Ù… Ø£Ø³Ø§Ø³ÙŠØ§Øª ØªØµÙˆÙŠØ± Ø§Ù„ØµØ¯Ø±ØŒ ÙˆØ¶Ø¹ÙŠØ§Øª Ø§Ù„ØªØµÙˆÙŠØ±ØŒ Ø¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø©ØŒ ÙˆØ§Ù„ØªØ¹Ø±Ù Ø¹Ù„Ù‰ Ø£Ù‡Ù… Ø§Ù„Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ù„ØªÙŠ ÙŠØ¬Ø¨ Ù…Ù„Ø§Ø­Ø¸ØªÙ‡Ø§ Ø¹Ù†Ø¯ Ù…Ø±Ø§Ø¬Ø¹Ø© ØµÙˆØ±Ø© Ø§Ù„ØµØ¯Ø±.',
    level: 'CLINICAL',
    cover: '/assets/images/ar/courses/cxr-course.jpg',
    lessons: [
      { id: 'l1', slug: 'chest-anatomy', title: 'ØªØ´Ø±ÙŠØ­ Ø§Ù„ØµØ¯Ø± ÙÙŠ ØµÙˆØ±Ø© Ø§Ù„Ø£Ø´Ø¹Ø©', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l2', slug: 'pa-ap-view', title: 'PA Ùˆ AP: Ù…Ø§ Ø§Ù„ÙØ±Ù‚ØŸ', duration: '18 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l3', slug: 'chest-image-quality', title: 'ØªÙ‚ÙŠÙŠÙ… Ø¬ÙˆØ¯Ø© ØµÙˆØ±Ø© Ø§Ù„ØµØ¯Ø±', duration: '22 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l4', slug: 'systematic-approach', title: 'Ø·Ø±ÙŠÙ‚Ø© Ù…Ù†Ø¸Ù…Ø© Ù„Ù…Ø±Ø§Ø¬Ø¹Ø© ØµÙˆØ±Ø© Ø§Ù„ØµØ¯Ø±', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l5', slug: 'common-findings', title: 'Ø¹Ù„Ø§Ù…Ø§Øª Ø´Ø§Ø¦Ø¹Ø© ÙŠØ¬Ø¨ Ø§Ù„Ø§Ù†ØªØ¨Ø§Ù‡ Ø¥Ù„ÙŠÙ‡Ø§', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'Ø¥ØªÙ‚Ø§Ù† Ø£Ø´Ø¹Ø© Ø§Ù„ØµØ¯Ø± | Hidden Radiology',
      description: 'Ø¯ÙˆØ±Ø© ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ø¹Ù…Ù„ÙŠØ© ÙÙŠ Ø£Ø³Ø§Ø³ÙŠØ§Øª ÙˆØªØµÙˆÙŠØ± ÙˆÙ…Ø±Ø§Ø¬Ø¹Ø© Ø£Ø´Ø¹Ø© Ø§Ù„ØµØ¯Ø±.',
      canonical: '/ar/courses/chest-xray',
    },
  },

  {
    id: 'hr-course-ar-004',
    sku: 'HR-COURSE-AR-004',
    language: 'ar',
    slug: 'mri-basics',
    title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª MRI',
    description: 'Ù…Ù‚Ø¯Ù…Ø© Ù…Ù†Ø¸Ù…Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø±Ù†ÙŠÙ† Ø§Ù„Ù…ØºÙ†Ø§Ø·ÙŠØ³ÙŠ MRIØŒ ØªØ´Ù…Ù„ Ø§Ù„Ù…Ø¨Ø§Ø¯Ø¦ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©ØŒ Ø§Ù„Ø³Ù„Ø§Ù…Ø©ØŒ Ø§Ù„ØªØ³Ù„Ø³Ù„Ø§ØªØŒ ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø©.',
    level: 'BEGINNER',
    cover: '/assets/images/ar/covers/ana-fahim-mri-ar.png',
    lessons: [
      { id: 'l1', slug: 'mri-introduction', title: 'Ù…Ù‚Ø¯Ù…Ø© ÙÙŠ MRI', duration: '18 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l2', slug: 'mri-safety', title: 'Ø§Ù„Ø³Ù„Ø§Ù…Ø© ÙÙŠ MRI', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l3', slug: 'mri-sequences', title: 'ÙÙ‡Ù… Ø£Ù‡Ù… ØªØ³Ù„Ø³Ù„Ø§Øª MRI', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l4', slug: 'mri-image-quality', title: 'Ø¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø© ÙÙŠ MRI', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª MRI | Hidden Radiology',
      description: 'Ø¯ÙˆØ±Ø© ØªØ£Ø³ÙŠØ³ÙŠØ© Ù„ÙÙ‡Ù… Ù…Ø¨Ø§Ø¯Ø¦ Ø§Ù„Ø±Ù†ÙŠÙ† Ø§Ù„Ù…ØºÙ†Ø§Ø·ÙŠØ³ÙŠ MRI ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø©.',
      canonical: '/ar/courses/mri-basics',
    },
  },

  {
    id: 'hr-course-ar-005',
    sku: 'HR-COURSE-AR-005',
    language: 'ar',
    slug: 'quality-safety',
    title: 'Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© ÙÙŠ Ù‚Ø³Ù… Ø§Ù„Ø£Ø´Ø¹Ø©',
    description: 'Ø¯ÙˆØ±Ø© Ù…ØªØ®ØµØµØ© Ù„ÙÙ‡Ù… Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© ÙÙŠ Ø£Ù‚Ø³Ø§Ù… Ø§Ù„Ø£Ø´Ø¹Ø©ØŒ ÙˆØ¶Ù…Ø§Ù† Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ù…Ø±Ø¶Ù‰ ÙˆØ§Ù„Ø¹Ø§Ù…Ù„ÙŠÙ† ÙˆØªØ­Ø³ÙŠÙ† Ø¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø©.',
    level: 'PROFESSIONAL',
    cover: '/assets/images/ar/courses/quality-safety-course-cover.jpg',
    lessons: [
      { id: 'l1', slug: 'quality-standards', title: 'Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø¬ÙˆØ¯Ø© ÙÙŠ Ù‚Ø³Ù… Ø§Ù„Ø£Ø´Ø¹Ø©', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l2', slug: 'radiation-safety', title: 'Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ©', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l3', slug: 'compliance', title: 'Ø§Ù„Ø§Ù…ØªØ«Ø§Ù„ ÙˆØ§Ù„Ø¬ÙˆØ¯Ø©', duration: '22 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l4', slug: 'quality-training', title: 'Ø§Ù„ØªØ¯Ø±ÙŠØ¨ Ø¹Ù„Ù‰ Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø©', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
    ],
    status: 'PUBLISHED',
    seo: {
      title: 'Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© ÙÙŠ Ù‚Ø³Ù… Ø§Ù„Ø£Ø´Ø¹Ø© | Hidden Radiology',
      description: 'Ø¯Ù„ÙŠÙ„ Ø¹Ù…Ù„ÙŠ Ù„ÙÙ‡Ù… Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø©ØŒ ÙˆØªØ­Ø³ÙŠÙ† Ø§Ù„Ø£Ø¯Ø§Ø¡ ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ± ÙÙŠ Ø£Ù‚Ø³Ø§Ù… Ø§Ù„Ø£Ø´Ø¹Ø©.',
      canonical: '/ar/courses/quality-safety',
    },
  },

  {
    id: 'hr-course-ar-006',
    sku: 'HR-COURSE-AR-006',
    language: 'ar',
    slug: 'c-arm',
    title: 'Ø§Ù„ØªØµÙˆÙŠØ± Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… C-Arm',
    description: 'Ø¯ÙˆØ±Ø© Ø¹Ù…Ù„ÙŠØ© Ù„ÙÙ‡Ù… Ø¬Ù‡Ø§Ø² C-ArmØŒ Ù…ÙƒÙˆÙ†Ø§ØªÙ‡ØŒ Ù…Ø¨Ø§Ø¯Ø¦ Ø§Ù„ØªØµÙˆÙŠØ± Ø§Ù„ÙÙ„ÙˆØ±ÙŠØŒ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ§Øª ÙˆØ§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬Ø±Ø§Ø­ÙŠØ©ØŒ Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ©ØŒ ÙˆØ§Ø³ØªÙƒØ´Ø§Ù Ø§Ù„Ø£Ø®Ø·Ø§Ø¡ Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©.',
    level: 'CLINICAL',
    cover: '/assets/images/ar/courses/AR_c-arm-course-cover.jpg',

    lessons: [
      { id: 'l1', slug: 'c-arm-introduction', title: 'Ù…Ù‚Ø¯Ù…Ø© ÙÙŠ Ø¬Ù‡Ø§Ø² C-Arm', duration: '18 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l2', slug: 'c-arm-components', title: 'Ù…ÙƒÙˆÙ†Ø§Øª Ø¬Ù‡Ø§Ø² C-Arm', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l3', slug: 'c-arm-fluoroscopy-principles', title: 'Ù…Ø¨Ø§Ø¯Ø¦ Ø§Ù„ØªØµÙˆÙŠØ± Ø§Ù„ÙÙ„ÙˆØ±ÙŠ', duration: '22 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l4', slug: 'c-arm-positioning-surgical-applications', title: 'Ø§Ù„ÙˆØ¶Ø¹ÙŠØ§Øª ÙˆØ§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬Ø±Ø§Ø­ÙŠØ©', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l5', slug: 'c-arm-radiation-safety', title: 'Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ© ÙÙŠ C-Arm', duration: '22 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l6', slug: 'c-arm-clinical-applications-troubleshooting', title: 'Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¹Ù…Ù„ÙŠØ© ÙˆØ§Ø³ØªÙƒØ´Ø§Ù Ø§Ù„Ø£Ø®Ø·Ø§Ø¡', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'Ø§Ù„ØªØµÙˆÙŠØ± Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… C-Arm | Hidden Radiology',
      description: 'Ø¯ÙˆØ±Ø© Ø¹Ù…Ù„ÙŠØ© Ù„ÙÙ‡Ù… Ø¬Ù‡Ø§Ø² C-Arm ÙˆØ§Ù„ØªØµÙˆÙŠØ± Ø§Ù„ÙÙ„ÙˆØ±ÙŠ ÙˆØ§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬Ø±Ø§Ø­ÙŠØ© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ©.',
      canonical: '/ar/courses/c-arm',
    },
  },

  {
    id: 'hr-course-ar-007',
    sku: 'HR-COURSE-AR-007',
    language: 'ar',
    slug: 'mammography',
    title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„Ù…Ø§Ù…ÙˆØ¬Ø±Ø§ÙÙŠ',
    description: 'Ø¯ÙˆØ±Ø© ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ù…Ù†Ø¸Ù…Ø© Ù„ÙÙ‡Ù… Ø£Ø³Ø§Ø³ÙŠØ§Øª ØªØµÙˆÙŠØ± Ø§Ù„Ø«Ø¯ÙŠ Ø¨Ø§Ù„Ù…Ø§Ù…ÙˆØ¬Ø±Ø§ÙÙŠØŒ Ù…ÙƒÙˆÙ†Ø§Øª Ø§Ù„Ø¬Ù‡Ø§Ø²ØŒ Ø§Ù„ÙˆØ¶Ø¹ÙŠØ§Øª ÙˆØ§Ù„Ø¥Ø³Ù‚Ø§Ø·Ø§ØªØŒ Ø¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø©ØŒ Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ©ØŒ ÙˆÙ…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„ØµÙˆØ±.',
    level: 'CLINICAL',
    cover: '/assets/images/ar/courses/AR_mammography-course-cover.jpg',

    lessons: [
      { id: 'l1', slug: 'mammography-introduction', title: 'Ù…Ù‚Ø¯Ù…Ø© ÙÙŠ ØªØµÙˆÙŠØ± Ø§Ù„Ø«Ø¯ÙŠ', duration: '18 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l2', slug: 'mammography-equipment', title: 'Ø¬Ù‡Ø§Ø² Ø§Ù„Ù…Ø§Ù…ÙˆØ¬Ø±Ø§ÙÙŠ ÙˆÙ…ÙƒÙˆÙ†Ø§ØªÙ‡', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l3', slug: 'mammography-positioning-views', title: 'ÙˆØ¶Ø¹ÙŠØ© Ø§Ù„Ø«Ø¯ÙŠ ÙˆØ§Ù„Ø¥Ø³Ù‚Ø§Ø·Ø§Øª', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l4', slug: 'mammography-image-quality-compression', title: 'Ø¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø© ÙˆØ§Ù„Ø¶ØºØ·', duration: '22 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l5', slug: 'mammography-radiation-safety', title: 'Ø§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ© ÙÙŠ Ø§Ù„Ù…Ø§Ù…ÙˆØ¬Ø±Ø§ÙÙŠ', duration: '20 Ø¯Ù‚ÙŠÙ‚Ø©' },
      { id: 'l6', slug: 'mammography-image-review', title: 'Ù‚Ø±Ø§Ø¡Ø© ÙˆÙ…Ø±Ø§Ø¬Ø¹Ø© ØµÙˆØ± Ø§Ù„Ù…Ø§Ù…ÙˆØ¬Ø±Ø§ÙÙŠ', duration: '25 Ø¯Ù‚ÙŠÙ‚Ø©' },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'Ø£Ø³Ø§Ø³ÙŠØ§Øª Ø§Ù„Ù…Ø§Ù…ÙˆØ¬Ø±Ø§ÙÙŠ | Hidden Radiology',
      description: 'Ø¯ÙˆØ±Ø© ØªØ¹Ù„ÙŠÙ…ÙŠØ© ÙÙŠ Ø£Ø³Ø§Ø³ÙŠØ§Øª ØªØµÙˆÙŠØ± Ø§Ù„Ø«Ø¯ÙŠ Ø¨Ø§Ù„Ù…Ø§Ù…ÙˆØ¬Ø±Ø§ÙÙŠ ÙˆØ§Ù„ÙˆØ¶Ø¹ÙŠØ§Øª ÙˆØ¬ÙˆØ¯Ø© Ø§Ù„ØµÙˆØ±Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø© Ø§Ù„Ø¥Ø´Ø¹Ø§Ø¹ÙŠØ©.',
      canonical: '/ar/courses/mammography',
    },
  },
]



