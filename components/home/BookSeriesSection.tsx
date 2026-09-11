
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Locale } from '@/lib/types'
import { arProducts } from '@/content/ar/products'
import { enProducts } from '@/content/en/products'
import { BookOpen, ArrowRight, ArrowLeft, Star } from 'lucide-react'
import Button from '@/components/ui/Button'
import FallbackImage from '@/components/ui/FallbackImage'

interface BookSeriesSectionProps {
  locale: Locale
}

export default function BookSeriesSection({ locale }: BookSeriesSectionProps) {
  const isAr = locale === 'ar'
  const products = isAr ? arProducts : enProducts
  const Arrow = isAr ? ArrowLeft : ArrowRight
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const anaFahimProducts = products.filter(p =>
    p.title.includes('أنا فاهم') || p.title.includes('Ana Fahim')
  )

  const handleImageError = (productId: string) => {
    setImageErrors(prev => new Set(prev).add(productId))
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-cyan/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
            {isAr ? 'سلسلة الكتب التعليمية' : 'Educational Book Series'}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 font-poppins tracking-tight px-4">
            {isAr ? 'سلسلة "أنا فاهم"' : '"Ana Fahim" Series'}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            {isAr
              ? 'دليلك الشامل لفهم عالم الأشعة - كتب عملية مبسطة للفنيين والطلاب'
              : 'Your comprehensive guide to understanding the world of radiology - practical simplified books for technicians and students'}
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {anaFahimProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/${locale}/products/${product.slug}`}
              className="group"
            >
              <div className="bg-brand-card/80 backdrop-blur-sm border border-brand-border rounded-2xl overflow-hidden hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-cyan/10">
                {/* Book Cover */}
                <div className="relative aspect-[3/4] bg-brand-darker overflow-hidden">
                  {imageErrors.has(product.id) ? (
                    <FallbackImage
                      title={product.title}
                      category={product.category}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Image
                      src={product.cover}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => handleImageError(product.id)}
                    />
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-medium border border-brand-cyan/30">
                      {product.category}
                    </span>
                  </div>

                  {/* Rating stars */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-brand-cyan fill-brand-cyan' : 'text-slate-600'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {product.title}
                  </h3>

                  {product.subtitle && (
                    <p className="text-brand-cyan/80 text-sm font-medium mb-3">
                      {product.subtitle}
                    </p>
                  )}

                  <p className="text-slate-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                    <div>
                      <span className="text-brand-cyan font-bold text-2xl">
                        ${product.price}
                      </span>
                      <span className="text-slate-500 text-sm ml-1">USD</span>
                    </div>

                    <div className="flex items-center gap-2 text-brand-cyan group-hover:gap-3 transition-all">
                      <span className="text-sm font-medium">
                        {isAr ? 'عرض التفاصيل' : 'View Details'}
                      </span>
                      <Arrow className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href={`/${locale}/store`}>
            <Button className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />

              <span className="hidden sm:inline">
                {isAr ? 'تصفح جميع الكتب في المتجر' : 'Browse All Books in Store'}
              </span>

              <span className="sm:hidden">
                {isAr ? 'تصفح الكتب' : 'Browse Books'}
              </span>

              <Arrow className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </Link>

          <p className="text-slate-500 text-xs sm:text-sm mt-4">
            {isAr
              ? 'أسعار تبدأ من $4.99 - دليل رقمي فوري للتحميل'
              : 'Prices start from $4.99 - instant digital download guide'}
          </p>
        </div>
      </div>
    </section>
  )
}