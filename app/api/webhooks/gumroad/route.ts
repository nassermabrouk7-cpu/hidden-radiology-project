import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const data = new URLSearchParams(body)

    const sale = {
      saleId: data.get('sale_id'),
      email: data.get('email'),
      productName: data.get('product_name'),
      productPermalink: data.get('product_permalink'),
      price: data.get('price'),
      currency: data.get('currency'),
      test: data.get('test'),
    }

    console.log('=== GUMROAD SALE RECEIVED ===')
    console.log(sale)

    return NextResponse.json({
      received: true,
      sale,
    })
  } catch (error) {
    console.error('Gumroad webhook error:', error)

    return NextResponse.json(
      { received: false },
      { status: 500 }
    )
  }
}
