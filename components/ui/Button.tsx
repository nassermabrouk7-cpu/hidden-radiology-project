import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base'

  const variants = {
    primary: 'bg-brand-cyan hover:bg-brand-cyan-dark text-brand-dark shadow-lg shadow-brand-cyan/25 disabled:opacity-50',
    secondary: 'bg-brand-card hover:bg-brand-border text-white border border-brand-border disabled:opacity-50',
    outline: 'bg-transparent hover:bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 disabled:opacity-50',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
