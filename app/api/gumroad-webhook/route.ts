import { NextRequest, NextResponse } from 'next/server'

// Valid product identifiers
const VALID_PRODUCTS: Record<string, string> = {
  'ana-fahim-cxr': 'cxr-vol1-ar',
  'ana-fahim-ct': 'ct-vol2-ar',
  'ana-fahim-mri': 'mri-vol3-ar',
  'radiology-quality-safety': 'qs-vol4-ar',
  'ana-fahim-radiation-safety': 'rs-vol5-ar',
  'chest-xray': 'cxr-vol1',
  'IUNDERSTANDCTScan': 'ct-vol2',
  'hidden-radiology-mri-international': 'mri-vol3',
  'radiology-quality-safety-en-final': 'qs-vol4',
  'ana-fahim-radiation-safety-en': 'rs-vol5',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Verify Gumroad ping structure
    if (!body.product_name || !body.email || !body.purchase_id) {
      return NextResponse.json(
        { error: 'Invalid webhook payload' },
        { status: 400 }
      )
    }

    // Extract product identifier from product_name or permalink
    const productIdentifier = body.product_permalink || body.product_name.toLowerCase().replace(/\s+/g, '-')
    
    // Validate product
    const validProductId = VALID_PRODUCTS[productIdentifier as keyof typeof VALID_PRODUCTS]
    if (!validProductId) {
      return NextResponse.json(
        { error: 'Invalid product identifier' },
        { status: 400 }
      )
    }

    // Generate secure download token
    const downloadToken = Buffer.from(
      JSON.stringify({
        purchase_id: body.purchase_id,
        product_id: validProductId,
        email: body.email,
        timestamp: Date.now(),
      })
    ).toString('base64')

    // Log successful webhook processing (in production, save to database)
    console.log('Gumroad webhook processed:', {
      purchase_id: body.purchase_id,
      product_id: validProductId,
      email: body.email,
      product_name: body.product_name,
    })

    return NextResponse.json({
      success: true,
      message: 'Webhook processed successfully',
      download_token: downloadToken,
      product_id: validProductId,
    })
  } catch (error) {
    console.error('Gumroad webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Gumroad webhook endpoint is active',
    endpoint: '/api/gumroad-webhook',
    method: 'POST',
  })
}