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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hidden Radiology | مكتبة ومراجع الأشعة المتخصصة",
    description: "المنصة العربية الأولى المتخصصة في مراجع وكتب الأشعة.",
    keywords: ["كتب أشعة", "Radiology books", "أنا فاهم"],
    other: {
      'google-site-verification': 'FkjOaMGD_rFmwgEvtVQd2Grd_Av-_UlB6yIuuWt4Yx4',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="google-site-verification" content="FkjOaMGD_rFmwgEvtVQd2Grd_Av-_UlB6yIuuWt4Yx4" />
      </head>
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