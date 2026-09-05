'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { Locale } from '@/lib/types'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Skeleton from '@/components/ui/Skeleton'
import { ArrowLeft, ShoppingCart, MessageCircle, Smartphone, CreditCard, ExternalLink, CheckCircle, Shield, Download } from 'lucide-react'

interface ProductDetailProps {
  product: Product
  locale: Locale
}

export default function ProductDetail({ product, locale }: ProductDetailProps) {
  const isAr = locale === 'ar'
  const [imageLoaded, setImageLoaded] = useState(false)

  const statusBadge = {
    DRAFT: { label: isAr ? 'مسودة' : 'Draft', variant: 'gray' as const },
    COMING_SOON: { label: isAr ? 'قريباً' : 'Coming Soon', variant: 'yellow' as const },
    PUBLISHED: { label: isAr ? 'متاح' : 'Available', variant: 'green' as const },
  }

  const badge = statusBadge[product.status]

  const handleGumroadPurchase = () => {
    if (product.gumroadUrl) {
      window.open(product.gumroadUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleWhatsAppPurchase = () => {
    const message = isAr
      ? `أرغب في شراء: ${product.title} - السعر: $${product.price}`
      : `I want to buy: ${product.title} - Price: $${product.price}`
    const whatsappUrl = `https://wa.me/201115440838?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

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
        {/* Product Image with Skeleton Loading */}
        <div className="relative aspect-square bg-brand-darker rounded-2xl overflow-hidden border border-brand-border">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 w-full h-full" />
          )}
          <Image
            src={product.cover}
            alt={product.title}
            fill
            className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={badge.variant}>{badge.label}</Badge>
            <span className="text-sm text-slate-500">{product.category} · {product.modality}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-poppins">
            {product.title}
          </h1>

          {product.subtitle && (
            <p className="text-brand-cyan text-lg font-medium mb-6">{product.subtitle}</p>
          )}

          <p className="text-slate-400 text-lg leading-relaxed mb-8">{product.description}</p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-4xl font-extrabold text-brand-cyan">${product.price}</span>
            <span className="text-lg font-normal text-slate-500">{product.currency}</span>
          </div>

          {/* Purchase Options */}
          {product.status === 'PUBLISHED' && product.gumroadUrl && (
            <div className="space-y-4">
              {/* Primary Gumroad Button */}
              <Button
                onClick={handleGumroadPurchase}
                className="w-full sm:w-auto text-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {isAr ? 'شراء فوري عبر Gumroad' : 'Instant Purchase via Gumroad'}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>

              {/* Alternative Payment Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  onClick={handleWhatsAppPurchase}
                  variant="secondary"
                  className="text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {isAr ? 'واتساب' : 'WhatsApp'}
                </Button>
                <Button
                  variant="secondary"
                  className="text-sm"
                  onClick={() => {
                    alert(isAr ? 'فودافون كاش: 01002293344' : 'Vodafone Cash: 01002293344')
                  }}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  {isAr ? 'فودافون كاش' : 'Vodafone'}
                </Button>
                <Button
                  variant="secondary"
                  className="text-sm"
                  disabled
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  PayPal
                </Button>
              </div>

              {/* Product Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-brand-border">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Download className="w-4 h-4 text-brand-cyan" />
                  {isAr ? 'تحميل فوري' : 'Instant Download'}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Shield className="w-4 h-4 text-brand-cyan" />
                  {isAr ? 'دفع آمن' : 'Secure Payment'}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-brand-cyan" />
                  {isAr ? 'ضمان الجودة' : 'Quality Guaranteed'}
                </div>
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
