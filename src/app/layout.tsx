import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Hidden Radiology | مكتبة ومراجع الأشعة المتخصصة",
  description: "المنصة العربية الأولى المتخصصة في مراجع وكتب الأشعة.",
  keywords: ["كتب أشعة", "مراجع أشعة", "Radiology books"],
  authors: [{ name: "د. ناصر مبروك", url: "https://hidden-radiology-project.vercel.app" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.variable}>
        <GoogleAnalytics />
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