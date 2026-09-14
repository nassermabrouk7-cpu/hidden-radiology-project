
import { notFound } from 'next/navigation'
import Link from 'next/link'

import { arCourses } from '@/content/ar/courses'
import { enCourses } from '@/content/en/courses'
import { arProducts } from '@/content/ar/products'
import { enProducts } from '@/content/en/products'

/* =========================================================
   ROUTE CONFIG
========================================================= */

export const dynamicParams = true

/* =========================================================
   TYPES
========================================================= */

type PageProps = {
  params: Promise<{
    locale: string
    slug: string
  }>
}

/* =========================================================
   HELPERS
========================================================= */

function getCourses(locale: string) {
  return locale === 'ar' ? arCourses : enCourses
}

function getLevelLabel(
  level: string,
  isAr: boolean
) {
  if (isAr) {
    switch (level) {
      case 'BEGINNER':
        return 'مبتدئ'

      case 'CLINICAL':
        return 'سريري'

      case 'PROFESSIONAL':
        return 'مهني'

      default:
        return level
    }
  }

  switch (level) {
    case 'BEGINNER':
      return 'Beginner'

    case 'CLINICAL':
      return 'Clinical'

    case 'PROFESSIONAL':
      return 'Professional'

    default:
      return level
  }
}

function getTotalMinutes(
  lessons: Array<{
    duration: string | number
  }>
) {
  return lessons.reduce(
    (total, lesson) => {
      const match =
        String(lesson.duration).match(/\d+/)

      return (
        total +
        (match ? Number(match[0]) : 0)
      )
    },
    0
  )
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return [
    ...arCourses.map(course => ({
      locale: 'ar',
      slug: course.slug,
    })),

    ...enCourses.map(course => ({
      locale: 'en',
      slug: course.slug,
    })),
  ]
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PageProps) {
  const {
    locale,
    slug,
  } = await params

  if (
    locale !== 'ar' &&
    locale !== 'en'
  ) {
    return {}
  }

  const courses =
    getCourses(locale)

  const course =
    courses.find(
      item => item.slug === slug
    )

  if (!course) {
    return {}
  }

  return {
    title:
      course.seo?.title ??
      `${course.title} | Hidden Radiology`,

    description:
      course.seo?.description ??
      course.description,

    ...(course.seo?.canonical
      ? {
          alternates: {
            canonical:
              course.seo.canonical,
          },
        }
      : {}),
  }
}

/* =========================================================
   COURSE PAGE
========================================================= */

