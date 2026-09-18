'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const MODALITIES = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'XRAY', ar: 'الأشعة العادية', en: 'X-Ray' },
  { id: 'CT', ar: 'المقطعية', en: 'CT' },
  { id: 'MRI', ar: 'الرنين', en: 'MRI' },
  { id: 'CATH', ar: 'القسطرة', en: 'Cath Lab' },
  { id: 'C_ARM', ar: 'السي آرم', en: 'C-Arm' },
  { id: 'MAMMOGRAM', ar: 'الماموجرام', en: 'Mammogram' },
  { id: 'US', ar: 'السونار', en: 'Ultrasound' },
] as const

export default function HiddenCasesExperience({ cases, locale }: { cases: any[], locale: 'ar'|'en' }) {
  const [active, setActive] = useState('all')
  const ar = locale === 'ar'

  const filtered = active === 'all'? cases : cases.filter(c => {
    const m = (c.modality || '').toUpperCase().replace(/-/g,'_').replace(/\s+/g,'_')
    if (active === 'XRAY') return m.includes('XRAY') || m.includes('XR') || m.includes('عادية') || m === 'X_RAY'
    if (active === 'CT') return m.includes('CT') &&!m.includes('CATH')
    if (active === 'MRI') return m.includes('MRI') || m.includes('MR')
    if (active === 'CATH') return m.includes('CATH') &&!m.includes('C_ARM')
    if (active === 'C_ARM') return m.includes('C_ARM') || m === 'CARM' || m.includes('FLUORO') &&!m.includes('CATH')
    if (active === 'MAMMOGRAM') return m.includes('MAMMO')
    if (active === 'US') return m.includes('US') || m.includes('ULTRA') || m.includes('SONAR')
    return m.includes(active)
  })

  if (!cases || cases.length === 0) return <div className="py-20 text-center text-slate-500">لا توجد حالات</div>

  return (
    <main dir={ar?'rtl':'ltr'} className="min-h-screen bg-[#0A192F] text-white">
      {/* العنوان */}
      <section className="px-6 pt-16 pb-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-[#00E5FF] text-xs tracking-[0.3em] mb-3 font-bold">الحالات السريرية</p>
          <h1 className="text-4xl md:text-5xl font-black">{ar? 'حالات الأشعة الخفية' : 'Hidden Radiology Cases'}</h1>
        </div>
      </section>

      {/* الـ 8 زراير الرئيسية - بالترتيب اللي طلبته */}
      <section className="px-6 md:px-10 pb-6 sticky top-0 z-20 bg-[#0A192F]/95 backdrop-blur border-y border-white/10">
        <div className="mx-auto max-w-7xl py-4">
          <div className="flex flex-wrap gap-2.5">
            {MODALITIES.map(mod => (
              <button
                key={mod.id}
                onClick={()=>setActive(mod.id)}
                className={`px-5 py-2.5 rounded-full text- md:text-sm font-bold border transition-all ${
                  active===mod.id
                   ? 'bg-[#00E5FF] text-[#0A192F] border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105'
                    : 'bg-white/[0.06] text-slate-200 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {ar?mod.ar:mod.en}
              </button>
            ))}
          </div>
          <div className="mt-3 text-xs text-slate-500">
            {filtered.length} حالة • {MODALITIES.find(m=>m.id===active)?.ar}
          </div>
        </div>
      </section>

      {/* Grid الحالات */}
      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item:any)=>(
              <Link key={item.id} href={`/${locale}/cases/${item.slug}`} className="group rounded-2xl overflow-hidden border border-white/10 bg-slate-950 hover:border-[#00E5FF]/50 transition duration-300 hover:-translate-y-1">
                <div className="relative aspect-[16/10] bg-slate-900">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition duration-700" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#0A192F]/90 backdrop-blur text-[#00E5FF] text- px-3 py-1 rounded-full border border-[#00E5FF]/30 font-bold tracking-wider">
                    {item.modality}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg leading-tight group-hover:text-[#00E5FF] transition">{item.title}</h3>
                  <p className="text-sm text-slate-400 mt-2 line-clamp-2 leading-6">{item.clinicalContext}</p>
                  <div className="mt-4 text-xs font-bold text-[#00E5FF]">{ar?'شوف التفاصيل →':'See details →'}</div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length===0 && (
            <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl">
              <p className="text-slate-400">لا توجد حالات في قسم {MODALITIES.find(m=>m.id===active)?.ar} حالياً</p>
              <p className="text-xs text-slate-600 mt-2">تأكد ان الـ modality في content/ar/cases.ts = {active}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}