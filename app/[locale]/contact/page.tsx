import { Locale } from '@/lib/types'
import ContactForm from '@/components/contact/ContactForm'
import Card from '@/components/ui/Card'
import { MessageCircle, Mail, Youtube, MapPin } from 'lucide-react'

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'

  const content = {
    ar: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك',
      formTitle: 'أرسل رسالة',
      formDesc: 'املأ النموذج أدناه وسنرد عليك في أقرب وقت',
      infoTitle: 'معلومات التواصل',
      methods: [
        { icon: MessageCircle, title: 'واتساب', value: '01115440838', href: 'https://wa.me/201115440838', color: 'text-green-400' },
        { icon: Mail, title: 'البريد الإلكتروني', value: 'hiddenradiology@gmail.com', href: 'mailto:hiddenradiology@gmail.com', color: 'text-brand-cyan' },
        { icon: Youtube, title: 'يوتيوب', value: '@HiddenRadiology', href: 'https://youtube.com/@HiddenRadiology', color: 'text-red-400' },
        { icon: MapPin, title: 'المقر', value: 'مصر', href: '#', color: 'text-yellow-400' },
      ],
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to help',
      formTitle: 'Send a Message',
      formDesc: 'Fill out the form below and we will get back to you as soon as possible',
      infoTitle: 'Contact Info',
      methods: [
        { icon: MessageCircle, title: 'WhatsApp', value: '01115440838', href: 'https://wa.me/201115440838', color: 'text-green-400' },
        { icon: Mail, title: 'Email', value: 'hiddenradiology@gmail.com', href: 'mailto:hiddenradiology@gmail.com', color: 'text-brand-cyan' },
        { icon: Youtube, title: 'YouTube', value: '@HiddenRadiology', href: 'https://youtube.com/@HiddenRadiology', color: 'text-red-400' },
        { icon: MapPin, title: 'Location', value: 'Egypt', href: '#', color: 'text-yellow-400' },
      ],
    },
  }

  const c = isAr ? content.ar : content.en

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-poppins">{c.title}</h1>
          <p className="text-brand-cyan text-xl font-medium">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-xl font-bold text-white mb-2">{c.formTitle}</h2>
            <p className="text-slate-400 text-sm mb-6">{c.formDesc}</p>
            <ContactForm locale={locale} />
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-4">{c.infoTitle}</h2>
            {c.methods.map((method) => (
              <a key={method.title} href={method.href} target="_blank" rel="noopener noreferrer">
                <Card className="flex items-center gap-4 hover:border-brand-cyan/30 transition-all mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{method.title}</h3>
                    <p className="text-slate-400 text-sm">{method.value}</p>
                  </div>
                </Card>
              </a>
            ))}

            {/* Quick note */}
            <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                {isAr
                  ? 'نرد على جميع الرسائل خلال 24-48 ساعة. للاستفسارات العاجلة، يرجى التواصل عبر واتساب.'
                  : 'We respond to all messages within 24-48 hours. For urgent inquiries, please contact us via WhatsApp.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
