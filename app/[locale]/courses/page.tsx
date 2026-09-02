import { Locale } from '@/lib/types'
import { arCourses } from '@/content/ar/courses'
import { enCourses } from '@/content/en/courses'
import CourseCard from '@/components/course/CourseCard'

export default function CoursesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale
  const isAr = locale === 'ar'
  const courses = isAr ? arCourses : enCourses
  const visible = courses.filter(
    c => c.status === 'PUBLISHED' || c.status === 'COMING_SOON'
  )

  return (
    <main className="min-h-screen py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {isAr ? 'الدورات التعليمية' : 'Courses'}
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {isAr
              ? 'مسارات تعليمية منظمة من المبتدئ إلى الاحتراف'
              : 'Structured learning paths from beginner to professional'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {visible.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
