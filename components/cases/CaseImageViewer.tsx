'use client'
import { useState, useRef } from 'react'
import { HiddenCase } from '@/data/cases'

export default function CaseImageViewer({ c, locale }: { c: HiddenCase, locale: 'ar' | 'en' }) {
  const [idx, setIdx] = useState(0)
  const [showAnnotated, setShowAnnotated] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [fs, setFs] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  const baseImages = c.images.filter(i => !i.isAnnotated)
  const annotated = c.images.find(i => i.isAnnotated)
  const display = showAnnotated && annotated ? annotated : baseImages[idx] || c.images[0]

  return (
    <div className={`group relative bg-black rounded-[20px] overflow-hidden border border-white/10 ${fs?'fixed inset-0 z-[100] rounded-none':''}`}>
      {/* toolbar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
        <div className="flex gap-2">
          <button onClick={()=>setZoom(z=>Math.max(1, z-0.25))} className="h-9 w-9 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white hover:bg-white/20">−</button>
          <button onClick={()=>setZoom(z=>Math.min(3, z+0.25))} className="h-9 w-9 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white hover:bg-white/20">+</button>
          <button onClick={()=>setZoom(1)} className="h-9 px-3 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white text-xs tracking-widest">RESET</button>
        </div>
        <div className="flex gap-2">
          {annotated && (
            <button onClick={()=>setShowAnnotated(!showAnnotated)} className={`h-9 px-4 rounded-full text-xs tracking-widest border transition ${showAnnotated?'bg-[#00E5FF] text-[#0A192F] border-[#00E5FF]':'bg-white/10 text-white border-white/10'}`}>
              {showAnnotated ? (locale==='ar'?'إخفاء التوضيح':'HIDE REVEAL') : (locale==='ar'?'إظهار العلامة':'REVEAL FINDING')}
            </button>
          )}
          <button onClick={()=>setFs(!fs)} className="h-9 w-9 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white">⛶</button>
        </div>
      </div>

      <div ref={imgRef} className="w-full h-[560px] lg:h-[720px] flex items-center justify-center bg-[#050A14] overflow-auto">
        {/* In real project replace with next/image - using img to avoid build error without files */}
        <div style={{transform:`scale(${zoom})`, transition:'transform 0.3s'}} className="origin-center">
          <img src={display.src} alt={locale==='ar'?display.altAr:display.altEn} className="max-h-[680px] w-auto object-contain select-none" draggable={false} onError={e=>{ (e.target as HTMLImageElement).src='https://placehold.co/800x600/0A192F/00E5FF?text=Hidden+Radiology+Image' }} />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
        <p className="text-[13px] text-white/60 max-w-xl">{locale==='ar'? (display.captionAr||'') : (display.captionEn||'')}</p>
        {baseImages.length>1 && (
          <div className="flex gap-2">
            {baseImages.map((_,i)=>(
              <button key={i} onClick={()=>{setIdx(i); setShowAnnotated(false)}} className={`h-2 w-6 rounded-full transition ${i===idx && !showAnnotated?'bg-[#00E5FF]':'bg-white/30'}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
