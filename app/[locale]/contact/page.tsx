import { Locale } from '@/lib/types'
import ContactForm from '@/components/contact/ContactForm'
import { MessageCircle, Mail, Youtube, MapPin, ArrowUpLeft, Clock3 } from 'lucide-react'

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'

  const content = {
    ar: {
      eyebrow: 'Hidden Radiology',
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك',
      description: 'لديك سؤال عن دورة، منتج أو محتوى تعليمي؟ أرسل لنا رسالتك وسنساعدك بأقرب وقت ممكن.',
      formTitle: 'أرسل لنا رسالة',
      formDesc: 'أكمل البيانات التالية وسنراجع رسالتك ونرد عليك.',
      infoTitle: 'طرق التواصل',
      infoDesc: 'اختر الطريقة الأنسب لك للتواصل مع فريق Hidden Radiology.',
      response: 'نرد على جميع الرسائل خلال 24–48 ساعة.',
      urgent: 'للاستفسارات العاجلة، يمكنك التواصل معنا عبر WhatsApp.',
      methods: [
        {
          icon: MessageCircle,
          title: 'WhatsApp',
          value: '01115440838',
          href: 'https://wa.me/201115440838',
          color: 'text-green-400',
          bg: 'bg-green-400/10',
        },
        {
          icon: Mail,
          title: 'البريد الإلكتروني',
          value: 'hiddenradiology@gmail.com',
          href: 'mailto:hiddenradiology@gmail.com',
          color: 'text-brand-cyan',
          bg: 'bg-brand-cyan/10',
        },
        {
          icon: Youtube,
          title: 'YouTube',
          value: '@HiddenRadiology',
          href: 'https://youtube.com/@HiddenRadiology',
          color: 'text-red-400',
          bg: 'bg-red-400/10',
        },
        {
          icon: MapPin,
          title: 'الموقع',
          value: 'مصر',
          href: null,
          color: 'text-brand-gold',
          bg: 'bg-brand-gold/10',
        },
      ],
    },
    en: {
      eyebrow: 'Hidden Radiology',
      title: 'Contact Us',
      subtitle: 'We are here to help',
      description: 'Have a question about a course, product, or educational content? Send us a message and we will be happy to help.',
      formTitle: 'Send us a message',
      formDesc: 'Complete the form below and our team will review your message.',
      infoTitle: 'Contact options',
      infoDesc: 'Choose the contact method that works best for you.',
      response: 'We respond to all messages within 24–48 hours.',
      urgent: 'For urgent inquiries, please contact us via WhatsApp.',
      methods: [
        {
          icon: MessageCircle,
          title: 'WhatsApp',
          value: '01115440838',
          href: 'https://wa.me/201115440838',
          color: 'text-green-400',
          bg: 'bg-green-400/10',
        },
        {
          icon: Mail,
          title: 'Email',
          value: 'hiddenradiology@gmail.com',
          href: 'mailto:hiddenradiology@gmail.com',
          color: 'text-brand-cyan',
          bg: 'bg-brand-cyan/10',
        },
        {
          icon: Youtube,
          title: 'YouTube',
          value: '@HiddenRadiology',
          href: 'https://youtube.com/@HiddenRadiology',
          color: 'text-red-400',
          bg: 'bg-red-400/10',
        },
        {
          icon: MapPin,
          title: 'Location',
          value: 'Egypt',
          href: null,
          color: 'text-brand-gold',
          bg: 'bg-brand-gold/10',
        },
      ],
    },
  }

  const c = isAr ? content.ar : content.en

  return (
    <main className="min-h-screen py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface/80 px-6 py-10 md:px-10 md:py-14 mb-10">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-cyan/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-brand-cyan/5 blur-3xl" />

          <div className={`relative max-w-3xl ${isAr ? 'mr-0' : 'ml-0'}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 px-4 py-2 text-sm font-medium text-brand-cyan mb-5">
              <MessageCircle className="w-4 h-4" />
              {c.eyebrow}
            </div>

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 ${isAr ? 'font-cairo' : 'font-poppins'}`}>
              {c.title}
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-brand-cyan mb-4">
              {c.subtitle}
            </p>

            <p className="max-w-2xl text-base md:text-lg leading-8 text-slate-300">
              {c.description}
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div className="rounded-3xl border border-brand-border bg-brand-card/90 p-6 md:p-8 shadow-xl shadow-black/10">
            <div className="mb-7">
              <h2 className="text-2xl font-bold text-white mb-2">{c.formTitle}</h2>
              <p className="text-slate-400 leading-7">{c.formDesc}</p>
            </div>

            <ContactForm locale={locale} />
          </div>

          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{c.infoTitle}</h2>
              <p className="text-slate-400 leading-7">{c.infoDesc}</p>
            </div>

            <div className="grid gap-4">
              {c.methods.map((method) => {
                const content = (
                  <>
                    <div className={`w-12 h-12 shrink-0 rounded-2xl ${method.bg} border border-white/5 flex items-center justify-center ${method.color}`}>
                      <method.icon className="w-6 h-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                      <p className="text-slate-400 text-sm truncate">{method.value}</p>
                    </div>

                    {method.href && (
                      <ArrowUpLeft className="w-5 h-5 text-slate-500 group-hover:text-brand-cyan transition-colors shrink-0" />
                    )}
                  </>
                )

                return method.href ? (
                  <a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-surface/80 p-5 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-brand-surface hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={method.title}
                    className="flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-surface/80 p-5"
                  >
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="rounded-2xl border border-brand-cyan/15 bg-brand-cyan/5 p-5">
              <div className="flex items-start gap-3">
                <Clock3 className="w-5 h-5 text-brand-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-200 text-sm font-medium mb-1">{c.response}</p>
                  <p className="text-slate-400 text-sm leading-6">{c.urgent}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
