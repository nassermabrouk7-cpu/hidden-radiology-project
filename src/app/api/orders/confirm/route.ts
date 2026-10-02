import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { referenceId } = body;

    if (!referenceId) {
      return NextResponse.json({ error: "Order reference is required" }, { status: 400 });
    }

    // 1. جلب بيانات الطلب
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("reference_id", referenceId)
      .single();

    if (orderError || !order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // 2. جلب بيانات المنتج (بما فيه رابط الـ PDF)
    let pdfUrl = "";
    let productTitle = "";
    let productLanguage = "en";

    if (order.product_id) {
      const { data: product } = await supabase
        .from("products")
        .select("*")
        .eq("id", order.product_id)
        .single();

      if (product) {
        pdfUrl = product.pdf_url || "";
        productTitle = product.language === 'ar' ? product.title_ar : product.title_en;
        productLanguage = product.language || "en";
      }
    }

    // 3. تحديث حالة الطلب
    const { data: updatedOrder, error: updateError } = await supabase
      .from("orders")
      .update({ 
        status: "confirmed",
        pdf_url: pdfUrl,
        confirmed_at: new Date().toISOString()
      })
      .eq("reference_id", referenceId)
      .select()
      .single();

    if (updateError) {
      console.error("Error updating order:", updateError);
      return NextResponse.json({ error: "Failed to confirm order" }, { status: 500 });
    }

    // 4. إرسال إيميل التأكيد (المرحلة 2)
    if (order.customer_email && pdfUrl) {
      try {
        const isArabic = productLanguage === 'ar';
        
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: order.customer_email,
          subject: isArabic 
            ? `✅ تأكيد طلبك - ${productTitle}` 
            : `✅ Order Confirmed - ${productTitle}`,
          html: isArabic ? `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A192F; color: white; padding: 40px; border-radius: 20px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #00E5FF; font-size: 28px;">🎉 تم تأكيد طلبك بنجاح!</h1>
              </div>
              <div style="background: #112240; padding: 25px; border-radius: 15px; margin-bottom: 20px;">
                <p style="font-size: 18px; margin-bottom: 15px;">مرحباً <strong>${order.customer_name}</strong>،</p>
                <p style="margin-bottom: 15px;">شكراً لثقتك في <strong>Hidden Radiology</strong>!</p>
                <p style="margin-bottom: 15px;">تم تأكيد دفعتك بنجاح، وكتابك جاهز للتحميل:</p>
                <h2 style="color: #00E5FF; font-size: 22px; margin: 20px 0;">${productTitle}</h2>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${pdfUrl}" style="display: inline-block; background: #00E5FF; color: #0A192F; padding: 15px 40px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px;">📥 تحميل الكتاب الآن</a>
                </div>
                <p style="color: #8892B0; font-size: 14px; margin-top: 20px;">رقم طلبك المرجعي: <strong style="color: #00E5FF;">${referenceId}</strong></p>
              </div>
              <div style="text-align: center; color: #8892B0; font-size: 12px; margin-top: 20px;">
                <p>Hidden Radiology - جودة وسلامة الأشعة</p>
              </div>
            </div>
          ` : `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A192F; color: white; padding: 40px; border-radius: 20px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #00E5FF; font-size: 28px;">🎉 Order Confirmed Successfully!</h1>
              </div>
              <div style="background: #112240; padding: 25px; border-radius: 15px; margin-bottom: 20px;">
                <p style="font-size: 18px; margin-bottom: 15px;">Hello <strong>${order.customer_name}</strong>,</p>
                <p style="margin-bottom: 15px;">Thank you for trusting <strong>Hidden Radiology</strong>!</p>
                <p style="margin-bottom: 15px;">Your payment has been confirmed and your book is ready to download:</p>
                <h2 style="color: #00E5FF; font-size: 22px; margin: 20px 0;">${productTitle}</h2>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${pdfUrl}" style="display: inline-block; background: #00E5FF; color: #0A192F; padding: 15px 40px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px;">📥 Download Book Now</a>
                </div>
                <p style="color: #8892B0; font-size: 14px; margin-top: 20px;">Your order reference: <strong style="color: #00E5FF;">${referenceId}</strong></p>
              </div>
              <div style="text-align: center; color: #8892B0; font-size: 12px; margin-top: 20px;">
                <p>Hidden Radiology - Quality & Safety in Radiology</p>
              </div>
            </div>
          `
        });
        
        console.log("✅ Email sent successfully to:", order.customer_email);
      } catch (emailError) {
        console.error("⚠️ Email sending failed (order still confirmed):", emailError);
        // لا نوقف العملية إذا فشل الإيميل
      }
    }

    return NextResponse.json({ 
      success: true, 
      order: updatedOrder,
      emailSent: order.customer_email && pdfUrl ? true : false
    });
  } catch (error) {
    console.error("Error in confirm API:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}