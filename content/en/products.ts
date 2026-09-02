import { Product } from '../../lib/types'

export const enProducts: Product[] = [
  {
    id: 'hr-qs-en-001',
    sku: 'HR-QS-EN-001',
    language: 'en',
    slug: 'radiology-quality-safety-en',
    title: 'I Understand | Radiology Quality & Safety',
    subtitle: 'English Edition',
    description: 'Quality and safety standards in radiology departments. For technicians and managers. Includes checklists and assessment templates.',
    category: 'Quality & Safety',
    modality: 'General',
    cover: '/images/en/products/qs-cover.jpg',
    screenshots: [],
    price: 7.99,
    currency: 'USD',
    gumroadUrl: 'https://radioviewer.gumroad.com/l/radiology-quality-safety-en',
    status: 'PUBLISHED',
    seo: {
      title: 'I Understand | Radiology Quality & Safety — English Edition | Hidden Radiology',
      description: 'Quality and safety standards in radiology departments - for technicians and managers',
      canonical: '/en/products/radiology-quality-safety-en',
      ogImage: '/images/en/products/qs-cover.jpg',
    },
    disclaimer: 'This is a digital product. No physical shipping.',
  },
]
