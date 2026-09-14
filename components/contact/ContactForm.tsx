'use client'

import { useState } from 'react'
import { Locale } from '@/lib/types'
import { Send, CheckCircle, AlertCircle, User, Mail, FileText, MessageSquare } from 'lucide-react'

interface ContactFormProps {
  locale: Locale
}

export default function ContactForm({ locale }: ContactFormProps) {
  const isAr = locale === 'ar'
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setErrors({})
    setMessage('')
    setSuccess(false)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      locale,
    }

    const newErrors: Record<string, string[]> = {}

    if (!data.name || data.name.length < 2) {
      newErrors.name = [isAr ? 'الاسم قصير جدًا' : 'Name is too short']
    }

    if (!data.email || !data.email.includes('@')) {
      newErrors.email = [isAr ? 'البريد الإلكتروني غير صالح' : 'Invalid email']
    }

    if (!data.subject || data.subject.length < 3) {
      newErrors.subject = [isAr ? 'الموضوع قصير جدًا' : 'Subject is too short']
    }

    if (!data.message || data.message.length < 10) {
      newErrors.message = [isAr ? 'الرسالة قصيرة جدًا' : 'Message is too short']
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setPending(false)
      return
    }

    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Contact form submission:', data)

    setSuccess(true)
    setMessage(
      isAr
        ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.'
        : 'Your message has been sent successfully!'
    )

    e.currentTarget.reset()
    setPending(false)
  }

  const t = isAr
    ? {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        namePlaceholder: 'محمد أحمد',
        emailPlaceholder: 'example@email.com',
        subjectPlaceholder: 'استفسار عن منتج',
        messagePlaceholder: 'اكتب رسالتك هنا...',
      }
    : {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        namePlaceholder: 'John Doe',
        emailPlaceholder: 'example@email.com',
        subjectPlaceholder: 'Inquiry about a product',
        messagePlaceholder: 'Write your message here...',
      }

  const inputClass =
    'w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan/70 focus:ring-2 focus:ring-brand-cyan/10 transition-all duration-200'

  const labelClass =
    'flex items-center gap-2 text-sm font-medium text-slate-300 mb-2'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="locale" value={locale} />

      <div>
        <label className={labelClass}>
          <User className="w-4 h-4 text-brand-cyan" />
          {t.name}
        </label>
        <input
          type="text"
          name="name"
          placeholder={t.namePlaceholder}
          required
          minLength={2}
          className={inputClass}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1.5">{errors.name[0]}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          <Mail className="w-4 h-4 text-brand-cyan" />
          {t.email}
        </label>
        <input
          type="email"
          name="email"
          placeholder={t.emailPlaceholder}
          required
          className={inputClass}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1.5">{errors.email[0]}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          <FileText className="w-4 h-4 text-brand-cyan" />
          {t.subject}
        </label>
        <input
          type="text"
          name="subject"
          placeholder={t.subjectPlaceholder}
          required
          minLength={3}
          className={inputClass}
        />
        {errors.subject && (
          <p className="text-red-400 text-xs mt-1.5">{errors.subject[0]}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>
          <MessageSquare className="w-4 h-4 text-brand-cyan" />
          {t.message}
        </label>
        <textarea
          name="message"
          placeholder={t.messagePlaceholder}
          required
          minLength={10}
          rows={6}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1.5">{errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-brand-cyan hover:bg-brand-cyan-dark text-brand-dark font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/30 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {pending ? (
          <>
            <span className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
            {t.sending}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t.send}
          </>
        )}
      </button>

      {message && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 ${
            success
              ? 'bg-green-500/10 border border-green-500/20 text-green-400'
              : 'bg-red-500/10 border border-red-500/20 text-red-400'
          }`}
        >
          {success ? (
            <CheckCircle className="w-5 h-5 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" />
          )}
          <p className="text-sm font-medium">{message}</p>
        </div>
      )}
    </form>
  )
}

