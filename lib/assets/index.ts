import { Asset } from '../types'

export const assetRegistry: Record<string, Asset> = {
  // Brand
  'logo': { id: 'logo', language: 'ar', type: 'image', path: '/images/brand/logo.png', alt: 'Hidden Radiology Logo', usage: 'brand' },
  'hero-ar': { id: 'hero-ar', language: 'ar', type: 'image', path: '/images/ar/hero/hero-bg.jpg', alt: 'Hero Arabic', usage: 'homepage' },
  'hero-en': { id: 'hero-en', language: 'en', type: 'image', path: '/images/en/hero.jpg', alt: 'Hero English', usage: 'homepage' },

  // AR Products — أنا فاهم (العربي)
  'cxr-ar-cover': { id: 'cxr-ar-cover', language: 'ar', type: 'image', path: '/images/ar/products/cxr-cover.jpg', alt: 'أنا فاهم | أشعة الصدر Chest X-Ray', usage: 'product' },
  'cxr-ar-book': { id: 'cxr-ar-book', language: 'ar', type: 'image', path: '/images/ar/products/cxr-book.jpg', alt: 'أنا فاهم | أشعة الصدر', usage: 'product' },
  
  'ct-ar-cover': { id: 'ct-ar-cover', language: 'ar', type: 'image', path: '/images/ar/products/ct-cover.jpg', alt: 'أنا فاهم | الأشعة المقطعية CT', usage: 'product' },
  'ct-ar-book': { id: 'ct-ar-book', language: 'ar', type: 'image', path: '/images/ar/products/ct-book.jpg', alt: 'أنا فاهم | CT', usage: 'product' },
  
  'mri-ar-cover': { id: 'mri-ar-cover', language: 'ar', type: 'image', path: '/images/ar/products/mri-cover.jpg', alt: 'أنا فاهم | الرنين المغناطيسي MRI', usage: 'product' },
  'mri-ar-book': { id: 'mri-ar-book', language: 'ar', type: 'image', path: '/images/ar/products/mri-book.jpg', alt: 'أنا فاهم | MRI', usage: 'product' },
  
  'qs-ar-cover': { id: 'qs-ar-cover', language: 'ar', type: 'image', path: '/images/ar/products/qs-cover.jpg', alt: 'أنا فاهم | الجودة والسلامة', usage: 'product' },
  'qs-ar-book': { id: 'qs-ar-book', language: 'ar', type: 'image', path: '/images/ar/products/qs-book.jpg', alt: 'أنا فاهم | الجودة والسلامة في قسم الأشعة', usage: 'product' },
  
  'rs-ar-cover': { id: 'rs-ar-cover', language: 'ar', type: 'image', path: '/images/ar/products/rs-cover.jpg', alt: 'أنا فاهم | السلامة الإشعاعية', usage: 'product' },

  // EN Products — I Understand (الإنجليزي)
  'qs-en-cover': { id: 'qs-en-cover', language: 'en', type: 'image', path: '/images/en/products/qs-cover.jpg', alt: 'I Understand | Radiology Quality & Safety', usage: 'product' },
  'qs-en-cover-main': { id: 'qs-en-cover-main', language: 'en', type: 'image', path: '/images/en/products/qs-cover-main.jpg', alt: 'Radiology Quality & Safety English Edition', usage: 'product' },
  'series-en-cover': { id: 'series-en-cover', language: 'en', type: 'image', path: '/images/en/products/series-cover.jpg', alt: 'Ana Fahim Series', usage: 'product' },

  // Hero & Banners
  'series-banner': { id: 'series-banner', language: 'ar', type: 'image', path: '/images/ar/hero/series-banner.jpg', alt: 'سلسلة أنا فاهم', usage: 'homepage' },
  'products-showcase': { id: 'products-showcase', language: 'ar', type: 'image', path: '/images/ar/about/products-showcase.jpg', alt: 'عرض المنتجات', usage: 'about' },
  'box-set': { id: 'box-set', language: 'ar', type: 'image', path: '/images/ar/about/box-set.jpg', alt: 'صندوق السلسلة', usage: 'about' },

  // Courses
  'course-bg': { id: 'course-bg', language: 'ar', type: 'image', path: '/images/ar/courses/course-bg.jpg', alt: 'خلفية الدورات', usage: 'course' },
  'cxr-course': { id: 'cxr-course', language: 'ar', type: 'image', path: '/images/ar/courses/cxr-course.jpg', alt: 'دورة أشعة الصدر', usage: 'course' },
  'ct-course': { id: 'ct-course', language: 'ar', type: 'image', path: '/images/ar/courses/ct-course.jpg', alt: 'دورة CT', usage: 'course' },

  // AR Cases
  'case-chest-ar-001': { id: 'case-chest-ar-001', language: 'ar', type: 'image', path: '/images/cases/xray/chest-xray.png', alt: 'حالة ذات الرئة', usage: 'case' },
  'case-ct-ar-001': { id: 'case-ct-ar-001', language: 'ar', type: 'image', path: '/images/cases/ct/ct-brain-hemorrhage.jpg', alt: 'حالة السكتة الدماغية', usage: 'case' },

  // EN Cases
  'case-chest-en-001': { id: 'case-chest-en-001', language: 'en', type: 'image', path: '/images/cases/xray/chest-xray.png', alt: 'Pneumonia Case', usage: 'case' },
  'case-ct-en-001': { id: 'case-ct-en-001', language: 'en', type: 'image', path: '/images/cases/ct/ct-brain-hemorrhage.jpg', alt: 'Stroke Case', usage: 'case' },
}

export function getAsset(id: string): Asset | undefined {
  return assetRegistry[id]
}

export function getAssetsByLanguage(lang: string): Asset[] {
  return Object.values(assetRegistry).filter(a => a.language === lang)
}

export function getAssetsByUsage(usage: string): Asset[] {
  return Object.values(assetRegistry).filter(a => a.usage === usage)
}
