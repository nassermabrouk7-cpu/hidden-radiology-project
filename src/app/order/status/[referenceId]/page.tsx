"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

export default function OrderStatusPage() {
  const params = useParams<{ referenceId: string }>();
  const searchParams = useSearchParams();

  const referenceId = params.referenceId;
  const lang = searchParams.get("lang") || "ar";
  const isRTL = lang === "ar";

  const [status, setStatus] = useState("loading");
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const token = sessionStorage.getItem(
      `hr_order_token_${referenceId}`
    );

    if (!token) {
      setStatus("unauthorized");
      return;
    }

    fetch(
      `/api/orders/status?ref=${encodeURIComponent(referenceId)}&token=${encodeURIComponent(token)}`
    )
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unauthorized");
        }

        setOrder(data.order);
        setStatus("success");
      })
      .catch(() => {
        setStatus("unauthorized");
      });
  }, [referenceId]);

  if (status === "loading") {
    return <main className="min-h-screen bg-[#060E1E] text-white flex items-center justify-center">Loading...</main>;
  }

  if (status === "unauthorized") {
    return (
      <main dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#060E1E] text-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3">
            {isRTL ? "غير مصرح بالوصول" : "Unauthorized"}
          </h1>
          <p className="text-[#8892B0]">
            {isRTL ? "تعذر التحقق من الطلب." : "Unable to verify this order."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-[#060E1E] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold mb-6">
          {isRTL ? "حالة الطلب" : "Order Status"}
        </h1>

        <p className="mb-4">
          {isRTL ? "رقم الطلب:" : "Order:"}{" "}
          <strong className="text-[#00E5FF]">{referenceId}</strong>
        </p>

        <p className="mb-4">
          {isRTL ? "الحالة:" : "Status:"}{" "}
          <strong>{order?.status}</strong>
        </p>

        {order?.delivery_available && (
          <p className="text-green-400 font-semibold">
            {isRTL ? "المنتج متاح للتنزيل." : "Your product is available for download."}
          </p>
        )}
      </div>
    </main>
  );
}
