import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Genie Realty | Premium Luxury Properties in Hyderabad',
  description: 'Discover exclusive luxury apartments, villas, and premium properties in Hyderabad. Genie Realty offers handpicked high-end real estate in Gachibowli, Hitech City, Kondapur, and Financial District.',
  keywords: ['luxury properties hyderabad', 'premium apartments', 'villas hyderabad', 'gachibowli properties', 'hitech city real estate', 'kondapur apartments', 'financial district homes'],
  authors: [{ name: 'Genie Realty' }],
  openGraph: {
    title: 'Genie Realty | Premium Luxury Properties in Hyderabad',
    description: 'Discover exclusive luxury apartments, villas, and premium properties in Hyderabad.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Genie Realty',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genie Realty | Premium Luxury Properties in Hyderabad',
    description: 'Discover exclusive luxury apartments, villas, and premium properties in Hyderabad.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
