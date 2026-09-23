import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()

    console.log('=== GUMROAD WEBHOOK RECEIVED ===')
    console.log(body)

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Gumroad webhook error:', error)

    return NextResponse.json(
      { received: false },
      { status: 500 }
    )
  }
}
