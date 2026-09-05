'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Product } from '@/lib/types'
import { Locale } from '@/lib/types'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import FallbackImage from '@/components/ui/FallbackImage'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
  locale: Locale
}

export default function ProductCard({ product, locale }: ProductCardProps) {
  const isAr = locale === 'ar'
  const [imageError, setImageError] = useState(false)

  const statusBadge = {
    DRAFT: { label: isAr ? 'مسودة' : 'Draft', variant: 'gray' as const },
    COMING_SOON: { label: isAr ? 'قريباً' : 'Coming Soon', variant: 'yellow' as const },
    PUBLISHED: { label: isAr ? 'متاح' : 'Available', variant: 'green' as const },
  }

  const badge = statusBadge[product.status]

  return (
    <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-cyan/30 transition-all duration-300 flex flex-col">
      <Link href={`/${locale}/products/${product.slug}`} className="block relative aspect-video bg-brand-darker overflow-hidden">
        {imageError ? (
          <FallbackImage title={product.title} category={product.category} className="hover:scale-105 transition-transform duration-500" />
        ) : (
          <Image
            src={product.cover}
            alt={product.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        )}
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={badge.variant}>{badge.label}</Badge>
          <span className="text-xs text-slate-500">{product.category}</span>
        </div>
        <Link href={`/${locale}/products/${product.slug}`}>
          <h3 className="text-white font-bold text-lg mb-1 hover:text-brand-cyan transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-1">{product.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-brand-border">
          <span className="text-brand-cyan font-bold text-xl">${product.price}</span>
          <span className="text-slate-500 text-xs">{product.currency}</span>
        </div>

        {product.status === 'PUBLISHED' && product.gumroadUrl && (
          <Button href={product.gumroadUrl} className="w-full mt-4">
            <ShoppingCart className="w-4 h-4" />
            {isAr ? 'اشترِ الآن' : 'Buy Now'}
          </Button>
        )}
        {product.status === 'COMING_SOON' && (
          <Button variant="outline" disabled className="w-full mt-4 cursor-not-allowed">
            {isAr ? 'قريباً' : 'Coming Soon'}
          </Button>
        )}
      </div>
    </div>
  )
}
