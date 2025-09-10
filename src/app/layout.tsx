import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'  // Updated path to styles folder

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080a0c',
}

export const metadata: Metadata = {
  title: 'uru.zone — strength, reinvented',
  description: 'URU.zone — AI coaching + strength wearable. real-time feedback. velocity-based training. every rep measured. every set optimised.',
  keywords: ['strength training', 'wearable', 'AI coaching', 'velocity based training', 'fitness tracker'],
  authors: [{ name: 'URU.zone' }],
  openGraph: {
    title: 'uru.zone — strength, reinvented',
    description: 'AI coaching + strength wearable. real-time feedback. velocity-based training.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'uru.zone — strength, reinvented',
    description: 'AI coaching + strength wearable. real-time feedback. velocity-based training.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}