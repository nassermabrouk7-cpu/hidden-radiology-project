import { casesData } from '@/data/cases'
import { CaseCard, CaseFilters } from '@/data/cases'
import { useState, useMemo } from 'react'

export default function CasesLanding({ locale }: { locale: 'ar'|'en' }) {
  // client wrapper
  return <CasesClient locale={locale} />
}

function CasesClient({ locale }: { locale: 'ar'|'en' }) {
  const [mod, setMod] = useState('ALL')
  const [aud, setAud] = useState('ALL')
  const modalities = useMemo(()=> Array.from '@/data/cases'
  
  const filtered = casesData.filter(c=>{
    const modOk = mod==='ALL' || c.modality===mod
    const audOk = aud==='ALL' || c.audience.includes(aud as any)
    return modOk && audOk
  })

  const isAr = locale==='ar'
  return (
    <div className="min-h-screen bg-[#FCFCFD]">
      <header className="bg-[#0A192F] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <p className="text-[11px] tracking-[0.35em] text-[#00E5FF] mb-4">HIDDEN RADIOLOGY â€¢ CASES</p>
          <h1 className="text-[36px] lg:text-[56px] font-bold leading-[0.95] tracking-tight max-w-3xl">
            {isAr ? 'ØªØ¹Ù„Ù‘Ù… ÙƒÙŠÙ ØªÙ†Ø¸Ø± Ø¥Ù„Ù‰ Ø§Ù„ØµÙˆØ±Ø©' : 'Learn how to look at the image'}
          </h1>
          <p className="mt-6 text-[17px] leading-8 text-white/60 max-w-2xl">
            {isAr ? 'Ø­Ø§Ù„Ø§Øª ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ù…ØµÙ…Ù…Ø© Ø¨Ø«Ù„Ø§Ø« Ù…Ø³ØªÙˆÙŠØ§Øª: ÙÙ‡Ù… Ø¹Ø§Ù… Ù„Ù„Ø¬Ù…ÙŠØ¹ØŒ Ø±Ø¤ÙŠØ© ØªÙ‚Ù†ÙŠØ© Ù„ØªÙ‚Ù†ÙŠÙŠ Ø§Ù„Ø£Ø´Ø¹Ø©ØŒ ÙˆØªÙØ³ÙŠØ± Ù…ØªÙ‚Ø¯Ù… Ù„Ù„Ù…ØªØ¹Ù„Ù…ÙŠÙ† Ø§Ù„Ù…ØªÙ‚Ø¯Ù…ÙŠÙ†.' : 'Educational cases designed in three layers: public understanding, technical view for radiographers, and advanced interpretation.'}
          </p>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 lg:py-10 grid lg:grid-cols-[320px_1fr] gap-8">
        <div className="lg:sticky lg:top-8 self-start">
          <CaseFilters locale={locale} activeModality={mod} activeAudience={aud} onModChange={setMod} onAudChange={setAud} modalities={modalities} />
          <div className="mt-6 rounded-2xl bg-[#0A192F] text-white p-5">
            <p className="text-[12px] tracking-widest text-[#00E5FF]">PHILOSOPHY</p>
            <p className="mt-2 text-[15px] leading-7">See â†’ Understand â†’ Observe â†’ Learn â†’ Apply</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c=><CaseCard key={c.slug} c={c} locale={locale} />)}
        </div>
      </div>
    </div>
  )
}




