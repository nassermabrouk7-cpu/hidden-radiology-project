import { Course } from '../../lib/types'

export const arCourses: Course[] = [
  {
    id: 'hr-course-ar-001',
    sku: 'HR-COURSE-AR-001',
    language: 'ar',
    slug: 'radiology-basics',
    title: 'أساس�`ات ا�أشعة ���&بتدئ�`� ',
    description:
      'د��رة تأس�`س�`ة �&بسطة �ف�!�& ع��& ا�أشعة�R تْ���`�  ا�ص��رة�R �&بادئ ا�أشعة ا�س�`� �`ة�R ��ا�س�ا�&ة ا�إشعاع�`ة. �&� اسبة �ط�اب ��ف� �`�` ا�أشعة ف�` بدا�`ة ا�طر�`�.',
    level: 'BEGINNER',
    cover: '/images/ar/courses/basics-radiology-course-cover.png',

    lessons: [
      {
        id: 'l1',
        slug: 'intro',
        title: '�&�د�&ة ف�` ع��& ا�أشعة',
        duration: '15 د��`�ة',
      },
      {
        id: 'l2',
        slug: 'xray-physics',
        title: 'ف�`ز�`اء ا�أشعة ا�س�`� �`ة',
        duration: '20 د��`�ة',
      },
      {
        id: 'l3',
        slug: 'image-formation',
        title: 'ْ�`ف تتْ���  ص��رة ا�أشعة�x',
        duration: '20 د��`�ة',
      },
      {
        id: 'l4',
        slug: 'image-quality',
        title: 'أساس�`ات ج��دة ا�ص��رة',
        duration: '18 د��`�ة',
      },
      {
        id: 'l5',
        slug: 'radiation-safety',
        title: 'ا�س�ا�&ة ا�إشعاع�`ة',
        duration: '18 د��`�ة',
      },
      {
        id: 'l6',
        slug: 'patient-positioning',
        title: 'أساس�`ات ��ضع ا��&ر�`ض',
        duration: '20 د��`�ة',
      },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'أساس�`ات ا�أشعة ���&بتدئ�`�  | Hidden Radiology',
      description:
        'د��رة تأس�`س�`ة �تع��& أساس�`ات ا�أشعة ��ط�اب ��ف� �`�` ا�أشعة ا��&بتدئ�`� .',
      canonical: '/ar/courses/radiology-basics',
    },
  },

  {
    id: 'hr-course-ar-002',
    sku: 'HR-COURSE-AR-002',
    language: 'ar',
    slug: 'ct-mastery',
    title: 'إت�ا�  CT',
    description:
      'د��رة �&ت�د�&ة �ف� �`�` ا�أشعة ��ا�ط�اب ا��&�!ت�&�`�  با�تص���`ر ا��&�طع�`�R تبدأ �&�  ف�!�& ا�ج�!از ��ا�بر��ت��ْ���ات ��حت�0 ج��دة ا�ص��رة ���&بادئ ا�تعا�&� �&ع �&��اد ا�تبا�`� .',
    level: 'CLINICAL',
    cover: '/images/ar/courses/ct-mastery-course-cover.png',

    lessons: [
      {
        id: 'l1',
        slug: 'ct-basics',
        title: 'أساس�`ات ا�تص���`ر ا��&�طع�` CT',
        duration: '20 د��`�ة',
      },
      {
        id: 'l2',
        slug: 'ct-protocols',
        title: 'بر��ت��ْ���ات CT',
        duration: '25 د��`�ة',
      },
      {
        id: 'l3',
        slug: 'ct-parameters',
        title: 'ع��ا�&� ��ت�� �`ات ا�تص���`ر',
        duration: '22 د��`�ة',
      },
      {
        id: 'l4',
        slug: 'ct-image-quality',
        title: 'ج��دة ص��رة CT',
        duration: '20 د��`�ة',
      },
      {
        id: 'l5',
        slug: 'contrast-media',
        title: '�&��اد ا�تبا�`�  ف�` CT',
        duration: '22 د��`�ة',
      },
      {
        id: 'l6',
        slug: 'ct-artifacts',
        title: 'ا�٬ Artifacts ف�` CT',
        duration: '20 د��`�ة',
      },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'إت�ا�  CT | Hidden Radiology',
      description:
        'د��رة �&ت�د�&ة ف�` ا�تص���`ر ا��&�طع�` CT تش�&� ا�بر��ت��ْ���ات ��ا�ت�� �`ات ��ج��دة ا�ص��رة.',
      canonical: '/ar/courses/ct-mastery',
    },
  },

  {
    id: 'hr-course-ar-003',
    sku: 'HR-COURSE-AR-003',
    language: 'ar',
    slug: 'chest-xray',
    title: 'إت�ا�  أشعة ا�صدر Chest X-Ray',
    description:
      'د��رة ع�&��`ة �ف�!�& أساس�`ات تص���`ر ا�صدر�R ��ضع�`ات ا�تص���`ر�R ج��دة ا�ص��رة�R ��ا�تعرف ع��0 أ�!�& ا�ع�ا�&ات ا�ت�` �`جب �&�احظت�!ا ع� د �&راجعة ص��رة ا�صدر.',
    level: 'CLINICAL',
    cover: '/images/ar/courses/cxr-course.jpg',

    lessons: [
      {
        id: 'l1',
        slug: 'chest-anatomy',
        title: 'تشر�`ح ا�صدر ف�` ص��رة ا�أشعة',
        duration: '20 د��`�ة',
      },
      {
        id: 'l2',
        slug: 'pa-ap-view',
        title: 'PA �� AP: �&ا ا�فر��x',
        duration: '18 د��`�ة',
      },
      {
        id: 'l3',
        slug: 'chest-image-quality',
        title: 'ت��`�`�& ج��دة ص��رة ا�صدر',
        duration: '22 د��`�ة',
      },
      {
        id: 'l4',
        slug: 'systematic-approach',
        title: 'طر�`�ة �&� ظ�&ة ��&راجعة ص��رة ا�صدر',
        duration: '25 د��`�ة',
      },
      {
        id: 'l5',
        slug: 'common-findings',
        title: 'ع�ا�&ات شائعة �`جب ا�ا� تبا�! إ��`�!ا',
        duration: '25 د��`�ة',
      },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'إت�ا�  أشعة ا�صدر | Hidden Radiology',
      description:
        'د��رة تع��`�&�`ة ع�&��`ة ف�` أساس�`ات ��تص���`ر ���&راجعة أشعة ا�صدر.',
      canonical: '/ar/courses/chest-xray',
    },
  },

  {
    id: 'hr-course-ar-004',
    sku: 'HR-COURSE-AR-004',
    language: 'ar',
    slug: 'mri-basics',
    title: 'أساس�`ات MRI',
    description:
      '�&�د�&ة �&� ظ�&ة إ��0 ا�ر� �`�  ا��&غ� اط�`س�` MRI�R تش�&� ا��&بادئ ا�أساس�`ة�R ا�س�ا�&ة�R ا�تس�س�ات�R ��ج��دة ا�ص��رة.',
    level: 'BEGINNER',
    cover: '/images/covers/ana-fahim-mri-ar.png',

    lessons: [
      {
        id: 'l1',
        slug: 'mri-introduction',
        title: '�&�د�&ة ف�` MRI',
        duration: '18 د��`�ة',
      },
      {
        id: 'l2',
        slug: 'mri-safety',
        title: 'ا�س�ا�&ة ف�` MRI',
        duration: '25 د��`�ة',
      },
      {
        id: 'l3',
        slug: 'mri-sequences',
        title: 'ف�!�& أ�!�& تس�س�ات MRI',
        duration: '25 د��`�ة',
      },
      {
        id: 'l4',
        slug: 'mri-image-quality',
        title: 'ج��دة ا�ص��رة ف�` MRI',
        duration: '20 د��`�ة',
      },
    ],

     status: 'PUBLISHED',

    seo: {
      title: 'أساس�`ات MRI | Hidden Radiology',
      description:
        'د��رة تأس�`س�`ة �ف�!�& �&بادئ ا�ر� �`�  ا��&غ� اط�`س�` MRI ��ا�س�ا�&ة ��ج��دة ا�ص��رة.',
      canonical: '/ar/courses/mri-basics',
    },
  },

  {
    id: 'hr-course-ar-005',
    sku: 'HR-COURSE-AR-005',
    language: 'ar',
    slug: 'quality-safety',
    title: 'ا�ج��دة ��ا�س�ا�&ة ف�` �س�& ا�أشعة',
    description:
      'د��رة �&تخصصة �ف�!�& �&عا�`�`ر ا�ج��دة ��ا�س�ا�&ة ف�` أ�سا�& ا�أشعة�R ��ض�&ا�  س�ا�&ة ا��&رض�0 ��ا�عا�&��`�  ��تحس�`�  ج��دة ا�ص��رة.',
    level: 'PROFESSIONAL',
    cover: '/images/covers/Quality Safety -ar.png',

    lessons: [
      {
        id: 'l1',
        slug: 'quality-standards',
        title: '�&عا�`�`ر ا�ج��دة ف�` �س�& ا�أشعة',
        duration: '20 د��`�ة',
      },
      {
        id: 'l2',
        slug: 'radiation-safety',
        title: 'ا�س�ا�&ة ا�إشعاع�`ة',
        duration: '20 د��`�ة',
      },
      {
        id: 'l3',
        slug: 'compliance',
        title: 'ا�ا�&تثا� ��ا�ج��دة',
        duration: '22 د��`�ة',
      },
      {
        id: 'l4',
        slug: 'quality-training',
        title: 'ا�تدر�`ب ع��0 ا�ج��دة ��ا�س�ا�&ة',
        duration: '20 د��`�ة',
      },
    ],

    status: 'PUBLISHED',

    seo: {
      title: 'ا�ج��دة ��ا�س�ا�&ة ف�` �س�& ا�أشعة | Hidden Radiology',
      description:
        'د��`� ع�&��` �ف�!�& �&عا�`�`ر ا�ج��دة ��ا�س�ا�&ة�R ��تحس�`�  ا�أداء ��ج��دة ا�ص��ر ف�` أ�سا�& ا�أشعة.',
      canonical: '/ar/courses/quality-safety',
    },
  },]
