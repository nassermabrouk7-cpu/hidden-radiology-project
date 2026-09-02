export type Locale = 'ar' | 'en'

export type ProductStatus = 'DRAFT' | 'COMING_SOON' | 'PUBLISHED'

export interface Product {
  id: string
  sku: string
  language: Locale
  slug: string
  title: string
  subtitle: string
  description: string
  category: string
  modality: string
  cover: string
  screenshots: string[]
  pdf?: string
  price: number
  currency: string
  gumroadUrl?: string
  status: ProductStatus
  seo: SEOData
  disclaimer?: string
}

export interface Course {
  id: string
  sku: string
  language: Locale
  slug: string
  title: string
  description: string
  level: 'BEGINNER' | 'FOUNDATION' | 'CLINICAL' | 'PROFESSIONAL'
  cover: string
  lessons: Lesson[]
  status: ProductStatus
  seo: SEOData
}
export interface Lesson {
  id: string
  slug: string
  title: string
  duration: string
  videoUrl?: string
  summary?: string
  objectives?: string[]
  content?: string[]
  keyPoints?: string[]
  image?: string
}

export interface ClinicalCase {
  id: string
  language: Locale
  slug: string
  title: string
  modality: string
  region: string
  clinicalContext: string
  image: string
  whatToLookFor: string
  commonMistake: string
  safetyQualityNote: string
  takeaway: string
  status: ProductStatus
  seo: SEOData
}

export interface SEOData {
  title: string
  description: string
  canonical: string
  ogImage?: string
}

export interface Asset {
  id: string
  language: Locale
  type: 'image' | 'pdf' | 'video'
  path: string
  alt: string
  usage: string
}

export interface NavItem {
  label: string
  href: string
}

export interface PaymentMethod {
  id: string
  name: string
  value: string
  icon: string
  color: string
  href: string
}
