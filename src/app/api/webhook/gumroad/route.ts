import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const eventName = formData.get('event_name');

    if (eventName !== 'sale') {
      return NextResponse.json({ success: true });
    }

    const saleData = {
      id: formData.get('id'),
      email: formData.get('email'),
      product_name: formData.get('product_name'),
      price: formData.get('price'),
    };

    console.log('Gumroad Sale:', saleData);

    const { data: order, error } = await supabase
      .from('orders')
      .select('*')
      .eq('customer_email', saleData.email)
      .eq('payment_method', 'gumroad')
      .eq('status', 'pending_payment')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !order) {
      console.log('لم يتم العثور على طلب مطابق');
      return NextResponse.json({ success: true });
    }

    await supabase
      .from('orders')
      .update({ 
        status: 'completed',
        gumroad_sale_id: saleData.id,
        completed_at: new Date().toISOString()
      })
      .eq('id', order.id);

    console.log('تم تحديث الطلب بنجاح');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('خطأ في Webhook:', error);
    return NextResponse.json({ success: true });
  }
}
