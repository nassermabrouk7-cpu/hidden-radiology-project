import Image from 'next/image'

interface GlowingLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function GlowingLogo({ className = '', size = 'lg' }: GlowingLogoProps) {
  const sizes = {
    sm: { width: 80, height: 80 },
    md: { width: 120, height: 120 },
    lg: { width: 160, height: 160 },
    xl: { width: 200, height: 200 },
  }

  const currentSize = sizes[size]

  return (
    <div className={`relative ${className}`} style={{ width: currentSize.width, height: currentSize.height }}>
      {/* Cyan Glow Background */}
      <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute inset-4 bg-brand-cyan/10 rounded-full blur-xl" />

      {/* Logo Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/logos/hr-mark-circular.svg"
          alt="Hidden Radiology Mark"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Additional Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-brand-cyan/30 via-transparent to-brand-cyan/20 rounded-full blur-md" />
    </div>
  )
}