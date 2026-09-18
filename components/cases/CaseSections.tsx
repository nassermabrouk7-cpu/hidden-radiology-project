import { HiddenCase } from '@/data/cases'

function Section({ kicker, title, children, id }: { kicker: string, title: string, children: React.ReactNode, id?: string }) {
  return (
    <section id={id} className="scroll-mt-28 max-w-[980px] mx-auto px-6 lg:px-0 py-10 lg:py-14 border-t border-[#0A192F]/[0.06]">
      <div className="flex flex-col gap-2 mb-8">
        <span className="text-[11px] tracking-[0.25em] text-[#00E5FF] font-semibold">{kicker}</span>
        <h2 className="text-[26px] lg:text-[32px] font-bold tracking-tight text-[#0A192F] leading-[1.15]">{title}</h2>
      </div>
      <div className="prose prose-zinc max-w-none prose-p:leading-8 prose-p:text-[16px] prose-p:text-zinc-700">{children}</div>
    </section>
  )
}

export function PublicExplanation({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  const o = c.examOverview
  const items = [
    { k: isAr?'ما نوع الفحص؟':'What type of exam is this?', v: isAr?o.whatIs.ar:o.whatIs.en },
    { k: isAr?'ما العضو المفحوص؟':'What body part?', v: isAr?o.bodyPart.ar:o.bodyPart.en },
    { k: isAr?'لماذا يُطلب؟':'Why is it done?', v: isAr?o.whyDone.ar:o.whyDone.en },
    { k: isAr?'ماذا يُظهر؟':'What does it show?', v: isAr?o.whatShows.ar:o.whatShows.en },
    { k: isAr?'هل هناك تحضير؟':'Preparation', v: isAr?o.preparation.ar:o.preparation.en },
    { k: isAr?'هل يوجد إشعاع؟':'Radiation', v: isAr?o.radiation.ar:o.radiation.en },
    { k: isAr?'هل تُستخدم صبغة؟':'Contrast', v: isAr?o.contrast.ar:o.contrast.en },
    { k: isAr?'ماذا أتوقع؟':'What to expect', v: isAr?o.expectation.ar:o.expectation.en },
  ]
  return (
    <Section kicker={isAr?'01 — للجميع':'01 — FOR EVERYONE'} title={isAr?'ما هذا الفحص؟':'What Is This Exam?'} id="overview">
      <div className="grid md:grid-cols-2 gap-6 not-prose">
        {items.map((it,i)=>(
          <div key={i} className="rounded-2xl bg-[#F8FAFC] border border-zinc-100 p-5">
            <p className="text-[12px] tracking-widest font-semibold text-zinc-400 mb-2">{it.k}</p>
            <p className="text-[15px] leading-7 text-zinc-800">{it.v}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[13px] text-zinc-500 italic">{isAr?'هذا شرح تعليمي عام وليس نصيحة طبية شخصية.':'This is general educational information, not personal medical advice.'}</p>
    </Section>
  )
}

export function RadiographerView({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  const t = c.technicalView
  return (
    <Section kicker={isAr?'02 — للتقنيين':'02 — FOR RADIOGRAPHERS'} title={isAr?'الرؤية التقنية':'The Technical View'} id="technical">
      <div className="not-prose bg-[#0A192F] text-white rounded-[20px] p-7 lg:p-9">
        <div className="flex gap-3 mb-6"><span className="text-[#00E5FF] text-[11px] tracking-[0.3em] font-bold border border-[#00E5FF]/30 px-3 py-1 rounded-full">FOR RADIOGRAPHERS</span></div>
        <div className="grid lg:grid-cols-2 gap-8 text-[14px] leading-7">
          <div className="space-y-4">
            <p><span className="text-white/50">{isAr?'الوضعية:':'Positioning:'}</span> {isAr?t.positioningAr:t.positioningEn}</p>
            {t.projectionEn && <p><span className="text-white/50">{isAr?'الإسقاط:':'Projection:'}</span> {isAr?t.projectionAr:t.projectionEn}</p>}
            <p><span className="text-white/50">{isAr?'التقنية:':'Technique:'}</span> {isAr?t.techniqueAr:t.techniqueEn}</p>
            {t.safetyEn && <p><span className="text-[#00E5FF]">{isAr?'السلامة:':'Safety:'}</span> {isAr?t.safetyAr:t.safetyEn}</p>}
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-white/50 text-[11px] tracking-widest mb-2">{isAr?'معايير جودة الصورة':'IMAGE QUALITY CRITERIA'}</p>
              <ul className="list-disc ps-5 space-y-1 text-white/80">{(isAr?t.qualityCriteriaAr:t.qualityCriteriaEn).map((q,i)=><li key={i}>{q}</li>)}</ul>
            </div>
            {t.commonErrorsEn && (
              <div>
                <p className="text-white/50 text-[11px] tracking-widest mb-2">{isAr?'أخطاء شائعة':'COMMON ERRORS'}</p>
                <ul className="list-disc ps-5 space-y-1 text-white/60">{(isAr?t.commonErrorsAr:t.commonErrorsEn)!.map((q,i)=><li key={i}>{q}</li>)}</ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

export function LookBeforeYouRead({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <Section kicker={isAr?'03 — الملاحظة':'03 — OBSERVATION'} title={isAr?'انظر قبل أن تقرأ':'Look Before You Read'} id="observe">
      <p className="text-[18px] font-medium text-[#0A192F] mb-6">{isAr?c.observation.promptAr:c.observation.promptEn}</p>
      <div className="not-prose grid sm:grid-cols-2 gap-3">
        {(isAr?c.observation.pointsAr:c.observation.pointsEn).map((p,i)=>(
          <div key={i} className="flex gap-3 items-start rounded-xl border border-zinc-200 p-4 bg-white">
            <span className="h-7 w-7 rounded-full bg-[#0A192F] text-white flex items-center justify-center text-[12px] shrink-0">{i+1}</span>
            <span className="text-[14px] leading-6 text-zinc-700">{p}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function HiddenSign({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <Section kicker={isAr?'04 — التوقيع':'04 — SIGNATURE'} title={isAr?'العلامة الخفية':'The Hidden Sign'} id="hidden">
      <div className="not-prose rounded-[20px] border border-[#00E5FF]/20 bg-gradient-to-br from-[#F0FEFF] to-white p-7 lg:p-8">
        <h3 className="text-[18px] font-bold text-[#0A192F] mb-3">{isAr?c.hiddenSign.titleAr:c.hiddenSign.titleEn}</h3>
        <p className="text-[15px] leading-8 text-zinc-700">{isAr?c.hiddenSign.descriptionAr:c.hiddenSign.descriptionEn}</p>
        {(c.hiddenSign.revealCaptionEn) && <p className="mt-4 text-[12px] text-zinc-500 italic">{isAr?c.hiddenSign.revealCaptionAr:c.hiddenSign.revealCaptionEn}</p>}
      </div>
    </Section>
  )
}

export function WhyItMatters({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <Section kicker={isAr?'05 — الأهمية':'05 — WHY IT MATTERS'} title={isAr?'لماذا هذا مهم؟':'Why It Matters'} id="why">
      <div className="not-prose grid lg:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white border p-5"><p className="text-[11px] tracking-widest text-emerald-600 font-bold mb-2">{isAr?'للجميع':'FOR EVERYONE'}</p><p className="text-[14px] leading-7">{isAr?c.whyItMatters.everyoneAr:c.whyItMatters.everyoneEn}</p></div>
        <div className="rounded-2xl bg-[#0A192F] text-white border border-[#0A192F] p-5"><p className="text-[11px] tracking-widest text-[#00E5FF] font-bold mb-2">{isAr?'لتقنيي الأشعة':'FOR RADIOGRAPHERS'}</p><p className="text-[14px] leading-7 text-white/80">{isAr?c.whyItMatters.radiographersAr:c.whyItMatters.radiographersEn}</p></div>
        <div className="rounded-2xl bg-zinc-50 border p-5"><p className="text-[11px] tracking-widest text-zinc-500 font-bold mb-2">{isAr?'للمتقدمين':'ADVANCED'}</p><p className="text-[14px] leading-7 text-zinc-700">{isAr?(c.whyItMatters.advancedAr||''):(c.whyItMatters.advancedEn||'—')}</p></div>
      </div>
    </Section>
  )
}

export function CommonMistake({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <Section kicker={isAr?'06 — خطأ شائع':'06 — COMMON MISTAKE'} title={isAr?c.commonMistake.titleAr:c.commonMistake.titleEn} id="mistake">
      <div className="not-prose rounded-2xl bg-amber-50 border border-amber-200 p-6 flex gap-4">
        <span className="text-[22px]">⚠️</span>
        <p className="text-[15px] leading-8 text-amber-900">{isAr?c.commonMistake.textAr:c.commonMistake.textEn}</p>
      </div>
    </Section>
  )
}

export function QualitySafety({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <Section kicker={isAr?'07 — الجودة والسلامة':'07 — QUALITY & SAFETY'} title={isAr?'الجودة والسلامة':'Quality & Safety'} id="safety">
      <p className="text-[15px] leading-8 mb-4">{isAr?c.qualitySafety.textAr:c.qualitySafety.textEn}</p>
      <div className="not-prose flex flex-wrap gap-2">{c.qualitySafety.tags.map(t=><span key={t} className="px-3 py-1 rounded-full bg-zinc-100 border text-[11px] tracking-widest">{t}</span>)}</div>
    </Section>
  )
}

export function ExpertInterpretation({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <Section kicker={isAr?'08 — تفسير خبير':'08 — EXPERT INTERPRETATION'} title={isAr?'التفسير المتقدم':'Expert Interpretation'} id="expert">
      <div className="not-prose space-y-6">
        <div>
          <p className="text-[12px] tracking-widest font-bold text-zinc-400 mb-3">{isAr?'الموجودات الرئيسية':'KEY FINDINGS'}</p>
          <ul className="list-disc ps-5 space-y-2 text-[14px] leading-7">{(isAr?c.expert.keyFindingsAr:c.expert.keyFindingsEn).map((k,i)=><li key={i}>{k}</li>)}</ul>
        </div>
        <div className="rounded-2xl bg-[#F8FAFC] border p-6">
          <p className="text-[12px] tracking-widest font-bold text-zinc-400 mb-2">{isAr?'الانطباع':'IMPRESSION'}</p>
          <p className="text-[15px] leading-8 font-medium text-[#0A192F]">{isAr?c.expert.impressionAr:c.expert.impressionEn}</p>
          {(isAr?c.expert.noteAr:c.expert.noteEn) && <p className="mt-3 text-[12px] text-zinc-500 italic">{isAr?c.expert.noteAr:c.expert.noteEn}</p>}
        </div>
      </div>
    </Section>
  )
}

export function CaseTakeaway({ c, locale }: { c: HiddenCase, locale: 'ar'|'en' }) {
  const isAr = locale==='ar'
  return (
    <section className="max-w-[980px] mx-auto px-6 lg:px-0 py-14">
      <div className="rounded-[24px] bg-[#0A192F] text-white p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#00E5FF]/20 blur-3xl" />
        <p className="text-[11px] tracking-[0.3em] text-[#00E5FF] font-bold mb-4">TAKEAWAY — {isAr?'الخلاصة':'THE LESSON'}</p>
        <p className="text-[22px] lg:text-[28px] font-semibold leading-[1.25] max-w-3xl">“{isAr?c.takeaway.ar:c.takeaway.en}”</p>
        <p className="mt-6 text-white/40 text-[12px] tracking-widest">SEE BEYOND THE IMAGE — Hidden Radiology</p>
      </div>
    </section>
  )
}
