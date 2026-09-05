interface FallbackImageProps {
  title: string
  category?: string
  className?: string
}

export default function FallbackImage({ title, category, className = '' }: FallbackImageProps) {
  const initials = title
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 3)

  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-brand-dark via-brand-card to-brand-cyan/10 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      {/* Cyan Glow Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-cyan/5" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-cyan/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-cyan/5 border border-brand-cyan/30 flex items-center justify-center shadow-lg shadow-brand-cyan/10">
          <span className="text-3xl font-extrabold text-brand-cyan font-poppins">{initials}</span>
        </div>

        {category && (
          <span className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-medium mb-3">
            {category}
          </span>
        )}

        <h3 className="text-white font-bold text-sm md:text-base line-clamp-2 leading-tight max-w-xs">
          {title}
        </h3>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-2 border border-brand-cyan/10 rounded-lg pointer-events-none" />
    </div>
  )
}