interface BadgeProps {
  children: ReactNode
  variant?: 'cyan' | 'green' | 'yellow' | 'red' | 'gray'
}

import { ReactNode } from 'react'

export default function Badge({ children, variant = 'cyan' }: BadgeProps) {
  const variants = {
    cyan: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20',
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    gray: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium border ${variants[variant]}`}>
      {children}
    </span>
  )
}
