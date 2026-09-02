import { PAYMENT_METHODS } from '@/lib/config'
import { Locale } from '@/lib/types'
import { MessageCircle, Smartphone, CreditCard, ShoppingBag } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{className?: string}>> = {
  MessageCircle,
  Smartphone,
  CreditCard,
  ShoppingBag,
}

interface PaymentMethodsProps {
  locale: Locale
}

export default function PaymentMethods({ locale }: PaymentMethodsProps) {
  const methods = PAYMENT_METHODS[locale]
  const isAr = locale === 'ar'

  return (
    <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
      <h3 className="text-white font-bold text-lg mb-4 text-center">
        {isAr ? 'طرق الدفع المتاحة' : 'Available Payment Methods'}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {methods.map((m) => {
          const Icon = iconMap[m.icon] || ShoppingBag
          return (
            <a
              key={m.id}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${m.color}`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{m.name}</span>
              <span className="text-xs opacity-70">{m.value}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
