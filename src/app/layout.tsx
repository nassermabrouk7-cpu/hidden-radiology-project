import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Script from "next/script";
import "./globals.css";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Hidden Radiology | مكتبة ومراجع الأشعة المتخصصة",
  description: "المنصة العربية الأولى المتخصصة في مراجع وكتب الأشعة. سلسلة أنا فاهم، دليل تموضع المريض، وأكثر من 36 مرجعاً متخصصاً للأطباء وفنيي الأشعة.",
  keywords: ["كتب أشعة", "مراجع أشعة", "Radiology books", "أنا فاهم أشعة", "دليل تموضع المريض", "Radiology positioning", "أشعة مقطعية", "رنين مغناطيسي"],
  authors: [{ name: "د. ناصر مبروك", url: "https://hidden-radiology-project.vercel.app" }],
  other: {
    'google-site-verification': 'FkjOaMGD_rFmwgEvtVQd2Grd_Av-_UlB6yIuuWt4Yx4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>
        {/* كود تتبع جوجل أناليتكس */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EVPNCWLQVR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVPNCWLQVR');
          `}
        </Script>

        <LanguageProvider>
          <CartProvider>
            {children}
            <CartDrawer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}