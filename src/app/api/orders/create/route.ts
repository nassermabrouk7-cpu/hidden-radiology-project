import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { createHash, randomBytes } from 'crypto';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function hashAccessToken(token: string) {
  return createHash('sha256').update(token).digest('hex');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      referenceId,
      customerName,
      customerEmail,
      customerPhone,
      items,
      paymentMethod,
      language
    } = body;

    if (
      !customerName ||
      !customerEmail ||
      !customerPhone ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return NextResponse.json(
        { error: 'بيانات غير مكتملة' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(customerEmail)) {
      return NextResponse.json(
        { error: 'بريد إلكتروني غير صالح' },
        { status: 400 }
      );
    }

    if (!referenceId || !/^HR-\d{6}$/.test(referenceId)) {
      return NextResponse.json(
        { error: 'رقم طلب غير صالح' },
        { status: 400 }
      );
    }

    // Prevent accidental duplicate reference IDs.
    const { data: existingOrder } = await supabase
      .from('orders')
      .select('id')
      .eq('reference_id', referenceId)
      .maybeSingle();

    if (existingOrder) {
      return NextResponse.json(
        { error: 'رقم الطلب مستخدم بالفعل' },
        { status: 409 }
      );
    }

    let totalAmount = 0;
    const validatedItems = [];

    for (const item of items) {
      if (!item?.id) {
        return NextResponse.json(
          { error: 'منتج غير صالح' },
          { status: 400 }
        );
      }

      const quantity = Math.max(
        1,
        Math.min(99, Number(item.quantity) || 1)
      );

      const { data: product, error } = await supabase
        .from('products')
        .select('id, title_ar, title_en, price, language')
        .eq('id', item.id)
        .single();

      if (error || !product) {
        return NextResponse.json(
          { error: `منتج غير موجود: ${item.id}` },
          { status: 404 }
        );
      }

      const realPrice = Number(product.price);

      if (!Number.isFinite(realPrice) || realPrice < 0) {
        return NextResponse.json(
          { error: `سعر غير صالح للمنتج: ${item.id}` },
          { status: 500 }
        );
      }

      totalAmount += realPrice * quantity;

      validatedItems.push({
        product_id: product.id,
        title_ar: product.title_ar,
        title_en: product.title_en,
        price: realPrice,
        quantity,
        language: product.language
      });
    }

    // The access token is generated only on the server.
    // Only its SHA-256 hash is stored in the database.
    const accessToken = randomBytes(32).toString('hex');
    const accessTokenHash = hashAccessToken(accessToken);

    const { data, error: insertError } = await supabase
      .from('orders')
      .insert({
        reference_id: referenceId,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        items: validatedItems,
        total_amount: totalAmount,
        payment_method: paymentMethod,
        language: language,
        access_token_hash: accessTokenHash,
        status:
          paymentMethod === 'gumroad'
            ? 'pending_payment'
            : 'pending_verification'
      })
      .select(
        'id, reference_id, status, total_amount, payment_method, language, created_at'
      )
      .single();

    if (insertError) {
      console.error('خطأ في إنشاء الطلب:', insertError);

      return NextResponse.json(
        { error: 'فشل في إنشاء الطلب' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      referenceId,
      totalAmount,
      accessToken,
      order: data
    });
  } catch (error) {
    console.error('خطأ في API:', error);

    return NextResponse.json(
      { error: 'خطأ داخلي في الخادم' },
      { status: 500 }
    );
  }
}