import { NextRequest, NextResponse } from 'next/server'

interface UTMParams {
  url: string
  source: string
  medium: string
  campaign: string
  content?: string
  term?: string
}

interface UTMGeneratorResponse {
  originalUrl: string
  utmUrl: string
  params: UTMParams
  preview: {
    twitter: string
    facebook: string
    linkedin: string
    email: string
  }
}

// predefined campaign templates
const CAMPAIGN_TEMPLATES = {
  ana_fahem_series: {
    source: 'auto_promo',
    medium: 'social',
    campaign: 'ana_fahem_series',
  },
  book_launch: {
    source: 'product_launch',
    medium: 'email',
    campaign: 'new_release',
  },
  social_media: {
    source: 'social_media',
    medium: 'organic',
    campaign: 'brand_awareness',
  },
  paid_ads: {
    source: 'google',
    medium: 'cpc',
    campaign: 'conversions',
  },
}

function generateUTMLink(params: UTMParams): string {
  try {
    const url = new URL(params.url)
    
    url.searchParams.set('utm_source', params.source)
    url.searchParams.set('utm_medium', params.medium)
    url.searchParams.set('utm_campaign', params.campaign)
    
    if (params.content) {
      url.searchParams.set('utm_content', params.content)
    }
    
    if (params.term) {
      url.searchParams.set('utm_term', params.term)
    }
    
    return url.toString()
  } catch (error) {
    throw new Error('Invalid URL provided')
  }
}

function generatePlatformSpecificLinks(baseParams: UTMParams): UTMGeneratorResponse['preview'] {
  return {
    twitter: generateUTMLink({
      ...baseParams,
      content: `${baseParams.content || 'default'}_twitter`,
    }),
    facebook: generateUTMLink({
      ...baseParams,
      content: `${baseParams.content || 'default'}_facebook`,
    }),
    linkedin: generateUTMLink({
      ...baseParams,
      content: `${baseParams.content || 'default'}_linkedin`,
    }),
    email: generateUTMLink({
      ...baseParams,
      source: 'newsletter',
      medium: 'email',
    }),
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Support both direct params and template usage
    let utmParams: UTMParams
    
    if (body.template && CAMPAIGN_TEMPLATES[body.template as keyof typeof CAMPAIGN_TEMPLATES]) {
      const template = CAMPAIGN_TEMPLATES[body.template as keyof typeof CAMPAIGN_TEMPLATES]
      utmParams = {
        url: body.url,
        ...template,
        content: body.content,
        term: body.term,
      }
    } else {
      utmParams = {
        url: body.url,
        source: body.source,
        medium: body.medium,
        campaign: body.campaign,
        content: body.content,
        term: body.term,
      }
    }
    
    // Validate required fields
    if (!utmParams.url || !utmParams.source || !utmParams.medium || !utmParams.campaign) {
      return NextResponse.json(
        { error: 'Missing required UTM parameters (url, source, medium, campaign)' },
        { status: 400 }
      )
    }
    
    // Generate UTM link
    const utmUrl = generateUTMLink(utmParams)
    
    // Generate platform-specific variations
    const preview = generatePlatformSpecificLinks(utmParams)
    
    return NextResponse.json({
      originalUrl: utmParams.url,
      utmUrl,
      params: utmParams,
      preview,
    })
  } catch (error) {
    console.error('UTM generator error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')
  const template = searchParams.get('template')
  
  if (!url) {
    return NextResponse.json({
      message: 'UTM Generator API',
      endpoint: '/api/utm-generator',
      method: 'POST',
      templates: Object.keys(CAMPAIGN_TEMPLATES),
      parameters: {
        url: 'string (required)',
        source: 'string (required unless using template)',
        medium: 'string (required unless using template)',
        campaign: 'string (required unless using template)',
        content: 'string (optional)',
        term: 'string (optional)',
        template: 'string (optional - use predefined template)',
      },
      example: {
        url: 'https://hiddenradiology.com/ar/products/ana-fahim-cxr',
        template: 'ana_fahem_series',
        content: 'chest_xray_promo',
      },
    })
  }
  
  // Quick GET-based generation for simple use cases
  try {
    const utmParams: UTMParams = {
      url,
      source: searchParams.get('source') || 'website',
      medium: searchParams.get('medium') || 'link',
      campaign: searchParams.get('campaign') || 'general',
      content: searchParams.get('content') || undefined,
      term: searchParams.get('term') || undefined,
    }
    
    const utmUrl = generateUTMLink(utmParams)
    
    return NextResponse.json({
      originalUrl: url,
      utmUrl,
      params: utmParams,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid URL or parameters' },
      { status: 400 }
    )
  }
}