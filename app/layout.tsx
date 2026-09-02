import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hiddenradiology.com'),
  title: 'Hidden Radiology | الأشعة الخفية',
  description: 'Professional educational content in radiology - 30 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="font-cairo antialiased">
        {children}
      </body>
    </html>
  )
}

