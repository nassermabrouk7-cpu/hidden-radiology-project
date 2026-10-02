import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { referenceId, productId, customerName, customerEmail, paymentMethod, amount } = body;

    // التحقق من البيانات المطلوبة
    if (!referenceId || !customerName || !customerEmail || !paymentMethod) {
      return NextResponse.json(
        { error: "بيانات غير مكتملة" },
        { status: 400 }
      );
    }

    // إدخال الطلب في قاعدة البيانات
    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          reference_id: referenceId,
          product_id: productId,
          customer_name: customerName,
          customer_email: customerEmail,
          payment_method: paymentMethod,
          amount: amount,
          status: "pending"
        }
      ])
      .select()
      .single();

    if (error) {
      console.error("خطأ في حفظ الطلب:", error);
      return NextResponse.json(
        { error: "فشل في حفظ الطلب" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, order: data });
  } catch (error) {
    console.error("خطأ في API:", error);
    return NextResponse.json(
      { error: "خطأ في الخادم" },
      { status: 500 }
    );
  }
}