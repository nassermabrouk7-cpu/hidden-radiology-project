import Link from 'next/link'
import Image from 'next/image'
import { Course } from '@/lib/types'
import { Locale } from '@/lib/types'
import Badge from '@/components/ui/Badge'

interface CourseCardProps {
  course: Course
  locale: Locale
}

export default function CourseCard({ course, locale }: CourseCardProps) {
  const isAr = locale === 'ar'

  const levelLabels: Record<string, string> = {
    BEGINNER: isAr ? 'Ù…Ø¨ØªØ¯Ø¦' : 'Beginner',
    FOUNDATION: isAr ? 'Ø£Ø³Ø§Ø³ÙŠ' : 'Foundation',
    CLINICAL: isAr ? 'Ø³Ø±ÙŠØ±ÙŠ' : 'Clinical',
    PROFESSIONAL: isAr ? 'Ø§Ø­ØªØ±Ø§ÙÙŠ' : 'Professional',
  }

  const statusBadge = {
    DRAFT: { label: isAr ? 'Ù…Ø³ÙˆØ¯Ø©' : 'Draft', variant: 'gray' as const },
    COMING_SOON: { label: isAr ? 'Ù‚Ø±ÙŠØ¨Ø§Ù‹' : 'Coming Soon', variant: 'yellow' as const },
    PUBLISHED: { label: isAr ? 'Ù…ØªØ§Ø­' : 'Available', variant: 'green' as const },
  }

  return (
    <Link href={`/${locale}/courses/${course.slug}`} className="block">
      <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-cyan/30 transition-all duration-300">
        <div className="relative aspect-video bg-brand-darker overflow-hidden">
          <Image
            src={course.cover}
            alt={course.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">`r`n  <Badge variant="cyan">{levelLabels[course.level]}</Badge>`r`n</div>
          <h3 className="text-white font-bold text-lg mb-2 hover:text-brand-cyan transition-colors">
            {course.title}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-2">{course.description}</p>
          <div className="mt-4 text-slate-500 text-xs">
            {course.lessons.length} {isAr ? 'Ø¯Ø±Ø³' : 'lessons'}
          </div>
        </div>
      </div>
    </Link>
  )
}

