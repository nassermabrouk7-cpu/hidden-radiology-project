import { Product, Course, ClinicalCase, Locale } from '../types'

export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

export function validateProduct(product: Product): void {
  if (!product.sku) throw new ValidationError(`Product ${product.id}: missing SKU`)
  if (!product.language) throw new ValidationError(`Product ${product.id}: missing language`)
  if (!product.slug) throw new ValidationError(`Product ${product.id}: missing slug`)
  if (!product.title) throw new ValidationError(`Product ${product.id}: missing title`)
  if (product.status === 'PUBLISHED' && !product.gumroadUrl) {
    throw new ValidationError(`Product ${product.id}: PUBLISHED product missing Gumroad URL`)
  }
  if (product.status === 'COMING_SOON' && product.gumroadUrl) {
    throw new ValidationError(`Product ${product.id}: COMING_SOON product should not have Gumroad URL`)
  }
  if (!product.seo.title) throw new ValidationError(`Product ${product.id}: missing SEO title`)
  if (!product.seo.description) throw new ValidationError(`Product ${product.id}: missing SEO description`)
}

export function validateCourse(course: Course): void {
  if (!course.sku) throw new ValidationError(`Course ${course.id}: missing SKU`)
  if (!course.language) throw new ValidationError(`Course ${course.id}: missing language`)
  if (!course.slug) throw new ValidationError(`Course ${course.id}: missing slug`)
}

export function validateCase(c: ClinicalCase): void {
  if (!c.language) throw new ValidationError(`Case ${c.id}: missing language`)
  if (!c.slug) throw new ValidationError(`Case ${c.id}: missing slug`)
  if (!c.image) throw new ValidationError(`Case ${c.id}: missing image`)
}

export function validateNoCrossLanguage(items: Array<Product | Course | ClinicalCase>, expectedLang: Locale): void {
  for (const item of items) {
    if (item.language !== expectedLang) {
      throw new ValidationError(
        `${item.id}: language mismatch. Expected ${expectedLang}, found ${item.language}`
      )
    }
  }
}

export function validateNoDuplicateIds(items: Array<{ id: string }>): void {
  const seen = new Set<string>()
  for (const item of items) {
    if (seen.has(item.id)) {
      throw new ValidationError(`Duplicate ID found: ${item.id}`)
    }
    seen.add(item.id)
  }
}

export function validateAll(products: Product[], courses: Course[], cases: ClinicalCase[], locale: Locale): void {
  // Validate individual items
  for (const p of products) validateProduct(p)
  for (const c of courses) validateCourse(c)
  for (const c of cases) validateCase(c)

  // Validate no cross-language contamination
  validateNoCrossLanguage(products, locale)
  validateNoCrossLanguage(courses, locale)
  validateNoCrossLanguage(cases, locale)

  // Validate no duplicate IDs
  validateNoDuplicateIds([...products, ...courses, ...cases])

  console.log(`✓ Validation passed for ${locale.toUpperCase()}`)
}
