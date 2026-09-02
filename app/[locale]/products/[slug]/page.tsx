import { notFound } from 'next/navigation'
import { Locale } from '@/lib/types'
import { arProducts } from '@/content/ar/products'
import { enProducts } from '@/content/en/products'
import ProductDetail from '@/components/product/ProductDetail'
import { generateMetadata as genMeta } from '@/lib/seo'

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const products = params.locale === 'ar' ? arProducts : enProducts
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  const products = params.locale === 'ar' ? arProducts : enProducts
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}
  return genMeta(product.seo, params.locale)
}

export default function ProductPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = params.locale as Locale
  const products = locale === 'ar' ? arProducts : enProducts
  const product = products.find((p) => p.slug === params.slug)

  if (!product) notFound()

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetail product={product} locale={locale} />
      </div>
    </div>
  )
}
