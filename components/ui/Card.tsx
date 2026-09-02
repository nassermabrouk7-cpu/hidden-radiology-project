import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-brand-card border border-brand-border rounded-2xl p-6 ${hover ? 'hover:border-brand-cyan/30 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  )
}