export default async function CoursePage({
  params,
}: PageProps) {
  const {
    locale,
    slug,
  } = await params

  /* -------------------------------------------------------
     VALIDATE LOCALE
  ------------------------------------------------------- */

  if (
    locale !== 'ar' &&
    locale !== 'en'
  ) {
    notFound()
  }

  const isAr =
    locale === 'ar'

  /* -------------------------------------------------------
     SELECT COURSES
  ------------------------------------------------------- */

  const courses =
    getCourses(locale)

  /* -------------------------------------------------------
     FIND COURSE
  ------------------------------------------------------- */

  const course =
    courses.find(
      item => item.slug === slug
    )

  if (!course) {
    notFound()
  }

  /* -------------------------------------------------------
     COURSE INFORMATION
  ------------------------------------------------------- */

  const lessonCount =
    course.lessons.length

  const totalMinutes =
    getTotalMinutes(
      course.lessons
    )

  const products =
    isAr ? arProducts : enProducts

  const companionBook =
    course.companionProductSlug
      ? products.find(
          product =>
            product.slug === course.companionProductSlug
        )
      : undefined

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main
      dir={isAr ? 'rtl' : 'ltr'}
      className="min-h-screen py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
           BACK TO COURSES
        ================================================= */}

        <Link
          href={`/${locale}/courses`}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-cyan mb-8 transition-colors"
        >
          <span aria-hidden="true">
            ←
          </span>

          <span>
            {isAr
              ? 'العودة إلى الدورات'
              : 'Back to Courses'}
          </span>
        </Link>

        {/* =================================================
           COURSE HEADER
        ================================================= */}

        <section className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* ------------------------------------------------
               COURSE COVER
            ------------------------------------------------ */}

            <div className="lg:col-span-2 bg-slate-900">

              <div className="aspect-video lg:aspect-auto lg:min-h-[360px] lg:h-full">

                <img
                  src={course.cover}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

            {/* ------------------------------------------------
               COURSE DETAILS
            ------------------------------------------------ */}

            <div className="lg:col-span-3 p-8 md:p-10">

              {/* LEVEL */}

              <div className="mb-5">

                <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                  {getLevelLabel(
                    course.level,
                    isAr
                  )}
                </span>

              </div>

              {/* TITLE */}

              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
                {course.title}
              </h1>

              {/* DESCRIPTION */}

              <p className="text-slate-300 leading-8 text-base md:text-lg mb-8">
                {course.description}
              </p>

              {/* STATS */}

              <div className="grid grid-cols-2 gap-4">

                {/* LESSON COUNT */}

                <div className="bg-slate-900/50 border border-brand-border rounded-xl p-4">

                  <p className="text-slate-500 text-sm mb-1">
                    {isAr
                      ? 'عدد الدروس'
                      : 'Lessons'}
                  </p>

                  <p className="text-white text-xl font-bold">
                    {lessonCount}
                  </p>

                </div>

                {/* TOTAL DURATION */}

                <div className="bg-slate-900/50 border border-brand-border rounded-xl p-4">

                  <p className="text-slate-500 text-sm mb-1">
                    {isAr
                      ? 'إجمالي المدة'
                      : 'Total Duration'}
                  </p>

                  <p className="text-white text-xl font-bold">
                    {totalMinutes > 0
                      ? isAr
                        ? `${totalMinutes} دقيقة`
                        : `${totalMinutes} min`
                      : '—'}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
           COMPANION BOOK
        ================================================= */}

        {companionBook && (
          <section className="mt-10 bg-brand-card border border-brand-border rounded-2xl overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-3">

              <div className="bg-slate-950 p-6 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-[220px] aspect-[3/4]">
                  <img
                    src={companionBook.cover}
                    alt={companionBook.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">

                <span className="inline-block w-fit px-3 py-1 rounded-lg text-xs font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
                  {isAr
                    ? 'الكتاب المصاحب للدورة'
                    : 'Course Companion Book'}
                </span>

                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  {isAr
                    ? 'هل تريد التعمق أكثر؟'
                    : 'Ready to go deeper?'}
                </h2>

                <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-3">
                  {companionBook.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-6">
                  {isAr
                    ? 'واصل ما تعلمته في الدورة من خلال الكتاب التعليمي المصاحب، واكتشف المزيد من العلامات والنقاط العملية.'
                    : 'Continue what you learned in this course with the companion book and discover more practical hidden signs and clinical insights.'}
                </p>

                <div className="flex flex-wrap items-center gap-3">

                  {companionBook.gumroadUrl && (
                    <a
                      href={companionBook.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-cyan text-brand-dark font-bold hover:opacity-90 transition-opacity"
                    >
                      {isAr
                        ? 'اشترِ الكتاب الآن'
                        : 'Buy the Book Now'}
                    </a>
                  )}

                  <Link
                    href={`/${locale}/products/${companionBook.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-brand-border text-white font-medium hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                  >
                    {isAr
                      ? 'عرض تفاصيل الكتاب'
                      : 'View Book Details'}
                  </Link>

                  <span className="text-brand-cyan font-bold">
                    {companionBook.price} {companionBook.currency}
                  </span>

                </div>

              </div>

            </div>

          </section>
        )}
        {/* =================================================
           LESSONS
        ================================================= */}

        <section className="mt-10">

          {/* SECTION HEADER */}

          <div className="mb-6">

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {isAr
                ? 'دروس الدورة'
                : 'Course Lessons'}
            </h2>

            <p className="text-slate-400 mt-2">
              {isAr
                ? 'اختر درسًا للبدء في التعلم.'
                : 'Choose a lesson to start learning.'}
            </p>

          </div>

          {/* LESSON LIST */}

          <div className="space-y-4">

            {course.lessons.map(
              (
                lesson,
                index
              ) => {

                const lessonHref =
                  `/${locale}/courses/${course.slug}/${lesson.slug}`

                return (
                  <Link
                    key={
                      lesson.id ??
                      lesson.slug
                    }
                    href={lessonHref}
                    className="group block"
                  >

                    <div className="bg-brand-card border border-brand-border rounded-xl p-5 md:p-6 transition-all duration-200 hover:border-brand-cyan/50 hover:bg-slate-900/40">

                      <div className="flex items-center gap-4">

                        {/* LESSON NUMBER */}

                        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">

                          <span className="text-brand-cyan font-bold">
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              '0'
                            )}
                          </span>

                        </div>

                        {/* LESSON INFORMATION */}

                        <div className="flex-1 min-w-0">

                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                            {lesson.title}
                          </h3>

                          <p className="text-sm text-slate-500 mt-1">
                            {lesson.duration}
                          </p>

                        </div>

                        {/* NAVIGATION ARROW */}

                        <div className="flex-shrink-0">

                          <span
                            className="text-slate-500 group-hover:text-brand-cyan transition-colors text-xl"
                            aria-hidden="true"
                          >
                            {isAr
                              ? '←'
                              : '→'}
                          </span>

                        </div>

                      </div>

                    </div>

                  </Link>
                )
              }
            )}

          </div>

        </section>

        {/* =================================================
           START COURSE
        ================================================= */}

        {course.lessons[0] && (
          <section className="mt-10">

            <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-2xl p-6 md:p-8">

              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {isAr
                  ? 'ابدأ التعلم الآن'
                  : 'Start Learning Now'}
              </h2>

              <p className="text-slate-300 leading-7 mb-5">
                {isAr
                  ? 'ابدأ من الدرس الأول وتابع الدروس بالترتيب.'
                  : 'Start with the first lesson and continue through the course.'}
              </p>

              <Link
                href={`/${locale}/courses/${course.slug}/${course.lessons[0].slug}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-cyan text-slate-950 font-bold hover:opacity-90 transition-opacity"
              >
                {isAr
                  ? 'ابدأ الدرس الأول'
                  : 'Start First Lesson'}
              </Link>

            </div>

          </section>
        )}

      </div>
    </main>
  )
}



