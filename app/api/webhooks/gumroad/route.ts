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

    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (sheetsWebhookUrl) {
      try {
        const response = await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            saleId: sale.saleId ?? '',
            email: sale.email ?? '',
            productName: sale.productName ?? '',
            productPermalink: sale.productPermalink ?? '',
            price: sale.price ?? '',
            currency: sale.currency ?? '',
            test: sale.test ?? '',
          }).toString(),
        })

        if (!response.ok) {
          console.error(
            'Google Sheets webhook failed:',
            response.status,
            await response.text()
          )
        } else {
          console.log('=== SALE SENT TO GOOGLE SHEETS ===')
        }
      } catch (error) {
        console.error('Google Sheets webhook error:', error)
      }
    } else {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not configured')
    }

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
