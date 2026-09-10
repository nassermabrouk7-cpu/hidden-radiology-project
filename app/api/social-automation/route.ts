import { NextRequest, NextResponse } from 'next/server'

// Social media platform configurations
const SOCIAL_PLATFORMS = {
  twitter: {
    name: 'X/Twitter',
    apiEndpoint: 'https://api.twitter.com/2/tweets',
    maxLength: 280,
  },
  facebook: {
    name: 'Facebook',
    apiEndpoint: 'https://graph.facebook.com/v18.0/me/feed',
    maxLength: 63206,
  },
  linkedin: {
    name: 'LinkedIn',
    apiEndpoint: 'https://api.linkedin.com/v2/ugcPosts',
    maxLength: 3000,
  },
  telegram: {
    name: 'Telegram',
    apiEndpoint: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    maxLength: 4096,
  },
} as const

type Platform = keyof typeof SOCIAL_PLATFORMS

interface SocialPost {
  platform: Platform
  content: string
  imageUrl?: string
  link?: string
}

interface AutomationTrigger {
  type: 'new_release' | 'sales_milestone' | 'manual'
  productId: string
  productName: string
  milestone?: number
  locale: 'ar' | 'en'
}

// UTM parameter generator
function generateUTMLink(
  baseUrl: string,
  source: string,
  medium: string,
  campaign: string,
  content?: string
): string {
  const url = new URL(baseUrl)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', medium)
  url.searchParams.set('utm_campaign', campaign)
  if (content) {
    url.searchParams.set('utm_content', content)
  }
  return url.toString()
}

// Post content generator based on locale and trigger type
function generatePostContent(
  trigger: AutomationTrigger,
  platform: Platform
): string {
  const { type, productName, milestone, locale } = trigger
  const isAr = locale === 'ar'
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hiddenradiology.com'
  const productSlug = productName.toLowerCase().replace(/\s+/g, '-')
  const utmLink = generateUTMLink(
    `${baseUrl}/${locale}/products/${productSlug}`,
    'auto_promo',
    'social',
    type === 'new_release' ? 'book_launch' : 'sales_milestone',
    platform
  )

  if (type === 'new_release') {
    if (isAr) {
      return `🎉 إصدار جديد: ${productName}

انضم إلينا في رحلة تعلم الأشعة الطبية مع أحدث إصداراتنا.

📚 احصل على نسختك الآن: ${utmLink}

#الأشعة_الخفية #تعليم_طبي #radiology`
    } else {
      return `🎉 New Release: ${productName}

Join us on a journey of learning medical imaging with our latest releases.

📚 Get your copy now: ${utmLink}

#HiddenRadiology #MedicalEducation #radiology`
    }
  } else if (type === 'sales_milestone') {
    const milestoneText = isAr ? `وصلنا إلى ${milestone} نسخة مباعة!` : `We've reached ${milestone} copies sold!`
    if (isAr) {
      return `🏆 ${milestoneText}

شكراً لثقتكم! ${productName} يستمر في إلهام المتعلمين حول العالم.

📚 انضم إلى الناجحين: ${utmLink}

#الأشعة_الخفية #إنجاز #radiology`
    } else {
      return `🏆 ${milestoneText}

Thank you for your trust! ${productName} continues to inspire learners worldwide.

📚 Join the successful ones: ${utmLink}

#HiddenRadiology #Achievement #radiology`
    }
  }

  return isAr 
    ? `اكتشف المزيد مع ${productName}: ${utmLink}`
    : `Discover more with ${productName}: ${utmLink}`
}

// Platform-specific post formatter
function formatPostForPlatform(content: string, platform: Platform): string {
  const config = SOCIAL_PLATFORMS[platform]
  
  // Truncate if exceeds platform limit
  if (content.length > config.maxLength) {
    return content.substring(0, config.maxLength - 3) + '...'
  }
  
  return content
}

// Verify webhook signature (for security)
function verifyWebhookSignature(request: NextRequest): boolean {
  const signature = request.headers.get('x-webhook-signature')
  const secret = process.env.WEBHOOK_SECRET
  
  if (!signature || !secret) {
    return false
  }
  
  // In production, implement proper HMAC verification
  // For now, basic check
  return signature === secret
}

// Main POST handler for social automation
export async function POST(request: NextRequest) {
  try {
    // Verify webhook signature
    if (!verifyWebhookSignature(request)) {
      return NextResponse.json(
        { error: 'Invalid webhook signature' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const trigger: AutomationTrigger = body.trigger
    
    // Validate trigger data
    if (!trigger || !trigger.type || !trigger.productId || !trigger.productName) {
      return NextResponse.json(
        { error: 'Invalid trigger data' },
        { status: 400 }
      )
    }

    // Determine which platforms to post to
    const platforms: Platform[] = body.platforms || ['twitter', 'facebook', 'linkedin', 'telegram']
    
    const results: Record<string, { success: boolean; error?: string; postUrl?: string }> = {}

    // Process each platform
    for (const platform of platforms) {
      try {
        const content = generatePostContent(trigger, platform)
        const formattedContent = formatPostForPlatform(content, platform)
        
        // In production, make actual API calls to social platforms
        // For now, simulate the response
        console.log(`[${SOCIAL_PLATFORMS[platform].name}] Post:`, formattedContent)
        
        results[platform] = {
          success: true,
          // postUrl would be the actual post URL from the API response
        }
      } catch (error) {
        console.error(`Error posting to ${SOCIAL_PLATFORMS[platform].name}:`, error)
        results[platform] = {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    }

    // Log successful automation
    console.log('Social automation completed:', {
      trigger,
      platforms,
      results,
    })

    return NextResponse.json({
      success: true,
      message: 'Social automation processed',
      trigger,
      results,
    })
  } catch (error) {
    console.error('Social automation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json({
    message: 'Social automation endpoint is active',
    endpoint: '/api/social-automation',
    method: 'POST',
    platforms: Object.keys(SOCIAL_PLATFORMS),
    triggerTypes: ['new_release', 'sales_milestone', 'manual'],
  })
}