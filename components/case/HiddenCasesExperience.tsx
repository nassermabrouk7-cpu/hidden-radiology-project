'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ClinicalCase } from '@/lib/types'

interface HiddenCasesExperienceProps {
  cases: ClinicalCase[]
  locale: 'ar' | 'en'
}

export default function HiddenCasesExperience({
  cases,
  locale,
}: HiddenCasesExperienceProps) {
  const ar = locale === 'ar'
  const featured = cases[0]

  if (!featured) return null

  return (
    <main
      dir={ar ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0A192F] text-white"
    >
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00E5FF]">
            {ar ? 'الحالات الخفية' : 'HIDDEN CASES'}
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {ar ? 'انظر أبعد من الصورة' : 'See Beyond The Image'}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {ar
                ? 'صور حقيقية، تفاصيل خفية، وطريقة مختلفة للتفكير في الأشعة.'
                : 'Real images, hidden details, and a different way to think about radiology.'}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            {/* FEATURED CASE */}
            <Link
              href={`/${locale}/cases/${featured.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF]">
                    {ar ? 'حالة مميزة' : 'FEATURED INSIGHT'}
                  </span>

                  <h2 className="mt-3 text-2xl font-bold md:text-4xl">
                    {featured.title}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
                    {featured.clinicalContext}
                  </p>
                </div>
              </div>
            </Link>

            {/* PHILOSOPHY */}
            <div className="flex flex-col justify-between rounded-3xl border border-[#00E5FF]/20 bg-slate-950/60 p-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF]">
                  THE IDEA
                </span>

                <h2 className="mt-5 text-2xl font-bold leading-tight">
                  {ar
                    ? 'الصورة ليست النهاية. إنها بداية القصة.'
                    : 'The image is not the answer. It is the beginning of the story.'}
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  {ar
                    ? 'كل حالة تبحث عن شيء قد يفوتك، أو سؤال يستحق التفكير، أو درس يستحق أن تتذكره.'
                    : 'Every case looks for something easy to miss, a question worth asking, or a lesson worth remembering.'}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                {[
                  ar ? 'تفصيلة خفية' : 'Hidden Detail',
                  ar ? 'فخ تقني' : 'Technical Trap',
                  ar ? 'فكر مرة أخرى' : 'Think Twice',
                  ar ? 'زاوية تعليمية' : 'Teaching Insight',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 px-4 py-3 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE GRID */}
      <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF]">
              {ar ? 'اكتشف' : 'DISCOVER'}
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              {ar ? 'حالات تستحق نظرة ثانية' : 'Cases Worth A Second Look'}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <Link
                key={item.id}
                href={`/${locale}/cases/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />

                  <span className="absolute left-4 top-4 rounded-full border border-[#00E5FF]/30 bg-[#0A192F]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#00E5FF]">
                    {item.modality}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-[#00E5FF]">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                    {item.clinicalContext}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-[#00E5FF]">
                    {ar ? 'انظر ما وراء الصورة ←' : 'See beyond the image →'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MODES */}
      <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF]">
              {ar ? 'أكثر من تشخيص' : 'MORE THAN A DIAGNOSIS'}
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              {ar
                ? 'الحالة يمكن أن تُرى من أكثر من زاوية.'
                : 'One case can be seen from more than one angle.'}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {(ar
              ? [
                  ['TECHNICAL', 'ماذا يجب أن يلاحظ فني الأشعة؟'],
                  ['TEACHING', 'كيف يمكن استخدام الحالة في التعليم؟'],
                  ['RESEARCH', 'ما السؤال الذي يمكن أن تفتحه؟'],
                ]
              : [
                  ['TECHNICAL', 'What should the radiographer notice?'],
                  ['TEACHING', 'How can a lecturer use it?'],
                  ['RESEARCH', 'What question could it open?'],
                ]
            ).map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-[#00E5FF]">
                  {title}
                </p>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
