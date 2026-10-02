"use server";

import { createClient } from "@supabase/supabase-js";
import { generateCover } from "@/lib/cover-generator"; // <--- هذا هو السطر المفقود الذي يحل المشكلة
import { PDFDocument } from "@/lib/pdf-generator";
import { renderToBuffer } from "@react-pdf/renderer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function generateAndPublish(formData: FormData) {
  try {
    const titleAr = formData.get("title_ar") as string;
    const titleEn = formData.get("title_en") as string;
    const subtitleAr = formData.get("subtitle_ar") as string;
    const subtitleEn = formData.get("subtitle_en") as string;
    const category = formData.get("category") as string;
    const price = parseFloat(formData.get("price") as string) || 9.99;

    console.log("🚀 بدء عملية التوليد للكتاب:", titleEn);
    console.log("🎨 الخطوة 1: توليد الغلاف...");

    // 1. توليد الغلاف
    const coverBuffer = await generateCover({
      title_ar: titleAr,
      title_en: titleEn,
      subtitle_ar: subtitleAr,
      subtitle_en: subtitleEn,
    });
    console.log("✅ الخطوة 1 اكتملت: تم توليد الغلاف بنجاح");

    // 2. رفع الغلاف إلى Supabase Storage
    console.log("📤 الخطوة 2: رفع الغلاف إلى Supabase...");
    const coverFileName = `cover-${Date.now()}.png`;
    const { data: coverData, error: coverError } = await supabase.storage
      .from("covers")
      .upload(coverFileName, coverBuffer, {
        contentType: "image/png",
        cacheControl: "3600",
        upsert: false,
      });

    if (coverError) {
      console.error("❌ خطأ في رفع الغلاف:", coverError);
      throw new Error("فشل في رفع الغلاف: " + coverError.message);
    }
    console.log("✅ الخطوة 2 اكتملت: تم رفع الغلاف");

    const { data: coverUrlData } = supabase.storage
      .from("covers")
      .getPublicUrl(coverFileName);
    const coverUrl = coverUrlData.publicUrl;

    // 3. توليد ملف PDF
    console.log("📄 الخطوة 3: توليد ملف PDF...");
    const pdfBuffer = await renderToBuffer(
      <PDFDocument
        data={{
          title_ar: titleAr,
          title_en: titleEn,
          subtitle_ar: subtitleAr,
          subtitle_en: subtitleEn,
        }}
      />
    );
    console.log("✅ الخطوة 3 اكتملت: تم توليد PDF");

    // 4. رفع PDF إلى Supabase Storage
    console.log("📤 الخطوة 4: رفع PDF إلى Supabase...");
    const pdfFileName = `book-${Date.now()}.pdf`;
    const { data: pdfData, error: pdfError } = await supabase.storage
      .from("pdfs")
      .upload(pdfFileName, pdfBuffer, {
        contentType: "application/pdf",
        cacheControl: "3600",
        upsert: false,
      });

    if (pdfError) {
      console.error("❌ خطأ في رفع PDF:", pdfError);
      throw new Error("فشل في رفع PDF: " + pdfError.message);
    }
    console.log("✅ الخطوة 4 اكتملت: تم رفع PDF");

    const { data: pdfUrlData } = supabase.storage
      .from("pdfs")
      .getPublicUrl(pdfFileName);
    const pdfUrl = pdfUrlData.publicUrl;

    // 5. حفظ المنتج في قاعدة البيانات
    console.log("💾 الخطوة 5: حفظ المنتج في قاعدة البيانات...");
    const { data: product, error: insertError } = await supabase
      .from("products")
      .insert([
        {
          title_ar: titleAr,
          title_en: titleEn,
          subtitle_ar: subtitleAr,
          subtitle_en: subtitleEn,
          category: category,
          price: price,
          cover_url: coverUrl,
          pdf_url: pdfUrl,
          language: "ar",
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("❌ خطأ في حفظ المنتج:", insertError);
      throw new Error("فشل في حفظ المنتج: " + insertError.message);
    }
    console.log("✅ الخطوة 5 اكتملت: تم حفظ المنتج");
    console.log("🎉 تم نشر المنتج بنجاح:", product.id);

    return {
      success: true,
      product: product,
      coverUrl: coverUrl,
      pdfUrl: pdfUrl,
    };
  } catch (error: any) {
    console.error("❌ خطأ في المصنع:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}