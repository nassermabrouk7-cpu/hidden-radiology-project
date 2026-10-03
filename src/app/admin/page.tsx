"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalRevenue: 0, totalOrders: 0 });

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setOrders(data);
        // حساب إجمالي الإيرادات بأمان (يتكيف مع اسم عمود السعر في جدولك)
        const revenue = data.reduce((sum, order) => {
          return sum + (Number(order.total_amount) || Number(order.amount) || Number(order.price) || 0);
        }, 0);
        setStats({ totalRevenue: revenue, totalOrders: data.length });
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A192F] text-white flex items-center justify-center">
        <p className="text-xl text-[#00E5FF]">جاري تحميل بيانات لوحة التحكم...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-[#112240] border-b border-[#1a2f4a] p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#00E5FF]">لوحة تحكم Hidden Radiology</h1>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            العودة للموقع الرئيسي ←
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#112240] p-6 rounded-xl border border-[#1a2f4a] shadow-lg">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">إجمالي الإيرادات</h3>
            <p className="text-4xl font-bold text-[#00E5FF]">${stats.totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-[#112240] p-6 rounded-xl border border-[#1a2f4a] shadow-lg">
            <h3 className="text-gray-400 text-sm font-semibold mb-2">إجمالي عدد الطلبات</h3>
            <p className="text-4xl font-bold text-green-400">{stats.totalOrders}</p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-[#112240] rounded-xl border border-[#1a2f4a] shadow-lg overflow-hidden">
          <div className="p-6 border-b border-[#1a2f4a]">
            <h2 className="text-xl font-bold">آخر الطلبات</h2>
          </div>
          
          {orders.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              <p className="text-lg mb-2">📭 لا توجد طلبات حتى الآن.</p>
              <p className="text-sm">النظام جاهز تماماً لاستقبال أول عميل!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead className="bg-[#0A192F] text-gray-400 text-sm uppercase">
                  <tr>
                    <th className="p-4">رقم الطلب</th>
                    <th className="p-4">العميل</th>
                    <th className="p-4">المنتج</th>
                    <th className="p-4">المبلغ</th>
                    <th className="p-4">التاريخ</th>
                    <th className="p-4">الحالة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a2f4a]">
                  {orders.slice(0, 10).map((order, index) => (
                    <tr key={order.id || index} className="hover:bg-[#1a2f4a]/30 transition-colors">
                      <td className="p-4 font-mono text-sm text-gray-400">
                        #{order.id ? order.id.toString().slice(-6).toUpperCase() : 'N/A'}
                      </td>
                      <td className="p-4">{order.customer_email || order.email || 'غير محدد'}</td>
                      <td className="p-4">{order.product_title || order.title || 'منتج'}</td>
                      <td className="p-4 font-bold text-[#00E5FF]">
                        ${(Number(order.total_amount) || Number(order.amount) || Number(order.price) || 0).toFixed(2)}
                      </td>
                      <td className="p-4 text-sm text-gray-400">
                        {order.created_at ? new Date(order.created_at).toLocaleDateString('ar-EG') : 'غير محدد'}
                      </td>
                      <td className="p-4">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                          {order.status || 'مكتمل'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}