'use client'
import Link from 'next/link'
import { HiddenCase } from '@/data/cases'

export function CaseCard({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <Link href={`/${locale}/cases/${c.slug}`} className="group block rounded-[20px] overflow-hidden border border-zinc-200 bg-white hover:border-[#00E5FF]/40 hover:shadow-[0_12px_40px_rgba(0,229,255,0.12)] transition-all duration-300">
      <div className="aspect-[4/3] bg-zinc-100 overflow-hidden relative">
        <img src={c.images[0]?.src} alt={isAr?c.title.ar:c.title.en} className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-700" onError={e=>{ (e.target as HTMLImageElement).src='https://placehold.co/600x400/0A192F/00E5FF?text=Case+'+c.number }} />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur text-white text-[10px] tracking-widest">{c.modality} • {c.bodyRegion}</span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-[10px] tracking-widest border backdrop-blur ${c.difficulty==='FOUNDATION'?'bg-emerald-500/90 text-white border-emerald-400':c.difficulty==='INTERMEDIATE'?'bg-amber-500/90 text-white border-amber-400':'bg-rose-500/90 text-white border-rose-400'}`}>{c.difficulty}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[11px] tracking-[0.2em] text-zinc-400 mb-2">HIDDEN CASE {String(c.number).padStart(2,'0')}</p>
        <h3 className="text-[16px] font-bold leading-[1.3] text-[#0A192F] line-clamp-2 group-hover:text-[#00E5FF] transition">{isAr?c.title.ar:c.title.en}</h3>
        <p className="mt-2 text-[13px] leading-6 text-zinc-500 line-clamp-2">{isAr?c.hook.ar:c.hook.en}</p>
      </div>
    </Link>
  )
}

export function CaseFilters({ locale, activeModality, activeAudience, onModChange, onAudChange, modalities }: { locale: 'ar'|'en', activeModality: string, activeAudience: string, onModChange: (m:string)=>void, onAudChange: (a:string)=>void, modalities: string[] }) {
  const isAr = locale==='ar'
  const audiences = [
    { id: 'ALL', labelEn: 'Everyone', labelAr: 'الجميع' },
    { id: 'RADIOGRAPHERS', labelEn: 'Radiographers', labelAr: 'تقنيو الأشعة' },
    { id: 'TECHNICAL', labelEn: 'Technical / Quality', labelAr: 'تقني / جودة' },
    { id: 'ADVANCED', labelEn: 'Advanced', labelAr: 'متقدم' },
  ]
  return (
    <div className="flex flex-col gap-6 rounded-[20px] bg-white border p-6">
      <div>
        <p className="text-[11px] tracking-widest font-bold text-zinc-400 mb-3">{isAr?'الجمهور':'AUDIENCE'}</p>
        <div className="flex flex-wrap gap-2">
          {audiences.map(a=>(
            <button key={a.id} onClick={()=>onAudChange(a.id)} className={`px-4 py-2 rounded-full text-[13px] border transition ${activeAudience===a.id?'bg-[#0A192F] text-white border-[#0A192F]':'bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300'}`}>{isAr?a.labelAr:a.labelEn}</button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[11px] tracking-widest font-bold text-zinc-400 mb-3">{isAr?'نوع الفحص':'MODALITY'}</p>
        <div className="flex flex-wrap gap-2">
          <button onClick={()=>onModChange('ALL')} className={`px-4 py-2 rounded-full text-[13px] border ${activeModality==='ALL'?'bg-[#0A192F] text-white':'bg-zinc-50'}`}>All</button>
          {modalities.map(m=>(
            <button key={m} onClick={()=>onModChange(m)} className={`px-4 py-2 rounded-full text-[13px] border ${activeModality===m?'bg-[#00E5FF] text-[#0A192F] border-[#00E5FF]':'bg-zinc-50 text-zinc-600 border-zinc-200'}`}>{m}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CaseNavigation({ prev, next, locale }: { prev?: HiddenCase, next?: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <div className="max-w-[980px] mx-auto px-6 lg:px-0 py-12 flex flex-col gap-6">
      <div className="grid md:grid-cols-2 gap-4">
        {prev ? (
          <Link href={`/${locale}/cases/${prev.slug}`} className="rounded-2xl border p-5 hover:border-[#0A192F] transition group">
            <p className="text-[11px] tracking-widest text-zinc-400">{isAr?'السابق':'PREVIOUS CASE'}</p>
            <p className="mt-1 font-bold text-[#0A192F] group-hover:text-[#00E5FF]">Case {prev.number} — {isAr?prev.title.ar:prev.title.en}</p>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/${locale}/cases/${next.slug}`} className="rounded-2xl border p-5 hover:border-[#0A192F] transition group text-end">
            <p className="text-[11px] tracking-widest text-zinc-400">{isAr?'التالي':'NEXT CASE'}</p>
            <p className="mt-1 font-bold text-[#0A192F] group-hover:text-[#00E5FF]">Case {next.number} — {isAr?next.title.ar:next.title.en}</p>
          </Link>
        ) : <div />}
      </div>
      <Link href={`/${locale}/cases`} className="self-start px-5 py-2.5 rounded-full bg-[#0A192F] text-white text-[13px] tracking-widest hover:bg-black transition">← {isAr?'العودة إلى الحالات الخفية':'Back to Hidden Cases'}</Link>
    </div>
  )
}
