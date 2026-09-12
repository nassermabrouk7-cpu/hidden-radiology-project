'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { arProducts } from '@/content/ar/products'
import { enProducts } from '@/content/en/products'
import { Award, BookOpen, Heart, ArrowRight, ArrowLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import BookSeriesSection from '@/components/home/BookSeriesSection'
import FallbackImage from '@/components/ui/FallbackImage'
import GlowingLogo from '@/components/layout/GlowingLogo'

export default function HomePage() {
  const params = useParams()
  const locale = (params?.locale as string) || 'ar'
  const isAr = locale === 'ar'
  const products = isAr? arProducts : enProducts
  const featured = products.filter(p => p.status === 'PUBLISHED').slice(0, 3)
  const Arrow = isAr? ArrowLeft : ArrowRight
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (productId: string) => {
    setImageErrors(prev => new Set(prev).add(productId))
  }

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-brand-dark">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w- h- bg-brand-cyan/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-3xl mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 hidden lg:block">
              <GlowingLogo size="xl" className="opacity-30" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-6 backdrop-blur-sm">
              <Award className="w-4 h-4" />
              {isAr? '30 عاماً من الخبرة' : '30+ Years of Experience'}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 font-poppins tracking-tight">
              Hidden Radiology
            </h1>
            <p className="text-2xl md:text-3xl text-brand-cyan font-bold mb-6">
              {isAr? 'الأشعة الخفية' : 'See Beyond The Image'}
            </p>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {isAr
               ? 'محتوى تعليمي احترافي في عالم الأشعة — مبسّط للعامة ومتخصص للفنيين. 30 عاماً من الخبرة في X-Ray، CT، MRI، C-ARM، و MAMMOGRAM.'
                : 'Professional educational content in the world of radiology — simplified for the public and specialized for technicians. 30 years of experience in X-Ray, CT, MRI, C-ARM, and MAMMOGRAM.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={//store}>
                <Button className="text-lg">
                  {isAr? 'تصفّح المتجر' : 'Browse Store'}
                  <Arrow className="w-5 h-5" />
                </Button>
              </Link>
              <Link href={//about}>
                <Button variant="secondary" className="text-lg">
                  {isAr? 'تعرّف علينا' : 'About Us'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 border-y border-brand-border bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            {isAr? 'لماذا Hidden Radiology؟' : 'Why Hidden Radiology?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: isAr? 'خبرة 30 عاماً' : '30+ Years Experience', desc: isAr? 'فني أشعة خبير ومدرب معتمد' : 'Expert radiographer and certified trainer' },
              { icon: BookOpen, title: isAr? 'محتوى احترافي' : 'Professional Content', desc: isAr? 'مبني على معايير الجودة العالمية' : 'Built on global quality standards' },
              { icon: Heart, title: isAr? 'سعر مناسب' : 'Affordable Pricing', desc: isAr? 'محتوى مجاني ومدفوع بأسعار رمزية' : 'Free and paid content at fair prices' },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-brand-cyan" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
