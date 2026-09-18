'use client'
import { HiddenCase } from '@/data/cases'

export default function CaseHero({ c, locale }: { c: HiddenCase, locale: 'ar' | 'en' }) {
  const isAr = locale === 'ar'
  return (
    <header className="relative overflow-hidden bg-[#0A192F] text-white">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#00E5FF]/30 to-transparent" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20 flex flex-col gap-6">
        <div className="flex flex-wrap gap-3 text-[11px] tracking-[0.2em] font-medium">
          <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5">HIDDEN CASE {String(c.number).padStart(2,'0')}</span>
          <span className="px-3 py-1 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]">{c.modality} • {c.bodyRegion}</span>
          <span className={`px-3 py-1 rounded-full border ${c.difficulty==='FOUNDATION'?'border-emerald-400/30 text-emerald-300':c.difficulty==='INTERMEDIATE'?'border-amber-400/30 text-amber-300':'border-rose-400/30 text-rose-300'} bg-white/5`}>{c.difficulty}</span>
        </div>
        <h1 className="text-[28px] lg:text-[44px] font-[700] leading-[1.1] tracking-tight max-w-3xl">
          {isAr ? c.title.ar : c.title.en}
        </h1>
        <p className="text-[18px] lg:text-[22px] text-white/70 max-w-2xl font-light">
          {isAr ? c.challenge.ar : c.challenge.en}
        </p>
        <div className="mt-2 h-px w-full bg-gradient-to-r from-[#00E5FF]/60 via-white/10 to-transparent" />
      </div>
    </header>
  )
}
