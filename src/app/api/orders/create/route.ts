import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { referenceId, customerName, customerEmail, customerPhone, items, paymentMethod, language } = body;

    if (!customerName || !customerEmail || !customerPhone || !items || items.length === 0) {
      return NextResponse.json({ error: 'بيانات غير مكتملة' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      return NextResponse.json({ error: 'بريد إلكتروني غير صالح' }, { status: 400 });
    }

    let totalAmount = 0;
    const validatedItems = [];

    for (const item of items) {
      const { data: product, error } = await supabase
        .from('products')
        .select('id, title_ar, title_en, price, language')
        .eq('id', item.id)
        .single();

      if (error || !product) {
        return NextResponse.json({ error: `منتج غير موجود: ${item.id}` }, { status: 404 });
      }

      const realPrice = product.price;
      totalAmount += realPrice * (item.quantity || 1);

      validatedItems.push({
        product_id: product.id,
        title_ar: product.title_ar,
        title_en: product.title_en,
        price: realPrice,
        quantity: item.quantity || 1,
        language: product.language
      });
    }

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
        status: paymentMethod === 'gumroad' ? 'pending_payment' : 'pending_verification'
      })
      .select()
      .single();

    if (insertError) {
      console.error('خطأ في إنشاء الطلب:', insertError);
      return NextResponse.json({ error: 'فشل في إنشاء الطلب' }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      referenceId, 
      totalAmount,
      order: data 
    });

  } catch (error) {
    console.error('خطأ في API:', error);
    return NextResponse.json({ error: 'خطأ داخلي في الخادم' }, { status: 500 });
  }
}
