
import { PAYMENT_METHODS } from '@/lib/config'
import { Locale } from '@/lib/types'
import { MessageCircle } from 'lucide-react'

interface PaymentMethodsProps {
  locale: Locale
}

function PaymentLogo({ type }: { type: string }) {
  switch (type) {
    case 'whatsapp':
      return (
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white fill-white" />
        </div>
      )

    case 'vodafone':
      return (
        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-lg">
          V
        </div>
      )

    case 'fawry':
      return (
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-black text-[10px]">
          Fawry
        </div>
      )

    case 'paypal':
      return (
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">
          P
        </div>
      )

    case 'gumroad':
      return (
        <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center text-white font-black text-xl">
          G
        </div>
      )

    default:
      return (
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
          $
        </div>
      )
  }
}

export default function PaymentMethods({ locale }: PaymentMethodsProps) {
  const methods = PAYMENT_METHODS[locale]
  const isAr = locale === 'ar'

  return (
    <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
      <h3 className="text-white font-bold text-lg mb-4 text-center">
        {isAr ? 'طرق الدفع المتاحة' : 'Available Payment Methods'}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {methods.map((method) => (
          <a
            key={method.id}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:bg-white/5 ${method.color}`}
          >
            <PaymentLogo type={method.id} />

            <span className="text-sm font-semibold text-center">
              {method.name}
            </span>

            <span className="text-xs opacity-70 text-center" dir="ltr">
              {method.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

