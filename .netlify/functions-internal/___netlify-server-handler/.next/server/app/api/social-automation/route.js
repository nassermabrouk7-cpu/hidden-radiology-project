"use strict";(()=>{var e={};e.id=502,e.ids=[502],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2013:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>h,patchFetch:()=>f,requestAsyncStorage:()=>m,routeModule:()=>p,serverHooks:()=>g,staticGenerationAsyncStorage:()=>d});var r={};o.r(r),o.d(r,{GET:()=>l,POST:()=>c});var a=o(9303),n=o(8716),s=o(670),i=o(7070);let u={twitter:{name:"X/Twitter",apiEndpoint:"https://api.twitter.com/2/tweets",maxLength:280},facebook:{name:"Facebook",apiEndpoint:"https://graph.facebook.com/v18.0/me/feed",maxLength:63206},linkedin:{name:"LinkedIn",apiEndpoint:"https://api.linkedin.com/v2/ugcPosts",maxLength:3e3},telegram:{name:"Telegram",apiEndpoint:`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,maxLength:4096}};async function c(e){try{if(!function(e){let t=e.headers.get("x-webhook-signature"),o=process.env.WEBHOOK_SECRET;return!!t&&!!o&&t===o}(e))return i.NextResponse.json({error:"Invalid webhook signature"},{status:401});let t=await e.json(),o=t.trigger;if(!o||!o.type||!o.productId||!o.productName)return i.NextResponse.json({error:"Invalid trigger data"},{status:400});let r=t.platforms||["twitter","facebook","linkedin","telegram"],a={};for(let e of r)try{let t=function(e,t){let{type:o,productName:r,milestone:a,locale:n}=e,s="ar"===n,i=process.env.NEXT_PUBLIC_BASE_URL||"https://hiddenradiology.com",u=r.toLowerCase().replace(/\s+/g,"-"),c=function(e,t,o,r,a){let n=new URL(e);return n.searchParams.set("utm_source",t),n.searchParams.set("utm_medium",o),n.searchParams.set("utm_campaign",r),a&&n.searchParams.set("utm_content",a),n.toString()}(`${i}/${n}/products/${u}`,"auto_promo","social","new_release"===o?"book_launch":"sales_milestone",t);if("new_release"===o)return s?`🎉 إصدار جديد: ${r}

انضم إلينا في رحلة تعلم الأشعة الطبية مع أحدث إصداراتنا.

📚 احصل على نسختك الآن: ${c}

#الأشعة_الخفية #تعليم_طبي #radiology`:`🎉 New Release: ${r}

Join us on a journey of learning medical imaging with our latest releases.

📚 Get your copy now: ${c}

#HiddenRadiology #MedicalEducation #radiology`;if("sales_milestone"===o){let e=s?`وصلنا إلى ${a} نسخة مباعة!`:`We've reached ${a} copies sold!`;return s?`🏆 ${e}

شكراً لثقتكم! ${r} يستمر في إلهام المتعلمين حول العالم.

📚 انضم إلى الناجحين: ${c}

#الأشعة_الخفية #إنجاز #radiology`:`🏆 ${e}

Thank you for your trust! ${r} continues to inspire learners worldwide.

📚 Join the successful ones: ${c}

#HiddenRadiology #Achievement #radiology`}return s?`اكتشف المزيد مع ${r}: ${c}`:`Discover more with ${r}: ${c}`}(o,e),r=function(e,t){let o=u[t];return e.length>o.maxLength?e.substring(0,o.maxLength-3)+"...":e}(t,e);console.log(`[${u[e].name}] Post:`,r),a[e]={success:!0}}catch(t){console.error(`Error posting to ${u[e].name}:`,t),a[e]={success:!1,error:t instanceof Error?t.message:"Unknown error"}}return console.log("Social automation completed:",{trigger:o,platforms:r,results:a}),i.NextResponse.json({success:!0,message:"Social automation processed",trigger:o,results:a})}catch(e){return console.error("Social automation error:",e),i.NextResponse.json({error:"Internal server error"},{status:500})}}async function l(){return i.NextResponse.json({message:"Social automation endpoint is active",endpoint:"/api/social-automation",method:"POST",platforms:Object.keys(u),triggerTypes:["new_release","sales_milestone","manual"]})}let p=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/social-automation/route",pathname:"/api/social-automation",filename:"route",bundlePath:"app/api/social-automation/route"},resolvedPagePath:"E:\\hidden-radiology-v2\\app\\api\\social-automation\\route.ts",nextConfigOutput:"standalone",userland:r}),{requestAsyncStorage:m,staticGenerationAsyncStorage:d,serverHooks:g}=p,h="/api/social-automation/route";function f(){return(0,s.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:d})}}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[948,972],()=>o(2013));module.exports=r})();