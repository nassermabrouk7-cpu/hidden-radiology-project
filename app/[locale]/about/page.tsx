import { Locale } from '@/lib/types'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Award, Heart, BookOpen, Youtube } from 'lucide-react'

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'

  const content = {
    ar: {
      title: 'عن Hidden Radiology',
      subtitle: 'من الخبرة إلى الاحتراف',
      p1: 'Hidden Radiology (الأشعة الخفية) منصة تعليمية تعكس خلاصة الممارسة والاحتراف في كافة مجالات الأشعة: X-Ray, CT, MRI, C-ARM, MAMMOGRAM, Ultrasound، و Cath Lab.',
      p2: '',
      p3: '',
      stats: [],
      cta: 'زيارة القناة'
    },
    en: {
      title: 'About Hidden Radiology',
      subtitle: 'From Experience to Content â€” A 30-Year Journey',
      p1: 'Hidden Radiology is an educational channel and platform created by an expert radiographer with 30 years of experience in X-Ray, CT, MRI, C-ARM, and MAMMOGRAM.',
      p2: 'Our goal is simple: simplify radiology for the public and provide professional content for new technicians and specialists. We believe knowledge should be accessible to everyone.',
      p3: 'We offer completely free content on YouTube, along with curated paid products for professionals seeking deeper knowledge.',
      stats: [
        { value: '30+', label: 'Years Experience' },
        { value: '6+', label: 'Professional Products' },
        { value: 'âˆž', label: 'Free Content' },
      ],
      cta: 'Visit Channel',
    },
  }

  const c = isAr ? content.ar : content.en

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-poppins">{c.title}</h1>
          <p className="text-brand-cyan text-xl font-medium">{c.subtitle}</p>
        </div>

        <div className="space-y-6 mb-16">
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-brand-cyan" />
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">{c.p1}</p>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-brand-cyan" />
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">{c.p2}</p>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-brand-cyan" />
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">{c.p3}</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {c.stats.map((stat) => (
            <Card key={stat.label} className="text-center py-8">
              <div className="text-4xl md:text-5xl font-extrabold text-brand-cyan mb-2 font-poppins">{stat.value}</div>
              <div className="text-slate-400 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-500/10 to-brand-cyan/10 border border-red-500/20 rounded-2xl p-12 text-center">
          <Youtube className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Hidden Radiology YouTube</h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            {isAr ? 'Ø§Ø´ØªØ±Ùƒ ÙÙŠ Ø§Ù„Ù‚Ù†Ø§Ø© Ù„Ù…Ø´Ø§Ù‡Ø¯Ø© Ù…Ø­ØªÙˆÙ‰ Ù…Ø¬Ø§Ù†ÙŠ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ø¹Ù† Ø¹Ø§Ù„Ù… Ø§Ù„Ø£Ø´Ø¹Ø©.' : 'Subscribe to the channel for completely free content about radiology.'}
          </p>
          <Button href="https://youtube.com/@HiddenRadiology">
            <Youtube className="w-5 h-5" />
            {c.cta}
          </Button>
        </div>
      </div>
    </div>
  )
}

