'use client';
import { useState } from 'react';

export default function AdminPage(){
  const [auth,setAuth]=useState(false);
  const [pass,setPass]=useState('');
  const [data,setData]=useState<any>(null);

  const login=(e:any)=>{
    e.preventDefault();
    if(pass==='hr_secret'||pass==='admin123'){ setAuth(true); load(); }
    else alert('الباسورد: hr_secret');
  };
  const load=async()=>{
    try{
      const r=await fetch('/api/publish?secret=hr_secret');
      const d=await r.json();
      setData(d);
    }catch{}
  };

  if(!auth){
    return (
      <div className="min-h-screen bg-[#020B1A] flex items-center justify-center p-4" dir="rtl">
        <form onSubmit={login} className="bg-[#112240] p-8 rounded-2xl border border-cyan-500/20 w-full max-w-sm space-y-6 text-center">
          <h1 className="text-xl font-bold text-white">Hidden Radiology</h1>
          <p className="text-xs text-slate-400">الأشعة الخفية - 36 كتاب</p>
          <input type="password" value={pass} onChange={(e:any)=>setPass(e.target.value)} placeholder="hr_secret" className="w-full bg-[#020B1A] border border-slate-700 rounded-xl p-3 text-white text-center outline-none focus:border-cyan-400"/>
          <button className="w-full bg-cyan-400 text-black font-bold py-3 rounded-xl">دخول المصنع 🏭</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020B1A] text-white p-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black">🏭 مصنع Hidden Radiology - 36 كتاب</h1>
          <button onClick={()=>setAuth(false)} className="text-sm bg-red-500/10 text-red-400 px-3 py-1 rounded-lg">خروج</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#112240] p-5 rounded-xl"><div className="text-2xl">📚</div><div className="text-2xl font-bold">36</div><div className="text-xs text-slate-400">كتاب</div></div>
          <div className="bg-[#112240] p-5 rounded-xl border border-green-500/20"><div className="text-2xl">🏭</div><div className="text-lg font-bold text-green-400">نشط ✅</div></div>
          <div className="bg-[#112240] p-5 rounded-xl"><div className="text-2xl">💰</div><div className="text-2xl font-bold">0</div><div className="text-xs text-slate-400">مبيعات</div></div>
          <div className="bg-[#112240] p-5 rounded-xl"><div className="text-2xl">📈</div><div className="text-2xl font-bold text-cyan-400">$0</div></div>
        </div>
        <div className="bg-[#112240] p-5 rounded-xl">
          <h2 className="font-bold mb-3">حالة المصنع</h2>
          <button onClick={load} className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-lg text-sm mb-3">فحص 🔄</button>
          {data && <pre className="bg-black/30 p-3 rounded-lg text-xs overflow-auto">{JSON.stringify(data,null,2)}</pre>}
        </div>
      </div>
    </div>
  );
}
