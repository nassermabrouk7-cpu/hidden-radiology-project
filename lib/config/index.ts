import { Locale } from '../types'

export const LOCALES: Locale[] = ['ar', 'en']
export const DEFAULT_LOCALE: Locale = 'ar'

export const BRAND = {
  name: 'Hidden Radiology',
  nameAr: 'Ø§Ù„Ø£Ø´Ø¹Ø© Ø§Ù„Ø®ÙÙŠØ©',
  slogan: 'See Beyond The Image',
  sloganAr: 'Ø§Ù†Ø¸Ø± Ø£Ø¨Ø¹Ø¯ Ù…Ù† Ø§Ù„ØµÙˆØ±Ø©',
  primaryColor: '#06B6D4',
  darkColor: '#0B0F19',
}

export const NAV_ITEMS = {
  ar: [
    { label: 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©', href: '/' },
    { label: 'Ø§Ù„Ù…ØªØ¬Ø±', href: '/store' },
    { label: 'Ø§Ù„Ø¯ÙˆØ±Ø§Øª', href: '/courses' },
    { label: 'Ø­Ø§Ù„Ø§Øª Ø³Ø±ÙŠØ±ÙŠØ©', href: '/cases' },
    { label: 'Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù…Ø©', href: '/quality-safety' },
    { label: 'Ø¹Ù†Ù‘Ø§', href: '/about' },
    { label: 'ØªÙˆØ§ØµÙ„', href: '/contact' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'Store', href: '/store' },
    { label: 'Courses', href: '/courses' },
    { label: 'Clinical Cases', href: '/cases' },
    { label: 'Quality & Safety', href: '/quality-safety' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

export const PAYMENT_METHODS = {
  ar: [
    { id: 'whatsapp', name: 'ÙˆØ§ØªØ³Ø§Ø¨', value: '01115440838', icon: 'MessageCircle', color: 'bg-green-500/10 text-green-400 border-green-500/20', href: 'https://wa.me/201115440838' },
    { id: 'vodafone', name: 'ÙÙˆØ¯Ø§ÙÙˆÙ† ÙƒØ§Ø´', value: '01002293344', icon: 'Smartphone', color: 'bg-red-500/10 text-red-400 border-red-500/20', href: '#' },
    { id: 'fawry', name: 'Fawry', value: '01002293344', icon: 'Fawry', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', href: '#' },
    { id: 'paypal', name: 'PayPal', value: 'PayPal', icon: 'CreditCard', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20', href: '#' },
    { id: 'gumroad', name: 'Gumroad', value: 'Gumroad', icon: 'ShoppingBag', color: 'bg-pink-500/10 text-pink-400 border-pink-500/20', href: '#' },
  ],
  en: [
    { id: 'whatsapp', name: 'WhatsApp', value: '01115440838', icon: 'MessageCircle', color: 'bg-green-500/10 text-green-400 border-green-500/20', href: 'https://wa.me/201115440838' },
    { id: 'vodafone', name: 'Vodafone Cash', value: '01002293344', icon: 'Smartphone', color: 'bg-red-500/10 text-red-400 border-red-500/20', href: '#' },
    { id: 'fawry', name: 'Fawry', value: '01002293344', icon: 'Fawry', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', href: '#' },
    { id: 'paypal', name: 'PayPal', value: 'PayPal', icon: 'CreditCard', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20', href: '#' },
    { id: 'gumroad', name: 'Gumroad', value: 'Gumroad', icon: 'ShoppingBag', color: 'bg-pink-500/10 text-pink-400 border-pink-500/20', href: '#' },
  ],
}