import { SEOData } from '../types'

export function generateMetadata(seo: SEOData, locale: string) {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
      languages: {
        'ar': seo.canonical.replace(`/${locale}/`, '/ar/'),
        'en': seo.canonical.replace(`/${locale}/`, '/en/'),
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  }
}
