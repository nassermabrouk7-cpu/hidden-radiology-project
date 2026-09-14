import Link from 'next/link'
import { arProducts } from '@/content/ar/products'
import { enProducts } from '@/content/en/products'
import { Award, BookOpen, Heart, ArrowRight, ArrowLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import GlowingLogo from '@/components/layout/GlowingLogo'

export default async function HomePage({ params }: { params: any }) {
  const p = params?.locale ? params : await params
  const locale = p.locale as string
  const isAr = locale === 'ar'
  const Arrow = isAr ? ArrowLeft : ArrowRight

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-brand-dark">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="text-center max-w-3xl mx-auto -translate-y-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-6 -translate-y-2">
              <Award className="w-4 h-4" />
              {isAr ? 'أكثر من 30 عامًا من الخبرة' : '30+ Years of Experience'}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Hidden Radiology
            </h1>

            <p className="text-2xl md:text-3xl text-brand-cyan font-bold mb-6">
              {isAr ? 'انظر أبعد من الصورة' : 'See Beyond The Image'}
            </p>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {isAr
                ? 'محتوى تعليمي احترافي في الأشعة — مبسط للجمهور ومتخصص لفنيي الأشعة.'
                : 'Professional educational content in radiology — simplified for public and specialized for technicians.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/store`}>
                <Button className="text-lg">
                  {isAr ? 'تصفح المتجر' : 'Browse Store'}
                  <Arrow className="w-5 h-5" />
                </Button>
              </Link>

              <Link href={`/${locale}/about`}>
                <Button variant="secondary" className="text-lg">
                  {isAr ? 'من نحن' : 'About Us'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-brand-border bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            {isAr ? 'لماذا Hidden Radiology؟' : 'Why Hidden Radiology?'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-brand-cyan" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {isAr ? 'أكثر من 30 عامًا' : '30+ Years Experience'}
              </h3>
              <p className="text-slate-400 text-sm">
                {isAr ? 'خبرة عملية واسعة' : 'Expert radiographer'}
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-brand-cyan" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {isAr ? 'محتوى احترافي' : 'Professional Content'}
              </h3>
              <p className="text-slate-400 text-sm">
                {isAr ? 'محتوى مبني على معايير الجودة العالمية' : 'Built on global quality standards'}
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-brand-cyan" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {isAr ? 'أسعار مناسبة' : 'Affordable Pricing'}
              </h3>
              <p className="text-slate-400 text-sm">
                {isAr ? 'محتوى مجاني ومدفوع بأسعار مناسبة' : 'Free and paid content'}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}







