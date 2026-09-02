import { Locale } from '@/lib/types'
import { arProducts } from '@/content/ar/products'
import { enProducts } from '@/content/en/products'
import ProductCard from '@/components/product/ProductCard'

export default function StorePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const products = isAr ? arProducts : enProducts
  const published = products.filter(p => p.status === 'PUBLISHED' || p.status === 'COMING_SOON')

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-poppins">
            {isAr ? 'متجر Hidden Radiology' : 'Hidden Radiology Store'}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {isAr ? 'محتوى تعليمي احترافي في عالم الأشعة' : 'Professional educational content in radiology'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {published.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  )
}
