import { createClient } from "@supabase/supabase-js";
import { createHash } from "crypto";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function hashAccessToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const referenceId = searchParams.get("ref");
    const accessToken = searchParams.get("token");

    if (!referenceId || !/^HR-\d{6}$/.test(referenceId)) {
      return NextResponse.json(
        { error: "طلب غير صالح" },
        { status: 400 }
      );
    }

    if (!accessToken || accessToken.length < 32) {
      return NextResponse.json(
        { error: "غير مصرح" },
        { status: 401 }
      );
    }

    const accessTokenHash = hashAccessToken(accessToken);

    const { data: order, error } = await supabase
      .from("orders")
      .select(
        "id, reference_id, status, total_amount, payment_method, language, delivery_available, fulfillment_status, created_at, confirmed_at"
      )
      .eq("reference_id", referenceId)
      .eq("access_token_hash", accessTokenHash)
      .maybeSingle();

    if (error) {
      console.error("Order status error:", error);

      return NextResponse.json(
        { error: "تعذر قراءة حالة الطلب" },
        { status: 500 }
      );
    }

    if (!order) {
      return NextResponse.json(
        { error: "غير مصرح" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      order
    });
  } catch (error) {
    console.error("Order status API error:", error);

    return NextResponse.json(
      { error: "خطأ داخلي في الخادم" },
      { status: 500 }
    );
  }
}
