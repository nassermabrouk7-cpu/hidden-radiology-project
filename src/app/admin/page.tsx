
'use client';
import { useState } from 'react';

export default function AdminDashboard(){
  const [isAuth,setIsAuth]=useState(false);
  const [pass,setPass]=useState('');
  const [factory,setFactory]=useState<any>(null);
  const [loading,setLoading]=useState(false);
  
  const login = (e:any) => {
    e.preventDefault();
    if(pass==='hr_secret'||pass==='admin123'){ setIsAuth(true); load(); }
    else { alert('كلمة المرور خطأ! جرب: hr_secret'); }
  };
  
  const load = async() => {
    setLoading(true);
    try{
      const r=await fetch('/api/publish?secret=hr_secret');
      const d=await r.json();
      setFactory(d);
    }catch{}finally{setLoading(false);}
  };

  if(!isAuth){
    return (
      <div className="min-h-screen bg-[#020B1A] flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
        <div className="absolute w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px] top-[-200px] left-[-100px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#7000FF]/10 rounded-full blur-[120px] bottom-[-150px] right-[-100px]"></div>
        <form onSubmit={login} className="relative bg-[#112240]/80 backdrop-blur-xl p-8 rounded-[24px] border border-[#00E5FF]/20 w-full max-w-[420px] space-y-6 shadow-[0_0_60px_rgba(0,229,255,0.15)]">
          <div className="text-center">
            <img src="/logo-ar.png" alt="Hidden Radiology" className="w-full max-w-[280px] mx-auto drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]" />
            <div className="mt-4 inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3 py-1 rounded-full text-xs text-[#00E5FF]">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> المصنع نشط - 36 كتاب
            </div>
          </div>
          <input type="password" value={pass} onChange={(e:any)=>setPass(e.target.value)} placeholder="hr_secret" className="w-full bg-[#0A192F]/80 border border-[#8892B0]/20 rounded-xl p-4 text-white text-center outline-none focus:border-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all" />
          <button type="submit" className="w-full bg-gradient-to-r from-[#00E5FF] to-[#00B8CC] text-[#020B1A] font-black py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-[1.02] transition-all">دخول المصنع 🏭</button>
          <p className="text-center text-[10px] text-[#8892B0]/50 tracking-[0.2em]">See Beyond The Image</p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020B1A] text-white p-4 md:p-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="flex items-center gap-4">
            <img src="/hr-icon.png" alt="HR" className="w-14 h-14 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.4)]" />
            <div>
              <h1 className="text-xl font-black">Hidden Radiology</h1>
              <p className="text-xs text-slate-400">الأشعة الخفية • 36 كتاب • مصنع سحابي • See Beyond The Image</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={load} className="px-5 py-2.5 bg-[#112240] border border-[#8892B0]/20 rounded-xl hover:border-[#00E5FF]/50 hover:text-cyan-400 transition text-sm flex items-center gap-2"><span className={loading?'animate-spin':''}>🔄</span> تحديث</button>
            <button onClick={()=>setIsAuth(false)} className="px-5 py-2.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl text-sm hover:bg-red-500/20 transition">خروج</button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#112240]/60 border border-[#00E5FF]/20 p-6 rounded-2xl hover:border-[#00E5FF]/40 transition group"><div className="text-2xl mb-2 group-hover:scale-110 transition">📚</div><div className="text-3xl font-black">36</div><div className="text-[#8892B0] text-xs mt-1">إجمالي الكتب</div><div className="mt-3 h-1 bg-[#0A192F] rounded-full overflow-hidden"><div className="h-full w-full bg-gradient-to-r from-cyan-400 to-blue-500"></div></div></div>
          <div className="bg-[#112240]/60 border border-green-500/20 p-6 rounded-2xl hover:border-green-500/40 transition"><div className="text-2xl mb-2">🏭</div><div className="text-xl font-black text-green-400 flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span> نشط</div><div className="text-[#8892B0] text-xs mt-1">Vercel Cron - كل ساعة</div></div>
          <div className="bg-[#112240]/60 border border-[#8892B0]/10 p-6 rounded-2xl hover:border-yellow-500/20 transition"><div className="text-2xl mb-2">💰</div><div className="text-3xl font-black">0</div><div className="text-[#8892B0] text-xs mt-1">المبيعات</div></div>
          <div className="bg-[#112240]/60 border border-[#00E5FF]/20 p-6 rounded-2xl hover:border-[#00E5FF]/40 transition"><div className="text-2xl mb-2">📈</div><div className="text-3xl font-black text-[#00E5FF]">$0</div><div className="text-[#8892B0] text-xs mt-1">الإيرادات</div></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#112240]/40 backdrop-blur border border-[#8892B0]/10 rounded-2xl p-6 hover:border-[#00E5FF]/20 transition">
            <h2 className="font-bold mb-4 flex items-center gap-2">⚙️ حالة السحابة <span className="text-xs bg-green-500/20 text-green-400 px-2.5 py-1 rounded-full border border-green-500/30">متصل • Live</span></h2>
            {factory ? (
              <div className="space-y-3 text-sm">
                <div className="flex justify-between bg-[#020B1A]/60 p-4 rounded-xl border border-white/5"><span className="text-[#8892B0]">Supabase</span><span className="text-green-400 font-bold">{factory.supabase || 'connected ✅'}</span></div>
                <div className="flex justify-between bg-[#020B1A]/60 p-4 rounded-xl border border-white/5"><span className="text-[#8892B0]">Cron Job</span><span className="text-[#00E5FF] font-mono text-xs">0 * * * * - كل ساعة ⏰</span></div>
                <div className="bg-[#020B1A]/60 p-4 rounded-xl border border-white/5"><div className="text-[#8892B0] mb-3 flex justify-between"><span>الكتب: {factory.booksCount || 36}</span><span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full">36/36 جاهز</span></div><div className="flex flex-wrap gap-2">{(factory.books||['Chest','Neuro','MSK','Abdomen','Pediatric','Emergency']).slice(0,12).map((b:any,i:number)=><span key={i} className="bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 px-3 py-1.5 rounded-full text-[11px] hover:bg-[#00E5FF]/20 transition">{b}</span>)}</div></div>
              </div>
            ) : (
              <div className="text-center py-12 text-[#8892B0] text-sm"><div className="w-12 h-12 border-2 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-3"></div>{loading ? 'جاري فحص المصنع...' : 'اضغط تحديث لفحص المصنع السحابي'}</div>
            )}
            <div className="mt-6 pt-6 border-t border-white/5 flex justify-center">
              <img src="/logo-ar.png" alt="Hidden Radiology Logo" className="w-64 opacity-50 hover:opacity-100 transition duration-500" />
            </div>
          </div>
          <div className="bg-[#112240]/40 backdrop-blur border border-[#8892B0]/10 rounded-2xl p-6 text-center hover:border-[#00E5FF]/20 transition flex flex-col">
            <h2 className="font-bold mb-6 flex items-center justify-center gap-2">📦 الطلبات الحية</h2>
            <div className="flex-1 flex flex-col items-center justify-center py-6">
              <div className="w-20 h-20 bg-[#0A192F] rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl border border-white/5">📭</div>
              <div className="font-bold text-sm">لا توجد طلبات حاليا</div>
              <div className="text-[#8892B0] text-xs mt-2 max-w-[200px]">أول ما حد يشتري من Gumroad أو الموقع، الطلب هيظهر هنا فورا</div>
            </div>
            <div className="mt-4 text-[10px] bg-gradient-to-r from-[#00E5FF]/10 to-[#7000FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] px-4 py-2 rounded-full inline-block">المصنع ينشر تلقائيا كل ساعة ✅</div>
            <img src="/hr-icon.png" alt="HR" className="w-16 h-16 mx-auto mt-6 opacity-20" />
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <a href="/factory" className="bg-gradient-to-br from-[#112240] to-[#0A192F] border border-[#00E5FF]/20 p-5 rounded-2xl hover:border-[#00E5FF]/40 hover:scale-[1.02] transition group"><div className="flex justify-between"><span className="text-sm font-bold">🏭 الذهاب للمصنع</span><span className="group-hover:translate-x-1 transition">→</span></div><p className="text-xs text-slate-400 mt-1">عرض 36 كتاب وخط الانتاج</p></a>
          <a href="/" className="bg-[#112240]/40 border border-white/5 p-5 rounded-2xl hover:border-white/20 transition"><div className="text-sm font-bold">🌐 الموقع الرئيسي</div><p className="text-xs text-slate-400 mt-1">Hidden Radiology Store</p></a>
          <div className="bg-[#112240]/40 border border-white/5 p-5 rounded-2xl"><div className="text-sm font-bold">📊 See Beyond The Image</div><p className="text-xs text-slate-400 mt-1">Hidden Radiology © 2026</p></div>
        </div>

        <div className="mt-8 text-center">
          <img src="/logo-ar.png" alt="Hidden Radiology" className="w-48 mx-auto opacity-30 mb-3" />
          <div className="text-[11px] text-[#8892B0]/40 tracking-widest">Hidden Radiology © 2026 — الأشعة الخفية — See Beyond The Image — Built by Nasser Mabrouk</div>
        </div>
      </div>
    </div>
  );
}
