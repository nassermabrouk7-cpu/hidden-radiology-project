'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { Locale } from '@/lib/types'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { ArrowLeft, ShoppingCart, MessageCircle, Smartphone, CreditCard, ExternalLink } from 'lucide-react'

interface ProductDetailProps {
  product: Product
  locale: Locale
}

export default function ProductDetail({ product, locale }: ProductDetailProps) {
  const isAr = locale === 'ar'

  const statusBadge = {
    DRAFT: { label: isAr ? 'مسودة' : 'Draft', variant: 'gray' as const },
    COMING_SOON: { label: isAr ? 'قريباً' : 'Coming Soon', variant: 'yellow' as const },
    PUBLISHED: { label: isAr ? 'متاح' : 'Available', variant: 'green' as const },
  }

  const badge = statusBadge[product.status]

  return (
    <div>
      <Link
        href={`/${locale}/store`}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-cyan mb-8 transition-colors"
      >
        <ArrowLeft className={`w-4 h-4 ${isAr ? '' : 'rotate-180'}`} />
        {isAr ? 'العودة للمتجر' : 'Back to Store'}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="relative aspect-square bg-brand-darker rounded-2xl overflow-hidden border border-brand-border">
          <Image
            src={product.cover}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={badge.variant}>{badge.label}</Badge>
            <span className="text-sm text-slate-500">{product.category} · {product.modality}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-poppins">
            {product.title}
          </h1>
          <p className="text-brand-cyan text-lg font-medium mb-6">{product.subtitle}</p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">{product.description}</p>

          <div className="text-4xl font-extrabold text-brand-cyan mb-8">
            ${product.price}
            <span className="text-lg font-normal text-slate-500 ml-2">{product.currency}</span>
          </div>

          {product.status === 'PUBLISHED' && product.gumroadUrl && (
            <div className="space-y-3">
              <Button href={product.gumroadUrl} className="w-full sm:w-auto">
                <ExternalLink className="w-5 h-5" />
                {isAr ? 'الشراء عبر Gumroad' : 'Buy via Gumroad'}
              </Button>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  href={`https://wa.me/201115440838?text=${encodeURIComponent(`${isAr ? 'أرغب في شراء' : 'I want to buy'}: ${product.title} - $${product.price}`)}`}
                  variant="secondary"
                  className="text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  {isAr ? 'واتساب' : 'WhatsApp'}
                </Button>
                <Button variant="secondary" className="text-sm" onClick={() => alert('Vodafone Cash: 01002293344')}>
                  <Smartphone className="w-4 h-4" />
                  {isAr ? 'فودافون كاش' : 'Vodafone'}
                </Button>
                <Button variant="secondary" className="text-sm" onClick={() => alert('PayPal coming soon')}>
                  <CreditCard className="w-4 h-4" />
                  PayPal
                </Button>
              </div>
            </div>
          )}

          {product.status === 'COMING_SOON' && (
            <Button variant="outline" disabled className="w-full sm:w-auto cursor-not-allowed">
              {isAr ? 'قريباً — سيتم الإشعار عند التوفر' : 'Coming Soon — Get notified when available'}
            </Button>
          )}

          {product.disclaimer && (
            <p className="text-slate-600 text-xs mt-6">{product.disclaimer}</p>
          )}
        </div>
      </div>
    </div>
  )
}
