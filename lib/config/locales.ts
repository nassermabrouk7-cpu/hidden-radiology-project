export const LOCALES = ['ar', 'en'] as const
export const DEFAULT_LOCALE = 'ar' as const
export type Locale = typeof LOCALES[number]
