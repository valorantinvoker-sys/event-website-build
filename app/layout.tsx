import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '@/app/globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'IHEC Consulting Days 2026 | 13-14 February',
  description: 'Join IHEC Consulting Days - A 48-hour consulting simulation where students tackle real business challenges. Organized by Marketing Méditerranée Tunisie at IHEC Carthage.',
  keywords: ['IHEC', 'Consulting Days', 'Tunisia', 'Business Challenge', 'Students', 'Entrepreneurship', 'Marketing Méditerranée'],
  authors: [{ name: 'Marketing Méditerranée Tunisie' }],
  openGraph: {
    title: 'IHEC Consulting Days 2026',
    description: 'A 48-hour consulting simulation for students at IHEC Carthage',
    type: 'website',
    locale: 'en_US',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#232d58',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
