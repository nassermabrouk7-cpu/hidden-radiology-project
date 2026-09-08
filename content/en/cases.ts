import { ClinicalCase } from '../../lib/types'

export const enCases: ClinicalCase[] = [
  {
    id: 'hr-case-en-001',
    language: 'en',
    slug: 'chest-pneumonia',
    title: 'Pneumonia — Clinical Case',
    modality: 'Chest X-Ray',
    region: 'Chest',
    clinicalContext: '45-year-old patient with cough and fever for 5 days.',
    image: '/assets/images/en/cases/xray/chest-xray.png',
    whatToLookFor: 'Localized opacity in the right lower lobe with air bronchograms.',
    commonMistake: 'Confusing pneumonia with pleural effusion.',
    safetyQualityNote: 'Ensure PA positioning, not AP, if the patient is conscious.',
    takeaway: 'Localized opacity + air bronchograms = pneumonia.',
    status: 'PUBLISHED',
    seo: {
      title: 'Clinical Case: Pneumonia | Hidden Radiology',
      description: 'Clinical case in chest X-ray - pneumonia',
      canonical: '/en/cases/chest-pneumonia',
    },
  },
  {
    id: 'hr-case-en-002',
    language: 'en',
    slug: 'ct-brain-stroke',
    title: 'Brain Stroke — CT Case',
    modality: 'CT',
    region: 'Brain',
    clinicalContext: '68-year-old patient, sudden loss of consciousness, left-sided weakness.',
    image: '/assets/images/en/cases/ct/ct-brain-hemorrhage.jpg',
    whatToLookFor: 'Early signs: loss of gray-white differentiation, dense artery sign.',
    commonMistake: 'Delaying stroke diagnosis due to missing subtle early changes.',
    safetyQualityNote: 'Non-contrast brain CT is the first exam in acute stroke.',
    takeaway: 'Time = Brain. Every minute of delayed treatment loses 1.9 million neurons.',
    status: 'PUBLISHED',
    seo: {
      title: 'Clinical Case: Brain Stroke | Hidden Radiology',
      description: 'CT case in brain stroke - early diagnosis',
      canonical: '/en/cases/ct-brain-stroke',
    },
  },
]

