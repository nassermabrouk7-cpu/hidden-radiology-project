'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  subject: z.string().min(3, 'Subject is too short'),
  message: z.string().min(10, 'Message is too short'),
  locale: z.enum(['ar', 'en']),
})

export type ContactFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
    locale: formData.get('locale') as 'ar' | 'en',
  }

  const validated = contactSchema.safeParse(raw)

  if (!validated.success) {
    const errors: Record<string, string[]> = {}
    for (const issue of validated.error.issues) {
      const key = issue.path[0] as string
      if (!errors[key]) errors[key] = []
      errors[key].push(issue.message)
    }
    return {
      success: false,
      message: raw.locale === 'ar' ? 'يرجى تصحيح الأخطاء أدناه' : 'Please fix the errors below',
      errors,
    }
  }

  // TODO: Integrate with Resend, SendGrid, or nodemailer here
  // Example with Resend:
  // import { Resend } from 'resend'
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({...})

  console.log('Contact form submission:', validated.data)

  return {
    success: true,
    message: raw.locale === 'ar'
      ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
      : 'Your message has been sent successfully! We will contact you soon.',
  }
}
