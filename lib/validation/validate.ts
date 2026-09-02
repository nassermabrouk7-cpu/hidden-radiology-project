import { arProducts } from '../../content/ar/products'
import { enProducts } from '../../content/en/products'
import { arCourses } from '../../content/ar/courses'
import { enCourses } from '../../content/en/courses'
import { arCases } from '../../content/ar/cases'
import { enCases } from '../../content/en/cases'
import { validateAll } from './index'

console.log('🔍 Running validation...\n')

try {
  validateAll(arProducts, arCourses, arCases, 'ar')
  validateAll(enProducts, enCourses, enCases, 'en')
  console.log('\n✅ All validations passed!')
  process.exit(0)
} catch (error) {
  if (error instanceof Error) {
    console.error('\n❌ Validation failed:', error.message)
  }
  process.exit(1)
}
