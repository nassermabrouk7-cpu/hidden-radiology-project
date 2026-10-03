import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
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
  verification: {
    google: 'FkjOaMGD_rFmwgEvtVQd2Grd_Av-_UlB6yIuuWt4Yx4',
  },
  openGraph: {
    title: "Hidden Radiology | مكتبة ومراجع الأشعة المتخصصة",
    description: "أكثر من 36 مرجعاً وكتاباً متخصصاً في مجال الأشعة والجودة.",
    url: "https://hidden-radiology-project-chi.vercel.app",
    siteName: "Hidden Radiology",
    locale: "ar_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hidden Radiology | مكتبة ومراجع الأشعة المتخصصة",
    description: "أكثر من 36 مرجعاً وكتاباً متخصصاً في مجال الأشعة والجودة.",
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