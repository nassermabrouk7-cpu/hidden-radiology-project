import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("خطأ في جلب الطلبات:", error);
      return NextResponse.json({ error: "فشل في جلب الطلبات" }, { status: 500 });
    }

    return NextResponse.json({ success: true, orders: orders || [] });
  } catch (error) {
    console.error("خطأ في API:", error);
    return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 });
  }
}