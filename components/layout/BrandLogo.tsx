import Image from 'next/image'
import { Locale } from '@/lib/types'

interface BrandLogoProps {
  locale: Locale
  className?: string
  showFull?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function BrandLogo({ locale, className = '', showFull = false, size = 'md' }: BrandLogoProps) {
  const isAr = locale === 'ar'

  const sizes = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
  }

  const currentSize = sizes[size]

  if (showFull) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative flex-shrink-0" style={{ width: currentSize.width, height: currentSize.height }}>
          <Image
            src="/logos/hr-icon.png"
            alt="Hidden Radiology"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
        <div className="min-w-0">
          <h1 className="text-white font-bold text-sm sm:text-base leading-tight font-poppins truncate">Hidden Radiology</h1>
          <p className="text-brand-cyan text-[10px] sm:text-xs leading-tight truncate">الأشعة الخفية</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ width: currentSize.width, height: currentSize.height }}>
      <Image
        src="/logos/hr-icon.png"
        alt="Hidden Radiology"
        fill
        className="object-contain rounded-lg"
        priority
      />
    </div>
  )
}